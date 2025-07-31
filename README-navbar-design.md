# Navbar Design Specification

This document describes the design and style specifications for the Tourney SaaS navigation bar, inspired by the Slack web app.

## Visual Style

- **Background:** Pure white (`#fff`)
- **Border:** Subtle, light gray (`#e5e7eb`), rounded corners (`border-radius: 999px`)
- **Shadow:** Soft drop shadow for depth (`box-shadow: 0 2px 8px rgba(0,0,0,0.03)`)
- **Width:** 90% of the viewport, centered horizontally
- **Padding:** Generous horizontal and vertical padding for a spacious look

## Layout

- **Flexbox:** Navbar uses flexbox for horizontal alignment and spacing
- **Logo Section:**
  - Logo image (`.logo`) is 32x32px, left-aligned
  - Logo text (`.logo-title`) is bold, large, and dark
- **Navigation Links:**
  - Displayed horizontally with equal spacing (`gap: 36px`)
  - Each link has padding, rounded corners, and a hover effect
  - Font is medium weight, dark color
- **Button Section:**
  - Login button is prominent, pill-shaped, dark background, white text
  - Button has a hover effect (blue background)

## Colors

- **Primary Text:** `#222`
- **Accent (Hover):** `#4a90e2` (blue)
- **Background:** `#fff` (navbar), `#f8f9fa` (body)
- **Border:** `#e5e7eb`

## Typography

- **Font Family:** Poppins, Inter, Roboto, sans-serif
- **Font Size:**
  - Body: 16px
  - Logo: 1.6rem
  - Nav links & button: 1rem
- **Font Weight:**
  - Logo: 900
  - Links: 500
  - Button: 600

## Interactions

- **Nav Link Hover:**
  - Background changes to light gray
  - Text color changes to blue
- **Button Hover:**
  - Background changes to blue
  - Text remains white

## Responsive Design

- The navbar is designed to be spacious and modern on desktop. For mobile, further tweaks may be needed (not included here).

## Example CSS Classes

- `.main-nav` — main navbar container
- `.logo_container` — logo and title
- `.logo` — logo image
- `.logo-title` — logo text
- `.nav-list` — navigation links container
- `.auth_buttons` — button container
- `.login_button` — main button

---

For further customization, adjust colors, spacing, or add breakpoints for mobile responsiveness.
