# mbifenzi.vercel.app

My portfolio: the apps I ship, the platforms I've built at UM6P, and projects from 1337.

Live at https://mbifenzi.vercel.app

## Stack

Next.js (App Router), TypeScript, Tailwind CSS and shadcn/ui, deployed on Vercel.

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
- Resume download: `my-portfolio/public/Mohamed-bifenzi.pdf`
- Link preview image: `my-portfolio/public/og.png`
