<template>
  <section>
    {{ $site.pages }}
    <article v-for="page in pages" :key="page.id">
      <h2>
        <RouterLink :to="page.path">{{ page.title }}</RouterLink>
      </h2>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    directory: String,
  },
  computed: {
    pages() {
      return this.$site.pages.filter((page) => {
        if (page.relativePath.startsWith(this.directory + '/')) {
          return page
        }
      })
    },
  },
}
</script>
