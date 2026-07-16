# Ciao — High-End Fashion E-Commerce

![App Preview](https://imgix.cosmicjs.com/d6f11bc0-8123-11f1-90a0-bb34f9b6dfc3-autopilot-photo-1533867617858-e7b97e060509-1784212635508.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

**Ciao** is a luxurious, editorial-style fashion e-commerce storefront built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). Inspired by high-fashion houses, it presents products, categories, and verified customer reviews in a refined, minimal aesthetic.

## Features

- 🛍️ **Product Catalog** — Browse products with pricing, sale prices, galleries, materials & care, and inventory status
- 🏷️ **Category Collections** — Explore curated categories with banner imagery and ordered display
- ⭐ **Customer Reviews** — Verified-purchase reviews with star ratings tied to specific products
- 🖼️ **Editorial Homepage** — Hero, featured products, and category showcase in a luxury layout
- 📱 **Fully Responsive** — Elegant on mobile, tablet, and desktop
- ⚡ **Server Components** — Fast, secure server-side data fetching from Cosmic
- 🎨 **Refined Design** — Serif display type, generous whitespace, and monochrome palette

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a58ebe5bd928dd2f87bc69f&clone_repository=6a58eda6bd928dd2f87bc6f6)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for an online store with products (including images, pricing, description, and inventory status), product categories, and customer reviews.
>
> User instructions: An high end fashion e-commerce store with products, categories, and customer reviews"

### Code Generation Prompt

> Build a Next.js application for an online business called "Ciao". The content is managed in Cosmic CMS with the following object types: categories, products, reviews. Create a beautiful, modern, responsive design with a homepage and pages for each content type. An high end fashion e-commerce store with products, categories, and customer reviews. Style inspired by https://www.gucci.com/us/en.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account and bucket with `categories`, `products`, and `reviews` object types

### Installation

```bash
bun install
```

Set your environment variables (these are provided automatically in the Cosmic dashboard):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch featured products with connected category data
const { objects: products } = await cosmic.objects
  .find({ type: 'products', 'metadata.featured': true })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch reviews for a specific product by id
const { objects: reviews } = await cosmic.objects
  .find({ type: 'reviews', 'metadata.product': productId })
  .depth(1)
```

## Cosmic CMS Integration

This app reads from three object types:

- **categories** — `name`, `description`, `banner_image`, `display_order`
- **products** — `product_name`, `description`, `price`, `sale_price`, `sku`, `main_image`, `gallery`, `inventory_status`, `available_quantity`, `materials_care`, `category`, `featured`
- **reviews** — `reviewer_name`, `headline`, `rating`, `review_text`, `verified_purchase`, `product`

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

- **Vercel** — Import the repo, set the three `COSMIC_*` environment variables, and deploy.
- **Netlify** — Connect the repo, add environment variables, deploy.

<!-- README_END -->