<template>
    <div class="User-left">
        <nuxt-link to="/user/uyelik">Üyelik Bilgileriniz</nuxt-link>
        <!-- <nuxt-link to="/user/rezervasyonlar">Rezervasyonlarım</nuxt-link> -->
        <nuxt-link to="/user/favorilerim">Favorilerim</nuxt-link>
        <nuxt-link to="/user/kuponlar">Kuponlarım</nuxt-link>
        <a href="/user/yardim-destek">Yardım ve Destek</a>
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
