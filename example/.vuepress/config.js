const themeConfig = require('./themeConfig')

module.exports = {
  title: 'Example Website',
  description: 'An example website built with vuepress-theme-base',
  base: '/vuepress-theme-base/',
  head: [['link', { rel: 'icon', href: 'v-logo.svg' }]],
  theme: require.resolve('../../theme'),
  themeConfig,
}
