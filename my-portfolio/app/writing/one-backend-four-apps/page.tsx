import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { articles } from "@/data/articles"

const article = articles.find((item) => item.slug === "one-backend-four-apps")!

export const metadata: Metadata = {
  title: `${article.title} - Mohamed Bifenzi`,
  description: article.summary,
  openGraph: { title: article.title, description: article.summary, type: "article" },
}

const ledgerCode = `class CreditEntry(models.Model):
    account = models.ForeignKey(Account, on_delete=models.PROTECT, related_name="entries")
    amount = models.IntegerField()  # positive adds credits, negative spends or takes back
    kind = models.CharField(max_length=30)  # "purchase", "generation", "refund", ...
    reference = models.CharField(max_length=120, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)


def add_entry(account, amount, kind, reference):
    # The unique reference makes this safe to call twice for the same event.
    return CreditEntry.objects.get_or_create(
        reference=reference,
        defaults={"account": account, "amount": amount, "kind": kind},
    )


@transaction.atomic
def spend(account, cost, reference):
    # Lock the account row so two requests can't spend the same credits.
    locked = Account.objects.select_for_update().get(pk=account.pk)
    balance = locked.entries.aggregate(total=Sum("amount"))["total"] or 0
    if balance < cost:
        raise InsufficientCredits()
    return add_entry(locked, -cost, "generation", reference)`

const layoutCode = `backend/
  config/            settings, root URLs
  products/
    ryddar/          rides, spots, alerts, SOS (and the shared accounts app)
    decorifai/       room designs, videos, credits
    cartoonifai/     styles, portraits, credits
    mood2drink/      drink catalogue
  scripts/           deploy and backup`

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl md:text-2xl font-semibold tracking-tight mt-12 mb-4">{children}</h2>
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-200 leading-relaxed mb-4">{children}</p>
}

function Code({ children }: { children: string }) {
  return (
    <pre className="rounded-lg border border-gray-800 bg-gray-950 p-4 my-6 overflow-x-auto text-sm leading-relaxed text-gray-200">
      <code className="font-mono">{children}</code>
    </pre>
  )
}

function C({ children }: { children: React.ReactNode }) {
  return <code className="font-mono text-green-400 text-[0.9em]">{children}</code>
}

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <main id="content">
        <article className="max-w-3xl mx-auto px-4 py-12">
          <Link href="/writing" className="text-sm text-gray-400 hover:text-green-400 flex items-center gap-2 mb-8">
            <ArrowLeft className="h-4 w-4" /> All writing
          </Link>

          <p className="font-mono text-sm text-gray-400 mb-2">
            {article.date} · {article.readingTime}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{article.title}</h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">{article.summary}</p>

          <H2>Why one backend</H2>
          <P>
            I build and run four iOS apps on my own: Ryddar for motorcycle riders, DecorifAI for AI interior design,
            CartoonifAI for AI portraits and Mood to Drink for drink ideas. They look nothing alike, but underneath they
            need the same things: users and sign-in, in-app purchases, push notifications, file storage, an admin, and a
            deploy pipeline that works when I'm asleep.
          </P>
          <P>
            Four backends would mean four copies of all of that to patch, monitor and pay for. So all four apps talk to
            one Django REST Framework project, deployed once. The rule that makes it work is simple: everything shared
            lives in one place, and everything product-specific lives in that product's own Django app.
          </P>

          <H2>One Django app per product</H2>
          <P>
            Each product is a normal Django app under <C>products/</C>, with its own models, migrations, admin,
            serializers, URLs and tests. Its endpoints live under its own prefix, like <C>/api/decorifai/</C>, so the
            mobile apps never see each other's routes.
          </P>
          <Code>{layoutCode}</Code>
          <P>
            The only thing products share is the accounts code (users and social sign-in). They don't touch each other's
            models, so a change to DecorifAI's credits can't break Ryddar's group rides, and each product has its own
            test suite in CI.
          </P>

          <H2>Shared auth, without forcing sign-up</H2>
          <P>
            There is one <C>User</C> model for every app, with JWT authentication (SimpleJWT, rotating refresh tokens
            and a blacklist) and Sign in with Apple and Google. But nobody wants to create an account before trying an
            AI photo app. So the AI apps start with an anonymous <em>installation</em>: on first launch the server
            issues a random token and stores only its hash, and credits belong to that installation. If the user signs
            in later, the installation is linked to their account and nothing is lost.
          </P>

          <H2>Credits as a ledger</H2>
          <P>
            The AI apps sell credits. The first version of anything involving money is usually a <C>balance</C> column,
            and it breaks as soon as the real world shows up: the payment provider retries a webhook, a user
            double-taps, a network timeout makes the app send the same request again.
          </P>
          <P>
            So credits are a ledger. Every change (a purchase, a monthly allowance, a generation, a refund, a reward) is
            a row with a unique reference, such as the store transaction ID. The balance is the sum of the rows. Here is
            a simplified version of the idea:
          </P>
          <Code>{ledgerCode}</Code>
          <P>
            Two things make it safe. The unique reference means a retried event finds the existing row instead of adding
            a second one. And spending runs inside a transaction with <C>select_for_update</C> on the account row, so
            two requests arriving at the same moment can't both spend the last credit. Refunds from the App Store are
            just negative entries tied to the original purchase, which also gives me a full history when a user writes
            to support.
          </P>

          <H2>Slow, expensive, sometimes failing AI jobs</H2>
          <P>
            A DecorifAI design or a CartoonifAI portrait runs on Replicate and can take from a few seconds to a minute.
            The API never waits for it. It reserves the credits, starts the prediction with a webhook URL, and returns
            immediately. Each request carries an idempotency key, so a double-tap returns the same job instead of
            charging twice. The app then polls the job's status every few seconds.
          </P>
          <P>
            When Replicate calls the webhook, the backend checks its signature before trusting anything in it. Webhooks
            can arrive late or not at all, so each poll from the app also asks Replicate directly. If the job failed or
            was cancelled, the same code path marks it failed and writes a refund entry. Users never pay for a result
            they didn't get, and because the refund also has a unique reference, it can't happen twice.
          </P>

          <H2>Running it alone</H2>
          <P>
            The backend runs in Docker on a Hetzner server behind Caddy, which handles HTTPS. Every push runs the test
            suite in GitHub Actions, and the production deploy only starts after CI passes. A deploy rebuilds the image,
            then restarts the containers and runs migrations, and a script handles database backups. As the only
            developer, I rely on that pipeline: a fix ships only after the same tests pass every time.
          </P>

          <H2>What I'd do differently</H2>
          <P>
            The two AI apps grew one after the other, so some of their code (the Replicate and Cloudinary clients, the
            credits operations) is similar rather than shared. I'd extract that into one internal package for AI jobs
            and credits that both products use. I'd also move the accounts app out of the Ryddar package, where it
            started, into its own top-level app. And one database for everything is simple, but it means a slow
            migration in one product delays deploys for all four. Today migrations run right after the new containers
            start; as the apps grow, I'd run them as a separate step before the new code goes live.
          </P>
          <P>
            Still, for one developer, one well-separated Django project has been the right call: four apps on the App
            Store, one place to fix bugs, and one deploy pipeline to trust.
          </P>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap gap-4">
            <Link href="/work/shared-django-backend" className="btn">
              See the case study
            </Link>
            <Link href="/#contact" className="btn">
              Get in touch
            </Link>
          </div>
        </article>
      </main>
    </div>
  )
}
