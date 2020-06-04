<template>
  <div>
    <Header />

    <main>
      <slot name="mainStart" />
      <Content />
      <slot name="mainEnd" />
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from '@theme/components/Footer.vue'
import Header from '@theme/components/Header.vue'

export default {
  components: {
    Footer,
    Header
  }
}
</script>
