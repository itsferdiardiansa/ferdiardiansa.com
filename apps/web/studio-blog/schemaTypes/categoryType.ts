import {slugifyWithUniqueness} from '@/utils/uniquenessSlugify'
import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Title must be letters and spaces only.',
      validation: (Rule) =>
        Rule.required().custom((value) => {
          const trimmed = value?.trim() || ''
          const isValid = /^[a-zA-Z/\s]+$/.test(trimmed)

          if (!isValid) {
            return 'Category title may only contain letters and spaces.'
          }

          return true
        }),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input, _, context) => {
          return slugifyWithUniqueness(input, context, {type: 'category'})
        },
      },
      validation: (Rule) => {
        return Rule.required().custom((slug, context) => {
          const {document} = context
          const title = String(document?.title || '')

          if (document?.isPublished) return true

          if (!title.length) {
            return 'Title must be set first.'
          }

          if (!/^[a-z0-9-]+$/.test(slug?.current || '')) {
            return 'Slug may only contain lowercase letters, numbers, and hyphens (-).'
          }

          return true
        })
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})
