import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Oxcyn',

  projectId: <string>process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: <string>process.env.NEXT_PUBLIC_SANITY_DATASET,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes.types,
  },
})
