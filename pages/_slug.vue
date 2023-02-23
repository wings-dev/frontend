<template>
  <div>
    <dynamic-detail-page :villa="componentData" v-if="type === 2"></dynamic-detail-page>
    <dynamic-villa-filter-page :selectedFilters="componentData" v-if="type === 7"></dynamic-villa-filter-page>
  </div>
</template>

<script>
import DynamicVillaFilterPage from "@/components/dynamic-page/villa-filter.vue";
import DynamicDetailPage from "@/components/dynamic-page/detail.vue";

export default {
  name: 'DynamicPage',
  components: {DynamicDetailPage, DynamicVillaFilterPage},
  layout: "no-search",
  head() {
    return this.headData
  },
  data() {
    return {
      type: null,
      headData: {},
      componentData: {}
    }
  },
  async asyncData({$getRedisKey, route}) {
    const site_id = process.env.SITE;
    const path = route.params.slug;

    // Gelen sayfanın redisteki datası
    let redisData = await $getRedisKey(`web:${site_id}:pages:${path}`);

    let componentData = {};

    if (redisData) {
      console.log(redisData);

      const type = redisData.type;

      const headData = {
        title: redisData.title,
        meta: redisData.meta
      }

      // type 2 => villa detay sayfası
      if (redisData.type === 2) {
        headData.link = [
          {rel: 'stylesheet', href: `/css/villa-detay.min.css`}
        ]

        // villa redis datası
        componentData = await $getRedisKey(`data:villas:${redisData.code}:detail`);
      }

      // type 7 => filtre sayfası
      if (redisData.type === 7) {
        headData.link = [
          {rel: 'stylesheet', href: `/css/listeleme.min.css`}
        ]

        // filtre redis datası
        componentData = redisData.data;
      }

      console.log(componentData);

      return {type, headData, componentData}
    } else {
      return {} ; // TODO 404 verilmeli
    }
  },
}
</script>
<style scoped>
.list-item .list-image {
  width: 100%;
}
</style>
