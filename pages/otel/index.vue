<template>
    <div>
        <client-only>
            <search-bar :key="$route.path"></search-bar>
        </client-only>
        <section class="blog-section">
            <div class="container">
                <div class="blog ">
                    <div class="blog-list-item bg-light area1">
                        <div class="swiper blog-carousel w-100 h-100 position-relative">
                            <div class="swiper-wrapper d-flex">
                                <div class="swiper-slide" v-for="(item, index) in pageData.page_content.slider"
                                    :key="index">
                                    <a :href="item.otel_slider_link"
                                        class="blog-item position-relative d-block w-100 h-100  overflow-hidden">
                                        <nuxt-img :src="global_cdn + item?.otel_slider_input" width="781" height="380" :alt="'Otel | ' + sitename" loading="lazy" placeholder 
                                            class="item-image lazy cover w-100 " />
                                        <div
                                            class="slide-caption text-white position-absolute bottom-0 start-0 d-flex flex-column align-items-start ps-4 pe-5 pb-4 ms-sm-3 me-sm-4 mb-sm-3 ">
                                            <h4 class="" v-if="item.otel_slider_title">{{ item.otel_slider_title }}</h4>
                                            <p class="" v-if="item.otel_slider_desc">{{ item.otel_slider_desc }}</p>
                                        </div>
                                    </a>
                                </div>

                            </div>
                            <div class="swiper-pagination blog-pagination"></div>
                        </div>
                    </div>
                    <div class="blog-list-item bg-light area2 blog-list-item-sm"
                        v-for="(item, index) in pageData.page_content.banner" :key="index"
                        :class="{ 'area2': index == 0, 'area3': index == 1 }">
                        <a :href="item.otel_banner_link" class="blog-item position-relative d-block w-100 h-100">
                            <nuxt-img :src="global_cdn + item?.banner_img" width="402" height="182" :alt="'Otel | ' + sitename" loading="lazy" placeholder 
                                class="lazy cover w-100" />
                            <div class="blog-item-text ">
                                <h4 class="blog-item-sm-title" v-if="item.otel_banner_title">{{ item.otel_banner_title }}
                                </h4>
                                <p class="blog-item-sm-text" v-if="item.otel_banner_desc">{{ item.otel_banner_desc }}</p>
                            </div>
                        </a>
                    </div>
                    <!-- <div class="blog-list-item bg-light area3 blog-list-item-sm">
                        <a href="/" class="blog-item position-relative d-block w-100 h-100">
                            <nuxt-img src="/img/small-slider.jpg" width="402" height="182" alt=""
                                class="lazy cover w-100" />
                            <div class="blog-item-text d-none">
                                <h4 class="blog-item-sm-title">Yazın tatili fırsatlarını</h4>
                                <p class="blog-item-sm-text">Erken rezervasyon otelleriyle değerlendir</p>
                            </div>
                        </a>
                    </div> -->
                </div>
            </div>
        </section>

        <section class="popular-section-otel bg-white overflow-hidden pb-sm-5 pt-5">
            <div class="container ">
                <div class="section-caption d-flex align-items-center mb-3 pb-1">
                    <i class="icon-otel-discover"></i>
                    <h4 class="primary-title fw-medium ls-05 lh-1">
                        Otelleri
                        <span>keşfedin </span>
                    </h4>
                </div>
                <ul class="otel-pills nav nav-pills mb-3" id="otel-tab" role="tablist">
                    <li class="nav-item" role="presentation"
                        v-for="(otelCategory, index) in pageData.page_content?.select_otel" :key="index"
                        v-if="otelCategory">
                        <button :class="['nav-link', { active: index === 0 }]" :id="`otel-tab${index}`"
                            data-bs-toggle="pill" :data-bs-target="`#otel${index}`" type="button" role="tab"
                            :aria-selected="index === 0">{{ otelCategory.otel_category }}</button>
                    </li>
                </ul>
                <div class="tab-content" id="otel-tabContent">
                    <div v-for="(otelCategory, index) in pageData.page_content?.select_otel" :key="index"
                        :class="['tab-pane', 'fade', { 'show active': index === 0 }]" :id="`otel${index}`" role="tabpanel"
                        :aria-labelledby="`otel-tab${index}`" v-if="otelCategory">
                        <div class="swiper list-slide-otel">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(hotel, hotelIndex) in otelCategory.otel_list"
                                    :key="hotelIndex" v-if="hotel && (hotel.images && hotel.images[0]?.ImageUrl)">
                                    <nuxt-link :to="hotel.url" class="O_Card" v-if="hotel.url">
                                        <div class="O_Card-in">
                                            <div class="O_Card-img">
                                                <nuxt-img :src="cdn_hotel + hotel.images?.[0]?.ImageUrl" :alt="'Otel | ' + sitename" loading="lazy" placeholder 
                                                    v-if="hotel.images && hotel.images[0]?.ImageUrl" width="299"
                                                    height="188"></nuxt-img>
                                                <div class="O_Card-img-text" style="background-color: #5d91c1;">
                                                    <span>{{ parseFloat(hotel.Rating).toFixed(2) }}/10</span>
                                                </div>
                                            </div>
                                            <div class="O_Card-content">
                                                <div class="O_Card-content-head">
                                                    <b>{{ hotel.Name }}</b>
                                                    <small>{{ hotel.DestinationName }}</small>
                                                </div>
                                                <div class="O_Card-content-in">
                                                    <div class="O_Card-content-price d-none">
                                                        <p><b>300</b><span><u>TL</u>/Gecelik</span></p>
                                                        <p>Başlayan Fiyatlar</p>
                                                    </div>
                                                    <nuxt-link :to="hotel.url" class="O_Card-content-link" v-if="hotel.url">
                                                        Oteli İncele
                                                        <i class="icon-right-arrows-new"></i>
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                        </div>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                        <nuxt-link :to="'/' + otelCategory.otel_category_all_link" class="popular-section-otel-more">Tüm
                            {{ otelCategory.otel_category }}</nuxt-link>
                    </div>
                </div>
            </div>
        </section>

        <section class="Areas">
            <div class="container">
                <div class="Areas-in">
                    <h3>Bölgelere göre</h3>
                    <h2><b>Konaklama</b> Seçeneklerine gözat</h2>
                    <div class="Areas-otel">
                        <div class="Areas-otel-item">
                            <div class="Areas-otel-item-in">
                                <h4><b>Yurtiçi</b> Otelleri</h4>
                                <div class="Areas-otel-item-list">
                                    <nuxt-link to="/antalya-otelleri" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/antalya.jpeg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Antalya Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/side-otelleri" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/side.jpeg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Side Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/kemer-otelleri" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/kemer.jpeg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Kemer Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/bodrum-otelleri" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/bodrum.jpeg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Bodrum Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/marmaris-otelleri" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/marmaris.jpeg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Marmaris Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/alanya-otelleri" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/alanya.jpeg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Alanya Otelleri</span>
                                    </nuxt-link>
                                </div>
                            </div>
                            <div class="Areas-otel-item-bottom">
                                <nuxt-link to="/">Tüm Yurtiçi Otelleri Keşfedin <i
                                        class="icon-right-arrows-new"></i></nuxt-link>
                            </div>
                        </div>
                        <div class="Areas-otel-item">
                            <div class="Areas-otel-item-in">
                                <h4><b>Kıbrıs</b> Otelleri</h4>
                                <div class="Areas-otel-item-list">
                                    <nuxt-link to="/magosa-otelleri" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/magosa.jpeg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Magosa Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/girne-otelleri" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/girne.jpeg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Girne Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/bafra-otelleri" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/bafra.jpeg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Bafra Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/lefkosa-otelleri" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/lefkosa.jpeg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Lefkoşa Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/otel" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/kibris-balayi.jpeg" width="172" :alt="'Otel | ' + sitename"
                                            height="114" loading="lazy" placeholder ></nuxt-img>
                                        <span>Kıbrıs Balayı Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/otel" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/kibris-ucakli.jpeg" width="172" :alt="'Otel | ' + sitename"
                                            height="114" loading="lazy" placeholder ></nuxt-img>
                                        <span>Kıbrıs Uçaklı Paketler</span>
                                    </nuxt-link>
                                </div>
                            </div>
                            <div class="Areas-otel-item-bottom">
                                <client-only>
                                <nuxt-link
                                    :to="`/oteller?destinations=10150&checkIn=${$moment().format('YYYY-MM-DD')}&checkOut=${$moment().add(2, 'days').format('YYYY-MM-DD')}&adult=2`">Tüm
                                    Kıbrıs Otellerini Keşfedin <i class="icon-right-arrows-new"></i></nuxt-link>
                                </client-only>
                            </div>
                        </div>
                    </div>
                    <div class="Areas-slider d-none">
                        <div class="Areas-slider-head">
                            <h4><b>Konaklama</b> Seçenekleri</h4>
                            <div class="swiper-pagination Areas-slider-pagination"></div>
                        </div>
                        <div
                            class="swiper popular list-slide list-slide-opportunity list-wrapper scroll-wrapper mb-3 mb-sm-4 pb-1">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <nuxt-link to="/" class="Areas-slider-item">
                                        <nuxt-img src="/img/otel/doga.jpg" width="192" height="121" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Doğa Otelleri</span>
                                    </nuxt-link>
                                </div>
                                <div class="swiper-slide">
                                    <nuxt-link to="/" class="Areas-slider-item">
                                        <nuxt-img src="/img/otel/doga2.jpg" width="192" height="121" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Doğa Otelleri</span>
                                    </nuxt-link>
                                </div>
                                <div class="swiper-slide">
                                    <nuxt-link to="/" class="Areas-slider-item">
                                        <nuxt-img src="/img/otel/doga3.jpg" width="192" height="121" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Doğa Otelleri</span>
                                    </nuxt-link>
                                </div>
                                <div class="swiper-slide">
                                    <nuxt-link to="/" class="Areas-slider-item">
                                        <nuxt-img src="/img/otel/doga.jpg" width="192" height="121" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Doğa Otelleri</span>
                                    </nuxt-link>
                                </div>
                                <div class="swiper-slide">
                                    <nuxt-link to="/" class="Areas-slider-item">
                                        <nuxt-img src="/img/otel/doga2.jpg" width="192" height="121" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Doğa Otelleri</span>
                                    </nuxt-link>
                                </div>
                                <div class="swiper-slide">
                                    <nuxt-link to="/" class="Areas-slider-item">
                                        <nuxt-img src="/img/otel/doga3.jpg" width="192" height="121" loading="lazy" placeholder :alt="'Otel | ' + sitename" ></nuxt-img>
                                        <span>Doğa Otelleri</span>
                                    </nuxt-link>
                                </div>
                                <div class="swiper-slide">
                                    <nuxt-link to="/" class="Areas-slider-item">
                                        <nuxt-img src="/img/otel/doga.jpg" width="192" height="121" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Doğa Otelleri</span>
                                    </nuxt-link>
                                </div>
                                <div class="swiper-slide">
                                    <nuxt-link to="/" class="Areas-slider-item">
                                        <nuxt-img src="/img/otel/doga2.jpg" width="192" height="121" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Doğa Otelleri</span>
                                    </nuxt-link>
                                </div>
                                <div class="swiper-slide">
                                    <nuxt-link to="/" class="Areas-slider-item">
                                        <nuxt-img src="/img/otel/doga3.jpg" width="192" height="121" loading="lazy" placeholder :alt="'Otel | ' + sitename" ></nuxt-img>
                                        <span>Doğa Otelleri</span>
                                    </nuxt-link>
                                </div>
                            </div>
                            <!-- If pagination is needed -->

                            <!-- If navigation buttons are needed -->

                            <div class="swiper-button-prev list-navigation-prev"></div>
                            <div class="swiper-button-next list-navigation-next"></div>
                        </div>
                    </div>
                    <div class="Areas-otel mt-4">
                        <div class="section-caption d-flex align-items-center mb-3 pb-1 w-100">
                            <i class="icon-otel-discover"></i>
                            <h4 class="primary-title fw-medium ls-05 lh-1">
                                Otelleri
                                <span>keşfedin</span>
                            </h4>
                        </div>
                        <div class="Areas-otel-item">
                            <div class="Areas-otel-item-in">
                                <h4><b>Şehir</b> Otelleri</h4>
                                <div class="Areas-otel-item-list">
                                    <nuxt-link to="/istanbul-otelleri" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/istanbul.jpeg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>İstanbul Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/kapadokya-otelleri" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/kapadokya.jpeg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Kapadokya Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/izmir-otelleri" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/izmir.jpeg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>İzmir Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/selimiye-otelleri" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/selimiye.jpg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Selimiye Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/kas-otelleri" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/kas.jpg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Kaş Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/akyaka-otelleri" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/akyaka.jpeg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Akyaka Otelleri</span>
                                    </nuxt-link>
                                </div>
                            </div>
                            <div class="Areas-otel-item-bottom">
                                <nuxt-link to="/">Tüm Şehir Otellerini Keşfedin <i
                                        class="icon-right-arrows-new"></i></nuxt-link>
                            </div>
                        </div>
                        <div class="Areas-otel-item">
                            <div class="Areas-otel-item-in">
                                <h4><b>Yurtdışı</b> Otelleri</h4>
                                <div class="Areas-otel-item-list">
                                    <nuxt-link :to="`/oteller?destinations=10690&checkIn=${$moment().format('YYYY-MM-DD')}&checkOut=${$moment().add(2, 'days').format('YYYY-MM-DD')}&adult=2`" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/amsterdam.jpeg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Amsterdam Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link :to="`/oteller?destinations=10275&checkIn=${$moment().format('YYYY-MM-DD')}&checkOut=${$moment().add(2, 'days').format('YYYY-MM-DD')}&adult=2`" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/barselona.jpg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Barselona Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link :to="`/oteller?destinations=61096&checkIn=${$moment().format('YYYY-MM-DD')}&checkOut=${$moment().add(2, 'days').format('YYYY-MM-DD')}&adult=2`" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/roma.jpg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename" ></nuxt-img>
                                        <span>Roma Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link :to="`/oteller?destinations=10001&checkIn=${$moment().format('YYYY-MM-DD')}&checkOut=${$moment().add(2, 'days').format('YYYY-MM-DD')}&adult=2`" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/dubai.jpg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Dubai Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link :to="`/oteller?destinations=60974&checkIn=${$moment().format('YYYY-MM-DD')}&checkOut=${$moment().add(2, 'days').format('YYYY-MM-DD')}&adult=2`" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/paris.jpg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Paris Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link :to="`/oteller?destinations=10153&checkIn=${$moment().format('YYYY-MM-DD')}&checkOut=${$moment().add(2, 'days').format('YYYY-MM-DD')}&adult=2`" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otelarea/prag.jpg" width="172" height="114" loading="lazy" placeholder :alt="'Otel | ' + sitename"></nuxt-img>
                                        <span>Prag Otelleri</span>
                                    </nuxt-link>
                                </div>
                            </div>
                            <div class="Areas-otel-item-bottom">
                                <nuxt-link to="/">Tüm Yurtdışı Otelleri Keşfedin <i
                                        class="icon-right-arrows-new"></i></nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="Home-text areas">
            <div class="container">
                <div class="Home-text-in">
                    <div class="Home-text-desc" v-html="pageData.page_content.article.data">
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
import { Swiper, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import slugify from "slugify";

export default {
    name: 'OtelIndexPage',
    layout: 'no-search',
    components: {
        Swiper
    },
    head() {
        return this.headData
    },
    data() {
        return {
            cdn_hotel: process.env.HOTEL_CDN_URL + '/',
            sitename:process.env.SITE_NAME,
            global_cdn: process.env.GLOBAL_CDN_URL
        }
    },
    async asyncData({ $getRedisKey, $axios, store }) {
        const site_id = process.env.SITE;
        let pageData = {};
        pageData = await $getRedisKey(`web:${site_id}:pages:otel`);

        const otelCategories = Array.isArray(pageData.page_content?.select_otel) ? pageData.page_content.select_otel : [];

        otelCategories.forEach((otelCategory, index) => {
            if (otelCategory && Array.isArray(otelCategory.otel_list)) {
                otelCategory.otel_list = otelCategory.otel_list.map(hotel => {
                    if (hotel && hotel.Name && hotel.Id) {
                        hotel.url = '/otel/' + slugify(hotel.Name.toLowerCase()) + '-' + hotel.Id;
                    }
                    return hotel;
                });
            }
        });

        pageData.page_content = { ...pageData.page_content, select_otel: otelCategories };

        let headData = {
          title: pageData.title,
          meta: pageData.meta
        }

        return { pageData,headData }
    },
    mounted() {
        Swiper.use([Navigation, Pagination])

        const swiper1 = new Swiper(".blog-carousel", {

            direction: "horizontal",
            slidesPerView: 1,
            modules: [Pagination],
            pagination: {
                el: ".blog-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 5000,
            },
            breakpoints: {

                768: {
                    direction: "vertical",
                },

            },
        });
        const swiper2 = new Swiper('.list-slide-otel', {
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
        const swiper3 = new Swiper('.list-slide-opportunity', {
            slidesPerView: 2,
            spaceBetween: 16,
            direction: 'horizontal',
            loop: true,
            modules: [Navigation, Pagination],
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.Areas-slider-pagination',
                type: 'bullets',
            },
            breakpoints: {
                576: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 4,
                },
                1199: {
                    slidesPerView: 6,
                },
            },
        })
    }

}
</script>
<style scoped>
.list-item .list-image {
    width: 100%;
}</style>
