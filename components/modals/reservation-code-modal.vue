<template>
  <!-- Giriş Modal -->
  <b-modal id="reservationCodeModal" class="Login" size="xl" :hide-header="true" hide-footer>
    <div class="Login">
      <button type="button" class="btn-close" aria-label="Close" @click="$bvModal.hide('reservationCodeModal')"><i
          class="icon-login-close"></i></button>

      <!-- Kod doğrulama içeriği -->
      <div class="Login-in">
        <div class="Login-left">
          <div class="Login-card">
            <div class="Login-card-img">
              <img src="/img/villa-grey.jpg" alt="">
              <div class="Login-card-img-text">
                <div class="Login-card-img-text-head">
                  <span>Villa kodu</span>
                  <b>VKV5261</b>
                </div>
                <div class="Login-card-img-text-in">
                  <span>2 yetişkin</span>
                  <span>1 Banyo</span>
                  <span>1 Yatak Odası</span>
                </div>
              </div>
              <div class="Login-card-img-link">
                <nuxt-link to="/"><i class="icon-arrow-right-up"></i></nuxt-link>
              </div>
            </div>
            <div class="Login-card-discount-code">
              <p>İndirim(IND52668)</p>
              <span>-1.400₺</span>
            </div>
            <div class="Login-card-content">
              <p class="Login-card-content-total">
                Toplam Ödeme <span>14.210₺</span>
              </p>
              <div class="Login-card-content-bottom">
                <div class="Login-card-content-bottom-item">
                  <p>Ön Ödeme <span>5400₺</span></p>
                  <small>Rezervasyonu gerçekleştirmek için yapmanız gereken ön ödeme tutarı</small>
                </div>
                <div class="Login-card-content-bottom-item">
                  <p>Tesise Girişte <span>1500₺</span></p>
                  <small>Ön ödeme sonrası yapmanız gereken kalan tutar girişte alınacaktır.</small>
                </div>
              </div>
            </div>
            <div class="Login-card-discount complete">
              <label for="">
                <input type="text" placeholder="İndirim kodunuz mu var?" value="IND52564">
                <i class="icon-check-big"></i>
                <button type="button">Uygulandı</button>
              </label>
            </div>
          </div>
        </div>
        <div class="Login-right">
          <div class="Login-right-in">
            <h2>DOĞRULAMA KODU</h2>
            <span>Lütfen telefon numaranıza gelen <u>4 haneli</u> giriş kodunu giriniz.</span>
            <p class="Login-form-signup"><a href="javascript:void(0)" @click="goBack">Bu numara size ait değil mi?</a></p>
            <form action="" class="Login-form" @submit.prevent="entercode">
              <fieldset name='number-code' data-number-code-form>
                <input v-for="(code, index) in codes" :key="index" ref="codeInputs" class="number-code" type="number"
                  :name="'number-code-' + index" :data-number-code-input="index" min="0" max="9" v-model="codes[index]"
                  @input="onInput($event, index)" @keydown="onKeyDown($event, index)" @keyup="onKeyUp($event, index)"
                  @paste="onPaste" required />
              </fieldset>

              <code-count-down :key="key" :countdown-time="30" @started="started" @timeout="timeout"></code-count-down>

              <p  v-if="countdownTimeout"  class="Login-form-signup"><a href="javascript:void(0)" @click="resend">Yeni Doğrulama Kodu Gönder </a></p>
              <!-- <button type="button" class="Login-form-button mt-1">Yeni Doğrulama Kodu Gönder </button> -->
              <button v-else type="submit" class="Login-form-button mt-1">GÖNDER</button>
              <!-- <p class="Login-form-signup">Hesabın yok mu? <a href="javascript:void(0)" @click="openRegister">Hemen Üye
                  Ol!</a></p> -->

              
            </form>
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
  name: "ReservationCodeModal",
  data() {
    return {
      key: 0,
      countdownTimeout: false,
      codes: ['', '', '', ''],
    }
  },
  computed: {
    ...mapState(['reservationModalData']),
    password() {
      return this.codes.join('');
    }
  },
  methods: {
    ...mapMutations(['setReservationModalData']),
    started() {
      this.countdownTimeout = false
    },
    timeout() {
      this.countdownTimeout = true
    },
    openRegister() {
      this.$bvModal.hide('reservationCodeModal')
      this.$bvModal.show('signupModal')
    },
    goBack() {
      this.$bvModal.hide('reservationCodeModal')
      this.$bvModal.show('reservationModal')
    },
    async resend() {
      let reservationID;
      try {
        const response = await this.$axios.post(`/api/website/pre_reservation?api_token=${process.env.WEBSITE_TOKEN}`, this.reservationModalData);
        reservationID = response.data.reservationID;
      } catch (error) {
        if (error.response) {
          reservationID = error.response.data.reservationID;
        } else {
          console.error(error);
        }
      }

      if (reservationID) {
        let data = JSON.parse(JSON.stringify(this.reservationModalData))
        data.reservationID = reservationID;
        this.setReservationModalData(data);
      }
      this.codes = ['', '', '', ''];
      this.key = this.key + 1; // contdown yeniliyor.
    },
    async entercode() {
      const data = {
        reservationID: this.reservationModalData.reservationID,
        verifyCode: this.password
      };

      try {
        const response = await this.$axios.post(`/api/website/pre_reservation_code?api_token=${process.env.WEBSITE_TOKEN}`, data)
      } catch (error) {
        if (error.response) {
          if (error.response.data.status) {
            this.$bvModal.hide('reservationCodeModal')
            
            setTimeout(() => {
              this.$bvModal.show('reservationSuccessModal')
            }, 100)
          }
        } else {
          console.error(error);
        }
      }
    },
    onInput(event, index) {
      // Keep only first character entered in the input
      this.codes[index] = event.target.value[0] || '';
      // Move focus to next input
      if (index < 3 && this.codes[index].length) {
        this.$refs.codeInputs[index + 1].focus();
      }
    },
    onKeyDown(event, index) {
      if (event.key === 'Backspace' && !this.codes[index].length) {
        // Move focus to previous input
        if (index > 0) {
          this.$refs.codeInputs[index - 1].focus();
        }
      }
    },
    onKeyUp(event, index) {
      // Prevent default behavior for key events
      if (event.key === 'Backspace' || event.key === 'Delete') {
        event.preventDefault();
      }
    },
    onPaste(event) {
      // Prevent the normal paste event
      event.preventDefault();

      // Get the clipboard data as text
      const clipboardData = event.clipboardData.getData('text/plain');

      // Split the clipboard text into individual characters
      const characters = clipboardData.slice(0, 4).split('');

      // Paste the characters into the input fields in order
      for (let i = 0; i < characters.length; i++) {
        if (i < this.codes.length) {
          this.codes[i] = characters[i];
          this.$refs.codeInputs[i].value = characters[i];
        }
      }
    },
  }
}
</script>
