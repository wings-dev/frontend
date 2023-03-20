<template>
  <div class="F_villa-item" >
    <div class="F_villa-item-img">
      <div class="swiper villa-list-slider">
        <div class="swiper-wrapper">
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <div class="villa-item-fav position-absolute top-0 end-0 pt-1 mt-1 pe-1">

        <button type="button" @click="toggleFavorite"
                  class="fav-btn rounded-circle d-flex align-items-center justify-content-center p-0 " :class="isFavorite ? 'active' : ''">
                  <span class="action-btn-icon">
                    <i  :class="isFavorite ? 'icon-heart-full' : 'icon-heart'"></i>
                  </span>
          </button>
      </div>
    </div>
    <div class="F_villa-item-right">
      <div class="F_villa-item-head">
        <div class="F_villa-item-head-name">
          <span>Otel Adı</span>

          <a href="javascript:void(0)" @click="goDetail">{{ hotel.name }}</a>
          <div class="F_villa-item-head-name-star">
            <i class="icon-star active"></i>
            <i class="icon-star active"></i>
            <i class="icon-star active"></i>
            <i class="icon-star"></i>
            <i class="icon-star"></i>
            <p>4.9</p>
          </div>
        </div>

        </div>
      </div>
  </div>

</template>

<script>
import { Swiper, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  name: "FilterHotelPreviewComponent",
  props: ['hotel','checkindate'],
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
    }
  },
  methods: {
    goDetail() {
      const query = this.$route.query;
      let data = null;
      if (query.checkIn && query.checkOut) {
        data = {i:this.encodeTimestamp(query.checkIn), o:this.encodeTimestamp(query.checkOut), v: localStorage.getItem('visitorId')};
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

    })
  }
}
</script>

<style scoped></style>
