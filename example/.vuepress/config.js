const themeConfig = require('./themeConfig')

module.exports = {
  title: 'Example Website',
  description: 'An example website built with vuepress-theme-base',
  base: '/vuepress-theme-base/',
  theme: require.resolve('../../theme'),
  themeConfig,
}
