<template>
  <div class="PageList">
    <aside>
      <button @click="currentTag = Tag1">Tag1</button>
    </aside>
    <section>
      <article v-for="page in pages" :key="page.id">
        <PageListItem :page="page" />
      </article>
    </section>
    <aside>
      <button @click="currentLength += 10">Show more</button>
    </aside>
  </div>
</template>

<script>
export default {
  props: {
    directory: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      default: null,
    },
    length: {
      type: Number,
      default: 10,
    },
    layout: String,
  },
  data() {
    return {
      currentTag: this.tag,
      currentLength: this.length,
    }
  },
  computed: {
    pages() {
      return this.$site.pages.filter((page) => {
        if (page.relativePath.startsWith(this.directory + '/')) {
          return page
        }
      })
    },
  },
}
</script>

<style>
.PageList {
  display: grid;
}
</style>
