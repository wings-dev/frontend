<template>
  <!-- Rezervasyon Modal -->
  <div>
    <b-modal id="reservationModal" class="Login" size="xl" :hide-header="true" hide-footer>
    <div class="Login">
      <button type="button" class="btn-close" aria-label="Close" @click="$bvModal.hide('reservationModal')"><i
          class="icon-login-close"></i></button>
      <div class="Login-in">
        <div class="Login-left">
          <div class="Login-card">
            <div class="Login-card-img">
              <nuxt-img :src="global_cdn + reservationModalData.villa?.watermark_images?.[0]?.preview_url" :alt="prefix + reservationModalData.villa.code + ' ' + sitename" loading="lazy" placeholder ></nuxt-img>
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
            <div class="Login-card-content">
              <p class="Login-card-content-total">
                Toplam Ödeme <span>{{ reservationModalData.availabilityData.total_payment | numberFormat }}{{ reservationModalData.availabilityData.night_price_currency_symbol }}</span>
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
            <div class="Login-card-discount">
              <label for="">
                <input type="text" placeholder="İndirim kodunuz mu var?">
                <button type="button">Uygula</button>
              </label>
            </div>
          </div>
        </div>
        <div class="Login-right">
          <div class="Login-right-in">
            <h3>Şuan rezervasyon talebi oluşturuyorsunuz.</h3>
            <h2>Bilgilerinizi giriniz</h2>
            <p>Ön rezervasyon talebi alabilmemiz için lütfen rezervasyon sahibi bilgilerini giriniz.</p>
            <form action="" class="Login-form" @submit.prevent="register">
              <!-- {{ reservationModalData }} -->
              <label for="" class="Login-form-item mb-2">
                <input type="text" placeholder="İsim Soyisim" v-model="form.name" @input="checkName" required>
              </label>
              <label for="" class="Login-form-item mb-2">
                <input type="text" placeholder="E-mail Adresiniz" value="" id="mailInput" v-model="form.email" required>
              </label>
              <p v-if="form.email && !isValidEmail(form.email)" class="Login-form-alert Login-form-alert-mail mt-2 text-danger text-sm mail-alert mail-alert-signup">
                Lütfen geçerli bir email adresi giriniz.
              </p>
              <label for="" class="Login-form-item Login-form-item-tr">
                <vue-tel-input v-model="phoneNumber" @input="onInput" v-bind="phoneProps"
                  :defaultCountry="'TR'"></vue-tel-input>
              </label>
              <p class="Login-form-alert   mt-2 text-danger text-sm phone-alert" v-if="phoneNumberValid === false">
                Lütfen doğru bir telefon numarası giriniz</p>
              <label for="gizlilik" class="Login-form-item Login-form-item-check">
                <input v-model="checkboxAcceptRules" type="checkbox" id="gizlilik">
                <span></span>
                <p><button type="button" @click="kvkkModalOpen">Kişisel Verilerin İşlenmesine İlişkin Aydınlatma Metni</button>’ni ve <button type="button" @click="sozlesmeModalOpen">Rezervasyon Sözleşmesi</button>'ni okudum ve kabul ediyorum.</p>
              </label>
              <label for="firsat" class="Login-form-item Login-form-item-check">
                <input type="checkbox" id="firsat">
                <span></span>
                <p>Fırsat ve kampanyalardan haberdar olmak istiyorum.</p>
              </label>
              <button :disabled="!formValidated" :style="{ 'opacity': formValidated ? '1' : '.5' }" type="submit"
                class="Login-form-button mt-2">GÖNDER</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
  <kvkk-modal></kvkk-modal>
  <sozlesme-modal></sozlesme-modal>
  </div>
  
</template>

<script>
import KvkkModal from '../modals/kvkk-modal.vue';
import SozlesmeModal from '../modals/sozlesme-modal.vue';
import {mapMutations, mapState} from "vuex";

export default {
  name: "ReservationModal",
  components:{KvkkModal,SozlesmeModal},
  data() {
    return {
      prefix: process.env.PREFIX,
      sitename: process.env.SITE_NAME,
      global_cdn: process.env.GLOBAL_CDN_URL,
      form: {
        name: null,
        email: null,
        prephone: null,
        phone: null,
        source_id: process.env.SOURCE_ID,
      },
      phoneNumber: '',
      phoneObject: {
        valid: false
      },
      checkboxAcceptRules: false,
      phoneNumberValid: false,
      phoneProps: {
        "country": {
          "name": "Turkey (Türkiye)",
          "iso2": "TR",
          "dialCode": "90"
        },
        autoFormat: false,
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
    ...mapState(['reservationModalData']),
    formValidated() {
      return (
        this.form.name &&
        this.isValidEmail(this.form.email) &&
        this.phoneObject.valid &&
        this.checkboxAcceptRules
      );
    },
  },
  methods: {
    ...mapMutations(['setReservationModalData']),
    isValidEmail(email) {
      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      return emailRegex.test(email);
    },
    getBrowserInfo() {
      return navigator.userAgent;
    },
    async getUserIP() {
      try {
        const response = await this.$axios.get("https://api.ipify.org?format=json");
        return response.data.ip;
      } catch (error) {
        console.error("IP adresi alınamadı", error);
        return null;
      }
    },
    getOperatingSystem() {
      const userAgent = window.navigator.userAgent;
      const platform = window.navigator.platform;
      let os = null;

      if (platform.startsWith("Win")) {
        os = "Windows";
      } else if (platform.startsWith("Mac")) {
        os = "macOS";
      } else if (platform.startsWith("Linux")) {
        os = "Linux";
      } else if (/Android/.test(userAgent)) {
        os = "Android";
      } else if (/iPhone|iPad|iPod/.test(userAgent)) {
        os = "iOS";
      } else {
        os = "Bilinmeyen İşletim Sistemi";
      }

      return os;
    },
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
      let resData = JSON.parse(JSON.stringify(this.reservationModalData))
      delete resData.availabilityData;
      delete resData.villa;
      const data = Object.assign({}, resData, this.form);
      let reservationID;
      const apiUrl = `/website/pre_reservation?api_token=${process.env.WEBSITE_TOKEN}`;

      if (this.reservationModalData.reservationID) {
        const requestData = {
          prephone: data.prephone,
          phone: data.phone,
          name: data.name,
          email: data.email,
          reservationID: this.reservationModalData.reservationID,
          ip: await this.getUserIP(),
          os: this.getOperatingSystem(),
          browser: this.getBrowserInfo(),
        };

        try {
          const response = await this.$axios.put(apiUrl, requestData);
          reservationID = response.data.reservationID;
        } catch (error) {
          if (error.response) {
            reservationID = error.response.data.reservationID;
          } else {
            console.error(error);
          }
        }
      } else {
        try {
          const response = await this.$axios.post(apiUrl, {
            ...data,
            ip: await this.getUserIP(),
            os: this.getOperatingSystem(),
            browser: this.getBrowserInfo()
          });
          reservationID = response.data.reservationID;
        } catch (error) {
          if (error.response) {
            reservationID = error.response.data.reservationID;
          } else {
            console.error(error);
          }
        }
      }

      if (reservationID) {
        this.setReservationModalData({ ...data, reservationID });
        this.$bvModal.hide('reservationModal')
        this.$bvModal.show('reservationCodeModal')
      }
    },
    checkName() {
      this.form.name = this.form.name.replace(/[^a-zA-ZğüşöçİĞÜŞÖÇ\s]/g, '');
    },
    kvkkModalOpen(){
      this.$bvModal.show('kvkkModal')
    },
    sozlesmeModalOpen(){
      this.$bvModal.show('sozlesmeModal')
    },
  },
  mounted(){
    console.log(this.$bvModal)
  }
}
</script>
