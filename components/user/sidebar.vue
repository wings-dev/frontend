<template>
    <div class="User-left">
        <nuxt-link to="/user/uyelik">Üyelik Bilgileriniz</nuxt-link>
        <!-- <nuxt-link to="/user/rezervasyonlar">Rezervasyonlarım</nuxt-link> -->
        <nuxt-link to="/user/favorilerim">Favorilerim</nuxt-link>
        <nuxt-link to="/user/kuponlar">Kuponlarım</nuxt-link>
        <nuxt-link to="/user/yardim-destek">Yardım ve Destek</nuxt-link>
        <a href="" class="exit" @click.prevent="logout()">Çıkış Yap</a>

    </div>
</template>
<script>
export default {
    methods: {
        async logout() {
            await this.$auth.logout()
            location.reload();
        },
    }
}
</script>
