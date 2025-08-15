# E-Commerce Mini Project

A modern, responsive e-commerce web application built with **React**, **Vite**, and **Tailwind CSS**. This project demonstrates how to build a multi-page shopping experience using only frontend technologies and a public API for product data.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [How It Works](#how-it-works)
  - [Home Page](#home-page)
  - [Category View](#category-view)
  - [Product Search](#product-search)
  - [Product Detail View](#product-detail-view)
  - [Profile Page](#profile-page)
- [Component Structure](#component-structure)
- [Styling](#styling)
- [How to Run](#how-to-run)
- [Deployment](#deployment)
- [Limitations & Notes](#limitations--notes)
- [Credits](#credits)

---

## Project Overview

This E-Commerce app allows users to:
- Browse product categories
- View products by category
- Search for products by name
- View detailed product information
- Navigate between pages with a modern, responsive UI

All product data is fetched from [dummyjson.com](https://dummyjson.com/), a free fake REST API for testing and prototyping.

---

## Features

- **Category Browsing:** See all available product categories and browse products within each.
- **Product Search:** Search for products by keyword with paginated results.
- **Product Detail View:** View detailed information, images, price, discount, rating, brand, and stock for each product.
- **Responsive Design:** Fully responsive layout using Tailwind CSS.
- **Navigation:** Seamless navigation between home, category, search, product view, and profile pages.
- **Reusable Components:** Navbar, Footer, and ProductCard components for consistent UI.

---

## Tech Stack

- **React** (with functional components and hooks)
- **Vite** (for fast development and build)
- **Tailwind CSS** (utility-first styling)
- **React Router** (for client-side routing)
- **dummyjson.com API** (for product data)

---

## Folder Structure

```
E-Commerce/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   ├── pages/
│   │   ├── CategoryViewPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── SearchPage.jsx
│   │   └── ViewPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── ...
```

---

## How It Works

### Home Page

- **File:** `src/pages/HomePage.jsx`
- **Functionality:**
  - Fetches all product categories from the API on load.
  - Displays categories as clickable buttons.
  - Clicking a category navigates to the Category View page for that category.

### Category View

- **File:** `src/pages/CategoryViewPage.jsx`
- **Functionality:**
  - Reads the selected category from the URL query string.
  - Fetches all products in that category.
  - Displays products in a responsive grid.
  - Clicking a product navigates to its Product Detail View.

### Product Search

- **File:** `src/pages/SearchPage.jsx`
- **Functionality:**
  - Search bar in the Navbar allows users to search for products by name.
  - Fetches matching products from the API with pagination.
  - Displays results as product cards.
  - Pagination buttons allow navigation through result pages.

### Product Detail View

- **File:** `src/pages/ViewPage.jsx`
- **Functionality:**
  - Reads the product ID from the URL.
  - Fetches detailed product info from the API.
  - Displays:
    - Main product image and clickable thumbnails
    - Title, category, description
    - Price, discount, rating, brand, and stock
    - "Add to Cart" button (UI only)
  - Responsive and visually appealing layout.

### Profile Page

- **File:** `src/pages/ProfilePage.jsx`
- **Functionality:**
  - Placeholder for user profile (can be expanded for user features).

---

## Component Structure

- **Navbar:**  
  - Search input and button
  - App logo (links to home)
  - Placeholder for user avatar

- **Footer:**  
  - Simple copyright

- **ProductCard:**  
  - Used in search and category views
  - Shows product image, title, and price (converted to INR for demo)

---

## Styling

- **Tailwind CSS** is used throughout for rapid, utility-first styling.
- Responsive grid layouts for product listings.
- Hover and transition effects for interactive elements.
- Consistent color palette for a modern look.

---

## How to Run

1. **Install dependencies:**
    ```bash
    cd E-Commerce
    npm install
    ```

2. **Start the development server:**
    ```bash
    npm run dev
    ```

3. **Open in your browser:**
    - Visit [http://localhost:5173](http://localhost:5173)

---

## Deployment

You can deploy this app to GitHub Pages, Vercel, Netlify, or any static hosting provider.

### For GitHub Pages (using `gh-pages`):

1. Install `gh-pages`:
    ```bash
    npm install --save-dev gh-pages
    ```

2. Add to `vite.config.js`:
    ```js
    export default defineConfig({
      // ...
      base: '/your-repo-name/', // Replace with your repo name
    });
    ```

3. Add scripts to `package.json`:
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```

4. Deploy:
    ```bash
    npm run deploy
    ```

---

## Limitations & Notes

- **No backend:** All data is fetched from a public API; no user authentication or cart persistence.
- **"Add to Cart"** is a UI element only; cart functionality is not implemented.
- **Profile page** is a placeholder.
- **API Rate Limits:** The app relies on [dummyjson.com](https://dummyjson.com/), which may have rate limits or downtime.

---

## Credits

- [dummyjson.com](https://dummyjson.com/) for product data API
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React](https://react.dev/) and [Vite](https://vitejs.dev/) for the frontend framework and tooling

---

**Project by [Your Name/Team], for educational/demo purposes
