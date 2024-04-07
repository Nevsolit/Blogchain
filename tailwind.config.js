/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#222831',
      },
      gap: {
        md: '14px',
      },
      padding: {
        lg: '1.5rem',
        md: '1rem',
        sm: '0.65rem',
      },
      textColor: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
      },
      fontSize: {
        md: '14px',
        lg: '16px',
        xl: '18px',
        '2xl': '20px',
        '3xl': '24px',
      },
      borderRadius: {
        base: '12px',
      },
      boxShadow: {
        base: '2px 4px 12px #00000014',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
