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
          {{ tag }}
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
}
</script>
