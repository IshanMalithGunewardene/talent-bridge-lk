# Authentication Feature

## What is it?
When you visit Talentbridge LK, the landing page is visible to everyone. To access personalized features, users can sign in using the **Sign in** button in the top-right navigation bar.

---

## How it works — step by step

### 1. Clicking "Sign in"
- The **Sign in** button lives in the top-right corner of the navigation bar.
- Clicking it opens an authentication panel on top of the page (an overlay — the page behind it is still visible but dimmed).

### 2. The Authentication Panel
The panel is powered by **Supabase** and gives users two ways to sign in:
- **Email & password** — register or log in with an email address
- **Google** — sign in with a Google account (one click)
- **GitHub** — sign in with a GitHub account (one click)

There is an **× close button** in the top-right corner of the panel if the user wants to dismiss it without logging in.

### 3. After signing in
- The overlay automatically closes.
- The **Sign in** button in the navbar is replaced by:
  - A small **avatar** showing the first letter of the user's email
  - A **Sign out** button

### 4. Signing out
- Clicking **Sign out** in the navbar immediately ends the session.
- The navbar returns to showing the **Sign in** button.

---

## Files involved
| File | Role |
|------|------|
| `src/assets/components/Navbar.jsx` | Renders Sign in / Sign out button, passes click event |
| `src/features/auth/AuthPage.jsx` | The authentication overlay (Supabase UI) |
| `src/features/auth/useAuth.js` | Tracks the current session state |
| `src/lib/supabaseClient.js` | Connection to the Supabase backend |
| `src/App.jsx` | Controls when the auth overlay is shown/hidden |
