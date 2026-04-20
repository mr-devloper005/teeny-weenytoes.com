'use client'

import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone, Send, MessageSquare, Clock, ArrowRight } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

const CHANNELS = [
  {
    icon: Mail,
    title: 'Email Support',
    value: `hello@${SITE_CONFIG.domain}`,
    note: 'We reply within one business day',
  },
  {
    icon: MessageSquare,
    title: 'Publishing Help',
    value: `publish@${SITE_CONFIG.domain}`,
    note: 'For uploads, profiles, and library questions',
  },
  {
    icon: Phone,
    title: 'Partnerships',
    value: `partners@${SITE_CONFIG.domain}`,
    note: 'Collaborations and organization accounts',
  },
]

export function ContactPageOverride() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return
    setSent(true)
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <NavbarShell />
      <main>
        <section className="bg-[linear-gradient(180deg,#eef4ff_0%,#ffffff_70%)]">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2563eb]/20 bg-white px-4 py-1.5 text-xs font-semibold text-[#2563eb]">
              <MessageSquare className="h-3.5 w-3.5" />
              We&apos;re here to help
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Let&apos;s <span className="text-[#2563eb]">talk</span> about your next PDF or profile.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Whether you&apos;re publishing a new document, setting up a creator profile, or partnering with us — drop a message and we&apos;ll get back quickly.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              {CHANNELS.map((c) => {
                const Icon = c.icon
                return (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#2563eb]/30 hover:shadow-[0_16px_40px_rgba(37,99,235,0.1)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef4ff] text-[#2563eb]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-950">{c.title}</h3>
                    <p className="mt-1 text-sm font-medium text-[#2563eb]">{c.value}</p>
                    <p className="mt-1 text-sm text-slate-500">{c.note}</p>
                  </div>
                )
              })}

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-[#2563eb]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">Operating Online</h3>
                    <p className="mt-1 text-sm text-slate-600">Remote-first team supporting publishers worldwide.</p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="h-3.5 w-3.5" />
                      Mon – Fri · 9:00 – 18:00 (your local time)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">Send a message</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">How can we help?</h2>
              <p className="mt-2 text-sm text-slate-600">Fill in the form and we&apos;ll be in touch shortly.</p>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">Your Name</span>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm placeholder:text-slate-400 focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">Email</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm placeholder:text-slate-400 focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20"
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">Subject</span>
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="What's this about?"
                    className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm placeholder:text-slate-400 focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">Message</span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share the full context so we can respond with the right next step."
                    className="min-h-[160px] rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm placeholder:text-slate-400 focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20"
                  />
                </label>

                {sent ? (
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    Thanks! Your message has been received. We&apos;ll get back to you soon.
                  </div>
                ) : null}

                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#2563eb] px-6 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(37,99,235,0.35)] transition hover:bg-[#1d4ed8]"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="bg-[#2563eb]">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-14 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Prefer to explore first?</h2>
            <p className="max-w-2xl text-base text-blue-100">
              Browse our PDF Library or discover authors and creators on {SITE_CONFIG.name}.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/pdf"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2563eb] hover:bg-slate-100"
              >
                Browse Library
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/profile"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20"
              >
                Explore Profiles
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
