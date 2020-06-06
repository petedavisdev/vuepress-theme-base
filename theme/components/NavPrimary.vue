<template>
  <nav>
    <ul>
      <li v-for="item in $themeConfig.nav" :key="item.text">
        <RouterLink :to="item.link">{{ item.text }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>
