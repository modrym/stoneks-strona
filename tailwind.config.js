/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        granite: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        gold: {
          50: '#fffdf7',
          100: '#fffae6',
          200: '#fff2b3',
          300: '#ffe680',
          400: '#ffd24d',
          500: '#d4a574',
          600: '#b8956b',
          700: '#8b6f47',
          800: '#6b4423',
          900: '#4a2c15',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'marble-texture': "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 25%, #dee2e6 50%, #ced4da 75%, #adb5bd 100%)",
        'stone-texture': "linear-gradient(135deg, #f1f3f4 0%, #e8eaed 25%, #dadce0 50%, #bdc1c6 75%, #9aa0a6 100%)",
        'dark-marble': "linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 25%, #0d0d0d 50%, #000000 75%, #000000 100%)",
      },
      boxShadow: {
        'marble': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3)',
        'stone': '0 20px 40px -12px rgba(120, 113, 108, 0.3), 0 8px 16px -8px rgba(120, 113, 108, 0.2)',
        'gold': '0 10px 30px -8px rgba(212, 165, 116, 0.4)',
      }
    },
  },
  plugins: [],
}
