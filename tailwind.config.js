module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    color: '#ff0000',
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.emerald.600'),
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.emerald.800'),
                textDecoration: 'none',
              },
            },
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
      }),
    },
  },
  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/typography'),
  ],
}
