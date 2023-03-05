<template>
  <!-- Sizi Arayalım Modal -->
  <div class="modal fade Login" id="callModal" tabindex="-1" aria-labelledby="callModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
            class="icon-login-close"></i></button>
        <div class="Login-in">
          <div class="Login-left" style="background-image:url(/img/sizi-arayalim-bg.jpg)"></div>
          <div class="Login-right">
            <div class="Login-right-in">
              <h2><b>SİZİ </b> ARAYALIM</h2>
              <form action="" class="Login-form">
                <label for="" class="Login-form-item mb-2">
                  <input type="text" placeholder="İsim Soyisim" value="">
                </label>
                <p class="Login-form-alert  mt-2 text-danger text-sm mail-alert mail-alert-signup"></p>
                <label for="" class="Login-form-item Login-form-item-tr mb-2">
                  <vue-tel-input v-model="phoneNumber" @input="onInput" v-bind="phoneProps"></vue-tel-input>
                </label>
                <label for="" class="Login-form-item Login-form-item-select mb-3">
                  <client-only>
                    <VSelect v-model="callSubject" :options="callValues" :labelTitle="callPlaceholder" />
                  </client-only>
                </label>
                <h4 class="Login-form-call-title">Ne Zaman Aranmak İstersiniz</h4>
                <div class="Login-form-call mb-2">
                  <div class="Login-form-call-item">
                    <input type="radio" name="loginFormCallItem" checked id="loginFormCallInput">
                    <label for="loginFormCallInput">
                      <span class="Login-form-call-item-dot"></span>
                      <p><span>HEMEN</span>5dk içinde arayabiliriz.</p>
                    </label>
                  </div>
                  <div class="Login-form-call-item">
                    <input type="radio" name="loginFormCallItem" checked id="loginFormCallInput2">
                    <label for="loginFormCallInput2">
                      <span class="Login-form-call-item-dot"></span>
                      <p><span>ÖZEL ZAMAN</span>Dilediğiniz zaman arayabiliriz.</p>
                    </label>
                  </div>
                </div>
                <p class="Login-form-alert  mt-2 text-danger text-sm phone-alert"></p>
                <label for="gizlilik" class="Login-form-item Login-form-item-check">
                  <input type="checkbox" id="gizlilik">
                  <span></span>
                  <p><a data-bs-toggle="modal" href="#kullanimModal">Kullanım Şartları</a> ve <a href="">Gizlilik
                      bildirimini</a> kabul ediyorum.
                    Kişisel Verilerin Korunması ve <a href="">Gizlilik Politikasını</a> okudum.</p>
                </label>
                <label for="firsat" class="Login-form-item Login-form-item-check">
                  <input type="checkbox" id="firsat">
                  <span></span>
                  <p><a href="">Fırsat ve kampanyalardan haberdar olmak istiyorum.</a> </p>
                </label>
                <button type="submit" class="Login-form-button mt-2">GÖNDER</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VSelect from "@alfsnd/vue-bootstrap-select";

export default {
  name: "CallModal",
  data() {
    return {
      phoneNumber: '',
      callSubject: null,
      callPlaceholder: "Konu Seçiniz",
      callValues: [
        { value: 1, text: "Konaklama Problemi" },
        { value: 2, text: "Rezervasyon Problemi" },
        { value: 3, text: "Fatura İşlemleri" },
        { value: 4, text: "Ek Hizmetler" },
      ],
    }
  },
  components: {
    VSelect,
  },
  computed: {
    phoneProps() {
      return {
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
      };
    },
  },
  methods: {
    onInput(phone, phoneObject) {
      setTimeout(() => {
        this.phoneNumberValid = phoneObject.valid;
        if (phone && phoneObject.country?.iso2 === 'TR' && !phoneObject.nationalNumber?.startsWith('5')) {
          this.phoneNumber = '5';
        }
      }, 50)
    },
  }
}
</script>
