import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  studioHost: process.env.SANITY_STUDIO_HOST,
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
  vite: {
    resolve: {
      alias: {
        '@': __dirname,
      },
    },
  },
})
