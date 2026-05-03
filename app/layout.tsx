import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AppSettingsProvider from '@/components/AppSettingsProvider'
import { siteConfig } from '@/lib/data'

export const metadata: Metadata = {
  title: `${siteConfig.fullName} — Finance & Economics`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.fullName} — Finance & Economics`,
    description: siteConfig.description,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" data-theme="dark" suppressHydrationWarning>
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
