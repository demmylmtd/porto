'use client'

import { EmailButton, HoverCardLink } from '@/components/Interactive'
import { useLocaleContent } from '@/components/AppSettingsProvider'
import { siteConfig } from '@/lib/data'
import SocialIcon, { type SocialPlatform } from '@/components/SocialIcon'

type ContactCard = {
  platform: SocialPlatform
  href: string
  label: string
  description: string
  action: string
}

export default function ContactPage() {
  const content = useLocaleContent()
  const baseItems: ContactCard[] = [
    { platform: 'linkedin', href: siteConfig.socials.linkedin, ...content.contactPage.links[0] },
    { platform: 'youtube', href: siteConfig.socials.youtube, ...content.contactPage.links[1] },
    { platform: 'kumparan', href: siteConfig.socials.kumparan, ...content.contactPage.links[2] },
    { platform: 'github', href: siteConfig.socials.github, ...content.contactPage.links[3] },
    { platform: 'tiktok', href: siteConfig.socials.tiktok, ...content.contactPage.links[4] },
    { platform: 'instagram', href: siteConfig.socials.instagram, ...content.contactPage.links[5] },
  ]

  const extraItems: ContactCard[] = [
    {
      platform: 'linkedinNewsletter',
      href: siteConfig.socials.linkedinNewsletter,
      label: 'LinkedIn Newsletter',
      description: 'Subscribe on LinkedIn for finance briefings, market notes, and DemmyFi insights',
      action: 'Subscribe →',
    },
    {
      platform: 'spotifyPodcast',
      href: siteConfig.socials.spotifyPodcast,
      label: 'Spotify Podcast',
      description: 'Listen to DemmyFi podcast episodes on economics, markets, and financial perspectives',
      action: 'Play Podcast →',
    },
  ]

  const contactItems = [...baseItems, ...extraItems]

  return (
    <div style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: 'clamp(2.5rem, 7vw, 4rem) clamp(1rem, 4vw, 2rem)' }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <span className="gold-line" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--brand)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{content.contactPage.eyebrow}</span>
          </div>
          <h1 className="section-heading">{content.contactPage.title}</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem', maxWidth: '480px', lineHeight: 1.8 }}>{content.contactPage.intro}</p>
        </div>
        <EmailButton email={siteConfig.email}>✉ {siteConfig.email}</EmailButton>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
          {contactItems.map((item) => (
            <HoverCardLink
              key={item.platform}
              href={item.href}
              style={{ padding: 'clamp(1rem, 3vw, 1.5rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}
            >
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <SocialIcon platform={item.platform} />
                  {item.label}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.description}</p>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--brand)', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{item.action}</span>
            </HoverCardLink>
          ))}
        </div>
      </div>
    </div>
  )
}
