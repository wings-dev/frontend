<template>
  <dynamic-blog-category :posts="pagePosts" :category="category"></dynamic-blog-category>
</template>

<script>

import DynamicBlogCategory from "@/components/blog/blog-list.vue";
export default {
  name: 'BlogListPage',
  layout: 'no-search',
  components: { DynamicBlogCategory },
  head() {
    return this.headData
  },
  data() {
    return {
      pagePosts: []
    }
  },
  async asyncData({ $axios, store, route }) {
    try {
      const response = await $axios.get((process.server ? 'http://localhost:' + process.env.NODE_PORT : '') + `/website/blogs?api_token=${process.env.WEBSITE_TOKEN}`)
      let pagePosts = response.data.data;

      const pageURLs = Object.keys(store.state.routes.routes)
        .filter(key => store.state.routes.routes[key].type === 14)
        .filter(key => key == route.params.category)

      const getHrefData = (hrefValue, data) => {
        for (const item of data) {
          if (item.href === hrefValue) {
            return item;
          }
        }
        return null;
      };

      const category = getHrefData(pageURLs[0], store.state.settings.menuData.blogmenu);

      let headData = {
        title: category,
      }

      pagePosts = response.data.data.filter(item => item.page_content.blog_category.includes(String(pageURLs[0])))
      return { pagePosts, category,headData };
    } catch (error) {
      console.error('API isteği başarısız oldu:', error);
    }
  },
  mounted() {
  }
}
</script>
