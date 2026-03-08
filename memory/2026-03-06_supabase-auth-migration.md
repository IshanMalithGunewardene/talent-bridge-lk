# Migration Log: my-app → client (Supabase Auth Integration)
**Date:** 2026-03-06  
**Branch:** testing-back-end  
**Author:** AI (GitHub Copilot)

---

## Summary
The `my-app/` folder was a standalone Vite + React prototype used to develop and test Supabase authentication. All necessary code has been migrated into the `client/` (frontend) app following an MVC / feature-based folder architecture. The `my-app/` folder has been deleted.

---

## What Was in my-app
| File | Purpose |
|------|---------|
| `src/App.jsx` | Auth UI component (login/signup via Supabase Auth UI React) |
| `supabaseClient.js` | Supabase JS client initialisation |
| `.env` | Supabase project URL and anon key |
| `package.json` | Had `@supabase/auth-ui-react`, `@supabase/auth-ui-shared`, `@supabase/supabase-js` |

---

## What Was Migrated & Where It Went

### 1. `client/src/lib/supabaseClient.js` *(new)*
- Supabase client singleton initialised from `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
- Placed in `lib/` to act as the **service/model layer** — shared across all features.

### 2. `client/src/features/auth/AuthPage.jsx` *(new — View)*
- Renders the Supabase `<Auth />` component with ThemeSupa styling.
- Providers: Google, GitHub.
- Brand colour: black / #333333.
- Imports `supabase` from `../../lib/supabaseClient`.

### 3. `client/src/features/auth/useAuth.js` *(new — Controller)*
- Custom React hook `useAuth()`.
- Returns `{ session, loading }`.
- Calls `supabase.auth.getSession()` on mount and subscribes to `onAuthStateChange`.
- Cleans up subscription on unmount.

### 4. `client/src/App.jsx` *(updated)*
- Now imports `AuthPage` and `useAuth`.
- Logic: if `loading` → render nothing; if `!session` → render `<AuthPage />`; else → render the full landing page.

### 5. `client/.env` *(new)*
- Contains `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
- Added `.env` and `.env.*` entries to `client/.gitignore`.

### 6. `client/package.json` *(updated)*
- Added: `@supabase/auth-ui-react ^0.4.7`, `@supabase/auth-ui-shared ^0.1.8`, `@supabase/supabase-js ^2.98.0`.
- Installed via `npm install` — 221 packages added.

---

## Deleted
- `my-app/` — entire folder removed (`rm -rf`) after successful migration.

---

## Final client/src Structure
```
client/src/
├── App.jsx                    ← Updated: auth guard + landing page
├── App.css
├── index.css
├── main.jsx
├── lib/
│   └── supabaseClient.js      ← NEW: Supabase client (Model layer)
├── assets/
│   └── components/
│       ├── Navbar.jsx
│       └── Footer.jsx
└── features/
    ├── auth/
    │   ├── AuthPage.jsx       ← NEW: Auth UI (View)
    │   └── useAuth.js         ← NEW: Session hook (Controller)
    └── home/
        ├── Hero.jsx
        ├── catogories.jsx
        ├── faq.jsx
        ├── feedBack.jsx
        └── landingPage.jsx
```

---

## Architecture Notes
- **MVC Mapping:**
  - **Model:** `lib/supabaseClient.js` (data access)
  - **Controller:** `features/auth/useAuth.js` (business logic / state)
  - **View:** `features/auth/AuthPage.jsx` (UI rendering)
- The `features/` convention allows each domain (auth, home, etc.) to be self-contained.
- Future features (e.g., `features/jobs/`, `features/profile/`) should follow the same pattern.

---

## Notes / Caveats
- The `.env` file contains real Supabase credentials — it is gitignored. Never commit it.
- The `my-app/src/App.css` (default Vite boilerplate styles) was intentionally NOT migrated — it had no custom styles relevant to the project.
- The `my-app/src/index.css` was NOT migrated — `client/src/index.css` already has proper Tailwind + custom styles.
