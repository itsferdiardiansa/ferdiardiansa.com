# Studio - Blog Content Manager

[![Sanity Deploy](https://github.com/itsferdiardiansa/ferdiardiansa.com/actions/workflows/deploy.yaml/badge.svg)](https://github.com/itsferdiardiansa/ferdiardiansa.com/actions/workflows/deploy.yaml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Sanity](https://img.shields.io/badge/powered%20by-Sanity.io-f03e2f)](https://www.sanity.io)

> A headless CMS built using [Sanity Studio](https://www.sanity.io/studio), designed to manage _writing_ content such as **Authors**, **Categories**, and **Posts** — complete with CI/CD via GitHub Actions.

---

## Features

- **Author**, **Category**, and **Post** document types
- Modular schema structure using `defineField` and `defineType`
- Deployable to [sanity.studio](https://www.sanity.io/studio)
- Automatic deployment using GitHub Actions
- CI-safe deploys using Sanity API tokens
- Built to work within an Nx monorepo

---

## Requirements

- Node.js `>=18 <22` (Sanity supports Node 18/20)
- PNPM or Yarn (recommended)
- A Sanity project (`projectId`, `dataset`)

## Project Structure

```
apps
├── web/studio-blog
│     ├── actions
│     ├── components
│     ├── schemaTypes
│     ├── utils
│     ├── button.stories.tsx
│     ├── sanity.config.ts
│     └── tsconfig.json
└── ...
```

---

## Install dependencies

```bash
pnpm install
```

## Start development

```
pnpm dev
```

This starts the Sanity Studio at `http://localhost:3333`

---

## Deploying to Sanity Studio (via GitHub Actions)

This project includes a CI/CD pipeline to Studio to Sanity’s hosted service.

- Generate Sanity API Token
- GitHub Actions: .github/workflows/deploy.yml

This workflow

- Installs dependencies
- Authenticates with Sanity using the token (only deploy)
- Deploys the Studio/GraphQL non-interactively

## Run it manually or on push

Web Studio

```
npx nx run @oxcyn-apps/web-studio-blog:deploy:ci
```

GraphQL

```
npx nx run @oxcyn-apps/web-studio-blog:deploy-graphql:ci
```

---

## Best Practices

- Using version control for schema changes — track edits to document types
- Running Prettier & lint before deploys — enforce consistent formatting
- Using API versioning via `SANITY_STUDIO_API_VERSION` for consistent behavior
- Lock Node & Sanity versions to ensure reproducible builds

## Document Types

| Name     | Description                                                                  |
| -------- | ---------------------------------------------------------------------------- |
| Author   | Contains name, image, and bio                                                |
| Category | Tag-like categorization for posts                                            |
| Post     | Rich text post including body, author, categories, image, slug, SEO metadata |

## License

This project is licensed under the MIT License.

## Credits

Built with 💖 using `Sanity Studio`, deployed via `GitHub Actions`, and maintained by `itsferdiardiansa`.
