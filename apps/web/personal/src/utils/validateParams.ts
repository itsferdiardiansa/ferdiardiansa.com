import { notFound } from 'next/navigation'

/**
 * Validates the `author` parameter.
 * Ensures it starts with '@', contains only alphanumeric characters,
 * and matches allowed authors.
 * @param author - The author parameter to validate.
 * @param allowedAuthors - Array of allowed author names.
 */
export function validateAuthor(
  author: string,
  allowedAuthors: string[]
): string {
  if (!author.startsWith('@')) {
    notFound()
  }

  const authorName = author.slice(1) // Remove `@`
  if (!/^[a-zA-Z0-9]+$/.test(authorName)) {
    notFound()
  }

  if (!allowedAuthors.includes(authorName)) {
    notFound()
  }

  return authorName
}

/**
 * Validates the `slug` parameter.
 * Ensures it is alphanumeric with optional dashes.
 * @param slug - The slug parameter to validate.
 */
export function validateSlug(slug: string): string {
  if (!/^[a-zA-Z0-9-]+$/.test(slug)) {
    notFound()
  }

  return slug
}
