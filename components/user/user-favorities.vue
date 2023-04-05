<template>
    <div>
        <section class="User">
            <div class="container">
                <div class="User-in">
                    <user-sidebar></user-sidebar>
                    <div class="User-right">
                        <div class="User-right-head">
                            <h2>Favorilerim</h2>
                        </div>
                        <favorities></favorities>

                    </div>
                </div>
            </div>
        </section>

    </div>
</template>
  
<script>
import UserSidebar from "@/components/user/sidebar.vue";

export default {
    name: 'UserFavorities',
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
  