'use client'

import Image from 'next/image'
import { GoldButton, HoverCard, HoverCardLink, OutlineAnchor, OutlineButton } from '@/components/Interactive'
import { useAppSettings, useLocaleContent } from '@/components/AppSettingsProvider'
import SocialIcon, { type SocialPlatform } from '@/components/SocialIcon'
import { Locale } from '@/lib/content'
import { siteConfig } from '@/lib/data'

const statusStyles: Record<string, { color: string; border: string }> = {
  active: { color: '#f7cc75', border: 'rgba(247, 204, 117, 0.35)' },
  inProgress: { color: '#f0b95e', border: 'rgba(240, 185, 94, 0.35)' },
  completed: { color: '#9ca9bb', border: 'rgba(156, 169, 187, 0.35)' },
}

const partnerBrands = [
  { name: 'Bloomberg', file: 'Bloomberg_logo.svg', scale: 0.95 },
  { name: 'Citi', file: 'Citi.svg', scale: 0.91 },
  { name: 'J.P. Morgan', file: 'J_P_Morgan_Logo_2008_1.svg', scale: 0.79 },
  { name: 'BCG', file: 'Boston_Consulting_Group_2020_logo.svg', scale: 0.93 },
  { name: 'SIDF', file: 'SIDF.svg', scale: 0.9 },
] as const

const cvLabelByLocale: Record<Locale, string> = {
  en: 'Download CV',
  id: 'Unduh CV',
  ar: 'تحميل السيرة الذاتية',
}

const socialItems: Array<{ platform: SocialPlatform; label: string; href: string; helper: string }> = [
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    href: siteConfig.socials.linkedin,
    helper: 'Main professional profile',
  },
  {
    platform: 'linkedinNewsletter',
    label: 'Subscribe on LinkedIn',
    href: siteConfig.socials.linkedinNewsletter,
    helper: 'LinkedIn newsletter for finance updates and insights',
  },
  {
    platform: 'spotifyPodcast',
    label: 'Spotify Podcast',
    href: siteConfig.socials.spotifyPodcast,
    helper: 'DemmyFi podcast on markets, economics, and finance ideas',
  },
  {
    platform: 'youtube',
    label: 'YouTube',
    href: siteConfig.socials.youtube,
    helper: 'DemmyFi video content',
  },
  {
    platform: 'kumparan',
    label: 'Kumparan',
    href: siteConfig.socials.kumparan,
    helper: 'Finance writing',
  },
  {
    platform: 'github',
    label: 'GitHub',
    href: siteConfig.socials.github,
    helper: 'Code and projects',
  },
]

type CaseStudyHighlight = {
  company: string
  title: string
  summary: string
  image: string
}

type ImpactChannel = {
  icon: string
  title: string
  subtitle: string
  metrics: string[]
  evidenceImages: Array<{ src: string; alt: string }>
}

type ProofImpactSection = {
  spotlightLabel: string
  spotlightCopy: string
  eyebrow: string
  title: string
  openFullLabel: string
  verified: string
  channels: ImpactChannel[]
}

const proofImpactSectionByLocale: Record<Locale, ProofImpactSection> = {
  en: {
    spotlightLabel: 'Featured Section',
    spotlightCopy: 'Snapshot of measurable growth across newsletter, podcast, and website from the first 30 days.',
    eyebrow: 'Proof of Impact',
    title: 'Real numbers. Real reach. Built from scratch.',
    openFullLabel: 'Open Full Proof of Impact',
    verified: 'All metrics are independently verified via Vercel Analytics, Spotify for Podcasters, and LinkedIn Newsletter Analytics.',
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
    openFullLabel: 'Buka Bukti Dampak Lengkap',
    verified: 'Semua metrik diverifikasi secara independen melalui Vercel Analytics, Spotify for Podcasters, dan LinkedIn Newsletter Analytics.',
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
          "Menjangkau 92 pendengar unik melalui funnel penemuan Spotify dalam 30 hari",
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
    openFullLabel: 'فتح إثبات الأثر الكامل',
    verified: 'تم التحقق من جميع المؤشرات بشكل مستقل عبر Vercel Analytics وSpotify for Podcasters وLinkedIn Newsletter Analytics.',
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

const caseStudySectionByLocale: Record<
  Locale,
  { eyebrow: string; title: string; description: string; openFullLabel: string; highlights: CaseStudyHighlight[] }
> = {
  en: {
    eyebrow: 'Deep Dives',
    title: 'Case Studies',
    description:
      'Consulting and finance problem-solving from Bloomberg, Citi, and BCG simulations, structured into strategy, modeling, and decision-making outcomes.',
    openFullLabel: 'Open Full Case Studies',
    highlights: [
      {
        company: 'Bloomberg',
        title: 'Islamic Finance Work Experience',
        summary: 'Structured a $2B Green Sukuk strategy for Aramco expansion into green hydrogen and carbon capture.',
        image: '/case-studies/bloomberg-cover.png',
      },
      {
        company: 'Citi',
        title: 'M&A Buy-Side Analyst Simulation',
        summary: 'Built a 5-year model, company profile, and comparable analysis to support an internal investor update.',
        image: '/case-studies/citi-cover.png',
      },
      {
        company: 'BCG',
        title: 'Junior Consultant Assistant Simulation',
        summary: 'Modeled a telecom EBITDA transformation with strategic roadmap, risk diagnostics, and profit impact analysis.',
        image: '/case-studies/bcg-cover.png',
      },
    ],
  },
  id: {
    eyebrow: 'Analisis Mendalam',
    title: 'Studi Kasus',
    description:
      'Pemecahan masalah konsultasi dan keuangan dari simulasi Bloomberg, Citi, dan BCG yang disusun menjadi hasil strategi, pemodelan, dan pengambilan keputusan.',
    openFullLabel: 'Buka Studi Kasus Lengkap',
    highlights: [
      {
        company: 'Bloomberg',
        title: 'Simulasi Pengalaman Keuangan Syariah',
        summary: 'Menyusun strategi Green Sukuk senilai $2 miliar untuk ekspansi Aramco ke hidrogen hijau dan penangkapan karbon.',
        image: '/case-studies/bloomberg-cover.png',
      },
      {
        company: 'Citi',
        title: 'Simulasi Analis Buy-Side M&A',
        summary: 'Membangun model 5 tahun, profil perusahaan, dan analisis perusahaan pembanding untuk update internal investor.',
        image: '/case-studies/citi-cover.png',
      },
      {
        company: 'BCG',
        title: 'Simulasi Asisten Konsultan Junior',
        summary: 'Memodelkan transformasi EBITDA perusahaan telekomunikasi dengan roadmap strategi, diagnosis risiko, dan analisis dampak laba.',
        image: '/case-studies/bcg-cover.png',
      },
    ],
  },
  ar: {
    eyebrow: 'تحليلات متعمقة',
    title: 'دراسات الحالة',
    description:
      'حلول في الاستشارات والتمويل من محاكاة Bloomberg وCiti وBCG، منظّمة ضمن مخرجات الاستراتيجية والنمذجة واتخاذ القرار.',
    openFullLabel: 'فتح دراسات الحالة الكاملة',
    highlights: [
      {
        company: 'Bloomberg',
        title: 'محاكاة خبرة التمويل الإسلامي',
        summary: 'هيكلة استراتيجية صكوك خضراء بقيمة 2 مليار دولار لتوسّع أرامكو في الهيدروجين الأخضر واحتجاز الكربون.',
        image: '/case-studies/bloomberg-cover.png',
      },
      {
        company: 'Citi',
        title: 'محاكاة محلل استحواذ Buy-Side',
        summary: 'بناء نموذج لخمس سنوات وملف شركة وتحليل شركات مقارنة لدعم تحديث داخلي للمستثمرين.',
        image: '/case-studies/citi-cover.png',
      },
      {
        company: 'BCG',
        title: 'محاكاة مساعد مستشار مبتدئ',
        summary: 'نمذجة تحول EBITDA لشركة اتصالات عبر خارطة استراتيجية وتشخيص مخاطر وتحليل أثر الربحية.',
        image: '/case-studies/bcg-cover.png',
      },
    ],
  },
}

function PartnerLogo({ name, file, scale }: { name: string; file: string; scale: number }) {
  return (
    <div className="logo-tile" aria-label={name}>
      <img
        src={`/logos/${encodeURIComponent(file)}`}
        alt={`${name} logo`}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          transform: `scale(${scale})`,
          transformOrigin: 'center',
          display: 'block',
        }}
      />
    </div>
  )
}

export default function HomePage() {
  const content = useLocaleContent()
  const { locale } = useAppSettings()
  const proofImpactSection = proofImpactSectionByLocale[locale]
  const caseStudySection = caseStudySectionByLocale[locale]

  return (
    <div className="finance-page-wrap">
      {/* HERO */}
      <section id="home" className="onepage-section hero-section">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">DemmyFi • Jakarta, Indonesia</p>
            <p className="hero-kicker">Finance Portfolio</p>
            <h1 className="hero-title">{content.home.heroName}</h1>
            <p className="hero-subtitle">{content.home.heroTagline}</p>
            <p className="hero-punch">Islamic Finance. Equity Research. Market Edge.</p>
            <p className="hero-copy">{content.home.heroDescription}</p>

            <div className="hero-actions">
              <GoldButton href="/#contact">{content.home.getInTouch}</GoldButton>
              <OutlineAnchor href="/Demmy-CV.pdf">{cvLabelByLocale[locale]}</OutlineAnchor>
              <OutlineButton href="/#projects">{content.home.viewProjects}</OutlineButton>
            </div>

            <div className="hero-extras">
              <OutlineAnchor href={siteConfig.socials.linkedinNewsletter}>Subscribe on LinkedIn</OutlineAnchor>
              <OutlineAnchor href={siteConfig.socials.spotifyPodcast}>Listen on Spotify</OutlineAnchor>
            </div>

            <div className="stats-row">
              {content.home.stats.map((stat) => (
                <div key={stat.label} className="stat-block">
                  <p className="stat-num">{stat.num}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-photo-wrap">
            <div className="hero-photo-ring" />
            <div className="hero-photo">
              <Image
                src="/profile-photo.png"
                alt="Demmy portrait"
                width={900}
                height={1200}
                priority
                style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', objectPosition: '50% 24%' }}
              />
            </div>
          </div>
        </div>

        {/* CREDIBILITY STRIP */}
        <div className="brand-strip-wrap">
          <p className="strip-label">Trusted Programs & Institutions</p>
          <div className="brand-strip">
            {partnerBrands.map((brand) => (
              <PartnerLogo key={brand.name} name={brand.name} file={brand.file} scale={brand.scale} />
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE — Phase 3.5 placeholder; will host Selected Coverage */}

      {/* CERTIFICATIONS */}
      <section id="certifications" className="onepage-section section-alt">
        <div className="section-head">
          <p className="eyebrow">{content.certificationsPage.eyebrow}</p>
          <h2 className="section-title">{content.certificationsPage.title}</h2>
        </div>

        <div className="stack-grid cert-grid">
          {content.certifications.slice(0, 6).map((cert) => (
            <HoverCardLink
              key={cert.name}
              href={`/certificates/${encodeURIComponent(cert.fileName)}`}
              style={{ padding: '1.4rem', background: 'var(--bg-card-2)' }}
            >
              <div className="card-topline">
                <h3 className="card-title">{cert.name}</h3>
                <span className="mono-small">{cert.year}</span>
              </div>
              <p className="card-company">{cert.issuer}</p>
              <p className="card-copy">{cert.description}</p>
              <span className="mono-small" style={{ color: 'var(--brand)' }}>
                Open Certificate →
              </span>
            </HoverCardLink>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="onepage-section">
        <div className="section-head">
          <p className="eyebrow">{content.experiencePage.eyebrow}</p>
          <h2 className="section-title">{content.home.experienceSection}</h2>
        </div>

        <div className="stack-grid">
          {content.experiences.map((exp) => (
            <HoverCard key={exp.company + exp.role} style={{ padding: '1.4rem' }}>
              <div className="card-topline">
                <h3 className="card-title">{exp.role}</h3>
                <span className="mono-small">{exp.period}</span>
              </div>
              <p className="card-company">{exp.company}</p>
              <p className="card-copy">{exp.description}</p>
              <div className="chip-list">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </HoverCard>
          ))}
        </div>
      </section>

      {/* PROJECTS — trading bots stay visible per user decision */}
      <section id="projects" className="onepage-section section-alt">
        <div className="section-head">
          <p className="eyebrow">{content.projectsPage.eyebrow}</p>
          <h2 className="section-title">{content.projectsPage.title}</h2>
        </div>

        <div className="projects-grid">
          {content.projects.map((project) => (
            <HoverCardLink key={project.title} href={project.link} style={{ padding: '1.3rem' }}>
              <div className="card-topline">
                <h3 className="card-title">{project.title}</h3>
                <span
                  className="mono-small"
                  style={{
                    color: statusStyles[project.status].color,
                    border: `1px solid ${statusStyles[project.status].border}`,
                    borderRadius: '999px',
                    padding: '0.1rem 0.5rem',
                  }}
                >
                  {project.statusLabel}
                </span>
              </div>
              <p className="card-copy">{project.description}</p>
              <div className="chip-list">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </HoverCardLink>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="onepage-section">
        <div className="section-head">
          <p className="eyebrow">{caseStudySection.eyebrow}</p>
          <h2 className="section-title">{caseStudySection.title}</h2>
          <p className="hero-copy" style={{ marginTop: '0.7rem', maxWidth: '72ch' }}>
            {caseStudySection.description}
          </p>
        </div>

        <div className="case-highlight-grid">
          {caseStudySection.highlights.map((study) => (
            <HoverCard key={study.title} style={{ overflow: 'hidden', padding: 0 }}>
              <div className="case-image-wrap">
                <Image src={study.image} alt={study.title} width={1834} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="case-body">
                <p className="mono-small" style={{ color: 'var(--brand)' }}>
                  {study.company}
                </p>
                <h3 className="card-title" style={{ marginTop: '0.35rem', fontSize: '1.15rem' }}>
                  {study.title}
                </h3>
                <p className="card-copy" style={{ marginTop: '0.6rem' }}>
                  {study.summary}
                </p>
              </div>
            </HoverCard>
          ))}
        </div>

        <div style={{ marginTop: '1rem' }}>
          <OutlineButton href="/case-studies">{caseStudySection.openFullLabel}</OutlineButton>
        </div>
      </section>

      {/* PROOF OF IMPACT */}
      <section id="proof-of-impact" className="onepage-section section-alt proof-impact-section">
        <div className="impact-spotlight">
          <p className="impact-spotlight-label">{proofImpactSection.spotlightLabel}</p>
          <p className="impact-spotlight-copy">{proofImpactSection.spotlightCopy}</p>
        </div>

        <div className="section-head">
          <p className="eyebrow">{proofImpactSection.eyebrow}</p>
          <h2 className="section-title">{proofImpactSection.title}</h2>
        </div>

        <div className="impact-grid">
          {proofImpactSection.channels.map((channel) => (
            <HoverCard key={channel.title} style={{ padding: '1.4rem' }}>
              <p className="impact-title">
                <span aria-hidden="true">{channel.icon}</span>
                <span>{channel.title}</span>
              </p>
              <p className="mono-small" style={{ marginTop: '0.35rem' }}>
                {channel.subtitle}
              </p>
              <div className="impact-evidence-grid">
                {channel.evidenceImages.map((image) => (
                  <div key={image.src} className="impact-evidence-media">
                    <Image src={image.src} alt={image.alt} width={1440} height={900} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
              <ul className="impact-metrics">
                {channel.metrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </HoverCard>
          ))}
        </div>

        <p className="impact-verified">{proofImpactSection.verified}</p>

        <div style={{ marginTop: '1rem' }}>
          <OutlineButton href="/proof-of-impact">{proofImpactSection.openFullLabel}</OutlineButton>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="onepage-section">
        <div className="section-head">
          <p className="eyebrow">{content.blogPage.eyebrow}</p>
          <h2 className="section-title">{content.blogPage.title}</h2>
        </div>

        <div className="stack-grid">
          {content.blogPosts.slice(0, 2).map((post) => (
            <HoverCardLink key={post.title} href={post.link} style={{ padding: '1.35rem', background: 'var(--bg-card-2)' }}>
              <div className="card-topline">
                <h3 className="card-title">{post.title}</h3>
                <span className="mono-small">{post.date}</span>
              </div>
              <p className="card-copy">{post.excerpt}</p>
              <span className="mono-small" style={{ color: 'var(--brand)' }}>
                Read Article →
              </span>
            </HoverCardLink>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="onepage-section section-alt">
        <div className="section-head">
          <p className="eyebrow">{content.about.eyebrow}</p>
          <h2 className="section-title">{content.about.title}</h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            {content.about.paragraphs.slice(0, 3).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <HoverCard style={{ padding: '1.35rem', background: 'var(--bg-card-2)' }}>
            <h3 className="card-title">{content.about.skillsTitle}</h3>
            <div className="chip-list">
              {content.about.skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </HoverCard>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="onepage-section">
        <div className="section-head">
          <p className="eyebrow">{content.contactPage.eyebrow}</p>
          <h2 className="section-title">{content.contactPage.title}</h2>
          <p className="hero-copy" style={{ marginTop: '0.75rem' }}>
            {content.contactPage.intro}
          </p>
        </div>

        <a href={`mailto:${siteConfig.email}`} className="email-pill">
          {siteConfig.email}
        </a>

        <div className="social-grid">
          {socialItems.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="social-card">
              <span className="social-title-wrap">
                <SocialIcon platform={item.platform} size={16} />
                <span>{item.label}</span>
              </span>
              <span className="mono-small">{item.helper}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
