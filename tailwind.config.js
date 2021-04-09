const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home': "url('/home/background.jpg')",
      }),
      colors: {
        primary: '#00e5bf',
        grey: '#f5f5f6',
        product: '#F2F2F2',
        gradLeft: '#5CC5D9',
        gradRight: '#72EAC7'
      },
      fontFamily: {
        title: ['Druk Wide', ...defaultTheme.fontFamily.sans],
        description: ['Gattica', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
