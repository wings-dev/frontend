<template>
    <div class="Home">
        <search-bar></search-bar>
        <section class="Banner Banner_lg Banner-back mb-6" style="background-image: url(/img/yurtdisi-banner.jpg);">
            <img src="/img/banner-mobile.png" class="w-100 mobile" alt="">
            <div class="container">
                <div class=" Banner_search-text   pos-ab-xy-center ">
                    <h2 class="animated fadeInDown ">Exclusive Villa</h2>
                    <h1 class="animated fadeInDown ">Stylish & Luxury Design</h1>
                    
                    <p class="animated fadeInDown desktop flex-column "><span>Saklı bir cennet…</span>
                        Nefes kesici doğa manzarası, muhteşem plajları, begonvillerin süslediği beyaz badanalı taş
                        evleri ve
                        yıldız yağmuru altındaki teraslarıyla bir Akdeniz rüyası… Huzurun diğer adı: KALKAN
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
                        <span class="d-block py-1 px-3">Tümünü Görüntüleyin</span>
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
            <div class="container">
                <div class="Home-banner-in">
                    <div class="Home-banner-text">
                        <h4>20+ ülke ve</h4>
                        <h4>148+ destinasyonda</h4>
                        <h2>VillaKalkan <span>sizinle!</span></h2>
                        <p>Yunanistan, İspanya, Hırvatistan, Thailand, İtalya, Portekiz, Maldivler
                            ve daha fazla ülkede <b>villa kalkan hep sizinle hep yanınızda!</b></p>
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

        <section class="Home-text">
            <div class="container">
                <div class="Home-text-in">
                    <h5>Fethiye, Kaş ve Kalkan Tatiliniz için Villa Kiralayın</h5>
                    <p>Aileniz ya da sevdikleriniz ile beraber tatil denildiği zaman akla öncelikli olarak gelen yerlere
                        gitmek istiyor fakat bu aşamada hayalinizdeki tatile nasıl ulaşabileceğinizi bilemiyorsanız, kiralık
                        villa sizin konu ile alakalı isteklerinizi en iyi şekilde yerine getirecektir. Her ne kadar
                        şimdilerde karşınıza bu konuda size hizmet verdiğini söyleyecek pek çok isim olsa da alanında
                        yeterli deneyime sahip bir firma ile iletişime geçmeniz, sizin isteklerinizin eksiksiz olarak yerine
                        getirilmesi anlamında son derece önemli olacaktır. Villa Kalkan olarak bizler ise tam da bu aşamada
                        devreye giriyor ve sizlere en iyisini sunmayı hedefliyoruz. Portföyümüzde yer alan ve birbirinden
                        farklı lokasyonlarda yer alan villalarımız ile sizlere daha öncesinde yaşamadığınız kadar güzel bir
                        villa tatilini sunuyoruz.</p>
                    <h5>Fethiye, Kaş ve Kalkan Tatiliniz için Villa Kiralayın</h5>
                    <p>Aileniz ya da sevdikleriniz ile beraber tatil denildiği zaman akla öncelikli olarak gelen yerlere
                        gitmek istiyor fakat bu aşamada hayalinizdeki tatile nasıl ulaşabileceğinizi bilemiyorsanız, kiralık
                        villa sizin konu ile alakalı isteklerinizi en iyi şekilde yerine getirecektir. Her ne kadar
                        şimdilerde karşınıza bu konuda size hizmet verdiğini söyleyecek pek çok isim olsa da alanında
                        yeterli deneyime sahip bir firma ile iletişime geçmeniz, sizin isteklerinizin eksiksiz olarak yerine
                        getirilmesi anlamında son derece önemli olacaktır. Villa Kalkan olarak bizler ise tam da bu aşamada
                        devreye giriyor ve sizlere en iyisini sunmayı hedefliyoruz. Portföyümüzde yer alan ve birbirinden
                        farklı lokasyonlarda yer alan villalarımız ile sizlere daha öncesinde yaşamadığınız kadar güzel bir
                        villa tatilini sunuyoruz.</p>
                    <h5>Fethiye, Kaş ve Kalkan Tatiliniz için Villa Kiralayın</h5>
                    <p>Aileniz ya da sevdikleriniz ile beraber tatil denildiği zaman akla öncelikli olarak gelen yerlere
                        gitmek istiyor fakat bu aşamada hayalinizdeki tatile nasıl ulaşabileceğinizi bilemiyorsanız, kiralık
                        villa sizin konu ile alakalı isteklerinizi en iyi şekilde yerine getirecektir. Her ne kadar
                        şimdilerde karşınıza bu konuda size hizmet verdiğini söyleyecek pek çok isim olsa da alanında
                        yeterli deneyime sahip bir firma ile iletişime geçmeniz, sizin isteklerinizin eksiksiz olarak yerine
                        getirilmesi anlamında son derece önemli olacaktır. Villa Kalkan olarak bizler ise tam da bu aşamada
                        devreye giriyor ve sizlere en iyisini sunmayı hedefliyoruz. Portföyümüzde yer alan ve birbirinden
                        farklı lokasyonlarda yer alan villalarımız ile sizlere daha öncesinde yaşamadığınız kadar güzel bir
                        villa tatilini sunuyoruz.</p>
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
