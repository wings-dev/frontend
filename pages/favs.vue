<template>
  <main class="main">
    <section class="Text-banner">
      <div class="container">
        <div class="Text-banner-in">
          <h1>FAVORİLERİM </h1>
        </div>
      </div>
    </section>
    <section class="Favs">
      <div class="container">
        <div class="Favs-in">
          <h2>Favorilerinizdeki Villalar <span>({{villas.length}})</span></h2>
          <div class="Favs-list">
            <div class="list-item rounded-xxl" v-for="villa in villas">
              <div class="list-image position-relative">
                <a :href="villa.url" class="d-block flex-shrink-0">
                  <nuxt-img :src="villa.detail.watermark_images[0].preview_url" width="280" height="186"  class="main-image bg-light lazy cover rounded-xl w-100"/>
                </a>
                <div class="position-absolute top-0 end-0 pt-3 mt-1 pe-3">
                  <a href="javascript:void(0);"
                    class="fav-btn rounded-circle d-flex align-items-center justify-content-center p-0"
                    onclick="$(this).toggleClass('active')">
                    <i class="icon-heart"></i>
                    <i class="icon-heart-full"></i>

                  </a>
                </div>
              </div>
              <div class="list-content ps-3 pe-3 pt-2 pb-3">
                <div class="d-flex justify-content-between  mb-2 pb-1">
                  <div class="d-flex align-items-end">
                    <div class="d-flex flex-column item-name">
                      <small>Tesis Kodu</small>
                      <span class="list-title fs-6 lh-sm fw-medium ls-05 d-block me-2">{{ prefix + villa.detail.code }}</span>
                    </div>
                    <div class="d-flex align-items-center fw-medium text-theme-secondary">
                      <i class="icon-star"></i>
                      <span>4,9</span>
                    </div>
                  </div>
                  <div class="item-location d-flex align-items-center text-theme-secondary">
                    <i class="icon-pin"></i>
                    <span class="lh-sm d-flex flex-column"><b class="text-theme-first">{{villa.detail.location.district.name}}</b>{{villa.detail.location.country.name}} / {{villa.detail.location.city.name}}</span>
                  </div>
                </div>
                
                <div class="item-infos row gx-2 pe-1 pb-2 d-flex">
                  <div class="info  d-flex align-items-center rounded-sm">
                    <i class="icon-user"></i>
                    <span class="lh-sm text-theme-first text-sm">{{ villa.detail.max_adult }} Kişilik</span>
                  </div>
                  <div class="info  d-flex align-items-center rounded-sm">
                    <i class="icon-shower"></i>
                    <span class="lh-sm text-theme-first text-sm">{{ villa.detail.bedroom }} Yatak Odası</span>
                  </div>
                  <div class="info  d-flex align-items-center rounded-sm">
                    <i class="icon-bed"></i>
                    <span class="lh-sm text-theme-first text-sm">{{ villa.detail.bathrooms }} Banyo</span>
                  </div>
                </div>
                <div class="lh-sm ls-05 mt-1" v-if="villa.price !== null">
                  <span class="text-secondary list-item-info">Gecelik <strong
                      class="text-theme-second fs-5-5 fw-medium">11.526 TL</strong> başlayan
                    fiyatlarla</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'FavPage',
  layout: 'no-search',
  head() {
    return {
      title: 'Favorilerim',
      meta: [
        { hid: 'description', name: 'description', content: 'anasayfa' },
        { hid: 'keywords', name: 'keywords', content: 'anasayfa1, anasayfa2, anasayfa3' }
      ],
      link: [
        { rel: 'stylesheet', href: `/css/fav.min.css` }
      ]
    }
  },
  data() {
    return {
      villas: [],
      prefix: process.env.PREFIX
    }
  },
  async mounted() {
    let ids = [];
    const data = localStorage.getItem('favorites')
    if (data) {
      for (const id of JSON.parse(data)) {
        ids.push(id);
      }

      const response = await this.$axios.post('/data/get-villas', {ids: ids});
      for (let i = 0; i < response.data.length; i++) {
        let villa = response.data[i];
        let villaData = {};
        villaData['detail'] = villa.detail;
        villaData['price'] = villa.price;
        this.villas.push(villaData)

        console.log(villaData)
      }
    }
  }
}
</script>

