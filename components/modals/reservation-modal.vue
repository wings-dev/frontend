<template>
  <!-- Rezervasyon Modal -->
  <b-modal id="reservationModal" class="Login" size="xl" :hide-header="true" hide-footer>
    <div class="Login">
      <button type="button" class="btn-close" aria-label="Close" @click="$bvModal.hide('reservationModal')"><i
          class="icon-login-close"></i></button>
      <div class="Login-in">
        <div class="Login-left" style="background-image:url('/img/login-bg.jpg')"></div>
        <div class="Login-right">
          <div class="Login-right-in">
            <h2><b>REZERVASYON </b> YAP</h2>
            <form action="" class="Login-form" @submit.prevent="register">
              {{ reservationModalData }}
              <label for="" class="Login-form-item mb-2">
                <input type="text" placeholder="İsim Soyisim" v-model="form.name" required>
              </label>
              <label for="" class="Login-form-item mb-2">
                <input type="text" placeholder="E-mail Adresiniz" value="" id="mailInput" v-model="form.email" required>
              </label>
              <p class="Login-form-alert  mt-2 text-danger text-sm mail-alert mail-alert-signup"></p>
              <label for="" class="Login-form-item Login-form-item-tr">
                <vue-tel-input v-model="phoneNumber" @input="onInput" v-bind="phoneProps"
                  :defaultCountry="'TR'"></vue-tel-input>
              </label>
              <p class="Login-form-alert  mt-2 text-danger text-sm phone-alert" v-if="phoneNumberValid === false">
                Lütfen doğru bir telefon numarası giriniz</p>
              <label for="gizlilik" class="Login-form-item Login-form-item-check">
                <input v-model="checkboxAcceptRules" type="checkbox" id="gizlilik">
                <span></span>
                <p><a data-bs-toggle="modal" href="#kullanimModal">Kullanım Şartları</a> ve <a data-bs-toggle="modal"
                    href="#gizlilikModal">Gizlilik bildirimini</a> kabul ediyorum.
                  Kişisel Verilerin Korunması ve <a data-bs-toggle="modal" href="#gizlilikPolitikasiModal">Gizlilik
                    Politikasını</a> okudum.</p>
              </label>
              <label for="firsat" class="Login-form-item Login-form-item-check">
                <input type="checkbox" id="firsat">
                <span></span>
                <p><a href="">Fırsat ve kampanyalardan haberdar olmak istiyorum.</a></p>
              </label>
              <button :disabled="!formValidated" :style="{ 'opacity': formValidated ? '1' : '.5' }" type="submit"
                class="Login-form-button mt-2">GÖNDER</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>

import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "ReservationModal",
  data() {
    return {
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
      return this.form.name && this.form.email && this.phoneObject.valid && this.checkboxAcceptRules;
    }
  },
  methods: {
    ...mapMutations(['setReservationModalData']),
    ...mapActions(['showReservationCodeModal', 'hidePreReservationModal']),
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
      const data = Object.assign({}, this.reservationModalData, this.form);
      this.setReservationModalData(data);

      let reservationID;
      try {
        const response = await this.$axios.post(`/api/website/pre_reservation?api_token=${process.env.WEBSITE_TOKEN}`, data);
        reservationID = response.data.reservationID;
      } catch (error) {
        if (error.response) {
          reservationID = error.response.data.reservationID;
        } else {
          console.error(error);
        }
      }

      if (reservationID) {
        console.log(reservationID);
        this.setReservationModalData(Object.assign({}, data, { reservationID }));
        this.hidePreReservationModal();
        this.showReservationCodeModal();
      }


    }
  }
}
</script>
