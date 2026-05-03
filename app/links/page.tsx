import type { Metadata } from 'next'
import SocialIcon, { type SocialPlatform } from '@/components/SocialIcon'
import { siteConfig } from '@/lib/data'

type LinkItem = {
  label: string
  href: string
  platform: SocialPlatform | 'website'
}

const linkItems: LinkItem[] = [
  { label: 'Website', href: '/', platform: 'website' },
  { label: 'TikTok', href: siteConfig.socials.tiktok, platform: 'tiktok' },
  { label: 'LinkedIn', href: siteConfig.socials.linkedin, platform: 'linkedin' },
  { label: 'Subscribe on LinkedIn', href: siteConfig.socials.linkedinNewsletter, platform: 'linkedinNewsletter' },
  { label: 'Spotify Podcast', href: siteConfig.socials.spotifyPodcast, platform: 'spotifyPodcast' },
  { label: 'Instagram', href: siteConfig.socials.instagram, platform: 'instagram' },
  { label: 'Kumparan', href: siteConfig.socials.kumparan, platform: 'kumparan' },
  { label: 'YouTube', href: siteConfig.socials.youtube, platform: 'youtube' },
]

export const metadata: Metadata = {
  title: `${siteConfig.fullName} — Links`,
  description: `${siteConfig.fullName} social and website links`,
  robots: {
    index: false,
    follow: false,
  },
}

function WebsiteIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.5 12h17M12 3.5c2.5 2.3 3.8 5.3 3.8 8.5S14.5 18.2 12 20.5C9.5 18.2 8.2 15.2 8.2 12S9.5 5.8 12 3.5Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export default function LinksPage() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '6rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <section
        style={{
          width: 'min(460px, calc(100vw - 2rem))',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '1.5rem',
          boxShadow: 'var(--shadow-soft)',
        }}
      >
        <h1 style={{ margin: 0, marginBottom: '0.35rem', fontFamily: 'var(--font-display)', color: 'var(--text-primary)', fontSize: '1.7rem' }}>
          {siteConfig.fullName}
        </h1>
        <p style={{ margin: 0, marginBottom: '1.25rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{siteConfig.title}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          {linkItems.map((item) => {
            const isExternal = item.href.startsWith('http')
            return (
              <a
                key={item.label}
                href={item.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                style={{
                  border: '1px solid var(--border)',
                  background: 'var(--bg)',
                  color: 'var(--text-primary)',
                  borderRadius: '10px',
                  padding: '0.85rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                className="links-item"
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                  {item.platform === 'website' ? <WebsiteIcon /> : <SocialIcon platform={item.platform} size={18} />}
                  {item.label}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>Open</span>
              </a>
            )
          })}
        </div>
        <style>{`
          .links-item:hover {
            border-color: var(--brand) !important;
            color: var(--brand) !important;
          }
        `}</style>
      </section>
    </div>
  )
}
