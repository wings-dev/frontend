<template>
    <header class="header bg-theme-first text-white border-bottom border-theme-first-light position-sticky top-0">
        <div class="header-top">
            <div class="container">
                <div class="header-top-in">
                    <a href="" class="header-top-contact">
                        <i class="icon-phone-call"></i>
                        <p><span>Yardım / Destek</span>444 8 484</p>
                    </a>
                    <div class="header-top-menu">
                        <a href="" class="header-top-menu-item">S.S.S</a>
                        <a href="/kurumsal" class="header-top-menu-item">Hakkımızda</a>
                        <a href="" class="header-top-menu-item">İletişim</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container d-flex py-2">
            <a href="/" class="header-logo logo-wrapper d-block py-3 py-sm-4 flex-shrink-0 me-auto me-xl-4 pe-3">

            </a>
            <nav class="header-menu flex-fill">
                <ul class="menu d-flex flex-column flex-xl-row align-items-xl-center ls-1 fw-medium h-100 mb-xl-0 mb-3">
                    <li class="h-100 me-xl-2 pe-xl-1"><a href="/kalkan-villalari" class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">Kiralık Villa</a></li>
                    <li class="h-100 me-xl-2 pe-xl-1"><a href="#!" class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">Bölgeler</a>
                    </li>
                    <li class="h-100 me-xl-2 pe-xl-1"><a href="#!" class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">Villa Seçenekleri</a></li>
                    <li class="h-100 me-xl-2 pe-xl-1"><a href="#!" class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">Nasıl Kiralarım</a></li>
                    <li class="h-100 me-xl-2 pe-xl-1"><a href="#!" class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">Hakkımızda</a></li>
                    <li class="h-100 me-xl-2 pe-xl-1"><a href="#!" class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">İletişim</a></li>
                </ul>
                <div class="btn btn-theme-first fs-7 ls-1 fw-medium w-100 py-2 d-md-none">
                    <span class="d-block py-1">ÜYE GİRİŞİ YAP</span>
                </div>
            </nav>
            <div class="fav-list-wrapper align-self-center me-1">
                <button type="button"
                    class="toggle-favs search-button flex-shrink-0 btn btn-theme-first-dark rounded-circle d-flex align-items-center justify-content-center shadow-none p-0"
                    aria-label="Favorileri aç" id="searchButton" @click="openSearch($event)">
                    <i class="icon-search"></i>
                </button>
                <div class="fav-list"></div>
            </div>
            <div class="fav-list-wrapper align-self-center me-3">
                <button type="button"
                    class="toggle-favs flex-shrink-0 btn btn-theme-second rounded-circle d-flex align-items-center justify-content-center shadow-none p-0"
                    aria-label="Favorileri aç" data-bs-toggle="modal" data-bs-target="#favModal">
                    <i class="icon-heart-full"></i>
                </button>
                <div class="fav-list"></div>
            </div>
            <button v-if="!$auth.loggedIn" type="button"
                class="membership btn btn-white btn-ripple text-primary fs-7 fw-medium ls-05 py-2 py-xl-3 px-3 px-xl-4 rounded-pill lh-sm shadow-none align-self-center d-md-flex d-none"
                data-bs-toggle="modal" data-bs-target="#signupModal">
                <span class="d-inline-block px-1 px-xl-2 py-1 py-xl-0">ÜYE GİRİŞİ YAP</span>
            </button>
            <button v-else type="button"
                class="membership btn btn-white btn-ripple text-primary fs-7 fw-medium ls-05 py-2 py-xl-3 px-3 px-xl-4 rounded-pill lh-sm shadow-none align-self-center d-md-flex d-none">
                <span class="d-inline-block px-1 px-xl-2 py-1 py-xl-0" @click="logout()">{{ $auth.user.name }} ÇIKIŞ
                    YAP</span>
            </button>
            <button type="button" class="menu-toggle bg-transparent align-self-center d-xl-none ms-xl-0 ms-md-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <div class="header-menu-shadow position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-25"
            >
        </div>
    </header>
</template>
  
<script>

export default {
    name: "Header",
    data() {
        return {
        }
    },
    computed: {

    },
    methods: {
        openSearch(e) {
            document.querySelector('.Search-villas').classList.toggle('Search-villas-active')
            document.querySelector('body').classList.toggle("over")
            document.querySelector('#searchButton i').classList.toggle('icon-search')
            document.querySelector('#searchButton i').classList.toggle('icon-login-close')
        }
    }
}
</script>
  