<template>
    <main class="main">
        <section class="Text-banner">
            <div class="container">
                <div class="Text-banner-in">
                    <h1>{{ data.name }}</h1>
                </div>
            </div>
        </section>
        <section class="Text">
            <div class="container">
                <div class="Text-in" v-html="data.page_content.article.data">

                </div>
            </div>
        </section>
    </main>
</template>
<script>
export default {
    name: 'TextTemplateComponent',
    props: ['data'],
    mounted() {
    }
}
</script>
