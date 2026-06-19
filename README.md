# CommerceHub - Amazon-Inspired Ecommerce Front End

CommerceHub is a polished React ecommerce front-end project inspired by Amazon-style shopping flows. It was upgraded from a static clone into a portfolio-ready application that demonstrates product browsing, category filtering, search, product detail views, persistent cart state, localization, and a demo checkout confirmation.

This project is built as a front-end portfolio piece. It does not process payments, collect account data, or connect to Amazon services.

## Project Value

This project is meant to show practical front-end development ability beyond visual recreation. It demonstrates how a shopping experience can be broken into reusable components, shared product data, app-level state, translated UI copy, and a complete user flow from browsing to checkout confirmation.

A recruiter or hiring manager can quickly see experience with:

- React component architecture
- State management with hooks
- Search and category filtering
- Cart quantity, subtotal, tax, shipping, and order total logic
- Local storage persistence
- Responsive Tailwind CSS layout
- English and Spanish localization with i18next
- Production build and lint workflow
- Accessible labels, semantic layout, and clear UI states

## Features

- Product catalog powered by shared data
- Search bar that filters translated product/category text
- Category dropdown and category chips
- Product cards with badges, ratings, reviews, delivery text, and prices
- Product detail page with description, trust signals, delivery, and buy actions
- Shopping cart with quantity controls, remove item, clear cart, and empty state
- Order summary with subtotal, shipping, estimated tax, and total
- Demo checkout success page with order ID and order details
- Persistent cart using localStorage
- English/Spanish language dropdown that updates the full page
- Responsive header, navigation, grids, promo strip, and footer
- Portfolio disclaimer explaining that this is a demo project

## Tech Stack

- React
- Vite
- Tailwind CSS
- i18next
- react-i18next
- React Icons
- ESLint

## Folder Highlights

```text
src/
  App.jsx                         App state, page switching, cart logic, search/filter logic
  data/products.js                Product catalog, category helpers, translated product copy helper
  i18n.js                         English and Spanish translation resources
  pages/HomePage.jsx              Main shopping surface and filtered product sections
  components/Header.jsx           Search, category selector, language switcher, cart badge
  components/ProductCard.jsx      Reusable product card
  components/ProductDetail.jsx    Product detail view
  components/CartPage.jsx         Shopping cart and order summary
  components/CheckoutSuccess.jsx  Demo order confirmation
  components/Footer.jsx           Footer links and project disclaimer
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

Preview the production build:

```bash
npm run preview
```

## Current Verification

The project currently passes:

```bash
npm run lint
npm run build
```

Note: Vite may warn if Node is below its preferred version. On the current local machine, Node `20.16.0` builds successfully, but Vite recommends Node `20.19+` or `22.12+`.

## Portfolio Notes

I built this project to be more than a basic Amazon clone. CommerceHub is an Amazon-inspired ecommerce front end that focuses on realistic shopping workflows, including product browsing, search, category filtering, cart management, checkout state, responsive design, and bilingual support.

The goal of this project is to show practical front-end development skills, not just recreate a familiar layout. It demonstrates how I structure reusable React components, manage shared product data, handle cart logic, support English and Spanish translations, and build a polished user flow from product discovery to checkout confirmation.

## Limitations

- Front-end only; no backend database or user authentication
- Demo checkout only; no real payment processing
- Product data is local static data
- Brand/product imagery is used for portfolio demonstration only
- Not affiliated with Amazon

## Possible Next Improvements

- Add React Router for real URLs like `/products/:id` and `/cart`
- Add automated tests for cart totals, filtering, and checkout behavior
- Add product sorting and price filters
- Add a mock account/orders page
- Add deployment screenshots to this README
- Upgrade Node to a Vite-recommended version

