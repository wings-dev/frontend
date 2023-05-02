<template>
    <nuxt-link :to="'/blog/' + post.page_content.blog_category[0] + '/' + post.url" class="Blog-item" :key="post.id"
        v-if="item !== null">
        <div class="Blog-item-img">
            <nuxt-img :src="post?.page_content?.default?.page_list_img" v-if="post.page_content.default.page_list_img"
                :alt="post.name + 'Blog | ' + sitename" loading="lazy" placeholder></nuxt-img>
            <div class="Blog-item-img-text">
                <h6>{{ post.name }}</h6>
            </div>
            <div class="Blog-item-date">
                <div class="Blog-item-date-month">
                    <b>{{ post.page_content.blog_publish_date.split('-')[0] }}</b>
                    <span>{{ getMonth(post.page_content.blog_publish_date) }}</span>
                </div>
                <div class="Blog-item-date-year">
                    <span>{{ post.page_content.blog_publish_date.split('-')[2] }}</span>
                </div>
            </div>
            <div class="Blog-item-more">Devamını Oku</div>
        </div>
        <div class="Blog-item-text">
            <p v-html="post.page_content.summary.data"></p>
        </div>
    </nuxt-link>
</template>

<script>
import BlogSidebar from "@/components/blog/blog-sidebar.vue";
export default {
    name: 'BlogPost',
    components: { BlogSidebar },
    props: {
        post: {
            required: true
        },
        category: {
            required: false
        }
    },
    data() {
        return {
            sitename: process.env.SITE_NAME,
           
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
    },
    computed: {
        
    },
    mounted() {
    }
}
</script>
  