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
  tags: [{ text: 'A tag', link: '/tag/a-tag/' }],
  collections: [
    {
      directory: 'blog',
      layout: 'Post',
    },
  ],
  owner: 'Pete Davis',
}
