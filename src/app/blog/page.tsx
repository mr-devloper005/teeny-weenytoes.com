import Link from 'next/link'
import { ArrowRight, Calendar, Clock, FileText, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const FEATURED = {
  title: 'Why structured PDFs win in the age of AI search',
  excerpt:
    'AI-powered discovery rewards well-structured documents. Here is how to prepare your PDFs for the next generation of readers, researchers, and assistants.',
  date: 'April 18, 2026',
  readTime: '7 min read',
  category: 'Publishing',
  image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80',
}

const POSTS = [
  {
    title: 'Building a profile that readers actually remember',
    excerpt: 'Small design choices that turn a creator profile into a trusted destination.',
    date: 'April 12, 2026',
    readTime: '5 min read',
    category: 'Profiles',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
  },
  {
    title: '10 ways to organize a growing PDF library',
    excerpt: 'Tags, collections, and metadata patterns that scale from 10 to 10,000 files.',
    date: 'April 05, 2026',
    readTime: '6 min read',
    category: 'Library',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
  },
  {
    title: 'Publishing research: the metadata that matters most',
    excerpt: 'Which fields help discovery, which are noise, and how to strike the right balance.',
    date: 'March 28, 2026',
    readTime: '4 min read',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80',
  },
  {
    title: 'From manuscript to public library in 10 minutes',
    excerpt: 'A step-by-step walkthrough of publishing your first PDF on the platform.',
    date: 'March 20, 2026',
    readTime: '8 min read',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&q=80',
  },
  {
    title: 'The art of writing a great document summary',
    excerpt: 'A clear summary is the first impression your PDF makes. Make it count.',
    date: 'March 14, 2026',
    readTime: '5 min read',
    category: 'Writing',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
  },
  {
    title: 'Why verified profiles matter for readers and authors',
    excerpt: 'Trust signals that make or break whether a reader downloads your work.',
    date: 'March 08, 2026',
    readTime: '6 min read',
    category: 'Trust',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
  },
]

const CATEGORIES = ['All', 'Publishing', 'Profiles', 'Library', 'Research', 'Guides', 'Writing']

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(180deg,#eef4ff_0%,#ffffff_70%)]">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2563eb]/20 bg-white px-4 py-1.5 text-xs font-semibold text-[#2563eb]">
              <Sparkles className="h-3.5 w-3.5" />
              {SITE_CONFIG.name} Blog
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Ideas, guides &amp; stories from the <span className="text-[#2563eb]">library</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Publishing tips, profile playbooks, and behind-the-scenes notes for authors, researchers, and curators.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="#"
            className="group grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-4 transition hover:shadow-[0_30px_80px_rgba(15,23,42,0.1)] lg:grid-cols-[1.1fr_0.9fr] lg:p-6"
          >
            <div className="overflow-hidden rounded-[1.4rem]">
              <img
                src={FEATURED.image}
                alt={FEATURED.title}
                className="h-full min-h-[320px] w-full object-cover transition group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-col justify-center p-4 lg:p-6">
              <span className="inline-flex w-fit rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold text-[#2563eb]">
                {FEATURED.category}
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight lg:text-4xl">
                {FEATURED.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{FEATURED.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {FEATURED.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {FEATURED.readTime}
                </span>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb]">
                Read article
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                className={
                  i === 0
                    ? 'rounded-full bg-[#2563eb] px-4 py-2 text-sm font-semibold text-white'
                    : 'rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-[#2563eb]/30 hover:text-[#2563eb]'
                }
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <Link
                key={post.title}
                href="#"
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-[#2563eb]/30 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-48 w-full object-cover transition group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold text-[#2563eb]">
                    {post.category}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold leading-tight text-slate-950 group-hover:text-[#2563eb]">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                  <div className="mt-5 flex items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <FileText className="mx-auto h-10 w-10 text-[#2563eb]" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Get fresh posts in your inbox
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
              Weekly notes on publishing, profiles, and library craft. No spam.
            </p>
            <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="you@example.com"
                className="h-12 flex-1 rounded-full border border-slate-200 bg-white px-5 text-sm focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#2563eb] px-6 text-sm font-semibold text-white hover:bg-[#1d4ed8]"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
