<template>
  <div class="PostList">
    <section>
      <PostListItem v-for="post in posts" :key="post.id" :post="post" />
    </section>
  </div>
</template>

<script>
import PostListItem from '@theme/components/PostListItem.vue'

export default {
  components: {
    PostListItem,
  },
  props: {
    directory: String,
    item: String,
  },
  computed: {
    posts() {
      const filteredPosts = this.filterByDirectory(this.$site.pages)
      const sortedPosts = this.sortByDate(filteredPosts)
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
    sortByDate(posts) {
      return posts.reverse((a, b) => {
        const x = a.frontmatter.date.toLowerCase()
        const y = b.frontmatter.date.toLowerCase()
        if (x < y) {
          return -1
        }
        if (x > y) {
          return 1
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
