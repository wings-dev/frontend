<template>
  <a @click="goDetail" class="Otel-card">
    <div class="Otel-card-left">
      <div class="Otel-card-img">
        <img :src="previewImageUrl" width="361" height="255" alt="hotel image" class="" />
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
            <p>Mükemmel <u>124 yorum</u></p>
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
        <p>Mükemmel <u>124 yorum</u></p>
      </div>
      <div class="Otel-card-price">
        <span>{{ hotel.offers[0].night }} GECE</span>
        <div class="Otel-card-price-in">
          <s v-if="hotel.offers[0].price.amount_old > 0">{{hotel.offers[0].price.amount_old}}{{ hotel.offers[0].price.currency }}</s>
          <b>{{ hotel.offers[0].price.amount }}<small>{{ hotel.offers[0].price.currency }}</small></b>
          <p>Gecelik <span>{{ (hotel.offers[0].price.amount / hotel.offers[0].night).toFixed(2) | numberFormat }}{{ hotel.offers[0].price.currency }}</span></p>
          <!--<p class="Otel-card-content-warning mobile">Bu fiyattan son oda!</p>-->
        </div>
      </div>
      <div class="Otel-card-link">
        <button><span class="desktop">Oda Seç</span><i class="icon-right-arrows-new mobile"></i></button>
      </div>
    </div>
  </a>
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
      prefix: process.env.PREFIX
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
    }
  },
  methods: {
    slugify,
    backgroundImageStyle() {
      const imageUrl = this.previewImageUrl;
      return `background-image: url('${imageUrl}');`;
    },
    goDetail() {

      /*const query = this.$route.query;
      let data = null;
      if (query.checkIn && query.checkOut) {
        data = {i:this.encodeTimestamp(query.checkIn), o:this.encodeTimestamp(query.checkOut), v: localStorage.getItem('visitorId')};
      }*/

      let data = JSON.parse(JSON.stringify(this.$route.query));
      data.requestId = this.requestId;
      delete data['destinations']
      this.$router.push({
        path: 'otel/' + slugify(this.hotel.name.toLowerCase()) + '-' + this.hotel.id,
        query: data,
      });
    },
    encodeTimestamp(dateString) {
      // Tarih stringini (ISO formatında) Date nesnesine dönüştür
      const date = new Date(dateString);

      // Date nesnesini zaman damgasına (timestamp) dönüştür
      return date.getTime();
    },
    amenitesList(villa) {
      return (Object.values(villa.amenites || {}).flatMap(amenite => amenite.list) || []).filter(i => !!i);
    },
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
