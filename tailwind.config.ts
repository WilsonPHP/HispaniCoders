import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f4f8ff',
          100: '#dbe8ff',
          300: '#92b6ff',
          500: '#3f78ff',
          700: '#2445c9',
          900: '#0e1d49',
        },
        slateDeep: '#081124',
        accent: '#f8b65d',
      },
      boxShadow: {
        soft: '0 12px 40px -18px rgba(15, 35, 79, 0.5)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(167, 193, 232, 0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(167, 193, 232, 0.11) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

export default config