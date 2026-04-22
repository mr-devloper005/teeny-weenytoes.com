import Link from 'next/link'
import { ArrowRight, MessageCircle, Users, Hash, Star, TrendingUp, Award } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const CHANNELS = [
  { icon: MessageCircle, name: 'Discord', members: '8,400+', desc: 'Live chat with authors and readers.' },
  { icon: Hash, name: 'Forum', members: '12,000+', desc: 'Long-form discussions and Q&A.' },
  { icon: Users, name: 'Meetups', members: '40+ cities', desc: 'Local gatherings for creators.' },
]

const TOP_CONTRIBUTORS = [
  { name: 'Elena Ross', contributions: 142, badge: 'Top Author' },
  { name: 'Hiroshi Tan', contributions: 98, badge: 'Curator' },
  { name: 'Amara Okafor', contributions: 87, badge: 'Reviewer' },
  { name: 'Luca Bianchi', contributions: 76, badge: 'Helper' },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(180deg,#eef4ff_0%,#ffffff_70%)]">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2563eb]/20 bg-white px-4 py-1.5 text-xs font-semibold text-[#2563eb]">
              <Users className="h-3.5 w-3.5" />
              Community
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              A <span className="text-[#2563eb]">friendly</span> community of publishers and readers.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Connect with authors, share feedback, and get help from people who care about publishing well.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {CHANNELS.map((c) => {
              const Icon = c.icon
              return (
                <div key={c.name} className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#2563eb]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{c.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#2563eb]">{c.members} members</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{c.desc}</p>
                  <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1d4ed8]">
                    Join
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )
            })}
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <Award className="h-8 w-8 text-[#2563eb]" />
                <h2 className="mt-4 text-4xl font-bold tracking-tight">Top contributors this month</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Celebrate the authors, curators, and helpers who make {SITE_CONFIG.name} a better place every day.
                </p>
              </div>
              <div className="space-y-3">
                {TOP_CONTRIBUTORS.map((user, i) => (
                  <div
                    key={user.name}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb] text-sm font-bold text-white">
                      {i + 1}
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#2563eb] to-[#60a5fa] text-sm font-semibold text-white">
                      {user.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-950">{user.name}</p>
                      <p className="text-xs text-slate-500">{user.contributions} contributions</p>
                    </div>
                    <span className="rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold text-[#2563eb]">
                      {user.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: TrendingUp, label: 'Daily discussions', value: '400+' },
              { icon: Star, label: 'Reviews posted', value: '28K+' },
              { icon: Users, label: 'Monthly active', value: '65K+' },
            ].map((s) => {
              const Icon = s.icon
              return (
                <div key={s.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <Icon className="h-6 w-6 text-[#2563eb]" />
                  <p className="mt-4 text-3xl font-bold">{s.value}</p>
                  <p className="text-sm text-slate-500">{s.label}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="bg-[#2563eb]">
          <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Say hello today</h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-blue-100">
              The best way to understand {SITE_CONFIG.name} is to meet the people using it.
            </p>
            <Link
              href="/register"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2563eb] hover:bg-slate-100"
            >
              Join the Community
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
