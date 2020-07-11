<template>
  <section class="PostList">
    <PostListItem v-for="post in posts" :key="post.id" :post="post" />
    <p v-if="!posts.length">No posts found</p>
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
      const directoryPosts = this.filterByDirectory(this.$site.pages)
      const tagPosts = this.filterByTag(directoryPosts)
      const sortedPosts = this.sortByDateDesc(tagPosts)
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
      const tag = this.tag && this.tag.toLowerCase()

      if (tag) {
        return posts.filter((post) => {
          const postTags =
            post.frontmatter.tags &&
            post.frontmatter.tags.map((tag) => tag.toLowerCase())

          if (postTags && postTags.includes(tag)) {
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
