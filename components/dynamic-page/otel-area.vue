<template>
    <main class="main">

      <div class="Banner-otel" :style="{ 'background-image': 'url(' + data?.page_content.default.page_banner + ')' }">
        <div class="container">
          <div class="Banner-otel-in">
            <div class="Banner-otel-text">
              <h1>{{ data.name }}</h1>
              <p>{{ data.meta[0].content }}</p>
            </div>
            <search-hotel-detail-component :key="$route.path" @search="search($event)"></search-hotel-detail-component>
          </div>
        </div>
      </div>

      <section class="O_List-card">
        <div class="container">
          <div class="O_List-card-in">
            <div class="O_List-card-item" v-for="hotel in data.hotels">
              <div class="O_List-card-item-img">
                <nuxt-img :src="cdn + hotel.images?.[0]?.ImageUrl" alt="" />
              </div>
              <div class="O_List-card-item-content">
                <div class="O_List-card-item-content-head">
                  <div class="O_List-card-item-content-head-in">
                    <b>{{ hotel.Name }}</b>
                    <nuxt-link to="/">{{ hotel.DestinationName }}</nuxt-link>
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
                <li class="page-item me-2 me-sm-3 mb-1" v-if="data.current_page > 1">
                  <a href="javascript:void(0)" @click.prevent="goToPage(1)"
                    class="page-link rounded-sm d-flex align-items-center justify-content-center text-center  text-secondary pagination-left">
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
                    class="page-link rounded-sm d-flex align-items-center justify-content-center text-center  text-secondary">
                    <span aria-hidden="true">&hellip;</span>
                  </a>
                </li>
                <li class="page-item me-2 me-sm-3 mb-1" v-for="(pageNumber, index) in displayedPageNumbers" :key="index">
                  <a href="javascript:void(0)"
                    class="page-link rounded-sm d-flex align-items-center justify-content-center text-center  text-secondary"
                    :class="{ 'active': pageNumber === data.current_page }" @click.prevent="goToPage(pageNumber)">
                    {{ pageNumber }}
                  </a>
                </li>
                <li class="page-item me-2 me-sm-3 mb-1" v-if="showRightDots">
                  <a href="javascript:void(0)"
                    class="page-link rounded-sm d-flex align-items-center justify-content-center text-center  text-secondary">
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
                <li class="page-item me-2 me-sm-3 mb-1" v-if="data.current_page < totalPages">
                  <a href="javascript:void(0)" @click.prevent="goToPage(totalPages)"
                    class="page-link rounded-sm d-flex align-items-center justify-content-center text-center  text-secondary pagination-right">
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

      <section class="highlight-section  ">
        <div class="container">
          <div class="row pt-4 ">
            <div class="note-box col-12 col-lg-12 pe-lg-5">
              <div class="highlight-section-desc" :class="{ active: isExpanded }" v-html="data.page_content.article.data">
              </div>

              <div class="highlight-section-desc-more-button read-more-button pb-4" :class="{ active: isExpanded }"
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
              <div class="accordion-item" v-for="(item,index) in data.page_content?.faq[0].faq_list" :key="index">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#faq'+index"
                  aria-expanded="false" :aria-controls="'faq'+index">
                  {{item.howrent_category_question}}
                </button>
                <div :id="'faq'+index" class="accordion-collapse collapse " data-bs-parent="#Faq">
                  <div class="accordion-body" v-html="item.howrent_category_answer">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="Blog-more mt-5 d-none">
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
                        <nuxt-img src="/img/blog.png" alt="" />
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
    name: 'OtelAreaDynamicPage',
    layout: 'no-search',
    props:['data'],
    data() {
      return {
        isExpanded: false,
        isExpanded2: false,
        cdn: process.env.HOTEL_CDN_URL + '/'
      }
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
        return Math.ceil(this.data.total_items / this.data.per_page);
      },
      pageNumbers() {
        return Array.from({ length: this.totalPages }, (_, i) => i + 1);
      },
      displayedPageNumbers() {
        const currentIndex = this.pageNumbers.indexOf(this.data.current_page);
        const leftIndex = Math.max(currentIndex - 3, 0);
        const rightIndex = Math.min(currentIndex + 3, this.pageNumbers.length - 1);
        const displayedNumbers = this.pageNumbers.slice(leftIndex, rightIndex + 1);
        return displayedNumbers;
      },
      showLeftDots() {
        const currentIndex = this.pageNumbers.indexOf(this.data.current_page);
        return currentIndex > 3;
      },
      showRightDots() {
        const currentIndex = this.pageNumbers.indexOf(this.data.current_page);
        return currentIndex < this.pageNumbers.length - 4;
      }
    },
    methods: {
      search(queryParams) {
        queryParams.destinations = this.data.page_content.otel_destination

        this.$router.push({
          path: '/oteller',
          query: queryParams,
        });
      },
      async filter(page = 1) {
        const response = await this.$axios.get(`/website/destination-hotels/${this.data.page_content.otel_destination}?page=${page}&api_token=${process.env.WEBSITE_TOKEN}`)
        this.data.hotels = response.data.data;
        this.data.per_page = response.data.per_page;
        this.data.total_items = response.data.total;
        this.data.current_page = response.data.current_page;
      },
      detailUrl(hotel) {
        return '/otel/' + slugify(hotel.Name.toLowerCase()) + '-' + hotel.Id
      },
      goToPage(pageNumber) {
        if (pageNumber === this.data.current_page) return;
        this.data.current_page = pageNumber;
        this.filter(pageNumber);
      },
    }
  }
  </script>

