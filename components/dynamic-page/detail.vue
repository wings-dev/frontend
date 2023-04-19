<template>
  <div>
    <section class="view-detail-section">
      <div class="view-detail-section-menus">
        <div class="detail-top bg-theme-first-dark" id="detailTop">
          <div class="container">
            <div class="view-top d-flex">

              <div class="view-top-title">
                <h1><span>Tesis Kodu</span>{{ villa_prefix }}{{ villa.code }}</h1>
              </div>

              <div class="item-infos d-flex flex-wrap mb-sm-0 ">
                <div class="info flex-shrink-0 d-flex align-items-center">
                  <i class="icon-user"></i>
                  <span class="lh-sm pe-1">{{ villa.max_adult }} Kişilik</span>
                </div>
                <div class="info flex-shrink-0 d-flex align-items-center">
                  <i class="icon-bed"></i>
                  <span class="lh-sm pe-1">{{ villa.bedroom }} Yatak Odası</span>
                </div>
                <div class="info flex-shrink-0 d-flex align-items-center">
                  <i class="icon-shower"></i>
                  <span class="lh-sm pe-1">{{ villa.bathrooms }} Banyo</span>
                </div>
              </div>
              <div class="view-top-right">
                <div class="d-flex align-items-center text-theme-secondary">
                  <i class="icon-pin"></i>
                  <p class="view-top-right-location">{{ villa.location.city.name | titlecase }}
                    <span class="lh-sm">{{ villa.location.country.name | titlecase }} / {{ villa.location.state.name |
                      titlecase }}</span>
                  </p>
                </div>
                <div class="view-top-right-price" v-if="lowestPrice">
                  <span>GECELİK</span>
                  <p>{{ lowestPrice | numberFormat }} <span>₺</span></p>
                  <small>'den başlayan fiyatlar'</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="View-menu" id="detailMenu">
          <div class="container">
            <div class="View-menu-in">
              <div class="View-menu-left">
                <a id="genelbakis" class="View-menu-item desc-content" @click.prevent="scrollItem($event)">Genel bakış</a>
                <a id="musaitlik" class="View-menu-item availibility-content"
                  @click.prevent="scrollItem($event)">Müsaitlik
                  ve Takvim Fiyatı</a>
                <a id="location" class="View-menu-item location-content" @click.prevent="scrollItem($event)">Konum</a>
                <a id="comments" class="View-menu-item reviews-content" @click.prevent="scrollItem($event)">Yorumlar</a>
                <a id="sss" class="View-menu-item sss-content" @click.prevent="scrollItem($event)">S.S.S.</a>
                <a id="rules" class="View-menu-item rules-content" @click.prevent="scrollItem($event)">*Bilmeniz
                  Gerekenler</a>
              </div>
              <div class="View-menu-right">
                <button type="button" @click="toggleFavorite"
                  class="action-btn fav-btn w-auto h-auto fs-7 ls-05 text-theme-secondary bg-transparent p-0 d-flex align-items-center me-4 "
                  :class="isFavorite ? 'active' : ''">
                  <span class="action-btn-icon">
                    <i class="icon-heart"></i>
                  </span>
                  <span class="action-btn-text">{{ isFavorite ? 'Favorilerden Sil' : 'Favorilere Ekle' }}</span>
                </button>

                <div class="dropdown Share">
                  <button type="button"
                    class="action-btn share-btn fs-7 ls-05 text-theme-secondary bg-transparent p-0 d-flex align-items-center"
                    id="dropdownMenuShare" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="action-btn-icon">
                      <i class="icon-share"></i>
                    </span>
                    <span class="action-btn-text">Arkadaşın ile Paylaş</span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuShare">
                    <li><a class="dropdown-item" href="#" @click.prevent="shareOnFacebook"><i
                          class="icon-facebook"></i></a></li>
                    <li><a class="dropdown-item" href="#" @click.prevent="shareOnTwitter"><i class="icon-twitter"></i></a>
                    </li>
                    <li><a class="dropdown-item" href="#" @click.prevent="shareOnWhatsApp"><i
                          class="icon-whatsapp"></i></a></li>
                  </ul>
                </div>
                <button type="button"
                  class="up-button d-none fs-7 ls-05 text-theme-secondary bg-transparent p-0 d-flex align-items-center"
                  @click.prevent="scrollTop">
                  <span class="action-btn-icon">
                    <i class="icon-up-arrow"></i>
                  </span>
                  <span class="action-btn-text">Yukarı Çık</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container pb-1 gallery-container">
        <div class="view-gallery">
          <div class="area-1">
            <a href="#" @click.prevent="showGallery()"
              class="view-item d-block w-100 h-100 position-relative overflow-hidden ">
              <!-- <img :src="villa.watermark_images[0].preview_url" :srcset="villa.watermark_images[0].responsive"
                 alt="view-image" class="lazy cover rounded-xl w-100 h-100"> -->
              <nuxt-img :src="villa.watermark_images[0].preview_url" :srcset="villa.watermark_images[0].responsive"
                width="585" height="387" sizes="sm:100vw md:50vw lg:585px" />

            </a>
          </div>
          <div class="area-2 d-md-block d-none">
            <a href="#" @click.prevent="showGallery()" class="view-item d-block w-100 h-100 ">
              <nuxt-img :src="villa.watermark_images[1].preview_url" :srcset="villa.watermark_images[1].responsive"
                width="284" height="187" sizes="sm:100vw md:50vw lg:284px" />

            </a>
          </div>
          <div class="area-3 d-md-block d-none">
            <a href="#" @click.prevent="showGallery()" class="view-item d-block w-100 h-100 ">
              <nuxt-img :src="villa.watermark_images[2].preview_url" :srcset="villa.watermark_images[2].responsive"
                width="284" height="187" sizes="sm:100vw md:50vw lg:284px" />

            </a>
          </div>
          <div class="area-4 d-none d-lg-block">
            <a href="#" @click.prevent="showGallery()" class="view-item d-block w-100 h-100 ">
              <nuxt-img :src="villa.watermark_images[3].preview_url" :srcset="villa.watermark_images[3].responsive"
                width="284" height="187" sizes="sm:100vw md:50vw lg:284px" />

            </a>
          </div>
          <div class="area-5 d-none d-lg-block">
            <div class="view-item d-block w-100 h-100  last">
              <nuxt-img :src="villa.watermark_images[4].preview_url" :srcset="villa.watermark_images[4].responsive"
                width="284" height="187" sizes="sm:100vw md:50vw lg:284px" />
              <div
                class="hover-box position-absolute top-0 start-0 w-100 h-100 bg-theme-first-dark text-white fs-6 bg-opacity-75 d-flex align-items-center justify-content-center px-2 fw-medium ls-05 d-flex flex-column">
                <span @click.prevent="showGallery()">Tüm Fotoğraflar ( 32 ) </span>
                <!-- <button type="button" @click.prevent="test()">Video İzle</button> -->
                <a :href="villa.video" data-fancybox v-if="villa.video">
                  <i class="icon-play-button"></i> Video İzle
                </a>
                <!-- https://www.youtube.com/watch?v=5SMaakuGyH0 -->
              </div>
            </div>
          </div>
          <div class="View-gallery-mobile-buttons">

            <div class="dropdown Share">
              <button type="button"
                class="action-btn share-btn fs-7 ls-05 text-theme-secondary bg-transparent p-0 d-flex align-items-center"
                id="dropdownMenuShare2" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="action-btn-icon">
                  <i class="icon-share"></i>
                </span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuShare2">
                <li><a class="dropdown-item" href="#"><i class="icon-facebook"></i></a></li>
                <li><a class="dropdown-item" href="#"><i class="icon-instagram"></i></a></li>
                <li><a class="dropdown-item" href="#"><i class="icon-twitter"></i></a></li>
                <li><a class="dropdown-item" href="#"><i class="icon-whatsapp"></i></a></li>
              </ul>
            </div>
            <button type="button" @click="toggleFavorite"
              class="action-btn fav-btn w-auto h-auto fs-7 ls-05 text-theme-secondary bg-transparent p-0 d-flex align-items-center me-4 "
              :class="isFavorite ? 'active' : ''">
              <span class="action-btn-icon">
                <i class="icon-heart"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <div class="View">
      <div class="container">
        <div class="View-in">
          <div class="View-left">
            <div class="View-desc genelbakis view-menu-content-item" id="desc-content">
              <h2 class="View-title"><b>Tesise</b> Genel Bakış</h2>
              <div class="View-desc-category">
                <a href="javascript:void(0)" @click.prevent="goFacilityConceptsFilter(175)">Deniz Manzaralı</a>
                <a href="javascript:void(0)" @click.prevent="goFacilityConceptsFilter(175)">Muhafazakar Villa</a>
              </div>
              <p>Kalkan merkeze yürüyüş mesafesinde bulunan Suit Mabel konfor, estetik ve lüksü bir arada sunan özel bir
                tatil evidir. Özel kapalı garajına aracınızı parkedip suite girişinizle etkileyici donanım ve müthiş
                manzarası ile sizleri mest edecek olan Mabel, dubleks bir dairedir. Giriş katında, harika deniz
                manzarasını
                izlemekten arta kalan zamanlarınızı değerlendirebileceğiniz amerikan bilardo masası ile
                air-hockey,masa-futbolu ve dart bulunan oyun odası,sauna ve açık mutfak bulunmaktadır. Terasında yer
                alan
                perde sistemi ile havuz alanı korunaklı hale getirilebilmektedir.
              </p>

              <p>Suitimizin üst katında deniz manzaralı ve ferah bir salon ve açık mutfak bulunmaktadır. Salondan giriş
                yapılan ana yatak odasında 1.20 x 1.85 ebatında deniz manzaralı jakuzi, tv, king size çift kişilik yatak
                ve
                banyo bulunmaktadır.</p>
              <p>Kesintisiz bir deniz manzarası olan terasta özel yüzme havuzu,şezlonglar,açık alanda keyifle yemek
                yiyebileceğiniz masa sandalye ve taş barbekü bulunmaktadır.Yüzme havuzunda bulunan özel jet dalga motoru
                ile
                yorulana kadar yüzmenize imkan vermektedir.</p>
              <div class="View-desc-amenites">
                <h4 class="View-title"><b>Tesis</b> Olanakları</h4>
                <div class="View-desc-amenites-in">
                  <p>Jakuzi</p>
                  <p>Jakuzi</p>
                  <p>Bilardo Masası</p>
                  <p>Barbekü / Mangal Alanı</p>
                  <p>Barbekü / Mangal Alanı</p>
                </div>
                <b-button v-b-modal.amenitesModal class="View-desc-amenites-more">Tüm Olanaklar (14)</b-button>

              </div>
            </div>
            <div class="View-desc-mobile">
              <div class="View-desc-mobile-top">
                <div class="View-desc-mobile-top-location">
                  <i class="icon-pin"></i>
                  <p>FETHİYE<span>Turkey / Muğla</span></p>
                </div>
                <div class="View-desc-mobile-top-price" v-if="lowestPrice">
                  <span>GECELİK</span>
                  <p>{{ lowestPrice | numberFormat }} <span>₺</span></p>
                  <small>'den başlayan fiyatlar'</small>
                </div>
                
              </div>
              <div class="View-desc-mobile-bottom">
                <div class="View-desc-mobile-bottom-head">
                  <h1><span>Tesis Kodu</span> {{ villa_prefix }}{{ villa.code }}</h1>
                  <a :href="villa.video" data-fancybox v-if="villa.video"><i class="icon-play-button"></i>Tesisin
                    Videosu</a>
                  <a href="" @click.prevent="noVillaVideo" v-else><i class="icon-play-button"></i>Tesisin Videosu</a>
                </div>
                <div class="View-desc-mobile-bottom-content">
                  <div class="View-desc-mobile-bottom-content-in" :class="{ 'active': moreMobileContent }">
                    <p>Kalkan merkeze yürüyüş mesafesinde bulunan Suit Mabel konfor, estetik ve lüksü bir arada sunan özel
                      bir tatil evidir. Özel kapalı garajına aracınızı parkedip suite girişinizle etkileyici donanım ve
                      müthiş manzarası ile sizleri mest edecek olan Mabel, dubleks bir dairedir. Giriş katında, harika
                      deniz manzarasını izlemekten arta kalan zamanlarınızı değerlendirebileceğiniz amerikan bilardo
                      masası ile air hockey,masa-futbolu ve dart bulunan oyun odası,sauna ve açık mutfak bulunmaktadır.
                      Terasında yer alan perde sistemi ile havuz alanı korunaklı hale getirilebilmektedir.</p>
                    <p>Suitimizin üst katında deniz manzaralı ve ferah bir salon ve açık mutfak bulunmaktadır. Salondan
                      giriş yapılan ana yatak odasında 1.20 x 1.85 ebatında deniz manzaralı jakuzi, tv, king size çift
                      kişilik yatak ve banyo bulunmaktadır.</p>
                    <p>Kesintisiz bir deniz manzarası olan terasta özel yüzme havuzu,şezlonglar,açık alanda keyifle yemek
                      yiyebileceğiniz masa sandalye ve taş barbekü bulunmaktadır.Yüzme havuzunda bulunan özel jet dalga
                      motoru ile yorulana kadar yüzmenize imkan vermektedir.</p>
                  </div>
                  <button type="button" class="View-desc-mobile-bottom-content-more" @click="moreMobileContentOpen">{{
                    moreMobileContent ? 'Daha Az Göster' : 'Daha Fazla Göster' }} </button>
                </div>
              </div>
              <div class="View-desc-mobile-amenites">
                <nuxt-link to="/">Havuzu görünmeyen(Muhafazakar)</nuxt-link>
                <nuxt-link to="/">Kalabalık ailelere uygun</nuxt-link>
                <button type="button" @click="mobileAmenitesToggle">Tüm Olanarakları <i
                    class="icon-right-arrow"></i></button>
              </div>
            </div>
            <div class="View-months" v-if="monthlyPrices.length > 0">
              <h4 class="View-title"><b>Aylara</b> Göre Genel Bakış</h4>
              <p class="View-text">
                Fiyatlar belirtilen ay için belirlenmiş en düşük gecelik ücrettir. Ay içerisinde farklı fiyatlandırmalar
                mümkündür.
              </p>

              <div class="swiper swiper-months swiper-overflow mt-4">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="price in monthlyPrices" :key="price.month">
                    <div class="View-months-item">
                      <div class="View-months-item-title">
                        <h5>{{ price.month }}</h5>
                      </div>
                      <div class="View-months-item-in">
                        <div class="View-months-item-price">
                          <span>GECELİK</span>
                          <b>{{ price.lowest_price }}₺</b>
                          <small>‘den başlayan fiyatlarla</small>
                        </div>
                        <div class="View-months-item-days">
                          <p>En az konaklama</p>
                          <b>{{ price.minaccomodationday }} GECE <i class="icon-information" data-bs-toggle="tooltip"
                              data-bs-placement="right" title="Tooltip on right"></i></b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="View-availibility musaitlik view-menu-content-item" id="availibility-content">
              <h4 class="View-title"><b>Musaitlik ve</b> Fiyat Bilgisi</h4>
              <p class="View-text">
                Aşağıda belirtilen fiyatlar tesisin 1 gecelik konaklama ücretidir. Dönemlere göre konaklama süresine
                göre ekstra temizlik ücreti eklenebilmektedir.
              </p>

              <client-only>
                <availibility-calendar :slug="$route.params.slug" :calendarColumns="calendarColumn" :rows="calendarRow"
                  :calendarStep="1"></availibility-calendar>
              </client-only>

              <div class="View-availibility-legand">
                <div class="View-availibility-legand-item">
                  <span class="close-day"><i class="icon-time-1"></i></span>
                  <p>Onay Bekleniyor</p>
                </div>
                <div class="View-availibility-legand-item">
                  <span>/</span>
                  <p>Dolu</p>
                </div>
              </div>
            </div>
            <client-only>
              <opportunity-box-component :propertyCode="villa.code" @selected="opportunitySelected($event)"
                componentclass="View-right-opportunity-mobile"></opportunity-box-component>
            </client-only>
            <div class="View-beds">
              <h4 class="View-title">Kişi Bilgisi ve Yatak Düzeni</h4>
              <div class="View-beds-in">
                <div class="View-beds-item first">
                  <p class="View-beds-item-name"><b>Yatak ve</b> Kişi Kapasitesi</p>
                  <div class="View-beds-item-in top">
                    <p><i class="icon-user-double"></i><b>{{ villa.max_adult }}</b> Kişi Konaklayabilir</p>
                    <p><i class="icon-bed-new"></i><b>{{ villa.bedroom }}</b> Yatak Odası</p>
                  </div>
                </div>
                <div class="View-beds-item single">

                  <p class="View-beds-item-name"><b>Tek Kişilik</b> Yatak</p>
                  <div class="View-beds-item-in">
                    <div class="View-beds-item-total">
                      <p>{{ singleBed }}</p>
                      <span>adet</span>
                    </div>
                    <span class="x-span">x</span>
                    <i class="icon-single-bed"></i>
                  </div>
                </div>
                <div class="View-beds-item double">
                  <p class="View-beds-item-name"><b>Çift Kişilik</b> Yatak</p>
                  <div class="View-beds-item-in">
                    <div class="View-beds-item-total">
                      <p>{{ doubleBed }}</p>
                      <span>adet</span>
                    </div>
                    <span class="x-span">x</span>
                    <i class="icon-bed-new"></i>
                  </div>
                </div>
                <div class="View-beds-item capacity">
                  <p class="View-beds-item-name"><b>Banyo</b> Sayısı</p>
                  <div class="View-beds-item-in">
                    <div class="View-beds-item-total">
                      <p>{{ villa.bathrooms }}</p>
                      <span>kişilik</span>
                    </div>
                    <span class="x-span">x</span>
                    <i class="icon-shower"></i>
                  </div>
                </div>
                <div class="View-beds-item capacity" :class="{ 'passive': jacuziNum == 0 }">
                  <p class="View-beds-item-name"><b>Jakuzi</b> Sayısı</p>
                  <div class="View-beds-item-in">
                    <div class="View-beds-item-total">
                      <p>{{ jacuziNum }}</p>
                      <span>kişilik</span>
                    </div>
                    <div class="View-beds-item-no">
                      <p>Bu Tesiste Bulunmuyor</p>
                    </div>
                    <span class="x-span" v-if="jacuziNum > 0">x</span>
                    <i class="icon-jacuzi" :class="{ 'passive': jacuziNum == 0 }"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="View-rooms rooms-section position-relative d-none">
              <div class="rooms-caption d-flex flex-column flex-sm-row align-items-sm-center flex-wrap mb-3 mb-sm-4 pb-1">
                <h4 class="View-title me-4 pe-2">
                  Kat Planı
                </h4>
                <ul class="nav nav-pills me-auto" id="room-tab" role="tablist">
                  <li class="nav-item" role="presentation" v-for="(floor, index) in villa.floorplan.kat" :key="index">
                    <button :class="[index == 0 ? 'active' : '']" class="nav-link" :id="'floor' + index"
                      data-bs-toggle="pill" :data-bs-target="'#floor' + index" type="button" role="tab"
                      :aria-controls="'floor' + index" aria-selected="true">
                      <span class="d-inline-block ">{{ floor.name }}</span>
                    </button>
                  </li>
                  <!-- <li class="nav-item" role="presentation">
                                      <button class="nav-link" id="floor-2-tab" data-bs-toggle="pill" data-bs-target="#floor-2"
                                        type="button" role="tab" aria-controls="floor-2" aria-selected="false">
                                        <span class="d-inline-block ">Kat 2</span>
                                      </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                      <button class="nav-link" id="floor-3-tab" data-bs-toggle="pill" data-bs-target="#floor-3"
                                        type="button" role="tab" aria-controls="floor-3" aria-selected="false">
                                        <span class="d-inline-block ">Kat 3</span>
                                      </button>
                                    </li> -->
                </ul>
                <div class="swiper-button-prev floorplan-navigation-prev"></div>
                <div class="swiper-button-next floorplan-navigation-next"></div>
              </div>
              {{ villa.floorplan.kat.bolum }}
              <div class="tab-content mb-4 mb-sm-5 pb-3" id="room-tabContent">
                <div :class="[index == 0 ? 'show active' : '']" class="tab-pane fade " id="floor-1" role="tabpanel"
                  aria-labelledby="floor-1-tab" v-for="(floor, index) in villa.floorplan.kat" :key="index">

                  <div class="rooms ">
                    <div class="swiper swiper-floorplan">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(bolum, index) in floor.bolum" :key="index">
                          <div class="room-item">
                            <div class="img-box w-100">

                              <img :src="img.preview_url" width="312" height="213" alt="room image"
                                class="lazy cover rounded-xl w-100" v-for="(img, index2) in bolum.gorsel" :key="index2"
                                v-if="index <= 0">
                            </div>
                            <div class="item-content d-flex flex-column align-items-center text-center px-3 pt-3">
                              <span class="room-item-title">{{ bolum.name }}</span>
                              <p class="room-item-text">
                                <span style="margin-right: 5px;" v-for="(ozellik, index3) in bolum.donanim"
                                  :key="index3">{{
                                    ozellik }}</span>
                              </p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="View-pools">
              <div class="View-pools-head  mb-3">
                <h4 class="View-title"><b>Havuz</b> Bilgisi</h4>

                <div class="View-pools-head-right">
                  <span>En</span>
                  <span>Boy</span>
                  <span>Yükseklik</span>
                </div>
              </div>

              <div class="pool-item mb-3" v-for="(poolitem, index) in villa.floorplan.pool" :key="index">
                <div class="pool-item-left">
                  <img :src="'/img/site' + site_id + '/pool1.svg'" width="28" height="28" alt="pool icon"
                    class="lazy contain" v-if="poolitem.pool == 52">
                  <img :src="'/img/site' + site_id + '/pool2.svg'" width="28" height="28" alt="pool icon"
                    class="lazy contain" v-if="poolitem.pool == 58">
                  <!-- <img :src="'/img/site' + site_id + '/pool3.svg'" width="28" height="28" alt="pool icon" -->
                  <span class="">{{ poolitem.name }}</span>
                </div>
                <div class="pool-item-right">
                  <p><span>En</span>{{ poolitem['havuz-en'] }}m</p>
                  <p><span>Boy</span>{{ poolitem['havuz-boy'] }}m</p>
                  <p><span>Derinlik</span>{{ poolitem['havuz-derinlik'] }}m</p>
                </div>

              </div>

            </div>
            <div class="View-location location view-menu-content-item" id="location-content">
              <div class="View-location-head mb-3">
                <div class="Viwe-location-head-in">
                  <h4 class="View-title">
                    <b>Konum</b>
                  </h4>
                  <p class="View-text">Yakınında Neler Var </p>
                </div>

                <button type="button" class="more" @click="locationMapOpen">
                  <i class="icon-map"></i>
                  <p><span>Tesis Konumunu</span>Haritada Gör</p>
                </button>

              </div>

              <div class="View-location-in">
                <div class="first-tab">
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="pills-beach-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-beach" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <p><i class="icon-beach"></i>Tesise Yakın Plaj</p> <span>{{ places.beaches.length }}</span>
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="pills-architecture-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-architecture" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <p><i class="icon-architecture"></i>Gezilecek yerler</p> <span>{{ places.locations.length
                        }}</span>
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-beach" role="tabpanel"
                      aria-labelledby="pills-beach-tab">
                      <p class="first-tab-info"><i class="icon-info-month"></i> Plajlar, tesise olan yakınlığı kuş bakışı
                        olarak hesaplanmıştır.</p>
                      <div class="first-tab-item" v-for="(item, index) in places.beaches"
                        v-if="places.beaches.length <= 4" :key="index">
                        <div class="first-tab-item-img" v-if="item.images && item.images.length > 0">
                          <img :src="item.images[0].preview_url" alt="" width="157" height="95"
                            v-if="item.images.length > 0">
                          <img src="/img/tesis-yok.png" alt="" width="157" height="95" v-else>
                        </div>
                        <div class="first-tab-item-content">
                          <b>{{ item.name }}</b>
                          <p>{{ item.description }}</p>
                        </div>
                        <div class="first-tab-item-length">
                          <b>{{ item.distance.match(/\d+/)[0] }}</b>
                          <p>{{ item.distance.replace(/\d+/, '') }} <small>Uzaklıkta</small></p>

                          <span>#{{ index + 1 }}</span>
                        </div>
                      </div>
                      <button type="button" class="first-tab-more" @click="mobileBeachToggle"
                        v-if="places.beaches.length > 4">Tümünü Görüntüle <i class="icon-right-arrow"></i></button>
                    </div>
                    <div class="tab-pane fade" id="pills-architecture" role="tabpanel"
                      aria-labelledby="pills-architecture-tab">
                      <p class="first-tab-info"><i class="icon-info-month"></i> Plajlar, tesise olan yakınlığı kuş bakışı
                        olarak hesaplanmıştır.</p>
                      <div class="first-tab-item" v-for="(item, index) in places.locations"
                        v-if="places.locations.length <= 4" :key="index">
                        <div class="first-tab-item-img">
                          <img :src="item.images[0].preview_url" alt="" width="157" height="95"
                            v-if="item.images && item.images.length > 0">
                          <img src="/img/tesis-yok.png" alt="" width="157" height="95" v-else>
                        </div>
                        <div class="first-tab-item-content">
                          <b>{{ item.name }}</b>
                          <p>{{ item.description }}</p>
                        </div>
                        <div class="first-tab-item-length">
                          <b>{{ item.distance.match(/\d+/)[0] }}</b>
                          <p>{{ item.distance.replace(/\d+/, '') }} <small>Uzaklıkta</small></p>

                          <span>#{{ index + 1 }}</span>
                        </div>
                      </div>
                      <button type="button" class="first-tab-more" @click="mobilePlaceToggle"
                        v-if="places.locations.length > 4">Tümünü Görüntüle <i class="icon-right-arrow"></i></button>
                    </div>

                  </div>
                </div>

                <div class="second-tab">
                  <ul class="nav nav-pills " id="location-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="pills-health-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-health" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <p><i class="icon-health"></i>Sağlık</p>
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="pills-restoran-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-restoran" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">
                        <p><i class="icon-restoran-1"></i>Restoran</p>
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="pills-market-tab" data-bs-toggle="pill" data-bs-target="#pills-market"
                        type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <p><i class="icon-market-1"></i>Market</p>
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="pills-map-tab" data-bs-toggle="pill" data-bs-target="#pills-map"
                        type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <p><i class="icon-map"></i>Ulaşım</p>
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-health" role="tabpanel"
                      aria-labelledby="pills-health-tab">
                      <div class="second-tab-in">
                        <div class="second-tab-item" v-for="(item, index) in places.health">
                          <p class="name"><b>{{ item.name }}</b>{{ item.description }}</p>
                          <p class="length"><b>{{ item.distance.match(/\d+/)[0] }}</b> {{ item.distance.replace(/\d+/, '')
                          }} <small>Uzaklıkta</small></p>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="pills-restoran" role="tabpanel" aria-labelledby="pills-restoran-tab">
                      <div class="second-tab-in">
                        <div class="second-tab-item" v-for="(item, index) in places.restaurant">
                          <p class="name"><b>{{ item.name }}</b>{{ item.description }}</p>
                          <p class="length"><b>{{ item.distance.match(/\d+/)[0] }}</b> {{ item.distance.replace(/\d+/, '')
                          }} <small>Uzaklıkta</small></p>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="pills-market" role="tabpanel" aria-labelledby="pills-market-tab">
                      <div class="second-tab-in">
                        <div class="second-tab-item" v-for="(item, index) in places.market">
                          <p class="name"><b>{{ item.name }}</b>{{ item.description }}</p>
                          <p class="length"><b>{{ item.distance.match(/\d+/)[0] }}</b> {{ item.distance.replace(/\d+/, '')
                          }} <small>Uzaklıkta</small></p>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="pills-map" role="tabpanel" aria-labelledby="pills-map-tab">
                      <div class="second-tab-in">
                        <div class="second-tab-item" v-for="(item, index) in places.transport">
                          <p class="name"><b>{{ item.name }}</b>{{ item.description }}</p>
                          <p class="length"><b>{{ item.distance.match(/\d+/)[0] }}</b> {{ item.distance.replace(/\d+/, '')
                          }} <small>Uzaklıkta</small></p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="View-location-collapse">
                  <h5>Diğer Mesafeler</h5>
                  <div class="accordion" id="Location">
                    <div class="accordion-item">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseHealth" aria-expanded="false" aria-controls="collapseHealth">
                        <p><i class="icon-health"></i>Sağlık</p><i class="icon-down-arrow"></i>
                      </button>
                      <div id="collapseHealth" class="accordion-collapse collapse " data-bs-parent="#Location">
                        <div class="accordion-body">
                          <div class="second-tab-item">
                            <p class="name"><b>Hastane</b>Fethiye Devlet Hastanesi</p>
                            <p class="length"><b>0,2</b> km <small>Uzaklıkta</small></p>
                          </div>
                          <div class="second-tab-item">
                            <p class="name"><b>Hastane</b>Fethiye Devlet Hastanesi</p>
                            <p class="length"><b>0,2</b> km <small>Uzaklıkta</small></p>
                          </div>
                          <button type="button" class="more" @click="mobileLocationToggle">Daha Fazla Göster</button>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseRestoran" aria-expanded="false" aria-controls="collapseRestoran">
                        <p><i class="icon-restoran"></i>Restoran</p><i class="icon-down-arrow"></i>
                      </button>
                      <div id="collapseRestoran" class="accordion-collapse collapse" data-bs-parent="#Location">
                        <div class="accordion-body">
                          <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi yemeklerinizi
                            pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.</p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseMarket" aria-expanded="false" aria-controls="collapseMarket">
                        <p><i class="icon-market"></i>Market</p><i class="icon-down-arrow"></i>
                      </button>
                      <div id="collapseMarket" class="accordion-collapse collapse" data-bs-parent="#Location">
                        <div class="accordion-body">
                          <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi yemeklerinizi
                            pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.</p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseMap" aria-expanded="false" aria-controls="collapseMap">
                        <p><i class="icon-map"></i>Ulaşım</p><i class="icon-down-arrow"></i>
                      </button>
                      <div id="collapseMap" class="accordion-collapse collapse" data-bs-parent="#Location">
                        <div class="accordion-body">
                          <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi yemeklerinizi
                            pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div class="View-reviews comments view-menu-content-item" id="reviews-content">
              <div class="View-reviews-head">
                <h4 class="View-title"><b>Tesis</b> Değerlendirmesi</h4>
                <div class="View-reviews-head-stars">
                  <span>4.4</span>
                  <i class="icon-star active"></i>
                  <i class="icon-star active"></i>
                  <i class="icon-star active"></i>
                  <i class="icon-star"></i>
                </div>
              </div>
              <div class="View-reviews-in">
                <div class="View-reviews-item">
                  <div class="View-reviews-item-top">
                    <div class="View-reviews-item-top-left">
                      <h6>Fatih ********</h6>
                      <div class="View-reviews-item-top-stars">
                        <i class="icon-star active"></i>
                        <i class="icon-star active"></i>
                        <i class="icon-star active"></i>
                        <i class="icon-star"></i>
                        <span>4.4</span>
                      </div>
                    </div>
                    <div class="View-reviews-item-top-right">
                      <p><span>KONAKLAMA TARİHİ :</span>25.02.2019</p>
                      <p><span>REZERVASYON NO :</span>VKV24124****</p>
                    </div>
                  </div>
                  <div class="View-reviews-item-bottom">
                    <div class="View-reviews-item-bottom-left">
                      <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look even slightly
                        believable
                      </p>
                    </div>
                    <div class="View-reviews-item-bottom-right">
                      <a href="/img/reviews.png" class="View-reviews-item-bottom-right-item" data-fancybox="reviews">
                        <img src="/img/reviews.png" alt="">
                      </a>
                      <a href="/img/reviews.png" class="View-reviews-item-bottom-right-item" data-fancybox="reviews">
                        <img src="/img/reviews.png" alt="">
                      </a>
                      <a href="/img/reviews.png" class="View-reviews-item-bottom-right-item more"
                        data-fancybox="reviews">Daha fazla görüntüle (12)</a>
                      <div class="d-none">
                        <a href="/img/reviews.png" data-fancybox="reviews"></a>
                        <a href="/img/reviews.png" data-fancybox="reviews"></a>
                        <a href="/img/reviews.png" data-fancybox="reviews"></a>
                        <a href="/img/reviews.png" data-fancybox="reviews"></a>
                      </div>
                    </div>
                    <div class="View-reviews-item-villa">
                      <i class="icon-calendar"></i>
                      <div class="View-reviews-item-villa-text">
                        <span>TESİS YETKİLİSİNİN CEVABI</span>
                        <p>bizi tercih ettiğiniz için teşekkür ederiz.</p>
                      </div>
                    </div>
                  </div>
                  <div class="View-reviews-item-mobile">
                    <div class="View-reviews-item-mobile-left">
                      <p>Konaklama Tarihi <span>25.02.2019 </span></p>
                      <p>Rezervasyon No. <span>VKV24124**** </span></p>
                    </div>
                    <div class="View-reviews-item-mobile-right">
                      <a href="/img/reviews.png" class="View-reviews-item-bottom-right-item" data-fancybox="reviews">
                        <img src="/img/reviews.png" alt="">
                        <span>+6</span>
                      </a>
                      <div class="d-none">
                        <a href="/img/reviews.png" data-fancybox="reviews"></a>
                        <a href="/img/reviews.png" data-fancybox="reviews"></a>
                        <a href="/img/reviews.png" data-fancybox="reviews"></a>
                        <a href="/img/reviews.png" data-fancybox="reviews"></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="View-reviews-item no-img">
                  <div class="View-reviews-item-top">
                    <div class="View-reviews-item-top-left">
                      <h6>Fatih ********</h6>
                      <div class="View-reviews-item-top-stars">
                        <i class="icon-star active"></i>
                        <i class="icon-star active"></i>
                        <i class="icon-star active"></i>
                        <i class="icon-star"></i>
                        <span>4.4</span>
                      </div>
                    </div>
                    <div class="View-reviews-item-top-right">
                      <p><span>KONAKLAMA TARİHİ :</span>25.02.2019</p>
                      <p><span>REZERVASYON NO :</span>VKV24124****</p>
                    </div>
                  </div>
                  <div class="View-reviews-item-bottom">
                    <div class="View-reviews-item-bottom-left">
                      <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look even slightly
                        believable
                      </p>
                      <div class="View-reviews-item-villa">
                        <i class="icon-calendar"></i>
                        <div class="View-reviews-item-villa-text">
                          <span>TESİS YETKİLİSİNİN CEVABI</span>
                          <p>bizi tercih ettiğiniz için teşekkür ederiz.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div class="View-info rules view-menu-content-item" id="rules-content">
              <div class="View-info-in">
                <h4 class="View-title"><b>Bilmeniz</b> Gerekenler</h4>

                <div class="View-info-hours">
                  <div class="View-info-hours-item">
                    <div class="View-info-hours-item-left">
                      <div class="View-info-hours-check">
                        <i class="icon-check-in"></i>
                        <div class="View-info-hours-check-text">
                          <h6>Check-in</h6>
                          <p>En erken ve en geç tesise giriş yapabileceğiniz saatler.</p>
                        </div>
                      </div>
                    </div>
                    <div class="View-info-hours-item-right">
                      <div class="View-info-hours-status">
                        <div class="View-info-hours-status-in" style="grid-column: 14/23;">
                          <div class="View-info-hours-status-lefthours">
                            <span>{{ villa.checkin !== null ? villa.checkin.substr(0, 5) : ' ' }}</span>
                          </div>

                          <div class="View-info-hours-status-righthours">
                            <span>
                              {{ villa.checkin_end !== null ? villa.checkin_end.substr(0, 5) : ' ' }}
                            </span>
                          </div>
                          <div class="View-info-hours-status-tophours" v-if="villa.checkin !== null">
                            <span>{{ villa.checkin !== null ? villa.checkin.substr(0, 5) : ' ' }} - {{ villa.checkin_end
                              !== null ? villa.checkin_end.substr(0, 5) : ' ' }} Arası</span>
                          </div>
                        </div>
                      </div>
                      <div class="View-info-hours-status-mobile">
                        <span>{{ villa.checkin !== null ? villa.checkin.substr(0, 5) : ' ' }} - {{ villa.checkin_end
                          !== null ? villa.checkin_end.substr(0, 5) : ' ' }} Arası</span>
                      </div>
                    </div>
                  </div>
                  <div class="View-info-hours-item">
                    <div class="View-info-hours-item-left">
                      <div class="View-info-hours-check">
                        <i class="icon-check-out"></i>
                        <div class="View-info-hours-check-text">
                          <h6>Check-out</h6>
                          <p>En erken ve en geç tesisten çıkış yapabileceğiniz saatler.</p>
                        </div>
                      </div>
                    </div>
                    <div class="View-info-hours-item-right">
                      <div class="View-info-hours-status">
                        <div class="View-info-hours-status-in" style="grid-column: 4/9;">

                          <div class="View-info-hours-status-lefthours">
                            <span>{{ villa.checkout !== null ? villa.checkout.substr(0, 5) : ' ' }}</span>
                          </div>

                          <div class="View-info-hours-status-righthours">
                            <span>
                              {{ villa.checkout_end !== null ? villa.checkout_end.substr(0, 5) : ' ' }}
                            </span>
                          </div>
                          <div class="View-info-hours-status-tophours" v-if="villa.checkout !== null">
                            <span>{{ villa.checkout !== null ? villa.checkout.substr(0, 5) : ' ' }} - {{
                              villa.checkout_end
                              !== null ? villa.checkout_end.substr(0, 5) : ' ' }} Arası</span>
                          </div>
                        </div>
                      </div>
                      <div class="View-info-hours-status-mobile">
                        <span>{{ villa.checkin !== null ? villa.checkin.substr(0, 5) : ' ' }} - {{ villa.checkin_end
                          !== null ? villa.checkin_end.substr(0, 5) : ' ' }} Arası</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="View-info-bg">
                  <div class="View-info-rules">
                    <h5>Tesis Kuralları</h5>
                    <div class="View-info-rules-item">
                      <i class="icon-no-dog"></i>
                      <p>Evcil Hayvan Giremez</p>
                    </div>
                    <div class="View-info-rules-item">
                      <i class="icon-no-smoking"></i>
                      <p>Sigara İçilemez</p>
                    </div>
                    <div class="View-info-rules-item">
                      <i class="icon-no-music"></i>
                      <p>Parti Yapılamaz</p>
                    </div>
                  </div>
                  <div class="View-info-policy">
                    <h5>İptal Politikası</h5>
                    <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi yemeklerinizi
                      pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.Yemek servisi
                      hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi yemeklerinizi pişirebilir,kendi
                      ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.</p>
                  </div>
                  <div class="View-info-policy-mobile">
                    <h5>İptal Politikası</h5>
                    <div class="View-info-policy-mobile-in">
                      <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi yemeklerinizi...
                      </p>
                      <button type="button" class="more" @click="mobilePolicyToggle"><i
                          class="icon-right-arrow"></i></button>
                    </div>
                  </div>
                </div>
                <div class="View-info-fee">
                  <div class="View-info-fee-left">
                    <h5>Ücrete Dahil olanlar</h5>
                    <div class="View-info-fee-item">
                      <p>Elektrik , Su ve Tüpgaz Kullanımı</p>
                    </div>
                    <div class="View-info-fee-item">
                      <p>Wifi</p>
                    </div>
                    <div class="View-info-fee-item">
                      <p>Günlük Havuz ve Bahçe Bakımı</p>
                    </div>
                  </div>
                  <div class="View-info-fee-right">
                    <h5>Hasar Depozitosu</h5>
                    <p>Depozito ücreti <b>2000₺</b> olarak belirlenmiştir. Konaklama süresince tesiste herhangi bir
                      zarar olmaması
                      durumunda çıkışta <u>iade edilir.</u></p>
                  </div>

                </div>


              </div>
            </div>
            <div class="View-info-warning">
              <div class="View-info-warning-in">
                <i class="icon-warning"></i>
                <div class="View-info-warning-text">
                  <h6>Dikkat Edilmesi Gereken Hususlar</h6>
                  <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi yemeklerinizi
                    pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.</p>
                </div>
              </div>
            </div>
            <div class="View-faq sss view-menu-content-item" id="sss-content">
              <h4 class="View-title"><b>Sıkça</b> Sorulan Sorular</h4>
              <div class="accordion" id="Faq">
                <div class="accordion-item">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                    Nasıl rezervasyon yapabilirim ?
                  </button>
                  <div id="faq1" class="accordion-collapse collapse " data-bs-parent="#Faq">
                    <div class="accordion-body">
                      <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi yemeklerinizi
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
                      <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi yemeklerinizi
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
                      <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi yemeklerinizi
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
                      <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi yemeklerinizi
                        pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="View-mobile-modal" :class="{ 'show': mobileAmenites }">
              <button type="button" class="mobile-menus-back" @click="mobileAmenitesToggle"><i
                  class="icon-left-arrow"></i></button>
              <div class="Amenites">
                <div class="Amenites-head">
                  <div class="Amenites-head-in">
                    <h3 class="Amenites-title">Tesis <b>olanakları</b></h3>
                    <div class="Amenites-head-link">
                      <p>Tesis kategorisi</p>
                      <nuxt-link to="/">Doğa manzaralı</nuxt-link>
                      <nuxt-link to="/">Muhafazar villa</nuxt-link>
                    </div>
                  </div>
                </div>
                <div class="Amenites-in">
                  <div class="Amenites-item">
                    <span class="Amenites-item-title">Bahçe Alanı</span>
                    <div class="Amenites-item-in">
                      <p>Jakuzi</p>
                      <p>Jakuzi</p>
                      <p>Bilardo Masası</p>
                      <p>Barbekü / Mangal Alanı</p>
                      <p>Bilardo Masası</p>
                      <p>Barbekü / Mangal Alanı</p>
                      <p>Bilardo Masası</p>
                      <p>Barbekü / Mangal Alanı</p>
                      <p>Bilardo Masası</p>
                      <p>Barbekü / Mangal Alanı</p>
                      <p>Barbekü / Mangal Alanı</p>
                    </div>
                  </div>
                  <div class="Amenites-item">
                    <span class="Amenites-item-title">Bahçe Alanı</span>
                    <div class="Amenites-item-in">
                      <p>Jakuzi</p>
                      <p>Jakuzi</p>
                      <p>Bilardo Masası</p>
                      <p>Barbekü / Mangal Alanı</p>
                      <p>Barbekü / Mangal Alanı</p>
                    </div>
                  </div>
                  <div class="Amenites-item">
                    <span class="Amenites-item-title">Bahçe Alanı</span>
                    <div class="Amenites-item-in">
                      <p>Jakuzi</p>
                      <p>Jakuzi</p>
                      <p>Bilardo Masası</p>
                      <p>Barbekü / Mangal Alanı</p>
                      <p>Barbekü / Mangal Alanı</p>
                    </div>
                  </div>
                  <div class="Amenites-item">
                    <span class="Amenites-item-title">Bahçe Alanı</span>
                    <div class="Amenites-item-in">
                      <p>Jakuzi</p>
                      <p>Jakuzi</p>
                      <p>Bilardo Masası</p>
                      <p>Barbekü / Mangal Alanı</p>
                      <p>Barbekü / Mangal Alanı</p>
                    </div>
                  </div>
                  <div class="Amenites-item">
                    <span class="Amenites-item-title">Bahçe Alanı</span>
                    <div class="Amenites-item-in">
                      <p>Jakuzi</p>
                      <p>Jakuzi</p>
                      <p>Bilardo Masası</p>
                      <p>Barbekü / Mangal Alanı</p>
                      <p>Barbekü / Mangal Alanı</p>
                    </div>
                  </div>
                  <div class="Amenites-item">
                    <span class="Amenites-item-title">Bahçe Alanı</span>
                    <div class="Amenites-item-in">
                      <p>Jakuzi</p>
                      <p>Jakuzi</p>
                      <p>Bilardo Masası</p>
                      <p>Barbekü / Mangal Alanı</p>
                      <p>Barbekü / Mangal Alanı</p>
                    </div>
                  </div>
                  <div class="Amenites-item">
                    <span class="Amenites-item-title">Bahçe Alanı</span>
                    <div class="Amenites-item-in">
                      <p>Jakuzi</p>
                      <p>Jakuzi</p>
                      <p>Bilardo Masası</p>
                      <p>Barbekü / Mangal Alanı</p>
                      <p>Barbekü / Mangal Alanı</p>
                    </div>
                  </div>
                  <div class="Amenites-item">
                    <span class="Amenites-item-title">Bahçe Alanı</span>
                    <div class="Amenites-item-in">
                      <p>Jakuzi</p>
                      <p>Jakuzi</p>
                      <p>Bilardo Masası</p>
                      <p>Barbekü / Mangal Alanı</p>
                      <p>Barbekü / Mangal Alanı</p>
                    </div>
                  </div>
                  <div class="Amenites-item">
                    <span class="Amenites-item-title">Bahçe Alanı</span>
                    <div class="Amenites-item-in">
                      <p>Jakuzi</p>
                      <p>Jakuzi</p>
                      <p>Bilardo Masası</p>
                      <p>Barbekü / Mangal Alanı</p>
                      <p>Barbekü / Mangal Alanı</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div class="View-mobile-modal" :class="{ 'show': mobileOpportunity }">
              <button type="button" class="mobile-menus-back" @click="mobileOpportunityToggle"><i
                  class="icon-left-arrow"></i></button>
              <div class="View-right-opportunity View-right-opportunity-modal">
                <div class="View-right-opportunity-head">
                  <h4><i class="icon-star"></i>Kısa Süreli Fırsatlara</h4>

                </div>
                <nuxt-link to="/" class="View-right-opportunity-item">
                  <div class="View-right-opportunity-item-day">
                    <b>3</b>
                    <span>GECE</span>
                  </div>
                  <div class="View-right-opportunity-item-price">
                    <p>24 MAY <i class="icon-right-arrow"></i>27 MAY</p>
                    <span>12.120TL</span>
                  </div>
                </nuxt-link>
                <nuxt-link to="/" class="View-right-opportunity-item">
                  <div class="View-right-opportunity-item-day">
                    <b>3</b>
                    <span>GECE</span>
                  </div>
                  <div class="View-right-opportunity-item-price">
                    <p>24 MAY <i class="icon-right-arrow"></i>27 MAY</p>
                    <span>12.120TL</span>
                  </div>
                </nuxt-link>
                <nuxt-link to="/" class="View-right-opportunity-item">
                  <div class="View-right-opportunity-item-day">
                    <b>3</b>
                    <span>GECE</span>
                  </div>
                  <div class="View-right-opportunity-item-price">
                    <p>24 MAY <i class="icon-right-arrow"></i>27 MAY</p>
                    <span>12.120TL</span>
                  </div>
                </nuxt-link>
                <nuxt-link to="/" class="View-right-opportunity-item">
                  <div class="View-right-opportunity-item-day">
                    <b>3</b>
                    <span>GECE</span>
                  </div>
                  <div class="View-right-opportunity-item-price">
                    <p>24 MAY <i class="icon-right-arrow"></i>27 MAY</p>
                    <span>12.120TL</span>
                  </div>
                </nuxt-link>
                <nuxt-link to="/" class="View-right-opportunity-item">
                  <div class="View-right-opportunity-item-day">
                    <b>3</b>
                    <span>GECE</span>
                  </div>
                  <div class="View-right-opportunity-item-price">
                    <p>24 MAY <i class="icon-right-arrow"></i>27 MAY</p>
                    <span>12.120TL</span>
                  </div>
                </nuxt-link>
                <nuxt-link to="/" class="View-right-opportunity-item">
                  <div class="View-right-opportunity-item-day">
                    <b>3</b>
                    <span>GECE</span>
                  </div>
                  <div class="View-right-opportunity-item-price">
                    <p>24 MAY <i class="icon-right-arrow"></i>27 MAY</p>
                    <span>12.120TL</span>
                  </div>
                </nuxt-link>
                <nuxt-link to="/" class="View-right-opportunity-item">
                  <div class="View-right-opportunity-item-day">
                    <b>3</b>
                    <span>GECE</span>
                  </div>
                  <div class="View-right-opportunity-item-price">
                    <p>24 MAY <i class="icon-right-arrow"></i>27 MAY</p>
                    <span>12.120TL</span>
                  </div>
                </nuxt-link>
                <nuxt-link to="/" class="View-right-opportunity-item">
                  <div class="View-right-opportunity-item-day">
                    <b>3</b>
                    <span>GECE</span>
                  </div>
                  <div class="View-right-opportunity-item-price">
                    <p>24 MAY <i class="icon-right-arrow"></i>27 MAY</p>
                    <span>12.120TL</span>
                  </div>
                </nuxt-link>

              </div>
            </div>
            <div class="View-mobile-modal" :class="{ 'show': mobileLocation }">
              <button type="button" class="mobile-menus-back" @click="mobileLocationToggle"><i
                  class="icon-left-arrow"></i></button>
              <div class="View-location">
                <div class="second-tab-item w-100">
                  <p class="name"><b>Hastane</b>Fethiye Devlet Hastanesi</p>
                  <p class="length"><b>0,2</b> km <small>Uzaklıkta</small></p>
                </div>
                <div class="second-tab-item w-100">
                  <p class="name"><b>Hastane</b>Fethiye Devlet Hastanesi</p>
                  <p class="length"><b>0,2</b> km <small>Uzaklıkta</small></p>
                </div>
                <div class="second-tab-item w-100">
                  <p class="name"><b>Hastane</b>Fethiye Devlet Hastanesi</p>
                  <p class="length"><b>0,2</b> km <small>Uzaklıkta</small></p>
                </div>
                <div class="second-tab-item w-100">
                  <p class="name"><b>Hastane</b>Fethiye Devlet Hastanesi</p>
                  <p class="length"><b>0,2</b> km <small>Uzaklıkta</small></p>
                </div>
              </div>
            </div>
            <div class="View-mobile-modal" :class="{ 'show': mobilePolicy }">
              <button type="button" class="mobile-menus-back" @click="mobilePolicyToggle"><i
                  class="icon-left-arrow"></i></button>
              <div class="View-info-policy-modal">
                <h5>İptal Politikası</h5>
                <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi yemeklerinizi
                  pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.Yemek servisi hizmetimiz
                  bulunmamaktadır. Villalarımıza ait mutfaklarda kendi yemeklerinizi pişirebilir,kendi ellerinizle güzel
                  bir kahvaltı sofrası hazırlayabilirsiniz.</p>
              </div>
            </div>
            <div class="View-mobile-modal" :class="{ 'show': mobileBeach }">
              <button type="button" class="mobile-menus-back" @click="mobileBeachToggle"><i
                  class="icon-left-arrow"></i></button>
              <div class="View-location">
                <div class="first-tab">
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="pills-beach-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-beach" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">
                        <p><i class="icon-beach"></i>Tesise Yakın Plaj</p> <span>{{ places.beaches.length }}</span>
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-beach" role="tabpanel"
                      aria-labelledby="pills-beach-tab">
                      <p class="first-tab-info"><i class="icon-info-month"></i> Plajlar, tesise olan yakınlığı kuş bakışı
                        olarak hesaplanmıştır.</p>
                      <div class="first-tab-item" v-for="(item, index) in places.beaches">
                        <div class="first-tab-item-img" v-if="item.images && item.images.length > 0">
                          <img :src="item.images[0].preview_url" alt="" width="157" height="95"
                            v-if="item.images.length > 0">
                          <img src="/img/tesis-yok.png" alt="" width="157" height="95" v-else>
                        </div>
                        <div class="first-tab-item-content">
                          <b>{{ item.name }}</b>
                          <p>{{ item.description }}</p>
                        </div>
                        <div class="first-tab-item-length">
                          <b>{{ item.distance.match(/\d+/)[0] }}</b>
                          <p>{{ item.distance.replace(/\d+/, '') }} <small>Uzaklıkta</small></p>

                          <span>#{{ index + 1 }}</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="View-mobile-modal" :class="{ 'show': mobilePlace }">
              <button type="button" class="mobile-menus-back" @click="mobilePlaceToggle"><i
                  class="icon-left-arrow"></i></button>
              <div class="View-location">
                <div class="first-tab">
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="pills-architecture-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-architecture" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="true">
                        <p><i class="icon-architecture"></i>Gezilecek yerler</p> <span>{{ places.locations.length
                        }}</span>
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-architecture" role="tabpanel"
                      aria-labelledby="pills-architecture-tab">
                      <p class="first-tab-info"><i class="icon-info-month"></i> Mekanların, tesise olan yakınlığı kuş
                        bakışı
                        olarak hesaplanmıştır.</p>
                      <div class="first-tab-item" v-for="(item, index) in places.locations">
                        <div class="first-tab-item-img">
                          <img :src="item.images[0].preview_url" alt="" width="157" height="95"
                            v-if="item.images && item.images.length > 0">
                          <img src="/img/tesis-yok.png" alt="" width="157" height="95" v-else>
                        </div>
                        <div class="first-tab-item-content">
                          <b>{{ item.name }}</b>
                          <p>{{ item.description }}</p>
                        </div>
                        <div class="first-tab-item-length">
                          <b>{{ item.distance.match(/\d+/)[0] }}</b>
                          <p>{{ item.distance.replace(/\d+/, '') }} <small>Uzaklıkta</small></p>

                          <span>#{{ index + 1 }}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="View-right Reservation">

            <client-only>
              <reservation-form :villa="villa" :property-code="villa.code"
                :disable-reservation="disableDate"></reservation-form>

              <opportunity-box-component :propertyCode="villa.code"
                @selected="opportunitySelected($event)"></opportunity-box-component>
            </client-only>

          </div>
        </div>
      </div>
    </div>
    <more-villas></more-villas>

    <section class="Gallery" @keydown.esc="closeGallery">
      <div class="container">
        <div class="Gallery-head">
          <button type="button" class="Gallery-close" @click="closeGallery"><i class="icon-search-close"></i></button>
        </div>

        <div class="Gallery-container">
          <div class="Gallery-in">
            <h3 class="Gallery-list-title">Mekâna genel bakış</h3>
            <div class="Gallery-list">
              <template v-for="(floor, index) in villa.floorplan.kat">
                <button type="button" class="Gallery-list-item" :id="'Gallery_item' + index"
                  @click="scrollGallery($event)" v-for="(bolum, index) in floor.bolum" :key="index">
                  <img :src="bolum.gorsel[0].preview_url" class="w-100" alt="test" />
                  <p>{{ bolum.name }} <br> <span>({{ floor.name }})</span></p>
                </button>
              </template>

            </div>
            <div class="Gallery-detail">
              <template v-for="(floor, index) in villa.floorplan.kat">
                <div class="Gallery-detail-item" :class="'Gallery_item' + index" v-for="(bolum, index) in floor.bolum"
                  :key="index">
                  <div class="Gallery-detail-item-left">
                    <h3>{{ bolum.name }}</h3>
                  </div>
                  <div class="Gallery-detail-item-right">

                    <a class="Gallery-detail-item-right-img" :href="img.original_url" data-fancybox="gallery"
                      data-caption="Salon" v-for="(img, index) in bolum.gorsel" :key="index">
                      <nuxt-img :src="img.preview_url" :srcset="img.responsive" sizes="sm:100vw md:50vw lg:756px" />
                    </a>

                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>

    <amenites-modal sectionTitle="Haftanın Villaları"></amenites-modal>
    <location-map-modal :villalocationcity="villa.location.city.name" :villalocationdistrict="villa.location.state.name"
      :villacode="villa.code" :villaprefix="villa_prefix"></location-map-modal>

    <client-only>
      <close-villa-modal></close-villa-modal>
    </client-only>
  </div>
</template>


<script>
import { Swiper, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import HotelDatePicker from "vue-hotel-datepicker2";
import "vue-hotel-datepicker2/dist/vueHotelDatepicker2.css";
import CloseVillaModal from '../modals/close-villa-modal.vue';
import AmenitesModal from '../modals/amenites-modal.vue';
import LocationMapModal from '../modals/map-modal.vue';
import MoreVillas from '../MoreVillas.vue';
import opportunityBoxComponent from "@/components/OpportunityBoxComponent.vue";
import { shareOnFacebook, shareOnInstagram, shareOnTwitter, shareOnWhatsApp } from '@/assets/share';

export default {
  name: 'DynamicDetailPage',
  props: ['villa', 'calendar', 'price_list_1'],
  // props: ['villa', 'calendar', 'price_list_1'],
  components: {
    Swiper,
    HotelDatePicker,
    CloseVillaModal, AmenitesModal, LocationMapModal,
    MoreVillas
  },
  data() {
    return {
      site_id: process.env.SITE,
      attributes: [],
      galleryIsOpen: false,
      modalIsOpen: false,
      villa_prefix: process.env.PREFIX,
      date: null,
      disableReservation: ['2023-03-20', '2023-03-21', '2023-03-22', '2023-03-23', '2023-03-24', '2023-03-25', '2023-03-26', '2023-03-27'],
      disabledDates: [
        { start: null, end: new Date() },
      ],
      center: [36.618867138910204, 29.145069037654377],
      circle: {
        center: [36.618867138910204, 29.145069037654377],
        radius: 100
      },
      markers: [
        [36.61751702707028, 29.143651464471198], [36.61814341192442, 29.143354164069745]
      ],
      iconSize: [140, 140],
      calendarColumn: 2,
      calendarRow: 1,
      moreMobileContent: false,
      mobileAmenites: false,
      mobileOpportunity: false,
      mobileLocation: false,
      mobilePolicy: false,
      mobileBeach: false,
      mobilePlace: false,
      isMobile: false,
      lowestPrice: null,
      monthlyPrices: [],
      places: {
        beaches: [],
        locations: [],
        health: [],
        restaurant: [],
        market: [],
        transport: []
      },
      categories: []
    }
  },
  methods: {
    filterObjectsByPrefix(obj, prefix) {
      return Object.keys(obj)
        .filter(key => key.startsWith(prefix))
        .reduce((result, key) => {
          result[key] = obj[key];
          return result;
        }, {});
    },
    goFacilityConceptsFilter(id) {
      this.$router.push({
        path: '/kiralik-villa-ara',
        query: {
          facilityConcepts: id
        },
      });
    },
    shareOnFacebook() {
      shareOnFacebook(window.location.href);
    },
    shareOnTwitter() {
      shareOnTwitter(window.location.href);
    },
    shareOnWhatsApp() {
      shareOnWhatsApp(window.location.href);
    },
    opportunitySelected(opportunity) {
      function encodeTimestamp(dateString) {
        return (new Date(dateString)).getTime();
      }

      const data = { i: encodeTimestamp(opportunity.price.start_date), o: encodeTimestamp(opportunity.price.end_date) };

      const queryString = Object.keys(data)
        .map(key => key + '=' + data[key])
        .join('&');

      window.location.href = this.villa.code + '?' + queryString;
    },
    setAttributes() {
      const dates = new Set();
      const attributes = [];
      const { calendar, price_list_1 } = this;

      const setClassName = (customData, date) => {
        let { status, dateStatus } = customData;
        status = [...new Set(status)]
        const dateObj = new Date(date);
        const getAdjacentDay = (dayOffset) => new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate() + dayOffset).toISOString().substring(0, 10);

        const prevDayString = getAdjacentDay(-1);
        const nextDayString = getAdjacentDay(1);
        const findByDate = (attr, dateString) => attr.find(attribute => new Date(attribute.dates).getTime() === new Date(dateString).getTime());

        const prevDayData = findByDate(attributes, prevDayString)?.customData;
        const nextDayData = findByDate(attributes, nextDayString)?.customData;

        // bu gün hem giriş hem çıkışsa
        if (dateStatus.includes(0) && dateStatus.includes(2) && status.length == 1 && status.includes(2) && prevDayData?.status.includes(2)) {
          // bir önceki günün tipine bak
          //Kapalı-to-kapalı
          return { "kapali": true }
        }
        if (dateStatus.includes(0) && dateStatus.includes(2) && status.length == 1 && status.includes(1) && prevDayData?.status.includes(1)) {
          // bir önceki günün tipine bak
          //opsiyon-to-opsiyon
          return { "opsiyon": true }
        }
        if (dateStatus.includes(0) && dateStatus.includes(2)) {
          // bir önceki günün tipine bak
          return prevDayData?.status.includes(2)
            ? { "kapali-cikis-to-opsiyon-giris": true }
            : { "opsiyon-cikis-to-kapali-giris": true };
        }


        return {
          "kapali": status.includes(2),
          "kapali-giris": status.includes(2) && dateStatus.includes(0),
          "kapali-cikis": status.includes(2) && dateStatus.includes(2),
          "opsiyon": status.includes(1),
          "opsiyon-giris": status.includes(1) && dateStatus.includes(0),
          "opsiyon-cikis": status.includes(1) && dateStatus.includes(2),
        };
      }

      [...calendar, ...price_list_1].forEach(item => dates.add(item.dates[0]));

      dates.forEach(date => {
        const customData = {
          price: null,
          status: [],
          dateStatus: [],
        };

        const matchingCalendarItems = calendar.filter(item => item.dates[0] === date);
        matchingCalendarItems.forEach(item => {
          customData.status = customData.status.concat(item.status);
          customData.dateStatus = customData.dateStatus.concat(item.dateStatus);
        });

        const matchingPriceItem = price_list_1.find(item => item.dates === date);
        if (matchingPriceItem) {
          customData.price = matchingPriceItem.price;
        }

        const existingObjIndex = attributes.findIndex(obj => obj.dates.getTime() === new Date(date).getTime());
        if (existingObjIndex !== -1) {
          const existingObj = attributes[existingObjIndex];
          existingObj.customData.status = [...new Set([...existingObj.customData.status, ...customData.status])];
          existingObj.customData.dateStatus = [...new Set([...existingObj.customData.dateStatus, ...customData.dateStatus])];
          existingObj.customData.className = setClassName(existingObj.customData, date);
        } else {
          customData.className = setClassName(customData, date);
          attributes.push({ customData, dates: new Date(date) });
        }
      });

      price_list_1.forEach(item => {
        const exists = attributes.find(obj => obj.dates.getTime() === new Date(item.dates).getTime());
        if (!exists) {
          const customData = {
            price: item.price,
            status: [],
            dateStatus: [],
            className: {}
          };

          attributes.push({ customData, dates: new Date(item.dates) });
        }
      });

      this.attributes = attributes;
    },
    toggleFavorite() {
      if (this.isFavorite) {
        this.$store.dispatch('favorite/removeFavorite', this.villa.code)
      } else {
        this.$store.dispatch('favorite/addFavorite', this.villa.code)
      }
    },
    showGallery() {
      setTimeout(() => {
        document.querySelector('.Gallery').classList.add("show")
        document.querySelector('body').classList.add("over")
        document.querySelector('.main').classList.add("main-z")
      }, 50)
      this.galleryIsOpen = true
    },
    closeGallery() {
      setTimeout(() => {
        document.querySelector('.Gallery').classList.remove("show")
        document.querySelector('body').classList.remove("over")
        document.querySelector('.main').classList.remove("main-z")
      }, 50)
      this.galleryIsOpen = false
    },
    scrollGallery(event) {
      const el = this.$el.getElementsByClassName(event.currentTarget.id)[0];
      if (el) {
        el.scrollIntoView({ block: "start", behavior: 'smooth' });
      }
    },
    scrollItem(event) {
      const el = this.$el.getElementsByClassName(event.currentTarget.id)[0];
      if (el) {
        el.scrollIntoView({ block: "start", behavior: 'smooth' });
      }
    },
    scrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    onEscapeKeyUp(event) {
      if (event.which === 27) {
        document.querySelector('.Gallery').classList.remove("show")
        document.querySelector('body').classList.remove("over")
        document.querySelector('.main').classList.remove("main-z")
        this.galleryIsOpen = false
      }
    },
    moreMobileContentOpen() {
      this.moreMobileContent = !this.moreMobileContent
    },
    mobileAmenitesToggle() {
      this.mobileAmenites = !this.mobileAmenites
    },
    mobileOpportunityToggle() {
      this.mobileOpportunity = !this.mobileOpportunity
    },
    mobileLocationToggle() {
      this.mobileLocation = !this.mobileLocation
    },
    mobileBeachToggle() {
      this.mobileBeach = !this.mobileBeach
    },
    mobilePlaceToggle() {
      this.mobilePlace = !this.mobilePlace
    },
    mobilePolicyToggle() {
      this.mobilePolicy = !this.mobilePolicy
    },
    handleResize() {
      if (window.innerWidth <= 768) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
    locationMapOpen() {
      this.$bvModal.show('locationMapModal')
    },
    getAmeniteCount(ameniteId) {
      const amenite = this.villa.amenites[`amenite_${ameniteId}`];
      if (amenite && amenite.list && amenite.list.length > 0) {
        const countString = amenite.list[0].split(" ")[0];
        const count = parseInt(countString, 10);
        return count;
      }
      return 0;
    },
    noVillaVideo() {
      this.$toast.error("<p>Video bulunmamaktadır!</p>", {
        className: 'custom-toast error-toast',
        icon: {
          name: 'icon-play-button',
        },
        action: {
          icon: 'icon-toast-exit',
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          }
        }
      })
    }
  },
  watch: {
    galleryIsOpen() {
      window.addEventListener("keyup", this.onEscapeKeyUp);
    },
    isMobile() {
      if (this.isMobile == true) {
        this.calendarColumn = 1
      } else {
        this.calendarColumn = 2
      }
    },
    mobileAmenites() {
      if (this.mobileAmenites == true) {
        setTimeout(() => {
          document.querySelector('body').classList.add('detail-over')
          document.querySelector('html').classList.add('detail-over')
        }, 50)
      } else {
        setTimeout(() => {
          document.querySelector('body').classList.remove('detail-over')
          document.querySelector('html').classList.remove('detail-over')
        }, 50)
      }
    },
    mobileOpportunity() {
      if (this.mobileOpportunity == true) {
        setTimeout(() => {
          document.querySelector('body').classList.add('detail-over')
          document.querySelector('html').classList.add('detail-over')
        }, 50)
      } else {
        setTimeout(() => {
          document.querySelector('body').classList.remove('detail-over')
          document.querySelector('html').classList.remove('detail-over')
        }, 50)
      }
    },
    mobileLocation() {
      if (this.mobileLocation == true) {
        setTimeout(() => {
          document.querySelector('body').classList.add('detail-over')
          document.querySelector('html').classList.add('detail-over')
        }, 50)
      } else {
        setTimeout(() => {
          document.querySelector('body').classList.remove('detail-over')
          document.querySelector('html').classList.remove('detail-over')
        }, 50)
      }
    },
    mobilBeach() {
      if (this.mobileBeach == true) {
        setTimeout(() => {
          document.querySelector('body').classList.add('detail-over')
          document.querySelector('html').classList.add('detail-over')
        }, 50)
      } else {
        setTimeout(() => {
          document.querySelector('body').classList.remove('detail-over')
          document.querySelector('html').classList.remove('detail-over')
        }, 50)
      }
    },
    mobilPlace() {
      if (this.mobilePlace == true) {
        setTimeout(() => {
          document.querySelector('body').classList.add('detail-over')
          document.querySelector('html').classList.add('detail-over')
        }, 50)
      } else {
        setTimeout(() => {
          document.querySelector('body').classList.remove('detail-over')
          document.querySelector('html').classList.remove('detail-over')
        }, 50)
      }
    },
    mobilePolicy() {
      if (this.mobilePolicy == true) {
        setTimeout(() => {
          document.querySelector('body').classList.add('detail-over')
          document.querySelector('html').classList.add('detail-over')
        }, 50)
      } else {
        setTimeout(() => {
          document.querySelector('body').classList.remove('detail-over')
          document.querySelector('html').classList.remove('detail-over')
        }, 50)
      }
    },
  },
  beforeMount() {
    this.setAttributes();
  },
  async mounted() {
    console.log(JSON.stringify(this.villa.amenites));

    this.categories = this.filterObjectsByPrefix(this.villa.amenites, 'amenite_2')
    console.log(this.categories);

    const places = {
      beaches: [],
      locations: [],
      health: [],
      restaurant: [],
      market: [],
      transport: []
    };

    const placeTypeMapping = {
      4: 'beaches',
      9: 'locations',
      3: 'health',
      1: 'restaurant',
      10: 'market',
      11: 'market',
      6: 'transport',
      7: 'transport'
    };

    if (this.villa && this.villa.places) {
      for (const key in this.villa.places) {
        const placeType = this.villa.places[key];

        if (placeType) {
          const placeTypeId = parseInt(placeType.place_type_id);
          const mappedType = placeTypeMapping[placeTypeId];

          if (mappedType) {
            places[mappedType] = [
              ...places[mappedType],
              ...(placeType.place ?? [])
            ];
          }
        }
      }
    }

    this.places = places;

    try {
      const response = await this.$axios.post(`/website/property/month-prices?api_token=${process.env.WEBSITE_TOKEN}`, {
        "code": this.villa.code,
        "pricelist_id": process.env.PRICELIST_ID
      })
      this.monthlyPrices = response.data
      this.lowestPrice = Math.min(...this.monthlyPrices.map(price => price.lowest_price));
    } catch (e) { }

    console.log(places)

    this.$nextTick(() => {
      Swiper.use([Navigation, Pagination])

      const swiper = new Swiper('.swiper-months', {
        slidesPerView: 4,
        spaceBetween: 18,
        breakpoints: {
          200: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 18,
          },
          1199: {
            slidesPerView: 6,
            spaceBetween: 18,
          },
        },
      })
      const swiperFloorplan = new Swiper('.swiper-floorplan', {
        slidesPerView: 1,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".floorplan-navigation-next",
          prevEl: ".floorplan-navigation-prev",
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
            spaceBetween: 17,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 17,
          }
        },
      })

      this.$el.addEventListener('click', function (e) {
        if (e.target.closest('.dropdown-menu')) {
          e.stopPropagation();
        }
      });
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
      const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

      setTimeout(() => {
        document.querySelector('.Header').classList.add('villa-detay')
        document.querySelector('.Footer-mobile').classList.add('villa-detay')
        document.querySelector('body').classList.add('villa-detay')
      }, 50)
      const sections = document.querySelectorAll(".view-menu-content-item");
      const navLi = document.querySelectorAll(".View-menu-item");

      window.onscroll = function () {
        try {
          scrollFunction()
          var current = "";

          sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 180) {
              current = section.getAttribute("id");
            }

          });

          navLi.forEach((li) => {
            li.classList.remove("active");
            if (li.classList.contains(current)) {
              li.classList.add("active");
            }
          });
          if (scrollY >= document.querySelector('#more-villas').offsetTop - 400) {
            document.querySelector('#reservationForm').classList.remove('custom-fixed-reservation')
          } else {

          }
        } catch (e) {

        }
      };

      function scrollFunction() {
        try {
          if (document.body.scrollTop > 151 || document.documentElement.scrollTop > 151) {
            document.getElementById("detailTop").classList.add('custom-fixed')
            document.getElementById("detailMenu").classList.add('custom-fixed', 'custom-fixed-menu')
            document.querySelector(".View").classList.add('View-top')
            document.querySelector("body").classList.add('body-fixed')
            document.querySelector('.share-btn').classList.add('d-none')
            document.querySelector('.up-button').classList.remove('d-none')
          } else {
            document.getElementById("detailTop").classList.remove('custom-fixed')
            document.getElementById("detailMenu").classList.remove('custom-fixed', 'custom-fixed-menu')
            document.querySelector(".View").classList.remove('View-top')
            document.querySelector("body").classList.remove('body-fixed')
            document.querySelector('.share-btn').classList.remove('d-none')
            document.querySelector('.up-button').classList.add('d-none')
          }
          if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById("reservationForm").classList.add('custom-fixed-reservation')
            document.querySelector(".View-right-opportunity").classList.add('opacity-0')

          } else {
            document.getElementById("reservationForm").classList.remove('custom-fixed-reservation')
            document.querySelector(".View-right-opportunity").classList.remove('opacity-0')
          }

        } catch (error) {
          // console.error('scrollFunction hatası:', error);
        }

      }

      if (this.attributes.length === 0) {
        setTimeout(() => {
          this.$bvModal.show('closeVillaModal')
        }, 50)
      }
      window.addEventListener("load", this.handleResize());
      window.addEventListener("resize", this.handleResize());

      console.log(this.villa)
    })
  },
  computed: {
    opportunityBoxComponent() {
      return opportunityBoxComponent
    },
    isFavorite() {
      return this.$store.state.favorite.favorites.includes(this.villa.code)
    },
    disableDate() {
      const disableDate = [];
      this.calendar.forEach(item => {
        if (item.status[0] == 2) {
          disableDate.push(item.dates[0])
        }
      });
      return disableDate;
    },
    singleBed() {
      return this.getAmeniteCount(503)
    },
    doubleBed() {
      return this.getAmeniteCount(504)
    },
    jacuziNum() {
      return this.getAmeniteCount(505)
    },


  }

}
</script>

<style scoped>
.swiper-overflow {
  overflow: hidden;
}

#mapContainer {
  width: 300px;
  height: 300px;
}

:deep() .modal-backdrop {
  opacity: 0.3;
}

.modal-body {
  padding: 0;
}

.modal-open {
  overflow: hidden;
}

@media (min-width: 992px) {

  .modal-lg,
  .modal-xl {
    max-width: 90%;
  }
}

@media (min-width: 576px) {

  .modal-lg,
  .modal-xl {
    max-width: 90%;
  }
}

@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1140px;
  }
}</style>
