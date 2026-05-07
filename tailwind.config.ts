import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nero: '#0D0D0D',
        marmo: '#F7F4F0',
        cipria: '#E8A8A8',
        oro: '#C8A96E',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        montserrat: ['var(--font-montserrat)', 'Arial', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '-200% center' },
          '50%': { backgroundPosition: '200% center' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(10px)', opacity: '0.4' },
        },
      },
      animation: {
        shimmer: 'shimmer 8s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s ease forwards',
        scrollBounce: 'scrollBounce 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
