import Link from 'next/link'
import { ArrowRight, Linkedin, Twitter, Github, Sparkles, Users } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const TEAM = [
  {
    name: 'Aarav Mehta',
    role: 'Founder & CEO',
    bio: 'Product builder focused on clean publishing tools and thoughtful discovery.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Engineering',
    bio: 'Turning complex document workflows into fast, reliable systems.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    name: 'Daniel Kim',
    role: 'Design Lead',
    bio: 'Crafts the library feel — calm, structured, and genuinely useful.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Sofia Alvarez',
    role: 'Head of Community',
    bio: 'Supporting authors, curators, and readers as they grow with us.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
  {
    name: 'Marcus Johnson',
    role: 'Publishing Partnerships',
    bio: 'Helping organizations bring whole libraries onto the platform.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  },
  {
    name: 'Lina Petrov',
    role: 'Content Strategy',
    bio: 'Shapes guides, editorial pieces, and author onboarding stories.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
  },
]

const DEPARTMENTS = [
  { label: 'Engineering', count: 18 },
  { label: 'Design', count: 6 },
  { label: 'Community', count: 9 },
  { label: 'Partnerships', count: 5 },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(180deg,#eef4ff_0%,#ffffff_70%)]">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2563eb]/20 bg-white px-4 py-1.5 text-xs font-semibold text-[#2563eb]">
              <Users className="h-3.5 w-3.5" />
              Our People
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              The minds behind <span className="text-[#2563eb]">{SITE_CONFIG.name}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              A small, focused team that cares deeply about publishing, readers, and the craft of building useful software.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DEPARTMENTS.map((d) => (
              <div
                key={d.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
              >
                <p className="text-4xl font-bold text-[#2563eb]">{d.count}</p>
                <p className="mt-2 text-sm font-semibold text-slate-950">{d.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">Leadership</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">Meet the team</h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-[#2563eb]/30 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-64 w-full object-cover transition group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-950">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-[#2563eb]">{member.role}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{member.bio}</p>
                  <div className="mt-5 flex gap-2">
                    {[Linkedin, Twitter, Github].map((Icon, i) => (
                      <button
                        key={i}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-[#2563eb] hover:text-[#2563eb]"
                      >
                        <Icon className="h-4 w-4" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8">
            <div>
              <Sparkles className="h-8 w-8 text-[#2563eb]" />
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Want to work with us?
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                We hire thoughtful people who care about publishing, product craft, and supporting authors. Remote-first, async-friendly.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1d4ed8]"
              >
                See Open Roles
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-white/70"
              >
                Say Hello
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
