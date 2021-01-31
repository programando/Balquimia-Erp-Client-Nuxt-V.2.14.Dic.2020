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
        primary             : '#D3500A',
        secondary           : '#ce550a',
        extra               : '#0f3057',
        msgErrorBackground  : '#0f3057',
        msgErrorBody        : '#0f3057',
        msgInfoBackground   : '#0f3057',
        msgInfoBody         : '#0f3057',
        msgSuccessBackground: '#0f3057',
        msgSuccessBody      : '#0f3057',
        msgWarningBackground: '#0f3057',
        msgWarningBody      : '#0f3057',
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
