module.exports = {
  title: 'Example Website',
  description: 'An example website built with vuepress-theme-base',
  theme: require.resolve('../../theme'),
  themeConfig: {
    nav: [
      { text: 'Docs', link: '/docs/' },
      { text: 'Blog', link: '/blog/' },
    ],
  },
}