module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      font: ['Montserrat'],
    },
    colors: {
      primary: '#2E7AB5',
      black: '#000000',
      white: '#ffffff',
      grey: '#A0ACBD',
      lightBlue: '#EEF4F9',
      dark: '#283039',

      // text colors
      headline: '#3C4856',
      text: '#6A727D',

      // state colors
      success: '#3adb76',
      warning: '#ffae00',
      alert: '#cc4b37',
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
