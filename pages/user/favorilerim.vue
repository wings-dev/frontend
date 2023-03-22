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

        <favorities></favorities>
        <!-- <user-reservation></user-reservation> -->

    </main>
</template>

<script>
import UserInformation from "@/components/user/information.vue";
import VSelect from "@alfsnd/vue-bootstrap-select";
import UserReservation from '../../components/user/user-reservation.vue';
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
            link: [
                { rel: 'stylesheet', href: `/css/uyelik.min.css` },
                { rel: 'stylesheet', href: `/css/fav.min.css` }
            ]
        }
    }
}
</script>

