<template>
  <div>
    <client-only>
      <login-modal></login-modal>
    </client-only>

    <common-header></common-header>

    <main class="main">
      <client-only>
        <search-bar :key="$route.path"></search-bar>
      </client-only>

      <Nuxt />
      <!-- <div class="header-call">
        <button type="button" v-b-modal.callModal class="header-call-phone"><i
            class="icon-header-phone"></i>
          <p><b>SİZİ</b>ARAYALIM</p>
        </button>
        <a href="" class="header-call-assistant"><i class="icon-header-assistant"></i>
          <p><b>TATİL</b>ASİSTANI</p>
        </a>
      </div> -->
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
import SearchBar from "@/components/search/SearchBar.vue";
import VSelect from "@alfsnd/vue-bootstrap-select";
export default {
  name: "default",
  middleware: ['jwt'],
  head() {
    let site_id = process.env.SITE
    return {
      link: [
        { rel: 'stylesheet', href: `/css/theme${site_id}.min.css` },
        // { rel: 'stylesheet', href: `/css/theme.min.css` },
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
    HotelDatePicker, LoginCodeModal, RegisterModal, LoginModal, CallModal, FavModal, VSelect, SearchBar
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      location.reload();
    },
    showMobileFilter() {


      setTimeout(() => {
        document.querySelector('.Filter-left').classList.add("show")
        document.querySelector('body').classList.add("over")
      }, 50)

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

  $route() {
    console.log('TEST ROUTE')
    if (document.body.classList.contains("over")) {
      document.body.classList.remove("over");
    }
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
