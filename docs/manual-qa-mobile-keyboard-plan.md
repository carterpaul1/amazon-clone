# Manual QA Plan: Mobile Compatibility and Keyboard Functionality

## 1) Scope and Objectives

This plan validates that the application works well on mobile devices and supports expected keyboard behavior for users on hardware/software keyboards.

### Primary goals
- Confirm responsive layouts render correctly across common mobile viewport sizes.
- Validate touch interactions and keyboard interactions do not conflict.
- Ensure forms, navigation, and overlays are usable with both on-screen and hardware keyboards.
- Catch regressions in accessibility-related keyboard flows.

## 2) Test Environments

Run the full checklist on at least one device from each bucket:

### Browsers / Platforms
- iOS Safari (latest stable)
- iOS Chrome (latest stable)
- Android Chrome (latest stable)
- Android Firefox (latest stable, if supported)

### Device classes
- Small phone (e.g., ~360x640)
- Large phone (e.g., ~430x932)
- Tablet portrait and landscape (e.g., ~768x1024)

### Keyboard variants
- Virtual keyboard only
- Hardware keyboard attached (tablet or Bluetooth keyboard)

## 3) Entry Criteria

- App is deployed to a QA or staging environment.
- Test account credentials are available.
- Known blockers and feature flags are documented.
- Network and API dependencies are healthy.

## 4) Exit Criteria

- All P0/P1 cases pass on required browser/device matrix.
- Any failures are documented with severity, repro steps, and evidence.
- Accessibility-impacting keyboard issues are triaged before release.

## 5) Core Test Matrix

Use this matrix to track execution:

| Area | iOS Safari | iOS Chrome | Android Chrome | Android Firefox |
|---|---|---|---|---|
| Responsive layout | ☐ | ☐ | ☐ | ☐ |
| Navigation + menus | ☐ | ☐ | ☐ | ☐ |
| Forms + input keyboard | ☐ | ☐ | ☐ | ☐ |
| Keyboard tab flow | ☐ | ☐ | ☐ | ☐ |
| Modals/overlays focus | ☐ | ☐ | ☐ | ☐ |
| Search interactions | ☐ | ☐ | ☐ | ☐ |
| Checkout/action flows | ☐ | ☐ | ☐ | ☐ |

## 6) Detailed Manual Test Cases

### A. Mobile compatibility (layout + touch)

1. **Viewport rendering**
   - Open home page in portrait and landscape.
   - Verify no horizontal scroll unless intentionally designed.
   - Confirm major sections (header, content cards, footer) remain visible and aligned.

2. **Responsive breakpoints**
   - Validate key breakpoints (small phone, large phone, tablet).
   - Confirm typography, spacing, and tap targets remain readable/useable.

3. **Navigation and menus**
   - Open hamburger/menu drawers, category navigation, and account menus.
   - Confirm menus open/close reliably with touch and outside-tap dismiss.
   - Ensure menu content is scrollable when longer than viewport.

4. **Touch actions**
   - Validate taps, long-press behavior (if applicable), swipe gestures, and carousel interactions.
   - Verify no accidental double-activation.

5. **Orientation changes**
   - Rotate device during: browsing, open menu, open modal, and active form input.
   - Confirm UI reflows without overlap, clipping, or lost context.

6. **Performance sanity**
   - Scroll long pages and open/close overlays repeatedly.
   - Confirm no visible stutter that blocks core tasks.

### B. Keyboard functionality

1. **Tab and focus order**
   - Using hardware keyboard, press `Tab` through interactive controls.
   - Verify logical focus sequence and visible focus indicators.
   - Use `Shift + Tab` to confirm reverse order.

2. **Activation keys**
   - Use `Enter`/`Space` to trigger buttons, toggles, and links where expected.
   - Verify keyboard activation matches touch/click behavior.

3. **Form input behavior**
   - Focus each input field and verify correct soft keyboard type appears (email, number, text, etc.).
   - Ensure cursor placement and typing are stable.
   - Validate field-level validation messages for invalid/empty input.

4. **Search bar behavior**
   - Enter text, submit with `Enter`, clear input, and re-run search.
   - Confirm suggestions/autocomplete are keyboard accessible (arrow keys + enter if supported).

5. **Modal/dialog interactions**
   - Open a modal and validate focus moves into the modal.
   - Ensure `Tab` remains trapped within modal controls until close.
   - Validate `Esc` closes modal when designed.
   - On close, confirm focus returns to invoking control.

6. **Dropdowns/selectors**
   - Validate opening via keyboard, navigating options, and selecting values.
   - Confirm no hidden-offscreen focused items.

7. **Keyboard + virtual keyboard transitions**
   - Start typing with hardware keyboard, then switch to virtual keyboard.
   - Confirm no duplicate input events or focus loss.

8. **Submission and error recovery**
   - Submit forms using keyboard only.
   - Verify errors are announced visibly and focus moves to first error (if implemented).

### C. High-priority user journeys

Run end-to-end with mobile touch first, then keyboard-first where possible:

1. Sign in / sign out
2. Search for item and open product details
3. Add/remove item in cart
4. Update quantity/options
5. Checkout critical path (or nearest staging-safe equivalent)

## 7) Accessibility Checks (Keyboard-Focused)

- Focus is always visible.
- No keyboard trap outside intentional modal traps.
- Interactive elements are reachable and operable via keyboard.
- Reading/order of focus follows visual logic.
- Error states are understandable and recoverable by keyboard users.

## 8) Defect Reporting Template

For each issue include:
- **Title**
- **Environment** (device, OS, browser, orientation)
- **Preconditions**
- **Steps to reproduce**
- **Expected result**
- **Actual result**
- **Severity/Priority**
- **Evidence** (screenshots/video/console logs)

## 9) Suggested Severity Guidelines

- **P0/Critical:** Blocks purchase or sign-in flow, no workaround.
- **P1/High:** Major feature broken; workaround exists but poor UX.
- **P2/Medium:** Functional but degraded behavior.
- **P3/Low:** Cosmetic or minor usability issue.

## 10) Execution Notes

- Re-test failures after fix on the same device/browser combo first.
- Perform spot-regression on at least one iOS and one Android device after major fixes.
- Track pass/fail by test case ID in your test run sheet.
