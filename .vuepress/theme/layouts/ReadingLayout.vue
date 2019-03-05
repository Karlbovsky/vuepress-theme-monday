<template>
  <div>
    <header>
      <div class="container">
        <Navbar/>
      </div>
    </header>
    <main class="container-fluid">
      <div class="row">
        <div class="col-12 col-lg-3 order-1 order-lg-1" id="post-left-col">
          <div class="row">
            <div class="col-12">
              <span
                class="badge bg-accent text-white font-weight-light"
              >{{this.$page.frontmatter.author}}</span>
            </div>
            <div class="col-12">
              <small
                class="text-muted font-weight-light"
              >{{ this.$page.frontmatter.date.slice(0,10) }}</small>
            </div>
            <div class="col-12">
              <small class="font-weight-normal">
                <i>
                  left content xs-top
                  left content xs-top
                  left content xs-top
                </i>
              </small>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 order-3 order-lg-2" id="post-center-col">
          <div v-if="this.$page.frontmatter.featuredImage" class="row justify-content-center">
            <img
              id="thumbnail"
              class="img-fluid elevation-1"
              :src="this.$page.frontmatter.featuredImage"
              alt="image"
            >
          </div>
          <div v-else style="padding-bottom: 1em;"></div>
          <PostHeader
            :title="this.$page.frontmatter.title"
            :description="this.$page.frontmatter.description"
          />
          <Content/>
        </div>
        <div class="col-12 col-lg-3 order-2 order-lg-3" id="post-left-col">
          <p class="text-right">
            <small
              v-for="tag in this.$page.frontmatter.tags"
              class="text-muted font-weight-light ml-1"
            >
              <span class="badge badge-info">{{tag}}</span>
            </small>
          </p>
        </div>
      </div>
    </main>
    <V-Footer :author="this.$page.frontmatter.author"/>
  </div>
</template>

<script>
export default {
  name: "ReadingLayout"
};
</script>

<style lang="scss">
#post-left-col {
  padding-right: 2em;
}
</style>
