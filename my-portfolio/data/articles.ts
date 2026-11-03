export interface Article {
  slug: string
  title: string
  summary: string
  date: string
  readingTime: string
}

export const articles: Article[] = [
  {
    slug: "one-backend-four-apps",
    title: "One Django backend for four App Store apps",
    summary:
      "How I run Ryddar, DecorifAI, CartoonifAI and Mood to Drink from a single Django project: one app per product, shared auth, a credits ledger that survives retries, and async AI jobs.",
    date: "November 2026",
    readingTime: "6 min read",
  },
]
