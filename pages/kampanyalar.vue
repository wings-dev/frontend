<template>
    <main class="main">
        <section class="Home-banner Home-banner-center"
            :style="{ 'background-image': 'url(' + pageData.page_content.default.page_banner + ')' }">
            <nuxt-img :src="pageData.page_content.default.page_list_img" alt=""/>
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
                        <nuxt-img :src="campaign.page_content.default.page_list_img"> </nuxt-img>
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
    data() {
        return {
            items: [
                {
                    campaign_id: 1,
                    campaign_img: '/img/kampanya/kampanya.jpg',
                    campaign_title: '%1’ini önden öde, kalanı girişte öde!',
                    campaign_end_date: '14.05.2023',
                    campaign_desc: "Worldcard ile setur.com.tr ve Setur mobil uygulaması üzerinden veya 444 0 738'nolu Çağrı Merkezi, Setur Şube ve Yekili Satış Acentelerinden tek seferde yapılacak 15.000 TL ve üzeri rezervasyonlarda toplamda 1.000 TL'ye varan Worldpuan hediye!",
                    campaign_policy: `<p>1 Nisan 2023-30 Nisan 2023 tarihleri arasında Worldcard ile setur.com.tr ve Setur Mobil uygulaması üzerinden veya 444 0 738 nolu Çağrı Merkezi, Setur Şube ve Yetkili Satış Acentelerinden tek seferde yapılacak tüm yurt içi ve Kuzey Kıbrıs otel, kültür turları, yurt dışı tur ve yurt dışı otel rezervasyonlarınızda 15.000 TL ve üzerine 925 TL Worldpuan hediye edilecektir. Bu kampanya kapsamında, World Mobil üzerinden Seyahat Kampanyası'na katılınması halinde ek 150 TL'ye varan Worldpuan kazanılacaktır.</p><p>Seyahat Kampanyası kapsamında tek seferde yapılan her 2.000 TL ve üzeri alışverişte 75 TL toplamda 150 TL Worldpuan kazanılacaktır. Üye işyerlerinden tek seferde yapılacak ilk 2.000 TL ve üzeri harcamada 75 TL, ikinci 2.000 TL ve üzeri harcamada da 75 TL, toplamda bir müşteri seyahat kampanyası kapsamında 150 TL Worldpuan kazanabilecektir. Seyahat Kampanyası detaylarına www.worldcard.com.tr 'den ulaşabilirsiniz.</p><p>Setur Worldpuan kampanyası 15.000 TL ve üzeri 925 TL Worldpuan alışverişlerinde geçerli olduğundan, kart hamili ilk alışverişinde 925 TL’ye varan Worldpuan’ı Setur Worldpuan kampanyasından kazanırken, ek olarak 75 TL Worldpuanı da Seyahat kampanyasından kazanmış olacaktır.</p><p>World Mobil uygulaması üzerinden kampanyaya katılmak için iPhone veya Android cep telefonuna World Mobil uygulaması indirilmelidir. World Mobil uygulamasından kampanyaya katılmak için “Kampanyalar” alanındaki ilgili kampanyanın "Hemen Katıl" butonuna tıklanması gerekmektedir.</p><p>Setur Seyahat Hattı üzerinden yapılan harcamalar kampanyaya dahil değildir.</p><p>Kampanyaya vize işlemleri dahil değildir.</p><p>Kampanyadan yararlanmak için online platformlarımızdan yapılacak rezervasyonlarda üye girişi ile rezervasyon yapılması gerekmektedir, üye girişi olmadan yapılacak rezervasyonlarda puan kazanımı olmayacaktır.</p><p>Kampanya kart bazında değil müşteri bazında geçerlidir. Kampanya süresince her müşteri kampanyadan 1 defa faydalanabilecektir.</p>`,
                    campaign_urls: '/',
                },
                {
                    campaign_id: 2,
                    campaign_img: '/img/kampanya/kampanya2.jpg',
                    campaign_title: '%2’ini önden öde, kalanı girişte öde!',
                    campaign_end_date: '14.05.2023',
                    campaign_desc: "Worldcard ile setur.com.tr ve Setur mobil uygulaması üzerinden veya 444 0 738'nolu Çağrı Merkezi, Setur Şube ve Yekili Satış Acentelerinden tek seferde yapılacak 15.000 TL ve üzeri rezervasyonlarda toplamda 1.000 TL'ye varan Worldpuan hediye!",
                    campaign_policy: `<p>1 Nisan 2023-30 Nisan 2023 tarihleri arasında Worldcard ile setur.com.tr ve Setur Mobil uygulaması üzerinden veya 444 0 738 nolu Çağrı Merkezi, Setur Şube ve Yetkili Satış Acentelerinden tek seferde yapılacak tüm yurt içi ve Kuzey Kıbrıs otel, kültür turları, yurt dışı tur ve yurt dışı otel rezervasyonlarınızda 15.000 TL ve üzerine 925 TL Worldpuan hediye edilecektir. Bu kampanya kapsamında, World Mobil üzerinden Seyahat Kampanyası'na katılınması halinde ek 150 TL'ye varan Worldpuan kazanılacaktır.</p><p>Seyahat Kampanyası kapsamında tek seferde yapılan her 2.000 TL ve üzeri alışverişte 75 TL toplamda 150 TL Worldpuan kazanılacaktır. Üye işyerlerinden tek seferde yapılacak ilk 2.000 TL ve üzeri harcamada 75 TL, ikinci 2.000 TL ve üzeri harcamada da 75 TL, toplamda bir müşteri seyahat kampanyası kapsamında 150 TL Worldpuan kazanabilecektir. Seyahat Kampanyası detaylarına www.worldcard.com.tr 'den ulaşabilirsiniz.</p><p>Setur Worldpuan kampanyası 15.000 TL ve üzeri 925 TL Worldpuan alışverişlerinde geçerli olduğundan, kart hamili ilk alışverişinde 925 TL’ye varan Worldpuan’ı Setur Worldpuan kampanyasından kazanırken, ek olarak 75 TL Worldpuanı da Seyahat kampanyasından kazanmış olacaktır.</p><p>World Mobil uygulaması üzerinden kampanyaya katılmak için iPhone veya Android cep telefonuna World Mobil uygulaması indirilmelidir. World Mobil uygulamasından kampanyaya katılmak için “Kampanyalar” alanındaki ilgili kampanyanın "Hemen Katıl" butonuna tıklanması gerekmektedir.</p><p>Setur Seyahat Hattı üzerinden yapılan harcamalar kampanyaya dahil değildir.</p><p>Kampanyaya vize işlemleri dahil değildir.</p><p>Kampanyadan yararlanmak için online platformlarımızdan yapılacak rezervasyonlarda üye girişi ile rezervasyon yapılması gerekmektedir, üye girişi olmadan yapılacak rezervasyonlarda puan kazanımı olmayacaktır.</p><p>Kampanya kart bazında değil müşteri bazında geçerlidir. Kampanya süresince her müşteri kampanyadan 1 defa faydalanabilecektir.</p>`,
                    campaign_urls: '/',
                },
                {
                    campaign_id: 3,
                    campaign_img: '/img/kampanya/kampanya3.jpg',
                    campaign_title: '%3’ini önden öde, kalanı girişte öde!',
                    campaign_end_date: '14.05.2023',
                    campaign_desc: "Worldcard ile setur.com.tr ve Setur mobil uygulaması üzerinden veya 444 0 738'nolu Çağrı Merkezi, Setur Şube ve Yekili Satış Acentelerinden tek seferde yapılacak 15.000 TL ve üzeri rezervasyonlarda toplamda 1.000 TL'ye varan Worldpuan hediye!",
                    campaign_policy: `<p>1 Nisan 2023-30 Nisan 2023 tarihleri arasında Worldcard ile setur.com.tr ve Setur Mobil uygulaması üzerinden veya 444 0 738 nolu Çağrı Merkezi, Setur Şube ve Yetkili Satış Acentelerinden tek seferde yapılacak tüm yurt içi ve Kuzey Kıbrıs otel, kültür turları, yurt dışı tur ve yurt dışı otel rezervasyonlarınızda 15.000 TL ve üzerine 925 TL Worldpuan hediye edilecektir. Bu kampanya kapsamında, World Mobil üzerinden Seyahat Kampanyası'na katılınması halinde ek 150 TL'ye varan Worldpuan kazanılacaktır.</p><p>Seyahat Kampanyası kapsamında tek seferde yapılan her 2.000 TL ve üzeri alışverişte 75 TL toplamda 150 TL Worldpuan kazanılacaktır. Üye işyerlerinden tek seferde yapılacak ilk 2.000 TL ve üzeri harcamada 75 TL, ikinci 2.000 TL ve üzeri harcamada da 75 TL, toplamda bir müşteri seyahat kampanyası kapsamında 150 TL Worldpuan kazanabilecektir. Seyahat Kampanyası detaylarına www.worldcard.com.tr 'den ulaşabilirsiniz.</p><p>Setur Worldpuan kampanyası 15.000 TL ve üzeri 925 TL Worldpuan alışverişlerinde geçerli olduğundan, kart hamili ilk alışverişinde 925 TL’ye varan Worldpuan’ı Setur Worldpuan kampanyasından kazanırken, ek olarak 75 TL Worldpuanı da Seyahat kampanyasından kazanmış olacaktır.</p><p>World Mobil uygulaması üzerinden kampanyaya katılmak için iPhone veya Android cep telefonuna World Mobil uygulaması indirilmelidir. World Mobil uygulamasından kampanyaya katılmak için “Kampanyalar” alanındaki ilgili kampanyanın "Hemen Katıl" butonuna tıklanması gerekmektedir.</p><p>Setur Seyahat Hattı üzerinden yapılan harcamalar kampanyaya dahil değildir.</p><p>Kampanyaya vize işlemleri dahil değildir.</p><p>Kampanyadan yararlanmak için online platformlarımızdan yapılacak rezervasyonlarda üye girişi ile rezervasyon yapılması gerekmektedir, üye girişi olmadan yapılacak rezervasyonlarda puan kazanımı olmayacaktır.</p><p>Kampanya kart bazında değil müşteri bazında geçerlidir. Kampanya süresince her müşteri kampanyadan 1 defa faydalanabilecektir.</p>`,
                    campaign_urls: '/',
                },
                {
                    campaign_id: 4,
                    campaign_img: '/img/kampanya/kampanya4.jpg',
                    campaign_title: '%4’ini önden öde, kalanı girişte öde!',
                    campaign_end_date: '14.05.2023',
                    campaign_desc: "Worldcard ile setur.com.tr ve Setur mobil uygulaması üzerinden veya 444 0 738'nolu Çağrı Merkezi, Setur Şube ve Yekili Satış Acentelerinden tek seferde yapılacak 15.000 TL ve üzeri rezervasyonlarda toplamda 1.000 TL'ye varan Worldpuan hediye!",
                    campaign_policy: `<p>1 Nisan 2023-30 Nisan 2023 tarihleri arasında Worldcard ile setur.com.tr ve Setur Mobil uygulaması üzerinden veya 444 0 738 nolu Çağrı Merkezi, Setur Şube ve Yetkili Satış Acentelerinden tek seferde yapılacak tüm yurt içi ve Kuzey Kıbrıs otel, kültür turları, yurt dışı tur ve yurt dışı otel rezervasyonlarınızda 15.000 TL ve üzerine 925 TL Worldpuan hediye edilecektir. Bu kampanya kapsamında, World Mobil üzerinden Seyahat Kampanyası'na katılınması halinde ek 150 TL'ye varan Worldpuan kazanılacaktır.</p><p>Seyahat Kampanyası kapsamında tek seferde yapılan her 2.000 TL ve üzeri alışverişte 75 TL toplamda 150 TL Worldpuan kazanılacaktır. Üye işyerlerinden tek seferde yapılacak ilk 2.000 TL ve üzeri harcamada 75 TL, ikinci 2.000 TL ve üzeri harcamada da 75 TL, toplamda bir müşteri seyahat kampanyası kapsamında 150 TL Worldpuan kazanabilecektir. Seyahat Kampanyası detaylarına www.worldcard.com.tr 'den ulaşabilirsiniz.</p><p>Setur Worldpuan kampanyası 15.000 TL ve üzeri 925 TL Worldpuan alışverişlerinde geçerli olduğundan, kart hamili ilk alışverişinde 925 TL’ye varan Worldpuan’ı Setur Worldpuan kampanyasından kazanırken, ek olarak 75 TL Worldpuanı da Seyahat kampanyasından kazanmış olacaktır.</p><p>World Mobil uygulaması üzerinden kampanyaya katılmak için iPhone veya Android cep telefonuna World Mobil uygulaması indirilmelidir. World Mobil uygulamasından kampanyaya katılmak için “Kampanyalar” alanındaki ilgili kampanyanın "Hemen Katıl" butonuna tıklanması gerekmektedir.</p><p>Setur Seyahat Hattı üzerinden yapılan harcamalar kampanyaya dahil değildir.</p><p>Kampanyaya vize işlemleri dahil değildir.</p><p>Kampanyadan yararlanmak için online platformlarımızdan yapılacak rezervasyonlarda üye girişi ile rezervasyon yapılması gerekmektedir, üye girişi olmadan yapılacak rezervasyonlarda puan kazanımı olmayacaktır.</p><p>Kampanya kart bazında değil müşteri bazında geçerlidir. Kampanya süresince her müşteri kampanyadan 1 defa faydalanabilecektir.</p>`,
                    campaign_urls: '/',
                },
                {
                    campaign_id: 5,
                    campaign_img: '/img/kampanya/kampanya5.jpg',
                    campaign_title: '%5’ini önden öde, kalanı girişte öde!',
                    campaign_end_date: '14.05.2023',
                    campaign_desc: "Worldcard ile setur.com.tr ve Setur mobil uygulaması üzerinden veya 444 0 738'nolu Çağrı Merkezi, Setur Şube ve Yekili Satış Acentelerinden tek seferde yapılacak 15.000 TL ve üzeri rezervasyonlarda toplamda 1.000 TL'ye varan Worldpuan hediye!",
                    campaign_policy: `<p>1 Nisan 2023-30 Nisan 2023 tarihleri arasında Worldcard ile setur.com.tr ve Setur Mobil uygulaması üzerinden veya 444 0 738 nolu Çağrı Merkezi, Setur Şube ve Yetkili Satış Acentelerinden tek seferde yapılacak tüm yurt içi ve Kuzey Kıbrıs otel, kültür turları, yurt dışı tur ve yurt dışı otel rezervasyonlarınızda 15.000 TL ve üzerine 925 TL Worldpuan hediye edilecektir. Bu kampanya kapsamında, World Mobil üzerinden Seyahat Kampanyası'na katılınması halinde ek 150 TL'ye varan Worldpuan kazanılacaktır.</p><p>Seyahat Kampanyası kapsamında tek seferde yapılan her 2.000 TL ve üzeri alışverişte 75 TL toplamda 150 TL Worldpuan kazanılacaktır. Üye işyerlerinden tek seferde yapılacak ilk 2.000 TL ve üzeri harcamada 75 TL, ikinci 2.000 TL ve üzeri harcamada da 75 TL, toplamda bir müşteri seyahat kampanyası kapsamında 150 TL Worldpuan kazanabilecektir. Seyahat Kampanyası detaylarına www.worldcard.com.tr 'den ulaşabilirsiniz.</p><p>Setur Worldpuan kampanyası 15.000 TL ve üzeri 925 TL Worldpuan alışverişlerinde geçerli olduğundan, kart hamili ilk alışverişinde 925 TL’ye varan Worldpuan’ı Setur Worldpuan kampanyasından kazanırken, ek olarak 75 TL Worldpuanı da Seyahat kampanyasından kazanmış olacaktır.</p><p>World Mobil uygulaması üzerinden kampanyaya katılmak için iPhone veya Android cep telefonuna World Mobil uygulaması indirilmelidir. World Mobil uygulamasından kampanyaya katılmak için “Kampanyalar” alanındaki ilgili kampanyanın "Hemen Katıl" butonuna tıklanması gerekmektedir.</p><p>Setur Seyahat Hattı üzerinden yapılan harcamalar kampanyaya dahil değildir.</p><p>Kampanyaya vize işlemleri dahil değildir.</p><p>Kampanyadan yararlanmak için online platformlarımızdan yapılacak rezervasyonlarda üye girişi ile rezervasyon yapılması gerekmektedir, üye girişi olmadan yapılacak rezervasyonlarda puan kazanımı olmayacaktır.</p><p>Kampanya kart bazında değil müşteri bazında geçerlidir. Kampanya süresince her müşteri kampanyadan 1 defa faydalanabilecektir.</p>`,
                    campaign_urls: '/',
                },
                {
                    campaign_id: 6,
                    campaign_img: '/img/kampanya/kampanya6.jpg',
                    campaign_title: '%6’ini önden öde, kalanı girişte öde!',
                    campaign_end_date: '14.05.2023',
                    campaign_desc: "Worldcard ile setur.com.tr ve Setur mobil uygulaması üzerinden veya 444 0 738'nolu Çağrı Merkezi, Setur Şube ve Yekili Satış Acentelerinden tek seferde yapılacak 15.000 TL ve üzeri rezervasyonlarda toplamda 1.000 TL'ye varan Worldpuan hediye!",
                    campaign_policy: `<p>1 Nisan 2023-30 Nisan 2023 tarihleri arasında Worldcard ile setur.com.tr ve Setur Mobil uygulaması üzerinden veya 444 0 738 nolu Çağrı Merkezi, Setur Şube ve Yetkili Satış Acentelerinden tek seferde yapılacak tüm yurt içi ve Kuzey Kıbrıs otel, kültür turları, yurt dışı tur ve yurt dışı otel rezervasyonlarınızda 15.000 TL ve üzerine 925 TL Worldpuan hediye edilecektir. Bu kampanya kapsamında, World Mobil üzerinden Seyahat Kampanyası'na katılınması halinde ek 150 TL'ye varan Worldpuan kazanılacaktır.</p><p>Seyahat Kampanyası kapsamında tek seferde yapılan her 2.000 TL ve üzeri alışverişte 75 TL toplamda 150 TL Worldpuan kazanılacaktır. Üye işyerlerinden tek seferde yapılacak ilk 2.000 TL ve üzeri harcamada 75 TL, ikinci 2.000 TL ve üzeri harcamada da 75 TL, toplamda bir müşteri seyahat kampanyası kapsamında 150 TL Worldpuan kazanabilecektir. Seyahat Kampanyası detaylarına www.worldcard.com.tr 'den ulaşabilirsiniz.</p><p>Setur Worldpuan kampanyası 15.000 TL ve üzeri 925 TL Worldpuan alışverişlerinde geçerli olduğundan, kart hamili ilk alışverişinde 925 TL’ye varan Worldpuan’ı Setur Worldpuan kampanyasından kazanırken, ek olarak 75 TL Worldpuanı da Seyahat kampanyasından kazanmış olacaktır.</p><p>World Mobil uygulaması üzerinden kampanyaya katılmak için iPhone veya Android cep telefonuna World Mobil uygulaması indirilmelidir. World Mobil uygulamasından kampanyaya katılmak için “Kampanyalar” alanındaki ilgili kampanyanın "Hemen Katıl" butonuna tıklanması gerekmektedir.</p><p>Setur Seyahat Hattı üzerinden yapılan harcamalar kampanyaya dahil değildir.</p><p>Kampanyaya vize işlemleri dahil değildir.</p><p>Kampanyadan yararlanmak için online platformlarımızdan yapılacak rezervasyonlarda üye girişi ile rezervasyon yapılması gerekmektedir, üye girişi olmadan yapılacak rezervasyonlarda puan kazanımı olmayacaktır.</p><p>Kampanya kart bazında değil müşteri bazında geçerlidir. Kampanya süresince her müşteri kampanyadan 1 defa faydalanabilecektir.</p>`,
                    campaign_urls: '/',
                },
            ]
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


        return { pageData, campaigns }
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
    
    