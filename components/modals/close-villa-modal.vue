<template>
  <!-- Rezervasyon Modal -->
  <b-modal id="closeVillaModal" class="Login" size="xl" :hide-header="true" hide-footer>
    <div class="Login Satis-modal">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
        @click="$bvModal.hide('closeVillaModal')"><i class="icon-login-close"></i></button>
        <div class="Login-in">
            <div class="Login-left" style="background-image:url('/img/satisa-kapali.jpg')">
              <div class="Satis-modal-text">
                <h3>Diğer binlerce villamıza göz atmaya devam edebilirsiniz.</h3>
                <nuxt-link to="/kiralik-villa-ara">DİĞER VİLLALAR</nuxt-link>
              </div>
            </div>
            <div class="Login-right">
              <div class="Login-right-in">
                <h2>SATIŞA KAPALI!</h2>
                <div class="Satis-modal-right-text">
                  <h4>ARADIĞINIZ VİLLA</h4>
                  <h3>ŞU ANDA <b>SATIŞTA</b> DEĞİLDİR.</h3>
                  <nuxt-link to="/">ANASAYFA</nuxt-link>
                </div>
              </div>
            </div>
          </div>
    </div>
  </b-modal>
</template>

<script>


export default {
  name: "CloseVillaModal",
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {

  }
}
</script>
