<template>
  <div>
    <h1 class="display-3 text--col-brand-light font-weight-light">{{ title }}</h1>
    <p class="subheader">{{description}}</p>
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
