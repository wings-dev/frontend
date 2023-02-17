<template>
  <div class="F_villa-item">
    <div class="F_villa-item-img">
      <swiper class=" swiper villa-list-slider" :options="swiperOptions">
        <div class="swiper-slide" v-for="image in villa.preview_image">
          <img class="lazyload" :src="image.preview_url"
               :data-src="image.preview_url"
               :data-srcset="image.responsive_url"/>
        </div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="F_villa-item-right">
      <div class="F_villa-item-head">
        <div class="F_villa-item-head-name">
          <span>Tesis Kodu</span>
          <a :href="villa.url">{{ villa.name }}</a>
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
            <p class="F_villa-item-features-item" v-for="amenite in amenitesList(villa)">{{ amenite }}</p>
            <p class="F_villa-item-features-item F_villa-item-features-more"><a :href="villa.url" class="">Tümünü Gör</a></p>
          </div>

        </div>
        <a :href="villa.url" class="F_villa-item-show">Villayı İncele</a>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "FilterVillaPreviewComponent",
  props: ['villa'],
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
    }
  },
  methods: {
    amenitesList(villa) {
      return (Object.values(villa.amenites || {}).flatMap(amenite => amenite.list) || []).filter(i => !!i);
    }
  }
}
</script>

<style scoped>

</style>
