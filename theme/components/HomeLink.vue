<template>
  <RouterLink class="HomeLink" to="/" title="Go to homepage">
    <img v-if="$site.logo" class="HomeLink-logo" :src="$site.logo" />
    <span class="HomeLink-text">{{ $site.title }}</span>
  </RouterLink>
</template>
