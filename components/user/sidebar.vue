<template>
    <div class="User-left">
        <nuxt-link to="uyelik">Üyelik Bilgileriniz</nuxt-link>
        <a href="">Seyahatlerim</a>
        <nuxt-link to="rezervasyonlar">Rezervasyonlarım</nuxt-link>
        <a href="">Bana Özel</a>
        <nuxt-link to="favs">Favorilerim</nuxt-link>
        <a href="">Kuponlarım</a>
        <a href="">Yardım ve Destek</a>
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