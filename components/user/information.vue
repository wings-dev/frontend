<template>
    <div>
        <section class="User">
            <div class="container">
                <div class="User-in">
                    <div class="User-left">
                        <a href="" class="active">Üyelik Bilgileriniz</a>
                        <a href="">Seyahatlerim</a>
                        <a href="">Bana Özel</a>
                        <a href="">Favorilerim</a>
                        <a href="">Kuponlarım</a>
                        <a href="">Yardım ve Destek</a>
                        <a href="" class="exit">Çıkış Yap</a>

                    </div>
                    <div class="User-right">
                        <div class="User-right-head">
                            <h2>Üyelik Bilgileriniz</h2>
                        </div>
                        <form action="" class="User-form">
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
                                        <VSelect v-model="countryValue" :options="countryValues"
                                            :labelTitle="countryPlaceholder" />
                                    </client-only>
                                </label>
                            </div>
                            <div class="User-form-item three">
                                <label for="">
                                    <client-only>
                                        <VSelect v-model="cityValue" :options="cityValues" :labelTitle="cityPlaceholder" />
                                    </client-only>
                                </label>
                            </div>
                            <div class="User-form-item three">
                                <label for="">
                                    <client-only>
                                        <VSelect v-model="districtValue" :options="districtValues"
                                            :labelTitle="districtPlaceholder" />
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
                        <div class="User-invoice">
                            <h2>Fatura Bilgileriniz</h2>
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
                                        data-bs-target="#editInvoiceModal">Düzenle</button>
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
                                        data-bs-target="#editInvoiceModal">Düzenle</button>
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
                                        data-bs-target="#editInvoiceModal">Düzenle</button>
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
                                    <img src="/img/big-plus.svg" alt="">
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
                            <img src="/img/invoice-text.svg" alt="">
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
                                            <VSelect v-model="countryValue" :options="countryValues"
                                                :labelTitle="countryPlaceholder" />
                                        </client-only>
                                    </label>
                                </div>
                                <div class="User-form-item three">
                                    <label for="">
                                        <client-only>
                                            <VSelect v-model="cityValue" :options="cityValues"
                                                :labelTitle="cityPlaceholder" />
                                        </client-only>
                                    </label>
                                </div>
                                <div class="User-form-item three">
                                    <label for="">
                                        <client-only>
                                            <VSelect v-model="districtValue" :options="districtValues"
                                                :labelTitle="districtPlaceholder" />
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
                            <img src="/img/invoice-text.svg" alt="">
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
                                            <VSelect v-model="countryValue" :options="countryValues"
                                                :labelTitle="countryPlaceholder" />
                                        </client-only>
                                    </label>
                                </div>
                                <div class="User-form-item three">
                                    <label for="">
                                        <client-only>
                                            <VSelect v-model="cityValue" :options="cityValues"
                                                :labelTitle="cityPlaceholder" />
                                        </client-only>
                                    </label>
                                </div>
                                <div class="User-form-item three">
                                    <label for="">
                                        <client-only>
                                            <VSelect v-model="districtValue" :options="districtValues"
                                                :labelTitle="districtPlaceholder" />
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
import VSelect from "@alfsnd/vue-bootstrap-select";
export default {
    name: 'UserInformation',
    data() {
        return {
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
            countryValues: [
                { value: 0, text: "Türkiye" },
                { value: 1, text: "Almanya" },
                { value: 2, text: "İngiltere" },
                { value: 3, text: "Amerika" },
            ],
            countryValue: null,
            countryPlaceholder: "Ülke",
            cityValues: [
                { value: 0, text: "İstanbul" },
                { value: 1, text: "Ankara" },
                { value: 2, text: "İzmir" },
                { value: 3, text: "Muğla" },
            ],
            cityValue: null,
            cityPlaceholder: "İl",
            districtValues: [
                { value: 0, text: "Kadıköy" },
                { value: 1, text: "Şişli" },
                { value: 2, text: "Beşiktaş" },
                { value: 3, text: "Maltepe" },
            ],
            districtValue: null,
            districtPlaceholder: "İlçe",
        }
    },
    components: {
        VSelect
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
    }
}
</script>