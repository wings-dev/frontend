<template>
  <div>
    <slot name="button"></slot>

    <!-- Giriş Modal -->
    <div class="modal fade Login" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
            class="icon-login-close"></i></button>

          <!-- Kod gönderme içeriği -->
          <div v-if="step === 'sendcode'" class="Login-in">
            <div class="Login-left" style="background-image:url('/img/login-bg.jpg')"></div>
            <div class="Login-right">
              <div class="Login-right-in">
                <h2><b>MÜŞTERİ </b> GİRİŞİ</h2>
                <p>Lütfen bir giriş yöntemi seçiniz.</p>
                <span>Yurtdışında yaşayan müşterilerimizin <u>e-posta</u> ile giriş yapması gerekmektedir.</span>
                <form action="" class="Login-form" @submit.prevent="sendcode">
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <input v-model="loginType" v-bind:value="'phone'" type="radio" name="loginFormType"
                             id="loginFormRadio" data-bs-toggle="pill"
                             data-bs-target="#loginFormPhoneContent">
                      <label for="loginFormRadio">
                        <i class="icon-login-phone"></i>
                        <span>Telefon ile giriş yap</span>
                      </label>
                    </li>
                    <li class="nav-item" role="presentation">
                      <input v-model="loginType" v-bind:value="'email'" type="radio" name="loginFormType"
                             id="loginFormRadio2" data-bs-toggle="pill"
                             data-bs-target="#loginFormMailContent">
                      <label for="loginFormRadio2">
                        <i class="icon-login-mail"></i>
                        <span>E-posta ile giriş yap</span>
                      </label>
                    </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" role="tabpanel" id="loginFormPhoneContent">
                      <div class="Login-form-item">
                        <div class="input-group">
                          <span class="input-group-text">+90</span>
                          <input v-model="phone" type="text" class="form-control" id="inputTR"
                                 placeholder="Telefon Numaranız">
                        </div>
                      </div>
                      <p class="Login-form-alert  mt-2 text-danger text-sm phone-alert"></p>
                      <button type="submit" class="Login-form-button">GÖNDER</button>
                      <p class="Login-form-signup">Hesabın yok mu? <a href="">Hemen Üye Ol!</a></p>
                    </div>
                    <div class="tab-pane fade" role="tabpanel" id="loginFormMailContent">
                      <label for="" class="Login-form-item ">
                        <input v-model="email" type="text" placeholder="E-mail adresiniz" value="" id="mailInput">
                      </label>
                      <p class="Login-form-alert  mt-2 text-danger text-sm mail-alert"></p>
                      <button type="submit" class="Login-form-button">GÖNDER</button>
                      <p class="Login-form-signup">Hesabın yok mu? <a href="">Hemen Üye Ol!</a></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <!-- Kod doğrulama içeriği -->
          <div v-if="step === 'entercode'" class="Login-in">
            <div class="Login-left" style="background-image:url('/img/login-bg.jpg')"></div>
            <div class="Login-right">
              <div class="Login-right-in">
                <h2><b>DOĞRULAMA </b> KODU</h2>
                <span>Lütfen telefon numaranıza gelen <u>4 haneli</u> giriş kodunu giriniz.</span>
                <form action="" class="Login-form"@submit.prevent="entercode" >
                  <fieldset name='number-code' data-number-code-form>
                    <input
                      v-for="(code, index) in codes"
                      :key="index"
                      ref="codeInputs"
                      class="number-code"
                      type="number"
                      :name="'number-code-'+index"
                      :data-number-code-input="index"
                      min="0"
                      max="9"
                      v-model="codes[index]"
                      @input="onInput($event, index)"
                      @keydown="onKeyDown($event, index)"
                      @keyup="onKeyUp($event, index)"
                      @paste="onPaste"
                      required
                    />
                  </fieldset>
                  <p class="Login-code-info" data-time="50"><b>00:30</b> Tekrar talep etmek için beklemeniz gereken
                    süre
                    <a href="">Yeni Doğrulama Kodu Gönder</a>
                  </p>
                  <button type="submit" class="Login-form-button mt-1">GÖNDER</button>
                  <p class="Login-form-signup">Hesabın yok mu? <a href="">Hemen Üye Ol!</a></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode'

export default {
  name: "LoginModal",
  data() {
    return {
      step: 'sendcode',
      loginType: 'phone',
      phone: null,
      email: null,
      codes: ['', '', '', ''],
    }
  },
  computed: {
    password() {
      return this.codes.join('');
    }
  },
  methods: {
    async sendcode() {
      try {
        const data = {
          source_id: process.env.SITE
        };
        if (this.loginType === 'phone') {
          data.prephone = '90';
          data.phone = this.phone;
        } else if (this.loginType === 'email') {
          data.email = this.email;
        }
        const response = await this.$axios.post('/api/sendcode', data);
        this.step = 'entercode';
      } catch (error) {
        console.error(error);
      }
    },
    async entercode() {
      try {
        const data = {
          source_id: process.env.SITE,
          password: this.password
        };
        if (this.loginType === 'phone') {
          data.prephone = '90';
          data.phone = this.phone;
        } else if (this.loginType === 'email') {
          data.email = this.email;
        }
        const response = await this.$auth.loginWith('laravelJWT', {data: data})

        // decode JWT token to get user email
        const tokenPayload = jwt_decode(response.data.access_token)

        // manually set user in auth store
        this.$auth.setUser(tokenPayload)

        location.reload()
      } catch (error) {
        console.error(error)
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
