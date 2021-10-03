module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.vue'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        applayout: 'auto 1fr auto',
      },
      gridTemplateColumns: {
        repeatemoji: 'repeat(auto-fill, minmax(3rem, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
