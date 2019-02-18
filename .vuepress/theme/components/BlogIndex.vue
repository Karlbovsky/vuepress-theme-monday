<template>
  <div class="blog-index">
    <div v-for="post in posts" class="blog-index__content">
      <div class="row" v-if="post.frontmatter.featuredImage != null">
        <div class="col-xs col-md-6">
          <div class="row justify-content-start align-items-center">
            <div class="col">
              <div class="row">
                <div class="col">
                  <div class="container-fluid">
                    <div class="row">
                      <p class="post-title">
                        <router-link
                          :to="post.path"
                          class="post-title--small post-title__link"
                        >{{ post.frontmatter.title }}</router-link>
                        <span v-if="showTags">
                          <div class="tag-container">
                            <small v-for="tag in post.frontmatter.tags" class="ml-1">
                              <span class="badge badge-info">{{tag}}</span>
                            </small>
                          </div>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <p class="ml-1">
                <span class="date-text">{{ post.frontmatter.date.slice(0,10) }} by</span>
                <span class="author-text">
                  <small>{{ post.frontmatter.author}}</small>
                </span>
              </p>
            </div>
          </div>
          <p>{{ post.frontmatter.description }}</p>
          <p class="text-right">
            <router-link :to="post.path" class="small-link-text">
              Read more
              <i class="mdi mdi-open-in-new"></i>
            </router-link>
          </p>
        </div>
        <div class="col-xs col-md-6">
          <img
            id="thumbnail"
            class="img-fluid elevation-2"
            :src="post.frontmatter.featuredImage"
            alt="image"
          >
        </div>
      </div>
      <div v-else>
        <div class="col-xs">
          <div class="row justify-content-start align-items-center">
            <div class="col">
              <div class="row">
                <div class="col">
                  <div class="container-fluid">
                    <div class="row">
                      <p class="post-title">
                        <router-link
                          :to="post.path"
                          class="post-title post-title__link"
                        >{{ post.frontmatter.title }}</router-link>
                        <span v-if="showTags">
                          <div class="tag-container">
                            <small v-for="tag in post.frontmatter.tags" class="ml-1">
                              <span class="badge badge-info">{{tag}}</span>
                            </small>
                          </div>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <p class="ml-1">
                <small class="date-text">{{ post.frontmatter.date.slice(0,10) }} by</small>
                <span class="author-text">
                  <small>{{ post.frontmatter.author}}</small>
                </span>
              </p>
            </div>
          </div>
          <p>{{ post.frontmatter.description }}</p>
          <p class="text-right">
            <router-link :to="post.path" class="small-link-text">
              Read more
              <i class="mdi mdi-open-in-new"></i>
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    blogPages: [],
    showTags: false
  }),
  computed: {
    posts() {
      return this.$site.pages
        .filter(
          x => x.path.startsWith("/content/blog/") && !x.frontmatter.blog_index
        )
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    }
  },
  methods: {}
};
</script>

<style lang="scss">
</style>
