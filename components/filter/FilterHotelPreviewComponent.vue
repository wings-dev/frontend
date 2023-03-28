<template>
  <a @click="goDetail" class="Otel-card">
    <div class="Otel-card-left">
      <div class="Otel-card-img">
        <img
          src="https://d1t2mawg5vwzes.cloudfront.net/hotel/102627/377277/conversions/crop_9999_666_Villa-Mimi-Tuscany-Olivers-Travels2-preview.jpg"
          width="361" height="255" alt="hotel image" class="" />
        <button class="Card-fav" type="button" @click="toggleFavorite">
          <i class="icon-heart"></i>
        </button>
      </div>
      <div class="Otel-card-content">
        <div class="Otel-card-content-head">
          <b>{{ hotel.name }}</b>
          <small>Ankara, Türkiye</small>
        </div>
        <div class="Otel-card-content-features">
          <p>Wi-Fi</p>
          <p>Oda Kahvaltı</p>
          <p>Kapalı Havuz</p>
          <p>Kuaför</p>
          <p>Kuaför</p>
        </div>
        <div class="Otel-card-content-info">
          <div class="Otel-card-content-info-item erkenrezervasyon">
            <span>%35</span>
            <p>Erken Rezervasyon İndirimi</p>
          </div>
          <div class="Otel-card-content-info-item ucretsiziptal">
            <p>Ücretsiz İptal</p>
          </div>
        </div>
        <p class="Otel-card-content-warning">Bu fiyattan son oda!</p>
      </div>
    </div>
    <div class="Otel-card-right">
      <div class="Otel-card-review">
        <span>9/10</span>
        <p>Mükemmel <u>124 yorum</u></p>
      </div>
      <div class="Otel-card-price">
        <span>2 GECE</span>
        <s>16.500TL</s>
        <b>12.420 <small>TL</small></b>
        <p>Gecelik <span>1.400TL</span></p>
      </div>
      <div class="Otel-card-link">
        <button>Oda Seç</button>
      </div>
    </div>
  </a>
  
  <!-- <div class="generally-infos bg-white rounded-xxl d-flex flex-column flex-xl-row w-100 pt-1 ms-lg-n1 mb-4 mb-sm-5 pe-xl-0 pe-lg-4">
    <div class="item-image position-relative flex-shrink-0 pe-xl-2 mb-xl-0 mb-3">
      <a href="javascript:void(0)" @click="goDetail" class="d-block flex-shrink-0">
        <img
          src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif"
          :data-src="previewImageUrl"
          width="316"
          height="209"
          alt="hotel image"
          class="main-image bg-light lazy cover rounded-xl loaded"
          :style="backgroundImageStyle()"
        />
      </a>
    </div>
    <div class="list-content flex-fill d-flex flex-column align-items-start ps-2 ps-md-3 ps-xl-4 pe-2 pe-md-3 pe-xl-4 pt-1 pb-2">
      <div class="d-flex align-items-center w-100 mb-3">
        <div class="d-flex flex-column flex-fill pt-1">
          <div class="d-flex align-items-center flex-wrap mb-2 pb-1">
            <span class="list-title fs-5 lh-sm fw-medium ls-05 d-block me-2">{{ hotel.name }}</span>
            <div class="d-flex align-items-center fw-medium text-theme-secondary">
              <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif" data-src="https://boceksoft.com/works/otelbnb/cdn/img/icons/011-star-icon.svg" width="13" height="13" alt="star" class="lazy contain flex-shrink-0 loaded" style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/img/icons/011-star-icon.svg&quot;);">&nbsp;
              <span>4,9</span>
            </div>
          </div>
          <div class="d-flex align-items-center flex-wrap text-theme-secondary">
            <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif" data-src="https://boceksoft.com/works/otelbnb/cdn/img/icons/003-pin.svg" width="15" height="18" alt="pin" class="lazy contain flex-shrink-0 me-2 loaded" style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/img/icons/003-pin.svg&quot;);">
            <span class="lh-sm">Lara / Antalya</span>
            <a href="#!" class="show-map text-theme-second ms-2"><u>Haritada Görüntüle</u></a>
          </div>
        </div>
        <div class="fs-6 text-secondary d-flex flex-column align-items-end text-end lh ls-05 pt-1">
          <small class="d-block pe-0 pe-1">Günlük</small>
          <strong class="d-block fs-3 lh-1 fw-semibold text-theme-first pe-0 pe-1">{{ hotel.offers[0].price.amount }} {{ hotel.offers[0].price.currency }}</strong>
          <small class="d-block">‘den başlayan fiyatlarla</small>
        </div>
      </div>
      <div class="info fs-6 bg-theme-light d-inline-flex align-items-center rounded-sm text-theme-secondary py-2 ps-2 ps-sm-3 pe-2 pe-sm-4 mb-3">
        <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif" data-src="https://boceksoft.com/works/otelbnb/cdn/img/icons/015-bed-second.svg" width="18" height="18" alt="group" class="lazy contain flex-shrink-0 me-2 loaded" style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/img/icons/015-bed-second.svg&quot;);">
        <small class="lh-sm ls-05">En fazla 3 yetişkin veya 2 yetişkin + 2 çocuk</small>
      </div>
      <div class="d-flex align-items-center flex-wrap justify-content-between w-100 mt-auto">
        <div class="d-flex flex-wrap fs-8 fw-medium ls-05 text-theme-primary my-2">
          <div class="d-flex align-items-center me-3 pe-sm-1">
            <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif" data-src="https://boceksoft.com/works/otelbnb/cdn/img/icons/019-virus.svg" width="20" height="20" alt="healt" class="lazy contain flex-shrink-0 me-1 loaded" style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/img/icons/019-virus.svg&quot;);">
            <span>Sağlık Sertifikalı</span>
          </div>
          <div class="d-flex align-items-center">
            <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif" data-src="https://boceksoft.com/works/otelbnb/cdn/img/icons/020-fence.svg" width="20" height="20" alt="healt" class="lazy contain flex-shrink-0 me-1 loaded" style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/img/icons/020-fence.svg&quot;);">
            <span>Özel Bölgesi var</span>
          </div>
        </div>
        <div class="view-actions d-flex align-items-center flex-wrap">
          <button type="button" @click="toggleFavorite"
                  class="fav-btn rounded-circle d-flex align-items-center justify-content-center p-0 " :class="isFavorite ? 'active' : ''">
                  <span class="action-btn-icon">
                    <i  :class="isFavorite ? 'icon-heart-full' : 'icon-heart'"></i>
                  </span>
          </button>
          <button type="button" class="action-btn share-btn bg-transparent border border-theme-light d-flex align-items-center justify-content-center rounded-circle p-0 ms-1">
            <svg width="15px" height="16px" viewBox="0 0 15 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="OtelDetay" transform="translate(-1387.000000, -217.000000)" fill="#7F8090" fill-rule="nonzero">
                  <g id="share-(1)" transform="translate(1387.000000, 217.000000)">
                    <path d="M11.7,9.96 C10.81077,9.96 10.02717,10.39743 9.53499,11.06265 L5.2797,8.88372 C5.35035,8.64291 5.4,8.39334 5.4,8.13 C5.4,7.77282 5.32677,7.43325 5.20026,7.12092 L9.65361,4.44108 C10.14921,5.02272 10.87767,5.4 11.7,5.4 C13.18887,5.4 14.4,4.18887 14.4,2.7 C14.4,1.21113 13.18887,0 11.7,0 C10.21113,0 9,1.21113 9,2.7 C9,3.04311 9.07065,3.36858 9.18786,3.67074 L4.72125,6.35844 C4.22607,5.79408 3.50811,5.43 2.7,5.43 C1.21113,5.43 0,6.64113 0,8.13 C0,9.61887 1.21113,10.83 2.7,10.83 C3.6039,10.83 4.40073,10.37973 4.89105,9.69582 L9.13233,11.86767 C9.05421,12.11985 9,12.3825 9,12.66 C9,14.14887 10.21113,15.36 11.7,15.36 C13.18887,15.36 14.4,14.14887 14.4,12.66 C14.4,11.17113 13.18887,9.96 11.7,9.96 Z" id="Path"></path>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div> -->
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
