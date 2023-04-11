<template>
  <div>
    <blog-home :posts="pagePosts"></blog-home>
  </div>
</template>

<script>
import BlogHome from "@/components/blog/blog-home.vue";

export default {
  name: 'BlogIndexPage',
  layout: 'no-search',
  head() {
    let site_id = process.env.SITE
    return {
      title: 'Blog',
      meta: [
        { hid: 'description', name: 'description', content: 'listele' },
        { hid: 'keywords', name: 'keywords', content: 'listele1, listele2, listele3' }
      ],
    }
  },
  data() {

  },
  async asyncData({ $getRedisKey, route, store }) {
    const site_id = process.env.SITE;
    let pageData = {};
    let pagePostData = {};
    const pageURLs = Object.keys(store.state.routes.routes).filter(key => store.state.routes.routes[key].type === 15).map(key => {
      const data = `web:${site_id}:pages:${key}`
      return data
    })
    pageData = await $getRedisKey(`web:${site_id}:pages:blog`);
    pagePostData = await $getRedisKey(pageURLs);

    const pagePosts = Object.keys(pagePostData).map(key => {
      const datapost = JSON.parse(JSON.stringify(pagePostData[key]))
      if(datapost !== null){
      datapost.url = key.substring(12)
    }
      return datapost

    })

    return { pageData, pagePosts }
  },
  components: {
    BlogHome
  },

  mounted() {
  },

  methods: {

  },
}
</script>
