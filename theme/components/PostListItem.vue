<template>
  <article class="PostListItem">
    <h2 class="PostListItem-heading">
      <RouterLink class="PostListItem-link" :to="post.path">{{
        post.title
      }}</RouterLink>
    </h2>
    <p v-if="post.frontmatter.summary" class="PostListItem-summary">
      {{ post.frontmatter.summary }}
    </p>
    <time class="PostListItem-date" :datetime="post.frontmatter.date">{{
      formattedDate
    }}</time>
    <ul v-if="post.frontmatter.tags" class="PostListItem-tag">
      <li
        v-for="tag in post.frontmatter.tags"
        :key="tag.id"
        class="PostListItem-tags"
      >
        {{ tag }}
      </li>
    </ul>
    <img
      v-if="post.frontmatter.image"
      class="PostListItem-image"
      :src="post.frontmatter.image"
      alt
    />
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
