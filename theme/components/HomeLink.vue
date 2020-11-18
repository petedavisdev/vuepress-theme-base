<template>
  <RouterLink class="HomeLink" to="/" title="Go to homepage">
    <img
      v-if="$themeConfig.logo"
      class="HomeLink-logo"
      :src="$themeConfig.logo"
      :alt="$site.title"
    />
    <span class="HomeLink-title">{{ $site.title }}</span>
  </RouterLink>
</template>
