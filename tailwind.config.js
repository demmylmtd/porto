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
          950: '#ffffff',
          900: '#f8f9fa',
          800: '#f0f2f5',
          700: '#e5e7eb',
          600: '#d1d5db',
        },
        blue: {
          600: '#2563eb',
          500: '#3b82f6',
          400: '#60a5fa',
        },
        slate: {
          850: '#f3f4f6',
        }
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
