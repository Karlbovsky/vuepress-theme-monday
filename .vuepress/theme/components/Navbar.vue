<template>
  <div class="container">
    <div class="row justify-content-end somespace--b navbar">
      <!-- <button
        class="btn btn-sm btn-outline-light somespace--tl nav-item--color navbar-brand"
        href="#"
      >
        <i class="mdi mdi-alpha-f-box-outline mdi-24px"></i>
      </button>-->
      <div class="divider"></div>
      <router-link
        v-for="navItem in this.$site.themeConfig.nav"
        :to="navItem.path"
        type="button"
        class="somespace--tl nav-item--color"
      >
        <i :class="navItem.icon"></i>
        <!-- {{link.name}} -->
      </router-link>
      <div class="divider"></div>
      <a v-for="socialItem in this.$site.themeConfig.social" :href="socialItem.url" target="_blank">
        <div v-if="socialItem.url" class="somespace--tl nav-item--color" @click.stop>
          <i :class="socialItem.icon"></i>
        </div>
      </a>
      <!-- <button type="button" class="btn btn-outline-light somespace--tl navitem--color">
        <i class="mdi mdi-instagram mdi-24px"></i>
      </button>
      <button type="button" class="btn btn-outline-light somespace--tl navitem--color">
        <i class="mdi mdi-facebook-box mdi-24px"></i>
      </button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    socialItemOnClick() {}
  }
};
</script>

<style scoped>
.divider {
  margin: 0 12px;
}
.somespace--t {
  margin-top: 3em;
}
.somespace--b {
  margin-bottom: 1.8em;
}
.somespace--tl {
  margin-top: 6px;
  margin-left: 6px;
}
.somespace--tr {
  margin-top: 6px;
  margin-left: 3px;
  margin-right: 1.2em;
}
</style>
