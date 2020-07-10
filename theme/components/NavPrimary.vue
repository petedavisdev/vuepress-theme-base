<template>
  <nav class="NavPrimary">
    <ul class="NavPrimary-list">
      <li
        v-for="item in $themeConfig.nav"
        :key="item.text"
        class="NavPrimary-item"
      >
        <RouterLink
          v-if="item.link.startsWith('/')"
          class="NavPrimary-link"
          :to="item.link"
          >{{ item.text }}</RouterLink
        >

        <a v-else class="NavPrimary-link -external" :href="item.link">{{
          item.text
        }}</a>
      </li>
    </ul>
  </nav>
</template>
