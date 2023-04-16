<template>
    <div class="Home">
        <client-only>
            <search-bar :key="$route.path"></search-bar>
        </client-only>
        <section class="Banner Banner-home "
            :style="{ 'background-image': 'url(' + pageData.page_content.default.page_banner + ')' }">
            <!-- <img :src="pageData.page_content.default.page_banner" class="w-100 mobile" alt=""> -->
            <div class="container Banner-home-in">
                <div class=" Banner-home-text">
                    <div class="Banner-home-text-spin">
                        <h1>{{ pageData.page_content.banner.banner_title }}</h1>
                        <div class="words">
                            <span v-for="(item, index) in pageData.page_content.banner.banner_animation_title"
                                :key="index">{{ item.banner_animation_title }}</span>
                        </div>
                    </div>
                    <h2 class="">{{ pageData.page_content.banner.banner_subtitle }} <span>{{
                        pageData.page_content.banner.banner_subtitle2 }}</span></h2>
                    <p class="">
                        {{ pageData.page_content.banner.banner_desc }}
                    </p>
                </div>
            </div>
        </section>
        <section class="popular-section bg-white overflow-hidden pb-sm-2 ">
            <div class="container ">
                <div class="section-caption d-flex align-items-center mb-3 pb-1">
                    <i class="icon-flame"></i>
                    <h4 class="primary-title fw-medium ls-05 lh-1">
                        Popüler Villaları
                        <span>keşfedin</span>
                    </h4>
                    <nuxt-link to="/kiralik-villa-ara" class="button-more">Tümünü Gör</nuxt-link>
                </div>
                <div class="swiper popular list-slide list-slide-first list-wrapper scroll-wrapper mb-3 mb-sm-4 pb-1">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="item in pageData.page_content.popular" :key="item.id">

                            <div class="Card">
                                <div class="Card-in">
                                    <div class="Card-img">
                                        <nuxt-link :to="'/' + item.code">
                                            <nuxt-img :src="item.preview_image[0].preview_url"
                                                :srcset="item.preview_image[0].responsive_url" width="267"
                                                height="175"></nuxt-img>
                                        </nuxt-link>
                                        <button class="Card-fav" type="button" @click="toggleFavorite(item.code)"
                                            :class="isFavorite(item.code) ? 'active' : ''">
                                            <i :class="isFavorite(item.code) ? 'icon-heart-full' : 'icon-heart'"></i>
                                        </button>
                                    </div>
                                    <div class="Card-content">
                                        <div class="Card-content-head">
                                            <div class="Card-content-head-code">
                                                <b>{{ prefix + item.code }}</b>
                                                <span>Tesis Kodu</span>
                                            </div>
                                            <div class="Card-content-head-location">
                                                <i class="icon-pin"></i>
                                                <p>{{ item.city | titlecase }} <span>{{ item.country | titlecase }} / {{
                                                    item.state | titlecase }}</span></p>
                                            </div>
                                        </div>
                                        <div class="Card-content-info">
                                            <div class="Card-content-info-item">
                                                <i class="icon-user"></i>
                                                <span>{{ item.max_adult }} Kişilik</span>
                                            </div>
                                            <div class="Card-content-info-item">
                                                <i class="icon-bed"></i>
                                                <span>{{ item.bedroom }} Yatak Odası</span>
                                            </div>
                                            <div class="Card-content-info-item">
                                                <i class="icon-shower"></i>
                                                <span>{{ item.bathrooms }} Banyo</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="Card-content-bottom">
                                        <div class="Card-content-bottom-price">
                                            <p><b>{{ item.min_price }} -
                                                    {{ item.max_price }}
                                                </b><span>/Gecelik</span></p>
                                            <p>Fiyat Aralığında</p>
                                        </div>
                                        <nuxt-link :to="'/' + item.code" class="Card-content-bottom-link"><i
                                                class="icon-right-arrows-new"></i></nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- If pagination is needed -->
                    <div class="swiper-pagination"></div>
                    <!-- If navigation buttons are needed -->
                    <div class="swiper-button-prev list-navigation-prev"></div>
                    <div class="swiper-button-next list-navigation-next"></div>
                </div>

            </div>
        </section>
        <section class="Home-banner" style="background-image: url(/img/home-banner.png);">
            <img src="/img/home-banner-mobile.png" alt="">
            <div class="container">
                <div class="Home-banner-in">
                    <div class="Home-banner-text">
                        <h4 v-html="pageData.page_content.section_banner.section_banner_title"></h4>
                        <h2>{{ pageData.page_content.section_banner.section_banner_subtitle }} <span>
                                {{ pageData.page_content.section_banner.section_banner_subtitle2 }} </span></h2>
                        <p>{{ pageData.page_content.section_banner.section_banner_desc }} <b>{{
                            pageData.page_content.section_banner.section_banner_desc_bold }}</b></p>
                    </div>
                </div>
            </div>
        </section>
        <section class="popular-section-otel bg-white overflow-hidden pb-sm-5 pt-5">
            <div class="container ">
                <div class="section-caption d-flex align-items-center mb-3 pb-1">
                    <i class="icon-otel-discover"></i>
                    <h4 class="primary-title fw-medium ls-05 lh-1">
                        Otelleri
                        <span>keşfedin</span>
                    </h4>
                </div>
                <ul class="otel-pills nav nav-pills mb-3" id="otel-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="otel-tab" data-bs-toggle="pill" data-bs-target="#otel"
                            type="button" role="tab" aria-selected="true">Kaş <span>Otelleri</span></button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="otel-tab2" data-bs-toggle="pill" data-bs-target="#otel2" type="button"
                            role="tab" aria-selected="false">Fethiye <span>Otelleri</span></button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="otel-tab3" data-bs-toggle="pill" data-bs-target="#otel3" type="button"
                            role="tab" aria-selected="false">Muğla <span>Otelleri</span></button>
                    </li>
                </ul>
                <div class="tab-content" id="otel-tabContent">
                    <div class="tab-pane fade show active" id="otel" role="tabpanel" aria-labelledby="otel-tab">
                        <div class="swiper list-slide-otel">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item, index) in 10" :key="index">
                                    <nuxt-link to="" class="O_Card">
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
                                                <div class="O_Card-content-in">
                                                    <div class="O_Card-content-price">
                                                        <p><b>300</b><span><u>TL</u>/Gecelik</span></p>
                                                        <p>Başlayan Fiyatlar</p>
                                                    </div>
                                                    <nuxt-link to="/" class="O_Card-content-link">
                                                        <i class="icon-right-arrows-new"></i>
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                        </div>
                                    </nuxt-link>
                                </div>
                            </div>
                            <!-- If pagination is needed -->

                            <!-- If navigation buttons are needed -->
                            <!-- <div class="swiper-pagination"></div> -->
                            <!-- <div class="swiper-button-prev list-navigation-prev"></div> -->
                            <!-- <div class="swiper-button-next list-navigation-next"></div> -->
                        </div>
                        <nuxt-link to="/otel" class="popular-section-otel-more">Tüm Kaş Otelleri</nuxt-link>
                    </div>
                    <div class="tab-pane fade" id="otel2" role="tabpanel" aria-labelledby="otel-tab2">
                        <div class="swiper list-slide-otel">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item, index) in 10" :key="index">
                                    <nuxt-link to="" class="O_Card">
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
                                                <div class="O_Card-content-in">
                                                    <div class="O_Card-content-price">
                                                        <p><b>300</b><span><u>TL</u>/Gecelik</span></p>
                                                        <p>Başlayan Fiyatlar</p>
                                                    </div>
                                                    <nuxt-link to="/" class="O_Card-content-link">
                                                        <i class="icon-right-arrows-new"></i>
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                        </div>
                                    </nuxt-link>
                                </div>
                            </div>
                            <!-- If pagination is needed -->

                            <!-- If navigation buttons are needed -->
                            <!-- <div class="swiper-button-prev list-navigation-prev"></div> -->
                            <!-- <div class="swiper-button-next list-navigation-next"></div> -->
                        </div>
                        <nuxt-link to="/otel" class="popular-section-otel-more">Tüm Fethiye Otelleri</nuxt-link>
                    </div>
                    <div class="tab-pane fade" id="otel3" role="tabpanel" aria-labelledby="otel-tab3">
                        <div class="swiper list-slide-otel">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item, index) in 10" :key="index">
                                    <nuxt-link to="" class="O_Card">
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
                                                <div class="O_Card-content-in">
                                                    <div class="O_Card-content-price">
                                                        <p><b>300</b><span><u>TL</u>/Gecelik</span></p>
                                                        <p>Başlayan Fiyatlar</p>
                                                    </div>
                                                    <nuxt-link to="/" class="O_Card-content-link">
                                                        <i class="icon-right-arrows-new"></i>
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                        </div>
                                    </nuxt-link>
                                </div>
                            </div>
                            <!-- If pagination is needed -->

                            <!-- If navigation buttons are needed -->
                            <!-- <div class="swiper-button-prev list-navigation-prev"></div> -->
                            <!-- <div class="swiper-button-next list-navigation-next"></div> -->
                        </div>
                        <nuxt-link to="/otel" class="popular-section-otel-more">Tüm Muğla Otelleri</nuxt-link>
                    </div>
                </div>


            </div>
        </section>
        <section class="H_info">
            <div class="container">
                <div class="H_info-in">
                    <div class="H_info-item">
                        <div class="H_info-item-icon">
                            <img src="/img/tursabnew.png" alt="">
                        </div>
                        <div class="H_info-item-icon-text">
                            <p>Wings Seyehat Tur. San.ve Tic.Ltd.Şti. 11095’nolu <span>Türsab Acentesidir.</span></p>
                            <a href="">Belge Görüntüle</a>
                        </div>
                    </div>
                    <div class="H_info-item">
                        <div class="H_info-item-icon">
                            <i class="icon-secure-payment"></i>
                        </div>
                        <div class="H_info-item-icon-text">
                            <p>%20’sini rezervasyon anında<span>Kalan tutarı girişte öde.</span></p>
                            <a href="">Şartları Görüntüle</a>
                        </div>
                    </div>
                    <div class="H_info-item">
                        <div class="H_info-item-icon">
                            <i class="icon-vkv"></i>
                        </div>
                        <div class="H_info-item-icon-text">
                            <p>%20’sini rezervasyon anında<span>Kalan tutarı girişte öde.</span></p>
                            <div class="H_info-item-links">
                                <a href="">Hakkımızda</a>
                                <a href=""><i class="icon-play"></i>Video İzle</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="popular-dark  bg-theme-first overflow-hidden mb-5 pb-sm-5 py-4">
            <div class="container ">
                <div class="section-caption d-flex align-items-center mb-3 pb-1">
                    <i class="icon-popular-calendar"></i>
                    <h4 class="primary-title fw-medium ls-05 lh-1 text-white">
                        Kısa Süreli <span>Konaklama Fırsatları</span>
                    </h4>
                    <nuxt-link to="/firsat" class="button-more button-more-dark">Tümünü Gör</nuxt-link>
                </div>
                <div class="swiper popular list-slide list-slide-firsat list-wrapper scroll-wrapper mb-3 mb-sm-4 pb-1">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(villa, index) in opportunities" :key="index">
                            <nuxt-link :to="'/' + villa.code" class="Card Card-icons">
                                <div class="Card-in">
                                    <div class="Card-img">
                                        <nuxt-link :to="'/' + villa.code">
                                            <nuxt-img :src="villa.preview_image[0].preview_url" width="371" height="225"></nuxt-img>
                                        </nuxt-link>
                                        <button class="Card-fav" type="button">
                                            <i class="icon-heart"></i>
                                        </button>
                                        <div class="Card-img-info">
                                            <p><span>%30</span>ŞİMDİ</p>
                                            <small>Kalanı girişte öde</small>
                                        </div>
                                    </div>
                                    <div class="Card-content">
                                        <div class="Card-content-head">
                                            <div class="Card-content-head-code">
                                                <b>{{prefix}}{{villa.code}}</b>
                                                <span>Tesis Kodu</span>
                                            </div>
                                            <div class="Card-content-head-location">
                                                <i class="icon-pin"></i>
                                                <p>{{villa.city | titlecase}} <span>{{villa.country | titlecase}} / {{villa.state | titlecase}}</span></p>
                                            </div>
                                        </div>
                                        <div class="Card-content-info">
                                            <div class="Card-content-info-item">
                                                <i class="icon-user"></i>
                                                <span>{{villa.max_adult}} Kişilik</span>
                                            </div>
                                            <div class="Card-content-info-item">
                                                <i class="icon-bed"></i>
                                                <span>{{villa.bedroom}} Yatak Odası</span>
                                            </div>
                                            <div class="Card-content-info-item">
                                                <i class="icon-shower"></i>
                                                <span>{{villa.bethroom}} Banyo</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="Card-content-bottom">
                                        <div class="Card-content-bottom-day">
                                            <p><span>{{villa.total.day}}</span>Gece</p>
                                        </div>
                                        <div class="Card-content-bottom-date">
                                            <p><span>{{villa.start_date}}</span><i class="icon-arrow-right-2"></i><span>{{villa.end_date}}</span></p>
                                            <small>Fırsatı kaçırma!</small>
                                        </div>
                                        <div class="Card-content-bottom-price single">
                                            <p class="orange">TOPLAM FİYAT</p>
                                            <p><b>{{villa.total.total | numberFormat}}</b><span>{{villa.total.price_currency}}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-prev list-navigation-prev"></div>
                    <div class="swiper-button-next list-navigation-next"></div>
                </div>

            </div>
        </section>
        <section class="categories-section  pb-sm-4 pb-lg-5">
            <div class="container pb-lg-5">
                <div class="section-caption d-flex align-items-center mb-3 mb-sm-5 pb-sm-1">
                    <i class="icon-categories"></i>
                    <h4 class="primary-title ls-05 lh-1">Villa Kategorilerine
                        <span>Gözat</span>
                    </h4>
                </div>
                <div class="categories">
                    <a href="#!" class="cat-item no-hover area1 overflow-hidden position-relative">
                        <img src="/uploads/category-image1.jpg" data-src="" width="380" height="235" alt="category image"
                            class="cat-image lazy cover w-100 h-100">
                        <div
                            class="item-caption text-white d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 px-4 py-4">
                            <div class="d-flex flex-column py-md-2 ps-md-2">
                                <strong class="title fs-5 fw-normal ls-05">Sauna - Hamamlı Villalar</strong>
                                <span class="ls-1">423 seçenek içeriyor</span>
                            </div>
                            <div class="caption-content flex-fill d-flex align-items-end ps-2 pb-2">
                                <div class="btn btn-outline-white fs-6 ls-05 rounded-md py-2 px-3">
                                    <small>Villaları Gör</small>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#!" class="cat-item no-hover area2 overflow-hidden position-relative">
                        <img src="/uploads/category-image2.jpg" data-src="" width="380" height="235" alt="category image"
                            class="cat-image lazy cover w-100 h-100">
                        <div
                            class="item-caption text-white d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 px-4 py-4">
                            <div class="d-flex flex-column py-md-2 ps-md-2">
                                <strong class="title fs-5 fw-normal ls-05">Özel Havuzlu</strong>
                                <span class="ls-1">423 seçenek içeriyor</span>
                            </div>
                            <div class="caption-content flex-fill d-flex align-items-end ps-2 pb-2">
                                <div class="btn btn-outline-white fs-6 ls-05 rounded-md py-2 px-3">
                                    <small>Villaları Gör</small>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#!" class="cat-item no-hover area3 overflow-hidden position-relative">
                        <img src="/uploads/category-image3.jpg" data-src="" width="380" height="235" alt="category image"
                            class="cat-image lazy cover w-100 h-100">
                        <div
                            class="item-caption text-white d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 px-4 py-4">
                            <div class="d-flex flex-column py-md-2 ps-md-2">
                                <strong class="title fs-5 fw-normal ls-05">Kış Aylarına Uygun Villalar</strong>
                                <span class="ls-1">423 seçenek içeriyor</span>
                            </div>
                            <div class="caption-content flex-fill d-flex align-items-end ps-2 pb-2">
                                <div class="btn btn-outline-white fs-6 ls-05 rounded-md py-2 px-3">
                                    <small>Villaları Gör</small>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#!" class="cat-item no-hover area4 overflow-hidden position-relative">
                        <img src="/uploads/category-image4.jpg" data-src="" width="380" height="235" alt="category image"
                            class="cat-image lazy cover w-100 h-100">
                        <div class="ribbon ls-05 position-absolute fw-medium top-0 start-0 px-5 py-1">
                            <small>Yeni Listenenler</small>
                        </div>
                        <div
                            class="item-caption text-white d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 px-4 py-4">
                            <div class="d-flex flex-column py-md-2 ps-md-2">
                                <strong class="title fs-5 fw-normal ls-05">2022 Vilları</strong>
                                <span class="ls-1">423 seçenek içeriyor</span>
                            </div>
                            <div class="caption-content flex-fill d-flex align-items-end ps-2 pb-2">
                                <div class="btn btn-outline-white fs-6 ls-05 rounded-md py-2 px-3">
                                    <small>Villaları Gör</small>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#!" class="cat-item no-hover area5 overflow-hidden position-relative">
                        <img src="/uploads/category-image5.jpg" data-src="" width="380" height="235" alt="category image"
                            class="cat-image lazy cover w-100 h-100">
                        <div
                            class="item-caption text-white d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 px-4 py-4">
                            <div class="d-flex flex-column py-md-2 ps-md-2">
                                <strong class="title fs-5 fw-normal ls-05">Balayı Villaları</strong>
                                <span class="ls-1">423 seçenek içeriyor</span>
                            </div>
                            <div class="caption-content flex-fill d-flex align-items-end ps-2 pb-2">
                                <div class="btn btn-outline-white fs-6 ls-05 rounded-md py-2 px-3">
                                    <small>Villaları Gör</small>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#!" class="cat-item no-hover area6 overflow-hidden position-relative">
                        <img src="/uploads/category-image7.jpg" data-src="" width="380" height="235" alt="category image"
                            class="cat-image lazy cover w-100 h-100">
                        <div
                            class="item-caption text-white d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 px-4 py-4">
                            <div class="d-flex flex-column py-md-2 ps-md-2">
                                <strong class="title fs-5 fw-normal ls-05">Butik Oteller</strong>
                                <span class="ls-1">423 seçenek içeriyor</span>
                            </div>
                            <div class="caption-content flex-fill d-flex align-items-end ps-2 pb-2">
                                <div class="btn btn-outline-white fs-6 ls-05 rounded-md py-2 px-3">
                                    <small>Villaları Gör</small>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div
                        class="area7 border border-light  d-flex align-items-center justify-content-center categories-more">
                        <nuxt-link to="/">
                            <span>Daha fazla görüntüle</span>
                            <i class="icon-arrow-right-up"></i>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </section>
        <section class="Home-text">
            <div class="container">
                <div class="Home-text-in">
                    <h5>Fethiye, Kaş ve Kalkan Tatiliniz için Villa Kiralayın</h5>
                    <div class="Home-text-desc" v-html="pageData.page_content.article.data">

                    </div>
                </div>
            </div>
        </section>
        <section class="Abroad-villas ">
            <div class="container ">
                <div class="section-caption d-flex align-items-center mb-3 pb-1">
                    <i class="icon-abroad-villa"></i>
                    <h4 class=""><b>Yurt Dışı</b>Kiralık Villa</h4>
                    <nuxt-link to="/yurtdisi-kiralik-villa" class="button-more">Tümünü Gör</nuxt-link>
                </div>
                <div class="swiper popular list-slide list-slide-abroad list-wrapper scroll-wrapper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in 10" :key="index">
                            <nuxt-link to="/" class="Abroad-villas-item">
                                <div class="Abroad-villas-item-img">
                                    <img src="/img/country/italy.jpg" alt="">
                                </div>
                                <div class="Abroad-villas-item-content">
                                    <div class="Abroad-villas-item-content-left">
                                        <b>İtalya</b>
                                        <p>423 seçenek içeriyor</p>
                                    </div>
                                    <div class="Abroad-villas-item-content-right">
                                        <div class="Abroad-villas-item-content-flag">
                                            <img src="/img/flag/flag-italy.svg" alt="">
                                        </div>
                                        <div class="Abroad-villas-item-content-smile">
                                            <img src="/img/laughing-smile.svg" alt="">
                                            <span>VİZE YOK!</span>
                                        </div>
                                    </div>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>

                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-prev list-navigation-prev"></div>
                    <div class="swiper-button-next list-navigation-next"></div>
                </div>

            </div>
        </section>
        <!-- <div>
            <div id="">A DOM element on your page. The first step will pop on this element because its ID is 'v-step-0'.
            </div>
            <div class="v-step-1">A DOM element on your page. The second step will pop on this element because its ID is
                'v-step-1'.</div>
            <div data-v-step="2">A DOM element on your page. The third and final step will pop on this element because its
                ID is 'v-step-2'.</div>

            <v-tour name="myTour" :steps="steps"></v-tour>
        </div> -->
    </div>
</template>

<script>
import { Swiper, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
// import MoreVillas from '../MoreVillas.vue';
export default {
    name: 'IndexPage',
    layout: 'no-search',
    components: {
        Swiper
    },
    head() {
        let site_id = process.env.SITE
        return {
            title: 'Anasayfa',
            meta: [
                { hid: 'description', name: 'description', content: 'anasayfa' },
                { hid: 'keywords', name: 'keywords', content: 'anasayfa1, anasayfa2, anasayfa3' }
            ],
        }
    },
    data() {
        return {
            steps: [
                {
                    target: ".v-step-0", // We're using document.querySelector() under the hood
                    content: `Discoverr <strong>Vue Tour</strong>!`
                },
                {
                    target: ".v-step-1",
                    content: "An awesome plugin made with Vue.js!"
                },
                {
                    target: '[data-v-step="2"]',
                    content:
                        "Try it, you'll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.",
                    params: {
                        placement: "top"
                    }
                }
            ],
            prefix: process.env.PREFIX,
            pageData: {},
            opportunities: []
        }
    },
    async asyncData({ $getRedisKey, $axios }) {
      const site_id = process.env.SITE;
      const redisPageKey = `web:${site_id}:pages:anasayfa`;

      let response = await $getRedisKey([redisPageKey]);
      const pageData = response[redisPageKey] || {};
      const popularVillas = pageData.page_content?.popular || [];

      const popularVillaPriceKeys = popularVillas.map(villa => `data:villas:${villa.code}:prices`);
      const responsePrice = await $getRedisKey(popularVillaPriceKeys);

      const updatedPopularVillas = popularVillas.map(villa => {
        const priceInfo = responsePrice[`data:villas:${villa.code}:prices`] || {};
        const priceList = priceInfo[`price_list_${process.env.PRICELIST_ID}`] || [];

        const prices = priceList.map(item => parseInt(item.price.replace("₺", "")));
        const min_price = Math.min(...prices) || null;
        const max_price = Math.max(...prices) || null;

        return {
          ...villa,
          min_price: min_price ? min_price + "₺" : null,
          max_price: max_price ? max_price + "₺" : null,
        };
      });

      let data = {
        day: 2, // (new Date()).getMonth() + 1
        month: 10 // (new Date()).getMonth() + 1
      };

      response = await $axios.post((process.server ? 'http://localhost:' + process.env.NODE_PORT : '') +
        `/website/opportunity?api_token=${process.env.WEBSITE_TOKEN}&page=1`, data)

      const opportunities = response.data.data;

      console.log(opportunities[0]);

      pageData.page_content = { ...pageData.page_content, popular: updatedPopularVillas };

      return { pageData, opportunities };
    },
    mounted() {
        Swiper.use([Navigation, Pagination])

        const swiper = new Swiper('.list-slide-first', {
            slidesPerView: 1.1,
            spaceBetween: 14,
            centeredSlides: true,
            direction: 'horizontal',
            loop: true,
            modules: [Navigation, Pagination],
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    centeredSlides: false,
                },
                768: {
                    slidesPerView: 2,
                    centeredSlides: false,
                },
                991: {
                    slidesPerView: 3,
                    centeredSlides: false,
                },
                1199: {
                    slidesPerView: 4,
                    centeredSlides: false,
                },
            },
        })
        const swiper2 = new Swiper('.list-slide-firsat', {
            slidesPerView: 1.1,
            spaceBetween: 10,
            direction: 'horizontal',
            centeredSlides: true,
            loop: true,
            modules: [Navigation, Pagination],
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                680: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    centeredSlides: false,
                },
                991: {
                    slidesPerView: 3,
                    centeredSlides: false,
                },
                1199: {
                    slidesPerView: 3,
                    centeredSlides: false,
                },
            },
        })
        const swiper3 = new Swiper('.list-slide-abroad', {
            slidesPerView: 1.1,
            spaceBetween: 16,
            direction: 'horizontal',
            centeredSlides: true,
            loop: true,
            modules: [Navigation, Pagination],
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    centeredSlides: false,
                },
                991:{
                    slidesPerView: 3,
                    centeredSlides: false,
                },
                1199: {
                    slidesPerView: 3,
                    centeredSlides: false,
                },
            },
        })
        const swiper4 = new Swiper('.list-slide-otel', {
            slidesPerView: 1.2,
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

    },
    methods: {
        isFavorite(code) {
            return this.$store.state.favorite.favorites.includes(code)
        },
        toggleFavorite(code) {
            event.stopPropagation();
            if (this.isFavorite(code)) {
                this.$store.dispatch('favorite/removeFavorite', code)
            } else {
                this.$store.dispatch('favorite/addFavorite', code)
            }
        }
    }

}
</script>
<style scoped>
.list-item .list-image {
    width: 100%;
}
</style>
