'use client'

import Link from 'next/link'
import { useState } from 'react'

// Hoverable card (div)
export function HoverCard({
  children,
  style,
}: {
  children: React.ReactNode
  style?: React.CSSProperties
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="finance-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...style,
        borderColor: hovered ? 'var(--brand)' : 'var(--border)',
        boxShadow: hovered ? '0 4px 12px var(--brand-soft)' : 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {children}
    </div>
  )
}

// Hoverable anchor card
export function HoverCardLink({
  children,
  href,
  style,
}: {
  children: React.ReactNode
  href: string
  style?: React.CSSProperties
}) {
  const [hovered, setHovered] = useState(false)
  const isExternal = href.startsWith('http')
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="finance-card"
      style={{
        ...style,
        textDecoration: 'none',
        display: 'block',
        borderColor: hovered ? 'var(--brand)' : 'var(--border)',
        boxShadow: hovered ? '0 4px 12px var(--brand-soft)' : 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {children}
    </a>
  )
}

// Gold primary button (Link)
export function GoldButton({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href={href}
      className="cta-button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-block',
        padding: '0.85rem 2rem',
        background: 'var(--brand)',
        color: '#ffffff',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.78rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase' as const,
        textDecoration: 'none',
        borderRadius: '6px',
        opacity: hovered ? 0.9 : 1,
        boxShadow: hovered ? '0 4px 12px var(--brand-soft)' : 'var(--shadow-soft)',
        transition: 'opacity 0.2s, box-shadow 0.2s',
      }}
    >
      {children}
    </Link>
  )
}

// Outline button (Link)
export function OutlineButton({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href={href}
      className="cta-button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-block',
        padding: '0.85rem 2rem',
        background: 'var(--bg)',
        color: hovered ? '#ffffff' : 'var(--brand)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.78rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase' as const,
        textDecoration: 'none',
        border: `1.5px solid var(--brand)`,
        borderRadius: '6px',
        transition: 'background-color 0.2s, color 0.2s',
        backgroundColor: hovered ? 'var(--brand)' : 'var(--bg)',
      }}
    >
      {children}
    </Link>
  )
}

// Nav link with hover
export function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.78rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
        color: hovered ? 'var(--brand)' : 'var(--text-muted)',
        textDecoration: 'none',
        transition: 'color 0.2s',
      }}
    >
      {children}
    </Link>
  )
}

// Gold outline anchor (external)
export function OutlineAnchor({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cta-button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        textDecoration: 'none',
        letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
        border: `1.5px solid var(--brand)`,
        padding: '0.6rem 1.5rem',
        borderRadius: '6px',
        display: 'inline-block',
        transition: 'background-color 0.2s, color 0.2s',
        backgroundColor: hovered ? 'var(--brand)' : 'var(--bg)',
        color: hovered ? '#ffffff' : 'var(--brand)',
      }}
    >
      {children}
    </a>
  )
}

// Email gold button
export function EmailButton({
  email,
  children,
}: {
  email: string
  children: React.ReactNode
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={`mailto:${email}`}
      className="cta-button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '1rem 2rem',
        background: 'var(--brand)',
        color: '#ffffff',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        fontWeight: 600,
        letterSpacing: '0.06em',
        textDecoration: 'none',
        borderRadius: '6px',
        marginBottom: '3rem',
        opacity: hovered ? 0.9 : 1,
        boxShadow: hovered ? '0 4px 12px var(--brand-soft)' : 'var(--shadow-soft)',
        transition: 'opacity 0.2s, box-shadow 0.2s',
      }}
    >
      {children}
    </a>
  )
}

// Footer social link
export function FooterLink({
  href,
  children,
  icon,
}: {
  href: string
  children: React.ReactNode
  icon?: React.ReactNode
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.72rem',
        color: hovered ? 'var(--brand)' : 'var(--text-subtle)',
        textDecoration: 'none',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.06em',
        transition: 'color 0.2s',
      }}
    >
      {icon}
      {children}
    </a>
  )
}
