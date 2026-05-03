import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { coverageNotes, getCoverageNote, type CoverageRating } from '@/lib/coverage'

export function generateStaticParams() {
  return coverageNotes.map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const note = getCoverageNote(slug)
  if (!note) return { title: 'Coverage Not Found' }
  return {
    title: `${note.company} (${note.ticker}) — ${note.rating}`,
    description: note.summary,
  }
}

const ratingColor: Record<CoverageRating, string> = {
  BUY: '#7CC885',
  HOLD: '#E2CD8E',
  SELL: '#E07A6A',
}

export default async function CoverageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const note = getCoverageNote(slug)
  if (!note) notFound()

  return (
    <div className="finance-page-wrap">
      <section className="onepage-section">
        <Link href="/coverage" className="mono-small hov-text" style={{ textDecoration: 'none' }}>
          ← All Coverage
        </Link>

        <div className="section-head" style={{ marginTop: '1rem' }}>
          <p className="eyebrow">
            {note.exchange} · {note.ticker} · {note.date}
          </p>
          <h1 className="section-title">{note.company}</h1>
          <p className="card-company">{note.sector}</p>
        </div>

        <div
          className="finance-card"
          style={{
            padding: '1.4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <div>
            <p className="mono-small" style={{ color: 'var(--text-subtle)' }}>Rating</p>
            <p className="card-title" style={{ color: ratingColor[note.rating], marginTop: '0.25rem' }}>{note.rating}</p>
          </div>
          <div>
            <p className="mono-small" style={{ color: 'var(--text-subtle)' }}>Price Target</p>
            <p className="card-title" style={{ marginTop: '0.25rem' }}>{note.priceTarget}</p>
          </div>
          <div>
            <p className="mono-small" style={{ color: 'var(--text-subtle)' }}>Upside</p>
            <p className="card-title" style={{ marginTop: '0.25rem' }}>{note.upside}</p>
          </div>
        </div>

        <div className="about-copy" style={{ maxWidth: '72ch' }}>
          <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>{note.summary}</p>
          <p style={{ marginTop: '1.25rem' }}>{note.body}</p>
        </div>

        <div style={{ marginTop: '2rem', display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="finance-card" style={{ padding: '1.4rem' }}>
            <h3 className="card-title">Investment Thesis</h3>
            <ul className="impact-metrics" style={{ marginTop: '0.6rem' }}>
              {note.thesis.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
          <div className="finance-card" style={{ padding: '1.4rem' }}>
            <h3 className="card-title">Key Risks</h3>
            <ul className="impact-metrics" style={{ marginTop: '0.6rem' }}>
              {note.risks.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </div>
        </div>

        <p className="mono-small" style={{ marginTop: '2rem', color: 'var(--text-subtle)', maxWidth: '72ch' }}>
          Disclaimer: This note is illustrative and educational. It is not investment advice and does not constitute a recommendation to buy or sell any security.
        </p>
      </section>
    </div>
  )
}
