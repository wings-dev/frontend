<template>
  <div>
    <main class="main">
      <section class="view-detail-section otel">
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
                    <p>{{ hotelDetails.body.hotel.stars }} Yıldız <u v-if="this.comments && this.comments.data">{{ this.comments.data.count }} yorum</u></p>
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
                  </div>
                </div>
                <div class="View-menu-right">
                  <a target="_blank" @click="locationMapOpen"
                    class="map-view">Haritada Görüntüle</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container pb-1 pt-5 gallery-container">
          <div class="view-gallery">
            <div class="area-1" v-if="previewImages.length > 0">
              <a :href="previewImages[0].preview_url" data-fancybox="gallery" :data-caption="hotelDetails.body.hotel.name"
                class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
                <nuxt-img :src="previewImages[0].preview_url" :srcset="previewImages[0].responsive" width="585" loading="lazy" placeholder :alt="hotelDetails.body.hotel.name + ' ' + sitename"
                  height="387" sizes="sm:100vw md:50vw lg:585px" />

              </a>
            </div>
            <div class="area-2 d-md-block d-none" v-if="previewImages.length > 1">
              <a :href="previewImages[1].preview_url" data-fancybox="gallery" :data-caption="hotelDetails.body.hotel.name"
                class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
                <nuxt-img :src="previewImages[1].preview_url" :srcset="previewImages[1].responsive" width="284" loading="lazy" placeholder :alt="hotelDetails.body.hotel.name + ' ' + sitename"
                  height="187" sizes="sm:100vw md:50vw lg:284px" />

              </a>
            </div>
            <div class="area-3 d-md-block d-none" v-if="previewImages.length > 2">
              <a :href="previewImages[2].preview_url" data-fancybox="gallery" :data-caption="hotelDetails.body.hotel.name"
                class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
                <nuxt-img :src="previewImages[2].preview_url" :srcset="previewImages[2].responsive" width="284" loading="lazy" placeholder :alt="hotelDetails.body.hotel.name + ' ' + sitename"
                  height="187" sizes="sm:100vw md:50vw lg:284px" />

              </a>
            </div>
            <div class="area-4 d-none d-lg-block" v-if="previewImages.length > 3">
              <a :href="previewImages[3].preview_url" data-fancybox="gallery" :data-caption="hotelDetails.body.hotel.name"
                class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
                <nuxt-img :src="previewImages[3].preview_url" :srcset="previewImages[3].responsive" width="284" loading="lazy" placeholder :alt="hotelDetails.body.hotel.name + ' ' + sitename"
                  height="187" sizes="sm:100vw md:50vw lg:284px" />

              </a>
            </div>
            <div class="area-5 d-none d-lg-block" v-if="previewImages.length > 4">
              <div class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl last">
                <nuxt-img :src="previewImages[4].preview_url" :srcset="previewImages[4].responsive" width="284" loading="lazy" placeholder :alt="hotelDetails.body.hotel.name + ' ' + sitename"
                  height="187" sizes="sm:100vw md:50vw lg:284px" />
                <div
                  class="hover-box position-absolute top-0 start-0 w-100 h-100 bg-theme-first-dark text-white fs-6 bg-opacity-75 d-flex align-items-center justify-content-center px-2 fw-medium ls-05 d-flex flex-column">
                  <span :href="previewImages[0].preview_url" data-fancybox="gallery"
                    :data-caption="hotelDetails.body.hotel.name">Tüm Fotoğraflar
                    ( {{ previewImages.length }} ) </span>
                  <!-- <button type="button" @click.prevent="test()">Video İzle</button> -->
                  <a href="https://www.youtube.com/watch?v=5SMaakuGyH0" data-fancybox class="d-none">
                    <i class="icon-play-button"></i> Video İzle
                  </a>
                  <!-- https://www.youtube.com/watch?v=5SMaakuGyH0 -->
                </div>
              </div>
            </div>

            <div class="d-none">
              <a v-for="previewImage in previewImages.slice(4)" :href="previewImage.preview_url" data-fancybox="gallery"
                :data-caption="hotelDetails.body.hotel.name">
                <nuxt-img :src="previewImage.preview_url" :srcset="previewImage.preview_url" 
                width="284" height="187" loading="lazy" placeholder  :alt="hotelDetails.body.hotel.name + ' ' + sitename"
                  sizes="sm:100vw md:50vw lg:284px" /></a>
            </div>

          </div>
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
              <p class="Otel-desc-features-item"
                v-for="(item, index) in hotelDetails.body.hotel?.seasons?.[0]?.facilityCategories?.[0]?.facilities"
                v-if="index <= 4"><i class="icon-check-big"></i>{{ item.name }}</p>
              <b-button v-b-modal.amenitesModal class="Otel-desc-features-more"><u><small>Tüm özellikleri
                    gör</small></u></b-button>
            </div>
            <div class="Otel-desc-map" style="background-image: url(/img/map-bg.png);">
              <a @click="locationMapOpen">
                <span>Haritada Göster</span>
                <i class="icon-search-new"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div class="container search-otel mb-4">
        <search-hotel-detail-component :key="$route.path" @search="search($event)"></search-hotel-detail-component>
      </div>
      <section class="rooms-section pt-3 mt-1">
        <div class="container">


          <template v-if="roomsLoading">
            <div class="Loading">
              <lottie :width="168" :height="125" :options="loadingOptions" v-on:animCreated="handleAnimation" />
              <h4 class="Loading-title">Odalar hazırlanıyor...</h4>
              <h3 class="Loading-subtitle"><b>En uygun</b> fiyatları arıyoruz</h3>
            </div>
          </template>
          <template v-else>
            <template v-for="(offer, offerIndex) in offers">
              <div class="room" v-for="(room, roomIndex) in offer.rooms">
                <div class="row">
                  <div class="col-12 col-lg-8 col-xl-7 d-flex flex-column flex-sm-row pe-xl-4 mb-lg-0 mb-2 align-items-start">
                    <div class="img-box position-relative flex-shrink-0 room-img-container">
                      <nuxt-img v-if="room.roomInfo?.mediaFiles" :src="room.roomInfo.mediaFiles[0].urlFull" width="297" height="208" loading="lazy" placeholder 
                      :alt="hotelDetails.body.hotel.name + ' ' + sitename" class="lazy cover flex-shrink-0"></nuxt-img>
                      <div class="no-rooms" v-else>
                        <nuxt-img src="/img/no-img.svg" :alt="hotelDetails.body.hotel.name + ' ' + sitename" width="297" height="208" loading="lazy" placeholder ></nuxt-img>
                        <p>Oda fotoğrafı <span>bulunmuyor.</span></p>
                      </div>
                    </div>
                    <div class="room-content flex-fill d-flex flex-column align-items-start justify-content-between">
                      <div class="d-flex align-items-center w-100 mb-2">
                        <span class="d-inline-block me-auto room-title">{{ room.roomName }}</span>
                      </div>
                      <div class="room-highlights d-flex flex-wrap w-100 fs-6 lh-sm mb-2 mb-sm-3">
                        <small v-for="facility in room.roomInfo?.facilities?.slice(0,5) || []"
                               class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                          <i class="icon-check-big"></i> {{ facility.name }}
                        </small>
                      </div>
                      <div class="d-flex align-items-center mb-sm-0 mb-1" v-if="room.roomInfo?.facilities">
                        <b-button class="room-highlights-more" @click="showRoomDetails(room)"><u><small>Odanın Tüm
                          Özellikleri</small></u></b-button>
                      </div>
                    </div>
                  </div>
                  <div class="room-scroll-wrapper col-12 col-lg-4 col-xl-5 ps-lg-0">
                    <div class="room-options d-flex pb-lg-0 pb-1 mb-2" v-for="(roomOption, roomOptionIndex) in room.roomOptions">
                      <div class="option d-flex flex-fill overflow-hidden">
                        <div class="flex-fill d-flex flex-column justify-content-center fs-6 ps-3 ps-xl-4 pe-3 py-4 beforeborder">
                          <div class="option-all">
                            <span v-if="offerIndex === 0 && roomOptionIndex === 0">En Ucuzu</span>
                            <b v-for="group in roomOption.offer?.rooms?.[0]?.boardGroups">{{ group.name }}</b>
                          </div>
                          <div class="option-warning" v-if="roomOption.cancellationPolicies.length > 0">
                            <p class="free-cancellation">Ücretsiz İptal</p>
                            <p class="last-date"><i class="icon-info-month"></i>{{
                                $moment(roomOption.cancellationPolicies[0].dueDate).format('YYYY-MM-DD HH:mm') }} a kadar</p>
                          </div>
                        </div>
                        <div class="room-price">
                          <span>{{ roomOption.night }} GECE</span>
                          <div class="room-price-in">
                            <s v-if="roomOption.price.amount_old > 0">{{ parseFloat(roomOption.price.amount_old) | numberFormat }}{{ roomOption.price.currency }}</s>
                            <b>{{ parseFloat(roomOption.price.amount) | numberFormat }}<small>{{ roomOption.price.currency }}</small></b>
                            <p>Gecelik <span>{{ parseFloat((roomOption.price.amount / roomOption.night).toFixed(2)) | numberFormat }}{{
                                roomOption.price.currency }}</span></p>
                          </div>
                          <a href="" @click.prevent="goReservation(roomOption.offer)">Odayı Seç</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template v-if="!roomsLoading && offers.length === 0">
              <div class="No-villas">
                <nuxt-img :src="`img/site${site_id}/no-villas.svg`" :alt="hotelDetails.body.hotel.name + ' ' + sitename" loading="lazy" placeholder ></nuxt-img>
                <h2>Uygun oda bulunamadı.</h2>
                <p>Arama filtrenizi veya tarihi değiştirerek yeniden deneyebilirsiniz.</p>
              </div>
            </template>
          </template>

        </div>
      </section>

      <section class="otel-reviews mt-5">
        <div class="container">
          <div class="otel-reviews-in">

            <div class="View-reviews comments view-menu-content-item" id="reviews-content">
              <div class="View-reviews-head" v-if="comments && comments.data">
                <div class="general-informations-section-title mb-0">
                  <span>{{ hotelDetails.body.hotel.name }}</span>
                  Değerlendirmesi
                </div>
                <div class="Otel-card-review mt-2">
                  <span>{{ comments.data.averageScore }}/10</span>
                  <p>
                    {{ comments.data.averageScoreText }}
                    <u>{{ comments.data.count }} yorum</u>
                  </p>
                </div>
              </div>
              <hotel-comment :comment="comment" v-for="(comment,index) in comments?.data?.comments || []" :key="index" v-if="index < 10"></hotel-comment>
              <!-- <div class="otel-reviews-item" >
                <div class="otel-reviews-item-left">
                  <div class="otel-reviews-item-left-top">
                    <h6>
                      {{ comment.user?.name }} {{ comment.user?.surname }}
                    </h6>
                    <span>{{ comment.accommodation?.reason }}</span>
                  </div>
                  <div class="otel-reviews-item-left-bottom">
                    <p>
                      <i class="icon-date"></i>
                      {{ new Date(comment.commentDate).toLocaleString('tr-TR', { month: 'long', year: 'numeric' }) }}
                    </p>
                  </div>
                </div>
                <div class="otel-reviews-item-right">
                  <div class="otel-reviews-item-right-head">
                    <div class="Otel-card-review">
                      <span :style="{ 'background-color': comment.scoreColor }">{{ comment.score }}/10</span>
                      <b>{{ comment.scoreText }}</b>
                    </div>
                    <p>
                      Yorum kaynağı
                      <b>{{ comment.provider }}</b>
                    </p>
                  </div>
                  <div class="otel-reviews-item-right-text">
                    <p>{{ comment.contents?.[0]?.content }}</p>
                  </div>
                </div>
              </div> -->
              <button class="otel-reviews-more d-none" type="button" v-if="comments?.data?.comments.length">Tüm yorumları göster</button>
            </div>
          </div>
        </div>
      </section>

      <b-modal id="roomAmenitesModal" modal-class="Amenites-modal" :hide-header="true" hide-footer>
        <div class="Amenites otel" v-if="selectedRoom">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
            @click="$bvModal.hide('roomAmenitesModal')"><i class="icon-login-close"></i></button>

          <div class="Amenites-slider" style="position:relative">
            <b-carousel id="carousel-1" v-model="slide" controls img-width="800" img-height="415">
              <b-carousel-slide :img-src="photo"
                v-for="(photo, index) in selectedRoom.roomInfo.mediaFiles.map(image => image.urlFull)"
                :key="index"></b-carousel-slide>
            </b-carousel>
            <div class="slide-numbers">
              {{ slide + 1 }}/{{ selectedRoom.roomInfo.mediaFiles.length }}
            </div>
          </div>

          <div class="Amenites-head">
            <h3 class="Amenites-title">{{ selectedRoom.roomName }}</h3>
            <h4 class="Amenites-title-sub">Tüm <b>özellikler</b></h4>
          </div>

          <div class="Amenites-in">
            <div class="Amenites-item">
              <!--<span class="Amenites-item-title">Özellikler</span>-->
              <div class="Amenites-item-in">
                <p v-for="facility in selectedRoom.roomInfo.facilities">{{ facility.name }}</p>
              </div>
            </div>
          </div>


        </div>
      </b-modal>

      <amenites-modal :amenitelist="hotelDetails.body.hotel?.seasons?.[0]?.facilityCategories?.[0]?.facilities"></amenites-modal>
      <location-map-modal :villalocationcity="hotelDetails.body.hotel.city.name" :villalocationdistrict="hotelDetails.body.hotel.country.name"
      :villacode="hotelDetails.body.hotel.name" :latitude="hotelDetails.body.hotel.geolocation.latitude" :longitude="hotelDetails.body.hotel.geolocation.longitude"></location-map-modal>
    </main>
  </div>
</template>

<script>
import 'swiper/swiper-bundle.min.css'
import "vue-hotel-datepicker2/dist/vueHotelDatepicker2.css";
import { BCarousel } from 'bootstrap-vue'
import AmenitesModal from '../modals/amenites-modal.vue';
import LocationMapModal from '../modals/map-modal.vue';
import HotelComment from '@/components/hotel/hotel-comment.vue';
import lottie from 'vue-lottie/src/lottie.vue'

export default {
  name: 'DynamicHotelDetailPage',
  props: ['hotelDetails', 'selectedFilters', 'comments'],
  data() {
    return {
      site_id:process.env.SITE,
      sitename: process.env.SITE_NAME,
      searchId: null,
      hotel: this.hotelDetails,
      hotelPriceDetails: {},
      offerDetails: {},
      offers: [],
      selectedRoom: null,
      roomsLoading: true,
      slide: 0,
      moreContent: false,
      moreFeatures: false,
      mobileAmenites: false,
      anim: null, // for saving the reference to the animation
      loadingOptions: {
        animationData: require(`~/assets/animation/site${process.env.SITE}/otel_loading.json`),
        loop: true,
        autoplay: true,
      },
    }
  },
  components: {
    BCarousel, lottie,AmenitesModal,LocationMapModal,HotelComment
  },
  async mounted() {
  
    this.roomSearch()

    console.log(this.previewImages)
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
    showRoomDetails(room) {
      this.selectedRoom = JSON.parse(JSON.stringify(room))

      this.$nextTick(() => {
        this.$bvModal.show('roomAmenitesModal')
      })
    },
    handleAnimation: function (anim) {
      this.anim = anim;
    },
    async roomSearch() {
      this.selectedRoom = null;
      this.roomsLoading = true;

      // Adım 1: Hotel fiyatını al
      let response = await this.getRooms();
      this.searchId = response.body?.searchId;

      this.roomsLoading = false;
    },
    async getRooms() {
      // Otel odalarını ve teklifleri al
      let response = await this.$dataService.getRooms({ ...this.selectedFilters, id: this.hotelDetails?.body?.hotel?.id });
      const roomInfos = response?.data?.body?.roomInfos || [];
      const offers = response?.data?.body?.offers || [];

      // Oda bilgilerini (roomInfo) ilgili oda nesnelerine aktar
      offers.forEach((offer) => {
        offer.rooms = offer.rooms || [];
        offer.rooms.forEach((room) => {
          room.roomInfo = room.roomInfoId
            ? roomInfos.find((roomInfo) => roomInfo.id === room.roomInfoId) || null
            : null;
        });
      });

      // Aynı oda adına sahip tekliflerin odalarını birleştirmek için yeni bir dizi oluştur
      const mergedOffers = [];

      // Teklifleri döngüye al ve aynı oda adına sahip olanları birleştir
      offers.forEach((offer) => {
        offer.rooms.forEach((room) => {
          // Aynı oda adına sahip mevcut bir teklif bul
          const existingOffer = mergedOffers.find((mergedOffer) =>
            mergedOffer.rooms.some((mergedRoom) => mergedRoom.roomName === room.roomName)
          );

          // Eğer mevcut bir teklif varsa, yeni oda seçeneğini mevcut odaya ekle
          if (existingOffer) {
            const existingRoom = existingOffer.rooms.find((mergedRoom) => mergedRoom.roomName === room.roomName);
            existingRoom.roomOptions.push({
              night: offer.night,
              isRefundable: offer.isRefundable,
              cancellationPolicies: offer.cancellationPolicies,
              price: offer.price,
              offer: JSON.parse(JSON.stringify(offer))
            });
          } else {
            // Mevcut bir teklif yoksa, yeni teklif ve oda seçeneğini mergedOffers dizisine ekle
            mergedOffers.push({
              ...offer,
              rooms: [
                {
                  ...room,
                  roomOptions: [
                    {
                      night: offer.night,
                      isRefundable: offer.isRefundable,
                      cancellationPolicies: offer.cancellationPolicies,
                      price: offer.price,
                      offer: JSON.parse(JSON.stringify(offer))
                    },
                  ],
                },
              ],
            });
          }
        });
      });

      // Birleştirilmiş teklifleri ana teklifler dizisine ata ve API yanıtını döndür
      this.offers = mergedOffers;
      return response?.data;
    },
    search(queryParams) {
      this.selectedFilters.adult = queryParams.adult.toString()
      this.selectedFilters.checkIn = queryParams.checkIn.toString()
      this.selectedFilters.checkOut = queryParams.checkOut.toString()
      this.selectedFilters.childAges = queryParams.childAges

      this.roomSearch()
    },
    mobileAmenitesToggle() {
      this.mobileAmenites = !this.mobileAmenites
    },
    goReservation(offer) {
      const url = process.env.HOTEL_RESERVATION + 'otel/payments?searchId=' + this.searchId + '&offerId=' + offer.offerId + '&adult=' + this.selectedFilters.adult + '&children=' + this.selectedFilters.childAges.length;
      window.open(url, '_blank');
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
    locationMapOpen() {
      this.$bvModal.show('locationMapModal')
    },
  }
}
</script>
<style lang="scss"></style>
