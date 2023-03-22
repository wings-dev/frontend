<template>
    <header class="Header">
        <div class="Header-top">
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
        </div>

        <div class="Header-inner">
            <div class="container h-100">
                <div class="Header-inner-in">
                    <NuxtLink to="/" class="Header-logo">
                        <nuxt-img :src="'/img/site' + site_id + '/logo.svg'" />
                    </NuxtLink>

                    <div class="Header-menu" :class="{ active: mobileMenuActive }">
                        <template v-for="(item, index) in mainMenu">
                            <div class="Header-menu-item" v-if="!item.children">
                                <NuxtLink :to="'/' + item.href" class="Header-menu-item-link">{{ item.text }}</NuxtLink>
                            </div>
                            <div class="Header-menu-item " :class="{ active: subMenuActive }" v-else :id="index">
                                <!--  -->
                                <button type="button" class="Header-menu-item-link menu-children"
                                    @click="subMenuOpen($event)" :id="index">{{
                                        item.text }}<i class="icon-right-arrows-new"></i></button>

                                <div class="Header-menu-item-in" :class="{ active: subMenuActive }">
                                    <template v-for="(subitem, index) in item.children">

                                        <button type="button" class="mobile-back-button"><i class="icon-right-arrows-new"
                                                @click="closeSubMenu($event)"></i>{{ subitem.text }}</button>

                                        <div class="Header-menu-sub-item " :class="{ 'single': index === 2 }"
                                            v-if="subitem.href !== 'ozel-bolge'">
                                            <h5>{{ subitem.text }}{{ subitem.href }}</h5>
                                            <div class="Header-menu-sub-item-list">
                                                <NuxtLink :to="'/' + subitemchildren.href" class="Header-top-menu-item"
                                                    v-for="(subitemchildren, index) in subitem.children" :key="index">{{
                                                        subitemchildren.text }}</NuxtLink>
                                            </div>
                                        </div>

                                        <div class="Header-menu-sub-villa" v-else>
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
                                        </div>
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

                                    </template>
                                    <!-- <div class="Header-menu-sub-item">
                                    <h5>Muğla Kiralık Villa</h5>
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
                                </div>
                                <div class="Header-menu-sub-item single">
                                    <h5>Diğer Bölgeler</h5>
                                    <div class="Header-menu-sub-item-list">
                                        <a href="">Fethiye Kiralık Villa</a>
                                        <a href="">Bodrum Kiralık Villa</a>
                                        <a href="">Dalaman Kiralık Villa</a>
                                        <a href="">Fethiye Kiralık Villa</a>
                                        <a href="">Bodrum Kiralık Villa</a>
                                    </div>
                                </div> -->
                                </div>

                            </div>
                        </template>

                    </div>
                    <div class="Header-buttons">
                        <button type="button" class="search-button" aria-label="Favorileri aç" id="searchButton"
                            @click="openSearch($event)">
                            <i class="icon-search"></i>
                        </button>
                        <Nuxt-link to="/favs" class="Fav-button">
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
                                <i class="icon-good-night"></i>
                                <p><span>İyi Akşamlar</span>{{ $auth.user.name }}</p>
                            </button>
                            <ul class="dropdown-menu Login-button-user-menu" aria-labelledby="dropdownMenuButton1">
                                <li><NuxtLink class="dropdown-item" to="/user/uyelik"><i
                                            class="icon-right-arrows-new"></i>BİLGİLERİNİZ</NuxtLink></li>
                                <li><a class="dropdown-item" href="#"><i class="icon-right-arrows-new"></i>FAVORİLERİM</a>
                                </li>
                                <li><NuxtLink class="dropdown-item" to="/user/rezervasyonlar"><i
                                            class="icon-right-arrows-new"></i>REZERVASYONLARIM</NuxtLink></li>
                                <li><a class="dropdown-item" href="#" @click.prevent="logout()"><i
                                            class="icon-right-arrows-new"></i>ÇIKIŞ YAP</a></li>
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

export default {
    name: "Header",
    data() {
        return {
            mobileMenuActive: false,
            subMenuActive: false,
            site_id: process.env.SITE,
            topMenu: [],
            mainMenu: [],
            footerMenu: [],
        }
    },
    computed: {

    },
    methods: {
        async logout() {
            await this.$auth.logout()
            location.reload();
        },
        openSearch(e) {
            document.querySelector('.Search-villas').classList.toggle('Search_villas_active')
            document.querySelector('body').classList.toggle("over")
            document.querySelector('#searchButton i').classList.toggle('icon-search')
            document.querySelector('#searchButton i').classList.toggle('icon-login-close')
        },
        mobileMenuOpen() {
            this.mobileMenuActive = !this.mobileMenuActive;
            document.querySelector('body').classList.toggle("over")
        },
        subMenuOpen(e) {

            document.querySelectorAll('.Header-menu-item').forEach(element => {
                if (element.classList.contains('active') && element.id !== e.target.id) {
                    element.classList.remove('active')
                    element.querySelector('.Header-menu-item-in').classList.remove('active')
                }
                if (element.id == e.target.id) {
                    e.target.parentNode.classList.toggle('active')
                    e.target.nextElementSibling.classList.toggle('active')
                }
            });

        },

        closeSubMenu(e) {
            if (this.subMenuActive == true) {
                this.subMenuActive = false
            }
            if (this.subMenuVillasActive == true) {
                this.subMenuVillasActive = false
            }
        },
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

        // window.onclick = function (event) {
        //     console.log(event)
        //     if (!event.target.matches('.menu-children')) {
        //         // console.log('this.submenuMenuActive',this.submenuMenuActive)
        //         console.log(event.target)
        //         var dropdowns = document.getElementsByClassName("Header-menu-item-in");
        //         var i;
        //         for (i = 0; i < dropdowns.length; i++) {
        //             var openDropdown = dropdowns[i];

        //             if (openDropdown.classList.contains('active')) {
        //                 openDropdown.classList.remove('active');
        //             }
        //         }
        //     }
        //     if(event.target.matches('.Header-menu-item-in')){
        //         event.stopPropagation();
        //     }
        // }

    },
    created() {
        const menuData = { "topmenu": [{ "href": "sss", "text": "S.S.S", "target": "_self" }, { "href": "hakkimizda", "text": "Hakk\u0131m\u0131zda", "target": "_self" }, { "href": "blog", "text": "Blog", "target": "_self" }, { "href": "iletisim", "text": "\u0130leti\u015fim", "target": "_self" }], "mainmenu": [{ "href": "kiralik-villa", "text": "Kiral\u0131k Villalar", "target": "_self" }, { "href": "", "text": "Villa Se\u00e7enekleri", "target": "_self", "children": [{ "href": "", "text": "Antalya Kiral\u0131k Villa", "target": "_self", "children": [{ "href": "fethiye-kiralik-villa", "text": "Fethiye Kiral\u0131k Villa", "target": "_self" }, { "href": "dalaman-kiralik-villa", "text": "Dalaman Kiral\u0131k Villa", "target": "_self" }, { "href": "bodrum-kiralik-villa", "text": "Bodrum Kiral\u0131k Villa", "target": "_self" }] }, { "href": "", "text": "Mu\u011fla Kiral\u0131k Villa", "target": "_self", "children": [{ "href": "fethiye-kiralik-villa", "text": "Fethiye Kiral\u0131k Villa", "target": "_self" }, { "href": "dalaman-kiralik-villa", "text": "Dalaman Kiral\u0131k Villa", "target": "_self" }, { "href": "bodrum-kiralik-villa", "text": "Bodrum Kiral\u0131k Villa", "target": "_self" }] }] }, { "href": "", "text": "Pop\u00fcler B\u00f6lgeler", "target": "_self", "children": [{ "href": "ozel-bolge", "text": "\u00d6zel B\u00f6lgeler", "target": "_self", "children": [{ "href": "cocuk-havuzlu", "text": "\u00c7ocuk Havuzlu", "target": "_self" }, { "href": "deniz-manzarali", "text": "Deniz Manzaral\u0131", "target": "_self" }, { "href": "ozel-havuzlu", "text": "\u00d6zel Havuzlu", "target": "_self" }, { "href": "jakuzili-villalar", "text": "Jakuzili Villalar", "target": "_self" }, { "href": "luks-villalar", "text": "L\u00fcks Villalar", "target": "_self" }, { "href": "balayi-villalari", "text": "Balay\u0131 Villalar\u0131", "target": "_self" }] }, { "href": "", "text": "Pop\u00fcler Villa Se\u00e7enekleri", "target": "_self", "children": [{ "href": "fethiye-kiralik-villa", "text": "Fethiye Kiral\u0131k Villa", "target": "_self" }, { "href": "dalaman-kiralik-villa", "text": "Dalaman Kiral\u0131k Villa", "target": "_self" }, { "href": "bodrum-kiralik-villa", "text": "Bodrum Kiral\u0131k Villa", "target": "_self" }, { "href": "marmaris-kiralik-villa", "text": "Marmaris Kiral\u0131k Villa", "target": "_self" }] }] }, { "href": "iletisim", "text": "\u0130leti\u015fim", "target": "_self" }], "foootermenu": [{ "href": "", "text": "Villa Kalkan", "target": "_self" }, { "href": "gizlilik-politikasi", "text": "Gizlilik Politikas\u0131", "target": "_self" }, { "href": "kvkk-aydinlatma-metni", "text": "KVKK", "target": "_self" }, { "href": "rezervasyon-kosullari", "text": "Rezervasyon Ko\u015fullar\u0131", "target": "_self" }] }

        this.topMenu = menuData.topmenu;
        this.mainMenu = menuData.mainmenu;
        this.footerMenu = menuData.footermenu;
    },
}
</script>
