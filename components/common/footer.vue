<template>
    <div>
        <footer class="Footer">
            <div class="Footer-in">
                <div class="Footer-left">
                    <NuxtLink to="/" class="Footer-logo">
                        <nuxt-img :src="'/img/site' + site_id + '/logo-dark.svg'" />
                    </NuxtLink>
                    <p>{{ $store.state.site_settings.footer_address }}</p>
                    <p><a href="mailto:info@wings.com.tr">info@wings.com.tr</a></p>
                    <div class="Footer-call">
                        <div class="Contact-support">
                            <a :href="'tel:'+$store.state.site_settings.general_phone">
                                <p><span>müşteri hizmetleri</span>{{ $store.state.site_settings.general_phone }}</p>
                            </a>
                        </div>
                    </div>
                    <div class="Footer-social">
                        <h5>Temasta Kalın</h5>
                        <a :href="item.social_link" class="Footer-social-item" v-for="(item,index) in $store.state.site_settings.social" :key="index"><i :class="'icon-'+item.social_icon"></i></a>
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
                            <a href="https://wings.com.tr/" target="_blank" class="Footer-web-item wings"><nuxt-img src="/img/logo-wings-grey.svg" alt=""></nuxt-img></a>
                            <a href="https://villakalkan.com.tr/" target="_blank" class="Footer-web-item"><nuxt-img src="/img/logo-villakalkan-grey.svg" alt=""></nuxt-img></a>
                            <a href="#" target="_blank" class="Footer-web-item"><nuxt-img src="/img/logo-otelbnb-grey.svg" alt=""></nuxt-img></a>
                            <a href="https://balayivillasi.com.tr/" target="_blank" class="Footer-web-item"><nuxt-img src="/img/logo-balayivillasi-grey.svg" alt=""></nuxt-img></a>
                            <a href="https://balayisepeti.com.tr/" target="_blank" class="Footer-web-item"><nuxt-img src="/img/logo-balayi-sepeti-grey.svg" alt=""></nuxt-img></a>

                            
                        </div>
                        <div class="Footer-tursab">
                            <a :href="$store.state.site_settings.tursab_link" class="Footer-tursab-item tursab"><nuxt-img src="/img/tursab.png" alt=""></nuxt-img></a>
                            <a :href="$store.state.site_settings.etbis_link" class="Footer-tursab-item etbis"><nuxt-img src="/img/etbis.png" alt=""></nuxt-img></a>
                        </div>
                        <div class="Footer-right-bottom-credit mobilex">
                            <div class="Footer-right-bottom-credit-text">
                                <i class="icon-creditcard-single"></i>
                                <h6>Tüm kartlara Taksit imkanı</h6>
                                <p>Villakalkan.com.tr’de</p>
                            </div>
                            <nuxt-img src="/img/banks-grey.png" alt=""></nuxt-img>
                        </div>

                        <div class="Footer-right-bottom-social mobilex">
                            <a :href="item.social_link" class="Footer-right-bottom-social-item" v-for="(item,index) in $store.state.site_settings.social" :key="index"><i :class="'icon-'+item.social_icon"></i></a>
                        </div>
                        <div class="Footer-right-bottom-address mobilex">
                            <p>{{ $store.state.site_settings.footer_address }}</p>
                            <p><a href="mailto:info@wings.com.tr">info@wings.com.tr</a></p>
                        </div>
                    </div>
                    <div class="Footer-right-copyright">
                        <div class="Footer-right-copyright-left">
                            <nuxt-link to="/">Gizlilik Politikası</nuxt-link>
                            <nuxt-link to="/">Rezervasyon Koşulları</nuxt-link>
                            <nuxt-link to="/">KVKK Aydınlat Metni</nuxt-link>
                        </div>
                        <div class="Footer-right-copyright-right">
                            <p v-html="$store.state.site_settings.footer_copyright"></p>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
        <div class="Footer-mobile mobilex">
            <div class="container">
                <div class="Footer-mobile-in">
                    <div class="Footer-web mobile">
                        <a href="https://wings.com.tr/" target="_blank" class="Footer-web-item wings"><nuxt-img src="/img/logo-wings-grey.svg" alt=""></nuxt-img></a>
                            <a href="https://villakalkan.com.tr/" target="_blank" class="Footer-web-item"><nuxt-img src="/img/logo-villakalkan-grey.svg" alt=""></nuxt-img></a>
                            <a href="#" target="_blank" class="Footer-web-item"><nuxt-img src="/img/logo-otelbnb-grey.svg" alt=""></nuxt-img></a>
                            <a href="https://balayivillasi.com.tr/" target="_blank" class="Footer-web-item"><nuxt-img src="/img/logo-balayivillasi-grey.svg" alt=""></nuxt-img></a>
                            <a href="https://balayisepeti.com.tr/" target="_blank" class="Footer-web-item"><nuxt-img src="/img/logo-balayi-sepeti-grey.svg" alt=""></nuxt-img></a>
                    </div>
                        <div class="Footer-tursab Footer-tursab-mobile">      
                            <a :href="$store.state.site_settings.tursab_link" class="Footer-tursab-item tursab"><nuxt-img src="/img/tursab.png" alt=""></nuxt-img></a>
                            <a :href="$store.state.site_settings.etbis_link" class="Footer-tursab-item etbis"><nuxt-img src="/img/etbis.png" alt=""></nuxt-img></a>
                        </div>
                    <div class="Footer-mobile-text">
                        <div class="Footer-mobile-text-link">
                            <nuxt-link to="/">Rezervasyon Koşulları</nuxt-link>
                            <nuxt-link to="/">KVKK Aydınlat Metni</nuxt-link>
                        </div>
                        <div class="Footer-mobile-text-copyright">
                            <p v-html="$store.state.site_settings.footer_copyright"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Whatsapp">
            <a :href="$store.state.site_settings.wp_phone"><nuxt-img src="/img/wp-icon.svg" width="41" height="41" alt=""/></a>
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
