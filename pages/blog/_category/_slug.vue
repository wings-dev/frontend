<template>
  <div>
    <dynamic-blog-detail :data="pageData" :morePost="pagePosts" :category="category"></dynamic-blog-detail>
    <!-- <blog-detail></blog-detail> -->
  </div>
</template>

<script>
import DynamicBlogDetail from "@/components/blog/blog-detail.vue";
export default {
  name: 'BlogDetail',
  layout: "no-search",
  components: { DynamicBlogDetail },
  head() {
    return this.headData
  },
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

    const getHrefData = (hrefValue, data) => {
      for (const item of data) {
        if (item.href === hrefValue) {
          return item;
        }
      }
      return null;
    };

    const category = getHrefData(pageURLs[0], store.state.settings.menuData.blogmenu);

    pagePosts = response.data.data.filter(item => item.page_content.blog_category.includes(String(pageURLs))).filter(item => item.url !== params.slug)
    let headData = {
      title: pageData.title,
    }

    return { pageData, pagePosts, category,headData }
  },
  mounted() {
  }

}
</script>
