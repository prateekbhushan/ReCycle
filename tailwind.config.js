/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#2D6A4F',
          light: '#40916C',
          dark: '#1B4332',
        },
        ocean: '#118AB2',
        sand: '#F4F1DE',
        terracotta: '#E07A5F',
        sun: '#F2CC8F',
        charcoal: '#3D405B',
        mist: '#EDF6F9',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        'md': '0 4px 6px -1px rgba(0,0,0,0.1)',
        'lg': '0 10px 15px -3px rgba(0,0,0,0.1)',
        'glow': '0 0 20px rgba(45,106,79,0.15)',
      },
      borderRadius: {
        'card': '16px',
        'btn': '12px',
        'input': '10px',
        'badge': '20px',
      }
    },
  },
  plugins: [],
}
