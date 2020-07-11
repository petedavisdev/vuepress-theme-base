<template>
  <Layout>
    <template v-slot:mainStart>
      <h1>{{ $page.title }}</h1>
      <time>{{ formattedDate }}</time>
      <ul v-if="$page.frontmatter.tags" class="PostListItem-tag">
        <li
          v-for="tag in $page.frontmatter.tags"
          :key="tag.id"
          class="PostListItem-tags"
        >
          <RouterLink v-if="getTagLink(tag)" :to="getTagLink(tag)">
            {{ tag }}
          </RouterLink>
          <slot v-else>{{ tag }}</slot>
        </li>
      </ul>
    </template>
  </Layout>
</template>

<script>
export default {
  computed: {
    formattedDate() {
      const date = new Date(this.$page.frontmatter.date)
      return date.toLocaleString('en-GB', {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
      })
    },
  },
  methods: {
    getTagLink(tag) {
      if (this.$site.themeConfig.tags) {
        const { link } =
          this.$site.themeConfig.tags.find(({ text }) => text === tag) || {}

        return link
      }
    },
  },
}
</script>
