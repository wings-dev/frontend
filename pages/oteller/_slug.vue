<template>
  <main class="main">

    <div class="Banner-otel" style="background-image: url(/img/istanbulotel.jpg);">
      <div class="container">
        <div class="Banner-otel-in">
          <div class="Banner-otel-text">
            <h1>İstanbul Otelleri Ara</h1>
            <p>Taksim Meydanı ve İstiklal Caddesi'nin yanı başında yer alan ve İstanbul'un büyük iş merkezlerine
              kısa bir yürüyüşle ulaşabileceğiniz Divan İstanbul, güzel konumuyla iş seyahatlerinin yanında
              tarih
              ve kültür gezileri için de tercih ediliyor.</p>
          </div>
          <search-hotel-detail-component :key="$route.path"></search-hotel-detail-component>
        </div>
      </div>
    </div>

    <section class="O_List-card">
      <div class="container">
        <div class="O_List-card-in">
          <div class="O_List-card-item" v-for="hotel in hotels">
            <div class="O_List-card-item-img">
              <img :src="cdn + hotel.images?.[0]?.ImageUrl" alt="">
            </div>
            <div class="O_List-card-item-content">
              <div class="O_List-card-item-content-head">
                <div class="O_List-card-item-content-head-in">
                  <b>{{hotel.Name}}</b>
                  <nuxt-link to="/">{{hotel.DestinationName}}</nuxt-link>
                </div>
                <div class="O_List-card-item-reviews mobile">
                  <span>4/5</span>
                  <p>Mükemmel <u>0 yorum</u></p>
                </div>
              </div>
              <template v-if="hotel.descriptions.length > 0">
                <p v-html="hotel.descriptions[0].Description"></p>
              </template>
            </div>
            <div class="O_List-card-item-link">
              <div class="O_List-card-item-reviews desktop">
                <span>4/5</span>
                <p>Mükemmel <u>0 yorum</u></p>
              </div>
              <nuxt-link :to="detailUrl(hotel)">Fiyatları Göster</nuxt-link>
            </div>
          </div>
          <nav class="w-100 mt-5">
            <ul class="w-100 pagination d-flex flex-wrap justify-content-center align-items-center">
              <!-- Go to First Page -->
              <li class="page-item me-2 me-sm-3 mb-1" v-if="current_page > 1">
                <a href="javascript:void(0)" @click.prevent="goToPage(1)"
                   class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary bg-theme-light-2">
                  <svg width="7px" height="11px" viewBox="0 0 7 11" version="1.1" xmlns="http://www.w3.org/2000/svg"
                       xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="VillaListeleme" transform="translate(-860.000000, -2875.000000)" fill="#AFAFB6"
                         fill-rule="nonzero">
                        <g id="Group-27" transform="translate(837.000000, 2861.000000)">
                          <g id="right-arrow-(3)-copy"
                             transform="translate(26.954957, 19.166042) scale(-1, 1) translate(-26.954957, -19.166042) translate(23.919953, 14.000000)">
                            <path
                              d="M5.9052,4.762884 L1.307292,0.16506 C1.200948,0.058632 1.058988,0 0.90762,0 C0.756252,0 0.614292,0.058632 0.507948,0.16506 L0.169344,0.50358 C-0.050988,0.724164 -0.050988,1.082676 0.169344,1.302924 L4.03032,5.1639 L0.16506,9.02916 C0.058716,9.135588 0,9.277464 0,9.428748 C0,9.5802 0.058716,9.722076 0.16506,9.828588 L0.503664,10.167024 C0.610092,10.273452 0.751968,10.332084 0.903336,10.332084 C1.054704,10.332084 1.196664,10.273452 1.303008,10.167024 L5.9052,5.565 C6.011796,5.458236 6.070344,5.315688 6.07000944,5.164152 C6.070344,5.012028 6.011796,4.869564 5.9052,4.762884 Z"
                              id="Path"></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>

              <!-- Page numbers -->
              <li class="page-item me-2 me-sm-3 mb-1" v-if="showLeftDots">
                <a href="javascript:void(0)"
                   class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">
                  <span aria-hidden="true">&hellip;</span>
                </a>
              </li>
              <li class="page-item me-2 me-sm-3 mb-1" v-for="(pageNumber, index) in displayedPageNumbers" :key="index">
                <a href="javascript:void(0)"
                   class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary"
                   :class="{ 'active': pageNumber === current_page }" @click.prevent="goToPage(pageNumber)">
                  {{ pageNumber }}
                </a>
              </li>
              <li class="page-item me-2 me-sm-3 mb-1" v-if="showRightDots">
                <a href="javascript:void(0)"
                   class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">
                  <span aria-hidden="true">&hellip;</span>
                </a>
              </li>

              <!-- 3 dots -->
              <!--              <li class="page-item me-2 me-sm-3 mb-1">
                              <svg width="23px" height="5px" viewBox="0 0 23 5" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                   xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <g id="VillaListeleme" transform="translate(-1109.000000, -2877.000000)" fill="#AFAFB6">
                                    <g id="Group-27" transform="translate(837.000000, 2861.000000)">
                                      <g id="Group-16" transform="translate(272.000000, 16.000000)">
                                        <circle id="Oval" cx="2.5" cy="2.5" r="2.5"></circle>
                                        <circle id="Oval-Copy" cx="11.5" cy="2.5" r="2.5"></circle>
                                        <circle id="Oval-Copy-2" cx="20.5" cy="2.5" r="2.5"></circle>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </li>-->

              <!-- Go to Last Page -->
              <li class="page-item me-2 me-sm-3 mb-1" v-if="current_page < totalPages">
                <a href="javascript:void(0)" @click.prevent="goToPage(totalPages)"
                   class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary bg-theme-light-2">
                  <svg width="7px" height="11px" viewBox="0 0 7 11" version="1.1" xmlns="http://www.w3.org/2000/svg"
                       xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="VillaListeleme" transform="translate(-1374.000000, -2875.000000)" fill="#AFAFB6"
                         fill-rule="nonzero">
                        <g id="Group-27" transform="translate(837.000000, 2861.000000)">
                          <g id="Group-19" transform="translate(514.000000, 0.000000)">
                            <g id="right-arrow-(3)" transform="translate(23.010038, 14.000000)">
                              <path
                                d="M5.9052,4.762884 L1.307292,0.16506 C1.200948,0.058632 1.058988,0 0.90762,0 C0.756252,0 0.614292,0.058632 0.507948,0.16506 L0.169344,0.50358 C-0.050988,0.724164 -0.050988,1.082676 0.169344,1.302924 L4.03032,5.1639 L0.16506,9.02916 C0.058716,9.135588 0,9.277464 0,9.428748 C0,9.5802 0.058716,9.722076 0.16506,9.828588 L0.503664,10.167024 C0.610092,10.273452 0.751968,10.332084 0.903336,10.332084 C1.054704,10.332084 1.196664,10.273452 1.303008,10.167024 L5.9052,5.565 C6.011796,5.458236 6.070344,5.315688 6.07000944,5.164152 C6.070344,5.012028 6.011796,4.869564 5.9052,4.762884 Z"
                                id="Path"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>

    <section class="highlight-section bg-theme-light-2  pb-4 ">
      <div class="container">
        <div class="row pt-4 pb-md-2">
          <div class="note-box col-12 col-lg-12 pe-lg-5">
            <h1 class="highlight-section-title">İstanbul hakkında</h1>
            <p class="highlight-section-desc" :class="{ active: isExpanded }" v-html="content">
            </p>

            <div class="highlight-section-desc-more-button read-more-button" :class="{ active: isExpanded }"
                 @click="isExpanded = !isExpanded"><i class="readmore"></i> {{ !isExpanded ? 'TAMAMINI OKU' :
              'DAHA AZ OKU' }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="List mt-4">
      <div class="container">
        <div class="List-sss">
          <h3>En çok sorulan sorular </h3>
          <div class="accordion" id="Faq">
            <div class="accordion-item">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                Nasıl rezervasyon yapabilirim ?
              </button>
              <div id="faq1" class="accordion-collapse collapse " data-bs-parent="#Faq">
                <div class="accordion-body">
                  <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi
                    yemeklerinizi
                    pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                Kaç Kişi Konaklayabiliyoruz ?
              </button>
              <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#Faq">
                <div class="accordion-body">
                  <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi
                    yemeklerinizi
                    pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                Yemek servisi hizmetiniz var mı ?
              </button>
              <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#Faq">
                <div class="accordion-body">
                  <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi
                    yemeklerinizi
                    pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                Yemek servisi hizmetiniz var mı ?
              </button>
              <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#Faq">
                <div class="accordion-body">
                  <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi
                    yemeklerinizi
                    pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="Blog-more mt-5">
      <div class="container">
        <div class="Blog-more-in">
          <div class="Blog-more-head">
            <h2><b>Antalya </b>hakkında daha fazla</h2>
            <div class="swiper-pagination"></div>
          </div>
          <div class="Blog-more-slider">
            <div class="swiper blog-slider-more">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in 4" :key="index">
                  <a class="Blog-item">
                    <div class="Blog-item-img">
                      <img src="/img/blog.png" alt="">
                      <div class="Blog-item-img-text">
                        <h6>Roots in a piece of classical Latin literature</h6>
                      </div>
                      <div class="Blog-item-date">
                        <div class="Blog-item-date-month">
                          <b>03</b>
                          <span>MART</span>
                        </div>
                        <div class="Blog-item-date-year">
                          <span>2023</span>
                        </div>
                      </div>
                      <div class="Blog-item-more">Devamını Oku</div>
                    </div>
                    <div class="Blog-item-text">
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                        roots in a
                        piece of classical Latin literature from 45 BC, making it over 2000 years
                        old.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script>
import { Swiper, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import slugify from "slugify";
export default {
  name: 'HotelsDynamicPage',
  layout: 'no-search',
  data() {
    return {
      destination_id: null,
      hotels:[],
      current_page: 1,
      per_page: 10,
      total_items: 0,
      isExpanded: false,
      isExpanded2: false,
      content: `Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
                  masmavi denizi ile ünlü bir adres. Fethiye’nin tadını gerçekten çıkarmak isteyenler içinse, en
                  mantıklı seçenek villa kiralama. Günlük ya da haftalık villa tatili yapmak isteyenlere jakuzili,
                  kapalı havuzlu ya da bahçeli kiralık villa alternatifleri sunulan
                  Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.
                  Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
                  masmavi denizi ile ünlü bir adres. Fethiye’nin tadını gerçekten çıkarmak isteyenler içinse, en
                  mantıklı seçenek villa kiralama. Günlük ya da haftalık villa tatili yapmak isteyenlere jakuzili,
                  kapalı havuzlu ya da bahçeli kiralık villa alternatifleri sunulan
                  Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.
                  Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
                  masmavi denizi ile ünlü bir adres. Fethiye’nin tadını gerçekten çıkarmak isteyenler içinse, en
                  mantıklı seçenek villa kiralama. Günlük ya da haftalık villa tatili yapmak isteyenlere jakuzili,
                  kapalı havuzlu ya da bahçeli kiralık villa alternatifleri sunulan
                  Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.
                  Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
                  masmavi denizi ile ünlü bir adres. Fethiye’nin tadını gerçekten çıkarmak isteyenler içinse, en
                  mantıklı seçenek villa kiralama. Günlük ya da haftalık villa tatili yapmak isteyenlere jakuzili,
                  kapalı havuzlu ya da bahçeli kiralık villa alternatifleri sunulan
                  Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.`,
      cdn: process.env.HOTEL_CDN_URL + '/'
    }
  },
  async asyncData({route, $axios}) {
    const path = route.params.slug;
    const split = path.split('-');
    const destination_id = split[split.length - 1];

    const response = await $axios.get((process.server ? 'http://localhost:' + process.env.NODE_PORT : '') + `/website/destination-hotels/${destination_id}?api_token=${process.env.WEBSITE_TOKEN}`)
    let hotels = response.data.data;
    const per_page = response.data.per_page;
    const total_items = response.data.total;
    const current_page = response.data.current_page;

    return {hotels, per_page, total_items, current_page, destination_id}
  },
  mounted() {
    Swiper.use([Navigation, Pagination])

    const swiper4 = new Swiper('.list-slide-otel', {
      slidesPerView: 1.1,
      spaceBetween: 10,
      direction: 'horizontal',
      loop: true,
      observer: true,
      observeParents: true,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1199: {
          slidesPerView: 4,
        },
      },
    })
    const swiper = new Swiper('.blog-slider-more', {
      slidesPerView: 3,
      spaceBetween: 18,
      // loop: true,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 18,
        },

      },
    })
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total_items / this.per_page);
    },
    pageNumbers() {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    },
    displayedPageNumbers() {
      const currentIndex = this.pageNumbers.indexOf(this.current_page);
      const leftIndex = Math.max(currentIndex - 3, 0);
      const rightIndex = Math.min(currentIndex + 3, this.pageNumbers.length - 1);
      const displayedNumbers = this.pageNumbers.slice(leftIndex, rightIndex + 1);
      return displayedNumbers;
    },
    showLeftDots() {
      const currentIndex = this.pageNumbers.indexOf(this.current_page);
      return currentIndex > 3;
    },
    showRightDots() {
      const currentIndex = this.pageNumbers.indexOf(this.current_page);
      return currentIndex < this.pageNumbers.length - 4;
    }
  },
  methods: {
    async filter(page = 1) {
      const response = await this.$axios.get( `/website/destination-hotels/${this.destination_id}?page=${page}&api_token=${process.env.WEBSITE_TOKEN}`)
      this.hotels = response.data.data;
      this.per_page = response.data.per_page;
      this.total_items = response.data.total;
      this.current_page = response.data.current_page;
    },
    detailUrl(hotel) {
      return '/otel/' + slugify(hotel.Name.toLowerCase()) + '-' + hotel.Id
    },
    goToPage(pageNumber) {
      if (pageNumber === this.current_page) return;
      this.current_page = pageNumber;
      this.filter(pageNumber);
    },
  }
}
</script>

