import Link from 'next/link'
import { Search, FileText, Users, Sparkles, ArrowRight, Calendar, User } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'
import { fetchSiteFeed } from '@/lib/site-connector'
import { buildPostUrl, getPostTaskKey, getPostImages } from '@/lib/task-data'
import { getMockPostsForTask } from '@/lib/mock-posts'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { CATEGORY_OPTIONS } from '@/lib/categories'
import type { SitePost } from '@/lib/site-connector'

export const revalidate = 3

const matchText = (value: string, query: string) => value.toLowerCase().includes(query)
const stripHtml = (value: string) => value.replace(/<[^>]*>/g, ' ')
const compactText = (value: unknown) => {
  if (typeof value !== 'string') return ''
  return stripHtml(value).replace(/\s+/g, ' ').trim().toLowerCase()
}

const TASK_FILTERS: Array<{ key: 'all' | TaskKey; label: string; icon: any }> = [
  { key: 'all', label: 'All', icon: Sparkles },
  { key: 'pdf', label: 'PDFs', icon: FileText },
  { key: 'profile', label: 'Profiles', icon: Users },
]

const POPULAR_CATEGORIES = ['business', 'technology', 'education', 'finance', 'health', 'travel', 'food', 'lifestyle']

const POPULAR_TERMS = ['research', 'design', 'marketing', 'startup', 'finance', 'productivity']

function getDate(post: SitePost) {
  const raw = post.publishedAt || post.createdAt
  if (!raw) return ''
  try {
    return new Date(raw).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  } catch {
    return ''
  }
}

function getCategory(post: SitePost) {
  const c = post.content && typeof post.content === 'object' ? (post.content as any) : {}
  return typeof c.category === 'string' ? c.category : (post.tags?.[0] || '')
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; category?: string; task?: string; master?: string }>
}) {
  const resolved = (await searchParams) || {}
  const query = (resolved.q || '').trim()
  const normalized = query.toLowerCase()
  const category = (resolved.category || '').trim().toLowerCase()
  const task = (resolved.task || '').trim().toLowerCase()
  const useMaster = resolved.master !== '0'

  const feed = await fetchSiteFeed(
    useMaster ? 1000 : 300,
    useMaster
      ? { fresh: true, category: category || undefined, task: task || undefined }
      : undefined
  )

  const posts = feed?.posts?.length
    ? feed.posts
    : useMaster
      ? []
      : SITE_CONFIG.tasks.flatMap((t) => getMockPostsForTask(t.key))

  const filtered = posts.filter((post) => {
    const content = post.content && typeof post.content === 'object' ? post.content : {}
    const typeText = compactText((content as any).type)
    if (typeText === 'comment') return false
    const description = compactText((content as any).description)
    const body = compactText((content as any).body)
    const excerpt = compactText((content as any).excerpt)
    const categoryText = compactText((content as any).category)
    const tags = Array.isArray(post.tags) ? post.tags.join(' ') : ''
    const tagsText = compactText(tags)
    const derivedCategory = categoryText || tagsText
    if (category && !derivedCategory.includes(category)) return false
    if (task && typeText && typeText !== task) return false
    if (!normalized.length) return true
    return (
      matchText(compactText(post.title || ''), normalized) ||
      matchText(compactText(post.summary || ''), normalized) ||
      matchText(description, normalized) ||
      matchText(body, normalized) ||
      matchText(excerpt, normalized) ||
      matchText(tagsText, normalized)
    )
  })

  const results = normalized.length > 0 ? filtered : filtered.slice(0, 24)
  const buildUrl = (overrides: Record<string, string | undefined>) => {
    const params = new URLSearchParams()
    const merged = { q: query, category, task, ...overrides }
    Object.entries(merged).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })
    const qs = params.toString()
    return qs ? `/search?${qs}` : '/search'
  }

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(180deg,#eef4ff_0%,#ffffff_70%)]">
          <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2563eb]/20 bg-white px-4 py-1.5 text-xs font-semibold text-[#2563eb]">
              <Search className="h-3.5 w-3.5" />
              Search {SITE_CONFIG.name}
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              {query ? (
                <>
                  Results for <span className="text-[#2563eb]">&ldquo;{query}&rdquo;</span>
                </>
              ) : (
                <>
                  Find anything in the <span className="text-[#2563eb]">library</span>.
                </>
              )}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Search across PDFs and profiles. Filter by topic, category, or content type.
            </p>

            <form
              action="/search"
              method="get"
              className="mx-auto mt-10 flex max-w-2xl items-center gap-2 rounded-full border border-slate-200 bg-white p-2 shadow-[0_14px_40px_rgba(15,23,42,0.06)]"
            >
              {category ? <input type="hidden" name="category" value={category} /> : null}
              {task ? <input type="hidden" name="task" value={task} /> : null}
              <Search className="ml-4 h-4 w-4 text-slate-400" />
              <input
                name="q"
                defaultValue={query}
                placeholder="Search PDFs, profiles, topics, authors…"
                className="flex-1 bg-transparent px-2 text-sm focus:outline-none"
                autoFocus
              />
              <button
                type="submit"
                className="rounded-full bg-[#2563eb] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.3)] hover:bg-[#1d4ed8]"
              >
                Search
              </button>
            </form>

            {!query ? (
              <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2">
                <span className="text-xs font-semibold text-slate-500">Popular:</span>
                {POPULAR_TERMS.map((term) => (
                  <Link
                    key={term}
                    href={`/search?q=${encodeURIComponent(term)}`}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium capitalize text-slate-600 hover:border-[#2563eb]/30 hover:text-[#2563eb]"
                  >
                    {term}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Type:</span>
                {TASK_FILTERS.map((t) => {
                  const Icon = t.icon
                  const isActive = (t.key === 'all' && !task) || t.key === task
                  return (
                    <Link
                      key={t.key}
                      href={buildUrl({ task: t.key === 'all' ? undefined : t.key })}
                      className={
                        isActive
                          ? 'inline-flex items-center gap-1.5 rounded-full bg-[#2563eb] px-4 py-2 text-sm font-semibold text-white'
                          : 'inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-[#2563eb]/30 hover:text-[#2563eb]'
                      }
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {t.label}
                    </Link>
                  )
                })}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Category:</span>
                <Link
                  href={buildUrl({ category: undefined })}
                  className={
                    !category
                      ? 'rounded-full bg-slate-950 px-3 py-1.5 text-xs font-semibold text-white'
                      : 'rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-[#2563eb]/30 hover:text-[#2563eb]'
                  }
                >
                  All
                </Link>
                {POPULAR_CATEGORIES.map((slug) => {
                  const cat = CATEGORY_OPTIONS.find((c) => c.slug === slug)
                  if (!cat) return null
                  const isActive = category === slug
                  return (
                    <Link
                      key={slug}
                      href={buildUrl({ category: slug })}
                      className={
                        isActive
                          ? 'rounded-full bg-slate-950 px-3 py-1.5 text-xs font-semibold text-white'
                          : 'rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-[#2563eb]/30 hover:text-[#2563eb]'
                      }
                    >
                      {cat.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">
                  {query ? 'Search results' : 'Latest from the library'}
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  {results.length} {results.length === 1 ? 'result' : 'results'}
                </h2>
              </div>
              {(query || category || task) ? (
                <Link
                  href="/search"
                  className="text-sm font-semibold text-[#2563eb] hover:underline"
                >
                  Clear filters
                </Link>
              ) : null}
            </div>

            {results.length ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {results.map((post) => {
                  const taskKey = getPostTaskKey(post)
                  const href = taskKey ? buildPostUrl(taskKey, post.slug) : `/posts/${post.slug}`
                  const cover = getPostImages(post)[0]
                  const cat = getCategory(post)
                  const date = getDate(post)
                  const isProfile = taskKey === 'profile'
                  const initial = (post.title || 'U').charAt(0).toUpperCase()

                  return (
                    <Link
                      key={post.id}
                      href={href}
                      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-[#2563eb]/30 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
                    >
                      <div className="relative h-44 overflow-hidden bg-slate-100">
                        {cover ? (
                          <ContentImage
                            src={cover}
                            alt={post.title}
                            fill
                            className="object-cover transition group-hover:scale-[1.03]"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#2563eb] to-[#60a5fa]">
                            {isProfile ? (
                              <span className="text-5xl font-bold text-white/95">{initial}</span>
                            ) : (
                              <FileText className="h-12 w-12 text-white/95" />
                            )}
                          </div>
                        )}
                        {taskKey ? (
                          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold capitalize text-[#2563eb] backdrop-blur">
                            {isProfile ? <Users className="h-3 w-3" /> : <FileText className="h-3 w-3" />}
                            {taskKey}
                          </span>
                        ) : null}
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        {cat ? (
                          <span className="inline-flex w-fit rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold capitalize text-[#2563eb]">
                            {cat}
                          </span>
                        ) : null}
                        <h3 className="mt-3 line-clamp-2 text-lg font-semibold leading-snug text-slate-950 group-hover:text-[#2563eb]">
                          {post.title}
                        </h3>
                        {post.summary ? (
                          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{post.summary}</p>
                        ) : null}
                        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
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
                    </Link>
                  )
                })}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#2563eb]">
                  <Search className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight">No matches found</h3>
                <p className="mx-auto mt-3 max-w-md text-sm text-slate-600">
                  {query
                    ? `Nothing matches "${query}" with the current filters. Try a different keyword or clear filters.`
                    : 'Start typing to search across the library.'}
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/search"
                    className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1d4ed8]"
                  >
                    Clear filters
                  </Link>
                  <Link
                    href="/pdf"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Browse Library
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
