import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { dateRangePlugin } from 'sanity-plugin-daterange-input'
import { schemaTypes } from './schemaTypes'
import { createImprovedAction } from './actions/PublishDocumentAction'

export default defineConfig({
  name: 'default',
  title: '@ferdiardiansa - writing',
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: import.meta.env.SANITY_STUDIO_DATASET!,
  plugins: [structureTool(), visionTool(), dateRangePlugin()],
  document: {
    actions: prev => {
      return prev.map(originalAction => {
        return originalAction.action === 'publish'
          ? createImprovedAction(originalAction)
          : originalAction
      })
    },
  },
  schema: {
    types: schemaTypes.types,
  },
})
