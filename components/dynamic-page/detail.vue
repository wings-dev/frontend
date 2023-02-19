<template>
  <div>
    <section class="view-detail-section">
      <div class="detail-top bg-theme-first-dark" id="detailTop">
        <div class="container">
          <div class="view-top d-flex">

            <div class="view-top-title">
              <h1><span>Tesis Kodu</span>VKV1020</h1>
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
              <a id="genelbakis" class="View-menu-item active" @click.prevent="scrollItem($event)">Genel bakış</a>
              <a id="musaitlik" class="View-menu-item" @click.prevent="scrollItem($event)">Müsaitlik ve Takvim Fiyatı</a>
              <a id="sss" class="View-menu-item" @click.prevent="scrollItem($event)">S.S.S.</a>
              <a id="comments" class="View-menu-item" @click.prevent="scrollItem($event)">Yorumlar</a>
              <a id="rules" class="View-menu-item" @click.prevent="scrollItem($event)">Bilmeniz Gerekenler</a>
            </div>
            <div class="View-menu-right">
              <button type="button"
                class="action-btn fav-btn w-auto h-auto fs-7 ls-05 text-theme-secondary bg-transparent p-0 d-flex align-items-center me-4">
                <span class="action-btn-icon">
                  <i class="icon-heart"></i>
                </span>
                <span class="action-btn-text">Favorilere Ekle</span>
              </button>
              <button type="button"
                class="action-btn share-btn fs-7 ls-05 text-theme-secondary bg-transparent p-0 d-flex align-items-center">
                <span class="action-btn-icon">
                  <i class="icon-share"></i>
                </span>
                <span class="action-btn-text">Arkadaşın ile Paylaş</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container pb-1">
        <div class="view-gallery">
          <div class="area-1">
            <a href="#" @click.prevent="showGallery()" class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
              <img :src="villa.watermark_images[0].original_url" width="585" height="387" alt="view-image"
                class="lazy cover rounded-xl w-100 h-100">
              <div
                class="hover-box position-absolute top-0 start-0 w-100 h-100 bg-theme-first-dark text-white fs-6 bg-opacity-75 d-flex align-items-center justify-content-center px-2 fw-medium ls-05">
                <span>Tüm Fotoğraflar ( 32 )  </span>
              </div>
            </a>
          </div>
          <div class="area-2 d-md-block d-none">
            <a href="#" @click.prevent="showGallery()"
              class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
              <img :src="villa.watermark_images[1].original_url" width="585" height="387" alt="view-image"
                class="lazy cover rounded-xl w-100 h-100">
              <div
                class="hover-box position-absolute top-0 start-0 w-100 h-100 bg-theme-first-dark text-white fs-6 bg-opacity-75 d-flex align-items-center justify-content-center px-2 fw-medium ls-05">
                <span>Tüm Fotoğraflar ( 32 ) </span>
              </div>
            </a>
          </div>
          <div class="area-3 d-md-block d-none">
            <a href="#" @click.prevent="showGallery()"
              class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
              <img :src="villa.watermark_images[2].original_url" width="585" height="387" alt="view-image"
                class="lazy cover rounded-xl w-100 h-100">
              <div
                class="hover-box position-absolute top-0 start-0 w-100 h-100 bg-theme-first-dark text-white fs-6 bg-opacity-75 d-flex align-items-center justify-content-center px-2 fw-medium ls-05">
                <span>Tüm Fotoğraflar ( 32 ) </span>
              </div>
            </a>
          </div>
          <div class="area-4 d-none d-lg-block">
            <a href="#" @click.prevent="showGallery()"
              class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
              <img :src="villa.watermark_images[3].original_url" width="585" height="387" alt="view-image"
                class="lazy cover rounded-xl w-100 h-100">
              <div
                class="hover-box position-absolute top-0 start-0 w-100 h-100 bg-theme-first-dark text-white fs-6 bg-opacity-75 d-flex align-items-center justify-content-center px-2 fw-medium ls-05">
                <span>Tüm Fotoğraflar ( 32 ) </span>
              </div>
            </a>
          </div>
          <div class="area-5 d-none d-lg-block">
            <a href="#" @click.prevent="showGallery()"
              class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
              <img :src="villa.watermark_images[4].original_url" width="585" height="387" alt="view-image"
                class="lazy cover rounded-xl w-100 h-100">
              <div
                class="hover-box position-absolute top-0 start-0 w-100 h-100 bg-theme-first-dark text-white fs-6 bg-opacity-75 d-flex align-items-center justify-content-center px-2 fw-medium ls-05">
                <span>Tüm Fotoğraflar ( 32 ) </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="View">
      <div class="container">
        <div class="View-in">
          <div class="View-left">
            <div class="View-desc genelbakis">
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
                <button type="button" class="View-desc-amenites-more">Tüm Olanaklar</button>
              </div>
            </div>
            <div class="View-months">
              <h2 class="View-title">Aylara Göre Genel Bakış</h2>
              <p class="View-text">
                Fiyatlar belirtilen ay için belirlenmiş en düşük gecelik ücrettir. Ay içerisinde farklı fiyatlandırmalar
                mümkündür.
              </p>
              <swiper class="" :options="swiperOptionsMonths">
                <div class="swiper-slide">
                  <div class="View-months-item disabled">
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
                        <b>2 GECE <i class="icon-information"></i></b>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="View-months-item disabled">
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
                        <b>2 GECE <i class="icon-information"></i></b>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="View-months-item disabled">
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
                        <b>2 GECE <i class="icon-information"></i></b>
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
                        <b>2 GECE <i class="icon-information"></i></b>
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
                        <b>2 GECE <i class="icon-information"></i></b>
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
                        <b>2 GECE <i class="icon-information"></i></b>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper>
            </div>
            <div class="View-availibility musaitlik">
              <h2 class="View-title">Musaitlik ve Fiyat Bilgisi</h2>
              <p class="View-text">
                Aşağıda belirtilen fiyatlar tesisin 1 gecelik konaklama ücretidir. Dönemlere göre konaklama süresine
                göre ekstra temizlik ücreti eklenebilmektedir.
              </p>
              <client-only>
                <v-calendar class="custom-calendar" :attributes="attributes" :columns="2"
                  :disabled-dates="disabledDates" disable-page-swipe >
                  <template v-slot:day-content="{ day, attributes }">
                    <div v-for="attr in attributes" :key="attr.key"
                      class="d-flex flex-column kapali-gun align-items-center justify-content-center h-100 z-10 overflow-hidden"
                      :class="{ giris: attr.customData.start, cikis: attr.customData.end, opsiyon: attr.customData.opsiyon }">
                      <span class="day-label text-sm fw-bold text-gray-900">{{ day.day }}</span>
                      <div class="flex-grow overflow-y-auto overflow-x-auto">
                        <p class="calendar-price" style="" :class="attr.customData.class">
                          {{ attr.customData.title }}
                        </p>
                      </div>
                      <!-- A6AFC2 -->
                      <!-- 989FB5 -->
                    </div>
                  </template>
                </v-calendar>

              </client-only>
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
            <div class="View-rooms rooms-section position-relative">
              <div
                class="rooms-caption d-flex flex-column flex-sm-row align-items-sm-center flex-wrap mb-3 mb-sm-4 pb-1">
                <h4 class="View-title me-4 pe-2">
                  Kat Planı
                </h4>
                <ul class="nav nav-pills me-auto" id="room-tab" role="tablist">
                  <li class="nav-item" role="presentation" v-for="(floor,index) in villa.floorplan.kat" :key="index">
                    <button :class="[index == 0 ? 'active' : ''] " class="nav-link" :id="'floor'+index" data-bs-toggle="pill" :data-bs-target="'#floor'+index"
                      type="button" role="tab" :aria-controls="'floor'+index" aria-selected="true">
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
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
              {{ villa.floorplan.kat.bolum }}
              <div class="tab-content mb-4 mb-sm-5 pb-3" id="room-tabContent">
                <div :class="[index == 0 ? 'show active' : ''] " class="tab-pane fade " id="floor-1" role="tabpanel" aria-labelledby="floor-1-tab" v-for="(floor,index) in villa.floorplan.kat" :key="index">
                  
                  <div class="rooms swiper mySwiper">

                    <swiper class="" :options="swiperOptionsRooms">
                      <div class="swiper-slide" v-for="(bolum,index) in floor.bolum" :key="index">
                        <div class="room-item">
                          <div class="img-box w-100">
                            
                            <img :src="img.preview_url" width="312" height="213" alt="room image"
                              class="lazy cover rounded-xl w-100" v-for="(img,index) in bolum.gorsel" :key="index"  v-if="index <= 0">
                          </div>
                          <div class="item-content d-flex flex-column align-items-center text-center px-3 pt-3">
                            <span class="room-item-title">{{ bolum.name }}</span>
                            <p class="room-item-text">
                             <span style="margin-right: 5px;" v-for="(ozellik,index) in bolum.donanim" :key="index">{{ ozellik }}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      
                    </swiper>

                  </div>
                </div>
                <!-- <div class="tab-pane fade" id="floor-2" role="tabpanel" aria-labelledby="floor-2-tab">
                  <swiper class="" :options="swiperOptionsRooms">
                    <div class="swiper-slide">
                      <div class="room-item">
                        <div class="img-box w-100">
                          <img src="/uploads/room1.jpg" width="312" height="213" alt="room image"
                            class="lazy cover rounded-xl w-100">
                        </div>
                        <div class="item-content d-flex flex-column align-items-center text-center px-3 pt-3">
                          <span class="room-item-title">Yatak Odası</span>
                          <p class="room-item-text">
                            Banyo - Banyo Havlusu - Çift Kişilik Yatak - El Havlusu - Elbise Dolabı - Klima - Komodin
                            - Saç Kurutma Makinesi - WC - Yüz Havlusu
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="room-item">
                        <div class="img-box w-100">
                          <img src="/uploads/room2.jpg" width="312" height="213" alt="room image"
                            class="lazy cover rounded-xl w-100">
                        </div>
                        <div class="item-content d-flex flex-column align-items-center text-center px-3 pt-3">
                          <span class="room-item-title">Yatak Odası</span>
                          <p class="room-item-text">
                            Banyo - Banyo Havlusu - Çift Kişilik Yatak - El Havlusu - Elbise Dolabı - Klima - Komodin
                            - Saç Kurutma Makinesi - WC - Yüz Havlusu
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="room-item">
                        <div class="img-box w-100">
                          <img src="/uploads/room3.jpg" width="312" height="213" alt="room image"
                            class="lazy cover rounded-xl w-100">
                        </div>
                        <div class="item-content d-flex flex-column align-items-center text-center px-3 pt-3">
                          <span class="room-item-title">Yatak Odası</span>
                          <p class="room-item-text">
                            Banyo - Banyo Havlusu - Çift Kişilik Yatak - El Havlusu - Elbise Dolabı - Klima - Komodin
                            - Saç Kurutma Makinesi - WC - Yüz Havlusu
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="room-item">
                        <div class="img-box w-100">
                          <img src="/uploads/room2.jpg" width="312" height="213" alt="room image"
                            class="lazy cover rounded-xl w-100">
                        </div>
                        <div class="item-content d-flex flex-column align-items-center text-center px-3 pt-3">
                          <span class="room-item-title">Yatak Odası</span>
                          <p class="room-item-text">
                            Banyo - Banyo Havlusu - Çift Kişilik Yatak - El Havlusu - Elbise Dolabı - Klima - Komodin
                            - Saç Kurutma Makinesi - WC - Yüz Havlusu
                          </p>
                        </div>
                      </div>
                    </div>
                  </swiper>
                </div>
                <div class="tab-pane fade" id="floor-3" role="tabpanel" aria-labelledby="floor-3-tab">
                  <swiper class="" :options="swiperOptionsRooms">
                    <div class="swiper-slide">
                      <div class="room-item">
                        <div class="img-box w-100">
                          <img src="/uploads/room1.jpg" width="312" height="213" alt="room image"
                            class="lazy cover rounded-xl w-100">
                        </div>
                        <div class="item-content d-flex flex-column align-items-center text-center px-3 pt-3">
                          <span class="room-item-title">Yatak Odası</span>
                          <p class="room-item-text">
                            Banyo - Banyo Havlusu - Çift Kişilik Yatak - El Havlusu - Elbise Dolabı - Klima - Komodin
                            - Saç Kurutma Makinesi - WC - Yüz Havlusu
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="room-item">
                        <div class="img-box w-100">
                          <img src="/uploads/room2.jpg" width="312" height="213" alt="room image"
                            class="lazy cover rounded-xl w-100">
                        </div>
                        <div class="item-content d-flex flex-column align-items-center text-center px-3 pt-3">
                          <span class="room-item-title">Yatak Odası</span>
                          <p class="room-item-text">
                            Banyo - Banyo Havlusu - Çift Kişilik Yatak - El Havlusu - Elbise Dolabı - Klima - Komodin
                            - Saç Kurutma Makinesi - WC - Yüz Havlusu
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="room-item">
                        <div class="img-box w-100">
                          <img src="/uploads/room3.jpg" width="312" height="213" alt="room image"
                            class="lazy cover rounded-xl w-100">
                        </div>
                        <div class="item-content d-flex flex-column align-items-center text-center px-3 pt-3">
                          <span class="room-item-title">Yatak Odası</span>
                          <p class="room-item-text">
                            Banyo - Banyo Havlusu - Çift Kişilik Yatak - El Havlusu - Elbise Dolabı - Klima - Komodin
                            - Saç Kurutma Makinesi - WC - Yüz Havlusu
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="room-item">
                        <div class="img-box w-100">
                          <img src="/uploads/room2.jpg" width="312" height="213" alt="room image"
                            class="lazy cover rounded-xl w-100">
                        </div>
                        <div class="item-content d-flex flex-column align-items-center text-center px-3 pt-3">
                          <span class="room-item-title">Yatak Odası</span>
                          <p class="room-item-text">
                            Banyo - Banyo Havlusu - Çift Kişilik Yatak - El Havlusu - Elbise Dolabı - Klima - Komodin
                            - Saç Kurutma Makinesi - WC - Yüz Havlusu
                          </p>
                        </div>
                      </div>
                    </div>
                  </swiper>
                </div> -->
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
                    v-if="poolitem.pool == 8">
                  <img src="/uploads/005-swimming-pool.svg" width="28" height="28" alt="pool icon" class="lazy contain"
                    v-if="poolitem.pool == 9">
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
            <div class="View-location">
              <div class="View-location-head mb-3">
                <h4 class="View-title">
                  Konum
                </h4>
                <p class="View-text">Yakınından Neler Var</p>

              </div>
              <div class="View-location-in">
                <div class="View-location-left">
                  <div class="View-location-item" v-for="(place,index) in villa.places" :key="index">
                    <p>{{ index.substr(6) }} -) {{place.place_type}}</p>
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
                <div class="View-location-right">
                  <p>harita yapılmadı. ne yapacağğımızı görmek için görsel olarak koydum</p>
                  <img src="/img/villamap.png" alt="" class="w-100">
                </div>
              </div>
            </div>
            <div class="View-reviews comments">
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
            <div class="View-info rules">
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
                            <span>{{villa.checkin.substr(0,5)}}</span>
                          </div>
                          <div class="View-info-hours-status-righthours">
                            <span>{{villa.checkin_end.substr(0,5)}}</span>
                          </div>
                          <div class="View-info-hours-status-tophours">
                            <span>{{villa.checkin.substr(0,5)}} - {{villa.checkin_end.substr(0,5)}} Arası</span>
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
                            <span><span>{{villa.checkout.substr(0,5)}}</span></span>
                          </div>
                          <div class="View-info-hours-status-righthours">
                            <span>{{villa.checkout_end.substr(0,5)}}</span>
                          </div>
                          <div class="View-info-hours-status-tophours">
                            <span>{{villa.checkout.substr(0,5)}} - {{villa.checkout_end.substr(0,5)}} Arası</span>
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
            <div class="View-faq sss">
              <h4 class="View-title">Sıkça Sorulan Sorular</h4>
              <div class="accordion" id="Faq">
                <div class="accordion-item">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1"
                    aria-expanded="true" aria-controls="faq1">
                    Nasıl rezervasyon yapabilirim ?
                  </button>
                  <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#Faq">
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

            <form action="" class="Reservation-form" id="reservationForm">
              <div class="Reservation-form-top">
                <h4 class="Reservation-form-title">Rezervasyon Yap</h4>
                <div class="Reservation-form-in">
                  <div class="Reservation-form-item">
                    <label for="">
                      <div class="Reservation-form-item-icon">
                        <i class="icon-calendar"></i>
                      </div>
                      <div class="Reservation-form-item-input">
                        <span>Giriş Tarihi</span>
                        <input type="text" placeholder="14 EYL">
                      </div>
                    </label>
                  </div>
                  <div class="Reservation-form-item">
                    <label for="">
                      <div class="Reservation-form-item-icon">
                        <i class="icon-calendar"></i>
                      </div>
                      <div class="Reservation-form-item-input">
                        <span>Giriş Tarihi</span>
                        <input type="text" placeholder="14 EYL">
                      </div>
                    </label>
                  </div>
                  <div class="Reservation-form-item Reservation-form-item-person">
                    <label for="">
                      <div class="Reservation-form-item-icon">
                        <i class="icon-calendar"></i>
                      </div>
                      <div class="Reservation-form-item-input">
                        <span>Kişi Sayısı</span>
                        <button class=" dropdown-toggle" type="button" id="dropdownPerson" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          <p><span class="adult-people">2</span> Yetişkin,
                            <span class="child-people">0</span> Çocuk
                          </p>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <div class="select-item d-flex align-items-center justify-content-between lh-sm mb-3 pb-1">
                            <div class="d-flex flex-column">
                              <strong class="fw-medium fs-6">Yetişkinler</strong>
                              <span class="text-theme-secondary text-opacity-75">13 yaş ve üzeri</span>
                            </div>
                            <div class="d-flex align-items-center text-center">
                              <button type="button"
                                class="select-btn minus bg-transparent d-flex align-items-center justify-content-center rounded-circle"
                                disabled>
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                  role="presentation" focusable="false"
                                  style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                                  <path d="m2 16h28"></path>
                                </svg>
                              </button>
                              <input type="text" name="yetiskinler" class="select-input text-center fs-5 px-2" value="1"
                                data-min="1" data-max="10" data-text="Yetişkin, " readonly>
                              <button type="button"
                                class="select-btn plus bg-transparent d-flex align-items-center justify-content-center rounded-circle">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                  role="presentation" focusable="false"
                                  style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                                  <path d="m2 16h28m-14-14v28"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div class="select-item d-flex align-items-center justify-content-between lh-sm">
                            <div class="d-flex flex-column">
                              <strong class="fw-medium fs-6">Çocuklar</strong>
                              <span class="text-theme-secondary text-opacity-75">2-12 yaş</span>
                            </div>
                            <div class="d-flex align-items-center text-center">
                              <button type="button"
                                class="select-btn minus bg-transparent d-flex align-items-center justify-content-center rounded-circle"
                                disabled>
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                  role="presentation" focusable="false"
                                  style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                                  <path d="m2 16h28"></path>
                                </svg>
                              </button>
                              <input type="text" name="cocuklar" class="select-input text-center fs-5 px-2" value="0"
                                data-min="0" data-max="10" data-text="Çocuk" readonly>
                              <button type="button"
                                class="select-btn plus bg-transparent d-flex align-items-center justify-content-center rounded-circle">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                  role="presentation" focusable="false"
                                  style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                                  <path d="m2 16h28m-14-14v28"></path>
                                </svg>
                              </button>
                            </div>
                          </div>


                        </ul>
                      </div>

                    </label>
                  </div>
                </div>
                <div class="Reservation-form-info">
                  <div class="Reservation-form-info-item">
                    <div class="Reservation-form-info-item-in">
                      <div class="Reservation-form-info-item-left">
                        <h5>Şimdi Ödenecek Tutar</h5>
                        <p>5500 TL %20 Ödeme Kalan Tutar Tesise Girişte Ödenecektir 22.000 TL</p>
                      </div>
                      <div class="Reservation-form-info-item-right">
                        <b>5.500 TL</b>
                      </div>
                    </div>

                  </div>
                  <div class="Reservation-form-info-item">
                    <div class="Reservation-form-info-item-in">
                      <div class="Reservation-form-info-item-left">
                        <h5>Toplam Tutar</h5>
                        <p><span class="day">5</span> gece için konaklama ve temizlik giderleri dahil toplam fiyat</p>
                      </div>
                      <div class="Reservation-form-info-item-right">
                        <b>27.500 TL</b>
                      </div>
                    </div>
                    <div class="accordion Reservation-form-info-item-more" id="accordionExample">
                      <div class="accordion-item">
                        <button class="accordion-button Reservation-form-info-item-more-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                          aria-controls="collapseTwo">
                          Detayları Gör
                          <i class="icon-down-arrow"></i>
                        </button>

                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample">
                          <h6>Rezervasyon Detayları</h6>

                          <div class="Reservation-form-info-item-more-item">
                            <div class="Reservation-form-info-item-more-item-left">
                              <p>5 Gece Konaklama Tutarı</p>
                            </div>
                            <b>27.000₺</b>
                          </div>
                          <div class="Reservation-form-info-item-more-item">
                            <div class="Reservation-form-info-item-more-item-left">
                              <p>Temizlik Ücreti</p>
                              <i class="icon-information" data-bs-toggle="tooltip" data-bs-placement="right"
                                title="Tooltip on right"></i>
                            </div>
                            <b>500₺</b>
                          </div>
                          <div class="Reservation-form-info-item-more-item">
                            <div class="Reservation-form-info-item-more-item-left">
                              <p>Toplam Tutar</p>
                              <i class="icon-information" data-bs-toggle="tooltip" data-bs-placement="right"
                                title="Tooltip on right"></i>
                            </div>
                            <b>27.500₺</b>
                          </div>

                          <div class="Reservation-form-info-item-more-item">
                            <div class="Reservation-form-info-item-more-item-left">
                              <p>Girişte Ödenecek</p>
                            </div>
                            <b>22.000₺</b>
                          </div>
                          <div class="Reservation-form-info-item-more-item">
                            <div class="Reservation-form-info-item-more-item-left">
                              <p>Şimdi Ödenecek</p>
                            </div>
                            <b>5.500₺</b>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <button class="Reservation-form-submit" @click.prevent="reservationButton($event)" type="submit">
                Müsaitlik Sorgula
              </button>
            </form>

            <div class="View-right-opportunity">
              <h4>Kısa Süreli Fırsatlar</h4>
              <swiper class="" :options="swiperOptions">
                <div class="swiper-slide" v-for="item in 4">
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
              </swiper>
              <div class="swiper-pagination"></div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- <section class="content-menubar-section mb-4 mb-sm-5 pb-2">
      <div class="container">
        <div class="content-menubar bg-page-light rounded-xl p-sm-1">
          <ul class="nav flex-nowrap text-nowrap py-2 px-2" id="cm-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link bg-transparent text-theme-first-dark ls-05 rounded-sm px-3 py-2 me-1 active"
                id="pricing-tab" data-bs-toggle="pill" data-bs-target="#pricing" type="button" role="tab"
                aria-controls="pricing" aria-selected="true">
                <span class="d-inline-block p-md-1">Fiyatlar</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link bg-transparent text-theme-first-dark ls-05 rounded-sm px-3 py-2 me-1"
                id="description-tab" data-bs-toggle="pill" data-bs-target="#description" type="button" role="tab"
                aria-controls="description" aria-selected="false">
                <span class="d-inline-block p-md-1">Açıklama</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link bg-transparent text-theme-first-dark ls-05 rounded-sm px-3 py-2 me-1"
                id="distance-tab" data-bs-toggle="pill" data-bs-target="#distance" type="button" role="tab"
                aria-controls="distance" aria-selected="false">
                <span class="d-inline-block p-md-1">Mesafeler</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link bg-transparent text-theme-first-dark ls-05 rounded-sm px-3 py-2 me-1"
                id="availability-tab" data-bs-toggle="pill" data-bs-target="#availability" type="button" role="tab"
                aria-controls="availability" aria-selected="false">
                <span class="d-inline-block p-md-1">Müsaitlik Takvimi</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link bg-transparent text-theme-first-dark ls-05 rounded-sm px-3 py-2 me-1"
                id="comments-tab" data-bs-toggle="pill" data-bs-target="#comments" type="button" role="tab"
                aria-controls="comments" aria-selected="false">
                <span class="d-inline-block p-md-1">Yorumlar</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link bg-transparent text-theme-first-dark ls-05 rounded-sm px-3 py-2 me-1"
                id="rules-tab" data-bs-toggle="pill" data-bs-target="#rules" type="button" role="tab"
                aria-controls="rules" aria-selected="false">
                <span class="d-inline-block p-md-1">Kurallar</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link bg-transparent text-theme-first-dark ls-05 rounded-sm px-3 py-2 me-1"
                id="activities-tab" data-bs-toggle="pill" data-bs-target="#activities" type="button" role="tab"
                aria-controls="activities" aria-selected="false">
                <span class="d-inline-block p-md-1">Aktiviteler</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link bg-transparent text-theme-first-dark ls-05 rounded-sm px-3 py-2 me-1" id="faq-tab"
                data-bs-toggle="pill" data-bs-target="#faq" type="button" role="tab" aria-controls="faq"
                aria-selected="false">
                <span class="d-inline-block p-md-1">S.S.S.</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="view-content">
      <div class="container">
        <div class="row">
          <div class="content col-12 col-lg-8 pe-lg-0 mb-lg-0 mb-5">
            <div class="tab-content" id="cm-tabContent">
              <div class="tab-pane fade show active" id="pricing" role="tabpanel" aria-labelledby="pricing-tab">
                <ul
                  class="currency-selection fs-6 d-inline-flex flex-wrap border border-3 border-theme-light rounded-lg p-1 mb-4">
                  <li>
                    <button type="button"
                      class="selection-item bg-transparent text-theme-secondary d-flex py-2 px-3 rounded-sm lh-1 active">
                      <small class="d-inline-block py-1">TL</small>
                    </button>
                  </li>
                  <li>
                    <button type="button"
                      class="selection-item bg-transparent text-theme-secondary d-flex py-2 px-3 rounded-sm lh-1">
                      <small class="d-inline-block py-1">USD</small>
                    </button>
                  </li>
                  <li>
                    <button type="button"
                      class="selection-item bg-transparent text-theme-secondary d-flex py-2 px-3 rounded-sm lh-1">
                      <small class="d-inline-block py-1">EURO</small>
                    </button>
                  </li>
                  <li>
                    <button type="button"
                      class="selection-item bg-transparent text-theme-secondary d-flex py-2 px-3 rounded-sm lh-1">
                      <small class="d-inline-block py-1">STERLIN</small>
                    </button>
                  </li>
                </ul>
                <div class="row mb-2 mb-sm-4">
                  <div class="col-12 col-sm-6 col-md-8 mb-sm-0 mb-3">
                    <h4 class="fs-5 ls-05 mb-0">
                      <span class="text-theme-secondary">Dönemsel </span><strong>Fiyatlar</strong>
                    </h4>
                  </div>
                  <div class="col-6 col-sm-3 col-md-2 f fs-6 text-theme-secondary text-center ls-05 ps-xl-5">
                    <small>Günlük</small>
                  </div>
                  <div class="col-6 col-sm-3 col-md-2 fs-6 text-theme-secondary text-center ls-05">
                    <small>Haftalık</small>
                  </div>
                </div>
                <div class="price-table ls-05 mb-5 mb-lg-3">
                  <div class="price-item border border-3 border-theme-light-2 rounded-lg p-2 mb-2">
                    <div class="row">
                      <div class="col-12 col-sm-6 col-md-8">
                        <div class="date-range d-flex flex-column w-100 ps-2 ps-md-4 pt-2 pb-2">
                          <strong class="fw-medium d-block">11 Haziran - 15 Haziran 2021</strong>
                          <span class="fs-8 text-theme-secondary">Minimum 7 Gece Kiralama</span>
                        </div>
                      </div>
                      <div class="col-6 col-sm-3 col-md-2 ps-xl-5">
                        <div class="w-100 h-100 rounded-sm d-flex align-items-center justify-content-center">
                          <span class="fw-medium text-theme-secondary">720₺</span>
                        </div>
                      </div>
                      <div class="col-6 col-sm-3 col-md-2 pe-md-3">
                        <div
                          class="hover-box bg-page-light w-100 h-100 rounded-sm d-flex align-items-center justify-content-center py-sm-0 py-2">
                          <span class="fw-medium">24.000₺</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="price-item border border-3 border-theme-light-2 rounded-lg p-2 mb-2">
                    <div class="row">
                      <div class="col-12 col-sm-6 col-md-8">
                        <div class="date-range d-flex flex-column w-100 ps-2 ps-md-4 pt-2 pb-2">
                          <strong class="fw-medium d-block">11 Haziran - 15 Haziran 2021</strong>
                          <span class="fs-8 text-theme-secondary">Minimum 7 Gece Kiralama</span>
                        </div>
                      </div>
                      <div class="col-6 col-sm-3 col-md-2 ps-xl-5">
                        <div class="w-100 h-100 rounded-sm d-flex align-items-center justify-content-center">
                          <span class="fw-medium text-theme-secondary">720₺</span>
                        </div>
                      </div>
                      <div class="col-6 col-sm-3 col-md-2 pe-md-3">
                        <div
                          class="hover-box bg-page-light w-100 h-100 rounded-sm d-flex align-items-center justify-content-center py-sm-0 py-2">
                          <span class="fw-medium">24.000₺</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="price-item border border-3 border-theme-light-2 rounded-lg p-2 mb-2">
                    <div class="row">
                      <div class="col-12 col-sm-6 col-md-8">
                        <div class="date-range d-flex flex-column w-100 ps-2 ps-md-4 pt-2 pb-2">
                          <strong class="fw-medium d-block">11 Haziran - 15 Haziran 2021</strong>
                          <span class="fs-8 text-theme-secondary">Minimum 7 Gece Kiralama</span>
                        </div>
                      </div>
                      <div class="col-6 col-sm-3 col-md-2 ps-xl-5">
                        <div class="w-100 h-100 rounded-sm d-flex align-items-center justify-content-center">
                          <span class="fw-medium text-theme-secondary">720₺</span>
                        </div>
                      </div>
                      <div class="col-6 col-sm-3 col-md-2 pe-md-3">
                        <div
                          class="hover-box bg-page-light w-100 h-100 rounded-sm d-flex align-items-center justify-content-center py-sm-0 py-2">
                          <span class="fw-medium">24.000₺</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="price-item border border-3 border-theme-light-2 rounded-lg p-2 mb-2">
                    <div class="row">
                      <div class="col-12 col-sm-6 col-md-8">
                        <div class="date-range d-flex flex-column w-100 ps-2 ps-md-4 pt-2 pb-2">
                          <strong class="fw-medium d-block">11 Haziran - 15 Haziran 2021</strong>
                          <span class="fs-8 text-theme-secondary">Minimum 7 Gece Kiralama</span>
                        </div>
                      </div>
                      <div class="col-6 col-sm-3 col-md-2 ps-xl-5">
                        <div class="w-100 h-100 rounded-sm d-flex align-items-center justify-content-center">
                          <span class="fw-medium text-theme-secondary">720₺</span>
                        </div>
                      </div>
                      <div class="col-6 col-sm-3 col-md-2 pe-md-3">
                        <div
                          class="hover-box bg-page-light w-100 h-100 rounded-sm d-flex align-items-center justify-content-center py-sm-0 py-2">
                          <span class="fw-medium">24.000₺</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="price-item border border-3 border-theme-light-2 rounded-lg p-2 mb-2">
                    <div class="row">
                      <div class="col-12 col-sm-6 col-md-8">
                        <div class="date-range d-flex flex-column w-100 ps-2 ps-md-4 pt-2 pb-2">
                          <strong class="fw-medium d-block">11 Haziran - 15 Haziran 2021</strong>
                          <span class="fs-8 text-theme-secondary">Minimum 7 Gece Kiralama</span>
                        </div>
                      </div>
                      <div class="col-6 col-sm-3 col-md-2 ps-xl-5">
                        <div class="w-100 h-100 rounded-sm d-flex align-items-center justify-content-center">
                          <span class="fw-medium text-theme-secondary">720₺</span>
                        </div>
                      </div>
                      <div class="col-6 col-sm-3 col-md-2 pe-md-3">
                        <div
                          class="hover-box bg-page-light w-100 h-100 rounded-sm d-flex align-items-center justify-content-center py-sm-0 py-2">
                          <span class="fw-medium">24.000₺</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 class="fs-5 ls-05 mb-4 pb-3">
                  <span class="text-theme-secondary">Villa Pınar </span><strong>Kısa Süreli Fırsatlar</strong>
                </h4>
                <div class="short-terms">
                  <div class="st-item d-flex flex-column flex-sm-row">
                    <div
                      class="st-start bg-theme-first-dark text-white rounded-lg d-flex flex-sm-column align-items-sm-start align-items-center lh-1 ls-05 pt-3 pb-5 py-sm5 ps-4">
                      <span class="fs-5-5 text-danger fw-medium d-block mb-sm-2 me-sm-0 me-auto">-%40</span>
                      <div class="d-flex flex-column">
                        <strong class="fs-5 fw-medium">24.200 TL</strong>
                        <del class="fs-6">32.400 TL</del>
                      </div>
                    </div>
                    <div class="st-end flex-fill lh-sm">
                      <div
                        class="top-row bg-theme-first text-white rounded-end-lg rounded-top-lg ls-05 d-flex align-items-center p-4">
                        <span class="fs-6 d-block py-2 ps-2 me-auto">11 Haziran - 15 Haziran 2021</span>
                        <span class="d-block py-2 pe-2">4 GECE</span>
                      </div>
                      <div class="bottom-row bg-theme-first text-white rounded-end-lg rounded-bottom-lg p-3">
                        <a href="#!" class="d-block w-100 text-center fs-6 ls-05">Hemen Rezervasyon Talebi Gönder</a>
                      </div>
                    </div>
                  </div>
                  <div class="st-item d-flex flex-column flex-sm-row">
                    <div
                      class="st-start bg-theme-first-dark text-white rounded-lg d-flex flex-sm-column align-items-sm-start align-items-center lh-1 ls-05 pt-3 pb-5 py-sm5 ps-4">
                      <span class="fs-5-5 text-danger fw-medium d-block mb-sm-2 me-sm-0 me-auto">-%40</span>
                      <div class="d-flex flex-column">
                        <strong class="fs-5 fw-medium">24.200 TL</strong>
                        <del class="fs-6">32.400 TL</del>
                      </div>
                    </div>
                    <div class="st-end flex-fill lh-sm">
                      <div
                        class="top-row bg-theme-first text-white rounded-end-lg rounded-top-lg ls-05 d-flex align-items-center p-4">
                        <span class="fs-6 d-block py-2 ps-2 me-auto">11 Haziran - 15 Haziran 2021</span>
                        <span class="d-block py-2 pe-2">4 GECE</span>
                      </div>
                      <div class="bottom-row bg-theme-first text-white rounded-end-lg rounded-bottom-lg p-3">
                        <a href="#!" class="d-block w-100 text-center fs-6 ls-05">Hemen Rezervasyon Talebi Gönder</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="spacer pt-5 py-sm-5 mb-lg-5"></div>
                <div class="pricing-included-wrapper border rounded-xl">
                  <div class="pricing-included-tab position-relative nav nav-tabs flex-nowrap" id="includeds-tab"
                    role="tablist">
                    <button class="nav-link fs-6 fw-medium ls-05 text-secondary py-3 py-md-4 px-4 px-md-5 active"
                      id="dahil-olanlar-tab" data-bs-toggle="tab" data-bs-target="#dahil-olanlar" type="button"
                      role="tab" aria-controls="dahil-olanlar" aria-selected="true">
                      <span class="d-block py-sm-1">Fiyata Dahil Olanlar</span>
                    </button>
                    <button class="nav-link fs-6 fw-medium ls-05 text-secondary py-3 py-md-4 px-4 px-md-5"
                      id="dahil-olmayanlar-tab" data-bs-toggle="tab" data-bs-target="#dahil-olmayanlar" type="button"
                      role="tab" aria-controls="dahil-olmayanlar" aria-selected="false">
                      <span class="d-block py-sm-1">Fiyata Dahil Olmayanlar</span>
                    </button>
                  </div>
                  <div class="tab-content" id="includeds-tabContent">
                    <div class="tab-pane fade pt-4 pt-md-5 pb-3 px-3 px-sm-4 px-md-5 show active" id="dahil-olanlar"
                      role="tabpanel" aria-labelledby="dahil-olanlar-tab">
                      <ul class="d-flex flex-wrap text-theme-secondary ls-05 lh-sm">
                        <li class="col-6 d-flex align-items-center mb-4 pb-sm-2 pe-2">
                          <img src="/uploads/012-idea.svg" width="28" height="28" alt="included"
                            class="lazy contain me-2 me-sm-3">
                          <span class="d-block ps-1">Elektrik, Su ve Tüpgaz Kullanımı</span>
                        </li>
                        <li class="col-6 d-flex align-items-center mb-4 pb-sm-2 pe-2">
                          <img src="/uploads/006-espresso.svg" width="28" height="28" alt="included"
                            class="lazy contain me-2 me-sm-3">
                          <span class="d-block ps-1">Kahvaltı</span>
                        </li>
                        <li class="col-6 d-flex align-items-center mb-4 pb-sm-2 pe-2">
                          <img src="/uploads/001-bed.svg" width="28" height="28" alt="included"
                            class="lazy contain me-2 me-sm-3">
                          <span class="d-block ps-1">Balayı Oda Süsleme</span>
                        </li>
                        <li class="col-6 d-flex align-items-center mb-4 pb-sm-2 pe-2">
                          <img src="/uploads/004-dinner.svg" width="28" height="28" alt="included"
                            class="lazy contain me-2 me-sm-3">
                          <span class="d-block ps-1">Yemek</span>
                        </li>
                        <li class="col-6 d-flex align-items-center mb-4 pb-sm-2 pe-2">
                          <img src="/uploads/002-rock.svg" width="28" height="28" alt="included"
                            class="lazy contain me-2 me-sm-3">
                          <span class="d-block ps-1">Tesise Ait SPA ve Hamam Kullanımı</span>
                        </li>
                        <li class="col-6 d-flex align-items-center mb-4 pb-sm-2 pe-2">
                          <img src="/uploads/003-swimming-pool.svg" width="28" height="28" alt="included"
                            class="lazy contain me-2 me-sm-3">
                          <span class="d-block ps-1">Dış Havuz Isıtma Ücreti</span>
                        </li>
                        <li class="col-6 d-flex align-items-center mb-4 pb-sm-2 pe-2">
                          <img src="/uploads/005-swimming-pool.svg" width="28" height="28" alt="included"
                            class="lazy contain me-2 me-sm-3">
                          <span class="d-block ps-1">İç Havuz Isıtma Ücreti</span>
                        </li>
                        <li class="col-6 d-flex align-items-center mb-4 pb-sm-2 pe-2">
                          <img src="/uploads/010-flower-pot.svg" width="28" height="28" alt="included"
                            class="lazy contain me-2 me-sm-3">
                          <span class="d-block ps-1">Günlük Havuz ve Bahçe Bakımı</span>
                        </li>
                        <li class="col-6 d-flex align-items-center mb-4 pb-sm-2 pe-2">
                          <img src="/uploads/005-wifi-router.svg" width="28" height="28" alt="included"
                            class="lazy contain me-2 me-sm-3">
                          <span class="d-block ps-1">Wi-Fi</span>
                        </li>
                        <li class="col-6 d-flex align-items-center mb-4 pb-sm-2 pe-2">
                          <img src="/uploads/009-cleaning.svg" width="28" height="28" alt="included"
                            class="lazy contain me-2 me-sm-3">
                          <span class="d-block ps-1">Ara Temizlik Hizmeti</span>
                        </li>
                      </ul>
                    </div>
                    <div class="tab-pane fade pt-4 pt-md-5 pb-3 px-3 px-sm-4 px-md-5" id="dahil-olmayanlar"
                      role="tabpanel" aria-labelledby="dahil-olmayanlar-tab">
                      <ul class="d-flex flex-wrap text-theme-secondary ls-05">
                        <li class="col-6 d-flex align-items-center mb-4 pb-sm-2 pe-2">
                          <img src="/uploads/004-dinner.svg" width="28" height="28" alt="included"
                            class="lazy contain me-2 me-sm-3">
                          <span class="d-block ps-1">Yemek Hizmeti</span>
                        </li>
                        <li class="col-6 d-flex align-items-center mb-4 pb-sm-2 pe-2">
                          <img src="/uploads/004-cocktail.svg" width="28" height="28" alt="included"
                            class="lazy contain me-2 me-sm-3">
                          <span class="d-block ps-1">Alkollü İçecekler</span>
                        </li>
                        <li class="col-6 d-flex align-items-center mb-4 pb-sm-2 pe-2">
                          <img src="/uploads/005-swimming-pool.svg" width="28" height="28" alt="included"
                            class="lazy contain me-2 me-sm-3">
                          <span class="d-block ps-1">Kapalı Havuz Isıtma</span>
                        </li>
                        <li class="col-6 d-flex align-items-center mb-4 pb-sm-2 pe-2">
                          <img src="/uploads/007-distance.svg" width="28" height="28" alt="included"
                            class="lazy contain me-2 me-sm-3">
                          <span class="d-block ps-1">Ulaşım Hizmeti</span>
                        </li>
                        <li class="col-6 d-flex align-items-center mb-4 pb-sm-2 pe-2">
                          <img src="/uploads/008-turkish-cezve.svg" width="28" height="28" alt="included"
                            class="lazy contain me-2 me-sm-3">
                          <span class="d-block ps-1">Türk Kahvesi</span>
                        </li>
                        <li class="col-6 d-flex align-items-center mb-4 pb-sm-2 pe-2">
                          <img src="/uploads/009-cleaning.svg" width="28" height="28" alt="included"
                            class="lazy contain me-2 me-sm-3">
                          <span class="d-block ps-1">Ekstra Temizlik Hizmeti</span>
                        </li>
                        <li class="col-6 d-flex align-items-center mb-4 pb-sm-2 pe-2">
                          <img src="/uploads/011-juice.svg" width="28" height="28" alt="included"
                            class="lazy contain me-2 me-sm-3">
                          <span class="d-block ps-1">Taze Sıkılmış Meyve Suları</span>
                        </li>
                        <li class="col-6 d-flex align-items-center mb-4 pb-sm-2 pe-2">
                          <img src="/uploads/003-swimming-pool.svg" width="28" height="28" alt="included"
                            class="lazy contain me-2 me-sm-3">
                          <span class="d-block ps-1">Dış Havuz Isıtma Ücreti</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="description" role="tabpanel" aria-labelledby="description-tab">
                <h4 class="fs-5 ls-05 lh-sm mb-3 pb-1">
                  <span class="text-theme-secondary">Villa Pınar </span><strong>Genel Bilgiler</strong>
                </h4>
                <div class="generally-description text-theme-secondary lh-sm ls-05 fw-medium mb-5 pb-2">
                  <p>
                    Kalkan merkeze yürüyüş mesafesinde bulunan Suit Mabel konfor, estetik ve lüksü bir arada sunan özel
                    bir tatil evidir. Özel kapalı garajına aracınızı parkedip suite girişinizle etkileyici donanım ve
                    müthiş manzarası ile sizleri mest edecek olan Mabel, dubleks bir dairedir. Giriş katında, harika
                    deniz manzarasını izlemekten arta kalan zamanlarınızı değerlendirebileceğiniz amerikan bilardo
                    masası ile air-hockey,masa-futbolu ve dart bulunan oyun odası,sauna ve açık mutfak bulunmaktadır.
                    Terasında yer alan perde sistemi ile havuz alanı korunaklı hale getirilebilmektedir.
                  </p>
                  <p>
                    Suitimizin üst katında deniz manzaralı ve ferah bir salon ve açık mutfak bulunmaktadır. Salondan
                    giriş yapılan ana yatak odasında 1.20 x 1.85 ebatında deniz manzaralı jakuzi, tv, king size çift
                    kişilik yatak ve banyo bulunmaktadır.
                  </p>
                  <p>
                    Kesintisiz bir deniz manzarası olan terasta özel yüzme havuzu,şezlonglar,açık alanda keyifle yemek
                    yiyebileceğiniz masa sandalye ve taş barbekü bulunmaktadır.Yüzme havuzunda bulunan özel jet dalga
                    motoru ile yorulana kadar yüzmenize imkan vermektedir.
                  </p>
                </div>
                <div class="border border-theme-light rounded-xxl d-flex flex-wrap align-items-center py-3 px-4">
                  <span class="fs-5 ls-05 fw-medium d-block ps-sm-2 pe-2 me-auto">Öne Çıkan Özellikleri</span>
                  <div class="ribbons ls-1 d-flex flex-wrap order-2 order-md-3">
                    <div
                      class="ribbon bg-theme-danger text-white rounded-sm lh-sm d-flex align-items-center py-2 px-3 me-2 mb-md-0 mb-2">
                      <span class="d-inline-block p-sm-1">Balayı Villası</span>
                    </div>
                    <div
                      class="ribbon bg-theme-first-light text-white rounded-sm lh-sm d-flex align-items-center py-2 px-3 mb-md-0 mb-2">
                      <span class="d-inline-block p-sm-1">Jakuzi</span>
                    </div>
                  </div>
                </div>
                <div class="spacer pb-5 mb-2"></div>
                <div class="rooms-section position-relative">
                  <div
                    class="rooms-caption d-flex flex-column flex-sm-row align-items-sm-center flex-wrap mb-3 mb-sm-4 pb-1">
                    <h4 class="fs-5 ls-05 lh-sm me-4 pe-2">
                      <span class="text-theme-secondary">Villa Pınar </span><strong>Kat Planı</strong>
                    </h4>
                    <ul class="nav nav-pills me-auto" id="room-tab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link rounded-pill lh-sm bg-transparent text-theme-secondary py-2 px-3 active"
                          id="floor-1-tab" data-bs-toggle="pill" data-bs-target="#floor-1" type="button" role="tab"
                          aria-controls="floor-1" aria-selected="true">
                          <span class="d-inline-block py-sm-1 px-1 px-sm-2">Kat 1</span>
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link rounded-pill lh-sm bg-transparent text-theme-secondary py-2 px-3"
                          id="floor-2-tab" data-bs-toggle="pill" data-bs-target="#floor-2" type="button" role="tab"
                          aria-controls="floor-2" aria-selected="false">
                          <span class="d-inline-block py-sm-1 px-1 px-sm-2">Kat 2</span>
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link rounded-pill lh-sm bg-transparent text-theme-secondary py-2 px-3"
                          id="floor-3-tab" data-bs-toggle="pill" data-bs-target="#floor-3" type="button" role="tab"
                          aria-controls="floor-3" aria-selected="false">
                          <span class="d-inline-block py-sm-1 px-1 px-sm-2">Kat 3</span>
                        </button>
                      </li>
                    </ul>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                  </div>
                  <div class="tab-content mb-4 mb-sm-5 pb-3" id="room-tabContent">
                    <div class="tab-pane fade show active" id="floor-1" role="tabpanel" aria-labelledby="floor-1-tab">
                      <div class="rooms swiper mySwiper">
                        <div class="swiper-wrapper">
                          <div class="swiper-slide">
                            <div class="room-item">
                              <div class="img-box w-100">
                                <img src="/uploads/room1.jpg" width="312" height="213" alt="room image"
                                  class="lazy cover rounded-xl w-100">
                              </div>
                              <div class="item-content d-flex flex-column align-items-center text-center px-3 pt-3">
                                <span class="fs-6 fw-medium ls-05 lh-sm mb-2">Yatak Odası</span>
                                <p class="ls-05 text-theme-secondary pe-xxl-1">
                                  Banyo - Banyo Havlusu - Çift Kişilik Yatak - El Havlusu - Elbise Dolabı - Klima -
                                  Komodin - Saç Kurutma Makinesi - WC - Yüz Havlusu
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="room-item">
                              <div class="img-box w-100">
                                <img src="/uploads/room2.jpg" width="312" height="213" alt="room image"
                                  class="lazy cover rounded-xl w-100">
                              </div>
                              <div class="item-content d-flex flex-column align-items-center text-center px-3 pt-3">
                                <span class="fs-6 fw-medium ls-05 lh-sm mb-2">Mutfak</span>
                                <p class="ls-05 text-theme-secondary pe-xxl-1">
                                  Buzdolabı - Fırın - Mikrodalga Fırın
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="room-item">
                              <div class="img-box w-100">
                                <img src="/uploads/room3.jpg" width="312" height="213" alt="room image"
                                  class="lazy cover rounded-xl w-100">
                              </div>
                              <div class="item-content d-flex flex-column align-items-center text-center px-3 pt-3">
                                <span class="fs-6 fw-medium ls-05 lh-sm mb-2">Sauna</span>
                                <p class="ls-05 text-theme-secondary pe-xxl-1">
                                  Buzdolabı - Fırın - Mikrodalga Fırın
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="room-item">
                              <div class="img-box w-100">
                                <img src="/uploads/room2.jpg" width="312" height="213" alt="room image"
                                  class="lazy cover rounded-xl w-100">
                              </div>
                              <div class="item-content d-flex flex-column align-items-center text-center px-3 pt-3">
                                <span class="fs-6 fw-medium ls-05 lh-sm mb-2">Mutfak</span>
                                <p class="ls-05 text-theme-secondary pe-xxl-1">
                                  Buzdolabı - Fırın - Mikrodalga Fırın
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="floor-2" role="tabpanel" aria-labelledby="floor-2-tab">test2</div>
                    <div class="tab-pane fade" id="floor-3" role="tabpanel" aria-labelledby="floor-3-tab">...</div>
                  </div>
                </div>
                <h4 class="fs-5 ls-05 lh-sm me-4 pe-2 mb-3">
                  <span class="text-theme-secondary">Villa Pınar </span><strong>Havuz Bilgisi</strong>
                </h4>
                <div
                  class="col-6 offset-6 text-theme-secondary ls-05 d-flex flex-wrap justify-content-around ps-md-5 pe-md-4 mb-3">
                  <span>En</span>
                  <span>Boy</span>
                  <span>Yükseklik</span>
                </div>
                <div class="pool-item bg-theme-light rounded-xl ps-3 ps-sm-4 pe-3 pe-md-5 mb-3">
                  <div class="row">
                    <div class="col-6 d-flex align-items-center py-2 py-sm-3">
                      <div
                        class="icon-box bg-white rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center me-2 me-sm-4">
                        <img src="/uploads/003-swimming-pool.svg" width="28" height="28" alt="pool icon"
                          class="lazy contain">
                      </div>
                      <span class="d-inline-block fw-medium ps-1">Açık Havuz</span>
                    </div>
                    <div
                      class="col-6 infos ls-05 d-flex flex-wrap justify-content-around align-items-center ps-md-5 py-3">
                      <span>4.20m</span>
                      <span>6.20m</span>
                      <span>1.60m</span>
                    </div>
                  </div>
                </div>
                <div class="pool-item bg-theme-light rounded-xl ps-3 ps-sm-4 pe-3 pe-md-5 mb-3">
                  <div class="row">
                    <div class="col-6 d-flex align-items-center py-2 py-sm-3">
                      <div
                        class="icon-box bg-white rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center me-2 me-sm-4">
                        <img src="/uploads/005-swimming-pool.svg" width="28" height="28" alt="pool icon"
                          class="lazy contain">
                      </div>
                      <span class="d-inline-block fw-medium ps-1">Kapalı Havuz</span>
                    </div>
                    <div
                      class="col-6 infos ls-05 d-flex flex-wrap justify-content-around align-items-center ps-md-5 py-3">
                      <span>4.20m</span>
                      <span>6.20m</span>
                      <span>1.60m</span>
                    </div>
                  </div>
                </div>
                <div class="pool-item bg-theme-light rounded-xl ps-3 ps-sm-4 pe-3 pe-md-5 mb-3">
                  <div class="row">
                    <div class="col-6 d-flex align-items-center py-2 py-sm-3">
                      <div
                        class="icon-box bg-white rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center me-2 me-sm-4">
                        <img src="/uploads/002-watch-your-children.svg" width="28" height="28" alt="pool icon"
                          class="lazy contain">
                      </div>
                      <span class="d-inline-block fw-medium ps-1">Çocuk Havuzu</span>
                    </div>
                    <div
                      class="col-6 infos ls-05 d-flex flex-wrap justify-content-around align-items-center ps-md-5 disabled py-3">
                      Bulunmuyor
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="distance" role="tabpanel" aria-labelledby="distance-tab">
                <h4 class="fs-5 fw-medium ls-05 mb-1 pt-2">Konum Bilgileri</h4>
                <span class="fw-medium ls-05 text-theme-secondary">Konum bilgileri tahmini olarak girilmiştir.</span>
                <div class="distances row g-2 mt-3 pb-1">
                  <div class="col-12 col-sm-6 flex-fill">
                    <div class="distance-item bg-theme-light rounded-lg d-flex align-items-center h-100 p-3">
                      <div
                        class="icon-box bg-white rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center me-3">
                        <img src="/uploads/006-take-off.svg" width="28" height="28" alt="pool icon"
                          class="lazy contain">
                      </div>
                      <div class="d-flex flex-column align-items-start ls-05 me-auto">
                        <strong class="d-inline-block fw-medium d-block lh-sm">Hava Alanı</strong>
                        <span class="text-theme-secondary">Antalya Hava Alanı</span>
                      </div>
                      <span class="fs-6 fw-medium text-theme-second pe-3">100KM</span>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 flex-fill">
                    <div class="distance-item bg-theme-light rounded-lg d-flex align-items-center h-100 p-3">
                      <div
                        class="icon-box bg-white rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center me-3">
                        <img src="/uploads/002-first-aid-kit.svg" width="28" height="28" alt="pool icon"
                          class="lazy contain">
                      </div>
                      <div class="d-flex flex-column align-items-start ls-05 me-auto">
                        <strong class="d-inline-block fw-medium d-block lh-sm">Sağlık Merkezi</strong>
                        <span class="text-theme-secondary"></span>
                      </div>
                      <span class="fs-6 fw-medium text-theme-second pe-3">400M</span>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 flex-fill">
                    <div class="distance-item bg-theme-light rounded-lg d-flex align-items-center h-100 p-3">
                      <div
                        class="icon-box bg-white rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center me-3">
                        <img src="/uploads/003-bank.svg" width="28" height="28" alt="pool icon" class="lazy contain">
                      </div>
                      <div class="d-flex flex-column align-items-start ls-05 me-auto">
                        <strong class="d-inline-block fw-medium d-block lh-sm">Şehir Merkezi</strong>
                        <span class="text-theme-secondary">Antalya</span>
                      </div>
                      <span class="fs-6 fw-medium text-theme-second pe-3">100KM</span>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 flex-fill">
                    <div class="distance-item bg-theme-light rounded-lg d-flex align-items-center h-100 p-3">
                      <div
                        class="icon-box bg-white rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center me-3">
                        <img src="/uploads/005-shopping-cart.svg" width="28" height="28" alt="pool icon"
                          class="lazy contain">
                      </div>
                      <div class="d-flex flex-column align-items-start ls-05 me-auto">
                        <strong class="d-inline-block fw-medium d-block lh-sm">Market</strong>
                        <span class="text-theme-secondary"></span>
                      </div>
                      <span class="fs-6 fw-medium text-theme-second pe-3">30M</span>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 flex-fill">
                    <div class="distance-item bg-theme-light rounded-lg d-flex align-items-center h-100 p-3">
                      <div
                        class="icon-box bg-white rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center me-3">
                        <img src="/uploads/001-beach-umbrella.svg" width="28" height="28" alt="pool icon"
                          class="lazy contain">
                      </div>
                      <div class="d-flex flex-column align-items-start ls-05 me-auto">
                        <strong class="d-inline-block fw-medium d-block lh-sm">Denize Uzaklığı</strong>
                        <span class="text-theme-secondary"></span>
                      </div>
                      <span class="fs-6 fw-medium text-theme-second pe-3">Denize Sıfır</span>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 flex-fill">
                    <div class="distance-item bg-theme-light rounded-lg d-flex align-items-center h-100 p-3">
                      <div
                        class="icon-box bg-white rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center me-3">
                        <img src="/uploads/004-dinner.svg" width="28" height="28" alt="pool icon" class="lazy contain">
                      </div>
                      <div class="d-flex flex-column align-items-start ls-05 me-auto">
                        <strong class="d-inline-block fw-medium d-block lh-sm">Restoran</strong>
                        <span class="text-theme-secondary"></span>
                      </div>
                      <span class="fs-6 fw-medium text-theme-second pe-3">120M</span>
                    </div>
                  </div>
                </div>
                <div class="distances-actions d-flex mt-2">
                  <a href="#!"
                    class="act btn btn-theme-first btn-ripple fs-7 ls-05 d-flex align-items-center justify-content-center py-4 col-6">
                    <img src="/img/icons/002-maps.svg" width="47" height="47" alt="map"
                      class="lazy contain me-2 me-sm-3 my-sm-1">
                    <span class="d-inline-block ps-1">Haritada Görüntüle</span>
                  </a>
                  <a href="#!"
                    class="act btn btn-theme-first-dark btn-ripple fs-7 ls-05 d-flex align-items-center justify-content-center py-4 col-6">
                    <img src="/img/icons/001-map.svg" width="47" height="47" alt="map"
                      class="lazy contain me-2 me-sm-3 my-sm-1">
                    <span class="d-inline-block ps-1">Villaya Konum Al</span>
                  </a>
                </div>
                <div class="alert alert-warning p-xl py-4 mt-5">
                  <span class="fs-5 ls-05 lh-sm d-block pt-3 mb-2">Konum Notu</span>
                  <div class="fs-7 ls-05 text-theme-secondary mb-0">
                    <p>
                      Türk Kahvesi, Sıkma Portakal Suyu ve tüm meyve suları, Yabancı Alkollü İçecekler, Disco´da alınan
                      içecekler, Kuru temizleme, kuaför, doktor ve odada kasa ücretlidir.
                    </p>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="availability" role="tabpanel" aria-labelledby="availability-tab">
                <div id="availability-calendar" class="availability-calendar"></div>
              </div>
              <div class="tab-pane fade" id="comments" role="tabpanel" aria-labelledby="comments-tab">
                <div class="d-flex align-items-center flex-wrap mb-4 pb-sm-2">
                  <div class="d-flex flex-column lh-sm text-theme-first-dark me-auto">
                    <span class="d-inline-block fs-6 ls-05 fw-medium me-1">Geri dönüşlerden <img
                        src="/img/icons/018-star.svg" width="13" height="13" alt="star" class="lazy contain"></span>
                    <div class="fs-6 ls-05 d-flex align-items-center flex-wrap">
                      <strong class="fs-4 fw-medium me-2">Değerlendirme 4,9</strong>
                      <small class="text-theme-secondary">Mükemmel</small>
                    </div>
                  </div>
                  <a href="#!"
                    class="btn btn-theme-first btn-ripple fs-7 ls-05 d-flex align-items-center rounded-xl py-2 py-sm-3 px-3 px-sm-4 my-2">
                    <svg class="me-2 my-1 ms-sm-2" width="21px" height="21px" viewBox="0 0 21 21" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Villa-Yorumlar" transform="translate(-1033.000000, -856.000000)" fill="#FFFFFF"
                          fill-rule="nonzero">
                          <g id="plus" transform="translate(1033.000000, 856.000000)">
                            <path
                              d="M10.24,0 C4.59343752,0 0,4.59343752 0,10.24 C0,15.8865625 4.59343752,20.48 10.24,20.48 C15.8865625,20.48 20.48,15.8865625 20.48,10.24 C20.48,4.59343752 15.8865625,0 10.24,0 Z M14.72,11.0932812 L11.0932812,11.0932812 L11.0932812,14.72 C11.0932812,15.1910938 10.7110938,15.5732812 10.24,15.5732812 C9.76890624,15.5732812 9.38671876,15.1910938 9.38671876,14.72 L9.38671876,11.0932812 L5.76,11.0932812 C5.28890624,11.0932812 4.90671876,10.7110938 4.90671876,10.24 C4.90671876,9.76890624 5.28890624,9.38671876 5.76,9.38671876 L9.38671876,9.38671876 L9.38671876,5.76 C9.38671876,5.28890624 9.76890624,4.90671876 10.24,4.90671876 C10.7110938,4.90671876 11.0932812,5.28890624 11.0932812,5.76 L11.0932812,9.38671876 L14.72,9.38671876 C15.1910938,9.38671876 15.5732812,9.76890624 15.5732812,10.24 C15.5732812,10.7110938 15.1910938,11.0932812 14.72,11.0932812 L14.72,11.0932812 Z"
                              id="Shape"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span class="d-inline-block pe-2">Yorum Yap</span>
                  </a>
                </div>
                <div class="comment-list">
                  <div
                    class="comment-item rounded-xl border border-5 border-theme-light d-flex flex-column p-3 p-sm-4 mb-2">
                    <div class="comment-header d-flex fs-6 ls-05 lh-sm px-2 mb-2">
                      <span class="holder-name fw-medium me-auto">Fatih ********</span>
                      <div class="text-theme-secondary d-flex align-items-center">
                        <img src="/img/icons/018-star.svg" width="13" height="13" alt="star" class="lazy contain me-1">
                        <small class="">4,9</small>
                      </div>
                    </div>
                    <div class="comment-content text-theme-secondary ls-05 fw-medium px-2">
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look even slightly
                        believable</p>
                    </div>
                  </div>
                  <div
                    class="comment-item rounded-xl border border-5 border-theme-light d-flex flex-column p-3 p-sm-4 mb-2">
                    <div class="comment-header d-flex fs-6 ls-05 lh-sm px-2 mb-2">
                      <span class="holder-name fw-medium me-auto">Kaan ********</span>
                      <div class="text-theme-secondary d-flex align-items-center">
                        <img src="/img/icons/018-star.svg" width="13" height="13" alt="star" class="lazy contain me-1">
                        <small class="">4,9</small>
                      </div>
                    </div>
                    <div class="comment-content text-theme-secondary ls-05 fw-medium px-2">
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look even slightly
                        believable</p>
                    </div>
                  </div>
                  <div
                    class="comment-item rounded-xl border border-5 border-theme-light d-flex flex-column p-3 p-sm-4 mb-2">
                    <div class="comment-header d-flex fs-6 ls-05 lh-sm px-2 mb-2">
                      <span class="holder-name fw-medium me-auto">Tolga ********</span>
                      <div class="text-theme-secondary d-flex align-items-center">
                        <img src="/img/icons/018-star.svg" width="13" height="13" alt="star" class="lazy contain me-1">
                        <small class="">4,9</small>
                      </div>
                    </div>
                    <div class="comment-content text-theme-secondary ls-05 fw-medium px-2">
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look even slightly
                        believable</p>
                    </div>
                  </div>
                  <div
                    class="comment-item rounded-xl border border-5 border-theme-light d-flex flex-column p-3 p-sm-4 mb-2">
                    <div class="comment-header d-flex fs-6 ls-05 lh-sm px-2 mb-2">
                      <span class="holder-name fw-medium me-auto">Yasin ********</span>
                      <div class="text-theme-secondary d-flex align-items-center">
                        <img src="/img/icons/018-star.svg" width="13" height="13" alt="star" class="lazy contain me-1">
                        <small class="">4,9</small>
                      </div>
                    </div>
                    <div class="comment-content text-theme-secondary ls-05 fw-medium px-2">
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look even slightly
                        believable</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="rules" role="tabpanel" aria-labelledby="rules-tab">
                <span class="opacity-50 ls-05 fs-7 d-block text-center fw-medium">TASARIM ÇİZİLMEMİŞ</span>
              </div>
              <div class="tab-pane fade" id="activities" role="tabpanel" aria-labelledby="activities-tab">
                <div class="section-caption ls-05 mb-3 mb-sm-4 pb-1">
                  <span class="fs-5 fw-medium">Aktiviteler</span>
                  <p class="fs-6">Kültürel etkinler, eğlence, doğa gezileriyle tatilinizi zenginleştirin.</p>
                </div>
                <div class="activities">
                  <div class="row overflow-auto flex-nowrap flex-md-wrap gx-2 gx-sm-3 pb-md-0 pb-2">
                    <div class="col-8 col-sm-5 col-md-4">
                      <a href="#!" class="ac-item d-block rounded-xl position-relative">
                        <div class="img-box position-relative rounded-xl overflow-hidden">
                          <img src="/uploads/activity-image1.jpg" width="256" height="529" alt="activity image"
                            class="lazy cover w-100 rounded-xl">
                        </div>
                        <div
                          class="item-caption text-white ls-05 d-flex flex-column position-absolute bottom-0 w-100 pb-5 px-4">
                          <span class="fs-4 lh-sm px-sm-2 mb-auto">Tekne Turları</span>
                          <p class="px-sm-2 mt-2 mb-4 pb-1">
                            Kalkan koyları <br>
                            Kekova Batık Şehir <br>
                            ve Dahası…
                          </p>
                          <u class="d-block lh-sm px-sm-2">Detaylar & Rezervasyon</u>
                        </div>
                      </a>
                    </div>
                    <div class="col-8 col-sm-5 col-md-4">
                      <a href="#!" class="ac-item d-block rounded-xl position-relative">
                        <div class="img-box position-relative rounded-xl overflow-hidden">
                          <img src="/uploads/activity-image2.jpg" width="256" height="529" alt="activity image"
                            class="lazy cover w-100 rounded-xl">
                        </div>
                        <div
                          class="item-caption text-white ls-05 d-flex flex-column position-absolute bottom-0 w-100 pb-5 px-4">
                          <span class="fs-4 lh-sm px-sm-2 mb-auto">Aktiviteler</span>
                          <p class="px-sm-2 mt-2 mb-4 pb-1">
                            ATV Turları <br>
                            Jeep Safari <br>
                            ve Dahası…
                          </p>
                          <u class="d-block lh-sm px-sm-2">Detaylar & Rezervasyon</u>
                        </div>
                      </a>
                    </div>
                    <div class="col-8 col-sm-5 col-md-4">
                      <a href="#!" class="ac-item d-block rounded-xl position-relative">
                        <div class="img-box position-relative rounded-xl overflow-hidden">
                          <img src="/uploads/activity-image3.jpg" width="256" height="529" alt="activity image"
                            class="lazy cover w-100 rounded-xl">
                        </div>
                        <div
                          class="item-caption text-white ls-05 d-flex flex-column position-absolute bottom-0 w-100 pb-5 px-4">
                          <span class="fs-4 lh-sm px-sm-2 mb-auto">Araç Kirala & Havalanı Transferi</span>
                          <p class="px-sm-2 mt-2 mb-4 pb-1">

                          </p>
                          <u class="d-block lh-sm px-sm-2">Detaylar & Kiralama</u>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="faq" role="tabpanel" aria-labelledby="faq-tab">
                <div class="accordion">
                  <h3
                    class="ac-header ls-05 lh-sm d-flex align-items-center py-3 px-4 rounded-lg border-3 border-theme-light bg-theme-light mt-1">
                    <span class="text d-inline-block ps-sm-3 me-auto py-sm-3">Nasıl rezervasyon yapabilirim ?</span>
                    <a href="#!"
                      class="btn btn-white btn-ripple fs-7 ls-05 fw-medium rounded-pill d-flex align-items-center me-3 me-sm-4">
                      <img src="/img/icons/play-button.svg" width="26" height="26" alt="play button"
                        class="lazy contain me-sm-2">
                      <span class="d-none d-sm-inline-block">Videolu Anlatım</span>
                    </a>
                    <svg width="11px" height="7px" viewBox="0 0 11 7" version="1.1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Villa-SSS" transform="translate(-1132.000000, -876.000000)" fill="#1A1D59"
                          fill-rule="nonzero">
                          <g id="right-arrow-(3)"
                            transform="translate(1137.833958, 879.045043) rotate(-270.000000) translate(-1137.833958, -879.045043) translate(1134.798953, 873.879001)">
                            <path
                              d="M5.9052,4.762884 L1.307292,0.16506 C1.200948,0.058632 1.058988,1.60570864e-13 0.90762,1.60570864e-13 C0.756252,1.60570864e-13 0.614292,0.058632 0.507948,0.16506 L0.169344,0.50358 C-0.050988,0.724164 -0.050988,1.082676 0.169344,1.302924 L4.03032,5.1639 L0.16506,9.02916 C0.058716,9.135588 0,9.277464 0,9.428748 C0,9.5802 0.058716,9.722076 0.16506,9.828588 L0.503664,10.167024 C0.610092,10.273452 0.751968,10.332084 0.903336,10.332084 C1.054704,10.332084 1.196664,10.273452 1.303008,10.167024 L5.9052,5.565 C6.011796,5.458236 6.070344,5.315688 6.07000944,5.164152 C6.070344,5.012028 6.011796,4.869564 5.9052,4.762884 Z"
                              id="Path"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </h3>
                  <div class="rounded-bottom-lg border-3 border-theme-light text-theme-secondary ls-05">
                    <p>
                      Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
                      ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
                      amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut
                      odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
                    </p>
                  </div>
                  <h3
                    class="ac-header ls-05 lh-sm d-flex align-items-center py-3 px-4 rounded-lg border-3 border-theme-light bg-theme-light mt-1">
                    <span class="text d-inline-block ps-sm-3 me-auto py-sm-3">Kaç Kişi Konaklayabiliyoruz ?</span>
                    <svg width="11px" height="7px" viewBox="0 0 11 7" version="1.1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Villa-SSS" transform="translate(-1132.000000, -876.000000)" fill="#1A1D59"
                          fill-rule="nonzero">
                          <g id="right-arrow-(3)"
                            transform="translate(1137.833958, 879.045043) rotate(-270.000000) translate(-1137.833958, -879.045043) translate(1134.798953, 873.879001)">
                            <path
                              d="M5.9052,4.762884 L1.307292,0.16506 C1.200948,0.058632 1.058988,1.60570864e-13 0.90762,1.60570864e-13 C0.756252,1.60570864e-13 0.614292,0.058632 0.507948,0.16506 L0.169344,0.50358 C-0.050988,0.724164 -0.050988,1.082676 0.169344,1.302924 L4.03032,5.1639 L0.16506,9.02916 C0.058716,9.135588 0,9.277464 0,9.428748 C0,9.5802 0.058716,9.722076 0.16506,9.828588 L0.503664,10.167024 C0.610092,10.273452 0.751968,10.332084 0.903336,10.332084 C1.054704,10.332084 1.196664,10.273452 1.303008,10.167024 L5.9052,5.565 C6.011796,5.458236 6.070344,5.315688 6.07000944,5.164152 C6.070344,5.012028 6.011796,4.869564 5.9052,4.762884 Z"
                              id="Path"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </h3>
                  <div class="rounded-bottom-lg border-3 border-theme-light text-theme-secondary ls-05">
                    <p>
                      Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
                      purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor
                      velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In
                      suscipit faucibus urna.
                    </p>
                  </div>
                  <h3
                    class="ac-header ls-05 lh-sm d-flex align-items-center py-3 px-4 rounded-lg border-3 border-theme-light bg-theme-light mt-1">
                    <span class="text d-inline-block ps-sm-3 me-auto py-sm-3">Yemek servisi hizmetiniz var mı ?</span>
                    <svg width="11px" height="7px" viewBox="0 0 11 7" version="1.1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Villa-SSS" transform="translate(-1132.000000, -876.000000)" fill="#1A1D59"
                          fill-rule="nonzero">
                          <g id="right-arrow-(3)"
                            transform="translate(1137.833958, 879.045043) rotate(-270.000000) translate(-1137.833958, -879.045043) translate(1134.798953, 873.879001)">
                            <path
                              d="M5.9052,4.762884 L1.307292,0.16506 C1.200948,0.058632 1.058988,1.60570864e-13 0.90762,1.60570864e-13 C0.756252,1.60570864e-13 0.614292,0.058632 0.507948,0.16506 L0.169344,0.50358 C-0.050988,0.724164 -0.050988,1.082676 0.169344,1.302924 L4.03032,5.1639 L0.16506,9.02916 C0.058716,9.135588 0,9.277464 0,9.428748 C0,9.5802 0.058716,9.722076 0.16506,9.828588 L0.503664,10.167024 C0.610092,10.273452 0.751968,10.332084 0.903336,10.332084 C1.054704,10.332084 1.196664,10.273452 1.303008,10.167024 L5.9052,5.565 C6.011796,5.458236 6.070344,5.315688 6.07000944,5.164152 C6.070344,5.012028 6.011796,4.869564 5.9052,4.762884 Z"
                              id="Path"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </h3>
                  <div class="rounded-bottom-lg border-3 border-theme-light text-theme-secondary ls-05">
                    <p>
                      Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi yemeklerinizi
                      pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.
                    </p>
                  </div>
                  <h3
                    class="ac-header ls-05 lh-sm d-flex align-items-center py-3 px-4 rounded-lg border-3 border-theme-light bg-theme-light mt-1">
                    <span class="text d-inline-block ps-sm-3 me-auto py-sm-3">Ödemeler nasıl yapılıyor ?</span>
                    <svg width="11px" height="7px" viewBox="0 0 11 7" version="1.1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Villa-SSS" transform="translate(-1132.000000, -876.000000)" fill="#1A1D59"
                          fill-rule="nonzero">
                          <g id="right-arrow-(3)"
                            transform="translate(1137.833958, 879.045043) rotate(-270.000000) translate(-1137.833958, -879.045043) translate(1134.798953, 873.879001)">
                            <path
                              d="M5.9052,4.762884 L1.307292,0.16506 C1.200948,0.058632 1.058988,1.60570864e-13 0.90762,1.60570864e-13 C0.756252,1.60570864e-13 0.614292,0.058632 0.507948,0.16506 L0.169344,0.50358 C-0.050988,0.724164 -0.050988,1.082676 0.169344,1.302924 L4.03032,5.1639 L0.16506,9.02916 C0.058716,9.135588 0,9.277464 0,9.428748 C0,9.5802 0.058716,9.722076 0.16506,9.828588 L0.503664,10.167024 C0.610092,10.273452 0.751968,10.332084 0.903336,10.332084 C1.054704,10.332084 1.196664,10.273452 1.303008,10.167024 L5.9052,5.565 C6.011796,5.458236 6.070344,5.315688 6.07000944,5.164152 C6.070344,5.012028 6.011796,4.869564 5.9052,4.762884 Z"
                              id="Path"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </h3>
                  <div class="rounded-bottom-lg border-3 border-theme-light text-theme-secondary ls-05">
                    <p>
                      Cras dictum. Pellentesque habitant morbi tristique senectus et netus
                      et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
                      faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia
                      mauris vel est.
                    </p>
                    <p>
                      Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus.
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos.
                    </p>
                  </div>
                  <h3
                    class="ac-header ls-05 lh-sm d-flex align-items-center py-3 px-4 rounded-lg border-3 border-theme-light bg-theme-light mt-1">
                    <span class="text d-inline-block ps-sm-3 me-auto py-sm-3">Ücrete Neler dahil ?</span>
                    <svg width="11px" height="7px" viewBox="0 0 11 7" version="1.1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Villa-SSS" transform="translate(-1132.000000, -876.000000)" fill="#1A1D59"
                          fill-rule="nonzero">
                          <g id="right-arrow-(3)"
                            transform="translate(1137.833958, 879.045043) rotate(-270.000000) translate(-1137.833958, -879.045043) translate(1134.798953, 873.879001)">
                            <path
                              d="M5.9052,4.762884 L1.307292,0.16506 C1.200948,0.058632 1.058988,1.60570864e-13 0.90762,1.60570864e-13 C0.756252,1.60570864e-13 0.614292,0.058632 0.507948,0.16506 L0.169344,0.50358 C-0.050988,0.724164 -0.050988,1.082676 0.169344,1.302924 L4.03032,5.1639 L0.16506,9.02916 C0.058716,9.135588 0,9.277464 0,9.428748 C0,9.5802 0.058716,9.722076 0.16506,9.828588 L0.503664,10.167024 C0.610092,10.273452 0.751968,10.332084 0.903336,10.332084 C1.054704,10.332084 1.196664,10.273452 1.303008,10.167024 L5.9052,5.565 C6.011796,5.458236 6.070344,5.315688 6.07000944,5.164152 C6.070344,5.012028 6.011796,4.869564 5.9052,4.762884 Z"
                              id="Path"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </h3>
                  <div class="rounded-bottom-lg border-3 border-theme-light text-theme-secondary ls-05">
                    <p>
                      Cras dictum. Pellentesque habitant morbi tristique senectus et netus
                      et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
                      faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia
                      mauris vel est.
                    </p>
                    <p>
                      Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus.
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sidebar col-12 col-lg-4 ps-lg-4">
            <form action="">
              <div class="booking-box search-engine rounded-xl bg-theme-light">
                <div class="box-content ls-05 px-2 py-3">
                  <div class="d-flex align-items-center ps-3 pe-1 mb-3">
                    <span class="fs-5 fw-medium me-auto">Rezervasyon</span>
                  </div>
                  <div class="bg-white rounded-xl mx-1 p-2">
                    <div class="d-flex flex-wrap">
                      <div class="dropdown-wrapper dt col-6 col-lg-12 col-xl-6">
                        <a href="javascript:void(0);"
                          class="selection d-flex text-theme-secondary position-relative px-1 py-1">
                          <div
                            class="icon-box bg-theme-light rounded-sm flex-shrink-0 d-flex align-items-center justify-content-center me-2 me-sm-3">
                            <svg width="18px" height="20px" viewBox="0 0 18 20" version="1.1"
                              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g transform="translate(-883.000000, -199.000000)" fill="#B3B6C5">
                                  <g id="001-calendar-copy" transform="translate(883.000000, 199.000000)">
                                    <path
                                      d="M11.8426003,1.98660004 L11.8426003,1.00100002 C11.8426003,0.45694881 12.2841491,0.0154000003 12.8282003,0.0154000003 C13.3722515,0.0154000003 13.8138003,0.45694881 13.8138003,1.00100002 L13.8138003,1.98660004 C15.9909907,1.98660004 17.7562004,3.75180968 17.7562004,5.92900013 L17.7562004,15.7850003 C17.7562004,17.9621908 15.9909907,19.7274004 13.8138003,19.7274004 C10.9949842,19.7274004 6.77563055,19.7274004 3.95780009,19.7274004 C1.78060964,19.7274004 0.0154000003,17.9621908 0.0154000003,15.7850003 L0.0154000003,5.92900013 C0.0154000003,3.75180968 1.78060964,1.98660004 3.95780009,1.98660004 L3.95780009,1.00100002 C3.95780009,0.45694881 4.3993489,0.0154000003 4.94340011,0.0154000003 C5.48745132,0.0154000003 5.92900013,0.45694881 5.92900013,1.00100002 L5.92900013,1.98660004 L11.8426003,1.98660004 Z M15.7850003,9.87140021 L1.98660004,9.87140021 L1.98660004,15.7850003 C1.98660004,16.8731028 2.86871206,17.7562004 3.95780009,17.7562004 L13.8138003,17.7562004 C14.9019027,17.7562004 15.7850003,16.8731028 15.7850003,15.7850003 L15.7850003,9.87140021 Z M13.8138003,3.95780009 L13.8138003,4.94340011 C13.8138003,5.48745132 13.3722515,5.92900013 12.8282003,5.92900013 C12.2841491,5.92900013 11.8426003,5.48745132 11.8426003,4.94340011 L11.8426003,3.95780009 L5.92900013,3.95780009 L5.92900013,4.94340011 C5.92900013,5.48745132 5.48745132,5.92900013 4.94340011,5.92900013 C4.3993489,5.92900013 3.95780009,5.48745132 3.95780009,4.94340011 L3.95780009,3.95780009 C2.86871206,3.95780009 1.98660004,4.8399121 1.98660004,5.92900013 L1.98660004,7.90020017 L15.7850003,7.90020017 L15.7850003,5.92900013 C15.7850003,4.8399121 14.9019027,3.95780009 13.8138003,3.95780009 Z"
                                      id="Shape"></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div class="d-flex flex-column justify-content-center overflow-hidden flex-fill ls-05 me-2">
                            <span class="fs-8">Giriş Tarihi</span>
                            <strong class="total giris fw-medium">Seçiniz</strong>
                          </div>
                        </a>
                        <div class="underbox-wrapper">
                          <div class="underbox-shadow"></div>
                          <div class="underbox">
                            <div class="underbox-header d-sm-none border-bottom border-theme-light-2 py-3">
                              <span class="fs-5-5 fw-medium ls-05">Giriş Tarihi</span>
                            </div>
                            <div class="underbox-content">
                              <div id="searchdate1" class="searchdate1 datepicker w-100 border-0 fw-600"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="dropdown-wrapper dt col-6 col-lg-12 col-xl-6">
                        <a href="javascript:void(0);"
                          class="selection d-flex text-theme-secondary position-relative px-1 py-1">
                          <div
                            class="icon-box bg-theme-light rounded-sm flex-shrink-0 d-flex align-items-center justify-content-center me-2 me-sm-3">
                            <svg width="18px" height="20px" viewBox="0 0 18 20" version="1.1"
                              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g transform="translate(-883.000000, -199.000000)" fill="#B3B6C5">
                                  <g id="001-calendar-copy" transform="translate(883.000000, 199.000000)">
                                    <path
                                      d="M11.8426003,1.98660004 L11.8426003,1.00100002 C11.8426003,0.45694881 12.2841491,0.0154000003 12.8282003,0.0154000003 C13.3722515,0.0154000003 13.8138003,0.45694881 13.8138003,1.00100002 L13.8138003,1.98660004 C15.9909907,1.98660004 17.7562004,3.75180968 17.7562004,5.92900013 L17.7562004,15.7850003 C17.7562004,17.9621908 15.9909907,19.7274004 13.8138003,19.7274004 C10.9949842,19.7274004 6.77563055,19.7274004 3.95780009,19.7274004 C1.78060964,19.7274004 0.0154000003,17.9621908 0.0154000003,15.7850003 L0.0154000003,5.92900013 C0.0154000003,3.75180968 1.78060964,1.98660004 3.95780009,1.98660004 L3.95780009,1.00100002 C3.95780009,0.45694881 4.3993489,0.0154000003 4.94340011,0.0154000003 C5.48745132,0.0154000003 5.92900013,0.45694881 5.92900013,1.00100002 L5.92900013,1.98660004 L11.8426003,1.98660004 Z M15.7850003,9.87140021 L1.98660004,9.87140021 L1.98660004,15.7850003 C1.98660004,16.8731028 2.86871206,17.7562004 3.95780009,17.7562004 L13.8138003,17.7562004 C14.9019027,17.7562004 15.7850003,16.8731028 15.7850003,15.7850003 L15.7850003,9.87140021 Z M13.8138003,3.95780009 L13.8138003,4.94340011 C13.8138003,5.48745132 13.3722515,5.92900013 12.8282003,5.92900013 C12.2841491,5.92900013 11.8426003,5.48745132 11.8426003,4.94340011 L11.8426003,3.95780009 L5.92900013,3.95780009 L5.92900013,4.94340011 C5.92900013,5.48745132 5.48745132,5.92900013 4.94340011,5.92900013 C4.3993489,5.92900013 3.95780009,5.48745132 3.95780009,4.94340011 L3.95780009,3.95780009 C2.86871206,3.95780009 1.98660004,4.8399121 1.98660004,5.92900013 L1.98660004,7.90020017 L15.7850003,7.90020017 L15.7850003,5.92900013 C15.7850003,4.8399121 14.9019027,3.95780009 13.8138003,3.95780009 Z"
                                      id="Shape"></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div class="d-flex flex-column justify-content-center overflow-hidden flex-fill ls-05 me-2">
                            <span class="fs-8">Çıkış Tarihi</span>
                            <strong class="total cikis fw-medium">Seçiniz</strong>
                          </div>
                          <input type="text" name="searchdate2"
                            class="searchdate2 visually-hidden position-absolute bottom-0 start-0" readonly="">
                        </a>
                        <div class="underbox-wrapper">
                          <div class="underbox-shadow"></div>
                          <div class="underbox">
                            <div class="underbox-header d-sm-none border-bottom border-theme-light-2 py-3">
                              <span class="fs-5-5 fw-medium ls-05">Çıkış Tarihi</span>
                            </div>
                            <div class="underbox-content">
                              <div id="searchdate2" class="searchdate2 datepicker w-100 border-0 fw-600"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="dropdown-wrapper gst">
                      <a href="javascript:void(0);" class="selection d-flex text-theme-secondary px-1 py-1">
                        <div class="icon-box bg-theme-light rounded-sm flex-shrink-0 d-flex align-items-center justify-content-center me-2 me-sm-3">
                          <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g transform="translate(-1087.000000, -198.000000)" fill="#B3B6C5" fill-rule="nonzero">
                                <g id="003-group" transform="translate(1087.000000, 198.000000)">
                                  <path
                                    d="M10.752,5.04 C12.1416094,5.04 13.272,3.9096094 13.272,2.52 C13.272,1.1303906 12.1416094,0 10.752,0 C9.3623906,0 8.232,1.1303906 8.232,2.52 C8.232,3.9096094 9.3623906,5.04 10.752,5.04 Z M10.752,1.68 C11.2151484,1.68 11.592,2.05685155 11.592,2.52 C11.592,2.98314845 11.2151484,3.36 10.752,3.36 C10.2888516,3.36 9.912,2.98314845 9.912,2.52 C9.912,2.05685155 10.2888516,1.68 10.752,1.68 Z M15.372,13.3599375 C15.372,14.3866406 14.8250156,15.3526406 13.9446562,15.8809219 L13.8839531,15.9173438 C13.5064453,16.1439141 13.272,16.5578438 13.272,16.9978594 L13.272,20.664 C13.272,21.1279688 12.8959687,21.504 12.432,21.504 C11.9680312,21.504 11.592,21.1279688 11.592,20.664 L11.592,16.9978594 C11.592,15.9711563 12.1389844,15.0051563 13.0193437,14.476875 L13.0800469,14.4404531 C13.4575547,14.2140469 13.692,13.7999531 13.692,13.3599375 L13.692,9.618 C13.692,7.8823828 12.0817266,7.518 10.731,7.518 C9.38027345,7.518 7.77,7.8823828 7.77,9.618 L7.77,13.3477969 C7.77,13.7924063 8.0080547,14.2084688 8.3911406,14.4338906 L8.4625078,14.4758906 C9.35664845,15.001875 9.912,15.9727969 9.912,17.01 L9.912,20.664 C9.912,21.1279688 9.53596875,21.504 9.072,21.504 C8.60803125,21.504 8.232,21.1279688 8.232,20.664 L8.232,17.01 C8.232,16.5653906 7.9939453,16.1493281 7.6108594,15.9240703 L7.5394922,15.8820703 C6.64535155,15.3560859 6.09,14.385 6.09,13.3477969 L6.09,9.618 C6.09,8.35258595 6.6008906,7.3326094 7.5675469,6.6684844 C8.3583281,6.1251094 9.4522969,5.838 10.731,5.838 C12.0097031,5.838 13.1036719,6.1251094 13.8944531,6.6684844 C14.8611094,7.3326094 15.372,8.35258595 15.372,9.618 L15.372,13.3599375 Z M4.2,6.72 C5.5896094,6.72 6.72,5.5896094 6.72,4.2 C6.72,2.8103906 5.5896094,1.68 4.2,1.68 C2.8103906,1.68 1.68,2.8103906 1.68,4.2 C1.68,5.5896094 2.8103906,6.72 4.2,6.72 Z M4.2,3.36 C4.66314845,3.36 5.04,3.73685155 5.04,4.2 C5.04,4.66314845 4.66314845,5.04 4.2,5.04 C3.73685155,5.04 3.36,4.66314845 3.36,4.2 C3.36,3.73685155 3.73685155,3.36 4.2,3.36 Z M6.72,17.724 L6.72,20.664 C6.72,21.1279688 6.34396875,21.504 5.88,21.504 C5.41603125,21.504 5.04,21.1279688 5.04,20.664 L5.04,17.724 C5.04,17.2600313 5.41603125,16.884 5.88,16.884 C6.34396875,16.884 6.72,17.2600313 6.72,17.724 Z M4.956,8.379 C4.956,8.84296875 4.57996875,9.219 4.116,9.219 C1.68,9.219 1.68,10.3631719 1.68,10.794 L1.68,14.364 C1.68,14.7585703 1.86834375,15.1352578 2.184,15.372 C2.9203125,15.9242344 3.36,16.8036094 3.36,17.724 L3.36,20.664 C3.36,21.1279688 2.98396875,21.504 2.52,21.504 C2.05603125,21.504 1.68,21.1279688 1.68,20.664 L1.68,17.724 C1.68,17.3294297 1.49165625,16.9527422 1.176,16.716 C0.4396875,16.1637656 0,15.2843906 0,14.364 L0,10.794 C0,9.65852345 0.466265604,8.7612656 1.3482656,8.1995156 C2.03634375,7.7611406 2.9675625,7.539 4.116,7.539 C4.57996875,7.539 4.956,7.91503125 4.956,8.379 Z M17.304,6.72 C18.6936094,6.72 19.824,5.5896094 19.824,4.2 C19.824,2.8103906 18.6936094,1.68 17.304,1.68 C15.9143906,1.68 14.784,2.8103906 14.784,4.2 C14.784,5.5896094 15.9143906,6.72 17.304,6.72 Z M17.304,3.36 C17.7671484,3.36 18.144,3.73685155 18.144,4.2 C18.144,4.66314845 17.7671484,5.04 17.304,5.04 C16.8408516,5.04 16.464,4.66314845 16.464,4.2 C16.464,3.73685155 16.8408516,3.36 17.304,3.36 Z M16.464,17.724 L16.464,20.664 C16.464,21.1279688 16.0879688,21.504 15.624,21.504 C15.1600313,21.504 14.784,21.1279688 14.784,20.664 L14.784,17.724 C14.784,17.2600313 15.1600313,16.884 15.624,16.884 C16.0879688,16.884 16.464,17.2600313 16.464,17.724 Z M21.504,10.794 L21.504,14.364 C21.504,15.2843906 21.0643125,16.1637656 20.328,16.716 C20.0123437,16.9527422 19.824,17.3294297 19.824,17.724 L19.824,20.664 C19.824,21.1279688 19.4479687,21.504 18.984,21.504 C18.5200312,21.504 18.144,21.1279688 18.144,20.664 L18.144,17.724 C18.144,16.8036094 18.5836875,15.9242344 19.32,15.372 C19.6356562,15.1352578 19.824,14.7585703 19.824,14.364 L19.824,10.794 C19.824,10.3631719 19.824,9.219 17.388,9.219 C16.9240312,9.219 16.548,8.84296875 16.548,8.379 C16.548,7.91503125 16.9240312,7.539 17.388,7.539 C18.5364375,7.539 19.4676562,7.7611406 20.1557344,8.1995156 C21.0377344,8.7612656 21.504,9.65852345 21.504,10.794 Z"
                                    id="Shape"></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div class="d-flex flex-column justify-content-center overflow-hidden flex-fill ls-05 me-2">
                          <span class="fs-8">Kişi Sayısı</span>
                          <strong class="total fw-medium">2 Yetişkin, 0 Çocuk</strong>
                        </div>
                        <img src="/img/icons/007-down-chevron.svg" width="11" height="7" alt="down-chevron"
                          class="lazy contain flex-shrink-0 align-self-center mt-1 ms-auto loaded"
                          style="background-image: url(/img/icons/007-down-chevron.svg);">
                      </a>
                      <div class="underbox-wrapper">
                        <div class="underbox-shadow"></div>
                        <div class="underbox">
                          <div class="underbox-header d-sm-none border-bottom border-theme-light-2 py-3">
                            <span class="fs-5-5 fw-medium ls-05">Kişi Sayısı</span>
                          </div>
                          <div class="underbox-content">
                            <div class="select-item d-flex align-items-center justify-content-between lh-sm mb-3 pb-1">
                              <div class="d-flex flex-column">
                                <strong class="fw-medium fs-6">Yetişkinler</strong>
                                <span class="text-theme-secondary text-opacity-75">13 yaş ve üzeri</span>
                              </div>
                              <div class="d-flex align-items-center text-center">
                                <button type="button"
                                  class="select-btn minus bg-transparent d-flex align-items-center justify-content-center rounded-circle"
                                  disabled>
                                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                    role="presentation" focusable="false"
                                    style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                                    <path d="m2 16h28"></path>
                                  </svg>
                                </button>
                                <input type="text" name="yetiskinler" class="select-input text-center fs-5 px-2"
                                  value="1" data-min="1" data-max="10" data-text="Yetişkin, " readonly>
                                <button type="button"
                                  class="select-btn plus bg-transparent d-flex align-items-center justify-content-center rounded-circle">
                                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                    role="presentation" focusable="false"
                                    style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                                    <path d="m2 16h28m-14-14v28"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div class="select-item d-flex align-items-center justify-content-between lh-sm mb-3 pb-1">
                              <div class="d-flex flex-column">
                                <strong class="fw-medium fs-6">Çocuklar</strong>
                                <span class="text-theme-secondary text-opacity-75">2-12 yaş</span>
                              </div>
                              <div class="d-flex align-items-center text-center">
                                <button type="button"
                                  class="select-btn minus bg-transparent d-flex align-items-center justify-content-center rounded-circle"
                                  disabled>
                                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                    role="presentation" focusable="false"
                                    style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                                    <path d="m2 16h28"></path>
                                  </svg>
                                </button>
                                <input type="text" name="cocuklar" class="select-input text-center fs-5 px-2" value="0"
                                  data-min="0" data-max="10" data-text="Çocuk" readonly>
                                <button type="button"
                                  class="select-btn plus bg-transparent d-flex align-items-center justify-content-center rounded-circle">
                                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                    role="presentation" focusable="false"
                                    style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                                    <path d="m2 16h28m-14-14v28"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="underbox-footer"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul class="booking-summary px-4 pt-4 bg-white rounded-xl mt-3">
                    <li class="d-flex py-2">
                      <span class="text-theme-secondary text-opacity-50 me-auto">Konaklama Süresi</span>
                      <strong class="fw-medium">5 Gece</strong>
                    </li>
                    <li class="d-flex py-2">
                      <span class="text-theme-secondary text-opacity-50 me-auto">Konaklama Tutarı</span>
                      <strong class="fw-medium">8.500₺</strong>
                    </li>
                    <li class="d-flex py-2">
                      <span class="text-theme-secondary text-opacity-50 me-auto">Havuz Isıtma Ücreti</span>
                      <strong class="fw-medium">520₺</strong>
                    </li>
                    <li class="d-flex py-2">
                      <span class="text-theme-secondary text-opacity-50 me-auto">Temizlik Ücreti</span>
                      <strong class="fw-medium">300₺</strong>
                    </li>
                    <li class="d-flex py-2">
                      <span class="text-theme-secondary text-opacity-50 me-auto">Ön Ödeme</span>
                      <strong class="fw-medium">2000₺</strong>
                    </li>
                    <li class="d-flex py-2">
                      <span class="text-theme-secondary text-opacity-50 me-auto">Girişte Ödenecek</span>
                      <strong class="fw-medium">6300₺</strong>
                    </li>
                    <li class="d-flex py-2">
                      <span class="text-theme-secondary text-opacity-50 me-auto">Toplam</span>
                      <strong class="fw-medium fs-5-5">10250₺</strong>
                    </li>
                  </ul>
                </div>
                <button type="submit"
                  class="btn btn-theme-second btn-ripple fs-7 fw-medium lh-sm ls-05 rounded-0 rounded-bottom-xl w-100 p-4">Ön
                  Rezervasyon Talebi Gönder</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div class="spacer py-5"></div>
    <section class="recommended-section">
      <div class="container">
        <div class="section-caption mb-4 pb-3">
          <span class="fs-5 fw-medium">Bu Bölgede Tavsiye Ettiğimiz Diğer Villalar</span>
        </div>
        <div class="swiper scrollable list-slide list-wrapper scroll-wrapper mb-4 pb-1">
          <div class="swiper-wrapper scroll-content d-flex">
            <div class="swiper-slide">
              <div class="list-item rounded-xxl">
                <div class="list-image position-relative p-2">
                  <a href="#!" class="d-block flex-shrink-0">
                    <img src="/uploads/hotel-image1.jpg" width="280" height="186" alt="hotel image"
                      class="main-image bg-light lazy cover rounded-xl w-100">
                  </a>
                  <div class="position-absolute top-0 end-0 pt-3 mt-1 pe-3">
                    <a href="javascript:void(0);"
                      class="fav-btn rounded-circle d-flex align-items-center justify-content-center p-0"
                      onclick="$(this).toggleClass('active')">
                      <svg class="first" width="16px" height="15px" viewBox="0 0 16 15" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-615.000000, -829.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g id="heart-(3)-copy" transform="translate(615.000000, 829.000000)">
                              <path
                                d="M14.031424,1.36352 C13.241024,0.513952 12.133472,0.03056 10.973088,0.02867913 C9.811776,0.030112 8.703072,0.513248 7.911456,1.362976 L7.641664,1.648064 L7.371872,1.362976 C5.801088,-0.327616 3.157184,-0.424704 1.466624,1.14608 C1.391712,1.215712 1.31936,1.288032 1.249728,1.362976 C-0.416576,3.160288 -0.416576,5.937952 1.249728,7.735264 L7.245184,14.057856 C7.452608,14.276832 7.798272,14.286208 8.017248,14.078784 C8.024416,14.072 8.031392,14.065024 8.038176,14.057856 L14.031456,7.735264 C15.697632,5.938144 15.697632,3.16064 14.031424,1.36352 Z M13.241184,6.983232 L13.24064,6.983232 L7.641664,12.888576 L2.042176,6.983232 C0.769216,5.60992 0.769216,3.487776 2.042176,2.114464 C3.198176,0.861536 5.15104,0.782976 6.403968,1.938976 C6.4648,1.995104 6.523328,2.053632 6.579456,2.114464 L7.245184,2.8168 C7.464576,3.034784 7.818784,3.034784 8.038176,2.8168 L8.703904,2.115008 C9.859904,0.86208 11.812768,0.78352 13.065696,1.93952 C13.126528,1.995648 13.185056,2.054176 13.241184,2.115008 C14.525216,3.490496 14.534624,5.616512 13.241184,6.983232 Z"
                                id="Shape"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <svg class="second position-absolute top-50 start-50" width="13px" height="12px"
                        viewBox="0 0 13 12" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-1226.000000, -35.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g id="heart" transform="translate(1226.000000, 35.000000)">
                              <path
                                d="M11.7845703,1.11445313 C11.1219727,0.395800775 10.212793,0 9.2243164,0 C8.48544923,0 7.80878905,0.23359375 7.21308595,0.694238275 C6.9125,0.9267578 6.64013673,1.21123048 6.4,1.54326173 C6.15996095,1.21132813 5.8875,0.9267578 5.5868164,0.694238275 C4.99121095,0.23359375 4.31455078,0 3.5756836,0 C2.58720703,0 1.6779297,0.395800775 1.01533203,1.11445313 C0.360644525,1.82470703 1.42108547e-15,2.79501953 1.42108547e-15,3.84677735 C1.42108547e-15,4.92929688 0.403417975,5.92021485 1.26953125,6.96533203 C2.04433595,7.9001953 3.15791015,8.84921875 4.44746095,9.94814453 C4.88779298,10.3234375 5.38691405,10.7488281 5.90517578,11.2019531 C6.04208985,11.321875 6.21777345,11.3878906 6.4,11.3878906 C6.5821289,11.3878906 6.75791015,11.321875 6.8946289,11.2021485 C7.41289063,10.7489258 7.9123047,10.3233398 8.35283203,9.94785155 C9.6421875,8.8491211 10.7557617,7.9001953 11.5305664,6.96523438 C12.3966797,5.92021485 12.8,4.92929688 12.8,3.8466797 C12.8,2.79501953 12.4393555,1.82470703 11.7845703,1.11445313 Z"
                                id="Path"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="list-content ps-4 pe-3 pt-2 pb-3">
                  <div class="d-flex flex-column mb-2 pb-1">
                    <div class="d-flex align-items-center">
                      <span class="list-title fs-6 lh-sm fw-medium ls-05 d-block me-2">By Marriott Hotel</span>
                      <div class="d-flex align-items-center fw-medium text-theme-secondary">
                        <img src="/img/icons/011-star-icon.svg" width="13" height="13" alt="star"
                          class="lazy contain flex-shrink-0">&nbsp;
                        <span>4,9</span>
                      </div>
                    </div>
                    <div class="d-flex align-items-center text-theme-secondary">
                      <img src="/img/icons/003-pin.svg" width="15" height="18" alt="pin"
                        class="lazy contain flex-shrink-0 me-2">
                      <span class="lh-sm">Lara / Antalya</span>
                    </div>
                  </div>
                  <div class="alert alert-primary fs-8 lh-1 fw-medium ls-05 d-inline-block p-2 mb-2">
                    <span class="d-block px-1">Erken Rezervasyonda %35 indirim</span>
                  </div>
                  <div class="d-flex flex-column lh-sm ls-05 mt-1">
                    <del class="text-secondary">2.526,50 TL</del>
                    <span class="fs-5-5">2.526,50 TL <em class="font-normal text-secondary fs-7">/ Gece</em></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="list-item rounded-xxl">
                <div class="list-image position-relative p-2">
                  <a href="#!" class="d-block flex-shrink-0">
                    <img src="/uploads/hotel-image2.jpg" width="280" height="186" alt="hotel image"
                      class="main-image bg-light lazy cover rounded-xl w-100">
                  </a>
                  <div class="position-absolute top-0 end-0 pt-3 mt-1 pe-3">
                    <a href="javascript:void(0);"
                      class="fav-btn rounded-circle d-flex align-items-center justify-content-center p-0"
                      onclick="$(this).toggleClass('active')">
                      <svg class="first" width="16px" height="15px" viewBox="0 0 16 15" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-615.000000, -829.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g id="heart-(3)-copy" transform="translate(615.000000, 829.000000)">
                              <path
                                d="M14.031424,1.36352 C13.241024,0.513952 12.133472,0.03056 10.973088,0.02867913 C9.811776,0.030112 8.703072,0.513248 7.911456,1.362976 L7.641664,1.648064 L7.371872,1.362976 C5.801088,-0.327616 3.157184,-0.424704 1.466624,1.14608 C1.391712,1.215712 1.31936,1.288032 1.249728,1.362976 C-0.416576,3.160288 -0.416576,5.937952 1.249728,7.735264 L7.245184,14.057856 C7.452608,14.276832 7.798272,14.286208 8.017248,14.078784 C8.024416,14.072 8.031392,14.065024 8.038176,14.057856 L14.031456,7.735264 C15.697632,5.938144 15.697632,3.16064 14.031424,1.36352 Z M13.241184,6.983232 L13.24064,6.983232 L7.641664,12.888576 L2.042176,6.983232 C0.769216,5.60992 0.769216,3.487776 2.042176,2.114464 C3.198176,0.861536 5.15104,0.782976 6.403968,1.938976 C6.4648,1.995104 6.523328,2.053632 6.579456,2.114464 L7.245184,2.8168 C7.464576,3.034784 7.818784,3.034784 8.038176,2.8168 L8.703904,2.115008 C9.859904,0.86208 11.812768,0.78352 13.065696,1.93952 C13.126528,1.995648 13.185056,2.054176 13.241184,2.115008 C14.525216,3.490496 14.534624,5.616512 13.241184,6.983232 Z"
                                id="Shape"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <svg class="second position-absolute top-50 start-50" width="13px" height="12px"
                        viewBox="0 0 13 12" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-1226.000000, -35.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g id="heart" transform="translate(1226.000000, 35.000000)">
                              <path
                                d="M11.7845703,1.11445313 C11.1219727,0.395800775 10.212793,0 9.2243164,0 C8.48544923,0 7.80878905,0.23359375 7.21308595,0.694238275 C6.9125,0.9267578 6.64013673,1.21123048 6.4,1.54326173 C6.15996095,1.21132813 5.8875,0.9267578 5.5868164,0.694238275 C4.99121095,0.23359375 4.31455078,0 3.5756836,0 C2.58720703,0 1.6779297,0.395800775 1.01533203,1.11445313 C0.360644525,1.82470703 1.42108547e-15,2.79501953 1.42108547e-15,3.84677735 C1.42108547e-15,4.92929688 0.403417975,5.92021485 1.26953125,6.96533203 C2.04433595,7.9001953 3.15791015,8.84921875 4.44746095,9.94814453 C4.88779298,10.3234375 5.38691405,10.7488281 5.90517578,11.2019531 C6.04208985,11.321875 6.21777345,11.3878906 6.4,11.3878906 C6.5821289,11.3878906 6.75791015,11.321875 6.8946289,11.2021485 C7.41289063,10.7489258 7.9123047,10.3233398 8.35283203,9.94785155 C9.6421875,8.8491211 10.7557617,7.9001953 11.5305664,6.96523438 C12.3966797,5.92021485 12.8,4.92929688 12.8,3.8466797 C12.8,2.79501953 12.4393555,1.82470703 11.7845703,1.11445313 Z"
                                id="Path"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="list-content ps-4 pe-3 pt-2 pb-3">
                  <div class="d-flex flex-column mb-2 pb-1">
                    <div class="d-flex align-items-center">
                      <span class="list-title fs-6 lh-sm fw-medium ls-05 d-block me-2">The European Hotel</span>
                      <div class="d-flex align-items-center fw-medium text-theme-secondary">
                        <img src="/img/icons/011-star-icon.svg" width="13" height="13" alt="star"
                          class="lazy contain flex-shrink-0">&nbsp;
                        <span>4,9</span>
                      </div>
                    </div>
                    <div class="d-flex align-items-center text-theme-secondary">
                      <img src="/img/icons/003-pin.svg" width="15" height="18" alt="pin"
                        class="lazy contain flex-shrink-0 me-2">
                      <span class="lh-sm">Lara / Antalya</span>
                    </div>
                  </div>
                  <div class="alert alert-primary fs-8 lh-1 fw-medium ls-05 d-inline-block p-2 mb-2">
                    <span class="d-block px-1">Erken Rezervasyonda %35 indirim</span>
                  </div>
                  <div class="d-flex flex-column lh-sm ls-05 mt-1">
                    <del class="text-secondary">2.526,50 TL</del>
                    <span class="fs-5-5">2.526,50 TL <em class="font-normal text-secondary fs-7">/ Gece</em></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="list-item rounded-xxl">
                <div class="list-image position-relative p-2">
                  <a href="#!" class="d-block flex-shrink-0">
                    <img src="/uploads/hotel-image3.jpg" width="280" height="186" alt="hotel image"
                      class="main-image bg-light lazy cover rounded-xl w-100">
                  </a>
                  <div class="position-absolute top-0 end-0 pt-3 mt-1 pe-3">
                    <a href="javascript:void(0);"
                      class="fav-btn rounded-circle d-flex align-items-center justify-content-center p-0 active"
                      onclick="$(this).toggleClass('active')">
                      <svg class="first" width="16px" height="15px" viewBox="0 0 16 15" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-615.000000, -829.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g id="heart-(3)-copy" transform="translate(615.000000, 829.000000)">
                              <path
                                d="M14.031424,1.36352 C13.241024,0.513952 12.133472,0.03056 10.973088,0.02867913 C9.811776,0.030112 8.703072,0.513248 7.911456,1.362976 L7.641664,1.648064 L7.371872,1.362976 C5.801088,-0.327616 3.157184,-0.424704 1.466624,1.14608 C1.391712,1.215712 1.31936,1.288032 1.249728,1.362976 C-0.416576,3.160288 -0.416576,5.937952 1.249728,7.735264 L7.245184,14.057856 C7.452608,14.276832 7.798272,14.286208 8.017248,14.078784 C8.024416,14.072 8.031392,14.065024 8.038176,14.057856 L14.031456,7.735264 C15.697632,5.938144 15.697632,3.16064 14.031424,1.36352 Z M13.241184,6.983232 L13.24064,6.983232 L7.641664,12.888576 L2.042176,6.983232 C0.769216,5.60992 0.769216,3.487776 2.042176,2.114464 C3.198176,0.861536 5.15104,0.782976 6.403968,1.938976 C6.4648,1.995104 6.523328,2.053632 6.579456,2.114464 L7.245184,2.8168 C7.464576,3.034784 7.818784,3.034784 8.038176,2.8168 L8.703904,2.115008 C9.859904,0.86208 11.812768,0.78352 13.065696,1.93952 C13.126528,1.995648 13.185056,2.054176 13.241184,2.115008 C14.525216,3.490496 14.534624,5.616512 13.241184,6.983232 Z"
                                id="Shape"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <svg class="second position-absolute top-50 start-50" width="13px" height="12px"
                        viewBox="0 0 13 12" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-1226.000000, -35.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g id="heart" transform="translate(1226.000000, 35.000000)">
                              <path
                                d="M11.7845703,1.11445313 C11.1219727,0.395800775 10.212793,0 9.2243164,0 C8.48544923,0 7.80878905,0.23359375 7.21308595,0.694238275 C6.9125,0.9267578 6.64013673,1.21123048 6.4,1.54326173 C6.15996095,1.21132813 5.8875,0.9267578 5.5868164,0.694238275 C4.99121095,0.23359375 4.31455078,0 3.5756836,0 C2.58720703,0 1.6779297,0.395800775 1.01533203,1.11445313 C0.360644525,1.82470703 1.42108547e-15,2.79501953 1.42108547e-15,3.84677735 C1.42108547e-15,4.92929688 0.403417975,5.92021485 1.26953125,6.96533203 C2.04433595,7.9001953 3.15791015,8.84921875 4.44746095,9.94814453 C4.88779298,10.3234375 5.38691405,10.7488281 5.90517578,11.2019531 C6.04208985,11.321875 6.21777345,11.3878906 6.4,11.3878906 C6.5821289,11.3878906 6.75791015,11.321875 6.8946289,11.2021485 C7.41289063,10.7489258 7.9123047,10.3233398 8.35283203,9.94785155 C9.6421875,8.8491211 10.7557617,7.9001953 11.5305664,6.96523438 C12.3966797,5.92021485 12.8,4.92929688 12.8,3.8466797 C12.8,2.79501953 12.4393555,1.82470703 11.7845703,1.11445313 Z"
                                id="Path"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="list-content ps-4 pe-3 pt-2 pb-3">
                  <div class="d-flex flex-column mb-2 pb-1">
                    <div class="d-flex align-items-center">
                      <span class="list-title fs-6 lh-sm fw-medium ls-05 d-block me-2">Nirvana Cosmopolitan Hotel</span>
                      <div class="d-flex align-items-center fw-medium text-theme-secondary">
                        <img src="/img/icons/011-star-icon.svg" width="13" height="13" alt="star"
                          class="lazy contain flex-shrink-0">&nbsp;
                        <span>4,9</span>
                      </div>
                    </div>
                    <div class="d-flex align-items-center text-theme-secondary">
                      <img src="/img/icons/003-pin.svg" width="15" height="18" alt="pin"
                        class="lazy contain flex-shrink-0 me-2">
                      <span class="lh-sm">Lara / Antalya</span>
                    </div>
                  </div>
                  <div class="alert alert-primary fs-8 lh-1 fw-medium ls-05 d-inline-block p-2 mb-2">
                    <span class="d-block px-1">Erken Rezervasyonda %35 indirim</span>
                  </div>
                  <div class="d-flex flex-column lh-sm ls-05 mt-1">
                    <del class="text-secondary">2.526,50 TL</del>
                    <span class="fs-5-5">2.526,50 TL <em class="font-normal text-secondary fs-7">/ Gece</em></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="list-item rounded-xxl">
                <div class="list-image position-relative p-2">
                  <a href="#!" class="d-block flex-shrink-0">
                    <img src="/uploads/hotel-image4.jpg" width="280" height="186" alt="hotel image"
                      class="main-image bg-light lazy cover rounded-xl w-100">
                  </a>
                  <div class="position-absolute top-0 end-0 pt-3 mt-1 pe-3">
                    <a href="javascript:void(0);"
                      class="fav-btn rounded-circle d-flex align-items-center justify-content-center p-0"
                      onclick="$(this).toggleClass('active')">
                      <svg class="first" width="16px" height="15px" viewBox="0 0 16 15" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-615.000000, -829.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g id="heart-(3)-copy" transform="translate(615.000000, 829.000000)">
                              <path
                                d="M14.031424,1.36352 C13.241024,0.513952 12.133472,0.03056 10.973088,0.02867913 C9.811776,0.030112 8.703072,0.513248 7.911456,1.362976 L7.641664,1.648064 L7.371872,1.362976 C5.801088,-0.327616 3.157184,-0.424704 1.466624,1.14608 C1.391712,1.215712 1.31936,1.288032 1.249728,1.362976 C-0.416576,3.160288 -0.416576,5.937952 1.249728,7.735264 L7.245184,14.057856 C7.452608,14.276832 7.798272,14.286208 8.017248,14.078784 C8.024416,14.072 8.031392,14.065024 8.038176,14.057856 L14.031456,7.735264 C15.697632,5.938144 15.697632,3.16064 14.031424,1.36352 Z M13.241184,6.983232 L13.24064,6.983232 L7.641664,12.888576 L2.042176,6.983232 C0.769216,5.60992 0.769216,3.487776 2.042176,2.114464 C3.198176,0.861536 5.15104,0.782976 6.403968,1.938976 C6.4648,1.995104 6.523328,2.053632 6.579456,2.114464 L7.245184,2.8168 C7.464576,3.034784 7.818784,3.034784 8.038176,2.8168 L8.703904,2.115008 C9.859904,0.86208 11.812768,0.78352 13.065696,1.93952 C13.126528,1.995648 13.185056,2.054176 13.241184,2.115008 C14.525216,3.490496 14.534624,5.616512 13.241184,6.983232 Z"
                                id="Shape"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <svg class="second position-absolute top-50 start-50" width="13px" height="12px"
                        viewBox="0 0 13 12" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-1226.000000, -35.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g id="heart" transform="translate(1226.000000, 35.000000)">
                              <path
                                d="M11.7845703,1.11445313 C11.1219727,0.395800775 10.212793,0 9.2243164,0 C8.48544923,0 7.80878905,0.23359375 7.21308595,0.694238275 C6.9125,0.9267578 6.64013673,1.21123048 6.4,1.54326173 C6.15996095,1.21132813 5.8875,0.9267578 5.5868164,0.694238275 C4.99121095,0.23359375 4.31455078,0 3.5756836,0 C2.58720703,0 1.6779297,0.395800775 1.01533203,1.11445313 C0.360644525,1.82470703 1.42108547e-15,2.79501953 1.42108547e-15,3.84677735 C1.42108547e-15,4.92929688 0.403417975,5.92021485 1.26953125,6.96533203 C2.04433595,7.9001953 3.15791015,8.84921875 4.44746095,9.94814453 C4.88779298,10.3234375 5.38691405,10.7488281 5.90517578,11.2019531 C6.04208985,11.321875 6.21777345,11.3878906 6.4,11.3878906 C6.5821289,11.3878906 6.75791015,11.321875 6.8946289,11.2021485 C7.41289063,10.7489258 7.9123047,10.3233398 8.35283203,9.94785155 C9.6421875,8.8491211 10.7557617,7.9001953 11.5305664,6.96523438 C12.3966797,5.92021485 12.8,4.92929688 12.8,3.8466797 C12.8,2.79501953 12.4393555,1.82470703 11.7845703,1.11445313 Z"
                                id="Path"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="list-content ps-4 pe-3 pt-2 pb-3">
                  <div class="d-flex flex-column mb-2 pb-1">
                    <div class="d-flex align-items-center">
                      <span class="list-title fs-6 lh-sm fw-medium ls-05 d-block me-2">The Sense De Luxe Hotel</span>
                      <div class="d-flex align-items-center fw-medium text-theme-secondary">
                        <img src="/img/icons/011-star-icon.svg" width="13" height="13" alt="star"
                          class="lazy contain flex-shrink-0">&nbsp;
                        <span>4,9</span>
                      </div>
                    </div>
                    <div class="d-flex align-items-center text-theme-secondary">
                      <img src="/img/icons/003-pin.svg" width="15" height="18" alt="pin"
                        class="lazy contain flex-shrink-0 me-2">
                      <span class="lh-sm">Lara / Antalya</span>
                    </div>
                  </div>
                  <div class="alert alert-primary fs-8 lh-1 fw-medium ls-05 d-inline-block p-2 mb-2">
                    <span class="d-block px-1">Erken Rezervasyonda %35 indirim</span>
                  </div>
                  <div class="d-flex flex-column lh-sm ls-05 mt-1">
                    <del class="text-secondary">2.526,50 TL</del>
                    <span class="fs-5-5">2.526,50 TL <em class="font-normal text-secondary fs-7">/ Gece</em></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="list-item rounded-xxl">
                <div class="list-image position-relative p-2">
                  <a href="#!" class="d-block flex-shrink-0">
                    <img src="/uploads/hotel-image5.jpg" width="280" height="186" alt="hotel image"
                      class="main-image bg-light lazy cover rounded-xl w-100">
                  </a>
                  <div class="position-absolute top-0 end-0 pt-3 mt-1 pe-3">
                    <a href="javascript:void(0);"
                      class="fav-btn rounded-circle d-flex align-items-center justify-content-center p-0"
                      onclick="$(this).toggleClass('active')">
                      <svg class="first" width="16px" height="15px" viewBox="0 0 16 15" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-615.000000, -829.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g id="heart-(3)-copy" transform="translate(615.000000, 829.000000)">
                              <path
                                d="M14.031424,1.36352 C13.241024,0.513952 12.133472,0.03056 10.973088,0.02867913 C9.811776,0.030112 8.703072,0.513248 7.911456,1.362976 L7.641664,1.648064 L7.371872,1.362976 C5.801088,-0.327616 3.157184,-0.424704 1.466624,1.14608 C1.391712,1.215712 1.31936,1.288032 1.249728,1.362976 C-0.416576,3.160288 -0.416576,5.937952 1.249728,7.735264 L7.245184,14.057856 C7.452608,14.276832 7.798272,14.286208 8.017248,14.078784 C8.024416,14.072 8.031392,14.065024 8.038176,14.057856 L14.031456,7.735264 C15.697632,5.938144 15.697632,3.16064 14.031424,1.36352 Z M13.241184,6.983232 L13.24064,6.983232 L7.641664,12.888576 L2.042176,6.983232 C0.769216,5.60992 0.769216,3.487776 2.042176,2.114464 C3.198176,0.861536 5.15104,0.782976 6.403968,1.938976 C6.4648,1.995104 6.523328,2.053632 6.579456,2.114464 L7.245184,2.8168 C7.464576,3.034784 7.818784,3.034784 8.038176,2.8168 L8.703904,2.115008 C9.859904,0.86208 11.812768,0.78352 13.065696,1.93952 C13.126528,1.995648 13.185056,2.054176 13.241184,2.115008 C14.525216,3.490496 14.534624,5.616512 13.241184,6.983232 Z"
                                id="Shape"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <svg class="second position-absolute top-50 start-50" width="13px" height="12px"
                        viewBox="0 0 13 12" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-1226.000000, -35.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g id="heart" transform="translate(1226.000000, 35.000000)">
                              <path
                                d="M11.7845703,1.11445313 C11.1219727,0.395800775 10.212793,0 9.2243164,0 C8.48544923,0 7.80878905,0.23359375 7.21308595,0.694238275 C6.9125,0.9267578 6.64013673,1.21123048 6.4,1.54326173 C6.15996095,1.21132813 5.8875,0.9267578 5.5868164,0.694238275 C4.99121095,0.23359375 4.31455078,0 3.5756836,0 C2.58720703,0 1.6779297,0.395800775 1.01533203,1.11445313 C0.360644525,1.82470703 1.42108547e-15,2.79501953 1.42108547e-15,3.84677735 C1.42108547e-15,4.92929688 0.403417975,5.92021485 1.26953125,6.96533203 C2.04433595,7.9001953 3.15791015,8.84921875 4.44746095,9.94814453 C4.88779298,10.3234375 5.38691405,10.7488281 5.90517578,11.2019531 C6.04208985,11.321875 6.21777345,11.3878906 6.4,11.3878906 C6.5821289,11.3878906 6.75791015,11.321875 6.8946289,11.2021485 C7.41289063,10.7489258 7.9123047,10.3233398 8.35283203,9.94785155 C9.6421875,8.8491211 10.7557617,7.9001953 11.5305664,6.96523438 C12.3966797,5.92021485 12.8,4.92929688 12.8,3.8466797 C12.8,2.79501953 12.4393555,1.82470703 11.7845703,1.11445313 Z"
                                id="Path"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="list-content ps-4 pe-3 pt-2 pb-3">
                  <div class="d-flex flex-column mb-2 pb-1">
                    <div class="d-flex align-items-center">
                      <span class="list-title fs-6 lh-sm fw-medium ls-05 d-block me-2">Pearl Continental Hotel</span>
                      <div class="d-flex align-items-center fw-medium text-theme-secondary">
                        <img src="/img/icons/011-star-icon.svg" width="13" height="13" alt="star"
                          class="lazy contain flex-shrink-0">&nbsp;
                        <span>4,9</span>
                      </div>
                    </div>
                    <div class="d-flex align-items-center text-theme-secondary">
                      <img src="/img/icons/003-pin.svg" width="15" height="18" alt="pin"
                        class="lazy contain flex-shrink-0 me-2">
                      <span class="lh-sm">Lara / Antalya</span>
                    </div>
                  </div>
                  <div class="alert alert-primary fs-8 lh-1 fw-medium ls-05 d-inline-block p-2 mb-2">
                    <span class="d-block px-1">Erken Rezervasyonda %35 indirim</span>
                  </div>
                  <div class="d-flex flex-column lh-sm ls-05 mt-1">
                    <del class="text-secondary">2.526,50 TL</del>
                    <span class="fs-5-5">2.526,50 TL <em class="font-normal text-secondary fs-7">/ Gece</em></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="list-item rounded-xxl">
                <div class="list-image position-relative p-2">
                  <a href="#!" class="d-block flex-shrink-0">
                    <img src="/uploads/hotel-image6.jpg" width="280" height="186" alt="hotel image"
                      class="main-image bg-light lazy cover rounded-xl w-100">
                  </a>
                  <div class="position-absolute top-0 end-0 pt-3 mt-1 pe-3">
                    <a href="javascript:void(0);"
                      class="fav-btn rounded-circle d-flex align-items-center justify-content-center p-0"
                      onclick="$(this).toggleClass('active')">
                      <svg class="first" width="16px" height="15px" viewBox="0 0 16 15" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-615.000000, -829.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g id="heart-(3)-copy" transform="translate(615.000000, 829.000000)">
                              <path
                                d="M14.031424,1.36352 C13.241024,0.513952 12.133472,0.03056 10.973088,0.02867913 C9.811776,0.030112 8.703072,0.513248 7.911456,1.362976 L7.641664,1.648064 L7.371872,1.362976 C5.801088,-0.327616 3.157184,-0.424704 1.466624,1.14608 C1.391712,1.215712 1.31936,1.288032 1.249728,1.362976 C-0.416576,3.160288 -0.416576,5.937952 1.249728,7.735264 L7.245184,14.057856 C7.452608,14.276832 7.798272,14.286208 8.017248,14.078784 C8.024416,14.072 8.031392,14.065024 8.038176,14.057856 L14.031456,7.735264 C15.697632,5.938144 15.697632,3.16064 14.031424,1.36352 Z M13.241184,6.983232 L13.24064,6.983232 L7.641664,12.888576 L2.042176,6.983232 C0.769216,5.60992 0.769216,3.487776 2.042176,2.114464 C3.198176,0.861536 5.15104,0.782976 6.403968,1.938976 C6.4648,1.995104 6.523328,2.053632 6.579456,2.114464 L7.245184,2.8168 C7.464576,3.034784 7.818784,3.034784 8.038176,2.8168 L8.703904,2.115008 C9.859904,0.86208 11.812768,0.78352 13.065696,1.93952 C13.126528,1.995648 13.185056,2.054176 13.241184,2.115008 C14.525216,3.490496 14.534624,5.616512 13.241184,6.983232 Z"
                                id="Shape"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <svg class="second position-absolute top-50 start-50" width="13px" height="12px"
                        viewBox="0 0 13 12" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-1226.000000, -35.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g id="heart" transform="translate(1226.000000, 35.000000)">
                              <path
                                d="M11.7845703,1.11445313 C11.1219727,0.395800775 10.212793,0 9.2243164,0 C8.48544923,0 7.80878905,0.23359375 7.21308595,0.694238275 C6.9125,0.9267578 6.64013673,1.21123048 6.4,1.54326173 C6.15996095,1.21132813 5.8875,0.9267578 5.5868164,0.694238275 C4.99121095,0.23359375 4.31455078,0 3.5756836,0 C2.58720703,0 1.6779297,0.395800775 1.01533203,1.11445313 C0.360644525,1.82470703 1.42108547e-15,2.79501953 1.42108547e-15,3.84677735 C1.42108547e-15,4.92929688 0.403417975,5.92021485 1.26953125,6.96533203 C2.04433595,7.9001953 3.15791015,8.84921875 4.44746095,9.94814453 C4.88779298,10.3234375 5.38691405,10.7488281 5.90517578,11.2019531 C6.04208985,11.321875 6.21777345,11.3878906 6.4,11.3878906 C6.5821289,11.3878906 6.75791015,11.321875 6.8946289,11.2021485 C7.41289063,10.7489258 7.9123047,10.3233398 8.35283203,9.94785155 C9.6421875,8.8491211 10.7557617,7.9001953 11.5305664,6.96523438 C12.3966797,5.92021485 12.8,4.92929688 12.8,3.8466797 C12.8,2.79501953 12.4393555,1.82470703 11.7845703,1.11445313 Z"
                                id="Path"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="list-content ps-4 pe-3 pt-2 pb-3">
                  <div class="d-flex flex-column mb-2 pb-1">
                    <div class="d-flex align-items-center">
                      <span class="list-title fs-6 lh-sm fw-medium ls-05 d-block me-2">Pearl Continental Hotel</span>
                      <div class="d-flex align-items-center fw-medium text-theme-secondary">
                        <img src="/img/icons/011-star-icon.svg" width="13" height="13" alt="star"
                          class="lazy contain flex-shrink-0">&nbsp;
                        <span>4,9</span>
                      </div>
                    </div>
                    <div class="d-flex align-items-center text-theme-secondary">
                      <img src="/img/icons/003-pin.svg" width="15" height="18" alt="pin"
                        class="lazy contain flex-shrink-0 me-2">
                      <span class="lh-sm">Lara / Antalya</span>
                    </div>
                  </div>
                  <div class="alert alert-primary fs-8 lh-1 fw-medium ls-05 d-inline-block p-2 mb-2">
                    <span class="d-block px-1">Erken Rezervasyonda %35 indirim</span>
                  </div>
                  <div class="d-flex flex-column lh-sm ls-05 mt-1">
                    <del class="text-secondary">2.526,50 TL</del>
                    <span class="fs-5-5">2.526,50 TL <em class="font-normal text-secondary fs-7">/ Gece</em></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-next list-navigation-next"></div>
          <div class="swiper-button-prev list-navigation-prev"></div>
        </div>
      </div>
    </section> -->

    <section class="Gallery">
      <div class="container">
        <div class="Gallery-head">
          <button type="button" class="Gallery-close" @click="closeGallery"><i class="icon-search-close"></i></button>
        </div>

        <div class="Gallery-container">
          <div class="Gallery-in">
            <h3 class="Gallery-list-title">Mekâna genel bakış</h3>
            <div class="Gallery-list">

              <button type="button" class="Gallery-list-item" :id="'Gallery_item'+index" @click="scrollGallery($event)" v-for="(floor,index) in villa.floorplan.kat" :key="index">
                <img :src="img.preview_url" class="w-100"  alt="test" v-for="(img,index) in floor.bolum[0].gorsel" :key="index"  v-if="index <= 0"/>
                <p>{{floor.name}}</p>
              </button>
              <!-- <button type="button" class="Gallery-list-item" id="Gallery_item2" @click="scrollGallery($event)">
                <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" />
                <p>Yatak Odası</p>
              </button>
              <button type="button" class="Gallery-list-item" id="Gallery_item3" @click="scrollGallery($event)">
                <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" />
                <p>Bahçe</p>
              </button> -->
            </div>
            <div class="Gallery-detail">

              <div class="Gallery-detail-item Gallery_item1" :class="'Gallery_item'+index" v-for="(floor,index) in villa.floorplan.kat" :key="index">
                <div class="Gallery-detail-item-left">
                  <h3>{{floor.name}}</h3>
                </div>
                <div class="Gallery-detail-item-right">
                  <template v-for="bolum in floor.bolum">
                    <a class="Gallery-detail-item-right-img" :href="img.original_url" data-fancybox="gallery"
                      data-caption="Salon" v-for="(img,index) in bolum.gorsel" :key="index"  v-if="index <= 0">
                      <img :src="img.original_url" class="w-100"  alt="test" />
                      
                    </a>
                  </template>
                  
                  
                </div>
              </div>
              <!-- <div class="Gallery-detail-item Gallery_item2">
                <div class="Gallery-detail-item-left">
                  <h3>Yatak Odası</h3>
                </div>
                <div class="Gallery-detail-item-right">
                  <a class="Gallery-detail-item-right-img" href="/uploads/hotel-image1.jpg" data-fancybox="gallery"
                    data-caption="Salon">
                    <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" />
                  </a>
                  <a class="Gallery-detail-item-right-img" href="/uploads/hotel-image1.jpg" data-fancybox="gallery"
                    data-caption="Salon">
                    <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" />
                  </a>
                  <a class="Gallery-detail-item-right-img" href="/uploads/hotel-image1.jpg" data-fancybox="gallery"
                    data-caption="Salon">
                    <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" />
                  </a>
                  <a class="Gallery-detail-item-right-img" href="/uploads/hotel-image1.jpg" data-fancybox="gallery"
                    data-caption="Salon">
                    <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" />
                  </a>
                </div>
              </div>
              <div class="Gallery-detail-item Gallery_item3">
                <div class="Gallery-detail-item-left">
                  <h3>Bahçe</h3>
                </div>
                <div class="Gallery-detail-item-right">
                  <a class="Gallery-detail-item-right-img" href="" data-fancybox="gallery" data-caption="Salon">
                    <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" />
                  </a>
                  <a class="Gallery-detail-item-right-img" href="" data-fancybox="gallery" data-caption="Salon">
                    <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" />
                  </a>
                  <a class="Gallery-detail-item-right-img" href="" data-fancybox="gallery" data-caption="Salon">
                    <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" />
                  </a>
                  <a class="Gallery-detail-item-right-img" href="" data-fancybox="gallery" data-caption="Salon">
                    <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" />
                  </a>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DynamicDetailPage',
  props: ['villa'],
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 18,
        pagination: {
          el: ".swiper-pagination",
        },
      },
      swiperOptionsMonths: {
        slidesPerView: 4,
        spaceBetween: 18,
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
            slidesPerView: 6,
            spaceBetween: 18,
          },
        },
      },
      swiperOptionsRooms: {
        slidesPerView: 1,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
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
      },
      date: null,
      disabledDates: [
        // { start: null, end: new Date() },
        { start: new Date(2023, 1, 18), end: new Date(2023, 1, 24) },
      ],
      attributes: [
                {
                    key: 1,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: true,
                        end: false,
                        opsiyon: false
                    },
                    dates: new Date(2023, 1, 16),
                },
                {
                    key: 2,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: false,
                        end: false,
                        opsiyon: false
                    },
                    dates: new Date(2023, 1, 17),
                },
                {
                    key: 3,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: false,
                        end: false,
                        opsiyon: false
                    },
                    dates: new Date(2023, 1, 18),
                },
                {
                    key: 4,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: false,
                        end: true,
                        opsiyon: false
                    },
                    dates: new Date(2023, 1, 19),
                },
                {
                    key: 7,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: true,
                        end: false,
                        opsiyon: true
                    },
                    dates: new Date(2023, 2, 6),
                },
                {
                    key: 8,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: false,
                        end: false,
                        opsiyon: true
                    },
                    dates: new Date(2023, 2, 7),
                },
                {
                    key: 9,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: false,
                        end: false,
                        opsiyon: true
                    },
                    dates: new Date(2023, 2, 8),
                },
                {
                    key: 10,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: false,
                        end: false,
                        opsiyon: true
                    },
                    dates: new Date(2023, 2, 9),
                },
                {
                    key: 11,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: false,
                        end: false,
                        opsiyon: true
                    },
                    dates: new Date(2023, 2, 10),
                },
                {
                    key: 12,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: false,
                        end: false,
                        opsiyon: true
                    },
                    dates: new Date(2023, 2, 11),
                },
                {
                    key: 13,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: false,
                        end: true,
                        opsiyon: true
                    },
                    dates: new Date(2023, 2, 12),
                },

            ],
    }
  },
  methods: {
    showGallery() {
      document.querySelector('.Gallery').classList.add("show")
      document.querySelector('body').classList.add("over")
    },
    closeGallery() {
      document.querySelector('.Gallery').classList.remove("show")
      document.querySelector('body').classList.remove("over")
    },
    scrollGallery(event) {
      const el = this.$el.getElementsByClassName(event.currentTarget.id)[0];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    scrollItem(event) {
      const el = this.$el.getElementsByClassName(event.currentTarget.id)[0];
      if (el) {
        el.scrollIntoView({block: "start", behavior: 'smooth' });
      }
    },
    reservationButton(event) {
      document.querySelector('.Reservation-form').classList.add("show")
      event.target.textContent = "Ön Rezervasyon Talebi Gönder";
    }
  },
  mounted() {
    //dropdown-menu içerisinde bir yerlere tıklandığında menünün kapanmaması
    this.$el.addEventListener('click', function (e) {
      if (e.target.closest('.dropdown-menu')) {
        e.stopPropagation();
      }
    });
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    document.querySelector('.header').classList.add('villa-detay')

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 151 || document.documentElement.scrollTop > 151) {
        document.getElementById("detailTop").classList.add('custom-fixed')
        document.getElementById("detailMenu").classList.add('custom-fixed', 'custom-fixed-menu')
        document.querySelector(".View").classList.add('View-top')
       
      } else {
        document.getElementById("detailTop").classList.remove('custom-fixed')
        document.getElementById("detailMenu").classList.remove('custom-fixed', 'custom-fixed-menu')
        document.querySelector(".View").classList.remove('View-top')
      }
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("reservationForm").classList.add('custom-fixed-reservation')
        document.querySelector(".View-right-opportunity").classList.add('opacity-0')

      } else {
        document.getElementById("reservationForm").classList.remove('custom-fixed-reservation')
        document.querySelector(".View-right-opportunity").classList.remove('opacity-0')
      }
    }

    console.log('villa', this.villa)

  },


}
</script>

<style>
.vc-container {
    --gray-500: #A6AFC2 !important;
    --gray-900: var(--bs-theme-first-dark) !important;
    border: none!important;
    position: relative;
    z-index: 1;
}
.vc-container:before{
  content: "";
  display: inline-block;
  width: 100%;height: 48px;
  background-color: #F2F5FB;
  position: absolute;
  left: 0;top: 0;z-index: -1;
}
.vc-header{
  padding: 10px 18px!important;
    background-color: #F2F5FB;
}

.vc-day {
    min-width: 48px !important;
    min-height: 48px !important;
}

.vc-pane-layout {
    gap: 20px;
}

.vc-weekday {
    margin-bottom: 15px !important;
}

.kapali-gun {
    background-color: #F2F5FB;
    position: relative;
}

.kapali-gun.opsiyon {
    background-color: #FFF8E7;
    position: relative;
}

.kapali-gun.giris {
    background-color: transparent;
    z-index: 1;
}

.kapali-gun.giris:before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(225deg, #f3f3ff 49%, transparent 50%);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
}

.kapali-gun.opsiyon.giris:before {
    background-image: linear-gradient(225deg, #FFF8E7 49%, transparent 50%);
}

.kapali-gun.cikis {
    background-color: transparent;
    z-index: 1;
}

.kapali-gun.cikis:before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(45deg, #f3f3ff 49%, transparent 50%);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
}

.kapali-gun.opsiyon.cikis:before {
    background-image: linear-gradient(45deg, #FFF8E7 49%, transparent 50%);
}

.calendar-price {
    font-weight: 400;
    font-size: 11px;
    color: #989FB5;
    margin-bottom: 0;
}</style>