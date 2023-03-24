<template>
    <dynamic-blog-category ></dynamic-blog-category>
</template>

<script>

import DynamicBlogCategory from "@/components/blog/blog-list.vue";
export default {
  name: 'ListPage',
  components: { DynamicBlogCategory },
  data() {
    return {
    }
  },
  async asyncData({ $getRedisKey,params }) {
    
        const site_id = process.env.SITE;
        let pageData = {};
        pageData = await $getRedisKey(`web:${site_id}:pages:${params.category}`);
        console.log(pageData)
        return { pageData }
    }
}
</script>
