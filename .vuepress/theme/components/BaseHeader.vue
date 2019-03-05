<template>
  <div>
    <h1 class="baseheader__title display-3 text--col-brand-light">{{ this.title }}</h1>
    <p class="subheader">{{ this.description }}</p>
  </div>
</template>

<script>
export default {
  name: "BaseHeader",
  props: ["title", "description"]
};
</script>

<style>
</style>
