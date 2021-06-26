module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif']
      }
    },
    colors: {
      blue: '#006D77',
      green: '#83C5BE',
      white: '#EDF6F9',
      peach: '#FFDDD2',
      orange: '#E29578'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
