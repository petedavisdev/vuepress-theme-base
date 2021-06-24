<template>
  <Layout>
    <template #mainStart>
      <h1>{{ $page.title }}</h1>
      <DateTime :date="$page.frontmatter.date" />
      <TagList :tags="$page.frontmatter.tags || null" />
    </template>
  </Layout>
</template>
