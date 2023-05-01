<template>
  <div>
    <div class="F_villa-item opportunity">
      <div class="F_villa-item-img">
        <div class="swiper villa-list-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(image, index) in villa.preview_image" :key="index">
              <nuxt-link :to="{path: villa.url ,query: detailUrlData}">
                <nuxt-img :src="global_cdn + image.preview_url"  :alt="prefix + villa.code + ' ' + sitename" :srcset="generateSrcset(image.responsive_url)" loading="lazy" sizes="sm:100vw md:50vw lg:400px" placeholder v-if="villa.code < 9999"/>
                <nuxt-img :src="global_cdn + image.preview_url"  :alt="prefix + villa.code + ' ' + sitename" loading="lazy" sizes="sm:100vw md:50vw lg:400px" placeholder v-else/>
                <!-- <nuxt-img :src="global_cdn + image.preview_url" :srcset="global_cdn + image.responsive_url" :alt="prefix + villa.code + ' ' + sitename" loading="lazy" sizes="sm:100vw md:50vw lg:400px" placeholder /> -->
              </nuxt-link>
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
        <div class="F_villa-item-opportunity" v-if="villa?.total?.day">
          <b>{{villa.total.day}}</b>
          <span>GECE</span>
        </div>
      </div>
      <nuxt-link :to="{path: villa.url ,query: detailUrlData}" class="F_villa-item-right">
        <div class="F_villa-item-head">
          <div class="F_villa-item-head-name">
            <span>Tesis Kodu</span>

            <nuxt-link :to="{path: villa.url ,query: detailUrlData}">{{ prefix + villa.code }}</nuxt-link>
            <div class="F_villa-item-head-name-star d-none">
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
              <!-- <p>{{ villa.city[0].toUpperCase() + villa.city.substring(1) }}</p> -->
              <p>{{ villa.city | titlecase }}
                <span>{{ villa.country | titlecase }} /
                  {{ villa.city | titlecase }} </span>
              </p>
            </div>
          </div> 
          <div class="F_villa-item-head-price F_villa-item-head-price-promotion with-price" v-if="checkindate">
            <div class="F_villa-item-head-price-in">
              <p>{{ villa.total.day }} GECE</p>
              <strong>{{ checkin }} - {{ checkout }}</strong>
            </div>
            <b>{{ villa.total.total | numberFormat }}<span>{{ villa.total.price_currency == '₺' ? 'TL' : villa.total.price_currency }}</span></b>

          </div>
          <div class="F_villa-item-head-price F_villa-item-head-price-promotion with-price" v-else-if="villa.start_date">
            <div class="F_villa-item-head-price-in">
              <p>{{ villa.total.day }} GECE</p>
              <strong>{{ villa.start_date | formatDate('DD-MM-YYYY', 'DD MMM') }} - {{ villa.end_date | formatDate('DD-MM-YYYY', 'DD MMM') }}</strong>
            </div>
            <b>{{ villa.total.total | numberFormat }}<span>{{ villa.total.price_currency == '₺' ? 'TL' : villa.total.price_currency }}</span></b>

          </div>
          <div class="F_villa-item-head-price F_villa-item-head-price-promotion" v-else>

            <div class="F_villa-item-head-price-in">
              <span>GECELİK</span>
              <b v-if="villa.prices">{{ villa.prices.min_price.price | numberFormat }}<span>{{villa.prices.min_price.price_currency }}</span></b>
              <b v-if="villa.total">{{ villa.total.total | numberFormat }}<span>{{ villa.total.price_currency }}</span></b>
              <p>‘den başlayan fiyatlar</p>
            </div>


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

        <div class="F_villa-item-bottom " :class="{ 'price': checkindate, 'day-price' : villa.start_date }">
          <div class="F_villa-item-features">
            <h6>Öne çıkan özellikleri</h6>
            <div class="F_villa-item-features-in">
              <p class="F_villa-item-features-item" v-for="(amenite, index2) in amenitesList(villa)" :key="index2">{{
                amenite }}</p>
              <!-- <p class="F_villa-item-features-item F_villa-item-features-more"><a :href="villa.url" class="">Tümünü Gör</a> -->
            </div>

          </div>
          
          <div class="F_villa-item-bottom-price " v-if="checkindate">
            <div class="F_villa-item-bottom-price-in">
              <p class="F_villa-item-bottom-price-in-day"><span>{{ villa.total.day }}</span> GECE</p>
              <div class="F_villa-item-bottom-price-in-date">
                <p><span>{{ checkin }}</span><i class="icon-arrow-right-2"></i><span>{{ checkout }}</span></p>
                <small>Fırsatı kaçırma!</small>
              </div>
            </div>
            <div class="F_villa-item-bottom-price-right">
              <p class="orange">TOPLAM FİYAT</p>
              <p><b>{{ villa.total.total | numberFormat }}</b><span>TL</span></p>
            </div>
          </div>
          <div class="F_villa-item-bottom-price " v-else-if="villa.start_date">
            <div class="F_villa-item-bottom-price-in">
              <p class="F_villa-item-bottom-price-in-day"><span>{{ villa.total.day }}</span> GECE</p>
              <div class="F_villa-item-bottom-price-in-date">
                <p><span>{{ villa.start_date | formatDate('DD-MM-YYYY', 'DD MMM') }}</span><i class="icon-arrow-right-2"></i><span>{{ villa.end_date | formatDate('DD-MM-YYYY', 'DD MMM') }}</span></p>
                <small>Fırsatı kaçırma!</small>
              </div>
            </div>
            <div class="F_villa-item-bottom-price-right">
              <p class="orange">TOPLAM FİYAT</p>
              <p><b>{{ villa.total.total | numberFormat }}</b><span>TL</span></p>
            </div>
          </div>
          <div class="F_villa-item-bottom-price" v-else>
            <p v-if="villa.prices">{{ villa.prices.min_price.price | numberFormat }}{{villa.prices.min_price.price_currency }} - {{villa.prices.max_price.price | numberFormat }}{{ villa.prices.max_price.price_currency }}
              <span>/Gecelik</span>
            </p>
            <p v-if="villa.total">
              {{ villa.total.total | numberFormat }}{{ villa.total.price_currency }}
              <span>/Gecelik</span>
            </p>
            <small>Fiyat Aralığında</small>
          </div>
          <button type="button" class="F_villa-item-show" @click.prevent="openModal(villa.code)"><i
              class="icon-calendar"></i>Müsaitlik Takvimi
          </button>
          <nuxt-link :to="{path: villa.url ,query: detailUrlData}" class="F_villa-item-more">
            <i class="icon-right-arrow"></i>
            <i class="icon-right-arrows-new"></i>
          </nuxt-link>
        </div>
      </nuxt-link>
    </div>

    <b-modal :id="`modal-${code}`" :ref="`modalRef-${code}`" class="Login" size="xl" :hide-header="true" hide-footer>
      <div class="Login Calendar">
        <button type="button" class="btn-close" aria-label="Close" @click="$bvModal.hide(`modal-${code}`)"><i
            class="icon-login-close"></i></button>
        <div class="Login-calendar-head">
          <h3 class=""><span>{{ prefix + villa.code }}</span> Müsaitlik Takvimi</h3>
          <div class="View-availibility-legand mt-2">
                <div class="View-availibility-legand-item">
                  <span class="close-day"><i class="icon-time-1"></i></span>
                  <p>Onay Bekleniyor</p>
                </div>
                <div class="View-availibility-legand-item">
                  <span>/</span>
                  <p>Dolu</p>
                </div>
              </div>
        </div>
        <client-only>
          <availibility-calendar :code="code" :calendarColumns="3" :calendarRows="2"
            :calendarStep="5"></availibility-calendar>
        </client-only>
      </div>
    </b-modal>

  </div>
</template>

<script>
import { Swiper, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import moment from "moment";
import cdnSrcsetMixin from '@/mixins/cdnSrcsetMixin';
export default {
  name: "FilterVillaPreviewComponent",
  props: ['villa', 'checkindate', 'checkoutdate'],
  mixins: [cdnSrcsetMixin],
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
      sitename: process.env.SITE_NAME,
      global_cdn: process.env.GLOBAL_CDN_URL,
      checkin: null,
      checkout: null
    }
  },
  computed: {
    isFavorite() {
      return this.$store.state.favorite.favorites.includes(this.villa.code)
    },
    code() {
      return this.villa.code
    },
    detailUrlData() {
      const query = this.$route.query;
      let data = null;
      if (query.checkIn && query.checkOut) {
        data = { i: this.encodeTimestamp(query.checkIn), o: this.encodeTimestamp(query.checkOut), v: localStorage.getItem('visitorId') };
      } else if (this.villa.start_date && this.villa.end_date) {
        const i = moment(this.villa.start_date, 'DD-MM-YYYY').format('YYYY-MM-DD')
        const o = moment(this.villa.end_date, 'DD-MM-YYYY').format('YYYY-MM-DD')
        data = { i: this.encodeTimestamp(i), o: this.encodeTimestamp(o), v: localStorage.getItem('visitorId') }
      }
      return data
    }
  },
  methods: {
    goDetail() {
      const query = this.$route.query;
      let data = null;
      if (query.checkIn && query.checkOut) {
        data = { i: this.encodeTimestamp(query.checkIn), o: this.encodeTimestamp(query.checkOut), v: localStorage.getItem('visitorId') };
      } else if (this.villa.start_date && this.villa.end_date) {
        const i = moment(this.villa.start_date, 'DD-MM-YYYY').format('YYYY-MM-DD')
        const o = moment(this.villa.end_date, 'DD-MM-YYYY').format('YYYY-MM-DD')
        data = { i: this.encodeTimestamp(i), o: this.encodeTimestamp(o), v: localStorage.getItem('visitorId') }
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
    openModal(villaCode) {
      this.$refs[`modalRef-${villaCode}`].show();
    },
    formatDate(value, valueout) {
      const currentDate = new Date(value);
      const formattedDate = currentDate.toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'short',
      }).toUpperCase();

      const currentDateOut = new Date(valueout);
      const formattedDateOut = currentDateOut.toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'short',
      }).toUpperCase();

      this.checkin = formattedDate
      this.checkout = formattedDateOut

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
    this.formatDate(this.checkindate, this.checkoutdate)

  }
}
</script>

<style scoped></style>
