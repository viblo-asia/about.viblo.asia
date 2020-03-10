const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const JSDomRenderer = require('@prerenderer/renderer-jsdom')

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: process.env.VUE_APP_WEB_TITLE,
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  publicPath: process.env.VUE_APP_WEB_BASE_URL,
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/'],
        renderer: new JSDomRenderer({
          renderAfterElementExists: '#first-section, footer'
        })
      })
    ]
  }
}
