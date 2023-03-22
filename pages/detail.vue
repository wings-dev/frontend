<template>
  <div>
    <section class="view-detail-section">
      <div class="detail-top bg-theme-first-dark">
        <div class="container">
          <div class="view-top d-flex">

            <div class="view-top-title">
              <h1><span>Tesis Kodu</span>VKV1020</h1>
            </div>

            <div class="item-infos d-flex flex-wrap mb-sm-0 ">
              <div class="info flex-shrink-0 d-flex align-items-center">
                <i class="icon-user"></i>
                <span class="lh-sm pe-1">4 Kişilik</span>
              </div>
              <div class="info flex-shrink-0 d-flex align-items-center">
                <i class="icon-bed"></i>
                <span class="lh-sm pe-1">2 Yatak Odası</span>
              </div>
              <div class="info flex-shrink-0 d-flex align-items-center">
                <i class="icon-shower"></i>
                <span class="lh-sm pe-1">2 Banyo</span>
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
      <div class="View-menu">
        <div class="container">
          <div class="View-menu-in">
            <div class="View-menu-left">
              <a href="" class="View-menu-item active">Genel bakış</a>
              <a href="" class="View-menu-item">Müsaitlik ve Takvim Fiyatı</a>
              <a href="" class="View-menu-item">S.S.S.</a>
              <a href="" class="View-menu-item">Yorumlar</a>
              <a href="" class="View-menu-item">Bilmeniz Gerekenler</a>
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
            <a href="#" @click.prevent="showGallery()"
              class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
              <img src="/uploads/hotel-image2.jpg" width="585" height="387" alt="view-image"
                class="lazy cover rounded-xl w-100 h-100">
              <div
                class="hover-box position-absolute top-0 start-0 w-100 h-100 bg-theme-first-dark text-white fs-6 bg-opacity-75 d-flex align-items-center justify-content-center px-2 fw-medium ls-05">
                <span>Tüm Fotoğraflar ( 32 ) </span>
              </div>
            </a>
          </div>
          <div class="area-2 d-md-block d-none">
            <a href="#" @click.prevent="showGallery()"
              class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
              <img src="/uploads/hotel-image3.jpg" width="585" height="387" alt="view-image"
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
              <img src="/uploads/hotel-image2.jpg" width="585" height="387" alt="view-image"
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
              <img src="/uploads/hotel-image1.jpg" width="585" height="387" alt="view-image"
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
              <img src="/uploads/hotel-image3.jpg" width="585" height="387" alt="view-image"
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
            <div class="View-desc">
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
            <div class="View-availibility">
              <h2 class="View-title">Musaitlik ve Fiyat Bilgisi</h2>
              <p class="View-text">
                Aşağıda belirtilen fiyatlar tesisin 1 gecelik konaklama ücretidir. Dönemlere göre konaklama süresine
                göre ekstra temizlik ücreti eklenebilmektedir.
              </p>
              <p>bu alan yapılmadı ne yapacağğımız görmek için görsel olarak koydum </p>
              <img src="/img/availibitycalendar.png" alt="" class="w-100">
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
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="floor-1-tab" data-bs-toggle="pill" data-bs-target="#floor-1"
                      type="button" role="tab" aria-controls="floor-1" aria-selected="true">
                      <span class="d-inline-block ">Kat 1</span>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
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
                  </li>
                </ul>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
              <div class="tab-content mb-4 mb-sm-5 pb-3" id="room-tabContent">
                <div class="tab-pane fade show active" id="floor-1" role="tabpanel" aria-labelledby="floor-1-tab">
                  <div class="rooms swiper mySwiper">

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
                </div>
                <div class="tab-pane fade" id="floor-2" role="tabpanel" aria-labelledby="floor-2-tab">
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
              <div class="pool-item mb-3">
                <div class="pool-item-left">
                  <img src="/uploads/003-swimming-pool.svg" width="28" height="28" alt="pool icon" class="lazy contain">
                  <span class="">Açık Havuz</span>
                </div>
                <div class="pool-item-right">
                  <span>4.20m</span>
                  <span>6.20m</span>
                  <span>1.60m</span>
                </div>

              </div>
              <div class="pool-item mb-3">
                <div class="pool-item-left">
                  <img src="/uploads/005-swimming-pool.svg" width="28" height="28" alt="pool icon" class="lazy contain">
                  <span class="">Kapalı Havuz</span>
                </div>
                <div class="pool-item-right">
                  <span>4.20m</span>
                  <span>6.20m</span>
                  <span>1.60m</span>
                </div>

              </div>
              <div class="pool-item mb-3">
                <div class="pool-item-left">
                  <img src="/uploads/002-watch-your-children.svg" width="28" height="28" alt="pool icon"
                    class="lazy contain">
                  <span class="">Çocuk Havuz</span>
                </div>
                <div class="pool-item-right">
                  <span>4.20m</span>
                  <span>6.20m</span>
                  <span>1.60m</span>
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
                  <div class="View-location-item">
                    <p>1 -) Çalış Plajı</p>
                    <span>7 Km</span>
                  </div>
                  <div class="View-location-item">
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
                  </div>
                </div>
                <div class="View-location-right">
                  <p>harita yapılmadı. ne yapacağğımızı görmek için görsel olarak koydum</p>
                  <img src="/img/villamap.png" alt="" class="w-100">
                </div>
              </div>
            </div>
            <div class="View-reviews">
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
            <div class="View-info">
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
                            <span>14:00</span>
                          </div>
                          <div class="View-info-hours-status-righthours">
                            <span>23:00</span>
                          </div>
                          <div class="View-info-hours-status-tophours">
                            <span>14:00 - 23:00 Arası</span>
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
                          <h6>Check-in</h6>
                          <p>En erken ve en geç tesise giriş yapabileceğiniz saatler.</p>
                        </div>
                      </div>
                    </div>
                    <div class="View-info-hours-item-right">
                      <div class="View-info-hours-status">
                        <div class="View-info-hours-status-in" style="grid-column: 4/9;">
                          <div class="View-info-hours-status-lefthours">
                            <span>08:00</span>
                          </div>
                          <div class="View-info-hours-status-righthours">
                            <span>10:00</span>
                          </div>
                          <div class="View-info-hours-status-tophours">
                            <span>08:00 - 10:00 Arası</span>
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
            <div class="View-faq">
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

            <form action="" class="Reservation-form">
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

    <section class="Gallery">
      <div class="container">
        <div class="Gallery-head">
          <button type="button" class="Gallery-close" @click="closeGallery"><i class="icon-search-close"></i></button>
        </div>

        <div class="Gallery-container">
          <div class="Gallery-in">
            <h3 class="Gallery-list-title">Mekâna genel bakış</h3>
            <div class="Gallery-list">

              <button type="button" class="Gallery-list-item" id="Gallery_item1" @click="scrollGallery($event)">
                <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" />
                <p>Salon</p>
              </button>
              <button type="button" class="Gallery-list-item" id="Gallery_item2" @click="scrollGallery($event)">
                <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" />
                <p>Yatak Odası</p>
              </button>
              <button type="button" class="Gallery-list-item" id="Gallery_item3" @click="scrollGallery($event)">
                <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" />
                <p>Bahçe</p>
              </button>
            </div>
            <div class="Gallery-detail">

              <div class="Gallery-detail-item Gallery_item1">
                <div class="Gallery-detail-item-left">
                  <h3>Salon</h3>
                </div>
                <div class="Gallery-detail-item-right">
                  <a class="Gallery-detail-item-right-img" href="/uploads/hotel-image1.jpg" data-fancybox="gallery"
                    data-caption="Salon">
                    <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" /></a>
                  <a class="Gallery-detail-item-right-img" href="/uploads/hotel-image1.jpg" data-fancybox="gallery"
                    data-caption="Salon">
                    <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" /></a>
                  <a class="Gallery-detail-item-right-img" href="/uploads/hotel-image1.jpg" data-fancybox="gallery"
                    data-caption="Salon">
                    <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" /></a>
                  <a class="Gallery-detail-item-right-img" href="/uploads/hotel-image1.jpg" data-fancybox="gallery"
                    data-caption="Salon">
                    <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" /></a>
                </div>
              </div>
              <div class="Gallery-detail-item Gallery_item2">
                <div class="Gallery-detail-item-left">
                  <h3>Yatak Odası</h3>
                </div>
                <div class="Gallery-detail-item-right">
                  <a class="Gallery-detail-item-right-img" href="/uploads/hotel-image1.jpg" data-fancybox="gallery"
                    data-caption="Salon">
                    <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" /></a>
                  <a class="Gallery-detail-item-right-img" href="/uploads/hotel-image1.jpg" data-fancybox="gallery"
                    data-caption="Salon">
                    <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" /></a>
                  <a class="Gallery-detail-item-right-img" href="/uploads/hotel-image1.jpg" data-fancybox="gallery"
                    data-caption="Salon">
                    <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" /></a>
                  <a class="Gallery-detail-item-right-img" href="/uploads/hotel-image1.jpg" data-fancybox="gallery"
                    data-caption="Salon">
                    <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" /></a>
                </div>
              </div>
              <div class="Gallery-detail-item Gallery_item3">
                <div class="Gallery-detail-item-left">
                  <h3>Bahçe</h3>
                </div>
                <div class="Gallery-detail-item-right">
                  <a class="Gallery-detail-item-right-img" href="" data-fancybox="gallery" data-caption="Salon">
                    <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" /></a>
                  <a class="Gallery-detail-item-right-img" href="" data-fancybox="gallery" data-caption="Salon">
                    <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" /></a>
                  <a class="Gallery-detail-item-right-img" href="" data-fancybox="gallery" data-caption="Salon">
                    <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" /></a>
                  <a class="Gallery-detail-item-right-img" href="" data-fancybox="gallery" data-caption="Salon">
                    <nuxt-img src="/uploads/hotel-image1.jpg" class="w-100" placeholder alt="test" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'DetailPage',
  layout: 'no-search',

  head() {
    let site_id = process.env.SITE
    return {
      title: 'Villa Detay',
      meta: [
        { hid: 'description', name: 'description', content: 'anasayfa' },
        { hid: 'keywords', name: 'keywords', content: 'anasayfa1, anasayfa2, anasayfa3' }
      ],

    }
  },
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
      }

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

  },


}
</script>
