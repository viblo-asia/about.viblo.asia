module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap(args => {
        args[0].meta = {
          viewport: 'width=device-width, initial-scale=1.0',
          'theme-color': '#02002E',
          description: process.env.VUE_APP_WEB_DESCRIPTION,
          'og:url': process.env.BASE_URL,
          'og:type': 'website',
          'og:title': '',
          'og:description': process.env.VUE_APP_WEB_DESCRIPTION,
          'og:image': process.env.BASE_URL + 'favicon.ico',
          'twitter:card': 'summary',
          'twitter:description': process.env.VUE_APP_WEB_DESCRIPTION,
          'twitter:title': '',
          'twitter:image': process.env.BASE_URL + 'favicon.ico',
          robots: 'index, follow, noodp, noydir'
        }
        return args
      })
  }
}
