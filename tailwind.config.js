/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        blue: {
          50: '#eef3ff',
          100: '#dde7ff',
          200: '#c2d4ff',
          300: '#9db8ff',
          400: '#7490ff',
          500: '#4c65fb',
          600: '#3b45f0',
          700: '#2f36d8',
          800: '#2a30af',
          900: '#272f8a',
          950: '#1b1d54',
        },
        orange: {
          50: '#fff5ed',
          100: '#ffe9d4',
          200: '#ffd0a9',
          300: '#ffb173',
          400: '#ff8c3c',
          500: '#ff6c15',
          600: '#ff4d0a',
          700: '#cc3a08',
          800: '#a1300d',
          900: '#822c0e',
          950: '#461305',
        },
      },
      animation: {
        'flow-1': 'flow 15s infinite alternate',
        'flow-2': 'flow 20s infinite alternate-reverse',
        'flow-3': 'flow 25s infinite alternate',
        'pulse-slow': 'pulse 6s infinite',
      },
      keyframes: {
        flow: {
          '0%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateY(50px) translateX(30px) rotate(180deg)' },
          '100%': { transform: 'translateY(-50px) translateX(-30px) rotate(360deg)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to right bottom, rgba(74, 104, 255, 0.05), rgba(255, 107, 0, 0.05))',
      },
    },
  },
  plugins: [],
};