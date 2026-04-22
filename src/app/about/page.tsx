import Link from 'next/link'
import { ArrowRight, Target, Heart, Rocket, Shield, FileText, Users, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const VALUES = [
  {
    icon: Target,
    title: 'Purpose-Driven',
    body: 'Every feature we ship serves one goal — making knowledge easier to publish, discover, and share.',
  },
  {
    icon: Heart,
    title: 'People First',
    body: 'We design around authors, readers, and curators — not metrics or endless feeds.',
  },
  {
    icon: Rocket,
    title: 'Built to Scale',
    body: 'From a single PDF to a full library, our infrastructure is ready to grow with you.',
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    body: 'Verified profiles, clean metadata, and careful moderation keep the library trustworthy.',
  },
]

const MILESTONES = [
  { year: '2022', title: 'Idea Born', body: 'Started as a weekend project to solve messy PDF sharing.' },
  { year: '2023', title: 'First 1,000 Users', body: 'Early authors and readers shaped the product direction.' },
  { year: '2024', title: 'Profiles Launched', body: 'Added creator profiles to give every publisher a home.' },
  { year: '2026', title: 'Global Library', body: 'Serving publishers and readers across continents.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(180deg,#eef4ff_0%,#ffffff_70%)]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#2563eb]/20 bg-white px-4 py-1.5 text-xs font-semibold text-[#2563eb]">
                  <Sparkles className="h-3.5 w-3.5" />
                  About {SITE_CONFIG.name}
                </span>
                <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                  We make publishing <span className="text-[#2563eb]">simple</span>, discovery <span className="text-slate-400">effortless</span>.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                  {SITE_CONFIG.name} is a modern PDF Library and Profile platform built for authors, researchers, organizations, and readers who value clean structure and fast discovery.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(37,99,235,0.35)] hover:bg-[#1d4ed8]"
                  >
                    Get in Touch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/team"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-50"
                  >
                    Meet the Team
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                    alt="Our team"
                    className="h-[440px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">Our Mission</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                Organizing the world&apos;s <span className="text-[#2563eb]">documents and voices</span>.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                We believe great ideas deserve a clean home. That&apos;s why {SITE_CONFIG.name} combines a structured PDF library with verified profiles — so every document has context, and every author has a voice.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                No cluttered feeds. No algorithmic noise. Just well-organized knowledge, discoverable by anyone, published by people you can trust.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <FileText className="h-8 w-8 text-[#2563eb]" />
                <p className="mt-4 text-3xl font-bold text-slate-950">50K+</p>
                <p className="text-sm text-slate-500">PDFs published</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <Users className="h-8 w-8 text-[#2563eb]" />
                <p className="mt-4 text-3xl font-bold text-slate-950">12K+</p>
                <p className="text-sm text-slate-500">Verified authors</p>
              </div>
              <div className="col-span-2 rounded-2xl bg-[#2563eb] p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">Active readers monthly</p>
                <p className="mt-3 text-4xl font-bold">250K+</p>
                <p className="mt-1 text-sm text-blue-100">From 80+ countries worldwide.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-bold tracking-tight">What We Stand For</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Four values that guide every decision we make.
              </p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((v) => {
                const Icon = v.icon
                return (
                  <div
                    key={v.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#2563eb]/30 hover:shadow-[0_16px_40px_rgba(37,99,235,0.1)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef4ff] text-[#2563eb] transition group-hover:bg-[#2563eb] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-950">{v.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{v.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">Our Journey</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">From idea to global library</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className="relative rounded-2xl border border-slate-200 bg-white p-6">
                <div className="absolute -top-3 left-6 rounded-full bg-[#2563eb] px-3 py-1 text-xs font-bold text-white">
                  {m.year}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{m.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{m.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#2563eb]">
          <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join us in building a better library.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">
              Publish your first PDF or create your profile — it takes less than a minute.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2563eb] hover:bg-slate-100"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
