<template>
  <div class="container-fluid">
    <component :is="layout"/>
  </div>
</template>

<script>
import BaseLayout from "./layouts/BaseLayout.vue";
import ReadingLayout from "./layouts/ReadingLayout.vue";
import NotFound from "./layouts/404.vue";

export default {
  components: {
    BaseLayout,
    ReadingLayout,
    NotFound
  },
  computed: {
    layout() {
      return this.$page.frontmatter.layout || "BaseLayout";
    }
  }
};
</script>

<style lang="sass">
@import "./styles/theme.scss";
</style>