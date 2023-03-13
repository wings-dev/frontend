<template>
  <div>
    <common-header></common-header>

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
      <div class="header-call">
        <button type="button" data-bs-toggle="modal" data-bs-target="#callModal" class="header-call-phone"><i
            class="icon-header-phone"></i>
          <p><b>SİZİ</b>ARAYALIM</p>
        </button>
        <a href="" class="header-call-assistant"><i class="icon-header-assistant"></i>
          <p><b>TATİL</b>ASİSTANI</p>
        </a>
      </div>
    </main>

    <common-footer></common-footer>

    <client-only>
      <live-villa-search></live-villa-search>
    </client-only>

    <client-only>
      <login-modal></login-modal>
    </client-only>

    <client-only>
      <login-code-modal></login-code-modal>
    </client-only>

    <client-only>
      <reservation-code-modal></reservation-code-modal>
    </client-only>

    <client-only>
      <register-modal></register-modal>
    </client-only>

    <client-only>
      <reservation-modal></reservation-modal>
    </client-only>

    <client-only>
      <call-modal></call-modal>
    </client-only>
    <client-only>
      <fav-modal></fav-modal>
    </client-only>
    <CookieControl locale="en"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import HotelDatePicker from "vue-hotel-datepicker2";
import "vue-hotel-datepicker2/dist/vueHotelDatepicker2.css";
import LoginModal from "@/components/modals/login-modal.vue";
import RegisterModal from "@/components/modals/register-modal.vue";
import LoginCodeModal from "@/components/modals/login-code-modal.vue";
import CallModal from "@/components/modals/call-modal.vue";
import FavModal from "@/components/modals/fav-modal.vue";
import ReservationModal from "@/components/modals/reservation-modal.vue";
import ReservationCodeModal from "@/components/modals/reservation-code-modal.vue";
export default {
  name: "default",
  middleware: ['jwt'],
  head() {
    let site_id = process.env.SITE
    return {
      link: [
        { rel: 'stylesheet', href: `/css/site${site_id}/theme.min.css` },
      ]
    }
  },
  data() {
    return {
      disableDates: ['2023-02-21', '2023-02-22', '2023-02-23', '2023-02-24', '2023-02-24', '2023-02-26', '2023-02-27', '2023-02-28']
    }
  },
  components: {
    ReservationCodeModal,
    ReservationModal,
    HotelDatePicker, LoginCodeModal, RegisterModal, LoginModal, CallModal, FavModal
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      location.reload();
    },
    showMobileFilter() {
      document.querySelector('.Filter-left').classList.add("show")
      document.querySelector('body').classList.add("over")
    },
    ...mapActions(['openLoginModal', 'showCallModal', 'showFavModal'])
  },
  mounted() {
    this.$store.dispatch('initializeVisitorId')
    this.$store.dispatch('favorite/initializeFavorites')

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
  font-size: 14px !important;
  padding: 14px !important;
  color: #a3a3a3 !important;
  background-color: transparent !important;
}

:deep() .v-dropdown-item.selected {
  background-color: var(--bs-theme-second) !important;
}

:deep() .datepicker__month-day--first-day-selected,
:deep() .datepicker__month-day--last-day-selected {
  background: var(--bs-theme-first-dark);
  color: #fff!important;
}

:deep() .datepicker__month-day--selected {
  background-color: rgb(var(--bs-theme-first-dark-rgb), .7);
  color: #fff!important;
}

:deep() .datepicker__month-day--allowed-checkout:hover,
:deep() .datepicker__month-day--valid:hover {
  background: var(--bs-theme-first-dark);
  color: #fff;
}

:deep() .datepicker__month-day--today .datepicker__month-day-wrapper {
  border: 2px solid var(--bs-theme-first-dark);
}

:deep() .datepicker__header {
  padding: 1rem 2.5rem;
}
:deep() .datepicker__month-day{
color: var(--bs-theme-first);
}
:deep() .datepicker__month-button {
  border: 1px solid var(--bs-theme-first-dark);
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDcgMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80MDJfMTU5NCkiPgo8cGF0aCBkPSJNNS45MTQ5NyA0Ljc2Mjg4TDEuMzE3MDYgMC4xNjUwNkMxLjIxMDcxIDAuMDU4NjMyIDEuMDY4NzUgMCAwLjkxNzM4NiAwQzAuNzY2MDE4IDAgMC42MjQwNTggMC4wNTg2MzIgMC41MTc3MTQgMC4xNjUwNkwwLjE3OTExIDAuNTAzNThDLTAuMDQxMjIyNCAwLjcyNDE2NCAtMC4wNDEyMjI0IDEuMDgyNjggMC4xNzkxMSAxLjMwMjkyTDQuMDQwMDkgNS4xNjM5TDAuMTc0ODI2IDkuMDI5MTZDMC4wNjg0ODE2IDkuMTM1NTkgMC4wMDk3NjU2MiA5LjI3NzQ2IDAuMDA5NzY1NjIgOS40Mjg3NUMwLjAwOTc2NTYyIDkuNTgwMiAwLjA2ODQ4MTYgOS43MjIwOCAwLjE3NDgyNiA5LjgyODU5TDAuNTEzNDMgMTAuMTY3QzAuNjE5ODU4IDEwLjI3MzUgMC43NjE3MzQgMTAuMzMyMSAwLjkxMzEwMiAxMC4zMzIxQzEuMDY0NDcgMTAuMzMyMSAxLjIwNjQzIDEwLjI3MzUgMS4zMTI3NyAxMC4xNjdMNS45MTQ5NyA1LjU2NUM2LjAyMTU2IDUuNDU4MjQgNi4wODAxMSA1LjMxNTY5IDYuMDc5NzcgNS4xNjQxNUM2LjA4MDExIDUuMDEyMDMgNi4wMjE1NiA0Ljg2OTU2IDUuOTE0OTcgNC43NjI4OFoiIGZpbGw9IiMxMTI4NTUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80MDJfMTU5NCI+CjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjExIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=) no-repeat 57%/10px;
}

:deep() .cookieControl__BarContainer div{
  display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
}
:deep() .cookieControl__BarButtons{
  flex-direction: row!important;
}
</style>
