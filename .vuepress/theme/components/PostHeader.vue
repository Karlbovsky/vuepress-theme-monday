<template>
  <div>
    <h1 class="post-title text--col-brand-light font-weight-light">{{ title }}</h1>
    <p class="post__subheader">{{description}}</p>
  </div>
</template>

<script>
export default {
  name: "PostHeader",
  props: ["title", "description"]
};
</script>

<style>
</style>
