Documentation for Best Practices

This document outlines the coding standards, project structure, and collaboration practices used in this repository. Following these conventions ensures the codebase remains consistent, maintainable, and easy for new contributors to understand.

01 Folder Structure

The project follows a modular React application structure that separates reusable UI, features, services, and utilities.

src/
|-- assets/ # Images, fonts, icons, and other static resources
|-- components/ # Reusable UI components (buttons, cards, navbars)
|-- features/ or modules/ # Feature-based modules (containers, hooks, state)
|-- hooks/ # Custom React hooks
|-- layouts/ # Layout wrappers that define page structure
|-- pages/ # Route-level components or page views
|-- services/ # API calls and external data fetching logic
|-- utils/ # Helper functions and utility logic
|-- context/ # React context providers
|-- store/ or redux/ # Global state management (Redux actions, reducers)
|-- styles/ # Global styles, Tailwind config, and theme files
|-- tests/ # Shared testing utilities and helpers (optional)
|-- App.jsx # Root application component
|-- index.js # Application entry point

Best Practices

         Keep feature-related logic grouped together when possible.

         Avoid placing business logic inside UI components.

         Prefer small, reusable components rather than large monolithic files.

         Move shared logic to utils, hooks, or services.

02 Naming Conventions

Consistent naming improves readability and helps developers quickly understand the role of each file or variable.

Default (Files and Directories)

Use kebab-case.

Examples:

      landing-page.jsx
      user-profile
      date-utils.js

React Components

Use PascalCase for both the filename and the component name.

Examples:

    Navbar.jsx
    UserCard.jsx
    JobListingCard.jsx

Variables and Functions

Use camelCase.

Examples:

    isLoggedIn
    fetchUserData
    calculateTotalPrice
     Constants

Use UPPER_SNAKE_CASE for values that do not change.

Examples:

API_BASE_URL
DEFAULT_TIMEOUT_MS
MAX_RETRY_COUNT
CSS / SCSS Modules

Use kebab-case.

Examples:

user-card.module.css
global-styles.css
dashboard-layout.module.scss
Test Files

Test filenames should mirror the source file name and include .test or .spec.

Examples:

user-card.test.jsx
date-utils.spec.js
auth-service.test.js
Avoid

snake_case filenames

Spaces in filenames

Inconsistent casing styles

These practices align with common JavaScript and React ecosystem standards, reducing confusion and improving collaboration.

Examples
src/
|-- components/
| |-- Navbar.jsx // component (PascalCase)
| |-- UserCard.jsx // component (PascalCase)
|
|-- pages/
| |-- landing-page.jsx // page file (kebab-case)
|
|-- utils/
| |-- date-utils.js // utility (kebab-case), exports camelCase functions
|
|-- styles/
| |-- global-styles.css
Quick Reference
Item Convention Example
Files & directories kebab-case user-profile, date-utils.js
React components PascalCase UserCard.jsx, Navbar.jsx
Variables & functions camelCase isLoggedIn, fetchUserData
Constants UPPER_SNAKE_CASE API_BASE_URL
Tests match + .test / .spec user-card.test.jsx
03 Indentation or Spacing

Use 4 spaces for indentation to maintain readability and consistent formatting across the project.

VS Code Configuration

By default, VS Code may use 2 spaces.

To change this:

Open Settings (Ctrl + ,)

Search for Tab Size

Set Tab Size = 4

Ensure the workspace respects the repository’s .editorconfig, which defines:

indent_size = 4
Formatter Notes

If using a formatter such as Prettier, ensure it is configured to use 4 spaces, or allow .editorconfig to control the indentation.

04 Repositories

Main repository:

talentbridgelk

GitHub link:

https://github.com/IshanMalithGunewardene/talentbridgelk

Branch Structure

main

Production-ready code and finalized releases.

/tree/main

testing-front-end

Isolated branch for front-end development.

/tree/testing-front-end

testing-back-end

Isolated branch for back-end development.

/tree/testing-back-end

quality-assurance

Used for pre-release testing and QA validation before merging into production.

/tree/quality-assurance
05 Commit Conventions

This repository follows Conventional Commits to maintain a clear and structured commit history.

This makes it easier to:

Track changes

Generate changelogs

Understand project evolution

Commit Types
Type Description
feat Add a new feature
fix Bug fix
docs Documentation changes only
style Formatting changes (no logic change)
refactor Code change that neither fixes a bug nor adds a feature
perf Performance improvements
test Add or update tests
chore Tooling, build, dependencies
Examples
feat(auth): add JWT refresh token rotation
fix(api): handle 500 errors with retry and backoff
docs(readme): update installation instructions
refactor(user): simplify profile state handling
06 Branch Naming

Branch names should be short, descriptive, and follow kebab-case.

Format
type/short-description
Examples

Features:

feat/user-onboarding
feat/job-filtering

Fixes:

fix/login-validation
fix/api-timeout

Chores:

chore/update-dependencies
chore/setup-eslint

Experiments / spikes:

exp/new-search-algorithm
exp/ui-prototype

If an issue ID exists, include it:

feat/123-user-onboarding
fix/87-login-bug
07 Pull Requests

Pull requests should remain small, focused, and easy to review.

Guidelines

    Prefer less than 400 lines of changes when possible.

     Provide a clear description of what the PR does.

     Include screenshots for UI-related changes.

     Link related issues or tickets.

    Checklist Before Requesting Review

Ensure:

Linting passes

Project builds locally

Tests are added or updated

Tests pass successfully

No console errors in critical flows

08 Environment and Secrets

Environment variables must be handled securely.

Rules

Store environment variables in:

        .env.local

This file must not be committed.

Document required variables in:

.env.example

Example Variables
API_BASE_URL
NODE_ENV
JWT_PUBLIC_KEY
Security Best Practices

Never commit secrets to the repository.

Use your hosting platform’s secret manager for deployment.

Rotate keys periodically if possible.

09 Testing

Testing ensures the stability and reliability of the application.

Recommended Test Types

Unit Tests

Test small, isolated pieces of logic.

Examples:

Utility functions

Data formatters

    Validation logic

Component Tests

Test UI components in isolation.

Examples:

    Rendering

    Props behavior

     User interactions

Integration Tests

Test complete user flows across multiple components.

Examples:

     Authentication flow

    Form submission

    Checkout process

Test Naming

Mirror the source filename.

Examples:

     date-utils.js
     date-utils.test.js

     user-card.jsx
     user-card.test.jsx

✅ Result

Your documentation now:

     Reads more professional

     Is easier for new developers

    Follows industry documentation standards

    Keeps all your original rules unchanged
