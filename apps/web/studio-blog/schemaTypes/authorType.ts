import { UserIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { slugifyWithUniqueness } from '@/utils/uniquenessSlugify'

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      description: 'Use letters, numbers and spaces.',
      validation: Rule =>
        Rule.required()
          .min(5)
          .custom(value => {
            const trimmed = value?.trim() || ''
            const isValid = /^[a-zA-Z0-9\s]+$/.test(trimmed)

            if (trimmed.length < 5) {
              return 'Name must be at least 5 characters.'
            }

            if (!isValid) {
              return 'Name may only contain letters, numbers, and spaces.'
            }
            return true
          }),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      readOnly: ({ document }) => Boolean(document?.isPublished),
      description: 'Slug cannot be changed when the author is published.',
      options: {
        source: 'name',
        slugify: (input, _, context) => {
          return slugifyWithUniqueness(input, context, { type: 'author' })
        },
      },
      validation: Rule => {
        return Rule.required().custom((slug, context) => {
          const { document } = context
          const name = String(document?.name || '')

          if (document?.isPublished) return true

          if (!name.length) {
            return 'Name must be set first and min 5 chars.'
          }

          if (!/^[a-z0-9-]+$/.test(slug?.current || '')) {
            return 'Slug may only contain lowercase letters, numbers, and hyphens (-).'
          }

          return true
        })
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
      description: 'Author avatar (optional).',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      type: 'array',
      description: 'About me (optional).',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        }),
      ],
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
      title: 'name',
      media: 'image',
    },
  },
})
