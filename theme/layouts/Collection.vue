<template>
  <Layout>
    <template v-slot:mainEnd>
      <PageList />
    </template>
  </Layout>
</template>

<script>
import PageList from '@theme/components/PageList.vue'

export default {
  components: {
    PageList,
  },
}
</script>
