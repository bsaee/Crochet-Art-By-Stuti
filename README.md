# Crochet Art by Stuti

A static product catalogue for handmade crochet items.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion (motion/react)

## Setup

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env.local` file (not committed):

```
VITE_WHATSAPP_NUMBER=919876543210
```

## Adding / Editing Products

Edit `public/products.json` directly. Each product has this shape:

```json
{
  "id": "unique-string",
  "name": "Product Name",
  "price": 499,
  "categories": ["newly-launched", "keychains"],
  "description": "A lovely handmade item.",
  "size": "10cm x 10cm",
  "images": ["/images/product1-a.jpg", "/images/product1-b.jpg"],
  "createdAt": 1715000000000
}
```

`categories` is an array — a product can belong to one or more categories. A product tagged `["newly-launched", "keychains"]` will appear under both the "Newly Launched" and "Keychains" filter tabs.

### Available category values

- `newly-launched`
- `hair-accessories`
- `bags`
- `keychains`
- `others`

### Images

Place product images in `public/images/`. Reference them as `/images/filename.jpg` in `products.json`. These are committed to the repo so no external image host is needed.

`createdAt` is a Unix timestamp in milliseconds — products are sorted newest first. You can get the current timestamp in JS with `Date.now()`.

## Deployment (Render)

Build command: `npm run build`  
Publish directory: `dist`

Set `VITE_WHATSAPP_NUMBER` as an environment variable in the Render dashboard.
