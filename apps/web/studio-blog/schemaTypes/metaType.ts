import {defineField, defineType} from 'sanity'

export const metaType = defineType({
  name: 'meta',
  type: 'object',
  fieldsets: [
    {
      name: 'seo',
      title: 'Meta',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Meta Title',
      type: 'string',
      fieldset: 'seo',
      description: 'Title used in meta tags and search engine previews.',
      validation: (Rule) => Rule.max(60).warning('SEO titles should be under 60 characters.'),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      fieldset: 'seo',
      rows: 3,
      description: 'Used in search results. Ideally 155 characters or less.',
      validation: (Rule) =>
        Rule.max(160).warning('Meta descriptions should be under 160 characters.'),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
      fieldset: 'seo',
      description: 'Optional. Helps with some search engines.',
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      fieldset: 'seo',
      description: 'If the content is duplicated elsewhere, set a canonical URL.',
    }),
    defineField({
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      fieldset: 'seo',
      description: 'Prevents search engines from indexing this page.',
      initialValue: true,
    }),
  ],
})
