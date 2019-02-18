<template>
  <footer>
    <p>&copy;2019-present {{ author }}</p>
  </footer>
</template>

<script>
export default {
  name: "V-Footer",
  props: ["author", "brand"]
};
</script>

<style>
</style>
