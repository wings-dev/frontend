<template>
    <main class="main">

        <div class="Banner-otel" style="background-image: url(/img/istanbulotel.jpg);">
            <div class="container">
                <div class="Banner-otel-in">
                    <div class="Banner-otel-text">
                        <h1>İstanbul Otelleri Ara</h1>
                        <p>Taksim Meydanı ve İstiklal Caddesi'nin yanı başında yer alan ve İstanbul'un büyük iş merkezlerine
                            kısa bir yürüyüşle ulaşabileceğiniz Divan İstanbul, güzel konumuyla iş seyahatlerinin yanında
                            tarih
                            ve kültür gezileri için de tercih ediliyor.</p>
                    </div>
                    <search-hotel-detail-component :key="$route.path"></search-hotel-detail-component>
                </div>
            </div>
        </div>

        <section class="popular-section-otel bg-white overflow-hidden pb-sm-5 mt-5">
            <div class="container ">
                <div class="section-caption d-flex align-items-center mb-3 pb-1">
                    <i class="icon-otel-discover"></i>
                    <h4 class="primary-title fw-medium ls-05 lh-1">
                        Aramanıza uygun
                        <span>Otelleri keşfedin</span>
                    </h4>
                    <a href=""
                        class="btn btn-theme-second fs-7 lh-sm fw-medium ls-05 rounded-pill py-3 mb-2 ms-auto btn-more">
                        <span class="d-block py-1 px-3">Tümünü Gör</span>
                    </a>
                </div>

                <div class="swiper list-slide list-slide-otel">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in 10" :key="index">
                            <nuxt-link to="" class="O_Card O_Card-price">
                                <div class="O_Card-in">
                                    <div class="O_Card-img">
                                        <img src="/img/otel-list.png" alt="">
                                        <div class="O_Card-img-text" style="background-color: #5d91c1;">
                                            <span>9,5/10</span>
                                        </div>
                                    </div>
                                    <div class="O_Card-content">
                                        <div class="O_Card-content-head">
                                            <b>Pera Palace Hotel</b>
                                            <small>Ankara,Türkiye</small>
                                        </div>
                                    </div>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                    <!-- <div class="swiper-pagination"></div> -->
                    <div class="swiper-button-prev list-navigation-prev"></div>
                    <div class="swiper-button-next list-navigation-next"></div>
                </div>


            </div>
        </section>

        <section class="Otel_areas">
            <div class="container">
                <div class="Otel_areas-in">
                    <div class="Otel_areas-head">
                        <div class="section-caption d-flex align-items-center mb-3 pb-1">
                            <i class="icon-otel-discover"></i>
                            <h4 class="primary-title fw-medium ls-05 lh-1">
                                Istanbul bölgeleri
                            </h4>
                        </div>
                    </div>
                    <div class="Otel_areas-list">
                        <nuxt-link to="/" class="Otel_areas-list-item">
                            <nuxt-img src="/img/otelbolge1.png" width="170" height="128" />
                            <div class="Otel_areas-list-item-text">
                                <b>Beyoğlu Otelleri</b>
                                <p><span>45</span>otel içeriyor</p>
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/" class="Otel_areas-list-item">
                            <nuxt-img src="/img/otelbolge2.png" width="170" height="128" />
                            <div class="Otel_areas-list-item-text">
                                <b>Beşiktaş Otelleri</b>
                                <p><span>45</span>otel içeriyor</p>
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/" class="Otel_areas-list-item">
                            <nuxt-img src="/img/otelbolge3.jpg" width="170" height="128" />
                            <div class="Otel_areas-list-item-text">
                                <b>Şişli Otelleri</b>
                                <p><span>45</span>otel içeriyor</p>
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/" class="Otel_areas-list-item">
                            <nuxt-img src="/img/otelbolge1.png" width="170" height="128" />
                            <div class="Otel_areas-list-item-text">
                                <b>Beyoğlu Otelleri</b>
                                <p><span>45</span>otel içeriyor</p>
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/" class="Otel_areas-list-item">
                            <nuxt-img src="/img/otelbolge2.png" width="170" height="128" />
                            <div class="Otel_areas-list-item-text">
                                <b>Beşiktaş Otelleri</b>
                                <p><span>45</span>otel içeriyor</p>
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/" class="Otel_areas-list-item">
                            <nuxt-img src="/img/otelbolge3.jpg" width="170" height="128" />
                            <div class="Otel_areas-list-item-text">
                                <b>Şişli Otelleri</b>
                                <p><span>45</span>otel içeriyor</p>
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/" class="Otel_areas-list-item">
                            <nuxt-img src="/img/otelbolge1.png" width="170" height="128" />
                            <div class="Otel_areas-list-item-text">
                                <b>Beyoğlu Otelleri</b>
                                <p><span>45</span>otel içeriyor</p>
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/" class="Otel_areas-list-item">
                            <nuxt-img src="/img/otelbolge2.png" width="170" height="128" />
                            <div class="Otel_areas-list-item-text">
                                <b>Beşiktaş Otelleri</b>
                                <p><span>45</span>otel içeriyor</p>
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/" class="Otel_areas-list-item">
                            <nuxt-img src="/img/otelbolge3.jpg" width="170" height="128" />
                            <div class="Otel_areas-list-item-text">
                                <b>Şişli Otelleri</b>
                                <p><span>45</span>otel içeriyor</p>
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/" class="Otel_areas-list-item">
                            <nuxt-img src="/img/otelbolge1.png" width="170" height="128" />
                            <div class="Otel_areas-list-item-text">
                                <b>Beyoğlu Otelleri</b>
                                <p><span>45</span>otel içeriyor</p>
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/" class="Otel_areas-list-item">
                            <nuxt-img src="/img/otelbolge2.png" width="170" height="128" />
                            <div class="Otel_areas-list-item-text">
                                <b>Beşiktaş Otelleri</b>
                                <p><span>45</span>otel içeriyor</p>
                            </div>
                        </nuxt-link>
                        <nuxt-link to="/" class="Otel_areas-list-item">
                            <nuxt-img src="/img/otelbolge3.jpg" width="170" height="128" />
                            <div class="Otel_areas-list-item-text">
                                <b>Şişli Otelleri</b>
                                <p><span>45</span>otel içeriyor</p>
                            </div>
                        </nuxt-link>

                    </div>
                </div>
            </div>
        </section>

        <section class="Otel_themes">
            <div class="container">
                <div class="Otel_themes-in">
                    <div class="Otel_themes-head">
                        <div class="section-caption d-flex align-items-center ">
                            <i class="icon-otel-discover"></i>
                            <h4 class="primary-title fw-medium ls-05 lh-1">
                                Istanbul Otel Temaları
                            </h4>
                        </div>
                    </div>
                    <div class="Otel_themes-list">
                        <nuxt-link to="/" class="Otel_themes-list-item">Anadolu Yakası Spa Otelleri</nuxt-link>
                        <nuxt-link to="/" class="Otel_themes-list-item">Avrupa yakası Spa Otelleri</nuxt-link>
                        <nuxt-link to="/" class="Otel_themes-list-item">İstanbul’a yakın termal oteller</nuxt-link>
                        <nuxt-link to="/" class="Otel_themes-list-item">İstanbul balayı otelleri</nuxt-link>
                        <nuxt-link to="/" class="Otel_themes-list-item">İstanbula yakın bungalov evler</nuxt-link>
                        <nuxt-link to="/" class="Otel_themes-list-item">İstanbul Butik Oteller</nuxt-link>
                        <nuxt-link to="/" class="Otel_themes-list-item">İstanbul’a yakın tatil köyleri</nuxt-link>
                        <nuxt-link to="/" class="Otel_themes-list-item">İstanbula yakın Tatil köyleri</nuxt-link>
                        <nuxt-link to="/" class="Otel_themes-list-item">İstanbul Pansiyonlar</nuxt-link>
                    </div>
                </div>
            </div>
        </section>

        <section class="highlight-section bg-theme-light-2  pb-4 mt-n5">
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
                                <div class="swiper-slide" v-for="(item,index) in 4" :key="index">
                                    <a class="Blog-item">
                                        <div class="Blog-item-img">
                                            <img src="/img/blog.png" alt="">
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
    
    