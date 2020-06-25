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
      if (this.$page.path) {
        return this.isLayout(this.$page.frontmatter.layout) || this.hasDefaultLayout() || 'Layout';
      }
      
      return 'NotFound';
    },
  },
  methods: {
    isLayout(layout) {
      return layout && this.$vuepress.getLayoutAsyncComponent(layout)
    },
    hasDefaultLayout() {
      if (this.$themeConfig.defaultLayouts) {
        const { layout } =
          this.$themeConfig.defaultLayouts.find(({ directory }) => {
            return this.$page.relativePath.startsWith(directory)
          }) || {}

        return layout && this.isLayout(layout)
      }
      
      return false;
    },
  },
}
</script>
