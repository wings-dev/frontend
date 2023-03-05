<template>
  <div class="F_villa-item">
    <div class="F_villa-item-img">
      <div class="swiper villa-list-slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(image, index) in villa.preview_image" :key="index">
            <img class="lazyload" :src="image.preview_url" :data-src="image.preview_url" :srcset="image.responsive_url" />
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <div class="villa-item-fav position-absolute top-0 end-0 pt-1 mt-1 pe-1">
        <a href="javascript:void(0);" class="fav-btn rounded-circle d-flex align-items-center justify-content-center p-0"
          onclick="">
          <i class="icon-heart"></i>
          <!-- <i class="icon-heart-full"></i> -->

        </a>
      </div>
    </div>
    <div class="F_villa-item-right">
      <div class="F_villa-item-head">
        <div class="F_villa-item-head-name">
          <span>Tesis Kodu</span>
          <a :href="villa.url">{{ prefix + villa.code }}</a>
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
        <div class="F_villa-item-head-price F_villa-item-head-price-promotion">
          <div class="F_villa-item-head-price-in">
            <b>{{ villa.prices.min_price.price }}₺</b>
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
      </div>
      <div class="F_villa-item-bottom">
        <div class="F_villa-item-features">
          <h6>Öne çıkan özellikleri</h6>
          <div class="F_villa-item-features-in">
            <p class="F_villa-item-features-item" v-for="(amenite, index) in amenitesList(villa)" :key="index">{{ amenite }}</p>
            <!-- <p class="F_villa-item-features-item F_villa-item-features-more"><a :href="villa.url" class="">Tümünü Gör</a> -->
          </div>

        </div>
        <a :href="villa.url" class="F_villa-item-show">Villayı İncele</a>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  name: "FilterVillaPreviewComponent",
  props: ['villa'],
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
  methods: {
    amenitesList(villa) {
      return (Object.values(villa.amenites || {}).flatMap(amenite => amenite.list) || []).filter(i => !!i);
    }
  },
  mounted() {
    Swiper.use([Navigation, Pagination])

    const swiper = new Swiper('.villa-list-slider', {
      spaceBetween: 18,
      direction: 'horizontal',
      loop: true,
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
