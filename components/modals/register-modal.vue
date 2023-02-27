<template>
  <div>
    <slot name="button"></slot>

    <!-- Kayıt Modal -->
    <div ref="signupModal" class="modal fade Login" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
            class="icon-login-close"></i></button>
          <div class="Login-in">
            <div class="Login-left" style="background-image:url('/img/login-bg.jpg')"></div>
            <div class="Login-right">
              <div class="Login-right-in">
                <h2><b>KAYIT </b> OL</h2>
                {{form}}
                <form action="" class="Login-form" @submit.prevent="register">
                  <label for="" class="Login-form-item mb-2">
                    <input type="text" placeholder="İsim Soyisim" v-model="form.name" required>
                  </label>
                  <label for="" class="Login-form-item mb-2">
                    <input type="text" placeholder="E-mail Adresiniz" value="" id="mailInput" v-model="form.email" required>
                  </label>
                  <p class="Login-form-alert  mt-2 text-danger text-sm mail-alert mail-alert-signup"></p>
                  <label for="" class="Login-form-item Login-form-item-tr">
                    <vue-tel-input @input="onInput" v-bind="phoneProps"
                                   :defaultCountry="'TR'"></vue-tel-input>
                  </label>
                  <p class="Login-form-alert  mt-2 text-danger text-sm phone-alert" v-if="phoneNumberValid === false">
                    Lütfen doğru bir telefon numarası giriniz</p>
                  <label for="gizlilik" class="Login-form-item Login-form-item-check">
                    <input v-model="checkboxAcceptRules" type="checkbox" id="gizlilik">
                    <span></span>
                    <p><a data-bs-toggle="modal" href="#kullanimModal">Kullanım Şartları</a> ve <a
                      data-bs-toggle="modal" href="#gizlilikModal">Gizlilik bildirimini</a> kabul ediyorum.
                      Kişisel Verilerin Korunması ve <a data-bs-toggle="modal" href="#gizlilikPolitikasiModal">Gizlilik
                        Politikasını</a> okudum.</p>
                  </label>
                  <label for="firsat" class="Login-form-item Login-form-item-check">
                    <input type="checkbox" id="firsat">
                    <span></span>
                    <p><a href="">Fırsat ve kampanyalardan haberdar olmak istiyorum.</a></p>
                  </label>
                  <button :disabled="!formValidated" :style="{ 'opacity':  formValidated ? '1' : '.5' }" type="submit" class="Login-form-button mt-2">KAYIT OL</button>
                  <button class="Login-form-button mt-2" @click="test">test</button>
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

export default {
  name: "RegisterModal",
  data() {
    return {
      form: {
        name: null,
        email: null,
        prephone: null,
        phone: null,
        source_id: process.env.SITE,
      },
      phoneObject: {
        valid: false
      },
      checkboxAcceptRules: false,
      phoneNumberValid: false,
      phoneProps: {
        enabledFlags: true,
        dropdownOptions: {
          showDialCodeInSelection: true,
          showDialCodeInList: true,
          showFlags: true,
        },
        inputOptions: {
          placeholder: "Telefon Numaranız",
          type: "tel",
        },
        mode: "international",
        validCharactersOnly: true,
      }
    }
  },
  computed: {
    formValidated() {
      return this.form.name && this.form.email && this.phoneObject.valid && this.checkboxAcceptRules;
    }
  },
  methods: {
    onInput(phone, phoneObject) {
      setTimeout(() => {
        this.phoneObject = phoneObject;
        this.phoneNumberValid = phoneObject.valid;
        if (phone && phoneObject.country?.iso2 === 'TR' && !phoneObject.nationalNumber?.startsWith('5')) {
          this.phoneNumber = '5';
        }
        if (this.phoneObject.valid) {
          this.form.prephone = this.phoneObject.countryCallingCode;
          this.form.phone = this.phoneObject.nationalNumber;
        } else {
          this.form.prephone = null;
          this.form.phone = null;
        }
      }, 50)
    },
    async register() {
      try {
        const response = await this.$axios.post('/api/register', this.form);
        if (response.data.status === true) {
          alert(response.data.message)
        } else {
          alert(response.data.message)
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>
