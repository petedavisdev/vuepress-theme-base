<template>
  <ul v-if="tagList" class="TagList">
    <li v-for="tag in tagList" :key="tag.id" class="TagList-item">
      <RouterLink
        v-if="typeof tag.link === 'string'"
        class="TagList-link"
        :to="tag.link"
        >{{ tag.text }}</RouterLink
      >
      <RouterLink
        v-else-if="getTagLink(tag)"
        class="TagList-link"
        :to="getTagLink(tag)"
        >{{ tag }}</RouterLink
      >
      <slot v-else>{{ tag }}</slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tags: Array,
  },
  computed: {
    tagList() {
      return this.tags === undefined ? this.$themeConfig.tags : this.tags
    },
  },
  methods: {
    getTagLink(tag) {
      if (this.$themeConfig.tags) {
        const { link } =
          this.$themeConfig.tags.find(
            ({ text }) => text.toLowerCase() === tag.toLowerCase()
          ) || {}

        return link
      }
    },
  },
}
</script>
