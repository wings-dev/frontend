<template>
    <blog-detail></blog-detail>
</template>
  
<script>
import BlogHome from "@/components/blog/blog-home.vue";
import BlogList from "@/components/blog/blog-list.vue";
import BlogDetail from "@/components/blog/blog-detail.vue";
export default {
    name: 'Blog',
    layout: 'no-search',
    components: {BlogList,BlogHome,BlogDetail},
    head() {
        return {
            title: 'Blog List',
            meta: [
                { hid: 'description', name: 'description', content: 'anasayfa' },
                { hid: 'keywords', name: 'keywords', content: 'anasayfa1, anasayfa2, anasayfa3' }
            ],
        }
    }
}
</script>
  
  