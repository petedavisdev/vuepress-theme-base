<template>
  <Layout>
    <template v-slot:mainStart>
      <h1>{{ $page.title }}</h1>
      <small>{{ $page.frontmatter.date }}</small>
    </template>
  </Layout>
</template>
