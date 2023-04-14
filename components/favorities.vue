<template>
  <section class="Favs">
    <div class="container">
      <div class="Favs-in">
        <h2>Favorilerinizdeki Villalar <span>({{ villas.length }})</span></h2>
        <div class="Favs-list">
        
          <div class="Card" v-for="(villa, index) in villas" :key="index">
            <div class="Card-in">
              <div class="Card-img">
                <nuxt-link :to="'/'+villa.detail.code">
                  <nuxt-img :src="villa.detail.watermark_images[0].preview_url" :srcset="villa.detail.watermark_images[0].responsive"
                    width="267" height="175"></nuxt-img>
                </nuxt-link>
                <button class="Card-fav active" type="button" @click="removeFavorite(villa.detail.code)">
                  <i class="icon-heart-full"></i>
                </button>
              </div>
              <div class="Card-content">
                <div class="Card-content-head">
                  <div class="Card-content-head-code">
                    <b>{{ prefix + villa.detail.code}}</b>
                    <span>Tesis Kodu</span>
                  </div>
                  <div class="Card-content-head-location">
                    <i class="icon-pin"></i>
                    <p>{{ villa.detail.location.district.name | titlecase }} <span>{{ villa.detail.location.country.name | titlecase }} / {{ villa.detail.location.city.name | titlecase
                    }}</span></p>
                  </div>
                </div>
                <div class="Card-content-info">
                  <div class="Card-content-info-item">
                    <i class="icon-user"></i>
                    <span>{{ villa.detail.max_adult }} Kişilik</span>
                  </div>
                  <div class="Card-content-info-item">
                    <i class="icon-bed"></i>
                    <span>{{ villa.detail.bedroom }} Yatak Odası</span>
                  </div>
                  <div class="Card-content-info-item">
                    <i class="icon-shower"></i>
                    <span>{{ villa.detail.bathrooms }} Banyo</span>
                  </div>
                </div>
              </div>
              <div class="Card-content-bottom">
                <div class="Card-content-bottom-price">
                  <p><b>1.400TL - 2.200TL
                    </b><span>/Gecelik</span></p>
                  <p>Fiyat Aralığında</p>
                </div>
                <nuxt-link :to="'/'+villa.detail.code" class="Card-content-bottom-link"><i
                    class="icon-right-arrows-new"></i></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "favorities",
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

      const response = await this.$axios.post('/data/get-villas', { ids: ids });
      for (let i = 0; i < response.data.length; i++) {
        let villa = response.data[i];
        let villaData = {};
        villaData['detail'] = villa.detail;
        villaData['price'] = villa.price;
        this.villas.push(villaData)
      }
    }
    console.log(this.villas)
  },
  methods: {
    removeFavorite(code) {
      this.$store.dispatch('favorite/removeFavorite', code)
      this.villas = this.villas.filter(villa => villa.detail.code !== code)
    },
  },
}
</script>

<style scoped></style>
