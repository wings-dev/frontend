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

        <!-- <favorities></favorities> -->
        <user-favorities></user-favorities>

    </main>
</template>

<script>
import UserInformation from "@/components/user/information.vue";
import VSelect from "@alfsnd/vue-bootstrap-select";
import UserFavorities from '../../components/user/user-favorities.vue';
export default {
    name: "favorilerim",
    layout: 'no-search',
    middleware: ['auth'],
    head() {
        return {
            title: 'Favorilerim'
        }
    },
    components:{
        UserFavorities
    }
}
</script>

