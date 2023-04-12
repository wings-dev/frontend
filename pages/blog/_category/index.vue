<template>
  <dynamic-blog-category :posts="pagePosts"></dynamic-blog-category>
</template>

<script>

import DynamicBlogCategory from "@/components/blog/blog-list.vue";
export default {
  name: 'ListPage',
  layout: 'no-search',
  components: { DynamicBlogCategory },
  data() {
    return {
      pagePosts: []
    }
  },
  async asyncData({ $axios,store,route }) {
    try {
      const response = await $axios.get((process.server ? 'http://localhost:' + process.env.NODE_PORT : '') +`/website/blogs?api_token=${process.env.WEBSITE_TOKEN}`)
      let pagePosts = response.data.data;

      const pageURLs = Object.keys(store.state.routes.routes)
      .filter(key => store.state.routes.routes[key].type === 14)
      .filter(key => key == route.params.category)

      pagePosts = response.data.data.filter(item => item.page_content.blog_category.includes(String(pageURLs[0])))
      return { pagePosts };
    } catch (error) {
      console.error('API isteği başarısız oldu:', error);
    }
  },
  mounted (){
  }
}
</script>
