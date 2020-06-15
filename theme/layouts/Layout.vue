<template>
  <div class="ThemeLayout">
    <slot name="headerBefore" />

    <header>
      <slot name="headerStart" />
      <HomeLink />
      <NavPrimary />
      <slot name="headerEnd" />
    </header>

    <slot name="headerAfter" />

    <main>
      <slot name="mainStart" />
      <Content />
      <slot name="mainEnd" />
    </main>

    <slot name="footerBefore" />

    <footer>
      <slot name="footerStart" />
      <EndCredit />
      <slot name="footerEnd" />
    </footer>

    <slot name="footerAfter" />
  </div>
</template>

<script>
import HomeLink from '@theme/components/HomeLink.vue'
import EndCredit from '@theme/components/EndCredit.vue'
import NavPrimary from '@theme/components/NavPrimary.vue'

export default {
  components: {
    HomeLink,
    EndCredit,
    NavPrimary,
  },
}
</script>
