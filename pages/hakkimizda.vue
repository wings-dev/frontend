<template>
    <main class="main">
        <section class="Banner Banner_md Banner-back Banner-kurumsal"
            :style="`background-image: url(${global_cdn + pageData.page_content?.default?.page_banner});`">
            <div class="container">
                <div class=" Banner_search-text   pos-ab-xy-center ">
                    <p class="animated fadeInDown  flex-column">
                        <span>{{ pageData?.meta[0].content }}</span>
                    </p>
                </div>
            </div>
        </section>
        <section class="Content">
            <div class="container">
                <div class="Content-in">
                    <h3>Hakkımızda</h3>
                    <div v-html="pageData.page_content.article.data"></div>
                    <div class="Content-features">
                        <div class="Content-features-item" v-for="(item, index) in pageData.page_content.corporate_features"
                            :key="index">
                            <h4>{{ item.features_title }}</h4>
                            <p v-html="item.features_desc"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="Info">
            <div class="container">
                <div class="Info-in">
                    <div class="Info-left">
                        <h3 class="new-title">Banka Bilgilerimiz</h3>
                        <div class="Info-left-in">
                            <template v-for="(item, index) in banks">

                                <div>
                                    <nuxt-img :src="global_cdn + item.corporate_banks_logo" v-if="item.corporate_banks_logo"
                                        loading="lazy" placeholder :alt="item.corporate_banks_title + ' Logo'" />
                                    <div class="Info-left-item">
                                        <span>Alıcı Ünvan</span>
                                        <p>{{ item.corporate_banks_title }}</p>
                                    </div>
                                    <div class="Info-left-item">
                                        <span>{{ item.corporate_banks_iban_currency }}</span>
                                        <p id="myInput">
                                            <input type="text" :value="item.corporate_banks_iban"
                                                :ref="`ibanInput-${index}`">
                                            <button type="button" id="copy" class="button-copy"
                                                @click="onCopyButtonClick(index)">
                                                <i class="icon-copy"></i></button>
                                        </p>
                                    </div>
                                    <div class="Info-left-item" v-if="item.corporate_banks_swift">
                                        <span>SWIFT KODU</span>
                                        <p id="myInput"><input type="text" :value="item.corporate_banks_swift">
                                            <button type="button" id="copy" class="button-copy"><i
                                                    class="icon-copy"></i></button>
                                        </p>
                                    </div>
                                    <hr>
                                </div>
                            </template>

                        </div>
                        <div class="Info-left-alert">
                            <i class="icon-alert"></i>
                            <p>Dikkat! Lütfen para transferi yaparken, onaysız işlem yapmayınız.</p>
                        </div>
                    </div>
                    <div class="Info-right">
                        <h3 class="new-title">Resmi belgelerimiz</h3>
                        <div class="Info-right-in">
                            <div class="Info-right-item" v-for="(item, index) in pageData.page_content.corporate_documents"
                                :key="index">
                                <a :href="global_cdn + item.corporate_document_file" :data-fancybox="'group_file'" class="w-100">
                                    <div class="Info-right-item-text">
                                        <h5>{{ item.corporate_document_name }}</h5>
                                    </div>
                                    <div class="Info-right-item-link">
                                        <p><i class="icon-info-pdf"></i>Belgeyi Görüntüle</p>
                                    </div>
                                </a>
                                <!-- <a href="https://villakalkan.com.tr/images/belgeler/marka-tescil-2.png"
                                    data-fancybox="group_1" style="display:none;"></a>
                                <a href="https://villakalkan.com.tr/images/belgeler/marka-tescil-3.png"
                                    data-fancybox="group_1" style="display:none;"></a> -->
                            </div>
                            <!-- <div class="Info-right-item">
                                <a href="https://villakalkan.com.tr/images/belgeler/tursab.jpeg" data-fancybox="group_1"
                                    class="w-100">
                                    <div class="Info-right-item-text">
                                        <h5>TURSAB Belgesi</h5>
                                    </div>
                                    <div class="Info-right-item-link">
                                        <p><i class="icon-info-pdf"></i>Belgeyi Görüntüle</p>
                                    </div>
                                </a>
                            </div>
                            <div class="Info-right-item">
                                <a href="https://villakalkan.com.tr/images/belgeler/vergilevhasi.png"
                                    data-fancybox="group_1" class="w-100">
                                    <div class="Info-right-item-text">
                                        <h5>Vergi Levhası</h5>
                                    </div>
                                    <div class="Info-right-item-link">
                                        <p><i class="icon-info-pdf"></i>Belgeyi Görüntüle</p>
                                    </div>
                                </a>
                            </div>
                            <div class="Info-right-item">
                                <a href="https://villakalkan.com.tr/images/belgeler/ticaret-sicil.jpeg"
                                    data-fancybox="group_1" class="w-100">
                                    <div class="Info-right-item-text">
                                        <h5>Ticaret Sicil Belgesi </h5>
                                    </div>
                                    <div class="Info-right-item-link">
                                        <p><i class="icon-info-pdf"></i>Belgeyi Görüntüle</p>
                                    </div>
                                </a>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="Basin">
            <div class="container">
                <div class="Basin-in">
                    <div class="Basin-head">
                        <h3 class="new-title">{{ pageData.page_content.corporate_brands.corporate_brands_title }}</h3>
                        <h2>{{ pageData.page_content.corporate_brands.corporate_brands_desc }}
                        </h2>
                        <p>Wings Seyahat Turizm Sanayi ve Ticaret Ltd.Şti.</p>
                    </div>
                    <div class="Basin-content">
                        <div class="Basin-content-item"
                            v-for="(item, index) in pageData.page_content.corporate_brands.corporate_brands_info"
                            :key="index">
                            <a target="_blank" :href="item.corporate_brand_link">
                                <nuxt-img :src="global_cdn + item.corporate_brand_logo" alt="Diğer Markalarımız - Balayı Villası"
                                    loading="lazy" placeholder />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <section class="Ofis" v-for="(item, index) in pageData.page_content.corporate_offices" :key="index">
            <div class="container">
                <div class="Ofis-in">
                    <h3 class="new-title">{{ item.corporate_office_name }}</h3>
                    <div class="Ofis-content">
                        <div class="Ofis-content-item">
                            <a :href="global_cdn + item.corporate_office_photo[0]"
                                :data-fancybox="'group-ofis' + index">
                                <nuxt-img :src="global_cdn + item.corporate_office_photo[0]" loading="lazy"
                                    placeholder :alt="sitename+' - ' + item.corporate_office_name" />
                            </a>
                        </div>
                        <div class="Ofis-content-item">
                            <a :href="global_cdn + item.corporate_office_photo[1]"
                                :data-fancybox="'group-ofis' + index">
                                <nuxt-img :src="global_cdn + item.corporate_office_photo[1]" loading="lazy"
                                    placeholder :alt="sitename+' - ' + item.corporate_office_name" />
                                <span class="Ofis-content-item-more"><i class="icon-gallery"></i>+6 Fotoğraf Daha</span>
                            </a>
                            <div class="Ofis-content-item-list">
                                <a :href="global_cdn + image" v-for="image in item.corporate_office_photo.slice(2)"
                                    :data-fancybox="'group-ofis' + index">
                                    <nuxt-img :src="global_cdn + image" loading="lazy"
                                        placeholder :alt="sitename+' - ' + item.corporate_office_name "></nuxt-img>
                                </a>
                               
                            </div>
                        </div>
                        <div class="Ofis-content-item Ofis-content-item-video">
                            <a :href="item.corporate_office_videolink" data-fancybox="">
                                <nuxt-img :src="global_cdn + item.corporate_office_photo[3]" loading="lazy"
                                    placeholder :alt="sitename + ' - ' + item.corporate_office_name + 'Tanıtım Videosu'" />
                                <span class="Ofis-content-item-play"><i class="icon-play"></i></span>
                            </a>
                        </div>
                    </div>
                    <div class="Ofis-bottom">
                        <div class="Contact-support Contact-support-pink">
                            <a :href="'tel:' + item.corporate_office_phone">
                                <p><span>Yardım &amp; Destek</span>{{ item.corporate_office_phone }}</p>
                            </a>
                        </div>
                        <div class="Ofis-bottom-text">
                            <p>{{ item.corporate_office_address }}</p>
                            <a :href="'mailto:' + item.corporate_office_mail">{{ item.corporate_office_mail }}</a>
                        </div>
                        <a target="_blank"
                            href="https://www.google.com/maps/dir/36.6180363,29.1450962/Kalkan,+Villa+Kalkan,+Cumhuriyet+Cd.+No:48%2F2,+07960+Ka%C5%9F%2FAntalya/@36.6180363,29.1450962,17z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14c02d2a84da91fd:0x81ede568b29dcff4!2m2!1d29.4065087!2d36.2654048"
                            class="Ofis-konum-buton">
                            <i class="icon-marker"></i>Ofise Konum Al
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- <section class="Ofis Ofis-fethiye">
            <div class="container">
                <div class="Ofis-in">
                    <h3 class="new-title">Fethiye Ofis</h3>
                    <div class="Ofis-content">
                        <div class="Ofis-content-item">
                            <a href="https://villakalkan.com.tr/images/fethiye-ofis/3.jpg"
                                data-fancybox="group-ofis-fethiye">
                                <nuxt-img src="https://villakalkan.com.tr/images/kalkan-ofis/1.jpg" alt="">
                            </a>
                        </div>
                        <div class="Ofis-content-item">
                            <a href="https://villakalkan.com.tr/images/fethiye-ofis/3.jpg"
                                data-fancybox="group-ofis-fethiye">
                                <nuxt-img src="https://villakalkan.com.tr/images/kalkan-ofis/1.jpg" alt="">
                                <span class="Ofis-content-item-more"><i class="icon-gallery"></i>+7 Fotoğraf Daha</span>
                            </a>
                            <div class="Ofis-content-item-list">
                                <a href="https://villakalkan.com.tr/images/fethiye-ofis/3.jpg"
                                    data-fancybox="group-ofis-fethiye"></a>
                                <a href="https://villakalkan.com.tr/images/fethiye-ofis/4.jpg"
                                    data-fancybox="group-ofis-fethiye"></a>
                                <a href="https://villakalkan.com.tr/images/fethiye-ofis/5.jpg"
                                    data-fancybox="group-ofis-fethiye"></a>
                                <a href="https://villakalkan.com.tr/images/fethiye-ofis/ofis2.jpg"
                                    data-fancybox="group-ofis-fethiye"></a>
                                <a href="https://villakalkan.com.tr/images/fethiye-ofis/6.jpg"
                                    data-fancybox="group-ofis-fethiye"></a>
                                <a href="https://villakalkan.com.tr/images/fethiye-ofis/7.jpg"
                                    data-fancybox="group-ofis-fethiye"></a>
                                <a href="https://villakalkan.com.tr/images/kalkan-ofis/1.jpg"
                                    data-fancybox="group-ofis-fethiye"></a>
                            </div>
                        </div>
                        <div class="Ofis-content-item Ofis-content-item-video">
                            <a href="https://www.youtube.com/watch?v=abWhzr3Y2Ow" data-fancybox="">
                                <nuxt-img src="https://villakalkan.com.tr/images/kalkan-ofis/1.jpg"
                                    alt="Balayı Villası - Fethiye Ofis Tanıtım Videosu">
                                <span class="Ofis-content-item-play"><i class="icon-play"></i></span>
                            </a>
                        </div>
                    </div>
                    <div class="Ofis-bottom">
                        <div class="Contact-support Contact-support-pink">
                            <a href="te:+902422520032">
                                <p><span>Yardım &amp; Destek</span>+90 242 252 00 32</p>
                            </a>
                        </div>
                        <div class="Ofis-bottom-text">
                            <p>MERKEZ: Taşyaka Mah. Baha Şıkman Cad. N:201/A Fethiye-MUĞLA</p>
                            <a href="mailto:info@villakalkan.com.tr">info@villakalkan.com.tr</a>
                        </div>
                        <a target="_blank"
                            href="https://www.google.com/maps/dir//Patlang%C4%B1%C3%A7,+Wings+Seyahat+Turizm+Limited+%C5%9Eirketi,+Baha+%C5%9E%C4%B1kman+Cd.+no:201%2FA,+48300+Fethiye%2FMu%C4%9Fla/@36.6179479,29.1427447,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14c0436e28536a4b:0x88ef25d63cafd7f6!2m2!1d29.1452536!2d36.6179504"
                            class="Ofis-konum-buton">
                            <i class="icon-marker"></i>Ofise Konum Al
                        </a>
                    </div>
                </div>
            </div>
        </section> -->
    </main>
</template>

<script>
export default {
    name: 'HakkimizdaPage',
    layout: 'no-search',
    head() {
        return this.headData
    },
    async asyncData({ $getRedisKey }) {
        const site_id = process.env.SITE;
        let pageData = {};
        pageData = await $getRedisKey(`web:${site_id}:pages:hakkimizda`);

        let headData = {
            title: pageData.title,
            meta: pageData.meta
        }


        let banks = pageData.page_content.corporate_banks
        return { pageData, banks, headData }
    },
    data() {
        return {
            global_cdn: process.env.GLOBAL_CDN_URL,
            sitename: process.env.SITE_NAME
        }
    },
    mounted() {
    },
    methods: {
        copyToClipboard(text) {
            const el = document.createElement("textarea");
            el.value = text;
            el.setAttribute("readonly", "");
            el.style.position = "absolute";
            el.style.left = "-9999px";
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
        },

        onCopyButtonClick(index) {
            const ibanValue = this.$refs[`ibanInput-${index}`][0].value;
            this.copyToClipboard(ibanValue);
        },
    }
}
</script>
<style scoped></style>
