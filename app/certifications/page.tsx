'use client'

import { HoverCard } from '@/components/Interactive'
import { useLocaleContent } from '@/components/AppSettingsProvider'
import { certificationCategoryColors } from '@/lib/content'

export default function CertificationsPage() {
  const content = useLocaleContent()
  const categories = Array.from(new Set(content.certifications.map((c) => c.category)))
  const imageExtensions = new Set(['png', 'jpg', 'jpeg', 'webp'])
  const getFileExtension = (fileName: string) => fileName.split('.').pop()?.toLowerCase() ?? ''

  return (
    <div style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(2.5rem, 7vw, 4rem) clamp(1rem, 4vw, 2rem)' }}>
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <span className="gold-line" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--brand)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{content.certificationsPage.eyebrow}</span>
          </div>
          <h1 className="section-heading">{content.certificationsPage.title}</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem', maxWidth: '650px' }}>{content.certificationsPage.intro}</p>
        </div>
        {categories.map((category) => (
          <div key={category} style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background:
                    certificationCategoryColors[
                      content.certifications.find((certification) => certification.category === category)?.categoryKey ?? 'finance'
                    ],
                }}
              />
              <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{category}</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {content.certifications
                .filter((c) => c.category === category)
                .map((cert) => (
                  <HoverCard key={cert.fileName} style={{ padding: 'clamp(1rem, 3vw, 1.25rem) clamp(1rem, 4vw, 1.5rem)', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{cert.name}</h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          {cert.issuer} · {cert.description}
                        </p>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{cert.year}</span>
                    </div>
                    {imageExtensions.has(getFileExtension(cert.fileName)) ? (
                      <img
                        src={`/certificates/${encodeURIComponent(cert.fileName)}`}
                        alt={`${cert.name} preview`}
                        style={{
                          width: '100%',
                          maxHeight: 'clamp(220px, 55vw, 360px)',
                          objectFit: 'contain',
                          border: '1px solid var(--border)',
                          borderRadius: '0.5rem',
                          background: 'var(--bg)',
                        }}
                      />
                    ) : (
                      <object
                        data={`/certificates/${encodeURIComponent(cert.fileName)}`}
                        type="application/pdf"
                        style={{ width: '100%', height: 'clamp(220px, 55vw, 360px)', border: '1px solid var(--border)', borderRadius: '0.5rem' }}
                      >
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', padding: '0.5rem' }}>{content.certificationsPage.pdfFallback}</p>
                      </object>
                    )}
                    <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', flexWrap: 'wrap' }}>
                      <a href={`/certificates/${encodeURIComponent(cert.fileName)}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: 'var(--brand)', textDecoration: 'none', fontFamily: 'var(--font-mono)', letterSpacing: '0.03em' }}>
                        {content.certificationsPage.openFile}
                      </a>
                      <a href={`/certificates/${encodeURIComponent(cert.fileName)}`} download style={{ fontSize: '0.8rem', color: 'var(--brand)', textDecoration: 'none', fontFamily: 'var(--font-mono)', letterSpacing: '0.03em' }}>
                        {content.certificationsPage.download}
                      </a>
                    </div>
                  </HoverCard>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
