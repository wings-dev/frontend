<template>
  <section class="Search-villas">
    <div class="container">
      <div class="Search-villas-in">
        <div class="Search-villas-head">
          <NuxtLink to="/" class="Header-logo">
            <nuxt-img :src="'/img/site' + site_id + '/logo-dark.svg'" />
          </NuxtLink>
          <button type="button" class="Search-villas-close" @click="closeSearch">Kapat <i
              class="icon-login-close"></i></button>
        </div>

        <div class="Search-villas-tabs">
          <div class="Search-villas-tabs-left">
            <i class="icon-modern-house"></i>
            <ul class="nav nav-pills" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-villas-tab" data-bs-toggle="pill" data-bs-target="#pills-villas"
                  type="button" role="tab" aria-controls="pills-villas" aria-selected="true">Villa Ara
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-abroadvillas-tab" data-bs-toggle="pill"
                  data-bs-target="#pills-abroadvillas" type="button" role="tab" aria-controls="pills-abroadvillas"
                  aria-selected="false">Yurtdışı Villa Ara
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-villas" role="tabpanel" aria-labelledby="pills-villas-tab">
                <div class="Search-villas-top">
                  <label for="">
                    <i class="icon-search-new"></i>
                    <input v-model="input" type="text" placeholder="Villa adı veya kodu ile aramaya başla">
                  </label>
                </div>

              </div>
              <div class="tab-pane fade" id="pills-abroadvillas" role="tabpanel" aria-labelledby="pills-abroadvillas-tab">
                <div class="Search-villas-top">
                  <label for="">
                    <i class="icon-search-new"></i>
                    <input v-model="input" type="text" placeholder="Villa adı veya kodu ile aramaya başla">
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="Search-villas-tabs-right">
            <div class="Search-villas-tabs-right-head">
              <i class="icon-hotel-key"></i>
              <h4>Otel Ara</h4>
            </div>
            <div class="Search-villas-top">
              <div class="Search-villas-top-hotel">
                <i class="icon-search-new"></i>
                <div class="Search-multiselect">
                  <multiselect v-model="otelSearchValue" :options="otelSearchOptions" group-values="groupItems"
                    group-label="groupName" placeholder="Otel, tema" track-by="name" label="name" :showLabels="false">
                    <template slot="singleLabel" slot-scope="props">
                      <span class="option__desc"><span class="option__title">{{ props.option.name
                      }}</span></span></template>
                    <template slot="option" slot-scope="props">
                      <template v-if="!props.option.$isLabel">
                        <i class="icon-hotel-category" v-if="props.option.category == 'tema'"></i>
                        <i class="icon-location-pin" v-else-if="props.option.category == 'bolge'"></i>
                        <i class="icon-hotel-key" v-else></i>
                      </template>
                      <div class="option__desc">
                        <span class="option__title" v-if="props.option.$isLabel">{{ props.option.$groupLabel }}</span>
                        <span class="option__title" v-else>{{ props.option.name }}</span>
                        <span class="option__small" v-if="props.option.district">{{ props.option.district }}</span>
                      </div>
                    </template>
                    <span slot="noResult">Oops! Aramanıza uygun sonuç bulunamadı.</span>
                  </multiselect>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="Search-villas-content">
          <div class="Search-villas-content-no" v-if="!villas.length">
            <i class="icon-searching"></i>
            <b>2000+ <br> Villa arasından</b>
            <p>dilediğiniz villayı size bulalım</p>
          </div>
          <div class="Search-villas-content-list" v-else>

            <a :href="villa.url" class="Search-villas-item" v-for="villa in villas">
              <div class="Search-villas-item-img">
                <nuxt-img :src="villa.preview_image[0].preview_url" width="355" height="228" />

                <div class="Search-villas-item-hover">
                  <i class="icon-search"></i>
                </div>
              </div>
              <div class="Search-villas-item-in">

                <div class="Search-villas-item-text">
                  <p>{{ villa.code }}<span>Tesis Kodu</span></p>
                  <!-- <div class="Search-villas-item-rating">
                    <i class="icon-star"></i>
                    <span>4.9</span>
                  </div> -->
                </div>
                <div class="Search-villas-item-location">
                  <i class="icon-pin"></i>
                  <p>{{ villa.location.destination }} <span>{{ villa.location.country }} / {{ villa.location.city
                  }}</span>
                  </p>
                </div>
              </div>
            </a>

          </div>
        </div>

        <ul class="nav nav-pills mb-3 d-none" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
              type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
              type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile
            </button>
          </li>
        </ul>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "live-villa-search",
  data() {
    return {
      input: '',
      villas: [],
      cancelToken: null,
      site_id: process.env.SITE,
      otelSearchValue: [],
      otelSearchOptions: [
        {
          groupName: 'Temalar',
          groupItems: [
            { name: 'Termal Spa Otel', category: 'tema' },
            { name: 'Deniz Manzaralı Otel', category: 'tema' }
          ]
        },
        {
          groupName: 'Bölgeler',
          groupItems: [
            { name: 'Side', category: 'bolge', },
          ]
        },
        {
          groupName: 'Oteller',
          groupItems: [
            { name: 'Side Prenses Resort Hotel & Spa', district: 'Side, Antalya', category: 'otel' },
            { name: 'Side Mare Resort & SPA', district: 'Side, Antalya', category: 'otel' },
            { name: 'Side Mare Resort & SPA2', district: 'Side, Antalya', category: 'otel' },
            { name: 'Side Mare Resort & SPA3', district: 'Side, Antalya', category: 'otel' },
            { name: 'Side Mare Resort & SPA4', district: 'Side, Antalya', category: 'otel' },
            { name: 'Side Mare Resort & SPA5', district: 'Side, Antalya', category: 'otel' },
            { name: 'Side Mare Resort & SPA6', district: 'Side, Antalya', category: 'otel' },
            { name: 'Side Mare Resort & SPA7', district: 'Side, Antalya', category: 'otel' },
            { name: 'Side Mare Resort & SPA8', district: 'Side, Antalya', category: 'otel' },
            { name: 'Side Mare Resort & SPA9', district: 'Side, Antalya', category: 'otel' },
            { name: 'Side Mare Resort & SPA10', district: 'Side, Antalya', category: 'otel' }
          ]
        }
      ],
    }
  },
  watch: {
    input: function (newVal, oldVal) {
      if (this.cancelToken) {
        this.cancelToken.cancel()
      }
      this.cancelToken = this.$axios.CancelToken.source()

      this.fetchVillas(newVal)
    },
  },
  methods: {
    async fetchVillas(keyword) {
      try {
        const response = await this.$axios.post(
          '/data/villa-search',
          { keyword: keyword, site_id: process.env.SITE },
          { cancelToken: this.cancelToken.token }
        )
        this.villas = response.data
      } catch (error) {
        console.error(error)
      }
    },
    closeSearch() {
      document.querySelector('.Search-villas').classList.toggle('Search_villas_active')
      document.querySelector('body').classList.remove('over')
    }
  }
}
</script>

<style scoped></style>
