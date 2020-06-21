<template>
  <h2>
    <RouterLink :to="page.path">{{ page.title }}</RouterLink>
  </h2>
</template>

<script>
export default {
    props: {
        pages: {
            type: Array,
            required: true
        }
    }
}
</script>