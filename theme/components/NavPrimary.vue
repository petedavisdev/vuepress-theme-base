<template>
  <nav class="NavPrimary">
    <LinkList :links="$themeConfig.nav" />
  </nav>
</template>

<script>
import LinkList from '@theme/components/LinkList.vue'

export default {
  components: {
    LinkList,
  },
}
</script>
