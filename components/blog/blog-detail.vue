<template>
    <main class="main">
        <section class="Blog-header">
            <div class="container">
                <div class="Blog-header-in">
                    <h1>Kalkan</h1>
                    <div class="Blog-header-pagination">
                        <!-- <a href="">OtelBnb ></a> -->
                        <nuxt-link to="/blog">Blog > </nuxt-link>
                        <nuxt-link :to="'/blog/' + category.href">{{ category.text }} ></nuxt-link>
                        <a>{{ data.title }}</a>
                    </div>
                </div>
            </div>
        </section>
        <section class="Blog-detail-img">
            <div class="container">
                <div class="Blog-detail-img-in">
                    <nuxt-img :src="data.page_content?.default?.page_banner" v-if="data.page_content.default.page_banner"
                        :alt="'Blog ' + sitename" loading="lazy" placeholder></nuxt-img>
                </div>
            </div>
        </section>
        <section class="Blog ">
            <div class="container">
                <div class="Blog-in detail">

                    <blog-sidebar></blog-sidebar>

                    <div class="Blog-content ">
                        <div class="Blog-detail">
                            <div class="Blog-detail-info">
                                <div class="Blog-detail-info-user">
                                    <nuxt-img src="/img/user.jpg" :alt="'Blog ' + sitename" loading="lazy"
                                        placeholder></nuxt-img>
                                    <p>Yazar: <span>{{ data.page_content.blog_author }}</span>// <span>{{
                                        data.page_content.blog_publish_date }}</span></p>
                                </div>
                                <div class="Blog-detail-share">
                                    <a href="" @click.prevent="shareOnFacebook"><i class="icon-facebook"></i></a>
                                    <a href="" @click.prevent="shareOnTwitter"><i class="icon-twitter"></i></a>
                                    <a href="" @click.prevent="shareOnWhatsApp"><i class="icon-whatsapp"></i></a>
                                </div>
                            </div>
                            <div class="Blog-detail-text">
                                <h1>{{ data.title }}</h1>
                                <div class="Blog-detail-text-in" v-html="data.page_content.article.data"></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="Blog-more" v-if="morePost.length">
            <div class="container">
                <div class="Blog-more-in">
                    <div class="Blog-more-head">
                        <h2><b>Benzer</b> ‘Blog Yazılarımız</h2>
                        <div class="swiper-pagination"></div>
                    </div>
                    <div class="Blog-more-slider">
                        <div class="swiper blog-slider-more">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item, index) in morePost" :key="index" v-if="index < 8">
                                    <nuxt-link :to="'/blog/' + item.page_content.blog_category[0] + '/' + item.url"
                                        class="Blog-item" :key="item.id" v-if="item !== null">
                                        <div class="Blog-item-img">
                                            <nuxt-img :src="item.page_content?.default?.page_list_img"
                                                v-if="item.page_content.default.page_list_img"
                                                :alt="item.name + 'Blog ' + sitename" loading="lazy" placeholder></nuxt-img>
                                            <div class="Blog-item-img-text">
                                                <h6>{{ item.name }}</h6>
                                            </div>
                                            <div class="Blog-item-date">
                                                <div class="Blog-item-date-month">
                                                    <b>{{ item.page_content.blog_publish_date.split(' ')[0] }}</b>
                                                    <span>{{ item.page_content.blog_publish_date.split(' ')[1] }}</span>
                                                </div>
                                                <div class="Blog-item-date-year">
                                                    <span>{{ item.page_content.blog_publish_date.split(' ')[2] }}</span>
                                                </div>
                                            </div>
                                            <div class="Blog-item-more">Devamını Oku</div>
                                        </div>
                                        <div class="Blog-item-text">
                                            <p v-html="item.page_content.summary.data"></p>
                                        </div>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { Swiper, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import BlogSidebar from "@/components/blog/blog-sidebar.vue";
import { shareOnFacebook, shareOnTwitter, shareOnWhatsApp } from '@/assets/share';
export default {
    name: 'DynamicBlogDetail',
    props: ['data', 'morePost', 'category'],
    components: {
        Swiper, BlogSidebar
    },
    data() {
        return {
            sitename: process.env.SITE_NAME
        }
    },
    methods: {
        shareOnFacebook() {
            if (!window || !window.location || !window.location.href) return;
            shareOnFacebook(window.location.href);
        },
        shareOnTwitter() {
            if (!window || !window.location || !window.location.href) return;
            shareOnTwitter(window.location.href);
        },
        shareOnWhatsApp() {
            if (!window || !window.location || !window.location.href) return;
            shareOnWhatsApp(window.location.href);
        },
    },
    mounted() {
        Swiper.use([Navigation, Pagination])

        const swiper = new Swiper('.blog-slider-more', {
            slidesPerView: 3,
            spaceBetween: 18,
            // loop: true,
            modules: [Navigation, Pagination],
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: ".swiper-pagination",
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                    spaceBetween: 18,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 18,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 18,
                },

            },
        })

    }
}
</script>
