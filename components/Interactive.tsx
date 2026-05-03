'use client'

import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'

/**
 * Hover styles applied via the `.hov-card` and `.hov-btn` classes below.
 * One stylesheet, no per-instance React state.
 */
function HoverStyles() {
  return (
    <style jsx global>{`
      .hov-card {
        border-color: var(--border);
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
      }
      .hov-card:hover {
        border-color: var(--brand);
        box-shadow: 0 4px 12px var(--brand-soft);
      }
      .hov-solid {
        background: var(--brand);
        color: #ffffff;
        box-shadow: var(--shadow-soft);
        transition: opacity 0.2s, box-shadow 0.2s;
      }
      .hov-solid:hover {
        opacity: 0.9;
        box-shadow: 0 4px 12px var(--brand-soft);
      }
      .hov-outline {
        background: var(--bg);
        color: var(--brand);
        border: 1.5px solid var(--brand);
        transition: background-color 0.2s, color 0.2s;
      }
      .hov-outline:hover {
        background: var(--brand);
        color: #ffffff;
      }
      .hov-text {
        color: var(--text-muted);
        transition: color 0.2s;
      }
      .hov-text:hover {
        color: var(--brand);
      }
      .hov-subtle {
        color: var(--text-subtle);
        transition: color 0.2s;
      }
      .hov-subtle:hover {
        color: var(--brand);
      }
    `}</style>
  )
}

const monoUpper: CSSProperties = {
  fontFamily: 'var(--font-mono)',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  textDecoration: 'none',
}

// Hoverable card (div)
export function HoverCard({
  children,
  style,
}: {
  children: ReactNode
  style?: CSSProperties
}) {
  return (
    <>
      <HoverStyles />
      <div className="finance-card hov-card" style={style}>
        {children}
      </div>
    </>
  )
}

// Hoverable anchor card
export function HoverCardLink({
  children,
  href,
  style,
}: {
  children: ReactNode
  href: string
  style?: CSSProperties
}) {
  const isExternal = href.startsWith('http')
  return (
    <>
      <HoverStyles />
      <a
        href={href}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="finance-card hov-card"
        style={{ textDecoration: 'none', display: 'block', ...style }}
      >
        {children}
      </a>
    </>
  )
}

// Gold primary button (Link)
export function GoldButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <>
      <HoverStyles />
      <Link
        href={href}
        className="cta-button hov-solid"
        style={{
          ...monoUpper,
          display: 'inline-block',
          padding: '0.85rem 2rem',
          fontSize: '0.78rem',
          fontWeight: 600,
          borderRadius: '6px',
        }}
      >
        {children}
      </Link>
    </>
  )
}

// Outline button (Link)
export function OutlineButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <>
      <HoverStyles />
      <Link
        href={href}
        className="cta-button hov-outline"
        style={{
          ...monoUpper,
          display: 'inline-block',
          padding: '0.85rem 2rem',
          fontSize: '0.78rem',
          fontWeight: 600,
          borderRadius: '6px',
        }}
      >
        {children}
      </Link>
    </>
  )
}

// Nav link with hover
export function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <>
      <HoverStyles />
      <Link
        href={href}
        className="hov-text"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}
      >
        {children}
      </Link>
    </>
  )
}

// Gold outline anchor (external)
export function OutlineAnchor({ href, children }: { href: string; children: ReactNode }) {
  return (
    <>
      <HoverStyles />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button hov-outline"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          textDecoration: 'none',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '0.6rem 1.5rem',
          borderRadius: '6px',
          display: 'inline-block',
        }}
      >
        {children}
      </a>
    </>
  )
}

// Email gold button
export function EmailButton({ email, children }: { email: string; children: ReactNode }) {
  return (
    <>
      <HoverStyles />
      <a
        href={`mailto:${email}`}
        className="cta-button hov-solid"
        style={{
          fontFamily: 'var(--font-mono)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem 2rem',
          fontSize: '0.85rem',
          fontWeight: 600,
          letterSpacing: '0.06em',
          textDecoration: 'none',
          borderRadius: '6px',
          marginBottom: '3rem',
        }}
      >
        {children}
      </a>
    </>
  )
}

// Footer social link
export function FooterLink({
  href,
  children,
  icon,
}: {
  href: string
  children: ReactNode
  icon?: ReactNode
}) {
  return (
    <>
      <HoverStyles />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hov-subtle"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          textDecoration: 'none',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
        }}
      >
        {icon}
        {children}
      </a>
    </>
  )
}
