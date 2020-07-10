module.exports = {
  nav: [
    { text: 'Blog', link: '/blog/' },
    { text: 'About', link: '/about/' },
    { text: 'Contact', link: '/contact/' },
    {
      text: 'GitHub',
      link: 'https://github.com/petedavisdev/vuepress-theme-base/',
    },
  ],
  collections: [
    {
      directory: 'blog',
      layout: 'Post',
    },
  ],
  owner: 'Pete Davis',
}
