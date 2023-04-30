<template>
  <!-- Fav Modal -->
  <b-modal id="sozlesmeModal" class="Login" size="xl" :hide-header="true" hide-footer>
    <div class="Login">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
        @click="$bvModal.hide('sozlesmeModal')"><i class="icon-login-close"></i></button>
      <div class="Login-text">
        <h2>Rezervasyon Koşulları</h2>
        <div class="Login-text-in" v-html="$store.state?.site_settings?.policytext">
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>

export default {
  name: "SozlesmeModal",
  data() {
    return {
      sitename: process.env.SITE_NAME
    }
  }
}
</script>
