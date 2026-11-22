# ARCHIVE®

An online store for things you didn't know you needed.

ARCHIVE is a responsive e-commerce application built with React and TypeScript. Featuring a curated shopping experience, playful branding, and a collection of everyday objects and questionable necessities.

## Live Demo

[Visit ARCHIVE](https://archive-curated.vercel.app/)

## Features

- Browse products fetched from the Noroff Online Shop API
- View individual product details and customer reviews
- Search for products
- Explore curated product categories
- Browse discounted products
- Add products to a shopping cart
- Adjust quantities and remove items
- View dynamic cart totals and shipping costs
- Complete a simulated checkout flow
- Submit a validated contact form
- Responsive layouts for desktop and mobile

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Router
- TanStack Query
- Zustand
- React Hook Form
- Zod

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/8headswillroll8/archive.git
cd archive
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

## API

Product data is fetched from the [Noroff Online Shop API](https://v2.api.noroff.dev/online-shop).

The API provides product information, images, pricing, discounts, and customer reviews.

## Project Information

Developed as part of the JavaScript Frameworks course at Noroff.

The checkout is simulated. No real purchases or payments are processed.

## Deployment

Hosted on Vercel.

[archive-curated.vercel.app](https://archive-curated.vercel.app/)


## AI Usage Log

**Tool:** ChatGPT (OpenAI)  
**Period:** November 2026

AI was used as a learning resource throughout the development of ARCHIVE, primarily for concept explanations, project planning, debugging assistance, and brainstorming.

| Purpose | AI Assistance | Outcome |
|---|---|---|
| Project planning | Discussed application structure, page organization, and user flows. | Established the project structure and navigation. |
| React and TypeScript | Explained props, state, event handling, and TypeScript concepts. | Improved understanding of React development. |
| API integration | Explained TanStack Query and asynchronous data fetching. | Supported product fetching and rendering. |
| State management | Explained Zustand, immutable updates, and array methods. | Supported shopping cart implementation. |
| Filtering | Discussed URL parameters, client-side filtering, and array methods. | Implemented category, search, and sales filtering. |
| Form validation | Explained React Hook Form and Zod concepts. | Supported contact form implementation. |
| Debugging | Helped identify import errors, routing issues, and TypeScript errors. | Resolved development issues. |
| Deployment | Explained Vercel configuration and client-side routing. | Successfully deployed the application. |
| Content | Brainstormed branding, interface copy, and confirmation messages. | Developed the ARCHIVE brand voice. |

AI assistance included explanations, troubleshooting guidance, and code examples. Suggested solutions were reviewed and integrated during development.

