<template>
  <div>
    <dynamic-detail-page :villa="componentData" :calendar="calendar" :price_list_1="price_list_1"
      v-if="type === 2"></dynamic-detail-page>
    <dynamic-villa-filter-page :selectedFilters="categoryFilter" :pageContent="componentData" :highlights=true
      v-if="type === 5 || type === 8"></dynamic-villa-filter-page>
    <text-template-component :data="componentData" v-if="type === 1 || type === 16"></text-template-component>
  </div>
</template>

<script>
import DynamicVillaFilterPage from "@/components/dynamic-page/villa-filter.vue";
import DynamicDetailPage from "@/components/dynamic-page/detail.vue";
import TextTemplateComponent from "@/components/dynamic-page/TextTemplateComponent.vue";

export default {
  name: 'DynamicPage',
  components: { TextTemplateComponent, DynamicDetailPage, DynamicVillaFilterPage },
  layout: "no-search",
  head() {
    return this.headData
  },
  data() {
    return {
      type: null,
      headData: {},
      componentData: {},
      calendar: [],
      price_list_1: [],
    }
  },
  async asyncData({ $getRedisKey, route, store }) {
    const site_id = process.env.SITE;
    const path = route.params.slug;
    // Gelen sayfanın redisteki datası

    let redisData = store.state['routes'].routes[path]; // await $getRedisKey(`web:${site_id}:pages:${path}`);
    let componentData = {};
    let categoryFilter = {};
    let calendar = [];
    let price_list_1 = [];
    if (redisData) {
      const type = redisData.type;
      const headData = {
        title: redisData.title,
        meta: redisData.meta
      }
      // type 2 => villa detay sayfası
      if (redisData.type === 2) {
        headData.link = [
          { rel: 'stylesheet', href: `/css/villa-detay.min.css` }
        ]
        const data = await $getRedisKey([`data:villas:${path}:detail`, `data:villas:${path}:calendar`, `data:villas:${path}:prices`])
        // villa redis datası
        componentData = data[`data:villas:${path}:detail`];
        calendar = data[`data:villas:${path}:calendar`] ? data[`data:villas:${path}:calendar`] : [];
        price_list_1 = data[`data:villas:${path}:prices`] ? data[`data:villas:${path}:prices`].price_list_1 : [];
      }
      // type 7 => filtre sayfası
      if (redisData.type === 5 || redisData.type === 8) {
        // filtre redis datası
        componentData = await $getRedisKey(`web:${site_id}:pages:${path}`);

        
      }

      if (redisData.type === 1 || redisData.type === 23) {
        // filtre redis datası
        componentData = await $getRedisKey(`web:${site_id}:pages:${path}`);
        componentData.page_content.article.data = componentData.page_content.article.data.replace(/&nbsp;/g, ' ').trim();
      }

      return { type, headData, componentData, calendar, price_list_1 }
    } else {
      return {}; // TODO 404 verilmeli
    }
  },
}
</script>
<style scoped>
.list-item .list-image {
  width: 100%;
}
</style>
