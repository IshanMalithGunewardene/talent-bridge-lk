# Landing Page – How It Works

## What is the Landing Page?
The landing page is the first screen every visitor sees when they open Talentbridge LK. It introduces the platform and helps users quickly search for internships or jobs.

---

## Page Structure (top to bottom)

### 1. Navbar
- Shows the brand name **"Talentbridge LK"** on the left.
- Three navigation links in the middle: **Home**, **Jobs/Interns**, **About us**.
- A white pill-shaped **Sign in** button on the right.
- The navbar sits at the very top of the dark hero section.

### 2. Hero Section (full screen)
The hero section fills the entire screen height. It has two visual effects:
- A **purple glow blob** and a **blue glow blob** in the background — these give the deep galaxy-like feel.
- The base background colour is a very dark teal (`#041A1C`).

Inside the hero you'll find:

#### Heading
> **Meet Talentbridge LK**

Large, bold, white text in the centre of the screen.

#### Subtitle
> Search for better intern or job and learn to qualified

Smaller, faint text below the heading.

#### Search Bar
A frosted-glass pill-shaped input field with a white **Search** button on the right. Users can type any role or technology (e.g. "React Internships") and press Search.

Below the search bar a small hint reads: *Ex : React Internships*

#### Trending Internships / Jobs Slider
At the bottom of the hero there is a horizontal scrollable card strip labelled **"Trending internships/jobs"**.

Each card shows:
- A colourful icon (loaded from an SVG file in `features/home/assets/`)
- The job/role name in bold dark text

The strip can be scrolled left and right using the **‹** and **›** arrow buttons on each side.

Currently visible trending cards:
| Icon file | Role shown |
|---|---|
| `devops-icon.svg` | DevOps Engineer |
| `data-analyst-icon.svg` | Data Analyst |
| `ml-icon.svg` | Machine Learning |

---

## File Locations
| What | Where |
|------|-------|
| Navbar component | `client/src/assets/components/Navbar.jsx` |
| Hero component | `client/src/features/home/Hero.jsx` |
| SVG icons for cards | `client/src/features/home/assets/` |
| App root (wires it all together) | `client/src/App.jsx` |

---

## How sections below the hero work
After scrolling past the hero, users see:
1. **Categories** – a grid of job role cards (`catogories.jsx`)
2. **Feedback** – auto-scrolling testimonial strip (`feedBack.jsx`)
3. **FAQ** – "Need Help?" section with common questions (`faq.jsx`)
4. **Footer** – social links and page links (`Footer.jsx`)
