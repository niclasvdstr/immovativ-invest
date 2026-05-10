import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#2563EB',
          'green-light': '#3B82F6',
          'green-dark': '#1D4ED8',
          'green-50': '#EFF6FF',
          'green-100': '#DBEAFE',
          anthrazit: '#0B1F3A',
          champagne: '#ffa61c',
          'champagne-light': '#FFD280',
          cream: '#F5F5F7',
          'gray-warm': '#6E6E73',
          'gray-light': '#F5F5F7',
          'gray-border': '#E8E8ED',
          'text-dark': '#1F1F1F',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 1px 12px rgba(0,0,0,0.05)',
        'medium': '0 4px 32px rgba(0,0,0,0.07)',
        'large': '0 8px 48px rgba(0,0,0,0.10)',
        'green': '0 4px 20px rgba(37,99,235,0.20)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  safelist: [
    'bg-blue-500',
    'bg-purple-500',
    'bg-purple-600',
    'bg-orange-500',
    'bg-brand-green',
    'text-white',
  ],
  plugins: [],
}
export default config
