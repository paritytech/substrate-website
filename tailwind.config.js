/* substrate.io config */

module.exports = {
  presets: [require('./tailwind-preset.js')],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
    },
    fontFamily: {
      sans: ['Karla', 'sans-serif'],
      title: ['Poppins', 'sans-serif'],
      quote: ['serif'],
    },
    fontWeight: {
      hairline: 100,
      extralight: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    letterSpacing: {
      wider: '.25em',
      widest: '.45em',
    },
    extend: {
      colors: {
        substrateGreen: {
          light2: '#AEF3DC',
          dark: '#22B577',
        },
        substrateBlackish: '#242A35',
      },
      fontSize: {
        '7xl': ['5rem', { lineHeight: '1' }],
      },
    },
    boxShadow: {
      md: '0 0 15px 0 rgba(0, 0, 0, 0.05), 0 5px 5px -5px rgba(0, 0, 0, 0.04)',
      xl: '0 0 25px 0 rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
};
