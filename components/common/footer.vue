<template>
    <div>
        <!-- <section class="newsletter-section position-relative">
            <div class="container-wide">
                <div class="newsletter bg-theme-first-dark rounded-xl position-relative overflow-hidden py-4 py-sm-5">
                    <img src="/img/spacer.gif" data-src="/uploads/newsletter-bg.png" alt="newsletter background"
                        class="newsletter-bg lazy cover position-absolute top-0 start-0 w-100 h-100">
                    <div class="container position-relative d-flex flex-wrap py-xl-4 my-lg-2">
                        <div class="col-12 col-lg-4 mb-lg-0 mb-3 px-lg-0 px-3">
                            <div class="caption d-flex flex-column">
                                <strong class="fs-3 fw-normal text-white ls-05 lh-sm mb-1">e-Bülten’e kayıt olun</strong>
                                <p class="fs-6 fw-normal ls-05 lh-sm mb-0">Erken rezervasyon fırsatlarından <br> indirimli
                                    otel
                                    ve
                                    villalardan ilk siz haberdar olun!</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-7 col-lg-5 ps-3 pe-3 pe-lg-5 mb-sm-0 mb-3">
                            <form action="" class="d-flex align-items-end h-100">
                                <div class="newsletter-register w-100 d-flex align-items-center border-bottom pb-3">
                                    <input type="text" name="newsletter-register"
                                        class="bg-transparent text-white w-100 ps-3" placeholder="e-Posta Adresiniz">
                                    <button type="button" class="bg-transparent flex-shrink-0 px-2 py-1">
                                        <i class="icon-plus-1 text-theme-second"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="col-12 col-sm-5 col-lg-3 px-sm-0 px-3">
                            <ul
                                class="social-media h-100 d-flex align-items-center justify-content-sm-center justify-content-lg-end w-100">
                                <li class="me-3 pe-md-1">
                                    <a href="https://www.facebook.com"
                                        class="social-link btn btn-theme-first-dark bg-black bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center text-center facebook">
                                        <i class="icon-facebook"></i>
                                    </a>
                                </li>
                                <li class="me-3 pe-md-1">
                                    <a href="https://www.twitter.com"
                                        class="social-link btn btn-theme-first-dark bg-black bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center text-center facebook">
                                        <i class="icon-twitter"></i>
                                    </a>
                                </li>
                                <li class="me-3 pe-md-1">
                                    <a href="https://www.instagram.com"
                                        class="social-link btn btn-theme-first-dark bg-black bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center text-center facebook">
                                        <i class="icon-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->

        <footer class="Footer">
            <div class="Footer-in">
                <div class="Footer-left">
                    <NuxtLink to="/" class="Footer-logo">
                        <nuxt-img :src="'/img/site' + site_id + '/logo-dark.svg'" />
                    </NuxtLink>
                    <p>Kalkan Mah. Cumhuriyet Cd. No:48/2 Antalya/ Kaş </p>
                    <p><a href="">info@villakalkan.com.tr</a></p>
                    <div class="Footer-call">
                        <div class="Contact-support">
                            <a href="tel:+904449586">
                                <p><span>müşteri hizmetleri</span>444 95 86</p>
                            </a>
                        </div>
                    </div>
                    <div class="Footer-social">
                        <h5>Temasta Kalın</h5>
                        <a href="" class="Footer-social-item"><i class="icon-facebook"></i></a>
                        <a href="" class="Footer-social-item"><i class="icon-instagram"></i></a>
                        <a href="" class="Footer-social-item"><i class="icon-twitter"></i></a>
                    </div>
                </div>
                <div class="Footer-right">
                    <div class="Footer-right-top">
                        <div class="Footer-menu">
                            <div class="Footer-menu-item" v-for="(menu,index) in footerMenu" :key="index">
                                <h5 class="Footer-menu-item-head">{{ menu.text }}</h5>
                                
                                <template v-if="menu.children">
                                    <nuxt-link :to="'/'+child.href" v-for="child in menu.children" :key="child.href">{{ child.text }}</nuxt-link>
                                </template>
                            </div>

                               
                        </div>
                        <div class="Footer-creditcard">
                            <nuxt-img :src="'/img/site' + site_id + '/credit-card.svg'" />
                        </div>
                    </div>
                    <div class="Footer-right-bottom">
                        <div class="Footer-web">
                            <a href="" target="_blank" class="Footer-web-item wings"><img src="/img/logo-wings-grey.svg" alt=""></a>
                            <a href="" target="_blank" class="Footer-web-item"><img src="/img/logo-villakalkan-grey.svg" alt=""></a>
                            <a href="" target="_blank" class="Footer-web-item"><img src="/img/logo-otelbnb-grey.svg" alt=""></a>
                            <a href="" target="_blank" class="Footer-web-item"><img src="/img/logo-balayivillasi-grey.svg" alt=""></a>
                            <a href="" target="_blank" class="Footer-web-item"><img src="/img/logo-balayi-sepeti-grey.svg" alt=""></a>
                        </div>
                        <div class="Footer-tursab">
                            <a href="" class="Footer-tursab-item tursab"><img src="/img/tursab.png" alt=""></a>
                            <a href="" class="Footer-tursab-item etbis"><img src="/img/etbis.png" alt=""></a>
                        </div>
                        <div class="Footer-right-bottom-credit mobilex">
                            <div class="Footer-right-bottom-credit-text">
                                <i class="icon-creditcard-single"></i>
                                <h6>Tüm kartlara Taksit imkanı</h6>
                                <p>Villakalkan.com.tr’de</p>
                            </div>
                            <img src="/img/banks-grey.png" alt="">
                        </div>

                        <div class="Footer-right-bottom-social mobilex">
                            <a href="" class="Footer-right-bottom-social-item"><i class="icon-facebook"></i></a>
                            <a href="" class="Footer-right-bottom-social-item"><i class="icon-instagram"></i></a>
                            <a href="" class="Footer-right-bottom-social-item"><i class="icon-twitter"></i></a>
                        </div>
                        <div class="Footer-right-bottom-address mobilex">
                            <p>Kalkan Mah. Cumhuriyet Cd. No:48/2 Antalya/ Kaş </p>
                            <p><a href="">info@villakalkan.com.tr</a></p>
                        </div>
                    </div>
                    <div class="Footer-right-copyright">
                        <div class="Footer-right-copyright-left">
                            <nuxt-link to="/">Gizlilik Politikası</nuxt-link>
                            <nuxt-link to="/">Rezervasyon Koşulları</nuxt-link>
                            <nuxt-link to="/">KVKK Aydınlat Metni</nuxt-link>
                        </div>
                        <div class="Footer-right-copyright-right">
                            <p>© 2022 Villa Kalkan, bir <a href="">Wings Group</a> şirketidir. Tüm hakları saklıdır.</p>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
        <div class="Footer-mobile mobilex">
            <div class="container">
                <div class="Footer-mobile-in">
                    <div class="Footer-web mobile">
                        <a href="" class="Footer-web-item wings"><img src="/img/logo-wings-grey.svg" alt=""></a>
                        <a href="" class="Footer-web-item"><img src="/img/logo-villakalkan-grey.svg" alt=""></a>
                        <a href="" class="Footer-web-item"><img src="/img/logo-otelbnb-grey.svg" alt=""></a>
                        <a href="" class="Footer-web-item"><img src="/img/logo-balayitatil-grey.svg" alt=""></a>
                        <a href="" class="Footer-web-item"><img src="/img/logo-balayivillasi-grey.svg" alt=""></a>
                    </div>
                        <div class="Footer-tursab Footer-tursab-mobile">
                            <a href="" class="Footer-tursab-item tursab"><img src="/img/tursab.png" alt=""></a>
                            <a href="" class="Footer-tursab-item etbis"><img src="/img/etbis.png" alt=""></a>
                        </div>
                    <div class="Footer-mobile-text">
                        <div class="Footer-mobile-text-link">
                            <nuxt-link to="/">Rezervasyon Koşulları</nuxt-link>
                            <nuxt-link to="/">KVKK Aydınlat Metni</nuxt-link>
                        </div>
                        <div class="Footer-mobile-text-copyright">
                            <p>© 2022 Villa Kalkan, bir <a href="">Wings Group</a> şirketidir. Tüm hakları saklıdır.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="Navigation d-none">
            <a class="Navigation-item">
                <i class="icon-house"></i>
                <span>Anasayfa</span>
            </a>
            <a class="Navigation-item">
                <i class="icon-house"></i>
                <span>Otel</span>
            </a>
            <a class="Navigation-item middle">
                <div class="Navigation-item-wp">
                    <i class="icon-header-assistant"></i>
                </div>
                <span>Whatsapp</span>
            </a>
            <a class="Navigation-item">
                <i class="icon-house"></i>
                <span>Favoriler</span>
            </a>
            <a class="Navigation-item">
                <i class="icon-house"></i>
                <span>Telefon</span>
            </a>
        </section>

    </div>
</template>

<script>

export default {
    name: "Footer",
    data() {
        return {
            site_id: process.env.SITE,
            footerMenu: [],
        }
    },
    computed: {

    },
    methods: {

    },
    created() {
        const menuData = this.$store.state['settings'].menuData;
        this.footerMenu = menuData.foootermenu;
    },
}
</script>
