<template>
  <time class="DateTime" :datetime="datetime">{{ formattedDate }}</time>
</template>

<script>
export default {
  props: {
    date: String,
  },
  computed: {
    datetime() {
      return new Date(this.date)
    },
    formattedDate() {
      return this.datetime.toLocaleString('en-GB', {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
      })
    },
  },
  methods: {
    getTagLink(tag) {
      if (this.$themeConfig.tags) {
        const { link } =
          this.$themeConfig.tags.find(({ text }) => text === tag) || {}

        return link
      }
    },
  },
}
</script>
