'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { Mail, ArrowLeft, CheckCircle2, FileText } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim()) return
    setIsLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setIsLoading(false)
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#eef4ff_0%,#ffffff_50%)] text-slate-950">
      <NavbarShell />
      <main className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-10">
          {!sent ? (
            <>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563eb] text-white shadow-[0_10px_28px_rgba(37,99,235,0.35)]">
                <FileText className="h-6 w-6" />
              </div>
              <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">Forgot your password?</h1>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Enter the email linked to your {SITE_CONFIG.name} account and we&apos;ll send you reset instructions.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">Email</span>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm placeholder:text-slate-400 focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20"
                    />
                  </div>
                </label>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#2563eb] px-6 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(37,99,235,0.35)] transition hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isLoading ? 'Sending…' : 'Send Reset Link'}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">Check your inbox</h1>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                If an account exists for <span className="font-semibold text-slate-950">{email}</span>, we&apos;ve sent a link to reset your password.
              </p>
            </div>
          )}

          <Link
            href="/login"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to sign in
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
