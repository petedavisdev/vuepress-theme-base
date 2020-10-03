<template>
  <RouterLink class="HomeLink" to="/" title="Go to homepage">
    <img v-if="$themeConfig.logo" :src="$themeConfig.logo" :alt="$site.title" />
    <span>{{ $site.title }}</span>
  </RouterLink>
</template>
