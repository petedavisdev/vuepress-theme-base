<template>
  <Layout>
    <template v-slot:mainEnd>
      <PageList />
    </template>
  </Layout>
</template>

<script>
import PageList from '@theme/components/PageList.vue'
import Layout from '@theme/layouts/Layout.vue'

export default {
  components: {
    PageList,
    Layout,
  },
}
</script>
