<template>
  <div>
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
              <a href="hakkimizda.php" class="header-top-menu-item">Hakkımızda</a>
              <a href="" class="header-top-menu-item">İletişim</a>
            </div>
          </div>
        </div>
      </div>
      <div class="container d-flex py-2">
        <a href="index.php" class="header-logo logo-wrapper d-block py-3 py-sm-4 flex-shrink-0 me-auto me-xl-4 pe-3">

        </a>
        <nav class="header-menu flex-fill">
          <ul class="menu d-flex flex-column flex-xl-row align-items-xl-center ls-1 fw-medium h-100 mb-xl-0 mb-3">
            <li class="h-100 me-xl-2 pe-xl-1"><a href="#!"
                class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">Villa
                Holidays</a></li>
            <li class="h-100 me-xl-2 pe-xl-1"><a href="#!"
                class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">Destinations</a>
            </li>
            <li class="h-100 me-xl-2 pe-xl-1"><a href="#!"
                class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">Villa
                Types</a></li>
            <li class="h-100 me-xl-2 pe-xl-1"><a href="#!"
                class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">Special
                Offers</a></li>
            <li class="h-100 me-xl-2 pe-xl-1"><a href="#!"
                class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">Services</a>
            </li>
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
            aria-label="Favorileri aç">
            <i class="icon-heart-full"></i>
          </button>
          <div class="fav-list"></div>
        </div>
        <button type="button"
          class="membership btn btn-white btn-ripple text-primary fs-7 fw-medium ls-05 py-2 py-xl-3 px-3 px-xl-4 rounded-pill lh-sm shadow-none align-self-center d-md-flex d-none"
          data-bs-toggle="modal" data-bs-target="#signupModal">
          <span class="d-inline-block px-1 px-xl-2 py-1 py-xl-0">ÜYE GİRİŞİ YAP</span>
        </button>
        <button type="button" class="menu-toggle bg-transparent align-self-center d-xl-none ms-xl-0 ms-md-4"
          onclick="$(this).toggleClass('hide');$('.header-menu').toggleClass('show');$('.header-menu-shadow').toggleClass('show');">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="header-menu-shadow position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-25"
        onclick="$(this).removeClass('show');$('.header-menu').removeClass('show');$('.menu-toggle').removeClass('hide');">
      </div>
    </header>

    <main class="main">
      <section class="search-engine-section position-relative pt-3">
        <div class="container pt-1">
          <form action="" class="search-engine">
            <nav>
              <div class="nav nav-tabs border-0 lh-sm" id="search-tab" role="tablist">
                <button class="nav-link text-white ls-05 py-2 py-sm-3 px-3 px-sm-4 mb-0 active" id="villa-tab"
                  data-bs-toggle="tab" data-bs-target="#villa" type="button" role="tab" aria-controls="villa"
                  aria-selected="false">
                  <span class="d-inline-block fw-medium px-2 px-sm-3 py-1">Yurt İçi Villalar</span>
                </button>
                <button class="nav-link text-white ls-05 py-2 py-sm-3 px-3 px-sm-4 mb-0 " disabled id="otel-tab"
                  data-bs-toggle="tab" data-bs-target="#otel" type="button" role="tab" aria-controls="otel"
                  aria-selected="true">
                  <span class="d-inline-block fw-medium px-2 px-sm-3 py-1">Yurt Dışı Villalar</span>
                  <span class="comingsoon">ÇOK YAKINDA</span>
                </button>
                <button class="nav-link text-white ls-05 py-2 py-sm-3 px-3 px-sm-4 mb-0 d-none" disabled id="otel-tab"
                  data-bs-toggle="tab" data-bs-target="#otel" type="button" role="tab" aria-controls="otel"
                  aria-selected="true">
                  <span class="d-inline-block fw-medium px-2 px-sm-3 py-1">Otel Rezervasyon</span>
                  <span class="comingsoon">ÇOK YAKINDA</span>
                </button>
              </div>
            </nav>
            <div class="tab-content" id="search-tabContent">
              <div class="tab-pane show active" id="villa" role="tabpanel" aria-labelledby="villa-tab">

                <search-villa-component></search-villa-component>

              </div>
            </div>
          </form>
        </div>
      </section>

      <Nuxt />

    </main>
    <section class="newsletter-section position-relative">
      <div class="container-wide">
        <div class="newsletter bg-theme-first-dark rounded-xl position-relative overflow-hidden py-4 py-sm-5">
          <img src="/img/spacer.gif" data-src="/uploads/newsletter-bg.png" alt="newsletter background"
            class="newsletter-bg lazy cover position-absolute top-0 start-0 w-100 h-100">
          <div class="container position-relative d-flex flex-wrap py-xl-4 my-lg-2">
            <div class="col-12 col-lg-4 mb-lg-0 mb-3 px-lg-0 px-3">
              <div class="caption d-flex flex-column">
                <strong class="fs-3 fw-normal text-white ls-05 lh-sm mb-1">e-Bülten’e kayıt olun</strong>
                <p class="fs-6 fw-normal ls-05 lh-sm mb-0">Erken rezervasyon fırsatlarından <br> indirimli otel ve
                  villalardan ilk siz haberdar olun!</p>
              </div>
            </div>
            <div class="col-12 col-sm-7 col-lg-5 ps-3 pe-3 pe-lg-5 mb-sm-0 mb-3">
              <form action="" class="d-flex align-items-end h-100">
                <div class="newsletter-register w-100 d-flex align-items-center border-bottom pb-3">
                  <input type="text" name="newsletter-register" class="bg-transparent text-white w-100 ps-3"
                    placeholder="e-Posta Adresiniz">
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
    </section>
    <footer class="footer bg-theme-first">
      <section class="footer-top-section text-white">
        <div class="container">
          <div class="footer-top d-flex flex-wrap flex-lg-nowrap">
            <div
              class="ft-item flex-fill d-flex align-items-center justify-content-sm-center justify-content-lg-start py-4 py-sm-2 py-lg-4 pe-2 order-sm-1 order-2">
              <svg class="flex-shrink-0 me-1" width="31px" height="31px" viewBox="0 0 31 31" version="1.1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="anasayfa" transform="translate(-371.000000, -3815.000000)" fill="#f5841f" fill-rule="nonzero">
                    <g id="phone-call" transform="translate(371.000000, 3815.000000)">
                      <path
                        d="M29.31,8.85 C28.056,6.192 26.07,3.96 23.568,2.394 C20.088,0.222 15.966,-0.468 11.97,0.456 C7.974,1.374 4.572,3.798 2.4,7.278 C0.222,10.758 -0.468,14.874 0.456,18.876 C1.38,22.878 3.804,26.274 7.278,28.446 C9.726,29.976 12.534,30.786 15.408,30.786 L15.594,30.786 C18.456,30.75 21.24,29.922 23.652,28.398 C24.354,27.954 24.558,27.03 24.114,26.328 C23.67,25.626 22.746,25.422 22.044,25.866 C20.106,27.096 17.862,27.762 15.558,27.792 C13.194,27.822 10.884,27.168 8.868,25.914 C3.09,22.29 1.326,14.646 4.944,8.868 C6.696,6.066 9.432,4.116 12.648,3.378 C15.864,2.634 19.176,3.192 21.978,4.944 C23.994,6.204 25.59,7.998 26.598,10.134 C27.582,12.216 27.966,14.526 27.708,16.806 C27.618,17.628 28.206,18.372 29.034,18.462 C29.856,18.552 30.6,17.964 30.69,17.136 C31.008,14.304 30.528,11.436 29.31,8.85 L29.31,8.85 Z"
                        id="Path"></path>
                      <path
                        d="M12.774,9.132 C12.186,8.544 11.238,8.544 10.65,9.132 C9.834,9.948 9.33,11.034 9.24,12.192 C9.15,13.35 9.48,14.502 10.164,15.432 C11.724,17.55 13.59,19.416 15.708,20.976 C16.542,21.588 17.544,21.918 18.57,21.918 C18.696,21.918 18.822,21.912 18.948,21.906 C20.1,21.816 21.186,21.318 22.008,20.496 C22.596,19.908 22.596,18.96 22.008,18.372 C21.42,17.784 20.472,17.784 19.884,18.372 C19.242,19.014 18.21,19.098 17.484,18.564 C15.612,17.184 13.962,15.534 12.582,13.662 C12.048,12.936 12.126,11.904 12.774,11.262 C13.362,10.668 13.362,9.714 12.774,9.132 L12.774,9.132 Z"
                        id="Path"></path>
                    </g>
                  </g>
                </g>
              </svg>
              <div class="d-flex flex-column lh-1 ls-05">
                <span class="fs-8 opacity-50 ls-1">Yardım / Destek</span>
                <a href="tel:444 8 484" class="fs-5-5 fw-normal">444 8 484</a>
              </div>
            </div>
            <div
              class="ft-item flex-fill ls-05 d-flex flex-column justify-content-center align-items-sm-center text-sm-center py-4 py-sm-2 py-lg-4 px-2 order-lg-2 order-3">
              <span class="text-theme-second">İş Birliği için</span>
              <a href="mailto:info@otelbnb.com" class="underline-hover">info@otelbnb.com</a>
            </div>
            <div
              class="ft-item flex-fill ls-05 d-flex flex-column justify-content-center align-items-sm-center text-sm-center py-4 py-sm-2 py-lg-4 px-2 order-lg-2 order-4">
              <span class="text-theme-second">Merkez</span>
              <strong class="fw-normal">Kalkan Mah. Cumhuriyet Cd. No:48/2 - Kaş/Antalya</strong>
            </div>
            <div
              class="ft-item flex-fill ls-05 text-sm-center text-lg-end py-4 py-sm-2 py-lg-4 ps-2 order-lg-last order-sm-2 order-1">
              <a href="index.php" class="d-inline-block footer-logo">
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="footer-body bg-white pt-5">
        <div class="container pt-lg-4 pb-4">
          <div class="row pt-2 pb-2">
            <div class="col-6 col-md-4 col-lg-3 pe-4 mb-lg-0 mb-4">
              <div class="menu-title fs-6 fw-medium text-theme-primary lh-lg ls-05 mb-3 pb-1">OtelBnb</div>
              <ul class="footer-menu ls-05 text-black text-opacity-50 fw-medium">
                <li><a href="#!" class="d-block py-1 mb-2">Gizlilik Şartları</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">İptal Şartları</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Banka Hesapları</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Kiralama Sözleşmesi</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Hakkımızda</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Sıkça Sorulan Sorular</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Bize Ulaşın</a></li>
              </ul>
            </div>
            <div class="col-6 col-md-4 col-lg-2 ps-0 mb-lg-0 mb-4">
              <div class="menu-title fs-6 fw-medium text-theme-primary lh-lg ls-05 mb-3 pb-1">Popüler Rotalar
              </div>
              <ul class="footer-menu ls-05 text-black text-opacity-50 fw-medium">
                <li><a href="#!" class="d-block py-1 mb-2">Marmaris</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Fethiye</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Kaş</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Kalkan</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Göcek</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Bodrum</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Dalyan</a></li>
              </ul>
            </div>
            <div class="col-6 col-md-4 col-lg-2 mb-lg-0 mb-4">
              <div class="menu-title fs-6 fw-medium text-theme-primary lh-lg ls-05 mb-3 pb-1">Oteller</div>
              <ul class="footer-menu ls-05 text-black text-opacity-50 fw-medium">
                <li><a href="#!" class="d-block py-1 mb-2">Antalya Otelleri</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Ege Otelleri</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Muğla Otelleri</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Şehir Otelleri</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Fethiye Otelleri</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Marmaris Otelleri</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Kış Tatil Otelleri</a></li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-lg-0 mb-4">
              <div class="menu-title fs-6 fw-medium text-theme-primary lh-lg ls-05 mb-3 pb-1">Villa Kategorileri
              </div>
              <ul class="footer-menu ls-05 text-black text-opacity-50 fw-medium">
                <li><a href="#!" class="d-block py-1 mb-2">Muhafazakar Villa</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Deniz Manzaralı Villa</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Jakuzili Villa</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Balayı Villası</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">2022 Villaları</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Çocuk Havuzlu Villalar</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Ekonomik Villalar</a></li>
              </ul>
            </div>
            <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-lg-end ps-md-4">
              <div class="footer-banner bg-light rounded-xl d-inline-block position-relative w-100">
                <img src="/img/tools/footer-banner.jpg" width="265" height="335" alt="footer banner"
                  class="banner lazy cover rounded-xl w-100">
                <div
                  class="caption d-flex flex-column justify-content-center pt-5 ps-4 pe-5 position-absolute top-0 start-0">
                  <i class="footer-banner-logo"></i>
                  <span class="fs-4 lh-sm ls-05 text-white d-block pe-3">ile yazlar sıcak ve eğlenceli</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="footer-cards bg-white border-top border-theme-light-2 py-4 py-sm-5">
        <div class="container d-flex flex-wrap align-items-center">
          <div class="text-secondary d-flex align-items-center lh-sm ls-05 me-auto py-1 mb-md-0 mb-2">
            <span>OtelBnb <a href="https://www.tursab.org.tr/" target="blank" class="text-primary"><u>Türsab</u></a> ve
              <a href="https://www.eticaret.gov.tr/" target="blank" class="text-primary"><u>Etbis</u></a> kayıtlı olup
              bir wings iştirakidir.</span>
          </div>
          <div class="cards d-flex me-4 pe-2 mb-md-0 mb-3">
            <img src="/img/spacer.gif" data-src="/img/tools/Discover-card-dark.svg" width="50" height="30"
              alt="discover card" class="lazy contain flex-shrink-0 me-2">
            <img src="/img/spacer.gif" data-src="/img/tools/Maestro-card-dark.svg" width="50" height="30"
              alt="discover card" class="lazy contain flex-shrink-0 me-2">
            <img src="/img/spacer.gif" data-src="/img/tools/Visa-card-dark.svg" width="50" height="30" alt="discover card"
              class="lazy contain flex-shrink-0 me-2">
            <img src="/img/spacer.gif" data-src="/img/tools/Mastercard-dark.svg" width="50" height="30"
              alt="discover card" class="lazy contain flex-shrink-0 me-2">
            <img src="/img/spacer.gif" data-src="/img/tools/Americanexpress-card-dark.svg" width="50" height="30"
              alt="discover card" class="lazy contain flex-shrink-0 me-2">
          </div>
          <img src="/img/spacer.gif" data-src="/img/tools/comodo-ssl-certificate.svg" width="108" height="34" alt=""
            class="lazy contain">
        </div>
      </section>
      <section class="footer-map-section">
        <div class="map w-100" id="contactMap" data-id="contactMap" data-lat="36.67416043629058"
          data-lng="29.100266338322857"></div>
      </section>
      <section class="footer-bottom bg-theme-light-2 text-secondary ls-05 py-3 py-sm-4">
        <div class="container d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1">
          <span class="fs-8 d-block mb-sm-0 mb-2">© 2021 Otelbnb.com Turizm ve Seyehat Ltd. Şti. Tüm hakları saklıdır -
            <a href="#!"><u>Gizlilik Politikası</u></a> ve <a href="#!"><u>Rezervasyon Koşulları</u></a></span>
          <a href="https://www.wings.com.tr/" target="blank" class="wings flex-shrink-0">
            <img src="/img/tools/wings.svg" width="65" height="24" alt="" class="contain">
          </a>
        </div>
      </section>
    </footer>

    <live-villa-search></live-villa-search>

  </div>
</template>

<script>
import HotelDatePicker from 'vue-hotel-datepicker'
import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css';
export default {
  name: "default",
  head() {
    let site_id = process.env.SITE
    return {
      link: [
        // { rel: 'stylesheet', href: `/css/site_${site_id}/theme.min.css` },
        { rel: 'stylesheet', href: `/css/theme.min.css` },
      ]
    }
  },
  data() {
    return {
      disableDates: ['2023-02-21', '2023-02-22', '2023-02-23', '2023-02-24', '2023-02-24', '2023-02-26', '2023-02-27', '2023-02-28']
    }
  },
  components: {
    HotelDatePicker,
  },
  methods: {
    showMobileFilter() {
      document.querySelector('.Filter-left').classList.add("show")
      document.querySelector('body').classList.add("over")
    },
    openSearch(e) {      
      document.querySelector('.Search-villas').classList.toggle('Search-villas-active')
      document.querySelector('body').classList.toggle("over")
      document.querySelector('#searchButton i').classList.toggle('icon-search')
      document.querySelector('#searchButton i').classList.toggle('icon-login-close')
    }
  },
  mounted() {
    //dropdown-menu içerisinde bir yerlere tıklandığında menünün kapanmaması
    this.$el.addEventListener('click', function (e) {
      if (e.target.closest('.dropdown-menu')) {
        e.stopPropagation();
      }
    });


  },
}
</script>

<style scoped>
:deep() .vue-tel-input {
  width: 100%;
  border: 1px solid #dadada;
  padding: 8px;
  box-shadow: none !important;
  border-color: #dadada !important;
}

:deep() .vti__dropdown-list {
  min-width: 240px;
}

:deep() .v-select {
  height: auto !important;
  border: 1px solid #dadada;
}

:deep() .v-select-toggle {
  font-size: 16px !important;
  padding: 14px !important;
  color: #a3a3a3 !important;
  background-color: transparent !important;
}

:deep() .v-dropdown-item.selected {
  background-color: var(--bs-theme-second) !important;
}

:deep() .vhd__datepicker__wrapper {
  background: none !important;
}

:deep() .vhd__datepicker__dummy-wrapper {
  border: none !important;
}

:deep() .vhd__datepicker__input {
  padding: 0 !important;
  text-align: left !important;
}

:deep() .vhd__datepicker__input:first-child {
  background-position: 80px !important;
}
</style>
