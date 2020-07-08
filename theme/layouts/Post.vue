<template>
  <Layout>
    <template v-slot:mainStart>
      <h1>{{ $page.title }}</h1>
      <small>{{ formattedDate }}</small>
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
