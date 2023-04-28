<template>
  <nuxt-link :to="{path: detailUrl ,query: detailUrlData}" target="_blank" class="Otel-card">
    <div class="Otel-card-left">
      <div class="Otel-card-img">
        <nuxt-img :src="previewImageUrl" width="361" height="255" :alt="hotel.name + ' ' + sitename" class="" loading="lazy" placeholder ></nuxt-img>
        <button class="Card-fav" type="button" @click="toggleFavorite">
          <i class="icon-heart"></i>
        </button>
      </div>
      <div class="Otel-card-content">
        <div class="Otel-card-content-head">
          <div class="Otel-card-content-head-in">
            <b>{{ hotel.name }}</b>
            <small>{{ hotel.city.name }}, {{ hotel.country.name }}</small>
          </div>
          <div class="Otel-card-review mobile">
            <span>{{hotel.stars}}/5</span>
            <!--<p>Mükemmel <u>124 yorum</u></p>-->
          </div>
        </div>
        <div class="Otel-card-content-features">
          <p v-for="(item,index) in hotel.facilities" :key="index" v-if="index <= 4">{{item.name}}</p>
        </div>
        <div class="Otel-card-content-info">
          <div v-if="hotel.custom.discount_rate > 0" class="Otel-card-content-info-item erkenrezervasyon">
            <span>%{{hotel.custom.discount_rate}}</span>
            <p>Erken Rezervasyon İndirimi</p>
          </div>
          <div v-if="hotel.offers[0].cancellationPolicies.length > 0" class="Otel-card-content-info-item ucretsiziptal">
            <p>Ücretsiz İptal</p>
          </div>
        </div>
        <!--<p class="Otel-card-content-warning desktop">Bu fiyattan son oda!</p>-->
      </div>
    </div>
    <div class="Otel-card-right">
      <div class="Otel-card-review desktop">
        <span>{{hotel.stars}}/5</span>
        <p>{{hotel.stars}} Yıldız <u> yorum</u></p>
      </div>
      <div class="Otel-card-price">
        <span>{{ hotel.offers[0].night }} GECE</span>
        <div class="Otel-card-price-in">
          <s v-if="hotel.offers[0].price.amount_old > 0">{{hotel.offers[0].price.amount_old | numberFormat}}{{ hotel.offers[0].price.currency }}</s>
          <b>{{ hotel.offers[0].price.amount | numberFormat}}<small>{{ hotel.offers[0].price.currency }}</small></b>
          <p>Gecelik <span>{{ (hotel.offers[0].price.amount / hotel.offers[0].night).toFixed(2) | numberFormat }}{{ hotel.offers[0].price.currency }}</span></p>
          <!--<p class="Otel-card-content-warning mobile">Bu fiyattan son oda!</p>-->
        </div>
      </div>
      <div class="Otel-card-link">
        <button><span class="desktop">Oda Seç</span><i class="icon-right-arrows-new mobile"></i></button>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { Swiper, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import slugify from "slugify";

export default {
  name: "FilterHotelPreviewComponent",
  props: ['hotel', 'requestId'],
  components: {
    Swiper
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      prefix: process.env.PREFIX,
      sitename: process.env.SITE_NAME
    }
  },
  computed: {
    isFavorite() {
      return this.$store.state.favorite.favorites.includes(this.hotel.name)
    },
    previewImageUrl() {
      if (this.hotel.custom.preview_image && this.hotel.custom.preview_image.length > 0) {
        return this.hotel.custom.preview_image[0].preview_url
      } else if (this.hotel.thumbnailFull) {
        return this.hotel.thumbnailFull;
      } else {
        return 'https://media.dev.paximum.com/hotelimages/102627/' + this.hotel.id + '.jpg';
      }
    },
    detailUrl() {
      return 'otel/' + slugify(this.hotel.name.toLowerCase()) + '-' + this.hotel.id
    },
    detailUrlData() {
      let data = JSON.parse(JSON.stringify(this.$route.query));
      delete data['destinations']
      return data;
    }
  },
  methods: {
    slugify,
    toggleFavorite(event) {
      event.stopPropagation();
      if (this.isFavorite) {
        this.$store.dispatch('favorite/removeFavorite', this.villa.code)
      } else {
        this.$store.dispatch('favorite/addFavorite', this.villa.code)
      }
    },
  },
  mounted() {
    Swiper.use([Navigation, Pagination])

    const swiper = new Swiper('.villa-list-slider', {
      spaceBetween: 18,
      direction: 'horizontal',
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

    })
  }
}
</script>

<style scoped></style>
