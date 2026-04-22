'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, LogOut, Search } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useAuth } from '@/lib/auth-context'
import { cn } from '@/lib/utils'

export const NAVBAR_OVERRIDE_ENABLED = true

const NAV_LINKS = [
  { name: 'About Us', href: '/about' },
  { name: 'PDF Library', href: '/pdf' },
  { name: 'Profiles', href: '/profile' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function NavbarOverride() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated, user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/favicon.png"
            alt={`${SITE_CONFIG.name} logo`}
            width={56}
            height={56}
            className="h-14 w-14 rounded-2xl object-contain shadow-[0_8px_24px_rgba(37,99,235,0.18)]"
          />
          <span className="text-xl font-bold tracking-tight text-slate-950">{SITE_CONFIG.name}</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((item) => {
            const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  active ? 'text-[#2563eb]' : 'text-slate-700 hover:text-[#2563eb]'
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/search"
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-[#2563eb]/30 hover:text-[#2563eb] md:inline-flex"
          >
            <Search className="h-4 w-4" />
          </Link>

          {isAuthenticated ? (
            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="/profile"
                className="text-sm font-medium text-slate-700 hover:text-[#2563eb]"
              >
                Hi, {user?.name || 'User'}
              </Link>
              <button
                onClick={logout}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Link
                href="/login"
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#2563eb]"
              >
                Sign In
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] transition hover:bg-[#1d4ed8]"
              >
                Contact Us
              </Link>
            </div>
          )}

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2 pt-3">
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    logout()
                    setOpen(false)
                  }}
                  className="col-span-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-center text-sm font-semibold text-slate-700"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="rounded-full bg-[#2563eb] px-4 py-2.5 text-center text-sm font-semibold text-white"
                  >
                    Contact Us
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
