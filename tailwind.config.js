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
      lineHeight: {
        'extra-tight': '1.15',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'inherit',
            h1: {
              fontWeight: 'inherit',
            },
            h2: {
              fontWeight: 'inherit',
            },
            h3: {
              fontWeight: 'inherit',
            },
            h4: {
              fontWeight: 'inherit',
            },
            h5: {
              fontWeight: 'inherit',
            },
            h6: {
              fontWeight: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/typography'),
  ],
}
