<template>
    <div class="dropdown Notification">
        <button type="button" class="search-button" aria-label="Bildirimler" id="" data-bs-toggle="dropdown"
            aria-expanded="false">
            <i class="icon-bell"></i>
        </button>
        <ul class="dropdown-menu">
            <h5>BİLDİRİM MERKEZİ</h5>
            <li v-for="(item,index) in notifications" :key="index"><nuxt-link class="dropdown-item active" :to="item.notification_link">{{ item.notification_title }}</nuxt-link></li>
          
            <!-- <li><a class="dropdown-item" href="#">Şeker tadında bayram fırsatlarını yakala</a></li> -->
        </ul>
    </div>
</template>
<script>
export default {
    name: "Notification",
    data() {
        return {
            notifications: this.$store.state.site_settings.notifications
        }
    },
}
</script>