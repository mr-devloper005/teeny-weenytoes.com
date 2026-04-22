import Link from 'next/link'
import { ArrowRight, Download, Newspaper, Calendar } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const NEWS = [
  { date: 'April 10, 2026', outlet: 'TechDaily', title: `${SITE_CONFIG.name} crosses 50,000 published PDFs` },
  { date: 'March 22, 2026', outlet: 'Publishing Weekly', title: 'How structured profiles are changing author discovery' },
  { date: 'February 18, 2026', outlet: 'The Wire Review', title: 'A cleaner alternative to scattered document hosting' },
  { date: 'January 30, 2026', outlet: 'Creator Insider', title: `Why ${SITE_CONFIG.name} is winning with researchers` },
]

const ASSETS = [
  { title: 'Brand Kit', desc: 'Logos, wordmarks, and usage guidelines.', size: '12 MB' },
  { title: 'Press Images', desc: 'High-resolution screenshots and team photos.', size: '48 MB' },
  { title: 'Fact Sheet', desc: 'Company overview, numbers, and milestones.', size: '2 MB' },
]

export default function PressPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(180deg,#eef4ff_0%,#ffffff_70%)]">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2563eb]/20 bg-white px-4 py-1.5 text-xs font-semibold text-[#2563eb]">
              <Newspaper className="h-3.5 w-3.5" />
              Press
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              In the <span className="text-[#2563eb]">press</span> &amp; beyond.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Recent stories, announcements, and media assets for {SITE_CONFIG.name}.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Recent coverage</h2>
          <div className="mt-8 space-y-3">
            {NEWS.map((item, i) => (
              <Link
                key={i}
                href="#"
                className="group flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#2563eb]/30 hover:shadow-[0_16px_40px_rgba(37,99,235,0.1)] md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.date}
                    </span>
                    <span className="rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold text-[#2563eb]">
                      {item.outlet}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-slate-950 group-hover:text-[#2563eb]">
                    {item.title}
                  </h3>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#2563eb]" />
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight">Media assets</h2>
            <p className="mt-2 text-base text-slate-600">
              Download brand materials and press resources.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {ASSETS.map((a) => (
                <div key={a.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <Download className="h-6 w-6 text-[#2563eb]" />
                  <h3 className="mt-4 text-lg font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{a.desc}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-slate-500">{a.size}</span>
                    <button className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-4 py-2 text-xs font-semibold text-white hover:bg-[#1d4ed8]">
                      Download
                      <Download className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Press inquiries</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
            For interviews and media requests, please reach out.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1d4ed8]"
          >
            press@{SITE_CONFIG.domain}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
