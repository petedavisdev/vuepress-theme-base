<template>
  <div class="Layout">
    <slot name="headerBefore" />

    <header class="Layout-header">
      <slot name="headerStart" />
      <HomeLink />
      <SkipLink />
      <NavPrimary />
      <slot name="headerEnd" />
    </header>

    <slot name="headerAfter" />

    <main id="main" class="Layout-main">
      <slot name="mainStart" />
      <Content />
      <slot name="mainEnd" />
    </main>

    <slot name="footerBefore" />

    <footer class="Layout-footer">
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
import SkipLink from '@theme/components/SkipLink.vue'

export default {
  components: {
    HomeLink,
    EndCredit,
    NavPrimary,
    SkipLink,
  },
}
</script>
