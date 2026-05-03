'use client'

import { HoverCardLink } from '@/components/Interactive'
import { useLocaleContent } from '@/components/AppSettingsProvider'

const statusStyles: Record<string, { color: string; border: string }> = {
  active: { color: '#4ade80', border: 'rgba(74,222,128,0.3)' },
  inProgress: { color: 'var(--brand)', border: 'var(--brand-soft)' },
  completed: { color: 'var(--text-muted)', border: 'var(--border)' },
}

export default function ProjectsPage() {
  const content = useLocaleContent()

  return (
    <div style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(2.5rem, 7vw, 4rem) clamp(1rem, 4vw, 2rem)' }}>
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <span className="gold-line" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--brand)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{content.projectsPage.eyebrow}</span>
          </div>
          <h1 className="section-heading">{content.projectsPage.title}</h1>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {content.projects.map((project) => (
            <HoverCardLink key={project.title} href={project.link} style={{ padding: 'clamp(1rem, 4vw, 2rem)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ color: 'var(--brand)', fontSize: '1.25rem', lineHeight: 1 }}>↗</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: statusStyles[project.status].color, border: `1px solid ${statusStyles[project.status].border}`, padding: '2px 8px', borderRadius: '1px', letterSpacing: '0.06em' }}>
                  {project.statusLabel}
                </span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.3 }}>{project.title}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7, flex: 1 }}>{project.description}</p>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </HoverCardLink>
          ))}
        </div>
      </div>
    </div>
  )
}
