const WIDTH_HEIGHT = {
  min: 'min-content',
  max: 'max-content',
  screen: '100vw',
  full: '100%',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
}

module.exports = {
  purge: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
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
      height: {
        ...WIDTH_HEIGHT,
        screen: '100vh',
      },
      maxHeight: {
        ...WIDTH_HEIGHT,
        screen: '100vh',
      },
      minHeight: {
        ...WIDTH_HEIGHT,
        screen: '100vh',
      },
      width: WIDTH_HEIGHT,
      maxWidth: WIDTH_HEIGHT,
      minWidth: WIDTH_HEIGHT,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
