# **Must be noticed!**

This document is designed to give a rule how to writing code neatly and well structured.

## Conventional commit types

The repository has been arranged to give an information especially in commit changes. The rules are supposed to follow this:

- ### Commit types

| Commit Type | Title                    | Description                                                                                                 | Emoji | Release                        | Include in changelog |
| :---------: | ------------------------ | ----------------------------------------------------------------------------------------------------------- | :---: | ------------------------------ | :------------------: |
|   `feat`    | Features                 | A new feature                                                                                               |  ✨   | `minor`                        |        `true`        |
|    `fix`    | Bug Fixes                | A bug Fix                                                                                                   |  🐛   | `patch`                        |        `true`        |
|   `docs`    | Documentation            | Documentation only changes                                                                                  |  📚   | `patch` if `scope` is `readme` |        `true`        |
|   `style`   | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |  💎   | -                              |        `true`        |
| `refactor`  | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |  📦   | -                              |        `true`        |
|   `perf`    | Performance Improvements | A code change that improves performance                                                                     |  🚀   | `patch`                        |        `true`        |
|   `test`    | Tests                    | Adding missing tests or correcting existing tests                                                           |  🚨   | -                              |        `true`        |
|   `build`   | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |  🛠   | `patch`                        |        `true`        |
|    `ci`     | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |  ⚙️   | -                              |        `true`        |
|   `chore`   | Chores                   | Other changes that don't modify src or test files                                                           |  ♻️   | -                              |        `true`        |
|  `revert`   | Reverts                  | Reverts a previous commit                                                                                   |  🗑   | -                              |        `true`        |

- ### Commit aliases

|    Commit Type     | Maps to | Title             | Description                     | Emoji |
| :----------------: | ------- | ----------------- | ------------------------------- | :---: |
|     `initial`      | `feat`  | Initial           | Initial commit                  |  🎉   |
|   `dependencies`   | `fix`   | Dependencies      | Update dependencies             |  ⬆️   |
| `peerDependencies` | `fix`   | Peer dependencies | Update peer dependencies        |  ⬆️   |
| `devDependencies`  | `chore` | Dev dependencies  | Update development dependencies |  ⬆️   |
|     `metadata`     | `fix`   | Metadata          | Update metadata (package.json)  |  📦   |

...
