<template>
  <h2>
    <RouterLink :to="post.path"
      >{{ post.title }} {{ post.frontmatter.date }}</RouterLink
    >
  </h2>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
