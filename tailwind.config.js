const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        indigo: {
          ...colors.indigo,
          '500': '#27265F'
        },
        pink: {
          ...colors.pink,
          '500': '#ED4092'
        },
        gray: {
          '100': '#fbfcfc',
          '200': '#f9fafa',
          '300': '#f7f7f8',
          '400': '#ebedf2',
          '500': '#F3F4F5',
          '600': '#a7abc3',
          '700': '#4a5568',
          '800': '#2d3748',
          '900': '#1a202c',
        },
        green: {
          '100': '#c9f7f5',
          '200': '#8de2de',
          '300': '#5fd6d1',
          '400': '#3dcec7',
          '500': '#1bc5bd',
          '600': '#18bfb7',
          '700': '#14b8ae',
          '800': '#10b0a6',
          '900': '#08a398',
        }
      }
    }
  },
  variants: {},
  plugins: [],
}
