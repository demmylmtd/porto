'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Locale, ThemeMode, contentByLocale } from '@/lib/content'

const STORAGE_THEME_KEY = 'portfolio-theme-mode'
const STORAGE_LOCALE_KEY = 'portfolio-locale'
const COOKIE_LOCALE_HINT = 'portfolio-locale-hint'

type ResolvedTheme = 'light' | 'dark'

interface AppSettingsContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  themeMode: ThemeMode
  setThemeMode: (themeMode: ThemeMode) => void
  resolvedTheme: ResolvedTheme
  dir: 'ltr' | 'rtl'
}

const AppSettingsContext = createContext<AppSettingsContextValue | undefined>(undefined)

function readLocaleHintCookie(): Locale | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(/(?:^|; )portfolio-locale-hint=([^;]+)/)
  if (!match) return null
  const value = decodeURIComponent(match[1]) as Locale
  return ['en', 'id', 'ar'].includes(value) ? value : null
}

export default function AppSettingsProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark')
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('dark')

  useEffect(() => {
    const storedLocale = localStorage.getItem(STORAGE_LOCALE_KEY) as Locale | null
    const storedTheme = localStorage.getItem(STORAGE_THEME_KEY) as ThemeMode | null
    if (storedLocale && ['en', 'id', 'ar'].includes(storedLocale)) {
      setLocale(storedLocale)
    } else {
      // First visit: respect geo hint set by middleware (GCC→ar, ID→id, else→en).
      const hint = readLocaleHintCookie()
      if (hint) setLocale(hint)
    }
    if (storedTheme && ['light', 'dark', 'system'].includes(storedTheme)) setThemeMode(storedTheme)
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_THEME_KEY, themeMode)
  }, [themeMode])

  useEffect(() => {
    localStorage.setItem(STORAGE_LOCALE_KEY, locale)
  }, [locale])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const applyTheme = () => {
      const nextTheme: ResolvedTheme = themeMode === 'system' ? (media.matches ? 'dark' : 'light') : themeMode
      setResolvedTheme(nextTheme)
      document.documentElement.setAttribute('data-theme', nextTheme)
    }

    applyTheme()
    media.addEventListener('change', applyTheme)
    return () => media.removeEventListener('change', applyTheme)
  }, [themeMode])

  useEffect(() => {
    const dir = locale === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = locale
    document.documentElement.dir = dir
  }, [locale])

  const value = useMemo<AppSettingsContextValue>(
    () => ({
      locale,
      setLocale,
      themeMode,
      setThemeMode,
      resolvedTheme,
      dir: locale === 'ar' ? 'rtl' : 'ltr',
    }),
    [locale, themeMode, resolvedTheme],
  )

  return <AppSettingsContext.Provider value={value}>{children}</AppSettingsContext.Provider>
}

export function useAppSettings() {
  const context = useContext(AppSettingsContext)
  if (!context) throw new Error('useAppSettings must be used within AppSettingsProvider')
  return context
}

export function useLocaleContent() {
  const { locale } = useAppSettings()
  return contentByLocale[locale]
}
