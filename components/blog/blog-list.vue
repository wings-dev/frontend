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
        <section class="Blog">
            <div class="container">
                <div class="Blog-in">
                    <blog-sidebar></blog-sidebar>
                    <div class="Blog-content ">
                        <template v-for="item in posts">
                            <nuxt-link :to="'/blog/'+item.page_content.blog_category[0] +'/'+item.url" class="Blog-item" :key="item.id" v-if="item !== null">
                                <div class="Blog-item-img">
                                    <img :src="item.page_content.default.page_list_img" alt="">
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
                        </template>


                        <nav class="w-100">
                            <ul class="w-100 pagination d-flex flex-wrap justify-content-center align-items-center">
                                <li class="page-item me-2 me-sm-3 mb-1">
                                    <a href="#!"
                                        class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary bg-theme-light-2">
                                        <svg width="7px" height="11px" viewBox="0 0 7 11" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g id="VillaListeleme" transform="translate(-860.000000, -2875.000000)"
                                                    fill="#AFAFB6" fill-rule="nonzero">
                                                    <g id="Group-27" transform="translate(837.000000, 2861.000000)">
                                                        <g id="right-arrow-(3)-copy"
                                                            transform="translate(26.954957, 19.166042) scale(-1, 1) translate(-26.954957, -19.166042) translate(23.919953, 14.000000)">
                                                            <path
                                                                d="M5.9052,4.762884 L1.307292,0.16506 C1.200948,0.058632 1.058988,0 0.90762,0 C0.756252,0 0.614292,0.058632 0.507948,0.16506 L0.169344,0.50358 C-0.050988,0.724164 -0.050988,1.082676 0.169344,1.302924 L4.03032,5.1639 L0.16506,9.02916 C0.058716,9.135588 0,9.277464 0,9.428748 C0,9.5802 0.058716,9.722076 0.16506,9.828588 L0.503664,10.167024 C0.610092,10.273452 0.751968,10.332084 0.903336,10.332084 C1.054704,10.332084 1.196664,10.273452 1.303008,10.167024 L5.9052,5.565 C6.011796,5.458236 6.070344,5.315688 6.07000944,5.164152 C6.070344,5.012028 6.011796,4.869564 5.9052,4.762884 Z"
                                                                id="Path"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                                <li class="page-item me-2 me-sm-3 mb-1">
                                    <a href="#!"
                                        class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">1</a>
                                </li>
                                <li class="page-item me-2 me-sm-3 mb-1" aria-current="page">
                                    <a href="#!"
                                        class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary active">2</a>
                                </li>
                                <li class="page-item me-2 me-sm-3 mb-1">
                                    <a href="#!"
                                        class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">3</a>
                                </li>
                                <li class="page-item me-2 me-sm-3 mb-1">
                                    <svg width="23px" height="5px" viewBox="0 0 23 5" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="VillaListeleme" transform="translate(-1109.000000, -2877.000000)"
                                                fill="#AFAFB6">
                                                <g id="Group-27" transform="translate(837.000000, 2861.000000)">
                                                    <g id="Group-16" transform="translate(272.000000, 16.000000)">
                                                        <circle id="Oval" cx="2.5" cy="2.5" r="2.5"></circle>
                                                        <circle id="Oval-Copy" cx="11.5" cy="2.5" r="2.5"></circle>
                                                        <circle id="Oval-Copy-2" cx="20.5" cy="2.5" r="2.5"></circle>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </li>
                                <li class="page-item me-2 me-sm-3 mb-1">
                                    <a href="#!"
                                        class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">14</a>
                                </li>
                                <li class="page-item me-2 me-sm-3 mb-1" aria-current="page">
                                    <a href="#!"
                                        class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">15</a>
                                </li>
                                <li class="page-item me-2 me-sm-3 mb-1">
                                    <a href="#!"
                                        class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">16</a>
                                </li>
                                <li class="page-item me-2 me-sm-3 mb-1">
                                    <a href="#!"
                                        class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary bg-theme-light-2">
                                        <svg width="7px" height="11px" viewBox="0 0 7 11" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g id="VillaListeleme" transform="translate(-1374.000000, -2875.000000)"
                                                    fill="#AFAFB6" fill-rule="nonzero">
                                                    <g id="Group-27" transform="translate(837.000000, 2861.000000)">
                                                        <g id="Group-19" transform="translate(514.000000, 0.000000)">
                                                            <g id="right-arrow-(3)"
                                                                transform="translate(23.010038, 14.000000)">
                                                                <path
                                                                    d="M5.9052,4.762884 L1.307292,0.16506 C1.200948,0.058632 1.058988,0 0.90762,0 C0.756252,0 0.614292,0.058632 0.507948,0.16506 L0.169344,0.50358 C-0.050988,0.724164 -0.050988,1.082676 0.169344,1.302924 L4.03032,5.1639 L0.16506,9.02916 C0.058716,9.135588 0,9.277464 0,9.428748 C0,9.5802 0.058716,9.722076 0.16506,9.828588 L0.503664,10.167024 C0.610092,10.273452 0.751968,10.332084 0.903336,10.332084 C1.054704,10.332084 1.196664,10.273452 1.303008,10.167024 L5.9052,5.565 C6.011796,5.458236 6.070344,5.315688 6.07000944,5.164152 C6.070344,5.012028 6.011796,4.869564 5.9052,4.762884 Z"
                                                                    id="Path"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import BlogSidebar from "@/components/blog/blog-sidebar.vue";
export default {
    name: 'DynamicBlogList',
    components: { BlogSidebar },
    props: {
        posts: {
            required: true
        },
    },
    mounted(){
        
    }
}
</script>
  