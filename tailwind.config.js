/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        navy: {
          950: '#070D17',
          900: '#0A1628',
          800: '#0F1E36',
          700: '#16294A',
          600: '#1F3661',
          500: '#2B4880',
        },
        ink: {
          950: '#0D0D0D',
          900: '#141414',
          800: '#1A1A1A',
        },
        gold: {
          600: '#A88A35',
          500: '#C9A84C',
          400: '#D6BB6B',
          300: '#E2CD8E',
          200: '#EFDFB3',
        },
        paper: {
          100: '#EDE9DD',
          50:  '#F6F4EE',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
