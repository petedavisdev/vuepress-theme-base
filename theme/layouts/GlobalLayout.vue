<template>
  <div class="GlobalLayout">
    <component :is="layout" />
  </div>
</template>

<script>
export default {
  name: 'GlobalLayout',
  computed: {
    layout() {
      return this.$page.path
        ? this.isLayout(this.$page.frontmatter.layout) ||
            this.hasDefaultLayout() ||
            'Layout'
        : 'NotFound'
    },
  },
  methods: {
    isLayout(layout) {
      return layout && this.$vuepress.getLayoutAsyncComponent(layout)
    },
    hasDefaultLayout() {
      const { layout } =
        this.$themeConfig.defaultLayouts.find(({ directory }) => {
          return this.$page.relativePath.startsWith(directory)
        }) || {}

      return layout && this.isLayout(layout)
    },
  },
}
</script>
