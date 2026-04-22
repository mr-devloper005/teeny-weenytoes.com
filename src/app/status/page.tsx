import { CheckCircle2, Activity, Clock } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const SERVICES = [
  { name: 'API', status: 'operational', uptime: '99.99%' },
  { name: 'Web Application', status: 'operational', uptime: '99.98%' },
  { name: 'PDF Uploads', status: 'operational', uptime: '99.95%' },
  { name: 'Search & Discovery', status: 'operational', uptime: '99.97%' },
  { name: 'Authentication', status: 'operational', uptime: '100%' },
  { name: 'Downloads CDN', status: 'operational', uptime: '99.99%' },
]

const INCIDENTS = [
  { date: 'April 02, 2026', title: 'Brief API latency spike — resolved', duration: '12 min' },
  { date: 'March 14, 2026', title: 'Scheduled maintenance on search index', duration: '45 min' },
  { date: 'February 08, 2026', title: 'PDF upload delays — resolved', duration: '28 min' },
]

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(180deg,#eef4ff_0%,#ffffff_70%)]">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="h-3.5 w-3.5" />
              All systems operational
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              System <span className="text-[#2563eb]">Status</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Live uptime and incident history for every part of the platform.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-8">
            <div className="flex items-center gap-3">
              <Activity className="h-5 w-5 text-[#2563eb]" />
              <h2 className="text-xl font-semibold">Services</h2>
            </div>
            <div className="mt-6 divide-y divide-slate-200">
              {SERVICES.map((s) => (
                <div key={s.name} className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
                    <p className="font-medium text-slate-950">{s.name}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-emerald-600">Operational</span>
                    <span className="hidden text-sm text-slate-500 sm:inline">{s.uptime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight">Recent incidents</h2>
            <div className="mt-8 space-y-3">
              {INCIDENTS.map((i, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-950">{i.title}</h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Resolved
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-4 text-sm text-slate-500">
                    <span>{i.date}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {i.duration}
                    </span>
                  </div>
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
