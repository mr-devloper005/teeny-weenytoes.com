import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

export function FooterOverride() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/favicon.png"
                alt={`${SITE_CONFIG.name} logo`}
                width={56}
                height={56}
                className="h-14 w-14 rounded-2xl object-contain shadow-[0_8px_24px_rgba(37,99,235,0.18)]"
              />
              <span className="text-xl font-bold text-slate-950">{SITE_CONFIG.name}</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
              Your trusted PDF Library and Profile platform — publish, discover, and organize documents and creator profiles in one clean workspace.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-950">Navigation</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li><Link href="/about" className="hover:text-[#2563eb]">About Us</Link></li>
              <li><Link href="/pdf" className="hover:text-[#2563eb]">PDF Library</Link></li>
              <li><Link href="/profile" className="hover:text-[#2563eb]">Profiles</Link></li>
              <li><Link href="/blog" className="hover:text-[#2563eb]">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#2563eb]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-950">Contact &amp; Location</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#2563eb]" />
                hello@{SITE_CONFIG.domain}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#2563eb]" />
                Online Worldwide
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#2563eb]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#2563eb]">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-[#2563eb]">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
