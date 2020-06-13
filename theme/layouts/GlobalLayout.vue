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
            this.isLayout(this.$themeConfig.defaultLayout) ||
            'Layout'
        : 'NotFound'
    },
  },
  methods: {
    isLayout(layout) {
      return layout && this.$vuepress.getLayoutAsyncComponent(layout)
    },
  },
}
</script>
