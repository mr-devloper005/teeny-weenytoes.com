import Link from 'next/link'
import { ArrowRight, Search, Book, FileText, User, Shield, CreditCard, MessageSquare, HelpCircle } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const CATEGORIES = [
  { icon: FileText, title: 'Publishing PDFs', count: 14, desc: 'Upload, organize, and share documents.' },
  { icon: User, title: 'Your Profile', count: 9, desc: 'Account, verification, and identity.' },
  { icon: Shield, title: 'Privacy & Safety', count: 7, desc: 'Data, moderation, and trust.' },
  { icon: CreditCard, title: 'Billing', count: 5, desc: 'Plans, invoices, and payments.' },
  { icon: Book, title: 'Using the Library', count: 11, desc: 'Search, filters, and discovery.' },
  { icon: MessageSquare, title: 'Community', count: 6, desc: 'Comments, reviews, and etiquette.' },
]

const FAQS = [
  { q: 'How do I upload my first PDF?', a: 'Sign in, open your dashboard, and click "Upload PDF". Add a title, description, and tags — that\'s it.' },
  { q: 'Is there a file size limit?', a: 'Free accounts support up to 50MB per file. Larger uploads are available on paid plans.' },
  { q: 'How do I verify my profile?', a: 'Go to profile settings and submit your verification request with a link or supporting document.' },
  { q: 'Can I delete my documents?', a: 'Yes. Open any document from your dashboard and select delete. Removal is immediate and permanent.' },
  { q: 'How do downloads and analytics work?', a: 'Each PDF has a live analytics panel showing views, downloads, and reader countries.' },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(180deg,#eef4ff_0%,#ffffff_70%)]">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2563eb]/20 bg-white px-4 py-1.5 text-xs font-semibold text-[#2563eb]">
              <HelpCircle className="h-3.5 w-3.5" />
              Help Center
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              How can we <span className="text-[#2563eb]">help</span> you today?
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Answers, guides, and walkthroughs for everything on {SITE_CONFIG.name}.
            </p>

            <form
              action="/search"
              method="get"
              className="mx-auto mt-10 flex max-w-xl items-center gap-2 rounded-full border border-slate-200 bg-white p-2 shadow-[0_14px_40px_rgba(15,23,42,0.06)]"
            >
              <Search className="ml-4 h-4 w-4 text-slate-400" />
              <input
                name="q"
                placeholder="Search for articles, guides, or topics…"
                className="flex-1 bg-transparent px-2 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1d4ed8]"
              >
                Search
              </button>
            </form>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Browse by topic</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => {
              const Icon = c.icon
              return (
                <Link
                  key={c.title}
                  href="#"
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#2563eb]/30 hover:shadow-[0_16px_40px_rgba(37,99,235,0.1)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef4ff] text-[#2563eb] transition group-hover:bg-[#2563eb] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">{c.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{c.desc}</p>
                  <p className="mt-4 text-sm font-semibold text-[#2563eb]">{c.count} articles &rarr;</p>
                </Link>
              )
            })}
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">FAQ</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">Frequently asked questions</h2>
            </div>
            <div className="mt-12 space-y-3">
              {FAQS.map((f, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#2563eb]/30"
                >
                  <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-slate-950">
                    {f.q}
                    <ArrowRight className="h-4 w-4 text-[#2563eb] transition group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <MessageSquare className="mx-auto h-10 w-10 text-[#2563eb]" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Still need help?</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
            Our team replies within one business day.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1d4ed8]"
          >
            Contact Support
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
