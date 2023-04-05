<template>
  <main class="main">
    <section class="Text-banner Text-banner-list">
      <div class="container">
        <div class="Text-banner-in">
          <h1>GİZLİLİK POLİTİKASI</h1>
        </div>
      </div>
    </section>
    <section class="Text">
      <div class="container">
        <div class="Text-list">
          <nuxt-link class="Text-list-item" :to="item.url" v-for="(item,index) in pageURLs" :key="index">{{ item.title }}<i class="icon-right-arrow"></i></nuxt-link>
        </div>
      </div>
  </section>
</main></template>

<script>
export default {
  name: 'KvkkPage',
  layout: 'no-search',
  head() {
    return {
      title: 'Gizlilik',
      meta: [
        { hid: 'description', name: 'description', content: 'gizlilik' },
        { hid: 'keywords', name: 'keywords', content: 'gizlilik1, gizlilik2, gizlilik3' }
      ]
    }
  },
  data(){
    return {
      pageData:null,
      pageURLs:null
    }
  },
  async asyncData({ $getRedisKey,store }) {
    const site_id = process.env.SITE;
    let pageData = {};
    // store.state.routes.routes.filter(route => route.type == 16)

    const pageURLs = Object.keys(store.state.routes.routes).filter(key => store.state.routes.routes[key].type === 16).map(key => {
      const data = JSON.parse(JSON.stringify(store.state.routes.routes[key]))
      data.url = key;
      return data

    })

    pageData = await $getRedisKey(`web:${site_id}:pages:hakkimizda`);
    return { pageData,pageURLs }
  }
}
</script>

