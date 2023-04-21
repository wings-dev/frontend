<template>
  <div>
    <section class="User">
      <div class="container">
        <div class="User-in">
          <user-sidebar></user-sidebar>
          <div class="User-right">
            <div class="User-right-head">
              <h2>Üyelik Bilgileriniz</h2>
            </div>
            <form action="" class="User-form" @submit.prevent="update">
              <div class="User-form-item">
                <label for="">
                  <input type="text" placeholder="Ad Soyad" v-model="form.name">
                </label>
              </div>
              <div class="User-form-item">
                <label for="">
                  <input type="text" placeholder="E-posta Adresiniz" v-model="form.email">
                </label>
              </div>
              <div class="User-form-item">
                <vue-tel-input v-model="phoneNumber" @input="onInput" v-bind="phoneProps"
                               :defaultCountry="'TR'"></vue-tel-input>
              </div>
              <div class="User-form-item">
                <label for="">
                  <input type="text" placeholder="Doğum Tarihi" v-model="form.birthday">
                  <p class="date-mask">GG <span>/</span>AA <span>YY</span></p>
                </label>
              </div>
              <div class="User-form-item three">
                <label for="">
                  <client-only>
                    <v-select
                      class="w-100"
                      label="name"
                      :options="countries"
                      v-model="form.address.country_id"
                      :clearable="false"
                      @input="countryChanged($event)"
                      placeholder="Ülke"></v-select>
                  </client-only>
                </label>
              </div>
              <div class="User-form-item three">
                <label for="">
                  <client-only>
                    <v-select
                      class="w-100"
                      label="name"
                      :options="cities"
                      v-model="form.address.city_id"
                      :clearable="false"
                      @input="cityChanged($event)"
                      placeholder="İl"></v-select>
                  </client-only>
                </label>
              </div>
              <div class="User-form-item three">
                <label for="">
                  <client-only>
                    <v-select
                      class="w-100"
                      label="name"
                      :options="states"
                      v-model="form.address.state_id"
                      :clearable="false"
                      placeholder="İlçe"></v-select>
                  </client-only>
                </label>
              </div>
              <div class="User-form-item w-100">
                <label for="">
                  <textarea name="" id="" placeholder="Adres" v-model="form.address.address"></textarea>
                </label>
              </div>
              <button type="submit" :disabled="loading">GÜNCELLE</button>
            </form>
            <div class="User-invoice">
              <div class="User-right-head">
                <h2>Fatura Bilgileriniz</h2>
              </div>
              <div class="User-invoice-item">
                <div class="User-invoice-item-type">
                  <span>Fatura Tipi:</span>
                  <p> Tüzel</p>
                </div>
                <div class="User-invoice-item-title">
                  <span>Ünvan:</span>
                  <p>TEKNOGRAFİ REKLAM AJANSI ve MEDYA İLETİŞİM HİZMETLERİ LİMİTED ŞİRKETİ</p>
                </div>
                <div class="User-invoice-item-address">
                  <p>İncilipınar Mh. 05 Nolu Cd. Tersan İş Mrk. K:3 No:14 Şehitkamil/GAZİANTEP/TÜRKİYE</p>
                </div>
                <div class="User-invoice-item-numbers">
                  <p><span>Vergi Dairesi:</span>Gazikent</p>
                  <p><span>Vergi Numarası:</span>8360854632</p>
                </div>
                <div class="User-invoice-item-buttons">
                  <button type="button" data-bs-toggle="modal"
                          data-bs-target="#editInvoiceModal">Düzenle
                  </button>
                  <button type="button">Sil</button>
                </div>
              </div>
              <div class="User-invoice-item">
                <div class="User-invoice-item-type">
                  <span>Fatura Tipi:</span>
                  <p> Tüzel</p>
                </div>
                <div class="User-invoice-item-title">
                  <span>Ünvan:</span>
                  <p>TEKNOGRAFİ REKLAM AJANSI ve MEDYA İLETİŞİM HİZMETLERİ LİMİTED ŞİRKETİ</p>
                </div>
                <div class="User-invoice-item-address">
                  <p>İncilipınar Mh. 05 Nolu Cd. Tersan İş Mrk. K:3 No:14 Şehitkamil/GAZİANTEP/TÜRKİYE</p>
                </div>
                <div class="User-invoice-item-numbers">
                  <p><span>Vergi Dairesi:</span>Gazikent</p>
                  <p><span>Vergi Numarası:</span>8360854632</p>
                </div>
                <div class="User-invoice-item-buttons">
                  <button type="button" data-bs-toggle="modal"
                          data-bs-target="#editInvoiceModal">Düzenle
                  </button>
                  <button type="button">Sil</button>
                </div>
              </div>
              <div class="User-invoice-item">
                <div class="User-invoice-item-type">
                  <span>Fatura Tipi:</span>
                  <p> Tüzel</p>
                </div>
                <div class="User-invoice-item-title">
                  <span>Ünvan:</span>
                  <p>TEKNOGRAFİ REKLAM AJANSI ve MEDYA İLETİŞİM HİZMETLERİ LİMİTED ŞİRKETİ</p>
                </div>
                <div class="User-invoice-item-address">
                  <p>İncilipınar Mh. 05 Nolu Cd. Tersan İş Mrk. K:3 No:14 Şehitkamil/GAZİANTEP/TÜRKİYE</p>
                </div>
                <div class="User-invoice-item-numbers">
                  <p><span>Vergi Dairesi:</span>Gazikent</p>
                  <p><span>Vergi Numarası:</span>8360854632</p>
                </div>
                <div class="User-invoice-item-buttons">
                  <button type="button" data-bs-toggle="modal"
                          data-bs-target="#editInvoiceModal">Düzenle
                  </button>
                  <button type="button">Sil</button>
                </div>
              </div>
              <!-- <div class="User-invoice-item">
                  <div class="User-invoice-item-type">
                      <span>Fatura Tipi:</span>
                      <p> Tüzel</p>
                  </div>
                  <div class="User-invoice-item-title">
                      <span>Ünvan:</span>
                      <p>TEKNOGRAFİ REKLAM AJANSI ve MEDYA İLETİŞİM HİZMETLERİ LİMİTED ŞİRKETİ</p>
                  </div>
                  <div class="User-invoice-item-address">
                      <p>İncilipınar Mh. 05 Nolu Cd. Tersan İş Mrk. K:3 No:14 Şehitkamil/GAZİANTEP/TÜRKİYE</p>
                  </div>
                  <div class="User-invoice-item-numbers">
                      <p><span>Vergi Dairesi:</span>Gazikent</p>
                      <p><span>Vergi Numarası:</span>8360854632</p>
                  </div>
                  <div class="User-invoice-item-buttons">
                      <button type="button">Düzenle</button>
                      <button type="button">Sil</button>
                  </div>
              </div> -->
              <div class="User-invoice-item last">
                <button type="button" data-bs-toggle="modal" data-bs-target="#addInvoiceModal">
                  <nuxt-img src="/img/big-plus.svg" alt=""></nuxt-img>
                  <span>Yeni Fatura Bilgisi Ekle</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="modal fade User-modal" id="addInvoiceModal" tabindex="-1" aria-labelledby="loginModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
            class="icon-login-close"></i></button>

          <div class="User-modal-in">
            <div class="User-modal-left">
              <nuxt-img src="/img/invoice-text.svg" alt=""></nuxt-img>
            </div>
            <div class="User-modal-right">
              <h4><span>FATURA</span> BİLGİLERİ EKLE</h4>
              <form action="" class="User-form">
                <div class="User-form-item User-form-item-check">
                  <label for="">
                    <input type="radio" name="invoicetype">
                    <span></span>
                    <p>Gerçek/Şahıs Şirketi</p>
                  </label>
                  <label for="">
                    <input type="radio" name="invoicetype">
                    <span></span>
                    <p>Tüzel</p>
                  </label>
                </div>
                <div class="User-form-item">
                  <label for="">
                    <input type="text" placeholder="Ad Soyad">
                  </label>
                </div>
                <div class="User-form-item">
                  <label for="">
                    <input type="text" placeholder="E-posta Adresiniz">
                  </label>
                </div>
                <div class="User-form-item">
                  <vue-tel-input v-model="phoneNumber" @input="onInput" v-bind="phoneProps"
                                 :defaultCountry="'TR'"></vue-tel-input>
                </div>
                <div class="User-form-item">
                  <label for="">
                    <input type="text" placeholder="Doğum Tarihi">
                    <p class="date-mask">GG <span>/</span>AA <span>YY</span></p>
                  </label>
                </div>
                <div class="User-form-item three">
                  <label for="">
                    <client-only>
                      <v-select v-model="countryValue" :options="countries"
                               :labelTitle="countryPlaceholder"></v-select>
                    </client-only>
                  </label>
                </div>
                <div class="User-form-item three">
                  <label for="">
                    <client-only>
                      <v-select v-model="cityValue" :options="cities"
                               :labelTitle="cityPlaceholder"></v-select>
                    </client-only>
                  </label>
                </div>
                <div class="User-form-item three">
                  <label for="">
                    <client-only>
                      <v-select v-model="districtValue" :options="states"
                               :labelTitle="districtPlaceholder"></v-select>
                    </client-only>
                  </label>
                </div>
                <div class="User-form-item w-100">
                  <label for="">
                    <textarea name="" id="" placeholder="Adres"></textarea>
                  </label>
                </div>
                <button type="submit">KAYDET</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="modal fade User-modal" id="editInvoiceModal" tabindex="-1" aria-labelledby="loginModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
            class="icon-login-close"></i></button>

          <div class="User-modal-in">
            <div class="User-modal-left">
              <nuxt-img src="/img/invoice-text.svg" alt=""></nuxt-img>
            </div>
            <div class="User-modal-right">
              <h4><span>FATURA</span> BİLGİLERİ GÜNCELLE</h4>
              <form action="" class="User-form">
                <div class="User-form-item User-form-item-check">
                  <label for="">
                    <input type="radio" name="invoicetype">
                    <span></span>
                    <p>Gerçek/Şahıs Şirketi</p>
                  </label>
                  <label for="">
                    <input type="radio" name="invoicetype">
                    <span></span>
                    <p>Tüzel</p>
                  </label>
                </div>
                <div class="User-form-item">
                  <label for="">
                    <input type="text" placeholder="Ad Soyad">
                  </label>
                </div>
                <div class="User-form-item">
                  <label for="">
                    <input type="text" placeholder="E-posta Adresiniz">
                  </label>
                </div>
                <div class="User-form-item">
                  <vue-tel-input v-model="phoneNumber" @input="onInput" v-bind="phoneProps"
                                 :defaultCountry="'TR'"></vue-tel-input>
                </div>
                <div class="User-form-item">
                  <label for="">
                    <input type="text" placeholder="Doğum Tarihi">
                    <p class="date-mask">GG <span>/</span>AA <span>YY</span></p>
                  </label>
                </div>
                <div class="User-form-item three">
                  <label for="">
                    <client-only>
                      <v-select v-model="countryValue" :options="countries"
                               :labelTitle="countryPlaceholder"></v-select>
                    </client-only>
                  </label>
                </div>
                <div class="User-form-item three">
                  <label for="">
                    <client-only>
                      <v-select v-model="cityValue" :options="cities"
                               :labelTitle="cityPlaceholder"></v-select>
                    </client-only>
                  </label>
                </div>
                <div class="User-form-item three">
                  <label for="">
                    <client-only>
                      <v-select v-model="districtValue" :options="states"
                               :labelTitle="districtPlaceholder"></v-select>
                    </client-only>
                  </label>
                </div>
                <div class="User-form-item w-100">
                  <label for="">
                    <textarea name="" id="" placeholder="Adres"></textarea>
                  </label>
                </div>
                <button type="submit">GÜNCELLE</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserSidebar from "@/components/user/sidebar.vue";

export default {
  name: 'UserInformation',
  data() {
    return {
      form: {
        name: '',
        email: '',
        prephone: '',
        phone: '',
        birthday: '',
        resource_id: '',
        address: {
          country_id: '',
          city_id: '',
          state_id: '',
        },
        subscription: {
          sms: false,
          email: false
        },
        invoices: [
          {
            name: '',
            type: 0,
            vat: '',
            vat_id: '',
            country_id: '',
            city_id: '',
            state_id: '',
            address: '',
          }
        ]
      },
      loading: false,
      phoneNumber: '',
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
      },
      countries: [],
      countryValue: null,
      countryPlaceholder: "Ülke",
      cities: [
        {value: 0, text: "İstanbul"},
        {value: 1, text: "Ankara"},
        {value: 2, text: "İzmir"},
        {value: 3, text: "Muğla"},
      ],
      cityValue: null,
      cityPlaceholder: "İl",
      states: [
        {value: 0, text: "Kadıköy"},
        {value: 1, text: "Şişli"},
        {value: 2, text: "Beşiktaş"},
        {value: 3, text: "Maltepe"},
      ],
      districtValue: null,
      districtPlaceholder: "İlçe",
    }
  },
  async mounted() {
    const response = await this.$axios.post(`/website/countries?api_token=${process.env.WEBSITE_TOKEN}`);
    this.countries = response.data.countries.map(item => {
      item.name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
      return item;
    });
  },
  components: {
    UserSidebar
  },
  methods: {
    async update() {
      this.loading = true;
      await this.$axios.put('/website/profile', this.form)
      this.loading = false;
    },
    async countryChanged(country) {
      this.cities = [];
      this.states = [];
      const response = await this.$axios.post(`/website/states?api_token=${process.env.WEBSITE_TOKEN}`, {'country_id': country.id})
      this.cities = response.data.states.map(item => {
        item.name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
        return item;
      });
    },
    async cityChanged(city) {
      this.states = [];
      const response = await this.$axios.post(`/website/cities?api_token=${process.env.WEBSITE_TOKEN}`, {'state_id': city.id})
      this.states = response.data.cities.map(item => {
        item.name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
        return item;
      });
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
  }
}
</script>
