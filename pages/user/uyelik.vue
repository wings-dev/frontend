<template>
    <main class="main">
        <section class="User-header">
            <div class="container">
                <div class="User-header-in">
                    <h5>Hoşgeldiniz,</h5>
                    <h4>Sn. <b>{{ $auth.user.name | titlecase}}</b></h4>
                </div>
            </div>
        </section>

        <user-information></user-information>
        <!-- <user-reservation></user-reservation> -->

    </main>
</template>

<script>
import UserInformation from "@/components/user/information.vue";
import VSelect from "@alfsnd/vue-bootstrap-select";
import UserReservation from '../../components/user/user-reservation.vue';
export default {
    name: "uyelik",
    layout: 'no-search',
    middleware: ['auth'],
    head() {
        return {
            title: 'Üyelik Bilgileri',
            meta: [
                { hid: 'description', name: 'description', content: 'anasayfa' },
                { hid: 'keywords', name: 'keywords', content: 'anasayfa1, anasayfa2, anasayfa3' }
            ],
        }
    },
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
        VSelect,
        UserInformation,
        UserReservation
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

