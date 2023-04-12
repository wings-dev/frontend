<template>
  <div>
    <dynamic-blog-detail :data="pageData" :morePost ="pagePosts"></dynamic-blog-detail>
    <!-- <blog-detail></blog-detail> -->
  </div>
</template>

<script>
import DynamicBlogDetail from "@/components/blog/blog-detail.vue";
export default {
  name: 'BlogDetail',
  layout: "no-search",
  components: { DynamicBlogDetail },
  data() {
    return {

    }
  },
  async asyncData({ $getRedisKey, params, $axios, store, route }) {
    const site_id = process.env.SITE;
    let pageData = {};
    pageData = await $getRedisKey(`web:${site_id}:pages:${params.slug}`);

    const response = await $axios.get((process.server ? 'http://localhost:' + process.env.NODE_PORT : '') + `/website/blogs?api_token=${process.env.WEBSITE_TOKEN}`)
    let pagePosts = response.data.data;



    const pageURLs = Object.keys(store.state.routes.routes)
      .filter(key => store.state.routes.routes[key].type === 14)
      .filter(key => key == params.category)

    console.log(params.slug)

    pagePosts = response.data.data.filter(item => item.page_content.blog_category.includes(String(pageURLs))).filter(item => item.url !== params.slug)
    // pagePosts = pagePosts.filter(item => )
    console.log()
    return { pageData, pagePosts }
  },
  mounted() {
    console.log(this.pagePosts)
  }

}
</script>
