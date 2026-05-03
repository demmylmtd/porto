import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AppSettingsProvider from '@/components/AppSettingsProvider'
import { siteConfig } from '@/lib/data'

const siteUrl = 'https://demmy.me'
const heroline =
  'Bilingual Arabic/English equity analyst covering Saudi & GCC markets — Bloomberg-certified, Shariah-fluent.'
const titleDefault = `${siteConfig.fullName} — Equity Research · Saudi & GCC Markets`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleDefault,
    template: `%s · ${siteConfig.fullName}`,
  },
  description: heroline,
  applicationName: `${siteConfig.fullName} — DemmyFi`,
  authors: [{ name: siteConfig.fullName, url: siteUrl }],
  creator: siteConfig.fullName,
  keywords: [
    'Saudi equity research',
    'GCC equity research',
    'Tadawul analyst',
    'Islamic finance analyst',
    'Shariah-compliant investing',
    'Sukuk research',
    'Bloomberg Market Concepts',
    'sell-side research',
    'Arabic financial analyst',
    'DemmyFi',
    'Muhammad Demmy',
  ],
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      ar: '/?lang=ar',
      id: '/?lang=id',
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: `${siteConfig.fullName} — DemmyFi`,
    title: titleDefault,
    description: heroline,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.fullName} — Equity Research · Saudi & GCC Markets`,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: titleDefault,
    description: heroline,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/icon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f4ee' },
    { media: '(prefers-color-scheme: dark)', color: '#0a1628' },
  ],
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Muhammad Demmy',
  alternateName: 'Demmy',
  url: siteUrl,
  image: `${siteUrl}/profile-photo.png`,
  jobTitle: 'Equity Research Analyst — Saudi & GCC Markets',
  description: heroline,
  knowsLanguage: ['en', 'ar', 'id'],
  nationality: 'Indonesian',
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'LIPIA Jakarta',
      sameAs: 'https://lipia.ac.id',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Imam Muhammad bin Saud Islamic University (IMAMU)',
      address: 'Riyadh, Saudi Arabia',
      sameAs: 'https://imamu.edu.sa',
    },
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'Bloomberg Market Concepts (BMC)' },
    { '@type': 'EducationalOccupationalCredential', name: 'Bloomberg MISK (Islamic Finance)' },
    { '@type': 'EducationalOccupationalCredential', name: 'Yale Financial Markets (Coursera)' },
    { '@type': 'EducationalOccupationalCredential', name: 'J.P. Morgan Investment Banking Simulation' },
    { '@type': 'EducationalOccupationalCredential', name: 'Citi Investment Banking Simulation' },
    { '@type': 'EducationalOccupationalCredential', name: 'BCG MISK Program' },
    { '@type': 'EducationalOccupationalCredential', name: 'IDX Capital Market School' },
    { '@type': 'EducationalOccupationalCredential', name: 'SIDF MISK Program' },
  ],
  email: `mailto:${siteConfig.email}`,
  sameAs: [
    siteConfig.socials.linkedin,
    siteConfig.socials.linkedinNewsletter,
    siteConfig.socials.spotifyPodcast,
    siteConfig.socials.youtube,
    siteConfig.socials.kumparan,
    siteConfig.socials.github,
    siteConfig.socials.tiktok,
    siteConfig.socials.instagram,
  ],
}

const noFoucScript = `(function(){try{
var t=localStorage.getItem('portfolio-theme-mode')||'dark';
var l=localStorage.getItem('portfolio-locale')||'en';
var r=t==='system'?(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):t;
var d=document.documentElement;
d.setAttribute('data-theme',r);
d.setAttribute('lang',l);
d.setAttribute('dir',l==='ar'?'rtl':'ltr');
}catch(e){}})();`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFoucScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <AppSettingsProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AppSettingsProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
