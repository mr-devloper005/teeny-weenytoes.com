import Link from 'next/link'
import { ArrowRight, Briefcase, MapPin, Heart, Zap, Globe, Coffee, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const JOBS = [
  { title: 'Senior Full-Stack Engineer', dept: 'Engineering', location: 'Remote · Global', type: 'Full-time' },
  { title: 'Product Designer', dept: 'Design', location: 'Remote · EU / US', type: 'Full-time' },
  { title: 'Community Manager', dept: 'Community', location: 'Remote · Global', type: 'Full-time' },
  { title: 'DevOps Engineer', dept: 'Engineering', location: 'Remote · Global', type: 'Full-time' },
  { title: 'Content Writer', dept: 'Marketing', location: 'Remote · Global', type: 'Contract' },
  { title: 'Partnerships Lead', dept: 'Business', location: 'Remote · US', type: 'Full-time' },
]

const BENEFITS = [
  { icon: Globe, title: 'Remote-First', body: 'Work from anywhere. We hire across time zones.' },
  { icon: Heart, title: 'Health & Wellness', body: 'Comprehensive health coverage and wellness stipend.' },
  { icon: Zap, title: 'Learning Budget', body: '$1,500/year for books, courses, and conferences.' },
  { icon: Coffee, title: 'Flexible Hours', body: 'Async-friendly. Deep work over meetings.' },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(180deg,#eef4ff_0%,#ffffff_70%)]">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2563eb]/20 bg-white px-4 py-1.5 text-xs font-semibold text-[#2563eb]">
              <Briefcase className="h-3.5 w-3.5" />
              Careers at {SITE_CONFIG.name}
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Help us build the world&apos;s <span className="text-[#2563eb]">cleanest library</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Join a thoughtful team shipping tools for authors, researchers, and curators everywhere.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">Why Join</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">Perks that actually matter</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => {
              const Icon = b.icon
              return (
                <div
                  key={b.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#2563eb]/30 hover:shadow-[0_16px_40px_rgba(37,99,235,0.1)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef4ff] text-[#2563eb]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">{b.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{b.body}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">Open Roles</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">We&apos;re hiring</h2>
            </div>
            <div className="space-y-3">
              {JOBS.map((job) => (
                <Link
                  key={job.title}
                  href="#"
                  className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#2563eb]/30 hover:shadow-[0_16px_40px_rgba(37,99,235,0.1)] md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950 group-hover:text-[#2563eb]">
                      {job.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" />
                        {job.dept}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold text-[#2563eb]">
                      {job.type}
                    </span>
                    <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#2563eb]" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <Sparkles className="mx-auto h-10 w-10 text-[#2563eb]" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Don&apos;t see your role?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
            We&apos;re always open to talking to great people. Send us a note.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(37,99,235,0.35)] hover:bg-[#1d4ed8]"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
