import Link from 'next/link'
import { Cookie, ToggleRight, BarChart3, Shield } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const TYPES = [
  { icon: Shield, title: 'Essential', body: 'Required for sign-in, security, and core functionality. Always on.', toggle: false },
  { icon: BarChart3, title: 'Analytics', body: 'Help us understand usage patterns so we can improve the product.', toggle: true },
  { icon: ToggleRight, title: 'Preferences', body: 'Remember your theme, language, and interface choices.', toggle: true },
]

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(180deg,#eef4ff_0%,#ffffff_70%)]">
          <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2563eb]/20 bg-white px-4 py-1.5 text-xs font-semibold text-[#2563eb]">
              <Cookie className="h-3.5 w-3.5" />
              Cookie Policy
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              How we use <span className="text-[#2563eb]">cookies</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Small text files help {SITE_CONFIG.name} remember you, stay secure, and get better over time.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Cookie categories</h2>
          <div className="mt-8 space-y-4">
            {TYPES.map((t) => {
              const Icon = t.icon
              return (
                <div
                  key={t.title}
                  className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#eef4ff] text-[#2563eb]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950">{t.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{t.body}</p>
                    </div>
                  </div>
                  <div
                    className={
                      'relative h-7 w-12 flex-shrink-0 rounded-full transition ' +
                      (t.toggle ? 'bg-[#2563eb]' : 'bg-slate-200')
                    }
                  >
                    <span
                      className={
                        'absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ' +
                        (t.toggle ? 'left-6' : 'left-1')
                      }
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-slate-950">Manage your preferences</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              You can change cookie settings anytime from your browser. Turning off analytics and preference cookies won&apos;t affect your ability to use {SITE_CONFIG.name}.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1d4ed8]">
                Save Preferences
              </button>
              <Link
                href="/privacy"
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-white/70"
              >
                Read Privacy Policy
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
