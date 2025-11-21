/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        neon: {
          pink: '#ec4899',
          cyan: '#0ea5e9',
          lime: '#22c55e'
        }
          ,
          brand: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12'
          }
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        'gradient-xy': 'gradient-xy 12s ease infinite',
        'neon-pulse': 'neon-pulse 3s ease-in-out infinite'
      },
      keyframes: {
        'gradient-xy': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' }
        },
        'neon-pulse': {
          '0%': { 'text-shadow': '0 0 6px rgba(14,165,233,0.15), 0 0 14px rgba(236,72,153,0.06)' },
          '50%': { 'text-shadow': '0 0 10px rgba(14,165,233,0.25), 0 0 20px rgba(236,72,153,0.12)' },
          '100%': { 'text-shadow': '0 0 6px rgba(14,165,233,0.15), 0 0 14px rgba(236,72,153,0.06)' }
        }
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
}