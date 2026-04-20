import Link from 'next/link'
import { ArrowRight, Code2, Key, Zap, Book, Github, Terminal, Webhook } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const FEATURES = [
  { icon: Zap, title: 'Fast REST API', body: 'Predictable endpoints for uploading, querying, and managing PDFs.' },
  { icon: Webhook, title: 'Webhooks', body: 'Get notified on uploads, downloads, and profile updates.' },
  { icon: Key, title: 'OAuth 2.0', body: 'Secure delegated access for integrations and apps.' },
  { icon: Terminal, title: 'CLI Tools', body: 'Automate publishing and bulk operations from the command line.' },
]

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(180deg,#eef4ff_0%,#ffffff_70%)]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#2563eb]/20 bg-white px-4 py-1.5 text-xs font-semibold text-[#2563eb]">
                  <Code2 className="h-3.5 w-3.5" />
                  Developers
                </span>
                <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
                  Build on <span className="text-[#2563eb]">{SITE_CONFIG.name}</span>.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                  A clean REST API, webhooks, and SDKs for integrating PDFs and profiles into your apps.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(37,99,235,0.35)] hover:bg-[#1d4ed8]"
                  >
                    Read the Docs
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold hover:bg-slate-50"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-6 font-mono text-sm leading-7 text-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.3)]">
                <div className="mb-4 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <pre className="overflow-x-auto text-xs">
{`# Upload a PDF
curl -X POST https://api.${SITE_CONFIG.domain}/v1/pdfs \\
  -H "Authorization: Bearer $TOKEN" \\
  -F "file=@paper.pdf" \\
  -F "title=Research Paper" \\
  -F "tags=ai,research"

# Response
{
  "id": "pdf_1a2b3c",
  "url": "https://${SITE_CONFIG.domain}/pdf/paper",
  "status": "published"
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight">Everything you need to ship</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Modern, well-documented, and battle-tested.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef4ff] text-[#2563eb]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{f.body}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Book className="mx-auto h-10 w-10 text-[#2563eb]" />
              <h2 className="mt-4 text-4xl font-bold tracking-tight">SDKs &amp; Libraries</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {['JavaScript', 'Python', 'Go'].map((lang) => (
                <div key={lang} className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
                  <h3 className="text-xl font-semibold">{lang}</h3>
                  <p className="mt-3 text-sm text-slate-600">Official SDK with full typings and examples.</p>
                  <code className="mt-5 block rounded-lg bg-slate-950 px-4 py-2 text-xs text-slate-200">
                    {lang === 'JavaScript' && `npm i @${SITE_CONFIG.domain}/sdk`}
                    {lang === 'Python' && `pip install ${SITE_CONFIG.domain}-sdk`}
                    {lang === 'Go' && `go get ${SITE_CONFIG.domain}/sdk`}
                  </code>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
