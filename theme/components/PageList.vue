<template>
  <section>
    <article v-for="page in $site.pages" :key="page.id">
      <h2>
        <a href="page.path">{{ page.title }}</a>
      </h2>
    </article>
  </section>
</template>
