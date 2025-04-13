import slugify from 'slugify'
import type { SlugSourceContext } from 'sanity'

interface SlugifyOptions {
  type: string
  field?: string
  fieldPath?: string
}

export async function slugifyWithUniqueness(
  input: string,
  context: SlugSourceContext,
  options: SlugifyOptions
): Promise<string> {
  const baseSlug = slugify(input, {
    lower: true,
    strict: true,
  })

  const type = options.type
  const field = options.field || 'slug'
  const fieldPath = options.fieldPath || `${field}.current`

  const { getClient } = context
  const client = getClient({
    apiVersion: process.env.SANITY_STUDIO_API_VERSION!,
  })

  const query = `count(*[_type == $type && ${fieldPath} == $slug]{_id})`
  const params = { slug: baseSlug, type }

  const count = await client.fetch(query, params)

  if (count > 0) {
    return `${baseSlug}-${count + 1}`
  }

  return baseSlug
}
