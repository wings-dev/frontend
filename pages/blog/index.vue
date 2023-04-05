<template>
  <div>
    <blog-home></blog-home>
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
  async asyncData({ $getRedisKey }) {
    const site_id = process.env.SITE;
    let pageData = {};
    pageData = await $getRedisKey(`web:${site_id}:pages:blog`);
    return { pageData }
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
