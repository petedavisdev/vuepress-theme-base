<template>
  <nav class="NavPrimary">
    <ul class="NavPrimary-list">
      <li
        v-for="item in $themeConfig.nav"
        :key="item.text"
        class="NavPrimary-item"
      >
        <RouterLink class="NavPrimary-link" :to="item.link">{{
          item.text
        }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>
