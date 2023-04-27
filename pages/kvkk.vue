<template>
  <main class="main">
    <section class="Text-banner Text-banner-list">
      <div class="container">
        <div class="Text-banner-in">
          <h1>KİŞİSEL VERİLERİN KORUNMASI</h1>
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
      title: 'KİŞİSEL VERİLERİN KORUNMASI'
    }
  },
  data(){
    return {
      pageURLs:null
    }
  },
  async asyncData({ $getRedisKey,store }) {
    const site_id = process.env.SITE;

    const pageURLs = Object.keys(store.state.routes.routes).filter(key => store.state.routes.routes[key].type === 23).map(key => {
      const data = JSON.parse(JSON.stringify(store.state.routes.routes[key]))
      data.url = key;
      return data

    })

    return {pageURLs }
  }
}
</script>

