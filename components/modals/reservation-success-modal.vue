<template>
  <!-- Giriş Modal -->
  <b-modal id="reservationSuccessModal" class="Login" size="xl" :hide-header="true" hide-footer>
    <div class="Login">
      <button type="button" class="btn-close" aria-label="Close" @click="$bvModal.hide('reservationSuccessModal')"><i
          class="icon-login-close"></i></button>

      <!-- Kod doğrulama içeriği -->
      <div class="Login-in">
        <div class="Login-left">
          <div class="Login-card">
            <div class="Login-card-img">
              <nuxt-img :src="reservationModalData.villa?.watermark_images?.[0]?.preview_url" :alt="prefix + reservationModalData.villa.code + ' ' + sitename" loading="lazy" placeholder ></nuxt-img>
              <div class="Login-card-img-text">
                <div class="Login-card-img-text-head">
                  <span>Villa kodu</span>
                  <b>{{prefix}}{{reservationModalData.villa.code}}</b>
                </div>
                <div class="Login-card-img-text-in">
                  <span>{{reservationModalData.adult}} yetişkin</span>
                  <span>{{reservationModalData.villa.bathrooms}} Banyo</span>
                  <span>{{reservationModalData.villa.bedroom}} Yatak Odası</span>
                </div>
              </div>
              <div class="Login-card-img-link">
                <a><i class="icon-arrow-right-up"></i></a>
              </div>
            </div>
            <!--<div class="Login-card-discount-code">
              <p>İndirim(IND52668)</p>
              <span>-1.400₺</span>
            </div>-->
            <div class="Login-card-content">
              <p class="Login-card-content-total">
                Toplam Ödeme <span>{{ reservationModalData.availabilityData.total_price | numberFormat }}{{ reservationModalData.availabilityData.night_price_currency_symbol }}</span>
              </p>
              <div class="Login-card-content-bottom">
                <div class="Login-card-content-bottom-item">
                  <p>Ön Ödeme <span>{{ reservationModalData.availabilityData.advance_payment | numberFormat }}{{ reservationModalData.availabilityData.night_price_currency_symbol }}</span></p>
                  <small>Rezervasyonu gerçekleştirmek için yapmanız gereken ön ödeme tutarı</small>
                </div>
                <div class="Login-card-content-bottom-item">
                  <p>Tesise Girişte <span>{{ reservationModalData.availabilityData.remaining_payment | numberFormat }}{{reservationModalData.availabilityData.night_price_currency_symbol}}</span></p>
                  <small>Ön ödeme sonrası yapmanız gereken kalan tutar girişte alınacaktır.</small>
                </div>
              </div>
            </div>
            <!--<div class="Login-card-discount complete">
              <label for="">
                <input type="text" placeholder="İndirim kodunuz mu var?" value="IND52564">
                <i class="icon-check-big"></i>
                <button type="button">Uygulandı</button>
              </label>
            </div>-->
          </div>
        </div>
        <div class="Login-right success">
          <div class="Login-right-in">
            <i class="icon-check-big"></i>
            <h2>Ön rezervasyon talebiniz başarıyla alındı.</h2>
            <p>Size en kısa sürede E-posta ve SMS ile dönüş sağlayacağız.</p>
            <a href="javascript:void(0)" @click="goHome" class="Login-form-button mt-1">Anasayfaya Dön</a>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import jwt_decode from 'jwt-decode'
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "ReservationSuccessModal",
  data() {
    return {
      prefix: process.env.PREFIX,
      sitename: process.env.SITE_NAME,
    }
  },
  computed: {
    ...mapState(['reservationModalData'])
  },
  methods: {
    goHome() {
      this.$bvModal.hide('reservationSuccessModal')
      this.$router.push('/')
    }
  }
}
</script>
