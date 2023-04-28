<template>
  <!-- Fav Modal -->
  <b-modal id="favModal" class="Login" size="xl" :hide-header="true" hide-footer>
    <div class="Login">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
        @click="$bvModal.hide('favModal')"><i class="icon-login-close"></i></button>
      <div class="Login-in">
        <div class="Login-left" style="background-image:url(/img/fav-bg.jpg)"></div>
        <div class="Login-right">
          <div class="Login-right-in">
            <div class="Login-fav">
              <nuxt-img src="/img/fav-heart-big.svg" :alt="'Favoriler ' + sitename" loading="lazy" placeholder></nuxt-img>
              <p class="Login-fav-text">
                Beğendiğiniz tesisleri favorilere eklemek için lütfen üye olunuz eğer zaten üyeyseniz giriş
                yapınız.
              </p>
              <div class="Login-buttons">
                <button type="submit" class="Login-form-button mt-2">GİRİŞ YAP</button>
                <button type="submit" class="Login-form-button Login-form-button-white mt-2">KAYIT OL</button>
              </div>
              <Nuxt-link to="/favorilerim" class="Login-fav-pass">
                Üye olmadan devam et <i class="icon-right-arrows-new"></i>
              </Nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>

export default {
  name: "FavModal",
  data() {
    return {
      sitename: process.env.SITE_NAME
    }
  }
}
</script>
