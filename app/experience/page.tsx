'use client'

import { useLocaleContent } from '@/components/AppSettingsProvider'

export default function ExperiencePage() {
  const content = useLocaleContent()

  return (
    <div style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(2.5rem, 7vw, 4rem) clamp(1rem, 4vw, 2rem)' }}>
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <span className="gold-line" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--brand)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              {content.experiencePage.eyebrow}
            </span>
          </div>
          <h1 className="section-heading">{content.experiencePage.title}</h1>
        </div>

        <div style={{ position: 'relative' }}>
          <div className="timeline-line" style={{ position: 'absolute', left: '0', top: '8px', bottom: '8px', width: '1px', background: 'linear-gradient(to bottom, var(--brand), transparent)' }} />

          <div className="timeline-list" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', paddingLeft: '2rem' }}>
            {content.experiences.map((exp, i) => (
              <div key={`${exp.company}-${exp.role}`} style={{ position: 'relative' }}>
                <div className="timeline-dot" style={{ position: 'absolute', left: '-2.45rem', top: '0.5rem', width: '10px', height: '10px', borderRadius: '50%', background: i === 0 ? 'var(--brand)' : 'var(--border)', border: '1px solid var(--brand)' }} />

                <div className="finance-card" style={{ padding: 'clamp(1rem, 3vw, 1.75rem) clamp(1rem, 4vw, 2rem)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    <div>
                      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>{exp.role}</h2>
                      <p style={{ color: 'var(--brand)', fontSize: '0.9rem', marginTop: '2px' }}>{exp.company}</p>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>{exp.period}</span>
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{exp.description}</p>

                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '4rem', padding: 'clamp(1rem, 4vw, 2rem)', background: 'var(--bg-card)', border: '1px solid var(--border)', borderInlineStart: '3px solid var(--brand)', borderRadius: '0 2px 2px 0' }}>
          <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--brand)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {content.experiencePage.educationTitle}
          </h3>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-primary)' }}>{content.experiencePage.degree}</p>
          <p style={{ color: 'var(--brand)', fontSize: '0.9rem', marginTop: '2px' }}>{content.experiencePage.school}</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem' }}>{content.experiencePage.detail}</p>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .timeline-list {
              padding-left: 1.2rem !important;
              gap: 1.4rem !important;
            }
            .timeline-dot {
              left: -1.6rem !important;
              top: 0.45rem !important;
            }
          }
        `}</style>
      </div>
    </div>
  )
}
