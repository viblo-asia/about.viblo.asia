const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html', './src/**/*.vue'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}
