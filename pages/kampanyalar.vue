<template>
    <main class="main">
        <section class="Home-banner Home-banner-center"
            :style="{ 'background-image': 'url(' + pageData.page_content.default.page_banner + ')' }">
            <nuxt-img :src="pageData.page_content.default.page_list_img" :alt="'Kampanyalar ' + sitename" loading="lazy" placeholder />
            <div class="container">
                <div class="Home-banner-in">
                    <div class="Home-banner-text">
                        <h4>{{ pageData.page_content.section_banner.section_banner_title }}</h4>
                        <h2>{{ pageData.page_content.section_banner.section_banner_subtitle }}</h2>
                        <h2 class="small"><span>{{ pageData.page_content.section_banner.section_banner_subtitle2 }}</span>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
        <section class="Campaigns">
            <div class="container">
                <div class="Campaigns-in">
                    <b-button type="button" class="Campaigns-item" @click="showModal(index)"
                        v-for="(campaign, index) in campaigns" :key="index" v-if="campaign">
                        <nuxt-img :src="campaign.page_content.default.page_list_img" loading="lazy" placeholder :alt="'Kampanyalar ' + sitename" > </nuxt-img>
                    </b-button>

                </div>
            </div>
        </section>

        <b-modal :id="`modal-${index}`" class="Login" size="xl" :hide-header="true" hide-footer
            v-for="(campaign, index) in campaigns" :key="'modal-' + index" v-if="campaign">
            <div class="Login Calendar">
                <button type="button" class="btn-close" aria-label="Close" @click="$bvModal.hide(`modal${index}`)"><i
                        class="icon-login-close"></i></button>
                <h3 class=""> Müsaitlik Takvimi</h3>
                <div class="View-availibility-legand mt-2">
                    <div class="View-availibility-legand-item">
                        <span class="close-day"></span>
                        <p>Dolu</p>
                    </div>
                    <div class="View-availibility-legand-item">
                        <span></span>
                        <p>Onay Bekleniyor</p>
                    </div>
                </div>
            </div>
        </b-modal>

        <!-- <b-modal id="campaign-modal-12" ref="my-modal" class="Login" size="xl" :hide-header="true" hide-footer>
            <div class="Login Calendar">
                <button type="button" class="btn-close" aria-label="Close" @click="$bvModal.hide(`campaign-modal-12`)"><i
                        class="icon-login-close"></i></button>
                <div class="Campaigns-detail">
                    <div class="Campaigns-detail-in">
                        <nuxt-img :src="items[0].campaign_img" :alt="items[0].campaign_title"> </nuxt-img>
                        <div class="Campaigns-detail-head">
                            <p>Kampanya bitiş süresi <span>14.05.2023</span></p>
                            <h2>{{ items[0].campaign_title }}</h2>
                        </div>
                        <p class="Campaigns-detail-desc">{{ items[0].campaign_desc }}</p>
                        <nuxt-link :to="items[0].campaign_urls" v-if="items[0].campaign_urls">Kampanyaya özel tesisleri
                            incele</nuxt-link>
                        <div class="Campaigns-detail-policy" v-html="items[0].campaign_policy">

                        </div>
                    </div>
                </div>
            </div>
        </b-modal> -->
    </main>
</template>
    
<script>
export default {
    name: 'Kampanyalar',
    layout: 'no-search',
    head() {
        return this.headData
    },
    data() {
        return {
            sitename: process.env.SITE_NAME
        }
    },
    async asyncData({ $getRedisKey, route, store, redirect }) {
        const site_id = process.env.SITE;
        let pageData = {};
        pageData = await $getRedisKey(`web:${site_id}:pages:kampanyalar`);

        const pageURLs = Object.keys(store.state.routes.routes)
            .filter(key => store.state.routes.routes[key].type === 21)

        const campaignRedisKeys = []

        pageURLs.forEach(element => {
            const data = `web:${site_id}:pages:${element}`
            campaignRedisKeys.push(data)
        });

        const campaigns = await $getRedisKey(campaignRedisKeys)

        let headData = {
            title: pageData.title,
            meta: pageData.meta
        }

        return { pageData, campaigns,headData }
    },
    methods: {
        openModal(campaignid) {
            this.$refs[`modalRef${campaignid}`].show();
        },
        showModal(index) {
            this.$bvModal.show(`modal-${index}`);
        },
    },
    mounted() {
    }
}
</script>
    
    