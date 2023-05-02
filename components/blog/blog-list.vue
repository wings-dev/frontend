<template>
    <main class="main">
        <section class="Blog-header">
            <div class="container">
                <div class="Blog-header-in">
                    <h1>{{category.text}}</h1>
                    <div class="Blog-header-pagination">
                        <nuxt-link to="/blog">Blog > </nuxt-link>
                        <nuxt-link :to="'/blog/'+category.href">{{category.text}}</nuxt-link>
                    </div>
                </div>
            </div>
        </section>
        <section class="Blog">
            <div class="container">
                <div class="Blog-in">
                    <blog-sidebar></blog-sidebar>
                    <div class="Blog-content ">
                        
                        <blog-post :post="item" :category="category" v-for="(item,index) in paginatedPosts" :key="index"></blog-post>

                        <nav aria-label="..." class="my-3">
                            <ul class="pagination d-flex flex-wrap justify-content-center align-items-center">
                                <!-- Go to First Page -->
                                <li class="page-item me-2 me-sm-3 mb-1" v-if="current_page > 1">
                                    <a href="javascript:void(0)" @click.prevent="goToPage(1)"
                                        class="page-link rounded-sm d-flex align-items-center justify-content-center text-center  text-secondary pagination-left">
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

                                <!-- Page numbers -->
                                <li class="page-item me-2 me-sm-3 mb-1" v-if="showLeftDots">
                                    <a href="javascript:void(0)"
                                        class="page-link rounded-sm d-flex align-items-center justify-content-center text-center text-secondary">
                                        <span aria-hidden="true">&hellip;</span>
                                    </a>
                                </li>
                                <li class="page-item me-2 me-sm-3 mb-1" v-for="(pageNumber, index) in displayedPageNumbers"
                                    :key="index">
                                    <a href="javascript:void(0)"
                                        class="page-link rounded-sm d-flex align-items-center justify-content-center text-center  text-secondary"
                                        :class="{ 'active': pageNumber === current_page }"
                                        @click.prevent="goToPage(pageNumber)">
                                        {{ pageNumber }}
                                    </a>
                                </li>
                                <li class="page-item me-2 me-sm-3 mb-1" v-if="showRightDots">
                                    <a href="javascript:void(0)"
                                        class="page-link rounded-sm d-flex align-items-center justify-content-center text-center  text-secondary">
                                        <span aria-hidden="true">&hellip;</span>
                                    </a>
                                </li>
                                <!-- Go to Last Page -->
                                <li class="page-item me-2 me-sm-3 mb-1" v-if="current_page < totalPages">
                                    <a href="javascript:void(0)" @click.prevent="goToPage(totalPages)"
                                        class="page-link rounded-sm d-flex align-items-center justify-content-center text-center pagination-right text-secondary ">
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
import BlogPost from "@/components/blog/blog-post.vue";
export default {
    name: 'DynamicBlogList',
    components: { BlogSidebar,BlogPost },
    props: {
        posts: {
            required: true
        },
        category:{
            required:false
        }
    },
    data() {
        return {
            sitename: process.env.SITE_NAME,
            current_page: 1,
            postsPerPage: 6,
        }
    },
    methods: {
        reverseDate(inputDate) {
            const dateParts = inputDate.split('-');
            return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
        },
        getMonth(date) {
            const reversedDate = this.reverseDate(date);
            return this.$moment(reversedDate).format('MMMM')
        },
        goToPage(pageNumber) {
            if (pageNumber === this.current_page) return;
            this.current_page = pageNumber;
            if (window.innerWidth < 991) {
                window.scrollTo({ top: 200, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        },
    },
    computed: {
        paginatedPosts() {
            const start = (this.current_page - 1) * this.postsPerPage;
            const end = start + this.postsPerPage;
            return this.posts.slice(start, end);
        },
        pageNumbers() {
            return Array.from({ length: this.totalPages }, (_, i) => i + 1);
        },
        totalPages() {
            return Math.ceil(this.posts.length / this.postsPerPage);
        },
        displayedPageNumbers() {
            const currentIndex = this.pageNumbers.indexOf(this.current_page);
            const leftIndex = Math.max(currentIndex - 3, 0);
            const rightIndex = Math.min(currentIndex + 3, this.pageNumbers.length - 1);
            const displayedNumbers = this.pageNumbers.slice(leftIndex, rightIndex + 1);
            return displayedNumbers;
        },
        showLeftDots() {
            const currentIndex = this.pageNumbers.indexOf(this.current_page);
            return currentIndex > 3;
        },
        showRightDots() {
            const currentIndex = this.pageNumbers.indexOf(this.current_page);
            return currentIndex < this.pageNumbers.length - 4;
        }
    },
    mounted(){
    }
}
</script>
  