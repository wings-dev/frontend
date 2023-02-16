<template>
  <div>
    <dynamic-page-detail :villa="componentData" v-if="type === 2"></dynamic-page-detail>
  </div>
</template>

<script>
export default {
  name: 'DynamicPage',
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
