<template>
  <div>
    <client-only>
      <login-modal></login-modal>
    </client-only>

    <common-header></common-header>

    <main class="main">
      <section class="search-engine-section position-relative pt-3">
        <div class="container pt-1">
          <form action="" class="search-engine">
            <nav>
              <div class="nav nav-tabs border-0 lh-sm" id="search-tab" role="tablist">
                <button class="nav-link text-white ls-05 py-2 py-sm-3 px-3 px-sm-4 mb-0" id="nav-home-tab"
                  data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                  aria-selected="true"><span class="d-inline-block fw-medium px-2 px-sm-3 py-1">Yurt İçi
                    Villalar</span></button>

                <button class="nav-link text-white ls-05 py-2 py-sm-3 px-3 px-sm-4 mb-0" id="nav-profile-tab"
                  data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                  aria-selected="false"><span class="d-inline-block fw-medium px-2 px-sm-3 py-1">Yurt Dışı
                    Villalar</span></button>
                <button class="nav-link text-white ls-05 py-2 py-sm-3 px-3 px-sm-4 mb-0 " id="nav-contact-tab"
                  data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact"
                  aria-selected="false"><span class="d-inline-block fw-medium px-2 px-sm-3 py-1">Otel
                    Rezervasyon</span><!-- <span class="comingsoon">ÇOK YAKINDA</span> --></button>

              </div>
            </nav>
            <div class="tab-content" id="search-tabContent">
              <div class="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <search-villa-component :key="$route.path"></search-villa-component>
              </div>
              <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <h2>TEST</h2>
              </div>
              <div class="tab-pane fade show active" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                <search-hotel-component :key="$route.path"></search-hotel-component>
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
    <CookieControl locale="en" />
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
import VSelect from "@alfsnd/vue-bootstrap-select";
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
      disableDates: ['2023-02-21', '2023-02-22', '2023-02-23', '2023-02-24', '2023-02-24', '2023-02-26', '2023-02-27', '2023-02-28'],
    }
  },
  components: {
    ReservationCodeModal,
    ReservationModal,
    HotelDatePicker, LoginCodeModal, RegisterModal, LoginModal, CallModal, FavModal, VSelect
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

<style >
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



:deep() .cookieControl__BarContainer div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

:deep() .cookieControl__BarButtons {
  flex-direction: row !important;
}

.modal-backdrop {
  opacity: 0.7;
}

.modal-body {
  padding: 0;
}

.modal-open {
  overflow: hidden;
}

@media (min-width: 992px) {

  .modal-lg,
  .modal-xl {
    max-width: 90%;
  }
}

@media (min-width: 576px) {

  .modal-lg,
  .modal-xl {
    max-width: 90%;
  }
}

@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1140px;
  }
}

:deep() .cookieControl__ControlButton {
  display: none !important;
}
</style>
