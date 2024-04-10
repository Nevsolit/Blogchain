/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        base: '2px 4px 12px #00000014',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
