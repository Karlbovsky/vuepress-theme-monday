<template>
  <div class="row">
    <header>
      <div class="container jumbotron jumbo__background">
        <Navbar/>
        <BaseHeader
          v-if="this.$page.title === 'Home' "
          :title="this.$site.title"
          :description="this.$site.description"
        />
        <BaseHeader v-else :title="this.$page.title" :description="this.$page.description"/>
      </div>
    </header>
    <div id="main" class="container">
      <main>
        <div class="row no-gutters">
          <div class="col">
            <Content id="blogIndex" slot-key="blog-Index"/>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col">
            <Content id="post-content" class="post-content"/>
          </div>
        </div>
      </main>
    </div>
    <V-Footer :author="this.$page.frontmatter.author"/>
  </div>
</template>

<script>
export default {
  name: "BaseLayout"
};
</script>

<style lang="scss">
</style>

