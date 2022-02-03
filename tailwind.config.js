module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'Anton, sans-serif',
      },
      screens: {
        sm: '580px',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/typography'),
  ],
}
