<template>
  <section class="Favs user">
    <div class="container">
      <div class="Favs-in">
        <!-- <h2>Favorilerinizdeki Villalar <span>({{ villas.length }})</span></h2> -->
        <div class="Favs-list">

          <div class="Card" v-for="(villa, index) in villas" :key="index">
            <div class="Card-in">
              <div class="Card-img">
                <nuxt-link :to="'/'+(villa.detail.url || '')">
                  <nuxt-img v-if="villa.detail.watermark_images && villa.detail.watermark_images[0]" 
                    :src="global_cdn + villa.detail.watermark_images[0].preview_url" 
                    :srcset="generateSrcset(villa.detail.watermark_images[0].responsive)"
                    sizes="sm:325px lg:267px"
                    width="267" height="205" loading="lazy" placeholder :alt="prefix + (villa.detail.code || '') + ' ' + sitename">
                  </nuxt-img>
                </nuxt-link>
                <button class="Card-fav active" type="button" @click="removeFavorite(villa.detail.code)">
                  <i class="icon-heart-full"></i>
                </button>
              </div>
              <div class="Card-content">
                <div class="Card-content-head">
                  <div class="Card-content-head-code">
                    <b>{{ prefix + (villa.detail.code || '')}}</b>
                    <span>Tesis Kodu</span>
                  </div>
                  <div class="Card-content-head-location">
                    <i class="icon-pin"></i>
                    <p v-if="villa.detail.location && villa.detail.location.district && villa.detail.location.country && villa.detail.location.city">
                      {{ villa.detail.location.district.name | titlecase }} <span>{{ villa.detail.location.country.name | titlecase }} / {{ villa.detail.location.city.name | titlecase
                      }}</span></p>
                  </div>
                </div>
                <div class="Card-content-info">
                  <div class="Card-content-info-item">
                    <i class="icon-user"></i>
                    <span>{{ villa.detail.max_adult || 0 }} Kişilik</span>
                  </div>
                  <div class="Card-content-info-item">
                    <i class="icon-bed"></i>
                    <span>{{ villa.detail.bedroom || 0 }} Yatak Odası</span>
                  </div>
                  <div class="Card-content-info-item">
                    <i class="icon-shower"></i>
                    <span>{{ villa.detail.bathrooms || 0 }} Banyo</span>
                  </div>
                </div>
              </div>
              <div class="Card-content-bottom">
                <div class="Card-content-bottom-price">
                  <p><b>{{villa.detail.min_price || ''}} - {{villa.detail.max_price || ''}}
                  </b><span>/Gecelik</span></p>
                  <p>Fiyat Aralığında</p>
                </div>
                <nuxt-link :to="'/'+(villa.detail.url || '')" class="Card-content-bottom-link"><i
                  class="icon-right-arrows-new"></i></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  </section>
</template>
<script>
import {findVillaUrlByCode} from "@/mixins/findVillaUrlMixin";
import cdnSrcsetMixin from '@/mixins/cdnSrcsetMixin';

export default {
  name: "favorities",
  mixins: [cdnSrcsetMixin],
  data() {
    return {
      villas: [],
      prefix: process.env.PREFIX,
      global_cdn: process.env.GLOBAL_CDN_URL,
      sitename: process.env.SITE_NAME
    }
  },
  async mounted() {
    try {
      const storedFavorites = localStorage.getItem('favorites');

      if (storedFavorites) {
        const ids = JSON.parse(storedFavorites);
        const response = await this.$axios.post('/data/get-villas', { ids });

        this.villas = response.data.map(villa => {
          const priceList = Array.isArray(villa?.price?.[`price_list_${process.env.PRICELIST_ID}`]?.list)
            ? villa.price[`price_list_${process.env.PRICELIST_ID}`].list
            : [];
          const prices = priceList.map(item => parseInt(item.price.replace("₺", "")));
          const min_price = prices.length ? Math.min(...prices) : null;
          const max_price = prices.length ? Math.max(...prices) : null;

          villa.detail.url = findVillaUrlByCode(villa.detail.code, this.$store.state.routes.routes);

          return {
            detail: {
              ...(villa && villa.detail ? villa.detail : {}),
              min_price: min_price ? min_price.toLocaleString('de-DE', { maximumFractionDigits: 0 }) + "TL" : null,
              max_price: max_price ? max_price.toLocaleString('de-DE', { maximumFractionDigits: 0 }) + "TL" : null,
            },
            price: villa && villa.price ? villa.price : {},
          };
        });
      }
    } catch (error) {
      console.error(error);
    }
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
