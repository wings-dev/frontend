<template>
    <section class="Opportunity-slider popular-dark" id="more-villas">
        <div class="container ">
            <div class="section-caption d-flex align-items-center mb-3 pb-1">
                <i class="icon-opportunity-calendar"></i>
                <h4 class="">Haftanın <span>Villaları</span></h4>
                <nuxt-link to="/kiralik-villa-ara" class="button-more button-more-dark">Tümünü Gör</nuxt-link>
            </div>
            <div class="swiper popular list-slide list-slide-opportunity list-wrapper scroll-wrapper mb-3 mb-sm-4 pb-1">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item, index) in 10" :key="index">

                        <a href="/" class="Card Card-h">
                            <div class="Card-in">
                                <div class="Card-img">
                                    <nuxt-link to="/">
                                        <nuxt-img
                                            src="https://d1t2mawg5vwzes.cloudfront.net/property/493/9492/conversions/1-preview.jpg"
                                            width="292" height="187"
                                            srcset="https://d1t2mawg5vwzes.cloudfront.net/property/493/9492/responsive-images/1___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/493/9492/responsive-images/1___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/493/9492/responsive-images/1___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/493/9492/responsive-images/1___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/493/9492/responsive-images/1___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/493/9492/responsive-images/1___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/493/9492/responsive-images/1___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/493/9492/responsive-images/1___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/493/9492/responsive-images/1___media_library_original_460_259.jpg 460w"></nuxt-img>
                                    </nuxt-link>
                                    <button class="Card-fav" type="button" @click.prevent="toggleFavorite(item.code)"
                                        :class="isFavorite(item.code) ? 'active' : ''">
                                        <i :class="isFavorite(item.code) ? 'icon-heart-full' : 'icon-heart'"></i>
                                    </button>
                                </div>
                                <div class="Card-h-in">
                                    <div class="Card-content">
                                        <div class="Card-content-head">
                                            <div class="Card-content-head-code">
                                                <b>VKV3456</b>
                                                <span>Tesis Kodu</span>
                                            </div>
                                            <div class="Card-content-head-location">
                                                <i class="icon-pin"></i>
                                                <p>FETHİYE <span>Turkey / Muğla</span></p>
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
                                    <div class="Card-content-bottom opportunity">
                                        <div class="Card-content-bottom-price">
                                            <p><b>2500TL -
                                                    15000TL
                                                </b><span>/Gecelik</span></p>
                                            <p>Fiyat Aralığında</p>
                                        </div>
                                        <nuxt-link to="/" class="Card-content-bottom-link">
                                            <i class="icon-right-arrows-new"></i>
                                        </nuxt-link>
                                    </div>
                                    <!-- <div class="Card-content-bottom">
                                            <div class="Card-content-bottom-day">
                                                <p><span>3</span>Gece</p>
                                            </div>
                                            <div class="Card-content-bottom-date">
                                                <p><span>12 TEM</span><i class="icon-arrow-right-2"></i><span>18 TEM</span>
                                                </p>
                                                <small>Fırsatı kaçırma!</small>
                                            </div>
                                            <div class="Card-content-bottom-price single">
                                                <p class="orange">TOPLAM FİYAT</p>
                                                <p><b>2.500</b><span>TL</span></p>
                                            </div>
                                        </div> -->
                                </div>
                            </div>
                        </a>
                    </div>
                </div>


                <!-- If pagination is needed -->

                <!-- If navigation buttons are needed -->
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev list-navigation-prev"></div>
                <div class="swiper-button-next list-navigation-next"></div>
            </div>

        </div>
    </section>
</template>

<script>
import { Swiper, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
    name: 'MoreVillasSlider',
    components: {
        Swiper,
    },
    props: ['sectionTitle'],
    data() {
        return {

        }
    },

    async mounted() {
        Swiper.use([Navigation, Pagination])

        const swiper3 = new Swiper('.list-slide-opportunity', {
            slidesPerView: 1.1,
            spaceBetween: 10,
            direction: 'horizontal',
            centeredSlides: true,
            loop: true,
            modules: [Navigation, Pagination],
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            breakpoints: {
                600: {
                    slidesPerView: 2,
                    centeredSlides: false,
                },
                768: {
                    slidesPerView: 2,
                    centeredSlides: false,
                },
                1199: {
                    slidesPerView: 2,
                    centeredSlides: false,
                },
            },
        })

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
    }


}
</script>