/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#0c151d',
        card: '#101d26',
        'card-accent': '#081522',
        primary: '#ffe071',
        'primary-dark': '#f1c24b',
        'text-main': '#f1f2f4',
        'text-secondary': '#a3abb2',
        'text-muted': '#3a4852',
        outline: '#3e6483',
      },
      boxShadow: {
        elevated: '0 30px 60px rgba(0, 0, 0, 0.25)',
        project: '0 20px 45px rgba(4, 14, 22, 0.35)',
        'project-hover': '0 28px 60px rgba(8, 23, 36, 0.45)',
      },
      borderRadius: {
        '4xl': '30px',
      },
      fontFamily: {
        sans: ['Poppins', 'Segoe UI', 'Tahoma', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.08em',
      },
    },
  },
  plugins: [],
}

