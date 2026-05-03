'use client'

import Image from 'next/image'
import { GoldButton, HoverCard } from '@/components/Interactive'
import { useAppSettings } from '@/components/AppSettingsProvider'
import { Locale } from '@/lib/content'

type ImpactChannel = {
  icon: string
  title: string
  subtitle: string
  metrics: string[]
  evidenceImages: Array<{ src: string; alt: string }>
}

type ProofImpactContent = {
  spotlightLabel: string
  spotlightCopy: string
  eyebrow: string
  title: string
  verified: string
  evidenceLabel: string
  viewImageLabel: string
  highlightsLabel: string
  ctaLabel: string
  channels: ImpactChannel[]
}

const proofImpactByLocale: Record<Locale, ProofImpactContent> = {
  en: {
    spotlightLabel: 'Featured Section',
    spotlightCopy: 'Snapshot of measurable growth across newsletter, podcast, and website from the first 30 days.',
    eyebrow: 'Proof of Impact',
    title: 'Real numbers. Real reach. Built from scratch.',
    verified: 'All metrics are independently verified via Vercel Analytics, Spotify for Podcasters, and LinkedIn Newsletter Analytics.',
    evidenceLabel: 'Visual Evidence',
    viewImageLabel: 'Open full image',
    highlightsLabel: 'Performance Highlights',
    ctaLabel: "Let's Build a Project Together",
    channels: [
      {
        icon: '📰',
        title: 'The Demmy Brief — LinkedIn Newsletter',
        subtitle: 'Finance & Economics | Launched April 2026',
        metrics: [
          '50 new subscribers acquired within the first 28 days',
          '467 impressions generated across LinkedIn in under a month',
          '22 article views with traffic peaking at 10 reads in a single day',
        ],
        evidenceImages: [{ src: '/proof-of-impact/Screenshot_29.png', alt: 'LinkedIn newsletter analytics for The Demmy Brief' }],
      },
      {
        icon: '🎙️',
        title: 'Ngobrol Pasar — Spotify Podcast',
        subtitle: 'Market Commentary in Indonesian | Launched April 2026',
        metrics: [
          '51 plays and 1 hour of consumption from a single episode',
          '55.9% listener conversion rate — more than half of interested listeners followed through to completion',
          '9 followers gained organically with zero paid promotion',
          "Reached 92 unique listeners through Spotify's discovery funnel within 30 days",
        ],
        evidenceImages: [
          { src: '/proof-of-impact/Screenshot_30.png', alt: 'Spotify podcast analytics screenshot 1 for Ngobrol Pasar' },
          { src: '/proof-of-impact/Screenshot_31.png', alt: 'Spotify podcast analytics screenshot 2 for Ngobrol Pasar' },
        ],
      },
      {
        icon: '🌐',
        title: 'DemmyFi Portfolio — Personal Finance Website',
        subtitle: 'Built & Deployed on Vercel | April 2026',
        metrics: [
          '45 unique visitors and 108 page views in the first 30 days',
          'Average of 2.4 pages per session, indicating genuine browsing interest',
          'Traffic spike of 8 visitors in a single day driven entirely by organic sharing',
        ],
        evidenceImages: [{ src: '/proof-of-impact/Screenshot_32.png', alt: 'Vercel Analytics screenshot for DemmyFi portfolio website' }],
      },
    ],
  },
  id: {
    spotlightLabel: 'Bagian Unggulan',
    spotlightCopy: 'Ringkasan pertumbuhan terukur dari newsletter, podcast, dan website dalam 30 hari pertama.',
    eyebrow: 'Bukti Dampak',
    title: 'Angka nyata. Jangkauan nyata. Dibangun dari nol.',
    verified: 'Semua metrik diverifikasi secara independen melalui Vercel Analytics, Spotify for Podcasters, dan LinkedIn Newsletter Analytics.',
    evidenceLabel: 'Bukti Visual',
    viewImageLabel: 'Buka gambar penuh',
    highlightsLabel: 'Highlight Performa',
    ctaLabel: 'Mari Bangun Proyek Bersama',
    channels: [
      {
        icon: '📰',
        title: 'The Demmy Brief — Newsletter LinkedIn',
        subtitle: 'Keuangan & Ekonomi | Diluncurkan April 2026',
        metrics: [
          '50 subscriber baru didapat dalam 28 hari pertama',
          '467 impresi di LinkedIn dalam waktu kurang dari sebulan',
          '22 pembacaan artikel dengan puncak 10 bacaan dalam satu hari',
        ],
        evidenceImages: [{ src: '/proof-of-impact/Screenshot_29.png', alt: 'Analitik newsletter LinkedIn untuk The Demmy Brief' }],
      },
      {
        icon: '🎙️',
        title: 'Ngobrol Pasar — Podcast Spotify',
        subtitle: 'Komentar Pasar dalam Bahasa Indonesia | Diluncurkan April 2026',
        metrics: [
          '51 pemutaran dan 1 jam total konsumsi dari satu episode',
          'Rasio konversi pendengar 55,9% — lebih dari setengah pendengar menyelesaikan episode',
          '9 pengikut bertambah secara organik tanpa promosi berbayar',
          'Menjangkau 92 pendengar unik melalui funnel penemuan Spotify dalam 30 hari',
        ],
        evidenceImages: [
          { src: '/proof-of-impact/Screenshot_30.png', alt: 'Tangkapan layar analitik Spotify 1 untuk Ngobrol Pasar' },
          { src: '/proof-of-impact/Screenshot_31.png', alt: 'Tangkapan layar analitik Spotify 2 untuk Ngobrol Pasar' },
        ],
      },
      {
        icon: '🌐',
        title: 'Portofolio DemmyFi — Website Personal Finance',
        subtitle: 'Dibangun & Dideploy di Vercel | April 2026',
        metrics: [
          '45 pengunjung unik dan 108 page views dalam 30 hari pertama',
          'Rata-rata 2,4 halaman per sesi, menandakan minat jelajah yang nyata',
          'Lonjakan 8 pengunjung dalam satu hari murni dari sharing organik',
        ],
        evidenceImages: [{ src: '/proof-of-impact/Screenshot_32.png', alt: 'Tangkapan layar Vercel Analytics untuk website DemmyFi' }],
      },
    ],
  },
  ar: {
    spotlightLabel: 'قسم مميز',
    spotlightCopy: 'ملخص لنمو قابل للقياس عبر النشرة والبودكاست والموقع خلال أول 30 يومًا.',
    eyebrow: 'إثبات الأثر',
    title: 'أرقام حقيقية. وصول حقيقي. بُني من الصفر.',
    verified: 'تم التحقق من جميع المؤشرات بشكل مستقل عبر Vercel Analytics وSpotify for Podcasters وLinkedIn Newsletter Analytics.',
    evidenceLabel: 'أدلة مرئية',
    viewImageLabel: 'فتح الصورة بالحجم الكامل',
    highlightsLabel: 'أبرز النتائج',
    ctaLabel: 'لنبنِ مشروعًا معًا',
    channels: [
      {
        icon: '📰',
        title: 'The Demmy Brief — النشرة على لينكدإن',
        subtitle: 'التمويل والاقتصاد | أُطلقت في أبريل 2026',
        metrics: [
          'اكتساب 50 مشتركًا جديدًا خلال أول 28 يومًا',
          'تحقيق 467 ظهورًا على لينكدإن خلال أقل من شهر',
          '22 قراءة للمقالات مع ذروة 10 قراءات في يوم واحد',
        ],
        evidenceImages: [{ src: '/proof-of-impact/Screenshot_29.png', alt: 'تحليلات نشرة لينكدإن الخاصة بـ The Demmy Brief' }],
      },
      {
        icon: '🎙️',
        title: 'Ngobrol Pasar — بودكاست Spotify',
        subtitle: 'تعليق سوقي باللغة الإندونيسية | أُطلق في أبريل 2026',
        metrics: [
          '51 تشغيلًا وساعة واحدة من الاستماع من حلقة واحدة',
          'معدل تحويل المستمعين 55.9% — أكثر من نصف المهتمين أكملوا الاستماع',
          'زيادة 9 متابعين بشكل عضوي دون أي ترويج مدفوع',
          'الوصول إلى 92 مستمعًا فريدًا عبر مسار الاكتشاف في Spotify خلال 30 يومًا',
        ],
        evidenceImages: [
          { src: '/proof-of-impact/Screenshot_30.png', alt: 'لقطة تحليلات Spotify رقم 1 لبرنامج Ngobrol Pasar' },
          { src: '/proof-of-impact/Screenshot_31.png', alt: 'لقطة تحليلات Spotify رقم 2 لبرنامج Ngobrol Pasar' },
        ],
      },
      {
        icon: '🌐',
        title: 'DemmyFi Portfolio — موقع التمويل الشخصي',
        subtitle: 'تم البناء والنشر على Vercel | أبريل 2026',
        metrics: [
          '45 زائرًا فريدًا و108 مشاهدات صفحة خلال أول 30 يومًا',
          'متوسط 2.4 صفحة لكل جلسة، ما يدل على اهتمام تصفح حقيقي',
          'طفرة وصلت إلى 8 زوار في يوم واحد نتيجة مشاركة عضوية بالكامل',
        ],
        evidenceImages: [{ src: '/proof-of-impact/Screenshot_32.png', alt: 'لقطة Vercel Analytics لموقع DemmyFi' }],
      },
    ],
  },
}

export default function ProofOfImpactPage() {
  const { locale } = useAppSettings()
  const localized = proofImpactByLocale[locale]

  return (
    <div className="finance-page-wrap" style={{ paddingTop: '6rem' }}>
      <section className="onepage-section hero-section" style={{ minHeight: 'auto' }}>
        <p className="impact-spotlight-label">{localized.spotlightLabel}</p>
        <p className="impact-spotlight-copy">{localized.spotlightCopy}</p>
        <p className="eyebrow" style={{ marginTop: '0.9rem' }}>
          {localized.eyebrow}
        </p>
        <h1 className="section-title">{localized.title}</h1>
      </section>

      <section className="onepage-section section-alt proof-impact-section" style={{ minHeight: 'auto' }}>
        <div className="impact-grid">
          {localized.channels.map((channel) => (
            <HoverCard key={channel.title} style={{ padding: '1.4rem' }}>
              <p className="impact-title">
                <span aria-hidden="true">{channel.icon}</span>
                <span>{channel.title}</span>
              </p>
              <p className="mono-small" style={{ marginTop: '0.35rem' }}>
                {channel.subtitle}
              </p>
              <p className="impact-section-label">{localized.evidenceLabel}</p>
              <div className="impact-evidence-grid">
                {channel.evidenceImages.map((image) => (
                  <figure key={image.src} className="impact-evidence-item">
                    <a href={image.src} target="_blank" rel="noreferrer" className="impact-evidence-link">
                      <div className="impact-evidence-media">
                        <Image src={image.src} alt={image.alt} width={1440} height={900} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </div>
                    </a>
                    <figcaption className="impact-evidence-caption">{localized.viewImageLabel}</figcaption>
                  </figure>
                ))}
              </div>
              <p className="impact-section-label">{localized.highlightsLabel}</p>
              <ul className="impact-metrics">
                {channel.metrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </HoverCard>
          ))}
        </div>

        <p className="impact-verified">{localized.verified}</p>

        <div style={{ marginTop: '1rem' }}>
          <GoldButton href="/#contact">{localized.ctaLabel}</GoldButton>
        </div>
      </section>
    </div>
  )
}
