<template>
  <a @click.stop="goDetail" class="F_villa-item">
    <div class="F_villa-item-img">
      <div class="swiper villa-list-slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(image, index) in villa.preview_image" :key="index">
            <a href="javascript:void(0)" @click="goDetail">
              <nuxt-img :src="image.preview_url" :srcset="image.responsive_url" sizes="sm:100vw md:50vw lg:400px" />
            </a>
          </div>
        </div>
        <div class="swiper-button-prev" @clik.stop></div>
        <div class="swiper-button-next" @clik.stop></div>
      </div>
      <div class="villa-item-fav position-absolute top-0 end-0 pt-1 mt-1 pe-1">

        <button type="button" @click="toggleFavorite"
          class="fav-btn rounded-circle d-flex align-items-center justify-content-center p-0 "
          :class="isFavorite ? 'active' : ''">
          <span class="action-btn-icon">
            <i :class="isFavorite ? 'icon-heart-full' : 'icon-heart'"></i>
          </span>
        </button>
      </div>
    </div>
    <div class="F_villa-item-right">
      <div class="F_villa-item-head">
        <div class="F_villa-item-head-name">
          <span>Tesis Kodu</span>

          <a href="javascript:void(0)" @click="goDetail">{{ prefix + villa.code }}</a>
          <div class="F_villa-item-head-name-star">
            <i class="icon-star active"></i>
            <i class="icon-star active"></i>
            <i class="icon-star active"></i>
            <i class="icon-star"></i>
            <i class="icon-star"></i>
            <p>4.9</p>
          </div>
        </div>
        <div class="F_villa-item-head-location">
          <i class="icon-name-location"></i>
          <div class="F_villa-item-head-location-text">
            <p>{{ villa.city[0].toUpperCase() + villa.city.substring(1) }}
              <span>{{ villa.country[0].toUpperCase() + villa.country.substring(1) }} /
                {{ villa.city[0].toUpperCase() + villa.city.substring(1) }} </span>
            </p>
          </div>
        </div>
        <div class="F_villa-item-head-price F_villa-item-head-price-promotion" v-if="checkindate">
          <div class="F_villa-item-head-price-in">
            <b>{{ villa.total.total | numberFormat }}₺</b>
            <p>{{ villa.total.day }} gece fiyatı</p>
          </div>

          <span>TOPLAM</span>
        </div>
        <div class="F_villa-item-head-price F_villa-item-head-price-promotion" v-else>


          <div class="F_villa-item-head-price-in">
            <b>{{ villa.prices.min_price.price | numberFormat }}₺</b>
            <p>‘den başlayan fiyatlar</p>
          </div>

          <span>GECELİK</span>
        </div>
      </div>
      <div class="F_villa-item-info">
        <div class="F_villa-item-info-item">
          <i class="icon-user-new"></i>
          <span>{{ villa.max_adult }} Kişilik</span>
        </div>
        <div class="F_villa-item-info-item">
          <i class="icon-bed-new"></i>
          <span>{{ villa.bedroom }} Yatak Odası</span>
        </div>
        <div class="F_villa-item-info-item">
          <i class="icon-shower-new"></i>
          <span>{{ villa.bathrooms }} Banyo</span>
        </div>
        <div>
        </div>
      </div>
      <!-- <b>Min price:{{ villa.prices.min_price.price }}₺</b>
      <b>Max price:{{ villa.prices.max_price.price }}₺</b>
      <b>Total price:{{ villa.total.total }}₺</b>
      <b>Day:{{ villa.total.day }}</b> -->
      <div class="F_villa-item-bottom">
        <div class="F_villa-item-features">
          <h6>Öne çıkan özellikleri</h6>
          <div class="F_villa-item-features-in">
            <p class="F_villa-item-features-item" v-for="(amenite, index2) in amenitesList(villa)" :key="index2">{{
              amenite }}</p>
            <!-- <p class="F_villa-item-features-item F_villa-item-features-more"><a :href="villa.url" class="">Tümünü Gör</a> -->
          </div>

        </div>
        <a href="javascript:void(0)" @clik.stop class="F_villa-item-show"><i class="icon-calendar"></i>Müsaitlik
          Takvimi</a>
      </div>
    </div>
  </a>
</template>

<script>
import { Swiper, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  name: "FilterVillaPreviewComponent",
  props: ['villa', 'checkindate'],
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
      return this.$store.state.favorite.favorites.includes(this.villa.code)
    }
  },
  methods: {
    goDetail() {
      const query = this.$route.query;
      let data = null;
      if (query.checkIn && query.checkOut) {
        data = { i: this.encodeTimestamp(query.checkIn), o: this.encodeTimestamp(query.checkOut), v: localStorage.getItem('visitorId') };
      }

      this.$router.push({
        path: this.villa.url,
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
      // on: {
      //   init: function () {
      //     console.log('swiper init');
      //   },
      //   click: function (swiper, e) {
      //     console.log('swiper click',e);
      //     e.stopPropagation();
      //   },
      // }
    })
  }
}
</script>

<style scoped></style>
