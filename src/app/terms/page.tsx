import Link from 'next/link'
import { FileText, CheckCircle2, AlertTriangle, Scale } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const SECTIONS = [
  {
    icon: CheckCircle2,
    title: 'Using the Service',
    body: `You can use ${SITE_CONFIG.name} to publish, browse, and download PDFs, and to build a profile. You agree to follow the rules outlined in these terms and any applicable laws.`,
  },
  {
    icon: FileText,
    title: 'Your Content',
    body: 'You keep ownership of everything you upload. By publishing, you grant us a limited license to store, display, and distribute your content on the platform.',
  },
  {
    icon: AlertTriangle,
    title: 'Prohibited Conduct',
    body: 'No spam, harassment, copyright infringement, malware, or illegal content. Violations may result in suspension or removal without notice.',
  },
  {
    icon: Scale,
    title: 'Liability',
    body: `${SITE_CONFIG.name} is provided "as is". We are not liable for indirect damages, lost profits, or data loss beyond what applicable law requires.`,
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(180deg,#eef4ff_0%,#ffffff_70%)]">
          <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2563eb]/20 bg-white px-4 py-1.5 text-xs font-semibold text-[#2563eb]">
              <Scale className="h-3.5 w-3.5" />
              Terms of Service
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Fair, simple <span className="text-[#2563eb]">terms</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              The rules that keep {SITE_CONFIG.name} safe, reliable, and useful for everyone.
            </p>
            <p className="mt-6 text-xs text-slate-500">Last updated: April 18, 2026</p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {SECTIONS.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#eef4ff] text-[#2563eb]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-slate-950">{s.title}</h2>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{s.body}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center sm:p-8">
            <p className="text-sm text-slate-600">
              By using {SITE_CONFIG.name}, you agree to these terms.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1d4ed8]"
            >
              Questions? Contact us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
