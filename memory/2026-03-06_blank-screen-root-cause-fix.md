# Log: Blank Screen Fix — Dual React + .env Issues – 2026-03-06

## Problems found & fixed

### 1. Dual React instance (PRIMARY CRASH)
`@supabase/auth-ui-react@0.4.7` ships its own bundled copy of React inside:
`node_modules/@supabase/auth-ui-react/node_modules/react`

When used alongside React 19 in the project, this caused two separate React runtime
instances. React hooks and context cannot be shared across instances — causing the
Auth component to silently fail to render (blank screen).

**Fix:**
- Deleted the duplicate React/react-dom/scheduler from inside auth-ui-react's node_modules
- Added `resolve.dedupe` and `resolve.alias` to `vite.config.js` to force all packages
  to resolve to the single project-level React

### 2. Broken .env key (SECONDARY ISSUE)
The `VITE_SUPABASE_ANON_KEY` in `client/.env` had an invisible line break mid-JWT,
causing Vite to read a truncated key. Supabase client silently failed to initialise.

**Fix:** Rewrote `.env` with Python to guarantee the full JWT is on one unbroken line.

### 3. Invalid JSX SVG attributes (RENDER CRASH)
`Footer.jsx` had `fill-rule` and `clip-rule` — these are HTML attributes, not valid
JSX props. React throws on these in strict mode.

**Fix:** Renamed to `fillRule` and `clipRule`.

### 4. Tailwind v4 deprecated utilities (STYLE CRASHES)
Multiple files used Tailwind v3 class names removed in v4:
- `bg-gradient-to-*` → `bg-linear-to-*`
- `flex-grow` → `grow`
- `flex-shrink-0` → `shrink-0`
- `h-[360px]` → `h-90`, etc.

**Fix:** Batch-replaced all across Footer, faq, feedBack, catogories.

### 5. Broken className string in catogories.jsx
`gap-y-12grid` — missing space caused CSS parser to emit invalid class.

**Fix:** Cleaned to proper single class string.

## Files changed
- `client/vite.config.js` — added resolve.dedupe + alias for React
- `client/.env` — fixed broken JWT line
- `client/src/assets/components/Footer.jsx` — fillRule/clipRule, bg-linear, grow
- `client/src/features/home/faq.jsx` — bg-linear, h-90/w-90, clean arbitrary values
- `client/src/features/home/catogories.jsx` — fixed className, w-13, shrink-0 etc
- `client/src/features/home/feedBack.jsx` — bg-linear gradients
- `client/src/lib/supabaseClient.js` — added env var guard
