<template>
  <dynamic-blog-category></dynamic-blog-category>
</template>

<script>

import DynamicBlogCategory from "@/components/blog/blog-list.vue";
export default {
  name: 'ListPage',
  layout: 'no-search',
  components: { DynamicBlogCategory },
  data() {
    pagePosts: []
  },
  async asyncData({ $axios }) {
    try {
      const response = await $axios.get(`https://api.wings.com.tr/website/blogs?api_token=${process.env.WEBSITE_TOKEN}`)
      const pagePosts = response.data.data;

      const pageURLs = Object.keys(this.$store.state.routes.routes)
      .filter(key => this.$store.state.routes.routes[key].type === 14)
      .filter(key => key == this.$route.params.category)
      .map(key => {
        const data = this.$store.state.routes.routes[key].id  
        return data
      })

      pagePosts = response.data.data.filter(item => item.page_content.blog_category.includes(String(pageURLs)))
      console.log(pagePosts)
      return { pagePosts };
    } catch (error) {
      console.error('API isteği başarısız oldu:', error);
    }
  },
}
</script>
