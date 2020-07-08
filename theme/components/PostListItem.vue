<template>
  <article>
    <h2>
      <RouterLink :to="post.path">{{ post.title }}</RouterLink>
    </h2>
    <time :datetime="post.frontmatter.date">{{ formattedDate }}</time>
    <img :src="post.frontmatter.image" alt />
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      const date = new Date(this.post.frontmatter.date)
      return date.toLocaleString('en-GB', {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
      })
    },
  },
}
</script>
