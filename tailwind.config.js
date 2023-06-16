module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'orange-own': '#D87D4A',
        'black-own': '#101010',
        'black-light': '#191919',
        'gray-own': '#F1F1F1',
        'gray-light': '#CFCFCF',
        'white-own': '#FAFAFA',
        'orange-light': '#fbaf85',
        'red-own': '#CD2C2C',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
