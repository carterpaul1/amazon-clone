# Manual QA Plan: Cross-Browser Compatibility + Functional Testing

## Scope
This plan covers manual QA for the Amazon Clone home page, focused on:
- Cross-browser compatibility on desktop browsers.
- Core functional smoke coverage for key UI behaviors.

## Test Environment
- Application URL: `http://127.0.0.1:4173/`
- App start command: `npm run dev -- --host 0.0.0.0 --port 4173`
- Browsers:
  - Chromium (latest available in Playwright container)
  - Firefox (latest available in Playwright container)
  - WebKit (latest available in Playwright container)
- Viewport: `1440 x 900`

## Manual Functional Test Cases

| ID | Area | Steps | Expected Result | Status |
|---|---|---|---|---|
| F-01 | Page load | Open home page URL. | Page renders without crash and primary sections are visible. | Pass |
| F-02 | Header branding | Verify Amazon logo is displayed in top navigation. | Amazon logo appears and is visible. | Pass |
| F-03 | Navigation content | Verify `Today's Deals` link is visible in the secondary nav. | `Today's Deals` text is present. | Pass |
| F-04 | Language switch to ES | Change language selector from `EN` to `ES`. | Header search placeholder changes to Spanish (`Buscar en Amazon`). | Pass |
| F-05 | Language switch back to EN | Change language selector from `ES` back to `EN`. | Header search placeholder changes back to English (`Search Amazon`). | Pass |

## Cross-Browser Compatibility Matrix

| Browser | Rendering Smoke | Header + Nav Visibility | Language Toggle Behavior | Result |
|---|---|---|---|---|
| Chromium | Pass | Pass | Pass | ✅ Compatible |
| Firefox | Pass | Pass | Pass | ✅ Compatible |
| WebKit | Pass | Pass | Pass | ✅ Compatible |

## Notes / Risks
- Coverage is currently smoke-level and focused on critical first-load/header functionality.
- Recommended next expansion:
  - Mobile viewport checks (e.g., 390x844 and 768x1024).
  - Carousel interaction checks (next/prev and swipe behavior).
  - Accessibility checks (keyboard tab order, focus states, color contrast, and landmarks).
