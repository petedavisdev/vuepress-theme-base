<template>
  <ul class="LinkList">
    <li v-for="item in $attrs.links" :key="item.text" class="LinkList-item">
      <RouterLink
        v-if="item.link.startsWith('/')"
        class="LinkList-link"
        :to="item.link"
      >
        {{ item.text }}
      </RouterLink>

      <a v-else class="LinkList-link is-external" :href="item.link">
        {{ item.text }}
      </a>
    </li>
  </ul>
</template>
