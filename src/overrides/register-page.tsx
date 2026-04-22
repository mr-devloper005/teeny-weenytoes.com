'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FileText, Lock, Mail, User as UserIcon, ArrowRight, CheckCircle2 } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG } from '@/lib/site-config'

export const REGISTER_PAGE_OVERRIDE_ENABLED = true

export function RegisterPageOverride() {
  const { signup, isLoading } = useAuth()
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in all fields.')
      return
    }

    try {
      await signup(name.trim(), email.trim(), password)
      setSuccess(true)
      setTimeout(() => {
        router.push('/profile')
      }, 900)
    } catch (err) {
      setError('Unable to create account. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#eef4ff_0%,#ffffff_50%)] text-slate-950">
      <NavbarShell />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563eb] text-white shadow-[0_10px_28px_rgba(37,99,235,0.35)]">
              <FileText className="h-6 w-6" />
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight">
              Start publishing on <span className="text-[#2563eb]">{SITE_CONFIG.name}</span>
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Create a free account to upload PDFs, build your author profile, and reach readers with a clean, structured publishing experience.
            </p>
            <div className="mt-8 grid gap-3">
              {[
                'Upload and organize PDFs with ease',
                'Create a verified author or creator profile',
                'Track engagement and grow your audience',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2563eb]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">Sign Up</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Create your account</h2>
            <p className="mt-2 text-sm text-slate-600">Get started in less than a minute.</p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">Full Name</span>
                <div className="relative">
                  <UserIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-950 placeholder:text-slate-400 focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20"
                  />
                </div>
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">Email</span>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-950 placeholder:text-slate-400 focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20"
                  />
                </div>
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">Password</span>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a password"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-950 placeholder:text-slate-400 focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20"
                  />
                </div>
              </label>

              {error ? (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              ) : null}
              {success ? (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  Account created. Redirecting…
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isLoading || success}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#2563eb] px-6 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(37,99,235,0.35)] transition hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? 'Creating account…' : 'Create Account'}
                {!isLoading ? <ArrowRight className="h-4 w-4" /> : null}
              </button>
            </form>

            <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
              <span>Already a member?</span>
              <Link href="/login" className="font-semibold text-[#2563eb] hover:underline">
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
