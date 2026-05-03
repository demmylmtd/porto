'use client'

import { siteConfig } from '@/lib/data'
import { FooterLink } from './Interactive'
import { useLocaleContent } from './AppSettingsProvider'
import SocialIcon, { type SocialPlatform } from './SocialIcon'

const socialLabels: Record<SocialPlatform, string> = {
  linkedin: 'LinkedIn',
  linkedinNewsletter: 'Newsletter',
  spotifyPodcast: 'Spotify Podcast',
  github: 'GitHub',
  youtube: 'YouTube',
  kumparan: 'Kumparan',
  tiktok: 'TikTok',
  instagram: 'Instagram',
}

export default function Footer() {
  const content = useLocaleContent()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem)',
        textAlign: 'center',
        background: 'var(--bg-card)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-subtle)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          © {new Date().getFullYear()} {siteConfig.fullName} · {content.ui.builtWith}
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '1rem',
            flexWrap: 'wrap',
          }}
        >
          {(Object.entries(siteConfig.socials) as Array<[SocialPlatform, string]>).map(([key, url]) => (
            <FooterLink key={key} href={url} icon={<SocialIcon platform={key} size={14} />}>
              {socialLabels[key]}
            </FooterLink>
          ))}
        </div>
      </div>
    </footer>
  )
}
