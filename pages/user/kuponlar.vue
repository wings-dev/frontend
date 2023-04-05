<template>
    <main class="main">
        <section class="User-header">
            <div class="container">
                <div class="User-header-in">
                    <h5>Hoşgeldiniz,</h5>
                    <h4>Sn. Mehmet <b>YILDIZ</b></h4>
                </div>
            </div>
        </section>

        <user-coupons></user-coupons>

    </main>
</template>

<script>
import UserCoupons from '../../components/user/coupons.vue';
export default {
    name: "favorilerim",
    layout: 'no-search',
    middleware: ['auth'],
    head() {
        return {
            title: 'Favorilerim',
            meta: [
                { hid: 'description', name: 'description', content: 'anasayfa' },
                { hid: 'keywords', name: 'keywords', content: 'anasayfa1, anasayfa2, anasayfa3' }
            ],
          
        }
    },
    components:{
        UserCoupons
    }
}
</script>

