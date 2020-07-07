<template>
  <h2>
    <RouterLink :to="page.path">{{ page.title }}</RouterLink>
  </h2>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
}
</script>
