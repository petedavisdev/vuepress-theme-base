<template>
  <div class="ThemeLayout">
    <header>
      <slot name="headerStart" />
      <HomeLink />
      <NavPrimary />
      <slot name="headerEnd" />
    </header>

    <aside>
      <slot name="mainBefore" />
    </aside>

    <main>
      <slot name="mainStart" />
      <Content />
      <slot name="mainEnd" />
    </main>

    <aside>
      <slot name="mainAfter" />
    </aside>

    <footer>
      <slot name="footerStart" />
      <EndCredit />
      <slot name="footerEnd" />
    </footer>
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
