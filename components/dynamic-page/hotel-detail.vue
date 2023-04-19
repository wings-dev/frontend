<template>
  <div>
    <main class="main">
      <section class="view-detail-section otel mb-5">
        <div class="view-detail-section-menus view-detail-section-menus-otel">
          <div class="detail-top " id="detailTop">
            <div class="container">
              <div class="view-top d-flex">

                <div class="view-top-title d-flex">
                  <div class="view-top-title-in">
                    <h1>{{ hotelDetails.body.hotel.name }}</h1>
                    <div class="view-top-subtitle">
                      <div class="d-flex align-items-center text-theme-secondary">
                        <i class="icon-pin"></i>
                        <p class="view-top-right-location"><span class="lh-sm">{{ hotelDetails.body.hotel.country.name }}
                            /
                            {{ hotelDetails.body.hotel.city.name }}</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="Otel-card-review">
                    <span>{{ hotelDetails.body.hotel.stars }}/5</span>
                    <p>{{ hotelDetails.body.hotel.stars }} Yıldız <u>0 yorum</u></p>
                  </div>
                </div>


                <div class="view-top-right">

                  <button type="button"
                    class="action-btn fav-btn w-auto h-auto fs-7 ls-05 text-theme-secondary bg-transparent p-0 d-flex align-items-center me-4 ">
                    <span class="action-btn-icon">
                      <i class="icon-heart"></i>
                    </span>
                    <span class="action-btn-text">Favorilere Ekle</span>
                  </button>
                  <div class="dropdown Share">
                    <button type="button"
                      class="action-btn share-btn fs-7 ls-05 text-theme-secondary bg-transparent p-0 d-flex align-items-center"
                      id="dropdownMenuShare" data-bs-toggle="dropdown" aria-expanded="false">
                      <span class="action-btn-icon">
                        <i class="icon-share"></i>
                      </span>
                      <span class="action-btn-text">Arkadaşın ile Paylaş</span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuShare">
                      <li><a class="dropdown-item" href="#"><i class="icon-facebook"></i></a></li>
                      <li><a class="dropdown-item" href="#"><i class="icon-instagram"></i></a></li>
                      <li><a class="dropdown-item" href="#"><i class="icon-twitter"></i></a></li>
                      <li><a class="dropdown-item" href="#"><i class="icon-whatsapp"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="View-menu d-none" id="detailMenu">
            <div class="container">
              <div class="View-menu-in">
                <div class="View-menu-left">
                  <div class="d-flex flex-wrap align-items-center fs-8 fw-medium ls-05 text-theme-primary">
                    <div v-if="hotelDetails.body.hotel.custom?.discount_rate > 0"
                      class="Otel-card-content-info-item erkenrezervasyon">
                      <span>%{{ hotelDetails.body.hotel.custom.discount_rate }}</span>
                      <p>Erken Rezervasyon İndirimi</p>
                    </div>

                    <!-- <div class="d-flex align-items-center my-2 my-sm-1 me-3 pe-1">
                      <img src="/img/icons/019-virus.svg" width="20" height="20" alt="healt"
                        class="lazy contain flex-shrink-0 me-1 loaded"
                        style="background-image: url(/img/icons/019-virus.svg);">
                      <span>Sağlık Sertifikalı</span>
                    </div>
                    <div class="d-flex align-items-center my-2 my-sm-1">
                      <img src="/img/icons/020-fence.svg" width="20" height="20" alt="healt"
                        class="lazy contain flex-shrink-0 me-1 loaded"
                        style="background-image: url(/img/icons/020-fence.svg);">
                      <span>Özel Bölgesi var</span>
                    </div>-->
                  </div>
                </div>
                <div class="View-menu-right">
                  <a target="_blank"
                    :href="`https://www.google.com/maps/@${hotelDetails.body.hotel.geolocation.latitude},${hotelDetails.body.hotel.geolocation.longitude},16z`"
                    class="map-view">Haritada Görüntüle</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container pb-1 pt-5">
          <div class="view-gallery">
            <div class="area-1" v-if="previewImages.length > 0">
              <a :href="previewImages[0].preview_url" data-fancybox="gallery" data-caption="Salon"
                class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
                <!-- <img :src="previewImages[0].preview_url" :srcset="previewImages[0].responsive"
                   alt="view-image" class="lazy cover rounded-xl w-100 h-100"> -->
                <nuxt-img :src="previewImages[0].preview_url" :srcset="previewImages[0].responsive" width="585"
                  height="387" sizes="sm:100vw md:50vw lg:585px" />

              </a>
            </div>
            <div class="area-2 d-md-block d-none" v-if="previewImages.length > 1">
              <a :href="previewImages[1].preview_url" data-fancybox="gallery" data-caption="Salon"
                class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
                <nuxt-img :src="previewImages[1].preview_url" :srcset="previewImages[1].responsive" width="284"
                  height="187" sizes="sm:100vw md:50vw lg:284px" />

              </a>
            </div>
            <div class="area-3 d-md-block d-none" v-if="previewImages.length > 2">
              <a :href="previewImages[2].preview_url" data-fancybox="gallery" data-caption="Salon"
                class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
                <nuxt-img :src="previewImages[2].preview_url" :srcset="previewImages[2].responsive" width="284"
                  height="187" sizes="sm:100vw md:50vw lg:284px" />

              </a>
            </div>
            <div class="area-4 d-none d-lg-block" v-if="previewImages.length > 3">
              <a :href="previewImages[3].preview_url" data-fancybox="gallery" data-caption="Salon"
                class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
                <nuxt-img :src="previewImages[3].preview_url" :srcset="previewImages[3].responsive" width="284"
                  height="187" sizes="sm:100vw md:50vw lg:284px" />

              </a>
            </div>
            <div class="area-5 d-none d-lg-block" v-if="previewImages.length > 4">
              <div class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl last">
                <nuxt-img :src="previewImages[4].preview_url" :srcset="previewImages[4].responsive" width="284"
                  height="187" sizes="sm:100vw md:50vw lg:284px" />
                <div
                  class="hover-box position-absolute top-0 start-0 w-100 h-100 bg-theme-first-dark text-white fs-6 bg-opacity-75 d-flex align-items-center justify-content-center px-2 fw-medium ls-05 d-flex flex-column">
                  <span :href="previewImages[0].preview_url" data-fancybox="gallery" data-caption="Salon">Tüm Fotoğraflar
                    ( {{ previewImages.length }} ) </span>
                  <!-- <button type="button" @click.prevent="test()">Video İzle</button> -->
                  <a href="https://www.youtube.com/watch?v=5SMaakuGyH0" data-fancybox>
                    <i class="icon-play-button"></i> Video İzle
                  </a>
                  <!-- https://www.youtube.com/watch?v=5SMaakuGyH0 -->
                </div>
              </div>
            </div>

            <div class="d-none">
              <a v-for="previewImage in previewImages.slice(5)" :href="previewImage.preview_url" data-fancybox="gallery"
                data-caption="Salon">
                <nuxt-img :src="previewImage.preview_url" :srcset="previewImage.preview_url" width="284" height="187"
                  sizes="sm:100vw md:50vw lg:284px" /></a>
            </div>

          </div>
        </div>
        <div class="container search-otel">
          <search-hotel-detail-component :key="$route.path"></search-hotel-detail-component>
        </div>
      </section>

      <section class="Otel-desc ">
        <div class="container">
          <div class="Otel-desc-in">
            <div class="Otel-desc-text">
              <h2>{{ hotelDetails.body.hotel.name }} <span>Genel Bilgiler</span></h2>
              <div class="Otel-desc-text-in" :class="{ 'active': moreContent }"
                v-html="hotelDetails.body.hotel.description.text"></div>
              <button type="button" class="Otel-desc-text-more" @click="moreContentOpen">{{
                moreContent ? 'Daha Az Bilgi Göster' : 'Daha Fazla Bilgi Göster' }} </button>
            </div>
            <div class="Otel-desc-features">
              <h4>Tesis <span>Özellikleri</span></h4>
              <p class="Otel-desc-features-item" v-for="(item, index) in hotelDetails.body.hotel?.seasons?.[0]?.facilityCategories?.[0]?.facilities"
                v-if="index <= 4"><i class="icon-check-big"></i>{{ item.name }}</p>
              <b-button @click="mobileAmenitesToggle" class="Otel-desc-features-more">Tüm özellikleri gör</b-button>
            </div>
            <div class="Otel-desc-map" style="background-image: url(/img/map-bg.png);">
              <a :href="`https://www.google.com/maps/@${hotelDetails.body.hotel.geolocation.latitude},${hotelDetails.body.hotel.geolocation.longitude},16z`"
                target="_blank">
                <span>Haritada Göster</span>
                <i class="icon-search-new"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="V iew-mobile-modal" :class="{ 'show': mobileAmenites }">
        <button type="button" class="mobile-menus-back" @click="mobileAmenitesToggle"><i
          class="icon-left-arrow"></i></button>
        <div class="Amenites">
          <div class="Amenites-head">
            <div class="Amenites-head-in">
              <h3 class="Amenites-title">Tüm <b>özellikler</b></h3>
            </div>
          </div>
          <div class="Amenites-in">
            <div class="Amenites-item" v-for="(category, index) in hotelDetails.body.hotel?.seasons?.[0]?.facilityCategories">
              <span class="Amenites-item-title">{{ category.name }}</span>
              <div class="Amenites-item-in">
                <template v-if="category.facilities && category.facilities.length">
                  <template v-for="facility in category.facilities">
                    <p>{{ facility.name }}</p>
                  </template>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="rooms-section pt-3 mt-1">
        <div class="container">


          <template v-if="roomsLoading">
            Odalar yükleniyor...
          </template>
          <template v-else>
            <template v-for="(offer, offerIndex) in offers">
              <div class="room " v-for="room in offer.rooms">
                <div class="row">
                  <div
                    class="col-12 col-lg-8 col-xl-7 d-flex flex-column flex-sm-row pe-xl-4 mb-lg-0 mb-2 align-items-start">
                    <div class="img-box position-relative flex-shrink-0">
                      <img v-if="room.mediaFiles" :src="room.mediaFiles[0].urlFull" width="297" height="208"
                        alt="room image" class="lazy cover flex-shrink-0 ">
                      <div class="no-rooms" v-else>
                        <img src="/img/no-img.svg" alt="">
                        <p>Oda fotoğrafı <span>bulunmuyor.</span></p>
                      </div>
                    </div>
                    <div class="room-content flex-fill d-flex flex-column align-items-start justify-content-between">
                      <div class="d-flex align-items-center w-100 mb-2">
                        <span class="d-inline-block me-auto room-title">{{ room.roomName }}</span>
                      </div>
                      <div class="room-highlights d-flex flex-wrap w-100 fs-6 lh-sm mb-2 mb-sm-3">

                        <small v-for="group in room.boardGroups"
                          class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                          <i class="icon-check-big"></i> {{ group.name }}
                        </small>

                      </div>
                      <div class="d-flex align-items-center mb-sm-0 mb-1">
                        <b-button v-b-modal.amenitesModal class="room-highlights-more"><u><small>Odanın Tüm
                              Özellikleri</small></u></b-button>
                      </div>
                    </div>
                  </div>
                  <div class="room-scroll-wrapper col-12 col-lg-4 col-xl-5 ps-lg-0">
                    <div class="room-options d-flex flex-lg-column pb-lg-0 pb-1">
                      <div class="option d-flex flex-column flex-xl-row  flex-fill overflow-hidden">
                        <div
                          class="flex-fill d-flex flex-column justify-content-center fs-6 ps-3 ps-xl-4 pe-3 py-4 beforeborder">
                          <div class="option-all">
                            <span v-if="offerIndex === 0">En Ucuzu</span>
                            <b v-for="group in room.boardGroups">{{ group.name }}</b>
                          </div>
                          <div class="option-warning" v-if="offer.cancellationPolicies.length > 0">

                            <p class="free-cancellation">Ücretsiz İptal</p>
                            <p class="last-date"><i class="icon-info-month"></i>{{
                              $moment(offer.cancellationPolicies[0].dueDate).format('YYYY-MM-DD HH:mm') }} a kadar</p>
                          </div>
                        </div>
                        <div class="room-price">
                          <span>{{ offer.night }} GECE</span>
                          <div class="room-price-in">
                            <s v-if="offer.price.amount_old > 0">{{ offer.price.amount_old }}{{ offer.price.currency
                            }}</s>
                            <b>{{ offer.price.amount }}<small>{{ offer.price.currency }}</small></b>
                            <p>Gecelik <span>{{ (offer.price.amount / offer.night).toFixed(2) | numberFormat }}{{
                              offer.price.currency }}</span></p>
                          </div>
                          <a href="" @click.prevent="goReservation(offer)">Odayı Seç</a>
                        </div>
                      </div>

                      <!-- Diğer Fiyatlar için -->
                      <!-- <div class="option d-flex flex-column flex-xl-row  flex-fill overflow-hidden">
                        <div
                          class="flex-fill d-flex flex-column justify-content-center fs-6 ps-3 ps-xl-4 pe-3 py-4 beforeborder">
                          <div class="option-all">
                            <span>En Ucuzu</span>
                            <b>Oda Kahvaltı</b>
                          </div>
                          <div class="option-warning">
                            <p class="irrevocable">İptal Edilemez</p>
                          </div>
                        </div>
                        <div class="room-price">
                          <span>3 GECE</span>
                          <div class="room-price-in">
                            <s>16.500TL</s>
                            <b>412.420<small>TL</small></b>
                            <p>Gecelik <span>1.400TL</span></p>
                          </div>
                          <nuxt-link to="/">Odayı Seç</nuxt-link>
                        </div>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template v-if="!roomsLoading && offers.length === 0">
              Uygun oda bulunamadı...
            </template>
          </template>

        </div>
      </section>

      <section class="otel-reviews mt-5">
        <div class="container">
          <div class="otel-reviews-in">

            <div class="View-reviews comments view-menu-content-item" id="reviews-content">
              <div class="View-reviews-head">
                <div class="general-informations-section-title mb-0"><span>{{ hotelDetails.body.hotel.name }}</span> Değerlendirmesi</div>
                <div class="Otel-card-review mt-2">
                  <span>{{ hotelDetails.body.hotel.stars }}/5</span>
                  <p>Mükemmel <u>0 yorum</u></p>
                </div>
              </div>
              <div class="otel-reviews-item">
                <div class="otel-reviews-item-left">
                  <div class="otel-reviews-item-left-top">
                    <h6>Fatih ********</h6>
                    <span>Holiday</span>
                  </div>
                  <div class="otel-reviews-item-left-bottom">
                    <p><i class="icon-date"></i> Temmuz '22</p>
                  </div>
                </div>
                <div class="otel-reviews-item-right">
                  <div class="otel-reviews-item-right-head">
                    <div class="Otel-card-review">
                      <span>{{ hotelDetails.body.hotel.stars }}/5</span>
                      <b>Mükemmel</b>
                    </div>
                    <p>Yorum kaynağı <a href="">Google</a></p>
                  </div>
                  <div class="otel-reviews-item-right-text">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or randomised words which don't look even slightly
                      believable There are many variations of passages of Lorem Ipsum available, but the majority have
                      suffered alteration in some form, by injected humour, or randomised words which don't look even
                      slightly believable</p>
                  </div>
                </div>
              </div>
              <div class="otel-reviews-item">
                <div class="otel-reviews-item-left">
                  <div class="otel-reviews-item-left-top">
                    <h6>Fatih ********</h6>
                    <span>Holiday</span>
                  </div>
                  <div class="otel-reviews-item-left-bottom">
                    <p><i class="icon-date"></i> Temmuz '22</p>
                  </div>
                </div>
                <div class="otel-reviews-item-right">
                  <div class="otel-reviews-item-right-head">
                    <div class="Otel-card-review">
                      <span>{{ hotelDetails.body.hotel.stars }}/5</span>
                      <b>Mükemmel</b>
                    </div>
                    <p>Yorum kaynağı <a href="">Google</a></p>
                  </div>
                  <div class="otel-reviews-item-right-text">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or randomised words which don't look even slightly
                      believable There are many variations of passages of Lorem Ipsum available, but the majority have
                      suffered alteration in some form, by injected humour, or randomised words which don't look even
                      slightly believable</p>
                  </div>
                </div>
              </div>
              <div class="otel-reviews-item">
                <div class="otel-reviews-item-left">
                  <div class="otel-reviews-item-left-top">
                    <h6>Fatih ********</h6>
                    <span>Holiday</span>
                  </div>
                  <div class="otel-reviews-item-left-bottom">
                    <p><i class="icon-date"></i> Temmuz '22</p>
                  </div>
                </div>
                <div class="otel-reviews-item-right">
                  <div class="otel-reviews-item-right-head">
                    <div class="Otel-card-review">
                      <span>{{ hotelDetails.body.hotel.stars }}/5</span>
                      <b>Mükemmel</b>
                    </div>
                    <p>Yorum kaynağı <a href="">Google</a></p>
                  </div>
                  <div class="otel-reviews-item-right-text">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or randomised words which don't look even slightly
                      believable There are many variations of passages of Lorem Ipsum available, but the majority have
                      suffered alteration in some form, by injected humour, or randomised words which don't look even
                      slightly believable</p>
                  </div>
                </div>
              </div>
              <button class="otel-reviews-more" type="button">Tüm yorumları göster</button>

            </div>
          </div>
        </div>
      </section>

      <b-modal id="amenitesModal" class="Login" size="xl" :hide-header="true" hide-footer>
        <div class="Amenites otel">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
            @click="$bvModal.hide('amenitesModal')"><i class="icon-login-close"></i></button>

          <div class="Amenites-slider" style="position:relative">
            <b-carousel id="carousel-1" v-model="slide" controls img-width="1024" img-height="500">
              <b-carousel-slide :img-src="photo" v-for="(photo, index) in previewImages.map(image => image.responsive_url)" :key="index"></b-carousel-slide>
            </b-carousel>
            <div class="slide-numbers">
              {{ slide + 1 }}/{{ previewImages.map(image => image.responsive_url).length }}
            </div>
          </div>

          <div class="Amenites-head">
            <h3 class="Amenites-title">{{ hotelDetails.body.hotel.name }}</h3>
<!--            <h4 class="Amenites-title-sub">Standart İki Yataklı Oda / Penceresiz , 1 . Kat Twin NTT1 - 27 m2</h4>-->
          </div>

          <div class="Amenites-in">
            <div class="Amenites-item">
              <div class="Amenites-item-in">
                <p>Jakuzi</p>
                <p>Jakuzi</p>
                <p>Bilardo Masası</p>
                <p>Barbekü / Mangal Alanı</p>
                <p>Barbekü / Mangal Alanı</p>
              </div>
            </div>

          </div>
        </div>
      </b-modal>

    </main>
  </div>
</template>


<script>
import { Swiper, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import HotelDatePicker from "vue-hotel-datepicker2";
import "vue-hotel-datepicker2/dist/vueHotelDatepicker2.css";
import CloseVillaModal from '../modals/close-villa-modal.vue';
import { BCarousel } from 'bootstrap-vue'

export default {
  name: 'DynamicHotelDetailPage',
  props: ['hotelDetails', 'selectedFilters'],
  data() {
    return {
      searchId: null,
      hotel: this.hotelDetails,
      hotelPriceDetails: {},
      offerDetails: {},
      offers: [],
      roomsLoading: true,
      slide: 0,
      slidePhotos: ['https://picsum.photos/1024/480/?image=52', 'https://media.dev.paximum.com/hotelimages/101637/a6c2315890e2921cfdcbd10d85d79f45.jpg', 'https://picsum.photos/1024/480/?image=52', 'https://media.dev.paximum.com/hotelimages/101637/a6c2315890e2921cfdcbd10d85d79f45.jpg', 'https://picsum.photos/1024/480/?image=52', 'https://media.dev.paximum.com/hotelimages/101637/a6c2315890e2921cfdcbd10d85d79f45.jpg'],
      moreContent: false,
      moreFeatures: false,
      mobileAmenites: false,
    }
  },
  components: {
    BCarousel,
  },
  async mounted() {
    console.log(this.hotelDetails);
    // Adım 1: Hotel fiyatını al
    let response = await this.getHotelPrice();
    this.searchId = response.body?.searchId;

    // Adım 2: Offer ID'lerini al
    const offerIds = this.getOfferIds();

    // Adım 3: Oda detaylarını al
    const rooms = await this.getRoomDetails(offerIds);

    // Adım 4: Oda detaylarını offer'lara entegre et
    this.mergeRoomDetails(rooms);

    this.roomsLoading = false;
  },
  computed: {
    previewImages() {
      if (this.hotelDetails.body.custom?.hasOwnProperty('images') && this.hotelDetails.body.custom.images.length > 0) {
        return this.hotelDetails.body.custom.images
      } else if (this.hotelDetails.body.hotel.seasons?.[0]?.hasOwnProperty('mediaFiles')) {
        return this.hotelDetails.body.hotel.seasons[0].mediaFiles.map(media => {
          return {
            "preview_url": media.urlFull,
            "orginal_url": media.urlFull,
            "responsive_url": media.urlFull
          }
        })
      }
      return []
    }
  },
  watch: {
    mobileAmenites() {
      if (this.mobileAmenites == true) {
        setTimeout(() => {
          document.querySelector('body').classList.add('detail-over')
          document.querySelector('html').classList.add('detail-over')
        }, 50)
      } else {
        setTimeout(() => {
          document.querySelector('body').classList.remove('detail-over')
          document.querySelector('html').classList.remove('detail-over')
        }, 50)
      }
    }
  },
  methods: {
    mobileAmenitesToggle() {
      this.mobileAmenites = !this.mobileAmenites
    },
    goReservation(offer) {
      const url = process.env.HOTEL_RESERVATION + 'otel/payments?searchId=' + this.searchId + '&offerId=' + offer.offerId;
      window.open(url, '_blank');

    },
    async getHotelPrice() {
      let response = await this.$dataService.getHotelPrice(this.hotelDetails.body.hotel.id, this.selectedFilters);
      this.hotelPriceDetails = response.data;
      console.log(JSON.stringify(this.hotelPriceDetails));

      return response.data;
    },

    getOfferIds() {
      let offers = [];

      if (this.hotelPriceDetails.body && this.hotelPriceDetails.body.hotels) {
        this.hotelPriceDetails.body.hotels.forEach(hotel => {
          if (hotel.offers) {
            hotel.offers.forEach(offer => {
              offers.push(offer);
            });
          }
        });
      }

      this.offers = offers;
      return offers.map(offer => offer.offerId);
    },

    async getRoomDetails(offerIds) {
      const response = await this.$dataService.getRooms({ offerIds });
      return response.data;
    },

    async getOffers(searchId, offerId, productId) {
      const response = await this.$dataService.getOffers({ searchId, offerId, productId });
      return response.data;
    },

    async mergeRoomDetails(rooms) {

      for (const offer of this.offers) {
        if (offer.rooms && offer.rooms.length > 0) {
          // const response = await this.getOffers(this.searchId, offer.offerId, this.hotelDetails.body.hotel.id)
          // console.log(response)
          offer.rooms.forEach((room, roomIndex) => {
            let roomDetail = rooms.find(r => r.offerId == offer.offerId);
            if (roomDetail && roomDetail.mediaFiles) {
              offer.rooms[roomIndex] = Object.assign({}, room, { mediaFiles: roomDetail.mediaFiles });
            }
          });
        }
      }
    },
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    showGallery() {
      setTimeout(() => {
        document.querySelector('.Gallery').classList.add("show")
        document.querySelector('body').classList.add("over")
        document.querySelector('.main').classList.add("main-z")
      }, 50)
      this.galleryIsOpen = true
    },
    moreContentOpen() {
      this.moreContent = !this.moreContent
    },
  },
}
</script>
<style lang="scss">
.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

.carousel-item-next:not(.carousel-item-start),
.active.carousel-item-end {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-end),
.active.carousel-item-start {
  transform: translateX(-100%);
}


.carousel-fade {
  .carousel-item {
    opacity: 0;
    transition-property: opacity;
    transform: none;
  }

  .carousel-item.active,
  .carousel-item-next.carousel-item-start,
  .carousel-item-prev.carousel-item-end {
    z-index: 1;
    opacity: 1;
  }

  .active.carousel-item-start,
  .active.carousel-item-end {
    z-index: 0;
    opacity: 0;
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  // Use flex for alignment (1-3)
  display: flex; // 1. allow flex styles
  align-items: center; // 2. vertically center contents
  justify-content: center; // 3. horizontally center contents
  border: none;
  padding: 0;
  color: #fff;
  text-align: center;
  background: none;
  border: 0;
  opacity: 1;
  width: 41px;
  height: 41px;
  background: #fff;
  border-radius: 50%;

  .sr-only {
    display: none;
  }

  // Hover/focus state
  &:hover,
  &:focus {
    color: #fff;
    text-decoration: none;
    outline: 0;
    opacity: 1;
  }
}

.carousel-control-prev {
  left: 30px;
}

.carousel-control-next {
  right: 30px;
}

.carousel-control-prev-icon {
  width: 15px;
  height: 15px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  width: 15px;
  height: 15px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

// Optional indicator pips/controls
//
// Add a container (such as a list) with the following class and add an item (ideally a focusable control,
// like a button) with data-bs-target for each slide your carousel holds.

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 0;
  // Use the .carousel-control's width as margin so we don't overlay those
  margin-right: 0;
  margin-bottom: 1rem;
  margin-left: 0;
  list-style: none;

  [data-bs-target] {
    box-sizing: content-box;
    flex: 0 1 auto;
    padding: 0;
    margin-right: 0;
    margin-left: 0;
    text-indent: -999px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border: 0;
    // Use transparent borders to increase the hit area by 10px on top and bottom.
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    opacity: 1;

  }

  .active {
    opacity: 1;
  }
}

.slide-numbers {
  background-color: var(--bs-theme-third) !important;
  position: absolute;
  right: 0;
  bottom: 0;
  font-weight: 500;
  font-size: 30px;
  color: #F5F5F5;
  padding: 10px 35px;
}
</style>
