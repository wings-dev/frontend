<template>
    <div>
        <section class="User">
            <div class="container">
                <div class="User-in">
                    <user-sidebar></user-sidebar>
                    <div class="User-right">
                        <div class="User-right-head">
                            <h2>Kuponlarım</h2>
                        </div>
                        <div class="Coupons">
                            <div class="Coupons-item d-none">
                                <div class="Coupons-item-left">
                                    <span>SİZE ÖZEL!</span>
                                    <b>1200TL indirim kuponu</b>
                                    <p>Belirli villalarda kullanabileceğiniz %30 indirim kuponunuzu 10.11.2022 tarihine kadar kullanabilirsiniz.</p>
                                </div>
                                <div class="Coupons-item-right">
                                    <b>Kupon Kodu</b>
                                    <span>INDX1200</span>
                                    <small>Son tarih: 10.11.2022</small>
                                </div>
                            </div>
                            <h4 class="no-coupons">Şu an mevcut kuponunuz bulunmamaktadır!</h4>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    </div>
</template>
  
<script>
import UserSidebar from "@/components/user/sidebar.vue";

export default {
    name: 'UserCoupons',
    data() {
        return {

        }
    },

    components: {
        UserSidebar
    },
    methods: {


    }
}
</script>
  