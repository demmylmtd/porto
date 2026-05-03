import type { Metadata } from 'next'
import Link from 'next/link'
import { coverageNotes, type CoverageRating } from '@/lib/coverage'

export const metadata: Metadata = {
  title: 'Selected Coverage',
  description: 'Illustrative single-name equity research notes on Tadawul-listed Saudi/GCC issuers.',
}

const ratingColor: Record<CoverageRating, string> = {
  BUY: '#7CC885',
  HOLD: '#E2CD8E',
  SELL: '#E07A6A',
}

export default function CoverageIndexPage() {
  return (
    <div className="finance-page-wrap">
      <section className="onepage-section">
        <div className="section-head">
          <p className="eyebrow">Selected Coverage</p>
          <h1 className="section-title">GCC Equity Research Notes</h1>
          <p className="hero-copy" style={{ marginTop: '0.7rem', maxWidth: '72ch' }}>
            Illustrative analyst-style coverage on Tadawul-listed issuers. Educational; not investment advice.
          </p>
        </div>

        <div className="stack-grid">
          {coverageNotes.map((note) => (
            <Link
              key={note.slug}
              href={`/coverage/${note.slug}`}
              className="finance-card hov-card"
              style={{ padding: '1.4rem', textDecoration: 'none', display: 'block' }}
            >
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
                <span className="tag">PT: {note.priceTarget}</span>
                <span className="tag">{note.upside}</span>
                <span className="tag">{note.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
