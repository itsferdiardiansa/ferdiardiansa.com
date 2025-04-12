import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'
import dayjs from 'dayjs'
import {DateTimeInput} from '@/components/DateTimeInput'
import {slugifyWithUniqueness} from '@/utils/uniquenessSlugify'

const isPostPublished = (date: string) => +new Date() >= +new Date(date)

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(5)
          .custom((value) => {
            const trimmed = value?.trim() || ''

            if (trimmed.length < 5) {
              return 'Title must be at least 5 characters.'
            }
            const isValid = /^[a-zA-Z0-9/\s]+$/.test(trimmed)
            if (!isValid) {
              return 'Title may only contain letters, numbers, and spaces.'
            }
            return true
          }),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      readOnly: ({document}) =>
        Boolean(document?.isPublished && isPostPublished(document?.publishedAt as string)),
      description: 'Slug cannot be changed when the post is published.',
      options: {
        source: 'title',
        slugify: (input, _, context) => {
          return slugifyWithUniqueness(input, context, {type: 'post'})
        },
      },
      validation: (Rule) =>
        Rule.required().custom((slug, context) => {
          const {document} = context
          const title = String(document?.title || '')

          if (title.length < 5) {
            return 'Title must be at least 5 characters.'
          }

          if (!/^[a-z0-9-]+$/.test(slug?.current || '')) {
            return 'Slug may only contain lowercase letters, numbers, and hyphens (-).'
          }

          return true
        }),
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {
        type: 'author',
      },
      options: {
        disableNew: true,
      },
    }),
    defineField({
      name: 'seo',
      type: 'meta',
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
    defineField({
      name: 'isFeatured',
      type: 'boolean',
      title: 'Featured Post',
      description:
        'Toggle this to highlight the post as featured on the homepage or in promotional sections. Use this to boost visibility for key content pieces.',
      initialValue: false,
    }),
    defineField({
      name: 'workflowStatus',
      type: 'string',
      title: 'Workflow Status',
      description:
        'Indicates the current editorial state of this post. Use this field to coordinate the publishing workflow between team members. "Scheduled" requires a publish date. "Published" means it’s live. "In Review" is pending approval.',
      options: {
        list: [
          {title: 'Draft', value: 'draft'},
          {title: 'In Review', value: 'inReview'},
          {title: 'Scheduled', value: 'scheduled'},
          {title: 'Published', value: 'published'},
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const publishedAt = context.document?.publishedAt
          if (value === 'scheduled' && !publishedAt) {
            return 'Scheduled posts must have a publish date.'
          }
          return true
        }),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      description: 'Set a future date/time to schedule this post.',
      components: {
        input: DateTimeInput,
      },
      hidden: ({document}) => document?.workflowStatus !== 'scheduled',
      validation: (Rule) => {
        const minDate = dayjs().add(1, 'day')

        return Rule.required()
          .min(minDate.toISOString())
          .error('Must be start at ' + minDate.format('DD MMM YYYY - HH:mm'))
          .custom((date, context) => {
            if (context.document?.workflowStatus === 'scheduled' && !date) {
              return 'Scheduled posts must have a publish date.'
            }
            return true
          })
      },
    }),
    defineField({
      name: 'isPublished',
      type: 'boolean',
      initialValue: false,
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
