import Link from 'next/link'
import {
  ArrowRight,
  Calendar,
  Download,
  Eye,
  FileText,
  Search,
  Sparkles,
  Tag as TagIcon,
  User,
  Users,
  Star,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'
import { fetchTaskPosts, getPostImages, buildPostUrl } from '@/lib/task-data'
import { getTaskConfig, SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'
import type { SitePost } from '@/lib/site-connector'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

function getMeta(post: SitePost) {
  const content = (post.content && typeof post.content === 'object' ? post.content : {}) as Record<string, unknown>
  return {
    category: typeof content.category === 'string' ? (content.category as string) : (post.tags?.[0] || ''),
    role: typeof content.role === 'string' ? (content.role as string) : '',
    location: typeof content.location === 'string' ? (content.location as string) : (typeof content.address === 'string' ? (content.address as string) : ''),
    pages: typeof content.pages === 'number' ? content.pages : null,
    fileSize: typeof content.fileSize === 'string' ? (content.fileSize as string) : '',
  }
}

function getCover(post: SitePost) {
  const images = getPostImages(post)
  return images[0] || ''
}

function getDate(post: SitePost) {
  const raw = post.publishedAt || post.createdAt
  if (!raw) return ''
  try {
    return new Date(raw).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  } catch {
    return ''
  }
}

const POPULAR_CATEGORIES = ['business', 'technology', 'education', 'finance', 'health', 'travel', 'food', 'lifestyle']

export async function TaskListPageOverride({ task, category }: { task: TaskKey; category?: string }) {
  const taskConfig = getTaskConfig(task)
  const posts = await fetchTaskPosts(task, 30)
  const activeCategory = category ? normalizeCategory(category) : 'all'
  const filteredPosts =
    activeCategory === 'all'
      ? posts
      : posts.filter((p) => {
          const meta = getMeta(p)
          return (meta.category || '').toLowerCase() === activeCategory.toLowerCase()
        })

  const isPdf = task === 'pdf'
  const baseRoute = taskConfig?.route || (isPdf ? '/pdf' : '/profile')

  const pageTitle = isPdf ? 'PDF Library' : 'Creator Profiles'
  const pageTagline = isPdf ? 'Discover & download' : 'Verified people'
  const heroTitle = isPdf ? (
    <>
      A clean library of <span className="text-[#2563eb]">PDFs</span>, ready to read.
    </>
  ) : (
    <>
      Meet the <span className="text-[#2563eb]">authors</span> behind the library.
    </>
  )
  const heroSub = isPdf
    ? `Browse, search, and download well-organized documents across ${POPULAR_CATEGORIES.length}+ categories on ${SITE_CONFIG.name}.`
    : `Verified author and creator profiles on ${SITE_CONFIG.name}. Follow people you trust and explore their published work.`

  const featured = filteredPosts[0]
  const rest = filteredPosts.slice(1)
  const totalCount = posts.length
  const HeroIcon = isPdf ? FileText : Users

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(180deg,#eef4ff_0%,#ffffff_70%)]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#2563eb]/20 bg-white px-4 py-1.5 text-xs font-semibold text-[#2563eb]">
                  <HeroIcon className="h-3.5 w-3.5" />
                  {pageTagline}
                </span>
                <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                  {heroTitle}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">{heroSub}</p>

                <form
                  action="/search"
                  method="get"
                  className="mt-8 flex max-w-xl items-center gap-2 rounded-full border border-slate-200 bg-white p-2 shadow-[0_14px_40px_rgba(15,23,42,0.06)]"
                >
                  <input type="hidden" name="task" value={task} />
                  <Search className="ml-3 h-4 w-4 text-slate-400" />
                  <input
                    name="q"
                    placeholder={isPdf ? 'Search PDFs by title, topic, or author…' : 'Search creators by name or expertise…'}
                    className="flex-1 bg-transparent px-2 text-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1d4ed8]"
                  >
                    Search
                  </button>
                </form>

                <div className="mt-8 grid grid-cols-3 gap-4 sm:max-w-md">
                  <div>
                    <p className="text-2xl font-bold text-[#2563eb]">{totalCount}+</p>
                    <p className="text-xs text-slate-500">{isPdf ? 'Published PDFs' : 'Creator profiles'}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#2563eb]">{POPULAR_CATEGORIES.length}+</p>
                    <p className="text-xs text-slate-500">Categories</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#2563eb]">100%</p>
                    <p className="text-xs text-slate-500">Free to browse</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                  <img
                    src={
                      isPdf
                        ? 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80'
                        : 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80'
                    }
                    alt={pageTitle}
                    className="h-[420px] w-full object-cover"
                  />
                </div>
                <div className="absolute -left-4 top-8 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 pr-5 shadow-[0_14px_40px_rgba(15,23,42,0.12)] sm:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563eb] text-white">
                    {isPdf ? <Download className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      {isPdf ? 'Instant Downloads' : 'Verified Profiles'}
                    </p>
                    <p className="text-xs text-slate-500">{isPdf ? 'No signup needed' : 'Trusted authors'}</p>
                  </div>
                </div>
                <div className="absolute -right-4 bottom-10 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 pr-5 shadow-[0_14px_40px_rgba(15,23,42,0.12)] sm:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563eb] text-white">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Updated daily</p>
                    <p className="text-xs text-slate-500">Fresh content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Browse:</span>
              <Link
                href={baseRoute}
                className={
                  activeCategory === 'all'
                    ? 'rounded-full bg-[#2563eb] px-4 py-2 text-sm font-semibold text-white'
                    : 'rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-[#2563eb]/30 hover:text-[#2563eb]'
                }
              >
                All
              </Link>
              {POPULAR_CATEGORIES.map((slug) => {
                const cat = CATEGORY_OPTIONS.find((c) => c.slug === slug)
                if (!cat) return null
                const isActive = activeCategory === slug
                return (
                  <Link
                    key={slug}
                    href={`${baseRoute}?category=${slug}`}
                    className={
                      isActive
                        ? 'rounded-full bg-[#2563eb] px-4 py-2 text-sm font-semibold text-white'
                        : 'rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-[#2563eb]/30 hover:text-[#2563eb]'
                    }
                  >
                    {cat.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {filteredPosts.length === 0 ? (
          <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#2563eb]">
              <HeroIcon className="h-8 w-8" />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight">
              {isPdf ? 'No PDFs found yet' : 'No profiles found yet'}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
              {activeCategory !== 'all'
                ? `Nothing matches the "${activeCategory}" category right now. Try clearing the filter or check back soon.`
                : `New ${isPdf ? 'PDFs' : 'profiles'} are added regularly. Check back soon or be the first to publish.`}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {activeCategory !== 'all' ? (
                <Link
                  href={baseRoute}
                  className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1d4ed8]"
                >
                  Clear filter
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1d4ed8]"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </section>
        ) : (
          <>
            {featured ? (
              <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-6 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">Featured</p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight">
                      {isPdf ? 'Editor\u2019s pick' : 'Highlighted creator'}
                    </h2>
                  </div>
                </div>
                {isPdf ? (
                  <FeaturedPdfCard post={featured} baseRoute={baseRoute} />
                ) : (
                  <FeaturedProfileCard post={featured} baseRoute={baseRoute} />
                )}
              </section>
            ) : null}

            <section className="bg-slate-50">
              <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-10 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">
                      {isPdf ? 'All Documents' : 'All Creators'}
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight">
                      {isPdf ? 'Browse the library' : 'Explore profiles'}
                    </h2>
                  </div>
                  <p className="text-sm text-slate-500">
                    Showing {filteredPosts.length} {isPdf ? 'documents' : 'profiles'}
                  </p>
                </div>

                {isPdf ? (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {rest.map((post) => (
                      <PdfCard key={post.id} post={post} baseRoute={baseRoute} />
                    ))}
                  </div>
                ) : (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {rest.map((post) => (
                      <ProfileCard key={post.id} post={post} baseRoute={baseRoute} />
                    ))}
                  </div>
                )}
              </div>
            </section>
          </>
        )}

        <section className="bg-[#2563eb]">
          <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 lg:px-8">
            <Sparkles className="mx-auto h-8 w-8 text-white/90" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {isPdf ? 'Publish your own PDF' : 'Become a verified creator'}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-blue-100">
              {isPdf
                ? `Add your document to the ${SITE_CONFIG.name} library — clean metadata, instant search, free downloads.`
                : `Claim your profile on ${SITE_CONFIG.name} and showcase your published work to a growing audience.`}
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2563eb] hover:bg-slate-100"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={isPdf ? '/profile' : '/pdf'}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20"
              >
                {isPdf ? 'Browse Profiles' : 'Browse Library'}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function FeaturedPdfCard({ post, baseRoute }: { post: SitePost; baseRoute: string }) {
  const meta = getMeta(post)
  const cover = getCover(post)
  const date = getDate(post)
  const href = `${baseRoute}/${post.slug}`

  return (
    <Link
      href={href}
      className="group grid gap-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 transition hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)] lg:grid-cols-[0.95fr_1.05fr] lg:p-6"
    >
      <div className="relative h-72 overflow-hidden rounded-[1.4rem] bg-slate-100 lg:h-full lg:min-h-[340px]">
        {cover ? (
          <ContentImage src={cover} alt={post.title} fill className="object-cover transition group-hover:scale-[1.02]" />
        ) : (
          <div className="flex h-full items-center justify-center bg-[#eef4ff]">
            <FileText className="h-20 w-20 text-[#2563eb]" />
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center p-4 lg:p-6">
        {meta.category ? (
          <span className="inline-flex w-fit rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold capitalize text-[#2563eb]">
            {meta.category}
          </span>
        ) : null}
        <h3 className="mt-4 text-3xl font-bold leading-tight tracking-tight lg:text-4xl">{post.title}</h3>
        {post.summary ? (
          <p className="mt-4 text-base leading-8 text-slate-600">{post.summary}</p>
        ) : null}
        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-500">
          {post.authorName ? (
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.authorName}
            </span>
          ) : null}
          {date ? (
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {date}
            </span>
          ) : null}
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(37,99,235,0.35)] transition group-hover:bg-[#1d4ed8]">
            <Download className="h-4 w-4" />
            Read &amp; Download
          </span>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb]">
            View details
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}

function PdfCard({ post, baseRoute }: { post: SitePost; baseRoute: string }) {
  const meta = getMeta(post)
  const cover = getCover(post)
  const date = getDate(post)
  const href = `${baseRoute}/${post.slug}`

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-[#2563eb]/30 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
    >
      <div className="relative h-48 overflow-hidden bg-slate-100">
        {cover ? (
          <ContentImage src={cover} alt={post.title} fill className="object-cover transition group-hover:scale-[1.03]" />
        ) : (
          <div className="flex h-full items-center justify-center bg-[#eef4ff]">
            <FileText className="h-12 w-12 text-[#2563eb]" />
          </div>
        )}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#2563eb] backdrop-blur">
          <FileText className="h-3 w-3" />
          PDF
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        {meta.category ? (
          <span className="inline-flex w-fit rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold capitalize text-[#2563eb]">
            {meta.category}
          </span>
        ) : null}
        <h3 className="mt-3 line-clamp-2 text-lg font-semibold leading-snug text-slate-950 group-hover:text-[#2563eb]">
          {post.title}
        </h3>
        {post.summary ? (
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{post.summary}</p>
        ) : null}
        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              {post.authorName || 'Anonymous'}
            </span>
            {date ? (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {date}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  )
}

function FeaturedProfileCard({ post, baseRoute }: { post: SitePost; baseRoute: string }) {
  const meta = getMeta(post)
  const cover = getCover(post)
  const href = `${baseRoute}/${post.slug}`
  const initial = (post.title || 'U').charAt(0).toUpperCase()

  return (
    <Link
      href={href}
      className="group grid gap-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 transition hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)] lg:grid-cols-[0.85fr_1.15fr] lg:p-6"
    >
      <div className="relative h-72 overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-[#2563eb] to-[#60a5fa] lg:h-full lg:min-h-[320px]">
        {cover ? (
          <ContentImage src={cover} alt={post.title} fill className="object-cover transition group-hover:scale-[1.02]" />
        ) : (
          <div className="flex h-full items-center justify-center text-7xl font-bold text-white/90">{initial}</div>
        )}
      </div>
      <div className="flex flex-col justify-center p-4 lg:p-6">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          <CheckCircle2 className="h-3 w-3" />
          Verified
        </span>
        <h3 className="mt-4 text-3xl font-bold leading-tight tracking-tight lg:text-4xl">{post.title}</h3>
        {meta.role ? <p className="mt-2 text-base font-medium text-[#2563eb]">{meta.role}</p> : null}
        {post.summary ? (
          <p className="mt-4 text-base leading-8 text-slate-600">{post.summary}</p>
        ) : null}
        <div className="mt-5 flex flex-wrap gap-2">
          {(post.tags || []).slice(0, 4).map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              <TagIcon className="h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(37,99,235,0.35)] transition group-hover:bg-[#1d4ed8]">
            View Profile
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}

function ProfileCard({ post, baseRoute }: { post: SitePost; baseRoute: string }) {
  const meta = getMeta(post)
  const cover = getCover(post)
  const href = `${baseRoute}/${post.slug}`
  const initial = (post.title || 'U').charAt(0).toUpperCase()

  return (
    <Link
      href={href}
      className="group flex flex-col items-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:border-[#2563eb]/30 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
    >
      <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-[#2563eb] to-[#60a5fa] shadow-[0_10px_30px_rgba(37,99,235,0.3)]">
        {cover ? (
          <ContentImage src={cover} alt={post.title} fill className="object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-3xl font-bold text-white">{initial}</div>
        )}
      </div>
      <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
        <CheckCircle2 className="h-2.5 w-2.5" />
        Verified
      </div>
      <h3 className="mt-3 text-lg font-semibold text-slate-950 group-hover:text-[#2563eb]">{post.title}</h3>
      {meta.role ? <p className="text-xs font-medium text-[#2563eb]">{meta.role}</p> : null}
      {post.summary ? (
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{post.summary}</p>
      ) : null}
      {meta.category ? (
        <span className="mt-4 inline-flex w-fit rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold capitalize text-[#2563eb]">
          {meta.category}
        </span>
      ) : null}
      <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563eb]">
        View profile
        <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
