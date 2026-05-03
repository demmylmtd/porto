'use client'

import { useLocaleContent } from '@/components/AppSettingsProvider'

export default function AboutPage() {
  const content = useLocaleContent()

  return (
    <div style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: 'clamp(2.5rem, 7vw, 4rem) clamp(1rem, 4vw, 2rem)' }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <span className="gold-line" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--brand)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              {content.about.eyebrow}
            </span>
          </div>
          <h1 className="section-heading">{content.about.title}</h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {content.about.paragraphs.map((para, i) => (
            <p
              key={para.slice(0, 32)}
              style={{
                color: i === 0 ? 'var(--text-secondary)' : 'var(--text-muted)',
                fontSize: 'clamp(0.95rem, 2.4vw, 1.05rem)',
                lineHeight: 1.85,
              }}
            >
              {para}
            </p>
          ))}
        </div>

        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--brand)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            {content.about.skillsTitle}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.75rem' }}>
            {content.about.skills.map((skill) => (
              <div
                key={skill}
                style={{
                  padding: '0.6rem 1rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.04em',
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
