module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'Anton, sans-serif',
      },
      fontSize: {
        'body-md': '1.1em',
        'body-lg': '1.2em',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/typography'),
  ],
}
