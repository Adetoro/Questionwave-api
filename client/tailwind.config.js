module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blue: {
        DEFAULT: '#1B7EDA',
        dark: '#009eeb',
      },
      light_blue: '#EDF5FC',
      mid_blue: '#45B6FE',
      white: '#fff',
      black: '#000',
      dark_grey: '#494949',
      mid_gray: '#333333',
      light_gray: '#F4F4F4',
      gray: '#9B9B9B',
      red: '#FECACA',
      yellow: '#FDE68A',
      green: '#13B43D',
      light_green: '#E7F7EC'
    },
    fontFamily: {
      'sans': ['Nunito', 'sans-serif'],
    },
    fontSize: {
      '4xl': '2.5rem',
      '3xl':'1.75rem',
    }
    
  },
  variants: {
    extend: {},
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
}
