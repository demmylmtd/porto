'use client'

export type SocialPlatform =
  | 'linkedin'
  | 'linkedinNewsletter'
  | 'spotifyPodcast'
  | 'github'
  | 'youtube'
  | 'kumparan'
  | 'tiktok'
  | 'instagram'

export default function SocialIcon({ platform, size = 16 }: { platform: SocialPlatform; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true } as const

  switch (platform) {
    case 'linkedin':
      return (
        <svg {...common}>
          <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5 2.5 2.5 0 0 0 4.98 3.5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.84-2.06 3.78-2.06C21.2 8.58 22 10.8 22 14.1V21h-4v-6.12c0-1.46-.03-3.33-2.03-3.33-2.04 0-2.35 1.59-2.35 3.22V21h-4V9Z" />
        </svg>
      )
    case 'linkedinNewsletter':
      return (
        <svg {...common} fill="none">
          <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.7" rx="2.5" />
          <path d="M7.5 9.5h9M7.5 12h9M7.5 14.5h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )
    case 'spotifyPodcast':
      return (
        <svg {...common} fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8 10.2c2.7-1 5.8-.8 8.2.5M8.8 12.9c2-.7 4.2-.6 6 .4M9.7 15.4c1.4-.4 2.9-.3 4.1.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )
    case 'github':
      return (
        <svg {...common}>
          <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.66-.22.66-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.88 1.56 2.32 1.1 2.89.84.09-.66.34-1.1.62-1.36-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.42.22 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.81-4.58 5.07.36.32.68.95.68 1.91 0 1.38-.01 2.5-.01 2.84 0 .27.18.6.67.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
        </svg>
      )
    case 'youtube':
      return (
        <svg {...common}>
          <path d="M23.5 7.1a3.03 3.03 0 0 0-2.13-2.14C19.5 4.5 12 4.5 12 4.5s-7.5 0-9.37.46A3.03 3.03 0 0 0 .5 7.1 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 4.9 3.03 3.03 0 0 0 2.13 2.14C4.5 19.5 12 19.5 12 19.5s7.5 0 9.37-.46a3.03 3.03 0 0 0 2.13-2.14A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-4.9ZM9.55 15.02V8.98L15.82 12l-6.27 3.02Z" />
        </svg>
      )
    case 'tiktok':
      return (
        <svg {...common}>
          <path d="M14.2 3h2.7a4.9 4.9 0 0 0 4.1 4.1v2.7a7.6 7.6 0 0 1-4-1.2v6.1a5.9 5.9 0 1 1-5.1-5.9v2.8a3.2 3.2 0 1 0 2.3 3.1V3Z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg {...common}>
          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
        </svg>
      )
    case 'kumparan':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M8 7h2v10H8V7Zm3.5 5 4.5-5h2.5l-4.8 5.2L19 17h-2.6l-4.9-4.5V17H9.5V7h2v5Z" />
        </svg>
      )
  }
}
