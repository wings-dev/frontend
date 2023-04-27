<template>
    <div class="Home">

        <section class="Banner Banner-home " :style="{ 'background-image': 'url(' + pageData.page_content.default.page_banner + ')' }">
            <!-- :style="{ 'background-image': 'url(' + pageData.page_content.default.page_banner + ')' }" -->
            <!-- <img :src="pageData.page_content.default.page_banner" class="w-100 mobile" alt=""> -->
            <!-- <nuxt-img src="/img/banner-b-m.jpg" alt=""></nuxt-img> -->
            <nuxt-img :src="pageData.page_content.default.page_list_img" class="w-100 mobile" loading="lazy" alt="" />
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
        <client-only>
            <search-bar :key="$route.path"></search-bar>
        </client-only>
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

                            <nuxt-link :to="'/' + item.url" class="Card">
                                <div class="Card-in">
                                    <div class="Card-img">
                                        <nuxt-img :src="item.preview_image[0].preview_url" loading="lazy" preset="card" format="webp"
                                            :srcset="item.preview_image[0].responsive_url" sizes="sm:325px lg:267px" :placeholder="[100, 50, 10]"></nuxt-img>

                                            <!-- :srcset="'https://d1t2mawg5vwzes.cloudfront.net/property/585/16121/responsive-images/1___media_library_original_322_181.jpg 322w,'" -->

                                        <button class="Card-fav" type="button" @click.prevent="toggleFavorite(item.code)"
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
                                            <p><b>{{ item.min_price | numberFormat }} -
                                                    {{ item.max_price | numberFormat}}
                                                </b><span>/Gecelik</span></p>
                                            <p>Fiyat Aralığında</p>
                                        </div>
                                        <nuxt-link :to="'/' + item.url" class="Card-content-bottom-link"><i
                                                class="icon-right-arrows-new"></i></nuxt-link>
                                    </div>
                                </div>
                            </nuxt-link>
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
            <nuxt-img src="/img/home-banner-mobile.png" alt="" loading="lazy"> </nuxt-img>
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
                        <span>keşfedin </span>
                    </h4>
                </div>
              <ul class="otel-pills nav nav-pills mb-3" id="otel-tab" role="tablist">
                <li class="nav-item" role="presentation" v-for="(otelCategory, index) in pageData.page_content?.select_otel" :key="index" v-if="otelCategory">
                  <button :class="['nav-link', { active: index === 0 }]" :id="`otel-tab${index}`" data-bs-toggle="pill" :data-bs-target="`#otel${index}`"
                          type="button" role="tab" :aria-selected="index === 0">{{otelCategory.otel_category}}</button>
                </li>
              </ul>
              <div class="tab-content" id="otel-tabContent">
                <div v-for="(otelCategory, index) in pageData.page_content?.select_otel" :key="index" :class="['tab-pane', 'fade', { 'show active': index === 0 }]" :id="`otel${index}`" role="tabpanel" :aria-labelledby="`otel-tab${index}`" v-if="otelCategory">
                  <div class="swiper list-slide-otel">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide" v-for="(hotel, hotelIndex) in otelCategory.otel_list" :key="hotelIndex" v-if="hotel && (hotel.images && hotel.images[0]?.ImageUrl)">
                        <nuxt-link :to="hotel.url" class="O_Card" v-if="hotel.url">
                          <div class="O_Card-in">
                            <div class="O_Card-img">
                              <nuxt-img :src="cdn_hotel + hotel.images?.[0]?.ImageUrl" alt="" v-if="hotel.images && hotel.images[0]?.ImageUrl" width="299" loading="lazy"
                                            height="188"></nuxt-img>
                              <div class="O_Card-img-text" style="background-color: #5d91c1;">
                                <span>{{parseFloat(hotel.Rating).toFixed(2)}}/10</span>
                              </div>
                            </div>
                            <div class="O_Card-content">
                              <div class="O_Card-content-head">
                                <b>{{hotel.Name}}</b>
                                <small>{{hotel.DestinationName}}</small>
                              </div>
                              <div class="O_Card-content-in">
                                <div class="O_Card-content-price d-none">
                                  <p><b>300</b><span><u>TL</u>/Gecelik</span></p>
                                  <p>Başlayan Fiyatlar</p>
                                </div>
                                <nuxt-link :to="hotel.url" class="O_Card-content-link" v-if="hotel.url">
                                  Oteli İncele
                                  <i class="icon-right-arrows-new"></i>
                                </nuxt-link>
                              </div>
                            </div>
                          </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                  <nuxt-link :to="'/'+otelCategory.otel_category_all_link" class="popular-section-otel-more">Tüm {{otelCategory.otel_category}}</nuxt-link>
                </div>
              </div>
            </div>
        </section>
        <section class="H_info">
            <div class="container">
                <div class="H_info-in">
                    <div class="H_info-item">
                        <div class="H_info-item-icon">
                          <nuxt-img src="/img/tursabnew.png" alt="" loading="lazy"></nuxt-img>
                        </div>
                        <div class="H_info-item-icon-text">
                            <p>Wings Seyehat Tur. San.ve Tic.Ltd.Şti. 11095’nolu <span>Türsab Acentesidir.</span></p>
                            <a href="https://d1t2mawg5vwzes.cloudfront.net/page/18197/381761/tursab-belge.jpeg" data-fancybox="Türsab Belgesi">Belge Görüntüle</a>
                        </div>
                    </div>
                    <div class="H_info-item">
                        <div class="H_info-item-icon">
                            <i class="icon-secure-payment"></i>
                        </div>
                        <div class="H_info-item-icon-text">
                            <p>Tüm Kredi Kartlarına<span>Taksit İmkanı.</span></p>
                            <nuxt-link to="/rezervasyon-ve-iptal-kosullari">Şartları Görüntüle</nuxt-link>
                        </div>
                    </div>
                    <div class="H_info-item">
                        <div class="H_info-item-icon">
                            <i class="icon-vkv"></i>
                        </div>
                        <div class="H_info-item-icon-text">
                            <p>balayivillasi.com.tr’yi<b> Keşfet</b></p>
                            <div class="H_info-item-links">
                                <nuxt-link to="/hakkimizda">Hakkımızda</nuxt-link>
                                <a href="https://www.youtube.com/watch?v=n62oS7mSx1A" data-fancybox="Tanıtım Videosu"><i class="icon-icon-play-sm"></i>Video İzle</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="popular-dark overflow-hidden mb-5 pb-sm-5 py-4">
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
                        <div class="swiper-slide" v-for="(villa, index) in opportunities.slice(0, 10)" :key="index">
                            <nuxt-link :to="'/' + villa.url" class="Card Card-icons">
                                <div class="Card-in">
                                    <div class="Card-img">

                                        <!-- <nuxt-img :src="villa.preview_image[0].preview_url" width="371"
                                            height="225"></nuxt-img> -->

                                            <nuxt-img :src="villa.watermark_preview_image[0].preview_url" loading="lazy" preset="card" format="webp"
                                            :srcset="villa.watermark_preview_image[0].responsive_url" sizes="sm:385w lg:364px"></nuxt-img>

                                        <button class="Card-fav" type="button" @click.prevent="toggleFavorite(villa.code)"
                                            :class="isFavorite(villa.code) ? 'active' : ''">
                                            <i :class="isFavorite(villa.code) ? 'icon-heart-full' : 'icon-heart'"></i>
                                        </button>
                                        <div class="Card-img-info">
                                            <p><span>%30</span>ŞİMDİ</p>
                                            <small>Kalanı girişte öde</small>
                                        </div>
                                    </div>
                                    <div class="Card-content">
                                        <div class="Card-content-head">
                                            <div class="Card-content-head-code">
                                                <b>{{ prefix }}{{ villa.code }}</b>
                                                <span>Tesis Kodu</span>
                                            </div>
                                            <div class="Card-content-head-location">
                                                <i class="icon-pin"></i>
                                                <p>{{ villa.city | titlecase }} <span>{{ villa.country | titlecase }} /
                                                        {{ villa.state | titlecase }}</span></p>
                                            </div>
                                        </div>
                                        <div class="Card-content-info">
                                            <div class="Card-content-info-item">
                                                <i class="icon-user"></i>
                                                <span>{{ villa.max_adult }} Kişilik</span>
                                            </div>
                                            <div class="Card-content-info-item">
                                                <i class="icon-bed"></i>
                                                <span>{{ villa.bedroom }} Yatak Odası</span>
                                            </div>
                                            <div class="Card-content-info-item">
                                                <i class="icon-shower"></i>
                                                <span>{{ villa.bethroom }} Banyo</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="Card-content-bottom">
                                        <div class="Card-content-bottom-day">
                                            <p><span>3</span>Gece</p>
                                        </div>
                                        <div class="Card-content-bottom-date">
                                            <p><span>{{ villa.start_date | formatDate('DD-MM-YYYY', 'DD MMMM')}}</span><i class="icon-arrow-right-2"></i><span>{{
                                                villa.end_date | formatDate('DD-MM-YYYY', 'DD MMMM') }}</span></p>
                                            <small>Fırsatı kaçırma!</small>
                                        </div>
                                        <div class="Card-content-bottom-price single">
                                            <p class="orange">TOPLAM FİYAT</p>
                                            <p><b>{{ villa.total.total |
                                                numberFormat }}</b><span>{{ villa.total.price_currency }}</span></p>
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
                    <nuxt-link to="/hamamli--saunali-villalar" class="cat-item no-hover area1 overflow-hidden position-relative">
                        <nuxt-img src="/img/category/hamam-sauna.jpg" data-src="" width="380" height="235" alt="category image" loading="lazy"
                                  class="cat-image lazy cover w-100 h-100"></nuxt-img>
                        <div
                            class="item-caption text-white d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 px-4 py-4">
                            <div class="d-flex flex-column py-md-2 ps-md-2">
                                <strong class="title fs-5 fw-normal ls-05">Sauna - Hamamlı Villalar</strong>
                                <span class="ls-1">89 seçenek içeriyor</span>
                            </div>
                            <div class="caption-content flex-fill d-flex align-items-end ps-2 pb-2">
                                <div class="btn btn-outline-white fs-6 ls-05 rounded-md py-2 px-3">
                                    <small>Villaları Gör</small>
                                </div>
                            </div>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/kapali-havuzlu-balayi-villalari" class="cat-item no-hover area2 overflow-hidden position-relative">
                        <nuxt-img src="/img/category/kapali-havuzlu.jpg" data-src="" width="380" height="487" alt="category image" loading="lazy"
                                  class="cat-image lazy cover w-100 h-100"></nuxt-img>
                        <div
                            class="item-caption text-white d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 px-4 py-4">
                            <div class="d-flex flex-column py-md-2 ps-md-2">
                                <strong class="title fs-5 fw-normal ls-05">Kapalı Havuzlu Villalar</strong>
                                <span class="ls-1">173 seçenek içeriyor</span>
                            </div>
                            <div class="caption-content flex-fill d-flex align-items-end ps-2 pb-2">
                                <div class="btn btn-outline-white fs-6 ls-05 rounded-md py-2 px-3">
                                    <small>Villaları Gör</small>
                                </div>
                            </div>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/deniz-manzarali-balayi-villalari" class="cat-item no-hover area3 overflow-hidden position-relative">
                        <nuxt-img src="/img/category/deniz-manzarali.jpg" data-src="" width="380" height="235" alt="category image" loading="lazy"
                                  class="cat-image lazy cover w-100 h-100"></nuxt-img>
                        <div
                            class="item-caption text-white d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 px-4 py-4">
                            <div class="d-flex flex-column py-md-2 ps-md-2">
                                <strong class="title fs-5 fw-normal ls-05">Deniz Manzaralı Villalar</strong>
                                <span class="ls-1">375 seçenek içeriyor</span>
                            </div>
                            <div class="caption-content flex-fill d-flex align-items-end ps-2 pb-2">
                                <div class="btn btn-outline-white fs-6 ls-05 rounded-md py-2 px-3">
                                    <small>Villaları Gör</small>
                                </div>
                            </div>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/jakuzili-balayi-villalari" class="cat-item no-hover area4 overflow-hidden position-relative">
                        <nuxt-img src="/img/category/jakuzili-villalar.jpg" data-src="" width="380" height="235" alt="category image" loading="lazy"
                                  class="cat-image lazy cover w-100 h-100"></nuxt-img>
                        <div class="ribbon ls-05 position-absolute fw-medium top-0 start-0 px-5 py-1 d-none">
                            <small>Yeni Listenenler</small>
                        </div>
                        <div
                            class="item-caption text-white d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 px-4 py-4">
                            <div class="d-flex flex-column py-md-2 ps-md-2">
                                <strong class="title fs-5 fw-normal ls-05">Jakuzili Villar</strong>
                                <span class="ls-1">1032 seçenek içeriyor</span>
                            </div>
                            <div class="caption-content flex-fill d-flex align-items-end ps-2 pb-2">
                                <div class="btn btn-outline-white fs-6 ls-05 rounded-md py-2 px-3">
                                    <small>Villaları Gör</small>
                                </div>
                            </div>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/tum-balayi-villalari" class="cat-item no-hover area5 overflow-hidden position-relative">
                        <nuxt-img src="/img/category/balayi.jpg" data-src="" width="380" height="235" alt="category image" loading="lazy"
                                  class="cat-image lazy cover w-100 h-100"></nuxt-img>
                        <div
                            class="item-caption text-white d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 px-4 py-4">
                            <div class="d-flex flex-column py-md-2 ps-md-2">
                                <strong class="title fs-5 fw-normal ls-05">Balayı Villaları</strong>
                                <span class="ls-1">962 seçenek içeriyor</span>
                            </div>
                            <div class="caption-content flex-fill d-flex align-items-end ps-2 pb-2">
                                <div class="btn btn-outline-white fs-6 ls-05 rounded-md py-2 px-3">
                                    <small>Villaları Gör</small>
                                </div>
                            </div>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/muhafazakar-balayi-villalari" class="cat-item no-hover area6 overflow-hidden position-relative">
                        <nuxt-img src="/img/category/muhafazakar2.jpg" data-src="" width="380" height="487" alt="category image" loading="lazy"
                                  class="cat-image lazy cover w-100 h-100"></nuxt-img>
                        <div
                            class="item-caption text-white d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 px-4 py-4">
                            <div class="d-flex flex-column py-md-2 ps-md-2">
                                <strong class="title fs-5 fw-normal ls-05">Muhafazakar Villalar</strong>
                                <span class="ls-1">908 seçenek içeriyor</span>
                            </div>
                            <div class="caption-content flex-fill d-flex align-items-end ps-2 pb-2">
                                <div class="btn btn-outline-white fs-6 ls-05 rounded-md py-2 px-3">
                                    <small>Villaları Gör</small>
                                </div>
                            </div>
                        </div>
                    </nuxt-link>
                    <div
                        class="area7 border border-light  d-flex align-items-center justify-content-center categories-more">
                        <nuxt-link to="/kiralik-villa-ara">
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
                        <div class="swiper-slide" v-for="(item, index) in pageData.page_content.property_category" :key="index">
                            <nuxt-link :to="item.category_url" class="Abroad-villas-item">
                                <div class="Abroad-villas-item-img">
                                  <nuxt-img :src="item.category_img" alt="" v-if="item.category_img" loading="lazy"></nuxt-img>
                                  <nuxt-img src="/img/country/italy.jpg" alt="" loading="lazy" v-else></nuxt-img>
                                </div>
                                <div class="Abroad-villas-item-content">
                                    <div class="Abroad-villas-item-content-left">
                                        <b>{{ item.cateogory_name }}</b>
                                        <p>{{ item.property_count }} seçenek içeriyor</p>
                                    </div>
                                    <div class="Abroad-villas-item-content-right">
                                        <div class="Abroad-villas-item-content-flag">
                                            <country-flag :country='item.countryFlag' :rounded="true"/>
                                        </div>

                                        <div class="Abroad-villas-item-content-smile" v-if="item.emojiStatus !== 'emojistatus_2'">
                                          <nuxt-img src="/img/laughing-smile.svg" alt="" v-if="item.emojiStatus == 'emojistatus_1'"></nuxt-img>
                                            <span>{{ item.vizeStatus }}</span>
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
import findVillaUrlMixin, {findVillaUrlByCode} from "@/mixins/findVillaUrlMixin";
import slugify from "slugify";
import CountryFlag from 'vue-country-flag'


export default {
    name: 'IndexPage',
    layout: 'no-search',
    mixins: [findVillaUrlMixin],
    components: {
        Swiper,
        CountryFlag
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
            prefix: process.env.PREFIX,
            pageData: {},
            opportunities: [],
            cdn_hotel: process.env.HOTEL_CDN_URL + '/',
            sitename:process.env.SITE_NAME
        }
    },
    async asyncData({ $getRedisKey, $axios, store }) {
        const site_id = process.env.SITE;
        const redisPageKey = `web:${site_id}:pages:anasayfa`;

        let response = await $getRedisKey([redisPageKey]);
        const pageData = response[redisPageKey] || {};
        const popularVillas = Array.isArray(pageData.page_content?.popular) ? pageData.page_content.popular : [];

        const popularVillaPriceKeys = popularVillas.map(villa => villa && villa.code ? `data:villas:${villa.code}:prices` : null).filter(Boolean);
        const responsePrice = popularVillaPriceKeys.length > 0 ? await $getRedisKey(popularVillaPriceKeys) : {};

        const updatedPopularVillas = popularVillas.map(villa => {
          if (villa && villa.code) {
            const priceInfo = responsePrice[`data:villas:${villa.code}:prices`] || {};
            const priceList = Array.isArray(priceInfo[`price_list_${process.env.PRICELIST_ID}`]?.list) ? priceInfo[`price_list_${process.env.PRICELIST_ID}`].list : [];

            const prices = priceList.map(item => item && item.price ? parseInt(item.price.replace("₺", "")) : null).filter(Boolean);
            const min_price = prices.length > 0 ? Math.min(...prices) : null;
            const max_price = prices.length > 0 ? Math.max(...prices) : null;

            if (typeof store.state.routes.routes === 'object' && store.state.routes.routes !== null) {
              villa.url = findVillaUrlByCode(villa.code, store.state.routes.routes);
            }

            return {
              ...villa,
              min_price: min_price ? min_price.toLocaleString('de-DE', { maximumFractionDigits: 0 }) + "TL" : null,
              max_price: max_price ? max_price.toLocaleString('de-DE', { maximumFractionDigits: 0 }) + "TL" : null,
            };
          } else {
            return villa;
          }
        });

        let data = {
            day: 2, // (new Date()).getMonth() + 1
            month: 10 // (new Date()).getMonth() + 1
        };

        response = await $axios.post((process.server ? 'http://localhost:' + process.env.NODE_PORT : '') +
            `/website/opportunity?api_token=${process.env.WEBSITE_TOKEN}&page=1`, data)

      function encodeTimestamp(dateString) {
        // Tarih formatını "dd-MM-yyyy" olarak kabul ediyoruz
        const [day, month, year] = dateString.split('-').map(Number);
        return (new Date(year, month - 1, day)).getTime();
      }

        const opportunities = response.data.data.map(villa => {
          villa.url = findVillaUrlByCode(villa.code, store.state.routes.routes) +
            '?i=' + encodeTimestamp(villa.start_date)  + '&o='  + encodeTimestamp(villa.end_date) // + '&v=' + localStorage.getItem('visitorId') ;
          return villa
        });

      const otelCategories = Array.isArray(pageData.page_content?.select_otel) ? pageData.page_content.select_otel : [];

      otelCategories.forEach((otelCategory, index) => {
        if (otelCategory && Array.isArray(otelCategory.otel_list)) {
          otelCategory.otel_list = otelCategory.otel_list.map(hotel => {
            if (hotel && hotel.Name && hotel.Id) {
              hotel.url = '/otel/' + slugify(hotel.Name.toLowerCase()) + '-' + hotel.Id;
            }
            return hotel;
          });
        }
      });

        pageData.page_content = { ...pageData.page_content, popular: updatedPopularVillas, select_otel: otelCategories };


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

        console.log(this.pageData.page_content.popular)
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
