<template>
  <div>
    <common-header></common-header>

    <main class="main">
      <client-only>
        <search-bar :key="$route.path" v-if="$route.path == '/oteller'"></search-bar>
      </client-only>
      <Nuxt />

      <!-- <div class="header-call">
        <button type="button" data-bs-toggle="modal" data-bs-target="#callModal" class="header-call-phone"><i
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
      <login-modal></login-modal>
    </client-only>

    <client-only>
      <login-code-modal></login-code-modal>
    </client-only>

    <client-only>
      <reservation-code-modal></reservation-code-modal>
    </client-only>
    <client-only>
      <reservation-success-modal></reservation-success-modal>
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

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import LoginModal from "@/components/modals/login-modal.vue";
import RegisterModal from "@/components/modals/register-modal.vue";
import LoginCodeModal from "@/components/modals/login-code-modal.vue";
import CallModal from "@/components/modals/call-modal.vue";
import FavModal from "@/components/modals/fav-modal.vue";
import ReservationModal from "@/components/modals/reservation-modal.vue";
import ReservationCodeModal from "@/components/modals/reservation-code-modal.vue";
import ReservationSuccessModal from "@/components/modals/reservation-success-modal.vue";

export default {
  name: "default",
  components: {
    ReservationCodeModal,
    ReservationModal,
    LoginCodeModal, RegisterModal, LoginModal, CallModal, FavModal, ReservationSuccessModal
  },
  middleware: ['jwt'],
  head() {
    let site_id = process.env.SITE
    return {
      link: [
      // { rel: 'stylesheet', href: (process.env.NODE_ENV === "production" ? process.env.CDN_URL : '')  + `/css/theme${site_id}.min.css` },
      { rel: 'stylesheet', href:`/css/theme${site_id}.min.css` },
        // { rel: 'stylesheet', href: `/css/theme.min.css` },
      ]
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      location.reload()
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
    if (document.body.classList.contains("over")) {
      document.body.classList.remove("over");
    }
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
</style>
