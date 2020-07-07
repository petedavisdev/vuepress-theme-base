<template>
  <div class="PageList">
    <section>
      <article v-for="page in pages" :key="page.id">
        <PageListItem :page="page" />
      </article>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    directory: String,
    item: String,
  },
  computed: {
    pages() {
      const filteredPages = this.filterByDirectory(this.$site.pages)
      const sortedPages = this.sortByTitle(filteredPages)
      return sortedPages
    },
  },
  methods: {
    filterByDirectory(pages) {
      if (this.directory) {
        return pages.filter((page) => {
          if (
            page.title &&
            page.relativePath.startsWith(this.directory + '/')
          ) {
            return page
          }
        })
      }

      return pages
    },
    sortByTitle(pages) {
      return pages.sort((a, b) => {
        const x = a.title.toLowerCase()
        const y = b.title.toLowerCase()
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
.PageList {
  display: grid;
}
</style>
