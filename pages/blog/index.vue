<template>
  <div>
    <blog-home :posts="pagePosts"></blog-home>
    <!-- <blog-home></blog-home> -->
  </div>
</template>

<script>
import BlogHome from "@/components/blog/blog-home.vue";
import axios from 'axios';
export default {
  name: 'BlogIndexPage',
  layout: 'no-search',
  head() {
    let site_id = process.env.SITE
    return {
      title: 'Blog',
      meta: [
        { hid: 'description', name: 'description', content: 'blog' },
        { hid: 'keywords', name: 'keywords', content: '' }
      ],
    }
  },
  components: {
    BlogHome
  },
  data() {
    return {
      pagePosts:[]
    }
  },
  async asyncData({ $axios }) {
    try {
      const response = await $axios.get((process.server ? 'http://localhost:' + process.env.NODE_PORT : '') +`/website/blogs?api_token=${process.env.WEBSITE_TOKEN}`)
      const pagePosts = response.data.data;
      return { pagePosts };
    } catch (error) {
      console.error('API isteği başarısız oldu:', error);
    }
  },
  mounted() {
  },

  methods: {

  },
}
</script>
