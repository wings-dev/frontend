<template>
  <!-- Fav Modal -->
  <b-modal id="kvkkModal" class="Login" size="xl" :hide-header="true" hide-footer>
    <div class="Login">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
        @click="$bvModal.hide('kvkkModal')"><i class="icon-login-close"></i></button>
      <div class="Login-text">
        <h2>Kişisel Verilerin Korunması Hakkında Aydınlatma Metni</h2>
        <div class="Login-text-in" v-html="$store.state?.site_settings?.kvkktext">
          
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>

export default {
  name: "KvkkModal",
  data() {
    return {
      sitename: process.env.SITE_NAME
    }
  }
}
</script>
