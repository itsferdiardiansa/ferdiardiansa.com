import { defineCliConfig } from 'sanity/cli'

const isProduction = process.env.NODE_ENV === 'production'

export default defineCliConfig({
  studioHost: process.env.SANITY_STUDIO_HOST,
  graphql: [
    {
      id: isProduction ? 'production' : 'staging',
      workspace: isProduction ? 'default' : 'staging',
      playground: !isProduction,
      tag: isProduction ? 'latest' : 'dev-' + process.env.GIT_BRANCH,
    },
  ],
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
