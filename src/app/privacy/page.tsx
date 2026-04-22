import Link from 'next/link'
import { Shield, Lock, Eye, UserCheck, FileText, Mail } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const SECTIONS = [
  {
    icon: FileText,
    title: 'Information We Collect',
    body: 'We collect account details (name, email), content you publish (PDFs, profile data), and limited analytics (page views, downloads) to operate the platform.',
  },
  {
    icon: Eye,
    title: 'How We Use It',
    body: 'To run your account, power search and discovery, improve the product, prevent abuse, and send essential service communication. We never sell personal data.',
  },
  {
    icon: Lock,
    title: 'How We Protect It',
    body: 'Encryption in transit and at rest, strict access controls, regular audits, and isolated environments for sensitive operations.',
  },
  {
    icon: UserCheck,
    title: 'Your Rights',
    body: 'You can access, export, correct, or delete your personal data at any time from settings — or by writing to us.',
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(180deg,#eef4ff_0%,#ffffff_70%)]">
          <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2563eb]/20 bg-white px-4 py-1.5 text-xs font-semibold text-[#2563eb]">
              <Shield className="h-3.5 w-3.5" />
              Privacy Policy
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Your <span className="text-[#2563eb]">privacy</span> matters.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Clear, human-readable rules on how {SITE_CONFIG.name} collects, uses, and protects your information.
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

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-slate-950">Questions about privacy?</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Write to our privacy team and we&apos;ll respond within five business days.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1d4ed8]"
            >
              <Mail className="h-4 w-4" />
              privacy@{SITE_CONFIG.domain}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
