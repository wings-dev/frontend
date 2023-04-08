<template>
  <div>
    <dynamic-blog-detail :data="pageData"></dynamic-blog-detail>
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
  async asyncData({ $getRedisKey, params }) {
    const site_id = process.env.SITE;
    let pageData = {};
    pageData = await $getRedisKey(`web:${site_id}:pages:${params.slug}`);

    return { pageData }
  },
  mounted() {
  }

}
</script>
