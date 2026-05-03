import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Demmy — GCC Equity Research'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: 'linear-gradient(135deg, #0A1628 0%, #0D0D0D 100%)',
          color: '#F6F3EB',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 8,
              background: '#C9A84C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0A1628',
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            D
          </div>
          <div
            style={{
              fontSize: 20,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C9A84C',
            }}
          >
            DemmyFi
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ fontSize: 80, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
            Muhammad Demmy
          </div>
          <div style={{ fontSize: 36, color: '#C9A84C', lineHeight: 1.2 }}>
            GCC Equity Research · Islamic Finance · Tadawul Coverage
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: '#9CA9BB',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          <div>EN · AR · ID</div>
          <div>demmy.me</div>
        </div>
      </div>
    ),
    { ...size },
  )
}
