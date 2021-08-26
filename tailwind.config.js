/* substrate.io config */

module.exports = {
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
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
    boxShadow: {
      xl: '0 0 25px 0 rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
};
