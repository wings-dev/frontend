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
        <div class="Header-opportunity d-none">
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
                        <nuxt-img :src="'/img/site' + site_id + '/logo.svg'" loading="lazy" :alt="'Logo ' + sitename"/>
                    </NuxtLink>

                    <div class="Header-menu" :class="{ active: mobileMenuActive }">
                        <div class="Header-menu-top">
                            <Nuxt-link :to="!$auth.loggedIn ? '/favorilerim' : '/user/favorilerim'"
                                class="Header-menu-top-fav">
                                <i class="icon-heart-full"></i>
                                <span>Favorilerim <span v-if="favoritiesLength">({{ favoritiesLength }})</span></span>
                            </Nuxt-link>
                            <b-button v-b-modal.loginModal v-if="!$auth.loggedIn" type="button" class="Login-button">
                                <span class="">ÜYE GİRİŞİ YAP </span>
                            </b-button>
                            <div class="dropdown " v-else>
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
                                    <NuxtLink class="dropdown-item" to="/user/kuponlar">KUPONLARIM</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink class="dropdown-item" to="/user/yardim-destek">YARDIM & DESTEK</NuxtLink>
                                </li>
                                <li><a class="dropdown-item" href="#" @click.prevent="logout()">ÇIKIŞ YAP</a></li>
                            </ul>
                        </div>
                        </div>
                        <div class="Header-menu-item">
                            <NuxtLink to="/kiralik-villa" class="Header-menu-item-link">Kiralık Villa</NuxtLink>
                        </div>
                        <div class="Header-menu-item">
                            <NuxtLink to="/yurtdisi-kiralik-villa" class="Header-menu-item-link">Yurtdışı Kiralık Villa</NuxtLink>
                        </div>
                        <div class="Header-menu-item">
                            <NuxtLink to="/otel" class="Header-menu-item-link">Otel</NuxtLink>
                        </div>
                        <div class="Header-menu-item">
                            <NuxtLink to="/hakkimizda" class="Header-menu-item-link">Hakkımızda</NuxtLink>
                        </div>
                        <div class="Header-menu-item">
                            <NuxtLink to="/iletisim" class="Header-menu-item-link">İletişim</NuxtLink>
                        </div>
                        <!-- <template v-for="(item, index) in mainMenu">
                            <div class="Header-menu-item" v-if="!item.children" :key="index">
                                <NuxtLink :to="'/' + item.href" class="Header-menu-item-link">{{ item.text }}</NuxtLink>
                            </div>

                            <div class="Header-menu-item otel" v-else :id="index" @mouseenter="handleMouseEnter(index)"
                                @mouseleave="handleMouseLeave(index)" :class="{ 'hover': hoveredLink === index }">
                                <button type="button" class="Header-menu-item-link menu-children menu-item"
                                    :data-dropdown="'dropdown' + index" :id="index">
                                    {{ item.text }}
                                    <i class="icon-right-arrow mobile"></i>
                                </button>

                                <div class="Header-menu-item-in menu-item-dropdown" :id="'dropdown' + index">
                                    <button type="button" class="mobile-back-button">
                                        <i class="icon-left-arrow" @click="closeSubMenu($event)"></i>
                                        Geri dön
                                    </button>

                                    <div class="Header-menu-item-otel" :class="{ 'with-img': item.image }">
                                        <div class="Header-menu-item-otel-left">
                                            <template v-for="(subitem, index) in item.children">
                                                <div class="Header-menu-item-otel-left-item">

                                                    <template v-if="subitem.children">
                                                        <h5 @click="toggleMenuItem(index)"
                                                            :class="{ 'active': openIndexes.includes(index) }">{{
                                                                subitem.text
                                                            }}<i class="icon-down-arrow mobile"></i></h5>
                                                        <div class="Header-menu-sub-item-list"
                                                            :class="{ 'active': openIndexes.includes(index) }">
                                                            <NuxtLink :to="'/' + subitemchildren.href"
                                                                class="Header-top-menu-item"
                                                                v-for="(subitemchildren, index) in subitem.children"
                                                                :key="index">
                                                                {{ subitemchildren.text }}
                                                            </NuxtLink>
                                                        </div>
                                                    </template>
                                                    <template v-else>
                                                        <nuxt-link :to="'/' + subitem.href"><b>{{ subitem.text
                                                        }}</b></nuxt-link>
                                                    </template>



                                                </div>
                                            </template>
                                        </div>
                                        <div class="Header-menu-item-otel-right" v-if="item.image">
                                            <nuxt-img src="/img/otel-menu.png" alt="Otel Kampanya" loading="lazy"></nuxt-img>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </template> -->
                        <div class="Header-menu-bottom">
                            <a :href="'tel:' + $store.state?.site_settings?.general_phone" class="Header-call">
                                <i class="icon-header-call"></i>
                                <p><span>müşteri hizmetleri</span>{{ $store.state?.site_settings?.general_phone }}</p>
                            </a>
                            <div class="Header-menu-bottom-social">
                                <a :href="item.social_link" class="Header-menu-bottom-social-item"
                                    v-for="(item, index) in $store.state?.site_settings?.social" :key="index"><i
                                        :class="'icon-' + item.social_icon"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="Header-buttons">
                        <button type="button" class="search-button" aria-label="Favorileri aç" id="searchButton"
                            @click="openSearch($event)">
                            <i class="icon-search2"></i>
                        </button>

                        <!--  -->
                        <notification></notification>

                        <Nuxt-link :to="!$auth.loggedIn ? '/favorilerim' : '/user/favorilerim'" class="Fav-button">
                            <i class="icon-heart-full"></i>
                        </Nuxt-link>
                        <b-button v-b-modal.loginModal v-if="!$auth.loggedIn" type="button" class="Login-button">
                            <i class="icon-user"></i><span class="">ÜYE GİRİŞİ YAP </span>
                        </b-button>
                        <div class="dropdown dropdown-user" v-else>
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
                                    <NuxtLink class="dropdown-item" to="/user/kuponlar">KUPONLARIM</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink class="dropdown-item" to="/user/yardim-destek">YARDIM & DESTEK</NuxtLink>
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
import Notification from '../common/notification.vue';
export default {
    name: "Header",
    data() {
        return {
            mobileMenuActive: false,
            subMenuActive: false,
            searchActive: false,
            site_id: process.env.SITE,
            sitename: process.env.SITE_NAME,
            topMenu: [],
            mainMenu: [],
            openIndexes: [],
            hoveredLink: null,
            labels: {
                days: 'Gün',
                hours: 'Saat',
                minutes: 'Dakika',
                seconds: 'Saniye'
            },
            favoritiesLength: 0
        }
    },
    components: { FlipCountdown, Notification },
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
                setTimeout(() => {
                    document.querySelector('body').classList.add('over')
                    document.querySelector('html').classList.add('over')
                }, 50)
            } else {
                setTimeout(() => {
                    document.querySelector('body').classList.remove('over')
                    document.querySelector('html').classList.remove('over')
                }, 50)
            }
        },
        searchActive() {
            setTimeout(() => {
                document.querySelector('.Search-villas').classList.toggle('Search_villas_active')
                document.querySelector('body').classList.add('over')
                document.querySelector('html').classList.add('over')
            }, 50)
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
            e.target.parentNode.parentNode.classList.remove('active')
            this.openIndexes = []
        },

        onRouteChange(to, from) {
            this.mobileMenuActive = false;
            this.hoveredLink = null;
        },
        toggleMenuItem(index) {
            const itemIndex = this.openIndexes.indexOf(index);
            if (itemIndex !== -1) {
                this.openIndexes.splice(itemIndex, 1);
            } else {
                this.openIndexes.push(index);
            }
        },
        handleMouseEnter(linkId) {
            this.hoveredLink = linkId;
        },
        handleMouseLeave() {
            this.hoveredLink = null;
        },

    },
    mounted() {

        if (window.innerWidth <= 991) {
            const menuItems = document.querySelectorAll(".menu-item");
            const menuItemsClose = document.querySelectorAll(".mobile-back-button");
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
            menuItemsClose.forEach((menuItemClose) => {
                menuItemClose.addEventListener("click", function (event) {
                    event.stopPropagation();
                    const dropdownId = this.getAttribute("data-dropdown");
                    if (dropdownId) {
                        const dropdown = document.getElementById(dropdownId);
                        if (dropdown.classList.contains("active")) {
                            closeAllDropdowns();
                        } else {
                            closeAllDropdowns(dropdownId);
                            dropdown.classList.remove("active");
                            this.parentNode.classList.remove("active");
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
        }

        const storedFavorites = localStorage.getItem('favorites');

        if (storedFavorites) {
            const ids = JSON.parse(storedFavorites);
            this.favoritiesLength = ids.length
        }
    },
    created() {

        const menuData = this.$store.state['settings'].menuData;

        this.mainMenu = menuData.mainmenu;
    },
}
</script>
