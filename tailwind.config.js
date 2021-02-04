module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
     
  ],
  theme: {
    extend: {
      colors: {
        extra       : '#0f3057',
        inputsBorder: '#3b82f6',
        primary     : '#D3500A',
        secondary   : '#ce550a',
  
      },

      fontFamily: {
        rale: 'Raleway',
        robo: 'Roboto',
        latos: 'Lato'
      }
    },
  },
  variants: {},
  plugins: [],
}
