# mbifenzi.vercel.app

![Preview of the portfolio](https://mbifenzi.vercel.app/opengraph-image)

My portfolio: the apps I ship, the platforms I've built at UM6P, and projects from 1337.

Live at https://mbifenzi.vercel.app

## Stack

Next.js (App Router), TypeScript and Tailwind CSS, deployed on Vercel.

## Run it

```bash
cd my-portfolio
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Editing content

- Projects: `my-portfolio/data/projects.ts` (set `featured: true` to show one on the home page)
- Experience, education, skills and the intro: `my-portfolio/app/page.tsx`
- Name, title and hero stats (also used in the link preview): `my-portfolio/data/profile.ts`
- Resume download: `my-portfolio/public/Mohamed-bifenzi.pdf`
- Favicon and link preview images are generated: `my-portfolio/app/icon.tsx`, `my-portfolio/app/opengraph-image.tsx` and `my-portfolio/app/work/[slug]/opengraph-image.tsx`
