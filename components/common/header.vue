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
                        <img :src="'/img/site' + site_id + '/logo.svg'" alt="Logo">
                    </NuxtLink>

                    <div class="Header-menu" :class="{ active: mobileMenuActive }">
                        <template v-for="(item, index) in mainMenu">
                            <div class="Header-menu-item" v-if="!item.children">
                                <NuxtLink :to="'/' + item.href" class="Header-menu-item-link">{{ item.text }}</NuxtLink>
                            </div>
                            <div class="Header-menu-item" :class="{ active: subMenuActive }" v-else :id="index">
                                <!--  -->
                                <button type="button" class="Header-menu-item-link " @click="subMenuOpen($event)"
                                    :id="index">{{
                                        item.text }}  <i class="icon-right-arrows-new"></i></button>

                                <div class="Header-menu-item-in" :class="{ active: subMenuActive }">
                                    <template v-for="(subitem, index) in item.children">

                                        <button type="button" class="mobile-back-button"><i class="icon-right-arrows-new"
                                                @click="closeSubMenu($event)"></i>{{ subitem.text }}</button>

                                        <div class="Header-menu-sub-item " :class="{ 'single': index === 2 }" v-if="subitem.href !== 'ozel-bolge'">
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
                        <button type="button" class="Fav-button" aria-label="Favorileri aç" data-bs-toggle="modal"
                            data-bs-target="#favModal">
                            <i class="icon-heart-full"></i>
                        </button>
                        <button v-if="!$auth.loggedIn" type="button" class="Login-button" data-bs-toggle="modal"
                            data-bs-target="#loginModal">
                            <i class="icon-user"></i><span class="">ÜYE GİRİŞİ YAP </span>
                        </button>
                        <button v-else type="button"
                            class="membership btn btn-white btn-ripple text-primary fs-7 fw-medium ls-05 py-2 py-xl-3 px-3 px-xl-4 rounded-pill lh-sm shadow-none align-self-center d-md-flex d-none">
                            <span class="d-inline-block px-1 px-xl-2 py-1 py-xl-0" @click="logout()">{{ $auth.user.name }}
                                ÇIKIŞ
                                YAP</span>
                        </button>
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
            // e.stopPropagation()
            // console.log(e.target.nextElementSibling)
            // this.subMenuActive = !this.subMenuActive;

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


            //   console.log('scrollY', scrollY)
            // console.log(document.querySelector('#more-villas').offsetTop)
            if (scrollY >= 65) {
                document.querySelector('.Header-inner').classList.add('Header-inner-fixed');
                document.querySelector('.Search-villas').classList.add('Search-villas-scroll');
            } else {
                document.querySelector('.Header-inner').classList.remove('Header-inner-fixed')
                document.querySelector('.Search-villas').classList.remove('Search-villas-scroll')
            }

        };

        // window.onclick = function (event) {
        //     if (!event.target.matches('.Header-menu-item-in')) {
        //         console.log('this.submenuMenuActive',this.submenuMenuActive)
        //         var dropdowns = document.getElementsByClassName("Header-menu-item-in");
        //         var i;
        //         for (i = 0; i < dropdowns.length; i++) {
        //             var openDropdown = dropdowns[i];

        //             if (openDropdown.classList.contains('active')) {
        //                 openDropdown.classList.remove('active');
        //             }
        //         }
        //     }
        // }
    },
    created() {
        const menuData = {"topmenu":[{"text":"S.S.S","href":"sss","target":"_self"},{"text":"Hakkımızda","href":"hakkimizda","target":"_self"},{"text":"İletişim","href":"iletisim","target":"_self"}],
"mainmenu":[{"text":"Kiralık Villa","href":"listele","target":"_self"},{"text":"Villa Seçenekleri","href":"","target":"_self","children":[{"text":"Antalya Kiralık Villa","href":"","target":"_self","children":[{"text":"Fethiye Kiralık Villa","href":"fethiye-kiralik-villa","target":"_self"},{"text":"Dalaman Kiralık Villa","href":"dalaman-kiralik-villa","target":"_self"},{"text":"Bodrum Kiralık Villa","href":"bodrum-kiralik-villa","target":"_self"}]},{"text":"Muğla Kiralık Villa","href":"","target":"_self","children":[{"text":"Fethiye Kiralık Villa","href":"fethiye-kiralik-villa","target":"_self"},{"text":"Dalaman Kiralık Villa","href":"dalaman-kiralik-villa","target":"_self"},{"text":"Bodrum Kiralık Villa","href":"bodrum-kiralik-villa","target":"_self"}]}]},{"text":"Popüler Bölgeler","href":"","target":"_self","children":[{"text":"Özel Bölgeler","href":"","target":"_self","children":[{"text":"Çocuk Havuzlu","href":"cocuk-havuzlu","target":"_self"},{"text":"Deniz Manzaralı","href":"deniz-manzarali","target":"_self"}]},{"text":"Popüler Villa Seçenekleri","href":"","target":"_self","children":[{"text":"Fethiye Kiralık Villa","href":"fethiye-kiralik-villa","target":"_self"},{"text":"Dalaman Kiralık Villa","href":"dalaman-kiralik-villa","target":"_self"}]}]},{"text":"İletişim","href":"iletisim","target":"_self"}],
"footermenu":[{"text":"Otelbnb","href":"","target":"_self","children":[{"text":"Gizlilik Şartları","href":"gizlilik-sartlari","target":"_self"},{"text":"İptal Şartları","href":"iptal-sartlari","target":"_self"},{"text":"Banka Hesapları","href":"banka-hesaplari","target":"_self"}]},{"text":"Popüler Rotalar","href":"","target":"_self","children":[{"text":"Marmaris","href":"marmaris","target":"_self"},{"text":"Fethiye","href":"fethiye","target":"_self"},{"text":"Bodrum","href":"bodrum","target":"_self"}]},{"text":"Oteller","href":"","target":"_self","children":[{"text":"Antalya Otelleri","href":"antalya-otelleri","target":"_self"},{"text":"Muğla Otelleri","href":"mugla-otelleri","target":"_self"},{"text":"Fethiye Otelleri","href":"fethiye-otelleri","target":"_self"}]},{"text":"Villa Kategorileri","href":"","target":"_self","children":[{"text":"Balayı Villaları","href":"balayi-villalari","target":"_self"},{"text":"Deniz Manzaralı Villalar","href":"deniz-manzarali-villalar","target":"_self"},{"text":"Jakuzili Villalar","href":"jakuzili-villalar","target":"_self"}]}]};

        this.topMenu = menuData.topmenu;
        this.mainMenu = menuData.mainmenu;
        this.footerMenu = menuData.footermenu;
        // this.amenites = JSON.parse(JSON.stringify(searchData.amenites));


        console.log(JSON.stringify({
            topmenu: this.topMenu,
            //   amenites: this.amenites,
        }))
        console.log(this.mainMenu)
    },
}
</script>
