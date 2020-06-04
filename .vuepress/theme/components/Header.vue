<template>
  <header>
    <slot name="headerStart" />
    <RouterLink to="/">{{ $site.title }}</RouterLink>
    <slot name="headerEnd" />
  </header>
</template>
