# Log: Landing Page UI Build – 2026-03-06

## What was done
Rebuilt the hero section of the landing page to exactly match the provided wireframe image.

### Files changed
| File | Action |
|------|--------|
| `client/src/features/home/Hero.jsx` | Full rewrite — new layout, real SVG icons, clean card slider |
| `client/src/assets/components/Navbar.jsx` | Updated nav links and Sign in button to match wireframe |
| `client/src/App.jsx` | Cleaned up hero section wrapper with proper blob positioning |
| `client/src/features/home/assets/` | New correctly-named folder (was `asssets/` typo) |
| `client/src/features/home/assets/devops-icon.svg` | Renamed from `streamline-color_loop-1.svg` |
| `client/src/features/home/assets/data-analyst-icon.svg` | Renamed from `fluent-color_calendar-data-bar-16.svg` |
| `client/src/features/home/assets/ml-icon.svg` | Renamed from `streamline-flex-color_ai-scanner-robot.svg` |

## Key decisions
- **Assets folder**: Fixed typo `asssets` → `assets`; renamed each SVG with a descriptive, simple name per memory note
- **Hero cards**: Now use `<img>` tags pointing to the real SVG files from `features/home/assets/`
- **Navbar**: Nav links now read `Home | Jobs/Interns | About us` + `Sign in` pill button (white background, dark text)
- **Background blobs**: Two blobs (purple + blue) absolutely positioned behind content, opacity tuned to match wireframe depth
- **Tailwind v4**: All `[px]` utility classes converted to v4 scale equivalents (e.g. `w-[650px]` → `w-162.5`)
- No errors at build-lint stage
