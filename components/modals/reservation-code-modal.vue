<template>
  <!-- Giriş Modal -->
  <b-modal id="reservationCodeModal" class="Login" size="xl" :hide-header="true" hide-footer>
    <div class="Login">
      <button type="button" class="btn-close" aria-label="Close" @click="$bvModal.hide('reservationCodeModal')"><i
          class="icon-login-close"></i></button>

      <!-- Kod doğrulama içeriği -->
      <div class="Login-in">
        <div class="Login-left" style="background-image:url('/img/login-bg.jpg')"></div>
        <div class="Login-right">
          <div class="Login-right-in">
            <h2><b>REZERVASYON DOĞRULAMA </b> KODU</h2>
            <span>Lütfen telefon numaranıza gelen <u>4 haneli</u> giriş kodunu giriniz.</span>
            <form action="" class="Login-form" @submit.prevent="entercode">
              <fieldset name='number-code' data-number-code-form>
                <input v-for="(code, index) in codes" :key="index" ref="codeInputs" class="number-code" type="number"
                  :name="'number-code-' + index" :data-number-code-input="index" min="0" max="9" v-model="codes[index]"
                  @input="onInput($event, index)" @keydown="onKeyDown($event, index)" @keyup="onKeyUp($event, index)"
                  @paste="onPaste" required />
              </fieldset>
              <p class="Login-code-info" data-time="50"><b>00:30</b> Tekrar talep etmek için beklemeniz gereken
                süre
                <a href="">Yeni Doğrulama Kodu Gönder</a>
              </p>
              <button type="submit" class="Login-form-button mt-1">GÖNDER</button>
              <p class="Login-form-signup">Hesabın yok mu? <a href="javascript:void(0)" @click="openRegister">Hemen Üye
                  Ol!</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import jwt_decode from 'jwt-decode'
import { mapActions, mapState } from "vuex";

export default {
  name: "ReservationCodeModal",
  data() {
    return {
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
    ...mapActions(['hideReservationCodeModal', 'hideReservationCodeModal', 'showRegisterModal']),
    openRegister() {
      this.hideReservationCodeModal();
      this.showRegisterModal();
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
            this.hideReservationCodeModal();
            setTimeout(() => {
              alert(error.response.data.message);
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
