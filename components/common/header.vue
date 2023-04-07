<template>
    <header class="Header">
        <!-- <div class="Header-top">
            <div class="container">
                <div class="Header-top-in">
                    <a href="" class="Header-top-contact">
                        <i class="icon-phone-call"></i>
                        <p><span>Yardım / Destek</span>444 8 484</p>
                    </a>
                    <div class="Header-top-menu">
                        <NuxtLink :to="'/' + item.href" class="Header-top-menu-item" v-for="(item, index) in topMenu"
                            :key="index">{{ item.text }}</NuxtLink>

                    </div>
                </div>
            </div>
        </div> -->
        <div class="Header-opportunity">
            <div class="container">
                <div class="Header-opportunity-in">
                    <h3>Erken rezervasyon tarihlerini kaçırma!</h3>
                    <div class="Header-opportunity-count">
                        <client-only>
                            <flip-countdown deadline="2023-04-15 00:00:00" :labels="labels"></flip-countdown>
                        </client-only>
                    </div>
                    <div class="Header-opportunity-button">
                        <nuxt-link to="/">HEMEN KEŞFET</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="Header-inner">
            <div class="container h-100">
                <div class="Header-inner-in">
                    <NuxtLink to="/" class="Header-logo">
                        <nuxt-img :src="'/img/site' + site_id + '/logo.svg'" />
                    </NuxtLink>

                    <div class="Header-menu" :class="{ active: mobileMenuActive }">
                        <template v-for="(item, index) in mainMenu">
                            <div class="Header-menu-item" v-if="!item.children" :key="index">
                                <NuxtLink :to="'/' + item.href" class="Header-menu-item-link">{{ item.text }}</NuxtLink>
                            </div>

                            <div class="Header-menu-item otel" v-else :id="index">
                                <!--  -->
                                <button type="button" class="Header-menu-item-link menu-children menu-item"
                                    :data-dropdown="'dropdown' + index" :id="index">{{
                                        item.text }}
                                    <i class="icon-right-arrows-new"></i>
                                </button>

                                <div class="Header-menu-item-in menu-item-dropdown" :id="'dropdown' + index">
                                    <button type="button" class="mobile-back-button">
                                            <i class="icon-right-arrows-new" @click="closeSubMenu($event)"></i>
                                            {{ item.text }}
                                        </button>
                                    
                                        <div class="Header-menu-item-otel" :class="{'with-img':item.image}">
                                            <div class="Header-menu-item-otel-left">
                                                <template v-for="subitem in item.children">
                                                <div class="Header-menu-item-otel-left-item">
                                                    <h5>{{ subitem.text }}{{ subitem.href }}</h5>
                                                    <div class="Header-menu-sub-item-list">
                                                        <NuxtLink :to="'/' + subitemchildren.href" class="Header-top-menu-item"
                                                    v-for="(subitemchildren, index) in subitem.children" :key="index">{{
                                                        subitemchildren.text }}</NuxtLink>
                                                    </div>
                                                </div>
                                            </template>
                                            </div>
                                            <div class="Header-menu-item-otel-right" v-if="item.image">
                                                <img src="/img/otel-menu.png" alt="">
                                            </div>
                                        </div>


                                        <!-- <div class="Header-menu-sub-villa" v-else>
                                            <a href="/asd" class="Header-menu-sub-villa-item">
                                                <i class="icon-child-pool-villas"></i>
                                                <span>Çocuk Havuzlu</span>
                                            </a>
                                            <a href="" class="Header-menu-sub-villa-item">
                                                <i class="icon-seaview-villas"></i>
                                                <span>Deniz Manzaralı</span>
                                            </a>
                                            <a href="" class="Header-menu-sub-villa-item">
                                                <i class="icon-honeymoon-villas"></i>
                                                <span>Özel Havuzlu</span>
                                            </a>
                                            <a href="" class="Header-menu-sub-villa-item">
                                                <i class="icon-jacuzi-villas"></i>
                                                <span>Jakuzili Villalar</span>
                                            </a>
                                            <a href="" class="Header-menu-sub-villa-item">
                                                <i class="icon-lux-villas"></i>
                                                <span>Lüks Villalar</span>
                                            </a>
                                            <a href="" class="Header-menu-sub-villa-item">
                                                <i class="icon-honeymoon-villas"></i>
                                                <span>Balayı Villaları</span>
                                            </a>
                                        </div> -->
                                        <!-- <div class="Header-menu-sub-item popular">
                                            <h5>Popüler Villa Seçenekleri</h5>
                                            <div class="Header-menu-sub-item-list">
                                                <a href="">Fethiye Kiralık Villa</a>
                                                <a href="">Bodrum Kiralık Villa</a>
                                                <a href="">Dalaman Kiralık Villa</a>
                                                <a href="">Fethiye Kiralık Villa</a>
                                                <a href="">Bodrum Kiralık Villa</a>
                                                <a href="">Dalaman Kiralık Villa</a>
                                                <a href="">Fethiye Kiralık Villa</a>
                                                <a href="">Bodrum Kiralık Villa</a>
                                                <a href="">Dalaman Kiralık Villa</a>
                                                <a href="">Dalaman Kiralık Villa</a>
                                            </div>
                                        </div> -->

                                    

                                </div>

                            </div>
                        </template>

                    </div>
                    <div class="Header-buttons">
                        <button type="button" class="search-button" aria-label="Favorileri aç" id="searchButton"
                            @click="openSearch($event)">
                            <i class="icon-search2"></i>
                        </button>
                        <div class="dropdown Notification">
                            <button type="button" class="search-button" aria-label="Bildirimler" id=""
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="icon-bell"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <h5>BİLDİRİM MERKEZİ</h5>
                                <li><a class="dropdown-item active" href="#">%50’ye varan erken rezervasyon indirimleri için
                                        son
                                        gün 3 nisan!</a></li>
                                <li><a class="dropdown-item" href="#">Kıbrıs600 Kuponu ile 600TL indirim kodunu
                                        tanımlayın!</a></li>
                                <li><a class="dropdown-item" href="#">Şeker tadında bayram fırsatlarını yakala</a></li>
                                <li><a class="dropdown-item" href="#">Şeker tadında bayram fırsatlarını yakala</a></li>
                            </ul>
                        </div>

                        <Nuxt-link :to="!$auth.loggedIn ? '/favorilerim' : '/user/favorilerim'" class="Fav-button">
                            <i class="icon-heart-full"></i>
                        </Nuxt-link>
                        <!-- <button type="button" class="Fav-button" aria-label="Favorileri aç" data-bs-toggle="modal"
                            data-bs-target="#favModal">
                            <i class="icon-heart-full"></i>
                        </button> -->
                        <b-button v-b-modal.loginModal v-if="!$auth.loggedIn" type="button" class="Login-button">
                            <i class="icon-user"></i><span class="">ÜYE GİRİŞİ YAP </span>
                        </b-button>
                        <!--
                        <button v-else type="button"
                            class="membership btn btn-white btn-ripple text-primary fs-7 fw-medium ls-05 py-2 py-xl-3 px-3 px-xl-4 rounded-pill lh-sm shadow-none align-self-center d-md-flex d-none">
                            <span class="d-inline-block px-1 px-xl-2 py-1 py-xl-0" @click="logout()">{{ $auth.user.name }}
                                ÇIKIŞ
                                YAP</span>
                        </button> -->
                        <div class="dropdown" v-else>
                            <button class="Login-button-user dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i :class="greetingIcon"></i>
                                <p><span>{{ greeting }}</span>{{ $auth.user.name }}</p>
                            </button>
                            <ul class="dropdown-menu Login-button-user-menu" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <NuxtLink class="dropdown-item" to="/user/uyelik">BİLGİLERİNİZ</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink class="dropdown-item" to="/user/rezervasyonlar">FAVORİLERİM</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink class="dropdown-item" to="/user/rezervasyonlar">REZERVASYONLARIM</NuxtLink>
                                </li>
                                <li><a class="dropdown-item" href="#" @click.prevent="logout()">ÇIKIŞ YAP</a></li>
                            </ul>
                        </div>
                        <button type="button" class="menu-toggle" @click="mobileMenuOpen"
                            :class="{ hide: mobileMenuActive }">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown'
export default {
    name: "Header",
    data() {
        return {
            mobileMenuActive: false,
            subMenuActive: false,
            searchActive: false,
            site_id: process.env.SITE,
            topMenu: [],
            mainMenu: [],
            footerMenu: [],
            labels: {
                days: 'Gün',
                hours: 'Saat',
                minutes: 'Dakika',
                seconds: 'Saniye'
            }
        }
    },
    components: { FlipCountdown },
    computed: {
        greeting() {
            const saat = new Date().getHours();

            if (saat >= 6 && saat < 18) {
                return 'İyi Günler!';
            } else {
                return 'İyi Akşamlar!';
            }
        },
        greetingIcon() {
            const saat = new Date().getHours();

            if (saat >= 6 && saat < 18) {
                return 'icon-good-night';
            } else {
                return 'icon-good-night';
            }
        }
    },
    watch: {
        '$route': {
            handler: 'onRouteChange',
            immediate: true
        },
        mobileMenuActive() {
            if (this.mobileMenuActive == true) {
            } else {
            }
        },
        searchActive() {
            document.querySelector('.Search-villas').classList.toggle('Search_villas_active')
            document.querySelector('body').classList.add('over')
        }
    },
    methods: {
        async logout() {
            await this.$auth.logout()
            location.reload();
        },
        openSearch(e) {
            this.subMenuActive = false
            this.searchActive = !this.searchActive
        },
        mobileMenuOpen() {
            this.mobileMenuActive = !this.mobileMenuActive;
        },

        closeSubMenu(e) {
            if (this.subMenuActive == true) {
                this.subMenuActive = false
            }
            if (this.subMenuVillasActive == true) {
                this.subMenuVillasActive = false
            }
        },

        onRouteChange(to, from) {
            this.mobileMenuActive = false;
        }

    },
    mounted() {

        window.onscroll = function () {
            if (scrollY >= 65) {
                document.querySelector('.Header-inner').classList.add('Header-inner-fixed');
                document.querySelector('.Search-villas').classList.add('Search-villas-scroll');
            } else {
                document.querySelector('.Header-inner').classList.remove('Header-inner-fixed')
                document.querySelector('.Search-villas').classList.remove('Search-villas-scroll')
            }

        };

        const menuItems = document.querySelectorAll(".menu-item");
        const dropdowns = document.querySelectorAll(".menu-item-dropdown");

        function closeAllDropdowns(exceptDropdownId) {
            dropdowns.forEach((dropdown) => {
                if (dropdown.id !== exceptDropdownId) {
                    dropdown.classList.remove("active");
                }

                dropdown.parentNode.classList.remove("active");
            });
        }
        menuItems.forEach((menuItem) => {
            menuItem.addEventListener("click", function (event) {
                event.stopPropagation();
                const dropdownId = this.getAttribute("data-dropdown");
                if (dropdownId) {
                    const dropdown = document.getElementById(dropdownId);
                    if (dropdown.classList.contains("active")) {
                        closeAllDropdowns();
                    } else {
                        closeAllDropdowns(dropdownId);
                        dropdown.classList.add("active");
                        this.parentNode.classList.add("active");
                    }
                } else {
                    closeAllDropdowns();
                }
            });
        });
        dropdowns.forEach((dropdown) => {
            dropdown.addEventListener("click", function (event) {
                event.stopPropagation();
            });
        });
        document.body.addEventListener("click", function (event) {

            if (event.target.closest(".menu-item-dropdown") === null) {
                closeAllDropdowns();
            }
        });


    },
    created() {
        // const menuData = { "topmenu": [{ "href": "sss", "text": "S.S.S", "target": "_self" }, { "href": "hakkimizda", "text": "Hakk\u0131m\u0131zda", "target": "_self" }, { "href": "blog", "text": "Blog", "target": "_self" }, { "href": "iletisim", "text": "\u0130leti\u015fim", "target": "_self" }], "mainmenu": [{ "href": "kiralik-villa", "text": "Kiral\u0131k Villalar", "target": "_self" }, { "href": "", "text": "Villa Se\u00e7enekleri", "target": "_self", "children": [{ "href": "", "text": "Antalya Kiral\u0131k Villa", "target": "_self", "children": [{ "href": "fethiye-kiralik-villa", "text": "Fethiye Kiral\u0131k Villa", "target": "_self" }, { "href": "dalaman-kiralik-villa", "text": "Dalaman Kiral\u0131k Villa", "target": "_self" }, { "href": "bodrum-kiralik-villa", "text": "Bodrum Kiral\u0131k Villa", "target": "_self" }] }, { "href": "", "text": "Mu\u011fla Kiral\u0131k Villa", "target": "_self", "children": [{ "href": "fethiye-kiralik-villa", "text": "Fethiye Kiral\u0131k Villa", "target": "_self" }, { "href": "dalaman-kiralik-villa", "text": "Dalaman Kiral\u0131k Villa", "target": "_self" }, { "href": "bodrum-kiralik-villa", "text": "Bodrum Kiral\u0131k Villa", "target": "_self" }] }] }, { "href": "", "text": "Pop\u00fcler B\u00f6lgeler", "target": "_self", "children": [{ "href": "ozel-bolge", "text": "\u00d6zel B\u00f6lgeler", "target": "_self", "children": [{ "href": "cocuk-havuzlu", "text": "\u00c7ocuk Havuzlu", "target": "_self" }, { "href": "deniz-manzarali", "text": "Deniz Manzaral\u0131", "target": "_self" }, { "href": "ozel-havuzlu", "text": "\u00d6zel Havuzlu", "target": "_self" }, { "href": "jakuzili-villalar", "text": "Jakuzili Villalar", "target": "_self" }, { "href": "luks-villalar", "text": "L\u00fcks Villalar", "target": "_self" }, { "href": "balayi-villalari", "text": "Balay\u0131 Villalar\u0131", "target": "_self" }] }, { "href": "", "text": "Pop\u00fcler Villa Se\u00e7enekleri", "target": "_self", "children": [{ "href": "fethiye-kiralik-villa", "text": "Fethiye Kiral\u0131k Villa", "target": "_self" }, { "href": "dalaman-kiralik-villa", "text": "Dalaman Kiral\u0131k Villa", "target": "_self" }, { "href": "bodrum-kiralik-villa", "text": "Bodrum Kiral\u0131k Villa", "target": "_self" }, { "href": "marmaris-kiralik-villa", "text": "Marmaris Kiral\u0131k Villa", "target": "_self" }] }] }, { "href": "iletisim", "text": "\u0130leti\u015fim", "target": "_self" }], "foootermenu": [{ "href": "", "text": "Villa Kalkan", "target": "_self" }, { "href": "gizlilik-politikasi", "text": "Gizlilik Politikas\u0131", "target": "_self" }, { "href": "kvkk-aydinlatma-metni", "text": "KVKK", "target": "_self" }, { "href": "rezervasyon-kosullari", "text": "Rezervasyon Ko\u015fullar\u0131", "target": "_self" }] }

        const menuData = this.$store.state['settings'].menuData;

        // this.amenites = JSON.parse(JSON.stringify(searchData.amenites));

        this.mainMenu = menuData.mainmenu;
    },
}
</script>
