import Link from 'next/link'
import { ArrowRight, FileText, Users, Download, Sparkles, Shield, Zap, Star } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

export const HOME_PAGE_OVERRIDE_ENABLED = true

const FEATURES = [
  {
    icon: FileText,
    title: 'Curated PDF Library',
    body: 'Upload, organize, and share high-quality PDFs with clean metadata, tags, and instant discovery.',
  },
  {
    icon: Users,
    title: 'Verified Profiles',
    body: 'Authors, researchers, and creators get dedicated profiles to showcase their published work.',
  },
  {
    icon: Download,
    title: 'Easy Downloads',
    body: 'One-click downloads with tracking, previews, and mobile-friendly reading across all devices.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Michael T.',
    role: 'Research Lead',
    quote:
      'Working with this platform feels like partnering with an in-house team. Their attention to detail around document publishing is exceptional.',
  },
  {
    name: 'Sarah L.',
    role: 'Author & Creator',
    quote:
      'The team understood my publishing goals and delivered a profile workspace that is both reliable and easy to scale. Communication was clear throughout.',
  },
]

export async function HomePageOverride() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <NavbarShell />

      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#eef4ff_0%,#ffffff_70%)]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#2563eb]/20 bg-white px-4 py-1.5 text-xs font-semibold text-[#2563eb]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Innovative Solutions for a Digital Library
                </span>
                <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl">
                  Documents by <span className="text-[#2563eb]">Design.</span>
                  <br />
                  <span className="text-slate-400">Profiles by Purpose.</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                  We build a scalable PDF library and profile platform tailored to how authors, readers, and organizations publish, discover, and share structured knowledge.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="/pdf"
                    className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(37,99,235,0.35)] transition hover:bg-[#1d4ed8]"
                  >
                    Browse PDF Library
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/profile"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-50"
                  >
                    Explore Profiles
                  </Link>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br from-[#2563eb] to-[#60a5fa]" />
                    <div className="h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br from-[#8b5cf6] to-[#c084fc]" />
                    <div className="h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br from-[#10b981] to-[#6ee7b7]" />
                  </div>
                  <p className="text-sm text-slate-600">Trusted by authors and growing libraries</p>
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                  <img
                    src="https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&q=80"
                    alt="Document library"
                    className="h-[440px] w-full object-cover"
                  />
                </div>

                <div className="absolute -left-4 top-8 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 pr-5 shadow-[0_14px_40px_rgba(15,23,42,0.12)] sm:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563eb] text-white">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">PDF Library</p>
                    <p className="text-xs text-slate-500">Organized &amp; searchable</p>
                  </div>
                </div>

                <div className="absolute -right-4 bottom-10 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 pr-5 shadow-[0_14px_40px_rgba(15,23,42,0.12)] sm:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563eb] text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Creator Profiles</p>
                    <p className="text-xs text-slate-500">Verified &amp; structured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-950">
              Why People Choose {SITE_CONFIG.name}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We deliver document &amp; profile solutions designed to scale with your library and audience.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {FEATURES.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-8 text-center transition hover:border-[#2563eb]/30 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#2563eb] transition group-hover:bg-[#2563eb] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{feature.body}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-slate-950">
                  Where Documents Meet <span className="text-[#2563eb]">Discovery.</span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                  Founded to make publishing simple, {SITE_CONFIG.name} partners with authors and organizations to build a scalable PDF library and profile experience. We combine clean structure, thoughtful design, and fast discovery to solve real publishing challenges.
                </p>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(37,99,235,0.35)] hover:bg-[#1d4ed8]"
                >
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="mt-10 grid grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-[#2563eb]">
                      <Shield className="h-4 w-4" />
                      <p className="text-xs font-semibold uppercase tracking-wider">Trusted</p>
                    </div>
                    <p className="mt-2 text-2xl font-bold text-slate-950">100%</p>
                    <p className="text-xs text-slate-500">Verified authors</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[#2563eb]">
                      <Zap className="h-4 w-4" />
                      <p className="text-xs font-semibold uppercase tracking-wider">Fast</p>
                    </div>
                    <p className="mt-2 text-2xl font-bold text-slate-950">Instant</p>
                    <p className="text-xs text-slate-500">Access &amp; download</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[#2563eb]">
                      <Sparkles className="h-4 w-4" />
                      <p className="text-xs font-semibold uppercase tracking-wider">Clean</p>
                    </div>
                    <p className="mt-2 text-2xl font-bold text-slate-950">Modern</p>
                    <p className="text-xs text-slate-500">Reading experience</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80"
                    alt="Library"
                    className="h-60 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-slate-200 sm:mt-10">
                  <img
                    src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&q=80"
                    alt="Reading documents"
                    className="h-60 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-950">What Our Users Say</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Real feedback from the authors and readers using {SITE_CONFIG.name} every day.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                <div className="flex gap-1 text-[#fbbf24]">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-700">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#2563eb] to-[#60a5fa] text-sm font-semibold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#2563eb]">
          <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to publish your next PDF or build your profile?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">
              Join a growing community of authors and readers. Get started in minutes — no clutter, no distractions.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2563eb] hover:bg-slate-100"
              >
                Create Free Account
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20"
              >
                Browse Library
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
