<template>
    <main class="main">
        <section class="Blog-header">
            <div class="container">
                <div class="Blog-header-in">
                    <h1>Kalkan</h1>
                    <div class="Blog-header-pagination">
                        <a href="">OtelBnb ></a>
                        <a href="">Blog > </a>
                        <a href="">Genel > </a>
                        <a href="">Tatil için yola çıkmadan....</a>
                    </div>
                </div>
            </div>
        </section>
        <section class="Blog-detail-img">
            <div class="container">
                <div class="Blog-detail-img-in">
                    <img src="/img/blog-detay.jpg" alt="">
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
                                    <img src="/img/user.jpg" alt="">
                                    <p>Yazar: <span>Ayşe ERYILMAZ</span>// <span>10 Mart 2023</span></p>
                                </div>
                                <div class="Blog-detail-share">
                                    <i class="icon-facebook"></i>
                                    <i class="icon-instagram"></i>
                                    <i class="icon-twitter"></i>
                                </div>
                            </div>
                            <div class="Blog-detail-text">
                                <h1>{{ data.name }}</h1>
                                <div class="Blog-detail-text-in" v-html="data.page_content.article.data"></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="Blog-more">
            <div class="container">
                <div class="Blog-more-in">
                    <div class="Blog-more-head">
                        <h2><b>Benzer</b> ‘Blog Yazılarımız</h2>
                        <div class="swiper-pagination"></div>
                    </div>
                    <div class="Blog-more-slider">
                        <div class="swiper blog-slider-more">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item,index) in 4" :key="index">
                                    <a class="Blog-item">
                                        <div class="Blog-item-img">
                                            <img src="/img/blog.png" alt="">
                                            <div class="Blog-item-img-text">
                                                <h6>Roots in a piece of classical Latin literature</h6>
                                            </div>
                                            <div class="Blog-item-date">
                                                <div class="Blog-item-date-month">
                                                    <b>03</b>
                                                    <span>MART</span>
                                                </div>
                                                <div class="Blog-item-date-year">
                                                    <span>2023</span>
                                                </div>
                                            </div>
                                            <div class="Blog-item-more">Devamını Oku</div>
                                        </div>
                                        <div class="Blog-item-text">
                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                                roots in a
                                                piece of classical Latin literature from 45 BC, making it over 2000 years
                                                old.</p>
                                        </div>
                                    </a>
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
export default {
    name: 'DynamicBlogDetail',
    props:['data'],
    components: {
        Swiper,BlogSidebar
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
