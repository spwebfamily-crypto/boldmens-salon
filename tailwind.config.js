/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        xl: '3rem',
      },
    },
    extend: {
      colors: {
        base: '#ffffff',
        surface: '#f7f7f7',
        surfaceLight: '#fff8f1',
        muted: '#6b7280',
        accent: '#ff7a00',
        accentLight: '#ffd9b3',
        outline: '#ffd4aa',
        ink: '#1f1f1f',
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 45px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        'hero-texture': 'radial-gradient(circle at top left, rgba(197, 157, 95, 0.25), transparent 55%)',
        divider: 'linear-gradient(90deg, transparent, rgba(197, 157, 95, 0.35), transparent)',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};
