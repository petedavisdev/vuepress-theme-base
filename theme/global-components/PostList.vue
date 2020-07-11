<template>
  <section class="PostList">
    <PostListItem v-for="post in posts" :key="post.id" :post="post" />
  </section>
</template>

<script>
import PostListItem from '@theme/components/PostListItem.vue'

export default {
  components: {
    PostListItem,
  },
  props: {
    directory: String,
    tag: String,
  },
  computed: {
    posts() {
      const filteredPosts = this.filterByDirectory(this.$site.pages)
      const taggedPosts = this.filterByTag(filteredPosts)
      const sortedPosts = this.sortByDateDesc(taggedPosts)
      return sortedPosts
    },
  },
  methods: {
    filterByDirectory(posts) {
      if (this.directory) {
        return posts.filter((post) => {
          if (
            post.title &&
            post.frontmatter.date &&
            post.relativePath.startsWith(this.directory + '/')
          ) {
            return posts
          }
        })
      }

      return posts
    },
    filterByTag(posts) {
      if (this.tag) {
        return posts.filter((post) => {
          if (
            post.frontmatter.tags &&
            post.frontmatter.tags.includes(this.tag)
          ) {
            return posts
          }
        })
      }

      return posts
    },
    sortByDateDesc(posts) {
      return posts.sort((a, b) => {
        const x = a.frontmatter.date.toLowerCase()
        const y = b.frontmatter.date.toLowerCase()
        if (x < y) {
          return 1
        }
        if (x > y) {
          return -1
        }
        return 0
      })
    },
  },
}
</script>

<style>
.PostList {
  display: grid;
}
</style>
