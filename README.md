# Oxcyn

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=itsferdiardiansa_Oxcyn&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=itsferdiardiansa_Oxcyn)
[![codecov](https://codecov.io/gh/itsferdiardiansa/Oxcyn/graph/badge.svg?token=RAK1A63V6F)](https://codecov.io/gh/itsferdiardiansa/Oxcyn)
[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-f9ad00.svg)](https://pnpm.io/)
[![License](https://img.shields.io/npm/l/nx.svg?style=flat-square)](https://github.com/itsferdiardiansa/Oxcyn/tree/docs/project?tab=License-1-ov-file)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)]()

This is a personal project that consist of anything about my opinions and surrounding me.This is a personal project that consist of anything about my opinions and surrounding me.

## **Development workflows**

Some organizations have steps in how they develop the projects they are working on. These are some simple methods that I have created after making several observations and do not rule out the possibility of changes in the future.

![diagram-export-6-16-2024-3_10_44-PM.png](https://eraser.imgix.net/workspaces/0cmUk4P5344JCeqlOX1d/2XG2BGojRDZ1XQRU8zKzU21QVJH3/nMGz4SrKUUbGD7JKaVpFf.png?ixlib=js-3.7.0 'diagram-export-6-16-2024-3_10_44-PM.png')

**Version:** 0.1.0  
**License:** MIT  

## Overview
Oxcyn is a backend-focused monorepo managed with **Nx** and **pnpm**, structured for high maintainability, code consistency, and continuous quality assurance. The project enforces strict linting, testing, and formatting rules, suitable for large-scale or multi-service environments.

## Core Features
- Enforced package management via **pnpm**.
- Centralized task execution with **Nx**.
- Automated linting, formatting, and testing on commit.
- Integrated coverage and SonarQube property generation scripts.
- Ready for deployment with **Vercel** runtime support.

## Project Requirements
- **Node.js** ≥ 18.x  
- **pnpm** ≥ 7.3.0  
- **Nx CLI**  
- **Vercel CLI** (optional for deployment)

## Installation
```bash
pnpm install
```

If another package manager is used (npm/yarn), installation will fail due to the enforced `only-allow` hook.

## Development Commands
| Command | Description |
|----------|-------------|
| `pnpm reset` | Clears Nx cache and resets the workspace. |
| `pnpm type-check` | Runs TypeScript type checks across all packages. |
| `pnpm format` | Checks code formatting. |
| `pnpm format:write` | Automatically formats all code using Prettier. |
| `pnpm lint` | Runs linting rules. |
| `pnpm lint:fix` | Auto-fixes lint issues where possible. |
| `pnpm test` | Executes all Jest tests. |
| `pnpm test:coverage` | Runs tests and generates a coverage report. |
| `pnpm generate-coverage` | Custom script to consolidate coverage data. |
| `pnpm generate-sonar-properties` | Generates configuration for SonarQube integration. |

## Git Hooks & Commit Rules
Husky and lint-staged ensure all code meets standards before commits:
- Formats and lints staged files.
- Runs unit tests for changed files.
- Enforces commit conventions using **Commitlint** with the **Conventional Commits** configuration.

## Directory Structure
Typical Nx-based layout:
```
apps/           # Application-level code
libs/           # Shared libraries and modules
scripts/        # Project-level utility scripts
nx.json         # Nx workspace configuration
package.json    # Monorepo configuration and scripts
```

## CI/CD & Deployment
- Optimized for **Vercel** deployments using `@vercel/node` and related analytics packages.
- Compatible with other CI/CD systems by invoking Nx and pnpm tasks directly.

## Quality and Coverage
- **Jest** for unit and integration testing.
- **NYC** for coverage reporting.
- Integration-ready with **SonarQube** for code quality metrics.

## License
MIT © 2025 Ferdi
