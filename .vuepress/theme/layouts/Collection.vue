<template>
  <Layout>
    <template v-slot:mainEnd>
      <List />
    </template>
  </Layout>
</template>

<script>
import List from '@theme/components/List.vue'
import Layout from '@theme/layouts/Layout.vue'

export default {
  components: {
    List,
    Layout
  }
}
</script>
