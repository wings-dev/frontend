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
                  <p class="view-top-right-location">FETHİYE<span class="lh-sm">Turkey / Muğla</span></p>
                </div>
                <div class="view-top-right-price">
                  <span>GECELİK</span>
                  <p>7500 <span>₺</span></p>
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
                <button type="button"
                  class="action-btn share-btn fs-7 ls-05 text-theme-secondary bg-transparent p-0 d-flex align-items-center">
                  <span class="action-btn-icon">
                    <i class="icon-share"></i>
                  </span>
                  <span class="action-btn-text">Arkadaşın ile Paylaş</span>
                </button>
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
      <div class="container pb-1">
        <div class="view-gallery">
          <div class="area-1">
            <a href="#" @click.prevent="showGallery()"
              class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
              <!-- <img :src="villa.watermark_images[0].preview_url" :srcset="villa.watermark_images[0].responsive"
                 alt="view-image" class="lazy cover rounded-xl w-100 h-100"> -->
              <nuxt-img :src="villa.watermark_images[0].preview_url" :srcset="villa.watermark_images[0].responsive"
                width="585" height="387" sizes="sm:100vw md:50vw lg:585px" />

            </a>
          </div>
          <div class="area-2 d-md-block d-none">
            <a href="#" @click.prevent="showGallery()"
              class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
              <nuxt-img :src="villa.watermark_images[1].preview_url" :srcset="villa.watermark_images[1].responsive"
                width="284" height="187" sizes="sm:100vw md:50vw lg:284px" />

            </a>
          </div>
          <div class="area-3 d-md-block d-none">
            <a href="#" @click.prevent="showGallery()"
              class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
              <nuxt-img :src="villa.watermark_images[2].preview_url" :srcset="villa.watermark_images[2].responsive"
                width="284" height="187" sizes="sm:100vw md:50vw lg:284px" />

            </a>
          </div>
          <div class="area-4 d-none d-lg-block">
            <a href="#" @click.prevent="showGallery()"
              class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
              <nuxt-img :src="villa.watermark_images[3].preview_url" :srcset="villa.watermark_images[3].responsive"
                width="284" height="187" sizes="sm:100vw md:50vw lg:284px" />

            </a>
          </div>
          <div class="area-5 d-none d-lg-block">
            <div class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl last">
              <nuxt-img :src="villa.watermark_images[4].preview_url" :srcset="villa.watermark_images[4].responsive"
                width="284" height="187" sizes="sm:100vw md:50vw lg:284px" />
              <div
                class="hover-box position-absolute top-0 start-0 w-100 h-100 bg-theme-first-dark text-white fs-6 bg-opacity-75 d-flex align-items-center justify-content-center px-2 fw-medium ls-05 d-flex flex-column">
                <span @click.prevent="showGallery()">Tüm Fotoğraflar ( 32 ) </span>
                <!-- <button type="button" @click.prevent="test()">Video İzle</button> -->
                <a href="https://www.youtube.com/watch?v=5SMaakuGyH0" data-fancybox>
                  <i class="icon-play-button"></i> Video İzle
                </a>
                <!-- https://www.youtube.com/watch?v=5SMaakuGyH0 -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="View">
      <div class="container">
        <div class="View-in">
          <div class="View-left">
            <div class="View-desc genelbakis view-menu-content-item" id="desc-content">
              <h2 class="View-title">Tesise Genel Bakış</h2>
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
              <div class="View-desc-category">
                <h6>Tesisin Bulunduğu Kategoriler</h6>
                <div class="View-desc-category-in">
                  <span>Balayı Villaları</span>
                  <span>Deniz Manzaralı</span>
                  <span>Havuz Alanı Korunaklı</span>
                </div>
              </div>
              <div class="View-desc-amenites">
                <h4>Tesisin Öne Çıkan Olanakları</h4>
                <div class="View-desc-amenites-in">
                  <p>Jakuzi</p>
                  <p>Jakuzi</p>
                  <p>Bilardo Masası</p>
                  <p>Barbekü / Mangal Alanı</p>
                  <p>Barbekü / Mangal Alanı</p>
                </div>
                <b-button v-b-modal.amenitesModal class="View-desc-amenites-more">Tüm Olanaklar</b-button>

              </div>
            </div>

            <div class="View-months">
              <h2 class="View-title">Aylara Göre Genel Bakış</h2>
              <p class="View-text">
                Fiyatlar belirtilen ay için belirlenmiş en düşük gecelik ücrettir. Ay içerisinde farklı fiyatlandırmalar
                mümkündür.
              </p>

              <div class="swiper swiper-months swiper-overflow mt-4">
                <div class="swiper-wrapper">
                  <div class="swiper-slide disabled">
                    <div class="View-months-item ">
                      <div class="View-months-item-title">
                        <h5>MAYIS </h5>
                      </div>
                      <div class="View-months-item-in">
                        <div class="View-months-item-price">
                          <b>-</b>
                          <small>başlayan gecelik fiyatlarla</small>
                        </div>
                        <div class="View-months-item-days">
                          <p>EN AZ KONAKLAMA</p>
                          <b>2 GECE <i class="icon-information" data-bs-toggle="tooltip" data-bs-placement="right"
                              title="Tooltip on right"></i></b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide disabled">
                    <div class="View-months-item ">
                      <div class="View-months-item-title">
                        <h5>MAYIS </h5>
                      </div>
                      <div class="View-months-item-in">
                        <div class="View-months-item-price">
                          <b>-</b>
                          <small>başlayan gecelik fiyatlarla</small>
                        </div>
                        <div class="View-months-item-days">
                          <p>EN AZ KONAKLAMA</p>
                          <b>2 GECE <i class="icon-information" data-bs-toggle="tooltip" data-bs-placement="right"
                              title="Tooltip on right"></i></b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide disabled">
                    <div class="View-months-item ">
                      <div class="View-months-item-title">
                        <h5>MAYIS </h5>
                      </div>
                      <div class="View-months-item-in">
                        <div class="View-months-item-price">
                          <b>-</b>
                          <small>başlayan gecelik fiyatlarla</small>
                        </div>
                        <div class="View-months-item-days">
                          <p>EN AZ KONAKLAMA</p>
                          <b>2 GECE <i class="icon-information" data-bs-toggle="tooltip" data-bs-placement="right"
                              title="Tooltip on right"></i></b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="View-months-item">
                      <div class="View-months-item-title">
                        <h5>MAYIS </h5>
                      </div>
                      <div class="View-months-item-in">
                        <div class="View-months-item-price">
                          <b>3500₺</b>
                          <small>başlayan gecelik fiyatlarla</small>
                        </div>
                        <div class="View-months-item-days">
                          <p>EN AZ KONAKLAMA</p>
                          <b>2 GECE <i class="icon-information" data-bs-toggle="tooltip" data-bs-placement="right"
                              title="Tooltip on right"></i></b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="View-months-item">
                      <div class="View-months-item-title">
                        <h5>MAYIS </h5>
                      </div>
                      <div class="View-months-item-in">
                        <div class="View-months-item-price">
                          <b>3500₺</b>
                          <small>başlayan gecelik fiyatlarla</small>
                        </div>
                        <div class="View-months-item-days">
                          <p>EN AZ KONAKLAMA</p>
                          <b>2 GECE <i class="icon-information" data-bs-toggle="tooltip" data-bs-placement="right"
                              title="Tooltip on right"></i></b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="View-months-item">
                      <div class="View-months-item-title">
                        <h5>MAYIS </h5>
                      </div>
                      <div class="View-months-item-in">
                        <div class="View-months-item-price">
                          <b>3500₺</b>
                          <small>başlayan gecelik fiyatlarla</small>
                        </div>
                        <div class="View-months-item-days">
                          <p>EN AZ KONAKLAMA</p>
                          <b>2 GECE <i class="icon-information" data-bs-toggle="tooltip" data-bs-placement="right"
                              title="Tooltip on right"></i></b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="View-availibility musaitlik view-menu-content-item" id="availibility-content">
              <h2 class="View-title">Musaitlik ve Fiyat Bilgisi</h2>
              <p class="View-text">
                Aşağıda belirtilen fiyatlar tesisin 1 gecelik konaklama ücretidir. Dönemlere göre konaklama süresine
                göre ekstra temizlik ücreti eklenebilmektedir.
              </p>
              <client-only>
                <v-calendar class="custom-calendar mt-4" :attributes="attributes" :columns="2"
                  :disabled-dates="disabledDates" disable-page-swipe :step="1">
                  <template v-slot:day-content="{ day, attributes }">
                    <div v-for="(attr, index) in attributes" :key="index"
                      class="d-flex flex-column align-items-center justify-content-start h-100 z-10 overflow-hidden w-100 calendar-cell"
                      :class="attr?.customData?.className">
                      <span class="day-label text-sm fw-bold text-gray-900">{{ day.day }}</span>
                      <div class="flex-grow overflow-y-auto overflow-x-auto">
                        <p class="calendar-price" style="" :class="attr.customData.class">
                          {{ !attr.customData.status.includes(2) ? attr.customData.price : '' }}
                        </p>
                      </div>
                    </div>
                  </template>
                </v-calendar>

              </client-only>
              <div class="View-availibility-legand">
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
            <div class="View-beds">
              <h2 class="View-title">Yatak ve Kişi Kapasitesi</h2>
              <div class="View-beds-in">
                <div class="View-beds-item double">
                  <i class="icon-bed"></i>
                  <p class="View-beds-item-name">Çift Kişilik Yatak</p>
                  <div class="View-beds-item-total">
                    <p>1</p>
                    <span>adet</span>
                  </div>
                </div>
                <div class="View-beds-item single">
                  <i class="icon-bed"></i>
                  <p class="View-beds-item-name">Tek Kişilik Yatak</p>
                  <div class="View-beds-item-total">
                    <p>1</p>
                    <span>adet</span>
                  </div>
                </div>
                <div class="View-beds-item capacity">
                  <i class="icon-user"></i>
                  <p class="View-beds-item-name">Kapasite</p>
                  <div class="View-beds-item-total">
                    <p>4</p>
                    <span>kişilik</span>
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
                                <span style="margin-right: 5px;" v-for="(ozellik, index3) in bolum.donanim" :key="index3">{{
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
                <h4 class="View-title">
                  Havuz Bilgisi
                </h4>
                <div class="View-pools-head-right">
                  <span>En</span>
                  <span>Boy</span>
                  <span>Yükseklik</span>
                </div>
              </div>

              <div class="pool-item mb-3" v-for="(poolitem, index) in villa.floorplan.pool" :key="index">
                <div class="pool-item-left">
                  <img src="/uploads/003-swimming-pool.svg" width="28" height="28" alt="pool icon" class="lazy contain"
                    v-if="poolitem.pool == 52">
                  <img src="/uploads/005-swimming-pool.svg" width="28" height="28" alt="pool icon" class="lazy contain"
                    v-if="poolitem.pool == 58">
                  <!-- <img src="/uploads/002-watch-your-children.svg" width="28" height="28" alt="pool icon" -->
                  <span class="">{{ poolitem.name }}</span>
                </div>
                <div class="pool-item-right">
                  <span>{{ poolitem['havuz-en'] }}m</span>
                  <span>{{ poolitem['havuz-boy'] }}m</span>
                  <span>{{ poolitem['havuz-derinlik'] }}m</span>
                </div>

              </div>

            </div>
            <div class="View-location location view-menu-content-item" id="location-content">
              <div class="View-location-head mb-3">
                <h4 class="View-title">
                  Konum
                </h4>
                <p class="View-text">Yakınında Neler Var </p>

              </div>



              <div class="View-location-in">
                <div class="View-location-left d-none">
                  <div class="View-location-item" v-for="(place, index) in villa.places" :key="index">
                    <p>{{ index.substr(6) }} -) {{ place.place_type }}</p>
                    <span>7 Km</span>
                  </div>
                  <!-- <div class="View-location-item">
                                      <p>2 -) Süper Market</p>
                                      <span>1 Km</span>
                                    </div>
                                    <div class="View-location-item">
                                      <p>3 -) Restaurant</p>
                                      <span>17 Km</span>
                                    </div>
                                    <div class="View-location-item">
                                      <p>4 -) Müze Kayaköy</p>
                                      <span>5 Km</span>
                                    </div>
                                    <div class="View-location-item">
                                      <p>4 -) Müze Kayaköy</p>
                                      <span>3 Km</span>
                                    </div> -->
                </div>
                <div class="View-location-right w-100">
                  <div id="map-wrap" style="height: 400px;">
                    <client-only>
                      <l-map :zoom=13 :center="center" :maxZoom=16>
                        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                        <l-marker :lat-lng="center">
                          <l-icon iconUrl="img/map-center.svg" :iconSize=iconSize></l-icon>
                        </l-marker>
                        <!-- <l-marker v-for="(marker, index) in markers" :key="index" :lat-lng="marker">
                        <l-popup>
                          <div >
                            Tooltip {{index}}
                          </div>
                        </l-popup>
                    </l-marker> -->

                      </l-map>
                    </client-only>
                  </div>
                </div>
              </div>
            </div>
            <div class="View-reviews comments view-menu-content-item" id="reviews-content">
              <div class="View-reviews-head">
                <h4 class="View-title">Tesis Değerlendirmesi</h4>
                <div class="View-reviews-head-stars">
                  <span>4.4</span>
                  <i class="icon-star active"></i>
                  <i class="icon-star active"></i>
                  <i class="icon-star active"></i>
                  <i class="icon-star"></i>
                </div>
              </div>
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
            <div class="View-info rules view-menu-content-item" id="rules-content">
              <div class="View-info-in">
                <h4 class="View-title">Bilmeniz Gerekenler</h4>
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
                    </div>
                  </div>
                </div>
                <div class="View-info-rules">
                  <h5>Tesis Kuralları</h5>
                  <div class="View-info-rules-item">
                    <img src="/img/no-pets.svg" alt="">
                    <p>Evcil Hayvan Giremez</p>
                  </div>
                  <div class="View-info-rules-item">
                    <img src="/img/no-smoking.svg" alt="">
                    <p>Sigara İçilemez</p>
                  </div>
                  <div class="View-info-rules-item">
                    <img src="/img/no-party.svg" alt="">
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
                <div class="View-info-warning">
                  <i class="icon-warning"></i>
                  <div class="View-info-warning-text">
                    <h6>Dikkat Edilmesi Gereken Hususlar</h6>
                    <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi yemeklerinizi
                      pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="View-faq sss view-menu-content-item" id="sss-content">
              <h4 class="View-title">Sıkça Sorulan Sorular</h4>
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

          </div>
          <div class="View-right Reservation">

            <reservation-form :property-code="villa.code" :disable-reservation="disableDate"></reservation-form>

            <div class="View-right-opportunity">
              <h4>Kısa Süreli Fırsatlar</h4>

              <div class="swiper swiper-opportunity swiper-overflow">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(item, index) in 4" :key="index">
                    <div class="View-right-opportunity-item">
                      <div class="View-right-opportunity-item-night">
                        <span>4</span>
                        <p>GECE</p>
                      </div>
                      <p class="View-right-opportunity-item-date">29 ARALIK - 1 OCAK</p>
                      <div class="View-right-opportunity-item-price">
                        <b>9.220₺</b>
                        <small>fiyatlara her şey dahildir.</small>
                      </div>
                    </div>
                    <div class="View-right-opportunity-item">
                      <div class="View-right-opportunity-item-night">
                        <span>4</span>
                        <p>GECE</p>
                      </div>
                      <p class="View-right-opportunity-item-date">29 ARALIK - 1 OCAK</p>
                      <div class="View-right-opportunity-item-price">
                        <b>9.220₺</b>
                        <small>fiyatlara her şey dahildir.</small>
                      </div>
                    </div>
                    <div class="View-right-opportunity-item">
                      <div class="View-right-opportunity-item-night">
                        <span>4</span>
                        <p>GECE</p>
                      </div>
                      <p class="View-right-opportunity-item-date">29 ARALIK - 1 OCAK</p>
                      <div class="View-right-opportunity-item-price">
                        <b>9.220₺</b>
                        <small>fiyatlara her şey dahildir.</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <section class="popular-section bg-white overflow-hidden pb-sm-5 mt-4" id="more-villas">
      <div class="container ">
        <div class="section-caption d-flex align-items-center mb-3 pb-1">
          <h4 class="primary-title fw-medium ls-05 lh-1">Bu bölgedeki Yakın Tesisler</h4>
        </div>
        <div class="swiper popular list-slide list-slide-first list-wrapper scroll-wrapper mb-3 mb-sm-4 pb-1">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in 10">
              <div class="list-item rounded-xxl">
                <div class="list-image position-relative">
                  <a href="#!" class="d-block flex-shrink-0">
                    <img src="/uploads/villa-image1.jpg" data-src="." width="280" height="186" alt="hotel image"
                      class="main-image bg-light lazy cover rounded-xl w-100">
                  </a>
                  <div class="position-absolute top-0 end-0 pt-3 mt-1 pe-3">
                    <a href="javascript:void(0);"
                      class="fav-btn rounded-circle d-flex align-items-center justify-content-center p-0"
                      onclick="$(this).toggleClass('active')">
                      <i class="icon-heart"></i>
                      <i class="icon-heart-full"></i>

                    </a>
                  </div>
                </div>
                <div class="list-content ps-3 pe-3 pt-2 pb-3">
                  <div class="d-flex justify-content-between  mb-2 pb-1">
                    <div class="d-flex align-items-end">
                      <div class="d-flex flex-column item-name">
                        <small>Tesis Kodu</small>
                        <span class="list-title fs-6 lh-sm fw-medium ls-05 d-block me-2">VKV1020</span>
                      </div>
                      <div class="d-flex align-items-center fw-medium text-theme-secondary">
                        <i class="icon-star"></i>
                        <span>4,9</span>
                      </div>
                    </div>
                    <div class="item-location d-flex align-items-center text-theme-secondary">
                      <i class="icon-pin"></i>
                      <span class="lh-sm d-flex flex-column"><b class="text-theme-first">KALKAN</b>Türkiye /
                        Antalya</span>
                    </div>
                  </div>
                  <div class="item-infos row gx-2 pe-1 pb-2 d-flex">
                    <div class="info  d-flex align-items-center rounded-sm">
                      <i class="icon-user"></i>
                      <span class="lh-sm text-theme-first text-sm">4 Kişilik</span>
                    </div>
                    <div class="info  d-flex align-items-center rounded-sm">
                      <i class="icon-shower"></i>
                      <span class="lh-sm text-theme-first text-sm">2 Yatak Odası</span>
                    </div>
                    <div class="info  d-flex align-items-center rounded-sm">
                      <i class="icon-bed"></i>
                      <span class="lh-sm text-theme-first text-sm">2 Banyo</span>
                    </div>
                  </div>
                  <div class="lh-sm ls-05 mt-1">
                    <span class="text-secondary list-item-info">Gecelik <strong
                        class="text-theme-second fs-5-5 fw-medium">11.526 TL</strong> başlayan
                      fiyatlarla</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- If pagination is needed -->

          <!-- If navigation buttons are needed -->
          <div class="swiper-button-prev list-navigation-prev"></div>
          <div class="swiper-button-next list-navigation-next"></div>
        </div>

      </div>
    </section>

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

    <b-modal id="amenitesModal" class="Login" size="xl" :hide-header="true" hide-footer>
      <div class="Amenites">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
          @click="$bvModal.hide('amenitesModal')"><i class="icon-login-close"></i></button>

        <h3 class="Amenites-title">Tesisin tüm olanakları</h3>
        <div class="Amenites-in">
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
    </b-modal>

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
export default {
  name: 'DynamicDetailPage',
  props: ['villa', 'calendar', 'price_list_1'],
  // props: ['villa', 'calendar', 'price_list_1'],
  components: {
    Swiper,
    HotelDatePicker,
    CloseVillaModal
  },
  data() {
    return {
      attributes: [],
      galleryIsOpen: false,
      modalIsOpen: false,
      villa_prefix: process.env.PREFIX,
      date: null,
      disableReservation: ['2023-03-20', '2023-03-21', '2023-03-22', '2023-03-23', '2023-03-24', '2023-03-25', '2023-03-26', '2023-03-27'],
      disabledDates: [
        // { start: null, end: new Date() },
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

    }
  },
  methods: {
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
            ? { "kapali-cikis-to-opsiyon-giris" : true}
            : { "opsiyon-cikis-to-kapali-giris" : true };
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
      document.querySelector('.Gallery').classList.add("show")
      document.querySelector('body').classList.add("over")
      document.querySelector('.main').classList.add("main-z")
      this.galleryIsOpen = true
    },
    closeGallery() {
      document.querySelector('.Gallery').classList.remove("show")
      document.querySelector('body').classList.remove("over")
      document.querySelector('.main').classList.remove("main-z")
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

  },
  watch: {
    galleryIsOpen() {
      window.addEventListener("keyup", this.onEscapeKeyUp);
    }
  },
  beforeMount() {
    this.setAttributes();
  },
  mounted() {
    Swiper.use([Navigation, Pagination])

    const swiper = new Swiper('.swiper-months', {
      slidesPerView: 4,
      spaceBetween: 18,
      breakpoints: {
        200: {
          slidesPerView: 2.2,
          spaceBetween: 18,
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
    const swiperOpportunity = new Swiper('.swiper-opportunity', {
      slidesPerView: 1,
      spaceBetween: 18,
      pagination: {
        el: ".swiper-pagination",
      },
    })

    const swiperMore = new Swiper('.list-slide-first', {
      slidesPerView: 1.1,
      spaceBetween: 18,
      direction: 'horizontal',
      loop: true,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        1199: {
          slidesPerView: 4,
          spaceBetween: 18,
        },
      },
    })

    this.$el.addEventListener('click', function (e) {
      if (e.target.closest('.dropdown-menu')) {
        e.stopPropagation();
      }
    });
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    document.querySelector('.Header').classList.add('villa-detay')
    document.querySelector('body').classList.add('villa-detay')

    const sections = document.querySelectorAll(".view-menu-content-item");
    const navLi = document.querySelectorAll(".View-menu-item");

    window.onscroll = function () {
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


      if (scrollY >= document.querySelector('#more-villas').offsetTop - 500) {
        document.querySelector('#reservationForm').classList.remove('custom-fixed-reservation')
      } else {

      }
    };

    function scrollFunction() {
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
    }

    if (this.attributes.length === 0) {
      setTimeout(() => {
        this.$bvModal.show('closeVillaModal')
      }, 50)
    }
  },
  computed: {
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
    }

  }

}
</script>

<style scoped>

.vc-container {
  --gray-500: #A6AFC2 !important;
  --gray-900: var(--bs-theme-first-dark) !important;
  border: none !important;
  position: relative;
  z-index: 1;
  width: 100% !important;
}

.vc-container:before {
  content: "";
  display: inline-block;
  width: 100%;
  height: 48px;
  background-color: #F2F5FB;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}

:deep() .vc-day {
  min-width: 48px !important;
  min-height: 48px !important;
}

:deep() .vc-weeks{
  margin-top: 30px;
}
.opsiyon {
  background-image: linear-gradient(to bottom, #FFF8E7, #FFF8E7);
}

.opsiyon-giris {
  background-image: linear-gradient(to top left, #FFF8E7 0%, #FFF8E7 50%, transparent 50%, transparent 100%);
}

.opsiyon-cikis {
  background-image: linear-gradient(to bottom right, #FFF8E7 0%, #FFF8E7 50%, transparent 50%, transparent 100%);
}


.kapali {
  background-image: linear-gradient(to bottom, #F2F5FB, #F2F5FB);
}

.kapali-giris {
  background-image: linear-gradient(to top left, #F2F5FB 0%, #F2F5FB 50%, transparent 50%, transparent 100%);
}

.kapali-cikis {
  background-image: linear-gradient(to bottom right, #F2F5FB 0%, #F2F5FB 50%, transparent 50%, transparent 100%);
}

.kapali-cikis-to-opsiyon-giris {
  background-image: linear-gradient(to top left, #FFF8E7 0%, #FFF8E7 50%, transparent 50%, transparent 100%), linear-gradient(to bottom right, #F2F5FB 0%, #F2F5FB 50%, transparent 50%, transparent 100%);
}

.opsiyon-cikis-to-kapali-giris {
  background-image: linear-gradient(to bottom right, #FFF8E7 0%, #FFF8E7 50%, transparent 50%, transparent 100%), linear-gradient(to top left, #F2F5FB 0%, #F2F5FB 50%, transparent 50%, transparent 100%);
}


/* OPSIYON END */


/* KAPALI START  */


/* OPSIYON END  */

.cikis-kapali {
  background-color: transparent;
}

.cikis-kapali:before {
  content: "";
  display: inline-block;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(318deg, #F2F5FB 49%, transparent 50%), linear-gradient(138deg, #FFF8E7 49%, transparent 50%);
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}

.cikis-kapali:after {
  display: none;
}

.cikis-opsiyon:before {
  content: "";
  display: inline-block;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(315deg, #f3f3ff 49%, transparent 50%);
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}

.doubleday:after {
  content: "";
  display: inline-block;
  width: 100%;
  height: 100%;

  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}


.calendar-price {
  font-weight: 400;
  font-size: 11px;
  color: #989FB5;
  margin-bottom: 0;
}

.swiper-overflow {
  overflow: hidden;
}

#mapContainer {
  width: 300px;
  height: 300px;
}

.day-label {
  margin-top: 5px;
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
}
</style>
