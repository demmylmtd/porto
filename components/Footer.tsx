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
      className="border-t text-center px-[clamp(1rem,4vw,2rem)] py-[clamp(2rem,5vw,3rem)]"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
    >
      <div className="mx-auto max-w-[1200px]">
        <p
          className="uppercase tracking-[0.06em]"
          style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)' }}
        >
          © {new Date().getFullYear()} {siteConfig.fullName} · {content.ui.builtWith}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
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
