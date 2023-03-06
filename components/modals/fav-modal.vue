<template>
  <!-- Fav Modal -->
  <div class="modal fade Login" id="favModal" tabindex="-1" aria-labelledby="favModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                class="icon-login-close"></i></button>
            <div class="Login-in">
              <div class="Login-left" style="background-image:url(/img/fav-bg.jpg)"></div>
              <div class="Login-right">
                <div class="Login-right-in">
                  <div class="Login-fav">
                    <img src="/img/fav-heart-big.svg" alt="">
                    <p class="Login-fav-text">
                      Beğendiğiniz tesisleri favorilere eklemek için lütfen üye olunuz eğer zaten üyeyseniz giriş
                      yapınız.
                    </p>
                    <div class="Login-buttons">
                      <button type="submit" class="Login-form-button mt-2">GİRİŞ YAP</button>
                      <button type="submit" class="Login-form-button Login-form-button-white mt-2">KAYIT OL</button>
                    </div>
                    <Nuxt-link to="/favs" class="Login-fav-pass">
                      Üye olmadan devam et <i class="icon-right-arrows-new"></i>
                    </Nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>

export default {
  name: "FavModal",
  data() {
    return {
      
    }
  },
  components: {
  },
  computed: {
 
  },
  methods: {
  
  }
}
</script>
