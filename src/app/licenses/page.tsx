import { FileText, ExternalLink } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const LICENSES = [
  { name: 'Next.js', license: 'MIT', usage: 'React framework' },
  { name: 'React', license: 'MIT', usage: 'UI library' },
  { name: 'Tailwind CSS', license: 'MIT', usage: 'Styling' },
  { name: 'Lucide Icons', license: 'ISC', usage: 'Iconography' },
  { name: 'Radix UI', license: 'MIT', usage: 'Accessible primitives' },
  { name: 'Node.js', license: 'MIT', usage: 'Runtime' },
  { name: 'TypeScript', license: 'Apache-2.0', usage: 'Type system' },
  { name: 'Zod', license: 'MIT', usage: 'Validation' },
]

export default function LicensesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(180deg,#eef4ff_0%,#ffffff_70%)]">
          <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2563eb]/20 bg-white px-4 py-1.5 text-xs font-semibold text-[#2563eb]">
              <FileText className="h-3.5 w-3.5" />
              Open Source Licenses
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Built on <span className="text-[#2563eb]">open source</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              {SITE_CONFIG.name} stands on the shoulders of incredible open source projects. We&apos;re grateful to everyone who makes this possible.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">Package</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">License</th>
                  <th className="hidden px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 sm:table-cell">Usage</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {LICENSES.map((l) => (
                  <tr key={l.name} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-950">{l.name}</td>
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold text-[#2563eb]">
                        {l.license}
                      </span>
                    </td>
                    <td className="hidden px-6 py-4 text-sm text-slate-600 sm:table-cell">{l.usage}</td>
                    <td className="px-6 py-4 text-right">
                      <ExternalLink className="inline h-4 w-4 text-slate-400" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            A complete list of dependencies is available in our public repository.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
