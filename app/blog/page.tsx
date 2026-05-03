'use client'

import { HoverCardLink, OutlineAnchor } from '@/components/Interactive'
import { useLocaleContent } from '@/components/AppSettingsProvider'
import { siteConfig } from '@/lib/data'

export default function BlogPage() {
  const content = useLocaleContent()

  return (
    <div style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(2.5rem, 7vw, 4rem) clamp(1rem, 4vw, 2rem)' }}>
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <span className="gold-line" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--brand)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{content.blogPage.eyebrow}</span>
          </div>
          <h1 className="section-heading">{content.blogPage.title}</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
            {content.blogPage.introPrefix}{' '}
            <a href={siteConfig.socials.kumparan} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'none' }}>
              Kumparan
            </a>
            .
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {content.blogPosts.map((post) => (
            <HoverCardLink key={post.title} href={post.link} style={{ padding: 'clamp(1rem, 4vw, 1.75rem) clamp(1rem, 4vw, 2rem)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.65rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.4 }}>{post.title}</h2>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{post.date}</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>{post.excerpt}</p>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </HoverCardLink>
          ))}
        </div>
        <div style={{ marginTop: '3rem', textAlign: 'center', padding: 'clamp(1rem, 4vw, 2rem)', border: '1px dashed var(--border)', borderRadius: '2px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>{content.blogPage.moreArticles}</p>
          <OutlineAnchor href={siteConfig.socials.kumparan}>{content.blogPage.readOnKumparan}</OutlineAnchor>
        </div>
      </div>
    </div>
  )
}
