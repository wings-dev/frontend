<template>
    <div class="Blog-sidebar ">
        <div class="Blog-sidebar-title">
            <i class="icon-header-phone"></i>
            <h3>BLOG</h3>
        </div>
        <div class="Blog-sidebar-in">
            <template v-for="item in blogMenu">
                <div class="Blog-sidebar-item" v-if="item.children.length > 0">
                    <button class="Blog-sidebar-item-button" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#'+item.slug" aria-expanded="false">{{ item.title }} <i class="icon-down-arrow"></i></button>
                    <div class="collapse" :id="item.slug">
                        <div class="card card-body">
                            <nuxt-link v-for="(child,slug) in item.children" :key="slug" :to="child.slug" class="Blog-sidebar-item-link">- {{ child.title }}</nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="Blog-sidebar-item" v-else>
                    <a href="" class="Blog-sidebar-item-button" type="button">{{ item.title }}</a>

                </div>
            </template>

            <!-- <div class="Blog-sidebar-item">
                <button class="Blog-sidebar-item-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2"
                    aria-expanded="false">Kalkan <i class="icon-down-arrow"></i></button>
                <div class="collapse" id="collapse2">
                    <div class="card card-body">
                        <a href="" class="Blog-sidebar-item-link">- Kalkan Hakkında</a>
                        <a href="" class="Blog-sidebar-item-link">- Kalkanda Yer Alan Plajlar</a>
                        <a href="" class="Blog-sidebar-item-link">- Kalkanda Yapılacaklar</a>
                    </div>
                </div>
            </div>
            <div class="Blog-sidebar-item">
                <button class="Blog-sidebar-item-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3"
                    aria-expanded="false">Marmaris Bölgesi <i class="icon-down-arrow"></i></button>
                <div class="collapse" id="collapse3">
                    <div class="card card-body">
                        <a href="" class="Blog-sidebar-item-link">- Kalkan Hakkında</a>
                        <a href="" class="Blog-sidebar-item-link">- Kalkanda Yer Alan Plajlar</a>
                        <a href="" class="Blog-sidebar-item-link">- Kalkanda Yapılacaklar</a>
                    </div>
                </div>
            </div>
            <div class="Blog-sidebar-item">
                <button class="Blog-sidebar-item-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4"
                    aria-expanded="false">Bodrum Bölgesi <i class="icon-down-arrow"></i></button>
                <div class="collapse" id="collapse4">
                    <div class="card card-body">
                        <a href="" class="Blog-sidebar-item-link">- Kalkan Hakkında</a>
                        <a href="" class="Blog-sidebar-item-link">- Kalkanda Yer Alan Plajlar</a>
                        <a href="" class="Blog-sidebar-item-link">- Kalkanda Yapılacaklar</a>
                    </div>
                </div>
            </div>
            <div class="Blog-sidebar-item">
                <button class="Blog-sidebar-item-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5"
                    aria-expanded="false">Dalyan Bölgesi <i class="icon-down-arrow"></i></button>
                <div class="collapse" id="collapse5">
                    <div class="card card-body">
                        <a href="" class="Blog-sidebar-item-link">- Kalkan Hakkında</a>
                        <a href="" class="Blog-sidebar-item-link">- Kalkanda Yer Alan Plajlar</a>
                        <a href="" class="Blog-sidebar-item-link">- Kalkanda Yapılacaklar</a>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState({
            blogMenu: state => state.blogMenu
        }),
    },
}
</script>