'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useAppSettings, useLocaleContent } from '@/components/AppSettingsProvider'
import { siteConfig } from '@/lib/data'
import { Locale, ThemeMode } from '@/lib/content'

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

const localeOrder: Locale[] = ['en', 'id', 'ar']

const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  id: '🇮🇩',
  ar: '🇸🇦',
}

const themeOrder: ThemeMode[] = ['light', 'dark', 'system']

const iconButtonStyle: React.CSSProperties = {
  width: '34px',
  height: '34px',
  borderRadius: '999px',
  border: '1px solid var(--border)',
  background: 'var(--bg)',
  color: 'var(--text-muted)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { locale, setLocale, themeMode, setThemeMode } = useAppSettings()
  const content = useLocaleContent()
  const nextLocale = localeOrder[(localeOrder.indexOf(locale) + 1) % localeOrder.length]
  const nextTheme = themeOrder[(themeOrder.indexOf(themeMode) + 1) % themeOrder.length]

  const handleLocaleCycle = () => setLocale(nextLocale)
  const handleThemeCycle = () => setThemeMode(nextTheme)

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'color-mix(in srgb, var(--bg) 86%, transparent)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        boxShadow: 'var(--shadow-soft)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 2rem)',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <Link href="/" style={{ textDecoration: 'none' }} aria-label={`${siteConfig.name} home`}>
          <span
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontSize: '1.18rem',
              fontWeight: 700,
              color: 'var(--brand)',
              letterSpacing: '0.02em',
              background: 'var(--bg-card)',
              border: '1px solid var(--brand-soft)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.24)',
            }}
          >
            D
          </span>
        </Link>

        <nav style={{ display: 'flex', gap: 'clamp(1rem, 2.2vw, 1.5rem)' }} className="hidden-mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            type="button"
            onClick={handleLocaleCycle}
            style={iconButtonStyle}
            aria-label={`${content.ui.language}: ${locale}`}
            title={content.ui.language}
          >
            <span style={{ fontSize: '1.05rem', lineHeight: 1 }}>{localeFlags[locale]}</span>
          </button>
          <button
            type="button"
            onClick={handleThemeCycle}
            style={iconButtonStyle}
            aria-label={`${content.ui.theme}: ${themeMode}`}
            title={content.ui.theme}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M9 18h6M10 22h4M8 14.2A6.5 6.5 0 1 1 16 14.2c-.85.8-1.38 1.7-1.57 2.8h-4.86C9.38 15.9 8.85 15 8 14.2Z"
                fill={themeMode === 'light' ? '#f59e0b' : 'none'}
                stroke={themeMode === 'dark' ? '#60a5fa' : 'var(--text-muted)'}
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'none' }}
          className="show-mobile"
          aria-label={open ? content.ui.closeMenuLabel : content.ui.menuLabel}
        >
          <div style={{ width: '22px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  height: '1.5px',
                  background: 'var(--brand)',
                  borderRadius: '1px',
                  transition: '0.3s',
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
          </div>
        </button>
      </div>

      {open && (
        <div
          style={{
            background: 'var(--bg)',
            borderTop: '1px solid var(--border)',
            padding: '1rem clamp(1rem, 4vw, 2rem) 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </Link>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
            <button
              type="button"
              onClick={handleLocaleCycle}
              style={iconButtonStyle}
              aria-label={`${content.ui.language}: ${locale}`}
            >
              <span style={{ fontSize: '1.05rem', lineHeight: 1 }}>{localeFlags[locale]}</span>
            </button>
            <button
              type="button"
              onClick={handleThemeCycle}
              style={iconButtonStyle}
              aria-label={`${content.ui.theme}: ${themeMode}`}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M9 18h6M10 22h4M8 14.2A6.5 6.5 0 1 1 16 14.2c-.85.8-1.38 1.7-1.57 2.8h-4.86C9.38 15.9 8.85 15 8 14.2Z"
                  fill={themeMode === 'light' ? '#f59e0b' : 'none'}
                  stroke={themeMode === 'dark' ? '#60a5fa' : 'var(--text-muted)'}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 1025px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}
