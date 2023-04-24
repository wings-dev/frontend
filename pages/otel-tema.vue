<template>
    <main class="main">

        <div class="Banner-otel" style="background-image: url(/img/otel-tema.jpg);">
            <div class="container">
                <div class="Banner-otel-in">
                    <div class="Banner-otel-text">
                        <h1>Temalarına göre oteller</h1>
                        <p>Taksim Meydanı ve İstiklal Caddesi'nin yanı başında yer alan ve İstanbul'un büyük iş merkezlerine
                            kısa bir yürüyüşle ulaşabileceğiniz Divan İstanbul, güzel konumuyla iş seyahatlerinin yanında
                            tarih
                            ve kültür gezileri için de tercih ediliyor.</p>
                    </div>
                    <search-hotel-detail-component :key="$route.path"></search-hotel-detail-component>
                </div>
            </div>
        </div>

        <section class="O_Themes">
            <div class="container">
                <div class="O_Themes-in">
                    <nuxt-link to="/" class="O_Themes-item"><nuxt-img src="/img/otel/tema.jpg" width="230"
                            height="160"></nuxt-img><span>Ekonomik Oteller</span></nuxt-link>
                    <nuxt-link to="/" class="O_Themes-item"><nuxt-img src="/img/otel/tema2.jpg" width="230"
                            height="160"></nuxt-img><span>Kayak Oteller</span></nuxt-link>
                    <nuxt-link to="/" class="O_Themes-item"><nuxt-img src="/img/otel/tema3.jpg" width="230"
                            height="160"></nuxt-img><span>Her Şey Dahil Oteller</span></nuxt-link>
                    <nuxt-link to="/" class="O_Themes-item"><nuxt-img src="/img/otel/tema4.jpg" width="230"
                            height="160"></nuxt-img><span>Tatil Köyleri</span></nuxt-link>
                    <nuxt-link to="/" class="O_Themes-item"><nuxt-img src="/img/otel/tema5.jpg" width="230"
                            height="160"></nuxt-img><span>Deluxe Oteller</span></nuxt-link>
                    <nuxt-link to="/" class="O_Themes-item"><nuxt-img src="/img/otel/tema6.jpg" width="230"
                            height="160"></nuxt-img><span>Bungalov Evler</span></nuxt-link>
                    <nuxt-link to="/" class="O_Themes-item"><nuxt-img src="/img/otel/tema7.jpg" width="230"
                            height="160"></nuxt-img><span>Aile Otelleri</span></nuxt-link>
                    <nuxt-link to="/" class="O_Themes-item"><nuxt-img src="/img/otel/tema8.jpg" width="230"
                            height="160"></nuxt-img><span>Çocuk Dostu Oteller</span></nuxt-link>
                    <nuxt-link to="/" class="O_Themes-item"><nuxt-img src="/img/otel/tema9.jpg" width="230"
                            height="160"></nuxt-img><span>Yetişkin Otelleri</span></nuxt-link>
                    <nuxt-link to="/" class="O_Themes-item"><nuxt-img src="/img/otel/tema10.jpg" width="230"
                            height="160"></nuxt-img><span>Balayı Otelleri</span></nuxt-link>
                    <div class="O_Themes-banner">
                        <filter-banner></filter-banner>
                    </div>
                    <nuxt-link to="/" class="O_Themes-item"><nuxt-img src="/img/otel/tema.jpg" width="230"
                            height="160"></nuxt-img><span>Ekonomik Oteller</span></nuxt-link>
                    <nuxt-link to="/" class="O_Themes-item"><nuxt-img src="/img/otel/tema2.jpg" width="230"
                            height="160"></nuxt-img><span>Kayak Oteller</span></nuxt-link>
                    <nuxt-link to="/" class="O_Themes-item"><nuxt-img src="/img/otel/tema3.jpg" width="230"
                            height="160"></nuxt-img><span>Her Şey Dahil Oteller</span></nuxt-link>
                    <nuxt-link to="/" class="O_Themes-item"><nuxt-img src="/img/otel/tema4.jpg" width="230"
                            height="160"></nuxt-img><span>Tatil Köyleri</span></nuxt-link>
                    <nuxt-link to="/" class="O_Themes-item"><nuxt-img src="/img/otel/tema5.jpg" width="230"
                            height="160"></nuxt-img><span>Deluxe Oteller</span></nuxt-link>
                    <nuxt-link to="/" class="O_Themes-item"><nuxt-img src="/img/otel/tema6.jpg" width="230"
                            height="160"></nuxt-img><span>Bungalov Evler</span></nuxt-link>
                    <nuxt-link to="/" class="O_Themes-item"><nuxt-img src="/img/otel/tema7.jpg" width="230"
                            height="160"></nuxt-img><span>Aile Otelleri</span></nuxt-link>
                    <nuxt-link to="/" class="O_Themes-item"><nuxt-img src="/img/otel/tema8.jpg" width="230"
                            height="160"></nuxt-img><span>Çocuk Dostu Oteller</span></nuxt-link>
                </div>
            </div>
        </section>

        <section class="highlight-section  pb-4 ">
            <div class="container">
                <div class="row pt-4 pb-md-2">
                    <div class="note-box col-12 col-lg-12 pe-lg-5">
                        <h1 class="highlight-section-title">İstanbul hakkında</h1>
                        <p class="highlight-section-desc" :class="{ active: isExpanded }" v-html="content">
                        </p>

                        <div class="highlight-section-desc-more-button read-more-button" :class="{ active: isExpanded }"
                            @click="isExpanded = !isExpanded"><i class="readmore"></i> {{ !isExpanded ? 'TAMAMINI OKU' :
                                'DAHA AZ OKU' }}</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="List mt-4">
            <div class="container">
                <div class="List-sss">
                    <h3>En çok sorulan sorular </h3>
                    <div class="accordion" id="Faq">
                        <div class="accordion-item">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                                Nasıl rezervasyon yapabilirim ?
                            </button>
                            <div id="faq1" class="accordion-collapse collapse " data-bs-parent="#Faq">
                                <div class="accordion-body">
                                    <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi
                                        yemeklerinizi
                                        pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                                Kaç Kişi Konaklayabiliyoruz ?
                            </button>
                            <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#Faq">
                                <div class="accordion-body">
                                    <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi
                                        yemeklerinizi
                                        pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                                Yemek servisi hizmetiniz var mı ?
                            </button>
                            <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#Faq">
                                <div class="accordion-body">
                                    <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi
                                        yemeklerinizi
                                        pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                                Yemek servisi hizmetiniz var mı ?
                            </button>
                            <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#Faq">
                                <div class="accordion-body">
                                    <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi
                                        yemeklerinizi
                                        pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="Blog-more mt-5">
            <div class="container">
                <div class="Blog-more-in">
                    <div class="Blog-more-head">
                        <h2><b>Antalya </b>hakkında daha fazla</h2>
                        <div class="swiper-pagination"></div>
                    </div>
                    <div class="Blog-more-slider">
                        <div class="swiper blog-slider-more">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item, index) in 4" :key="index">
                                    <a class="Blog-item">
                                        <div class="Blog-item-img">
                                            <nuxt-img src="/img/blog.png" alt="" />
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
export default {
    name: 'OtelBolge',
    layout: 'no-search',
    components: {
    },
    data() {
        return {
            isExpanded: false,
            isExpanded2: false,
            content: `Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
                  masmavi denizi ile ünlü bir adres. Fethiye’nin tadını gerçekten çıkarmak isteyenler içinse, en
                  mantıklı seçenek villa kiralama. Günlük ya da haftalık villa tatili yapmak isteyenlere jakuzili,
                  kapalı havuzlu ya da bahçeli kiralık villa alternatifleri sunulan
                  Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.
                  Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
                  masmavi denizi ile ünlü bir adres. Fethiye’nin tadını gerçekten çıkarmak isteyenler içinse, en
                  mantıklı seçenek villa kiralama. Günlük ya da haftalık villa tatili yapmak isteyenlere jakuzili,
                  kapalı havuzlu ya da bahçeli kiralık villa alternatifleri sunulan
                  Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.
                  Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
                  masmavi denizi ile ünlü bir adres. Fethiye’nin tadını gerçekten çıkarmak isteyenler içinse, en
                  mantıklı seçenek villa kiralama. Günlük ya da haftalık villa tatili yapmak isteyenlere jakuzili,
                  kapalı havuzlu ya da bahçeli kiralık villa alternatifleri sunulan
                  Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.
                  Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
                  masmavi denizi ile ünlü bir adres. Fethiye’nin tadını gerçekten çıkarmak isteyenler içinse, en
                  mantıklı seçenek villa kiralama. Günlük ya da haftalık villa tatili yapmak isteyenlere jakuzili,
                  kapalı havuzlu ya da bahçeli kiralık villa alternatifleri sunulan
                  Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.`
        }
    },
    mounted() {
        Swiper.use([Navigation, Pagination])

        const swiper4 = new Swiper('.list-slide-otel', {
            slidesPerView: 1.1,
            spaceBetween: 10,
            direction: 'horizontal',
            loop: true,
            observer: true,
            observeParents: true,
            modules: [Navigation, Pagination],
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1199: {
                    slidesPerView: 4,
                },
            },
        })
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
    
    