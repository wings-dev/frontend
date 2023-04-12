<template>
  <div>
    <dynamic-detail-page :villa="componentData" :calendar="calendar" :price_list_1="price_list_1"
      v-if="type === 2"></dynamic-detail-page>
    <dynamic-villa-filter-page :selectedFilters="categoryFilter" :pageContent="componentData" :highlights=true
      v-if="type === 5 || type === 8"></dynamic-villa-filter-page>
    <text-template-component :data="componentData" v-if="type === 1 || type === 23"></text-template-component>
    <hotel-list :data="componentData" :blog="blogPostData" v-if="type === 18"></hotel-list>
    <hotel-destination :data="componentData" :blog="blogPostData" v-if="type === 19"></hotel-destination>
  </div>
</template>

<script>
import DynamicVillaFilterPage from "@/components/dynamic-page/villa-filter.vue";
import DynamicDetailPage from "@/components/dynamic-page/detail.vue";
import HotelList from "@/components/hotel/hotel-list.vue";
import HotelDestination from "@/components/hotel/hotel-destination.vue";
import TextTemplateComponent from "@/components/dynamic-page/TextTemplateComponent.vue";

export default {
  name: 'DynamicPage',
  components: { TextTemplateComponent, DynamicDetailPage, DynamicVillaFilterPage, HotelList, HotelDestination },
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
  async asyncData({ $getRedisKey, route, store, redirect }) {
    const site_id = process.env.SITE;
    const path = route.params.slug;
    // Gelen sayfanın redisteki datası

    let redisData = store.state['routes'].routes[path]; // await $getRedisKey(`web:${site_id}:pages:${path}`);
    let componentData = {};
    let categoryFilter = {};
    let blogPostData = {};
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

      if (redisData.type === 18 || redisData.type === 19) {
        componentData = await $getRedisKey(`web:${site_id}:pages:${path}`);

        let blogPostKeys = []
        let blogPost = componentData.page_content.blog_post

        blogPost.forEach(element => {
          const data = `web:${site_id}:pages:${element}`
          blogPostKeys.push(data)
        });

        blogPostData = await $getRedisKey(blogPostKeys);

      }


      if (redisData.type === 1 || redisData.type === 23) {
        // filtre redis datası
        componentData = await $getRedisKey(`web:${site_id}:pages:${path}`);
        componentData.page_content.article.data = componentData.page_content.article.data.replace(/&nbsp;/g, ' ').trim();
      }

      return { type, headData, componentData, calendar, price_list_1, blogPostData }
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
