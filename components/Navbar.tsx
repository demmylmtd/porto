'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useAppSettings, useLocaleContent } from '@/components/AppSettingsProvider'
import { siteConfig } from '@/lib/data'
import type { Locale, ThemeMode } from '@/lib/content'

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Certifications', href: '/#certifications' },
  { label: 'Proof of Impact', href: '/proof-of-impact' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
] as const

const localeOrder: Locale[] = ['en', 'ar', 'id']
const localeFlags: Record<Locale, string> = { en: '🇺🇸', ar: '🇸🇦', id: '🇮🇩' }
const themeOrder: ThemeMode[] = ['light', 'dark', 'system']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { locale, setLocale, themeMode, setThemeMode } = useAppSettings()
  const content = useLocaleContent()

  const cycleLocale = () =>
    setLocale(localeOrder[(localeOrder.indexOf(locale) + 1) % localeOrder.length])
  const cycleTheme = () =>
    setThemeMode(themeOrder[(themeOrder.indexOf(themeMode) + 1) % themeOrder.length])

  const headerStyle: React.CSSProperties = {
    background: 'color-mix(in srgb, var(--bg) 86%, transparent)',
    borderColor: 'var(--border)',
    boxShadow: 'var(--shadow-soft)',
  }

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md"
      style={headerStyle}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label={`${siteConfig.name} home`} className="inline-flex items-center no-underline">
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] font-display text-[1.18rem] font-bold tracking-tight"
            style={{
              color: 'var(--brand)',
              background: 'var(--bg-card)',
              border: '1px solid var(--brand-soft)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.24)',
            }}
          >
            D
          </span>
        </Link>

        <nav className="nav-links hidden items-center gap-5 lg:flex xl:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link font-mono text-[0.78rem] uppercase tracking-[0.08em] no-underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <IconButton
            onClick={cycleLocale}
            ariaLabel={`${content.ui.language}: ${locale}`}
            title={content.ui.language}
          >
            <span className="text-[1.05rem] leading-none">{localeFlags[locale]}</span>
          </IconButton>
          <IconButton
            onClick={cycleTheme}
            ariaLabel={`${content.ui.theme}: ${themeMode}`}
            title={content.ui.theme}
          >
            <ThemeIcon mode={themeMode} />
          </IconButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? content.ui.closeMenuLabel : content.ui.menuLabel}
          className="inline-flex h-9 w-9 items-center justify-center bg-transparent p-1 lg:hidden"
        >
          <span className="flex w-[22px] flex-col gap-[5px]">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-[1.5px] rounded-[1px] transition-transform duration-300"
                style={{
                  background: 'var(--brand)',
                  transform: open
                    ? i === 0
                      ? 'rotate(45deg) translate(5px, 5px)'
                      : i === 1
                        ? 'scaleX(0)'
                        : 'rotate(-45deg) translate(5px, -5px)'
                    : 'none',
                }}
              />
            ))}
          </span>
        </button>
      </div>

      {open && (
        <div
          className="flex flex-col gap-4 border-t px-4 py-5 lg:hidden"
          style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="nav-link font-mono text-[0.85rem] uppercase tracking-[0.08em] no-underline"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-1 flex gap-3">
            <IconButton onClick={cycleLocale} ariaLabel={`${content.ui.language}: ${locale}`}>
              <span className="text-[1.05rem] leading-none">{localeFlags[locale]}</span>
            </IconButton>
            <IconButton onClick={cycleTheme} ariaLabel={`${content.ui.theme}: ${themeMode}`}>
              <ThemeIcon mode={themeMode} />
            </IconButton>
          </div>
        </div>
      )}

      <style jsx global>{`
        .nav-link {
          color: var(--text-muted);
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: var(--brand);
        }
        .icon-btn {
          color: var(--text-muted);
          background: var(--bg);
          border: 1px solid var(--border);
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .icon-btn:hover {
          border-color: var(--brand);
          color: var(--brand);
        }
      `}</style>
    </header>
  )
}

function IconButton({
  children,
  onClick,
  ariaLabel,
  title,
}: {
  children: React.ReactNode
  onClick: () => void
  ariaLabel: string
  title?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      title={title}
      className="icon-btn inline-flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full"
    >
      {children}
    </button>
  )
}

function ThemeIcon({ mode }: { mode: ThemeMode }) {
  const isLight = mode === 'light'
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 18h6M10 22h4M8 14.2A6.5 6.5 0 1 1 16 14.2c-.85.8-1.38 1.7-1.57 2.8h-4.86C9.38 15.9 8.85 15 8 14.2Z"
        fill={isLight ? '#f59e0b' : 'none'}
        stroke={mode === 'dark' ? 'var(--brand)' : 'currentColor'}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
