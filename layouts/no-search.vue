<template>
  <div>
    <common-header></common-header>

    <main class="main">
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
      <register-modal></register-modal>
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

export default {
  name: "default",
  components: {
    LoginCodeModal, RegisterModal, LoginModal, CallModal, FavModal
  },
  middleware: ['jwt'],
  head() {
    let site_id = process.env.SITE
    return {
      link: [
        { rel: 'stylesheet', href: `/css/site${site_id}/theme.min.css` },
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
  }
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


:deep() .datepicker__month-day--first-day-selected,
:deep() .datepicker__month-day--last-day-selected {
  background: var(--bs-theme-first-dark);
}

:deep() .datepicker__month-day--selected {
  background-color: rgb(var(--bs-theme-first-dark-rgb), .7);
}

:deep() .datepicker__month-day--allowed-checkout:hover,
:deep() .datepicker__month-day--valid:hover {
  background: var(--bs-theme-first-dark);
}

:deep() .datepicker__month-day--today .datepicker__month-day-wrapper {
  border: 2px solid var(--bs-theme-first-dark);
}

:deep() .datepicker__header {
  padding: 1rem 2.5rem;
}

:deep() .datepicker__month-button {
  border: 1px solid var(--bs-theme-first-dark);
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDcgMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80MDJfMTU5NCkiPgo8cGF0aCBkPSJNNS45MTQ5NyA0Ljc2Mjg4TDEuMzE3MDYgMC4xNjUwNkMxLjIxMDcxIDAuMDU4NjMyIDEuMDY4NzUgMCAwLjkxNzM4NiAwQzAuNzY2MDE4IDAgMC42MjQwNTggMC4wNTg2MzIgMC41MTc3MTQgMC4xNjUwNkwwLjE3OTExIDAuNTAzNThDLTAuMDQxMjIyNCAwLjcyNDE2NCAtMC4wNDEyMjI0IDEuMDgyNjggMC4xNzkxMSAxLjMwMjkyTDQuMDQwMDkgNS4xNjM5TDAuMTc0ODI2IDkuMDI5MTZDMC4wNjg0ODE2IDkuMTM1NTkgMC4wMDk3NjU2MiA5LjI3NzQ2IDAuMDA5NzY1NjIgOS40Mjg3NUMwLjAwOTc2NTYyIDkuNTgwMiAwLjA2ODQ4MTYgOS43MjIwOCAwLjE3NDgyNiA5LjgyODU5TDAuNTEzNDMgMTAuMTY3QzAuNjE5ODU4IDEwLjI3MzUgMC43NjE3MzQgMTAuMzMyMSAwLjkxMzEwMiAxMC4zMzIxQzEuMDY0NDcgMTAuMzMyMSAxLjIwNjQzIDEwLjI3MzUgMS4zMTI3NyAxMC4xNjdMNS45MTQ5NyA1LjU2NUM2LjAyMTU2IDUuNDU4MjQgNi4wODAxMSA1LjMxNTY5IDYuMDc5NzcgNS4xNjQxNUM2LjA4MDExIDUuMDEyMDMgNi4wMjE1NiA0Ljg2OTU2IDUuOTE0OTcgNC43NjI4OFoiIGZpbGw9IiMxMTI4NTUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80MDJfMTU5NCI+CjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjExIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=) no-repeat 57%/10px;
}</style>
