<template>
  <b-modal id="loginModal" class="Login" size="xl" :hide-header="true" hide-footer>
    <div class="Login">
      <button type="button" class="btn-close" aria-label="Close" @click="$bvModal.hide('loginModal')"><i
          class="icon-login-close"></i></button>
      <div class="Login-in">
        <div class="Login-left" style="background-image:url('/img/modal/login-modal-bg.jpg')"></div>
        <div class="Login-right">
          <div class="Login-right-in">
            <h2>MÜŞTERİ GİRİŞİ</h2>
            <p>Lütfen bir giriş yöntemi seçiniz.</p>
            <span>Yurtdışında yaşayan müşterilerimizin <u>e-posta</u> ile giriş yapması gerekmektedir.</span>
            <form action="" class="Login-form" @submit.prevent="sendcode">
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <input v-model="loginType" v-bind:value="'phone'" type="radio" name="loginFormType" id="loginFormRadio"
                    data-bs-toggle="pill" data-bs-target="#loginFormPhoneContent">
                  <label for="loginFormRadio">
                    <i class="icon-login-phone"></i>
                    <span>Telefon ile giriş yap</span>
                  </label>
                </li>
                <li class="nav-item" role="presentation">
                  <input v-model="loginType" v-bind:value="'email'" type="radio" name="loginFormType" id="loginFormRadio2"
                    data-bs-toggle="pill" data-bs-target="#loginFormMailContent">
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
                      <input v-model="phone" type="text" class="singlephone" id="inputTR" placeholder="Telefon Numaranız">
                    </div>
                  </div>
                  <p class="Login-form-alert  mt-2 text-danger text-sm phone-alert"></p>
                  <button :disabled="!enabledLoginButton" type="submit" class="Login-form-button">GÖNDER</button>
                  <p class="Login-form-signup">Hesabın yok mu? <a href="javascript:void(0)" @click="openRegister">Hemen
                      Üye Ol!</a></p>
                </div>
                <div class="tab-pane fade" role="tabpanel" id="loginFormMailContent">
                  <label for="" class="Login-form-item ">
                    <input v-model="email" type="text" placeholder="E-mail adresiniz" value="" id="mailInput">
                  </label>
                  <p class="Login-form-alert  mt-2 text-danger text-sm mail-alert"></p>
                  <button :disabled="!enabledLoginButton" type="submit" class="Login-form-button">GÖNDER</button>
                  <p class="Login-form-signup">Hesabın yok mu? <a href="javascript:void(0)" @click="openRegister">Hemen
                      Üye Ol!</a></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import jwt_decode from 'jwt-decode'
import { mapActions, mapMutations } from "vuex";

export default {
  name: "LoginModal",
  data() {
    return {
      loginType: 'phone',
      phone: '',
      email: '',
    }
  },
  mounted() {
    this.loginType = 'phone'
    this.phone = ''
    this.email = ''
  },
  computed: {
    enabledLoginButton() {
      if ((this.loginType === 'phone' && this.phone.length === 10) || (this.loginType === 'email' && this.email.length)) {
        return true;
      }
    }
  },
  watch: {
    phone(newValue) {
      // Remove any non-digit characters
      let cleaned = newValue.replace(/\D/g, '');

      // Make sure the first character is always '5'
      if (cleaned.length > 0 && cleaned.charAt(0) !== '5') {
        cleaned = '5' + cleaned.substring(1);
      } else if (cleaned.length === 0) {
        cleaned = '5';
      }

      // Limit the input to 10 characters
      if (cleaned.length > 10) {
        cleaned = cleaned.substring(0, 10);
      }

      // Update the phone number value
      this.phone = cleaned;
    },
  },
  methods: {
    ...mapMutations(['setLoginCodeModalData']),
    openRegister() {
      this.$bvModal.hide('loginModal')
      this.$bvModal.show('signupModal')
    },
    async sendcode() {
      try {
        const data = {
          source_id: process.env.SOURCE_ID
        };
        if (this.loginType === 'phone') {
          data.prephone = '90';
          data.phone = this.phone;
        } else if (this.loginType === 'email') {
          data.email = this.email;
        }

        const response = await this.$axios.post('/website/sendcode', data);
        // TODO numaranın doğruluğu cevaptan kontrol edilecek ?
        // show Login Code Modal

        if (response.data.status) {
          this.setLoginCodeModalData({
            loginType: this.loginType,
            phone: this.phone,
            email: this.email,
            data: data
          })
          this.$bvModal.hide('loginModal')
          this.$bvModal.show('loginCodeModal')
        } else {
          this.$toast.error("<p>Telefon numaranızı kontrol ediniz!</p>", {
            className: 'custom-toast error-toast',
            icon: {
              name: 'icon-reservation-cancel',
            },
            action: {
              icon: 'icon-toast-exit',
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            }
          })
        }

      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>
<style>
.input-group-text {
  border: none;
  background-color: transparent;
}
</style>
