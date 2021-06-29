// for it to work add in global styles in the html "font-size: 62.5%"
// example: html { font-size: 62.5%; }

// 10px = 1rem // 16px = 1.6rem

// sizes in min and max width - height

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

// sizes in font-size and leanding

const FONT_SIZES = {
  tiny: '.4rem',
  '2tiny': '.6rem',
  xs: '.8rem',
  '2xs': '1rem',
  sm: '1.2rem',
  '2sm': '1.4rem',
  md: '1.6rem',
  '2md': '1.8rem',
  base: '2rem',
  '2base': '2.2rem',
  lg: '2.4rem',
  '2lg': '2.6',
  xl: '2.8rem',
  '2xl': '3.2rem',
  '3xl': '3.6rem',
  '4xl': '4rem',
  '5xl': '4.4rem',
  '6xl': '4.8rem',
  '7xl': '5.2rem',
  '8xl': '5.6rem',
  '9xl': '6rem',
  '10xl': '6.4rem',
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
      fontSize: FONT_SIZES,
      lineHeight: FONT_SIZES,
      letterSpacing: {
        2.5: '1rem',
      },
      spacing: {
        0.5: '.2rem',
        1: '.4rem',
        1.5: '.6rem',
        2: '.8rem',
        2.5: '1rem',
        3: '1.2rem',
        3.5: '1.4rem',
        4: '1.6rem',
        4.5: '1.8rem',
        5: '2rem',
        6: '2.4rem',
        7: '2.8rem',
        8: '3.2rem',
        9: '3.6rem',
        10: '4rem',
        11: '4.4rem',
        12: '4.8rem',
        14: '5.6rem',
        16: '6.4rem',
        18: '7.2rem',
        20: '8rem',
        22: '8.8rem',
        24: '9.6rem',
        26: '10.4rem',
        28: '11.2rem',
        30: '12rem',
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
