<template>
    <main class="main">
        <section class="Sss-search">
            <div class="container">
                <div class="Sss-search-in">
                    <h3>YARDIM MERKEZİ</h3>
                    <h1>SİZE NASIL YARDIMCI OLABİLİRİZ</h1>
                    <form action="" class="Sss-search-form">
                        <label for="">
                            <i class="icon-search"></i>
                            <input type="text" v-model="search" placeholder="Villa’nın şehir merkezine uzaklıklarını nasıl görebilirim">
                            <button type="submit" class="d-none">Ara</button>
                        </label>
                    </form>
                </div>
            </div>
        </section>
        <section class="Sss">
            <div class="container">
                <div class="Sss-in">
                    <h2 class="Sss-title">En çok sorulan sorular</h2>
                    <div class="Sss-list accordion" id="accordionSSS">
                        <div class="accordion-item" v-for="(faqItem, index) in filteredFaqs"
                            :key="index">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                :data-bs-target="'#faq' + index" aria-expanded="false" :aria-controls="'faq' + index">
                                {{ faqItem.howrent_category_question }}

                                <i class="icon-down-chevron"></i>
                            </button>
                            <div :id="'faq' + index" class="accordion-collapse collapse " data-bs-parent="#accordionSSS">
                                <div class="accordion-body" v-html="faqItem.howrent_category_answer"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
  
<script>
export default {
    name: 'SSS',
    layout: 'no-search',
    head() {
        return {
            title: 'Sıkça Sorulan Sorular',
            meta: [
                { hid: 'description', name: 'description', content: 'anasayfa' },
                { hid: 'keywords', name: 'keywords', content: 'anasayfa1, anasayfa2, anasayfa3' }
            ],
        }
    },
    data() {
        return {
            search:""
        }
    },
    async asyncData({ $getRedisKey, $axios }) {
        const site_id = process.env.SITE;
        const redisPageKey = `web:${site_id}:pages:sss`;

        let response = await $getRedisKey([redisPageKey]);
        const pageData = response[redisPageKey] || {};

        const faqs = pageData.page_content.faq[0].faq_list

        return { pageData, faqs };
    },
    computed: {
        filteredFaqs() {
            return this.faqs.filter((faq) =>
                faq.howrent_category_question.toLowerCase().includes(this.search.toLowerCase())
            );
        },
    },
    mounted() {
    }
}
</script>
  
  