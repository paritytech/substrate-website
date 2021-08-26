/* substrate.io preset */

module.exports = {
  theme: {
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
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.25em',
      widest: '.45em',
    },
    boxShadow: {
      xl: '0 0 25px 0 rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
    extend: {
      colors: {
        substrateGreen: {
          light2: '#AEF3DC',
        },
      },
      fontSize: {
        '7xl': ['5rem', { lineHeight: '1' }],
      },
    },
  },
};
