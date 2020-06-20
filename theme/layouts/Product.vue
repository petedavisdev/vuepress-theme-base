<template>
  <Layout>
    <template v-slot:mainStart>
      <h1>{{ $page.title }}</h1>
      <small>Price: {{ $page.frontmatter.price }}</small>
    </template>
  </Layout>
</template>
