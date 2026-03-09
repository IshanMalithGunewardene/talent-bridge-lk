# Talent Bridge LK - Folder Architecture

## Project Overview
This document explains the folder structure and organization of the Talent Bridge LK project.

## Root Structure

```
talent-bridge-lk/
├── client/          # Frontend application
├── server/          # Backend application
└── documentatinos/  # Project documentation
```

---

## Client Folder Structure

The `client/` directory contains the React-based frontend application built with Vite.

### Top Level Files
- **`package.json`** - Frontend dependencies and scripts
- **`vite.config.js`** - Vite build tool configuration
- **`eslint.config.js`** - ESLint configuration for code quality
- **`index.html`** - Main HTML entry point
- **`README.md`** - Client-specific documentation

### Source Directory (`client/src/`)

The source code is organized into the following structure:

#### Core Files
- **`main.jsx`** - Application entry point, renders the React app
- **`App.jsx`** - Root component, handles routing and layout
- **`index.css`** - Global styles

#### Feature-Based Organization

The project follows a **feature-based architecture** where related components are grouped by functionality:

##### **`features/home/`** - Home Page Feature Module
Contains all components and assets related to the home/landing page:

**Components:**
- `landingPage.jsx` - Main landing page component
- `catogories.jsx` - Categories display component
- `faq.jsx` - Frequently Asked Questions component
- `feedBack.jsx` - User feedback/testimonials component

**Assets (`features/home/assests/`):**
- `icon/` - Icons specific to home page features
- `img/` - Images specific to home page features

#### Shared Resources

##### **`src/assets/`** - Global Assets
Shared assets used across multiple features

##### **`src/assets/components/`** - Shared Components
Reusable components used throughout the application:
- `Navbar.jsx` - Navigation bar component (used across all pages)

---

## Architecture Highlights

### Color-Coded Organization (from the screenshot):

- **Red Box**: Main source directory (`src/`)
  - Contains all application source code
  - Houses both shared and feature-specific code

- **Blue Box**: Feature modules (`features/`)
  - Each feature (like `home/`) is self-contained
  - Includes components, assets, and feature-specific logic

- **Green Arrows**: Feature components
  - Components specific to the home feature
  - Co-located with their assets for better maintainability

### Design Patterns

1. **Feature-Based Structure**: 
   - Each major feature (home, etc.) has its own folder
   - Promotes modularity and scalability
   - Easy to locate and maintain feature-specific code

2. **Co-location**: 
   - Assets are stored close to where they're used
   - `features/home/assests/` contains home-specific resources

3. **Shared Resources**: 
   - Common components go in `src/assets/components/`
   - Reusable across multiple features

---

## Server Structure

The `server/` directory contains the backend application:
- **`package.json`** - Backend dependencies and scripts
- Additional server code (to be documented as implemented)

---

## Documentation Structure

The `documentatinos/` directory contains project documentation:
- **`folder-architechture.md`** - This file, explaining the project structure
- **`best_practises.md`** - Development best practices and guidelines

---

## Benefits of This Structure

1. **Scalability**: Easy to add new features without cluttering existing code
2. **Maintainability**: Related files are grouped together
3. **Clear Separation**: Features, shared components, and assets are clearly separated
4. **Developer Experience**: Easy to navigate and understand the codebase
5. **Performance**: Feature-based splitting enables better code splitting and lazy loading

---

## Adding New Features

When adding a new feature:

1. Create a new folder under `client/src/features/[feature-name]/`
2. Add feature components in the feature folder
3. Create an `assets/` subfolder for feature-specific resources
4. Place shared/reusable components in `src/assets/components/`
