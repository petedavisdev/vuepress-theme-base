<template>
  <ul class="LinkList">
    <li v-for="item in $attrs.links" :key="item.text">
      <RouterLink v-if="item.link.startsWith('/')" :to="item.link">
        {{ item.text }}
      </RouterLink>

      <a v-else :href="item.link">
        {{ item.text }}
      </a>
    </li>
  </ul>
</template>
