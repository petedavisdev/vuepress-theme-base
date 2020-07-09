<template>
  <component :is="layout" />
</template>

<script>
export default {
  name: 'GlobalLayout',
  computed: {
    layout() {
      if (this.$page.path) {
        return (
          this.isLayout(this.$page.frontmatter.layout) ||
          this.hasDefaultLayout() ||
          'Layout'
        )
      }

      return 'NotFound'
    },
  },
  methods: {
    isLayout(layout) {
      return layout && this.$vuepress.getLayoutAsyncComponent(layout)
    },
    hasDefaultLayout() {
      if (this.$themeConfig.collections) {
        const { layout } =
          this.$themeConfig.collections.find(({ directory }) => {
            return this.$page.relativePath.startsWith(directory + '/')
          }) || {}

        return layout && this.isLayout(layout)
      }

      return false
    },
  },
}
</script>
