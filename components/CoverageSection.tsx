'use client'

import { HoverCardLink, OutlineButton } from './Interactive'
import { coverageNotes, type CoverageRating } from '@/lib/coverage'
import { useAppSettings } from './AppSettingsProvider'
import type { Locale } from '@/lib/content'

const ratingColor: Record<CoverageRating, string> = {
  BUY: '#7CC885',
  HOLD: '#E2CD8E',
  SELL: '#E07A6A',
}

const labels: Record<Locale, { eyebrow: string; title: string; description: string; openAll: string; pt: string; rating: string; openNote: string }> = {
  en: {
    eyebrow: 'Selected Coverage',
    title: 'GCC Equity Research Notes',
    description: 'Illustrative single-name coverage on Tadawul-listed issuers — thesis, target, and risks. Educational; not investment advice.',
    openAll: 'View All Coverage',
    pt: 'Price Target',
    rating: 'Rating',
    openNote: 'Open Note →',
  },
  id: {
    eyebrow: 'Cakupan Terpilih',
    title: 'Catatan Riset Ekuitas GCC',
    description: 'Cakupan ilustratif emiten Tadawul — tesis, target, dan risiko. Edukasi; bukan saran investasi.',
    openAll: 'Lihat Semua Cakupan',
    pt: 'Target Harga',
    rating: 'Rekomendasi',
    openNote: 'Buka Catatan →',
  },
  ar: {
    eyebrow: 'تغطية مختارة',
    title: 'مذكرات بحث الأسهم الخليجية',
    description: 'تغطية توضيحية لشركات مدرجة في تداول — الأطروحة والسعر المستهدف والمخاطر. تعليمية وليست توصية استثمارية.',
    openAll: 'عرض كل التغطية',
    pt: 'السعر المستهدف',
    rating: 'التوصية',
    openNote: 'فتح المذكرة ←',
  },
}

export default function CoverageSection() {
  const { locale } = useAppSettings()
  const t = labels[locale]

  return (
    <section id="coverage" className="onepage-section">
      <div className="section-head">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="section-title">{t.title}</h2>
        <p className="hero-copy" style={{ marginTop: '0.7rem', maxWidth: '72ch' }}>
          {t.description}
        </p>
      </div>

      <div className="stack-grid">
        {coverageNotes.map((note) => (
          <HoverCardLink key={note.slug} href={`/coverage/${note.slug}`} style={{ padding: '1.4rem' }}>
            <div className="card-topline">
              <h3 className="card-title">
                {note.company} <span className="mono-small" style={{ color: 'var(--text-subtle)' }}>· {note.ticker}</span>
              </h3>
              <span
                className="mono-small"
                style={{
                  color: ratingColor[note.rating],
                  border: `1px solid ${ratingColor[note.rating]}55`,
                  borderRadius: '999px',
                  padding: '0.1rem 0.55rem',
                  letterSpacing: '0.08em',
                }}
              >
                {note.rating}
              </span>
            </div>
            <p className="card-company">{note.sector}</p>
            <p className="card-copy">{note.summary}</p>
            <div className="chip-list" style={{ marginTop: '0.65rem' }}>
              <span className="tag">{t.pt}: {note.priceTarget}</span>
              <span className="tag">{note.upside}</span>
              <span className="tag">{note.date}</span>
            </div>
            <span className="mono-small" style={{ color: 'var(--brand)', marginTop: '0.6rem', display: 'inline-block' }}>
              {t.openNote}
            </span>
          </HoverCardLink>
        ))}
      </div>

      <div style={{ marginTop: '1rem' }}>
        <OutlineButton href="/coverage">{t.openAll}</OutlineButton>
      </div>
    </section>
  )
}
