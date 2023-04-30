<template>
    <div class="Contact-form">
        <div class="container">
            <div class="Contact-form-in">
                <div class="Contact-form-title">
                    <h1>Bizimle iletişime geç!</h1>
                    <p>Size nasıl yardımcı olabiliriz?</p>
                </div>

                <form action="">
                    <div class="Contact-form-item">
                        <label for="">
                            <input type="text" placeholder="Adınız*" v-model="form.data.name">
                            <i class="icon-user"></i>
                        </label>
                    </div>
                    <div class="Contact-form-item">
                        <label for="">
                            <input type="text" placeholder="Soyadınız*" v-model="form.data.surname">
                            <i class="icon-user"></i>
                        </label>
                    </div>
                    <div class="Contact-form-item">
                        <label for="">
                            <input type="text" placeholder="Mail Adresiniz*" v-model="form.data.email">
                            <i class="icon-user"></i>
                        </label>
                    </div>
                    <div class="Contact-form-item">
                        <label for="">
                            <input type="text" placeholder="Telefon*" v-model="form.data.phone">
                            <i class="icon-user"></i>
                        </label>
                    </div>
                    <div class="Contact-form-item w-100">
                        <label for="">
                            <textarea name="" id="" placeholder="Mesajınız*" v-model="form.data.message"></textarea>
                            <i class="icon-user"></i>
                        </label>
                    </div>
                    <div class="Contact-form-item Contact-form-item-checkbox w-100">
                        <label for="" id="kvkkinput">
                            <input type="checkbox" id="kvkkinput" v-model="form.data.kvkkSelected"
                                :checked="form.data.kvkkSelected">
                            <span></span>
                            <p><a href="">KVKK Aydınlatma metnini</a> okudum.*</p>
                        </label>
                    </div>
                    <div class="Contact-form-item Contact-form-item-checkbox w-100">
                        <label for="marka">
                            <input type="checkbox" id="marka" v-model="form.data.informSelected"
                                :checked="form.data.informSelected">
                            <span></span>
                            <p>Markamız ile ilgili gelişmelerden haberdar olmak için tarafıma elektronik ileti
                                gönderilmesini kabul ederim.</p>
                        </label>
                    </div>

                    <button type="button" @click="send" :disabled="buttonDisabled">GÖNDER</button>

                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
import UserSidebar from "@/components/user/sidebar.vue";

export default {
    name: 'UserForm',
    data() {
        return {
            form: {
                type: 2,
                data: {
                    name: '',
                    surname: '',
                    email: '',
                    phone: '',
                    message: '',
                    kvkkSelected: false,
                    informSelected: false,
                    source_id: process.env.SOURCE_ID,
                }
            }
        }
    },

    components: {
        UserSidebar
    },
    methods: {
        async send() {
            try {
                const response = await this.$axios.post(`/website/form?api_token=${process.env.WEBSITE_TOKEN}`, this.form)

                this.form = {
                    type: 2,
                    data: {
                        name: '',
                        surname: '',
                        email: '',
                        phone: '',
                        message: '',
                        kvkkSelected: false,
                        informSelected: false,
                        source_id: process.env.SOURCE_ID,
                    }
                }

                this.$toast.success(response.data.message, {
                    className: 'custom-toast success-toast',
                    icon: {
                        name: 'icon-reservation-success',
                    },
                    action: {
                        icon: 'icon-toast-exit',
                        onClick: (e, toastObject) => {
                            toastObject.goAway(0);
                        }
                    }
                })
            } catch (e) {
                this.$toast.error("<p>Bir hata oldu! Lütfen telefon numaramızdan iletişime geçiniz.</p>", {
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
        }
    },
    computed: {
        buttonDisabled() {
            if (!this.form.data.kvkkSelected) {
                return true;
            }

            // form.data içindeki tüm alanlarının doluluk durumunu kontrol et
            const keys = Object.keys(this.form.data);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const value = this.form.data[key];

                // Eğer herhangi bir alan boşsa, buttonDisabled true döndür
                if (value === '' || value === null || value === undefined) {
                    return true;
                }
            }

            // Tüm alanlar doluysa, buttonDisabled false döndür
            return false;
        },
        activeCoords() {
            return [[this.officeCoordinates[0].x, this.officeCoordinates[0].y]][this.picked];
        },
    }
}
</script>
  