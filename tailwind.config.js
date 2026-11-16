/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#dde6f2',
          200: '#c0d1e7',
          300: '#94b4d7',
          400: '#6291c3',
          500: '#3f73ae',
          600: '#2f5b91',
          700: '#274976',
          800: '#1e375c',
          850: '#142540',
          900: '#0b162c',
          950: '#060c1a',
        },
        gold: {
          100: '#fcf7e9',
          200: '#f7ebc7',
          300: '#edd895',
          400: '#dfbf60',
          500: '#c5a059',
          600: '#ab8240',
          700: '#8c6431',
        },
        brand: {
          blue: '#1a56db',
          cyan: '#0ea5e9',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(11, 22, 44, 0.05), 0 2px 6px -1px rgba(11, 22, 44, 0.03)',
        'card-hover': '0 20px 35px -8px rgba(11, 22, 44, 0.12), 0 8px 16px -4px rgba(11, 22, 44, 0.06)',
        'navy-glow': '0 10px 30px -5px rgba(11, 22, 44, 0.4)',
      }
    },
  },
  plugins: [],
}
