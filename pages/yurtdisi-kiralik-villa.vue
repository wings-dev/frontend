<template>
    <div class="Home">

        <section class="Banner Banner-home "
            :style="{ 'background-image': 'url(' + global_cdn + pageData.page_content?.default?.page_banner + ')' }">
            <nuxt-img :src="global_cdn + pageData.page_content?.default?.page_list_img" class="w-100 mobile" :alt="'Yurtdışı Kiralık Villa ' + sitename" loading="lazy" placeholder />
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
        <client-only>
            <search-bar :key="$route.path"></search-bar>
        </client-only>
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
                        <div class="swiper-slide" v-for="item in pageData.page_content.popular" :key="item.id">

                            <nuxt-link :to="'/' + item.url" class="Card">
                                <div class="Card-in">
                                    <div class="Card-img">
                                        <nuxt-img :src="global_cdn + item.preview_image[0].preview_url" loading="lazy" placeholder 
                                            :srcset="generateSrcset(item.preview_image[0].responsive_url)"
                                             width="267"
                                            height="175"></nuxt-img>
                                        <button class="Card-fav" type="button" @click.prevent="toggleFavorite(item.code)"
                                            :class="isFavorite(item.code) ? 'active' : ''">
                                            <i :class="isFavorite(item.code) ? 'icon-heart-full' : 'icon-heart'"></i>
                                        </button>
                                    </div>
                                    <div class="Card-content">
                                        <div class="Card-content-head">
                                            <div class="Card-content-head-code">
                                                <b>{{ prefix + item.code }}</b>
                                                <span>Tesis Kodu</span>
                                            </div>
                                            <div class="Card-content-head-location">
                                                <i class="icon-pin"></i>
                                                <p>{{ item.destination | titlecase }} <span>{{ item.country | titlecase }} /
                                                        {{
                                                            item.state | titlecase }}</span></p>
                                            </div>
                                        </div>
                                        <div class="Card-content-info">
                                            <div class="Card-content-info-item">
                                                <i class="icon-user"></i>
                                                <span>{{ item.max_adult }} Kişilik</span>
                                            </div>
                                            <div class="Card-content-info-item">
                                                <i class="icon-bed"></i>
                                                <span>{{ item.bedroom }} Yatak Odası</span>
                                            </div>
                                            <div class="Card-content-info-item">
                                                <i class="icon-shower"></i>
                                                <span>{{ item.bathrooms }} Banyo</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="Card-content-bottom">
                                        <div class="Card-content-bottom-price">
                                            <p><b>{{ item.min_price | numberFormat }} -
                                                    {{ item.max_price }}
                                                </b><span>/Gecelik</span></p>
                                            <p>Fiyat Aralığında</p>
                                        </div>
                                        <nuxt-link :to="'/' + item.url" class="Card-content-bottom-link"><i
                                                class="icon-right-arrows-new"></i></nuxt-link>
                                    </div>
                                </div>
                            </nuxt-link>
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
            <nuxt-img src="/img/home-banner-mobile.png" :alt="'Yurtdışı Kiralık Villa ' + sitename" loading="lazy" placeholder />
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
                    <nuxt-link to="/yurtdisi-kiralik-villa" class="button-more">Tümünü Gör</nuxt-link>
                </div>
                <div class="swiper popular list-slide list-slide-abroad list-wrapper scroll-wrapper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in pageData.page_content.property_category"
                            :key="index">
                            <nuxt-link :to="item.category_url" class="Abroad-villas-item">
                                <div class="Abroad-villas-item-img">
                                    <nuxt-img :src="global_cdn + item.category_img" :alt="'Yurtdışı Kiralık Villa ' + sitename" v-if="item.category_img" loading="lazy" placeholder ></nuxt-img>
                                    <nuxt-img src="/img/country/italy.jpg" :alt="'Yurtdışı Kiralık Villa ' + sitename" loading="lazy" placeholder  v-else></nuxt-img>
                                </div>
                                <div class="Abroad-villas-item-content">
                                    <div class="Abroad-villas-item-content-left">
                                        <b>{{ item.cateogory_name }}</b>
                                        <p>{{ item.property_count }} seçenek içeriyor</p>
                                    </div>
                                    <div class="Abroad-villas-item-content-right">
                                        <div class="Abroad-villas-item-content-flag">
                                            <country-flag :country='item.countryFlag' :rounded="true"/>

                                        </div>

                                        <div class="Abroad-villas-item-content-smile"
                                            v-if="item.emojiStatus !== 'emojistatus_2'">
                                            <nuxt-img src="/img/laughing-smile.svg" alt="laughing smile" loading="lazy" 
                                                v-if="item.emojiStatus == 'emojistatus_1'"></nuxt-img>
                                            <span>{{ item.vizeStatus }}</span>
                                        </div>
                                    </div>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
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
                        <div class="accordion-item" v-for="(item, index) in pageData.page_content.faq[0].faq_list"
                            :key="index">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                :data-bs-target="'#faq' + index" aria-expanded="false" :aria-controls="'faq' + index">
                                {{ item.howrent_category_question }}
                            </button>
                            <div :id="'faq' + index" class="accordion-collapse collapse " data-bs-parent="#Faq">
                                <div class="accordion-body" v-html="item.howrent_category_answer"></div>
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
    </div>
</template>

<script>

import { Swiper, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import CountryFlag from 'vue-country-flag'
import cdnSrcsetMixin from '@/mixins/cdnSrcsetMixin';
export default {
    name: 'AbroadIndexPage',
    layout: 'no-search',
    mixins: [cdnSrcsetMixin],
    components: {
        Swiper, CountryFlag
    },
    head() {
        return this.headData
    },
    data() {
        return {
            prefix: process.env.PREFIX,
            sitename: process.env.SITE_NAME,
            global_cdn: process.env.GLOBAL_CDN_URL
        }
    },
    async asyncData({ $getRedisKey, $axios }) {
        const site_id = process.env.SITE;
        const redisPageKey = `web:${site_id}:pages:yurtdisi-kiralik-villa`;

        let response = await $getRedisKey([redisPageKey]);
        const pageData = response[redisPageKey] || {};
        let headData = {
          title: pageData.title,
          meta: pageData.meta
        }

        return { pageData,headData };
    },
    methods: {
        isFavorite(code) {
            return this.$store.state.favorite.favorites.includes(code)
        },
        toggleFavorite(code) {
            event.stopPropagation();
            if (this.isFavorite(code)) {
                this.$store.dispatch('favorite/removeFavorite', code)
            } else {
                this.$store.dispatch('favorite/addFavorite', code)
            }
        }
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
    }

}
</script>
<style scoped>
.list-item .list-image {
    width: 100%;
}
</style>
