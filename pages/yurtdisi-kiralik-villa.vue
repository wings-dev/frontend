<template>
    <div class="Home">
        <client-only>
            <search-bar :key="$route.path"></search-bar>
        </client-only>
        <section class="Banner Banner-home "
            style="background-image: url(http://office.wingswebservices.com/storage/page/18168/381398/balayi-banner-home.jpg)">
            <!-- :style="{ 'background-image': 'url(' + pageData.page_content.default.page_banner + ')' }" -->
            <!-- <img :src="pageData.page_content.default.page_banner" class="w-100 mobile" alt=""> -->
            <div class="container Banner-home-in">
                <div class=" Banner-home-text">
                    <div class="Banner-home-text-spin">
                        <h1>{{ pageData.page_content.banner.banner_title }}</h1>
                        <div class="words">
                            <span v-for="(item, index) in pageData.page_content.banner.banner_animation_title"
                                :key="index">{{ item.banner_animation_title }}</span>
                        </div>
                    </div>
                    <h2 class="">{{ pageData.page_content.banner.banner_subtitle }} <span>{{
                        pageData.page_content.banner.banner_subtitle2 }}</span></h2>
                    <p class="">
                        {{ pageData.page_content.banner.banner_desc }}
                    </p>
                </div>
            </div>
        </section>
        <section class="popular-section bg-white overflow-hidden pb-sm-5 mt-6">
            <div class="container ">
                <div class="section-caption d-flex align-items-center mb-3 pb-1">
                    <i class="icon-flame"></i>
                    <h4 class="primary-title fw-medium ls-05 lh-1">
                        Popüler Villaları
                        <span>keşfedin</span>
                    </h4>
                    <a href=""
                        class="btn btn-theme-second fs-7 lh-sm fw-medium ls-05 rounded-pill py-3 mb-2 ms-auto btn-more">
                        <span class="d-block py-1 px-3">Tümünü Gör</span>
                    </a>
                </div>
                <div class="swiper popular list-slide list-slide-first list-wrapper scroll-wrapper mb-3 mb-sm-4 pb-1">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in 10" :key="index">

                            <div class="Card">
                                <div class="Card-in">
                                    <div class="Card-img">
                                        <nuxt-link to="/">
                                            <nuxt-img src="/img/card.png" width="267" height="175"></nuxt-img>
                                        </nuxt-link>
                                        <button class="Card-fav" type="button">
                                            <i class="icon-heart"></i>
                                        </button>
                                    </div>
                                    <div class="Card-content">
                                        <div class="Card-content-head">
                                            <div class="Card-content-head-code">
                                                <b>VKV3456</b>
                                                <span>Tesis Kodu</span>
                                            </div>
                                            <div class="Card-content-head-location">
                                                <img src="/img/flag/flag-italy.svg" alt="">
                                                <p>İtalya <span>Roma</span></p>
                                            </div>
                                        </div>
                                        <div class="Card-content-info">
                                            <div class="Card-content-info-item">
                                                <i class="icon-user"></i>
                                                <span>4 Kişilik</span>
                                            </div>
                                            <div class="Card-content-info-item">
                                                <i class="icon-bed"></i>
                                                <span>2 Yatak Odası</span>
                                            </div>
                                            <div class="Card-content-info-item">
                                                <i class="icon-shower"></i>
                                                <span>2 Banyo</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="Card-content-bottom">
                                        <div class="Card-content-bottom-price">
                                            <p><b>1.500TL - 2.500TL</b><span>/Gecelik</span></p>
                                            <p>Fiyat Aralığında</p>
                                        </div>
                                        <nuxt-link to="/" class="Card-content-bottom-link"><i
                                                class="icon-right-arrows-new"></i></nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- If pagination is needed -->

                    <!-- If navigation buttons are needed -->
                    <div class="swiper-button-prev list-navigation-prev"></div>
                    <div class="swiper-button-next list-navigation-next"></div>
                </div>

            </div>
        </section>
        <section class="Home-banner" style="background-image: url(/img/home-banner.png);">
            <img src="/img/home-banner-mobile.png" alt="">
            <div class="container">
                <div class="Home-banner-in">
                    <div class="Home-banner-text">
                        <h4 v-html="pageData.page_content.section_banner.section_banner_title"></h4>
                        <h2>{{ pageData.page_content.section_banner.section_banner_subtitle }} <span>
                                {{ pageData.page_content.section_banner.section_banner_subtitle2 }} </span></h2>
                        <p>{{ pageData.page_content.section_banner.section_banner_desc }} <b>{{
                            pageData.page_content.section_banner.section_banner_desc_bold }}</b></p>
                    </div>
                </div>
            </div>
        </section>

        <section class="Abroad-villas mt-5">
            <div class="container ">
                <div class="section-caption d-flex align-items-center mb-3 pb-1">
                    <i class="icon-abroad-villa"></i>
                    <h4 class=""><b>Ülkeler</b></h4>
                </div>
                <div class="swiper popular list-slide list-slide-abroad list-wrapper scroll-wrapper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in 10" :key="index">
                            <nuxt-link to="/" class="Abroad-villas-item">
                                <div class="Abroad-villas-item-img">
                                    <img src="/img/country/italy.jpg" alt="">
                                </div>
                                <div class="Abroad-villas-item-content">
                                    <div class="Abroad-villas-item-content-left">
                                        <b>İtalya</b>
                                        <p>423 seçenek içeriyor</p>
                                    </div>
                                    <div class="Abroad-villas-item-content-right">
                                        <div class="Abroad-villas-item-content-flag">
                                            <img src="/img/flag/flag-italy.svg" alt="">
                                        </div>
                                        <div class="Abroad-villas-item-content-smile">
                                            <img src="/img/laughing-smile.svg" alt="">
                                            <span>VİZE YOK!</span>
                                        </div>
                                    </div>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>


                    <!-- If pagination is needed -->

                    <!-- If navigation buttons are needed -->
                    <!-- <div class="swiper-pagination"></div> -->
                    <div class="swiper-button-prev list-navigation-prev"></div>
                    <div class="swiper-button-next list-navigation-next"></div>
                </div>

            </div>
        </section>

        <section class="List mt-5 mb-5">
            <div class="container">
                <div class="List-sss">
                    <h3>En çok sorulan sorular </h3>
                    <div class="accordion" id="Faq">
                        <div class="accordion-item" v-for="(item, index) in pageData.page_content.faq[0].faq_list" :key="index">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                :data-bs-target="'#faq'+index" aria-expanded="false" :aria-controls="'faq'+index">
                                {{ item.howrent_category_question }}
                            </button>
                            <div :id="'faq'+index" class="accordion-collapse collapse " data-bs-parent="#Faq">
                                <div class="accordion-body" v-html="item.howrent_category_answer "></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="Home-text">
            <div class="container">
                <div class="Home-text-in">
                    <div class="Home-text-desc" v-html="pageData.page_content.article.data"></div>
                </div>
            </div>
        </section>

        <!-- <div>
            <div id="">A DOM element on your page. The first step will pop on this element because its ID is 'v-step-0'.
            </div>
            <div class="v-step-1">A DOM element on your page. The second step will pop on this element because its ID is
                'v-step-1'.</div>
            <div data-v-step="2">A DOM element on your page. The third and final step will pop on this element because its
                ID is 'v-step-2'.</div>

            <v-tour name="myTour" :steps="steps"></v-tour>
        </div> -->
    </div>
</template>

<script>
import { Swiper, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
// import MoreVillas from '../MoreVillas.vue';
export default {
    name: 'AbroadIndexPage',
    layout: 'no-search',
    components: {
        Swiper
    },
    head() {
        let site_id = process.env.SITE
        return {
            title: 'Anasayfa',
            meta: [
                { hid: 'description', name: 'description', content: 'anasayfa' },
                { hid: 'keywords', name: 'keywords', content: 'anasayfa1, anasayfa2, anasayfa3' }
            ],
        }
    },
    components: {
    },
    data() {
        return {
            steps: [
                {
                    target: ".v-step-0", // We're using document.querySelector() under the hood
                    content: `Discoverr <strong>Vue Tour</strong>!`
                },
                {
                    target: ".v-step-1",
                    content: "An awesome plugin made with Vue.js!"
                },
                {
                    target: '[data-v-step="2"]',
                    content:
                        "Try it, you'll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.",
                    params: {
                        placement: "top"
                    }
                }
            ]
        }
    },
    async asyncData({ $getRedisKey, $axios }) {
        const site_id = process.env.SITE;
        const redisPageKey = `web:${site_id}:pages:yurtdisi-kiralik-villa`;

        let response = await $getRedisKey([redisPageKey]);
        const pageData = response[redisPageKey] || {};
        

        

        return {pageData} ;
    },
    mounted() {
        Swiper.use([Navigation, Pagination])

        const swiper = new Swiper('.list-slide-first', {
            slidesPerView: 1.1,
            spaceBetween: 10,
            direction: 'horizontal',
            loop: true,
            modules: [Navigation, Pagination],
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
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
        const swiper2 = new Swiper('.list-slide-firsat', {
            slidesPerView: 1.1,
            spaceBetween: 10,
            direction: 'horizontal',
            loop: true,
            modules: [Navigation, Pagination],
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1199: {
                    slidesPerView: 3,
                },
            },
        })
        const swiper3 = new Swiper('.list-slide-abroad', {
            slidesPerView: 1,
            spaceBetween: 16,
            direction: 'horizontal',
            loop: true,
            modules: [Navigation, Pagination],
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1199: {
                    slidesPerView: 3,
                },
            },
        })
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
        
        console.log('pageData', this.pageData)


    }

}
</script>
<style scoped>
.list-item .list-image {
    width: 100%;
}
</style>
