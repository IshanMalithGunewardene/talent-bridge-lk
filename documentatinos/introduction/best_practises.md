# Documentation for Best Practises

[01 Folder Structure](#folder-structure)

[02 Naming Conventions](#naming-conventions)

[03 Indentation or spacing](#indentation-or-spacing)

[04 Repositories](#repositories)

[05 Commit Conventions](#commit-conventions)

[06 Branch Naming](#branch-naming)

[07 Pull Requests](#pull-requests)

[08 Environment and Secrets](#environment-and-secrets)

[09 Testing](#testing)

## Folder Structure

```
src/
|-- assets/                  # Images, fonts, icons, static files
|-- components/              # Reusable UI components (buttons, cards, navbars)
|-- features/ or modules/    # Feature-specific code (containers, state, hooks)
|-- hooks/                   # Custom React hooks
|-- layouts/                 # Layout wrappers for screen structure
|-- pages/                   # Page-level components or routes
|-- services/                # API calls, data fetching logic
|-- utils/                   # Utility functions and helpers
|-- context/                 # React context providers
|-- store/ or redux/         # Redux state management (actions, reducers)
|-- styles/                  # Global styles, Tailwind config, theming
|-- tests/                   # Test utilities and helpers (optional)
|-- App.jsx                  # Main App component
|-- index.js                 # Application entry point
```

## Naming Conventions

-   **Default (files and directories)**: kebab-case

    -   Examples: `landing-page.jsx`, `user-profile`, `date-utils.js`

-   **React components**: PascalCase (filename and component name)

    -   Examples: `Navbar.jsx`, `UserCard.jsx`

-   **Variables and functions**: camelCase

    -   Examples: `isLoggedIn`, `fetchUserData`

-   **Constants**: UPPER_SNAKE_CASE

    -   Examples: `API_BASE_URL`, `DEFAULT_TIMEOUT_MS`

-   **CSS/SCSS modules**: kebab-case

    -   Examples: `user-card.module.css`, `global-styles.css`

-   **Test files**: match source filename with `.test` or `.spec`

    -   Examples: `user-card.test.jsx`, `date-utils.spec.js`

-   **Avoid**: snake_case and spaces in filenames
-   **Reason**: Align with common JS/React norms to reduce inconsistency and mental overhead.

### Examples

```
src/
|-- components/
|   |-- Navbar.jsx            // component (PascalCase)
|   |-- UserCard.jsx          // component (PascalCase)
|
|-- pages/
|   |-- landing-page.jsx      // page file (kebab-case)
|
|-- utils/
|   |-- date-utils.js         // utility (kebab-case), exports camelCase funcs
|
|-- styles/
|   |-- global-styles.css
```

### Summary

Quick reference:

| Item                  | Convention              | Example                         |
| --------------------- | ----------------------- | ------------------------------- |
| Files & directories   | kebab-case              | `user-profile`, `date-utils.js` |
| React components      | PascalCase              | `UserCard.jsx`, `Navbar.jsx`    |
| Variables & functions | camelCase               | `isLoggedIn`, `fetchUserData`   |
| Constants             | UPPER_SNAKE_CASE        | `API_BASE_URL`                  |
| Tests                 | match + `.test`/`.spec` | `user-card.test.jsx`            |

## Indentation or spacing

Use 4 spaces for indentation to improve readability and maintain consistency across the project.

In VS Code, default tab size may be 2. Change it via Settings (Ctrl + ,), search "tab size" and set to 4. Ensure the workspace respects `.editorconfig` (this repo sets indent_size to 4).

If you use a formatter, configure it to 4 spaces or let `.editorconfig` control it.

## Repositories

Main repository: [`talentbridgelk`](https://github.com/IshanMalithGunewardene/talentbridgelk)

-   `main` branch: production-ready, finalized releases.

    -   Link: [`/tree/main`](https://github.com/IshanMalithGunewardene/talentbridgelk/tree/main)

-   `testing-front-end` branch: isolate front-end development for easier tracking.

    -   Link: [`/tree/testing-font-end`](https://github.com/IshanMalithGunewardene/talentbridgelk/tree/testing-font-end)

-   `testing-back-end` branch: isolate back-end development.

    -   Link: [`/tree/testing-back-end`](https://github.com/IshanMalithGunewardene/talentbridgelk/tree/testing-back-end)

-   `quality-assurance` branch: pre-release QA across front-end and back-end.
    -   Link: [`/tree/quality-assurance`](https://github.com/IshanMalithGunewardene/talentbridgelk/tree/quality-assurance)

## Commit Conventions

Follow Conventional Commits to make history readable and automatable:

-   `feat`: add a new feature
-   `fix`: bug fix
-   `docs`: documentation only changes
-   `style`: formatting, missing semi colons, etc; no code change
-   `refactor`: code change that neither fixes a bug nor adds a feature
-   `perf`: performance improvements
-   `test`: add or update tests
-   `chore`: tooling, build, CI, dependencies

Examples:

-   `feat(auth): add JWT refresh token rotation`
-   `fix(api): handle 500s with retry and backoff`

## Branch Naming

Use kebab-case with a short prefix:

-   Features: `feat/short-description`
-   Fixes: `fix/issue-or-bug`
-   Chores: `chore/task-name`
-   Experiments/Spikes: `exp/topic`

Include an issue ID if available, e.g., `feat/123-user-onboarding`.

## Pull Requests

-   Small, focused PRs (prefer < 400 lines changed).
-   Provide a clear description, screenshots for UI changes, and testing notes.
-   Link related issues.
-   Checklist before requesting review:
    -   Lints pass
    -   Builds locally
    -   Tests updated/added and passing
    -   No console errors in critical flows

## Environment and Secrets

-   Store environment variables in `.env.local` (not committed) and document required keys in `.env.example`.
-   Never commit secrets. Use your platform’s secret manager for deployments.
-   Example keys:
    -   `API_BASE_URL`
    -   `NODE_ENV`
    -   `JWT_PUBLIC_KEY`

## Testing

-   Unit tests for utils and pure functions.
-   Component tests for critical UI (render, props, events).
-   Integration tests for key flows (auth, checkout, forms).
-   Naming: mirror file + `.test` or `.spec`.
