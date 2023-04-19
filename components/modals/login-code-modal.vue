<template>
  <!-- Giriş Modal -->
  <b-modal id="loginCodeModal" class="Login" size="xl" :hide-header="true" hide-footer>
    <div class="Login">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$bvModal.hide('loginCodeModal')"><i
          class="icon-login-close"></i></button>

      <!-- Kod doğrulama içeriği -->
      <div class="Login-in">
        <div class="Login-left" style="background-image:url('/img/login-bg.jpg')"></div>
        <div class="Login-right">
          <div class="Login-right-in">
            <h2><b>DOĞRULAMA </b> KODU</h2>
            <span v-if="message">
              {{message}}
            </span>
            <span v-else-if="phone">Lütfen +90 {{phone}} telefon numaranıza gelen <u>4 haneli</u> giriş kodunu giriniz.</span>
            <span v-else>Lütfen {{email}} adresinize gelen <u>4 haneli</u> giriş kodunu giriniz. </span>
            <form action="" class="Login-form" @submit.prevent="entercode">
              <fieldset name='number-code' data-number-code-form>
                <input v-for="(code, index) in codes" :key="index" ref="codeInputs" class="number-code" type="number"
                  :name="'number-code-' + index" :data-number-code-input="index" min="0" max="9" v-model="codes[index]"
                  @input="onInput($event, index)" @keydown="onKeyDown($event, index)" @keyup="onKeyUp($event, index)"
                  @paste="onPaste" required />
              </fieldset>

              <code-count-down :key="key" :countdown-time="30" @started="started" @timeout="timeout"></code-count-down>

              <button v-if="countdownTimeout" @click="resend" type="button" class="Login-form-button mt-1">TEKRAR KOD GÖNDER</button>
              <button v-else type="submit" class="Login-form-button mt-1">GÖNDER</button>
              <p class="Login-form-signup">Hesabın yok mu? <a href="">Hemen Üye Ol!</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import jwt_decode from 'jwt-decode'
import { mapState } from "vuex";

export default {
  name: "LoginCodeModal",
  data() {
    return {
      key: 0,
      countdownTimeout: false,
      codes: ['', '', '', ''],
    }
  },
  computed: {
    ...mapState({
      loginType: state => state.loginCodeModalData.loginType,
      phone: state => state.loginCodeModalData.phone,
      email: state => state.loginCodeModalData.email,
      data: state => state.loginCodeModalData.data,
      message: state => state.loginCodeModalData.message,
    }),
    password() {
      return this.codes.join('');
    }
  },
  methods: {
    started() {
      this.countdownTimeout = false
    },
    timeout() {
      this.countdownTimeout = true
    },
    async entercode() {
      try {
        const data = {
          source_id: process.env.SOURCE_ID,
          password: this.password
        };
        if (this.loginType === 'phone') {
          data.prephone = '90';
          data.phone = this.phone;
        } else if (this.loginType === 'email') {
          data.email = this.email;
        }
        const response = await this.$auth.loginWith('laravelJWT', { data: data })

        // decode JWT token to get user email
        const tokenPayload = jwt_decode(response.data.access_token)

        // manually set user in auth store
        this.$auth.setUser(tokenPayload)

        location.reload()
      } catch (error) {
        // TODO girilen kod yanlış tekrar gir yapılacak
        console.error(error)
      }
    },
    async resend() {
      const response = await this.$axios.post('/website/sendcode', this.data);
      this.codes = ['', '', '', ''];
      this.key = this.key + 1; // contdown yeniliyor.
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
