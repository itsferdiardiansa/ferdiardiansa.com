import type { SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { metaType } from './metaType'

import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'

export const schemaTypes: { types: SchemaTypeDefinition[] } = {
  types: [
    // Share Types
    blockContentType,
    metaType,

    categoryType,
    postType,
    authorType,
  ],
}

// export const schemaTypes = []
