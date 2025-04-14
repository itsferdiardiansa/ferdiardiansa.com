import { defineConfig } from 'sanity'
import type { DocumentActionComponent } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { dateRangePlugin } from 'sanity-plugin-daterange-input'
import { schemaTypes } from './schemaTypes'
import { createImprovedAction } from './actions/PublishDocumentAction'

const baseConfig = {
  plugins: [structureTool(), visionTool(), dateRangePlugin()],
  document: {
    actions: (prev: DocumentActionComponent[]) => {
      return prev.map((originalAction: DocumentActionComponent) => {
        return originalAction.action === 'publish'
          ? createImprovedAction(originalAction)
          : originalAction
      })
    },
  },
  schema: {
    types: schemaTypes.types,
  },
}

export default defineConfig([
  {
    ...baseConfig,
    name: 'default',
    title: '@ferdiardiansa - writing',
    basePath: '/production',
    projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID!,
    dataset: import.meta.env.SANITY_STUDIO_DATASET!,
  },
  {
    ...baseConfig,
    name: 'staging',
    title: 'Staging',
    basePath: '/staging',
    projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID!,
    dataset: 'staging',
  },
])
