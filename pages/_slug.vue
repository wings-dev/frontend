<template>
  <div>
    <client-only>
      <search-bar :key="$route.path" v-if="[5, 8, 19].includes(type)"
        :tab="type === 8 && componentData?.page_content?.isabroad ? { tab: 2 } : null"></search-bar>
    </client-only>
    <dynamic-detail-page :villa="componentData" :calendar="calendar" :price_list_1="price_list_1" :deposit="deposit"
      v-if="type === 2"></dynamic-detail-page>
    <dynamic-villa-filter-page :selectedFilters="categoryFilter" :pageContent="componentData" :highlights=true
      :type="type" v-else-if="type === 5 || type === 8"></dynamic-villa-filter-page>
    <text-template-component :data="componentData" v-else-if="type === 1 || type === 23"></text-template-component>
    <otel-area-dynamic-page :data="componentData" v-else-if="type === 18"></otel-area-dynamic-page>
    <!-- <hotel-list :data="componentData" :blog="blogPostData" v-else-if="type === 18"></hotel-list>
    <hotel-destination :data="componentData" :blog="blogPostData" v-else-if="type === 19"></hotel-destination> -->
  </div>
</template>

<script>
import DynamicVillaFilterPage from "@/components/dynamic-page/villa-filter.vue";
import DynamicDetailPage from "@/components/dynamic-page/detail.vue";
import HotelList from "@/components/hotel/hotel-list.vue";
import HotelDestination from "@/components/hotel/hotel-destination.vue";
import TextTemplateComponent from "@/components/dynamic-page/TextTemplateComponent.vue";
import OtelAreaDynamicPage from "@/components/dynamic-page/otel-area.vue";

export default {
  name: 'DynamicPage',
  components: { TextTemplateComponent, DynamicDetailPage, DynamicVillaFilterPage, HotelList, HotelDestination, OtelAreaDynamicPage },
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
      categoryFilter: {},
      blogPostData: {}
    }
  },
  async asyncData({ route, $axios, $getRedisKey, store, redirect }) {
    const site_id = process.env.SITE;
    const path = route.params.slug;
    // Gelen sayfanın redisteki datası

    let redisData = store.state['routes'].routes[path] // await $getRedisKey(`web:${site_id}:pages:${path}`);
    if (!redisData) {
      redirect('404')
      return
    }
    redisData = JSON.parse(JSON.stringify(store.state['routes'].routes[path]))
    let componentData = {};
    let metaData = {};
    let categoryFilter = {};
    let blogPostData = {};
    let calendar = [];
    let price_list_1 = [];
    let deposit = null;

    if (redisData) {
      const type = redisData.type;
      let headData = {}

      // type 2 => villa detay sayfası
      if (redisData.type === 2) {
        const data = await $getRedisKey([`data:villas:${redisData.code}:detail`, `data:villas:${redisData.code}:calendar`, `data:villas:${redisData.code}:prices`])

        metaData = await $getRedisKey(`web:${site_id}:pages:${path}`);
        componentData = data[`data:villas:${redisData.code}:detail`];
        calendar = data[`data:villas:${redisData.code}:calendar`] ? data[`data:villas:${redisData.code}:calendar`] : [];
        price_list_1 = price_list_1 = Array.isArray(data[`data:villas:${redisData.code}:prices`]?.[`price_list_${process.env.PRICELIST_ID}`]?.list)
          ? data[`data:villas:${redisData.code}:prices`][`price_list_${process.env.PRICELIST_ID}`].list
          : [];

        deposit = data[`data:villas:${redisData.code}:prices`][`price_list_${process.env.PRICELIST_ID}`].deposit;

        headData = {
          title: metaData.title,
          meta: metaData.meta,
          link: [{ rel: 'stylesheet', href: (process.env.NODE_ENV === "production" ? process.env.CDN_URL : '') + `/css/villa-detay.min.css` }]
        }
      }
      // Villa-Yurtdışı Villa Kategori sayfası
      if (redisData.type === 5 || redisData.type === 8) {
        componentData = await $getRedisKey(`web:${site_id}:pages:${path}`);

        headData = {
          title: componentData.title,
          meta: componentData.meta
        }
      }

      //Otel Category
      if (redisData.type === 18) {
        componentData = await $getRedisKey(`web:${site_id}:pages:${path}`);
        const destination_id = componentData.page_content.otel_destination;

        const response = await $axios.get((process.server ? 'http://localhost:' + process.env.NODE_PORT : '') + `/website/destination-hotels/${destination_id}?api_token=${process.env.WEBSITE_TOKEN}`)
        componentData.total_items = response.data.total;
        componentData.current_page = response.data.current_page;
        componentData.per_page = response.data.per_page
        componentData.hotels = response.data.data;

        headData = {
          title: componentData.title,
          meta: componentData.meta
        }
      }


      //Metin Sayfaları
      if (redisData.type === 1 || redisData.type === 23) {
        componentData = await $getRedisKey(`web:${site_id}:pages:${path}`);
        componentData.page_content.article.data = componentData.page_content.article.data.replace(/&nbsp;/g, ' ').trim();

        headData = {
          title: componentData.title,
          meta: componentData.meta
        }
      }

      return { type, headData, componentData, calendar, price_list_1, blogPostData,deposit }
    } else {
      return redirect('/404')
    }
  },
}
</script>
<style scoped>
.list-item .list-image {
  width: 100%;
}
</style>
