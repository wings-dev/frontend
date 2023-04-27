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
            title: 'Kuponlarım',
        }
    },
    components:{
        UserCoupons
    }
}
</script>

