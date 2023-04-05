<template>
  <main class="main">
    <section class="view-detail-section">
      <div class="view-detail-section-menus">
        <div class="detail-top bg-theme-first-dark" id="detailTop">
          <div class="container">
            <div class="view-top d-flex">

              <div class="view-top-title d-flex">
                <h1>The European Hotel</h1>
                <div class="fs-7 d-inline-flex align-items-center fw-medium text-theme-secondary ms-3">
                  <img src="/img/icons/011-star-icon.svg" width="13" height="13" alt="star"
                    class="lazy contain flex-shrink-0">&nbsp;
                  <span>4,9</span>
                </div>
              </div>


              <div class="view-top-right">
                <div class="d-flex align-items-center text-theme-secondary">
                  <i class="icon-pin"></i>
                  <p class="view-top-right-location"><span class="lh-sm">Lara / Antalya</span></p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="View-menu" id="detailMenu">
          <div class="container">
            <div class="View-menu-in">
              <div class="View-menu-left">
                <div class="d-flex flex-wrap align-items-center fs-8 fw-medium ls-05 text-theme-primary">
                  <div class="alert alert-primary fs-8 lh-1 fw-medium ls-05 d-inline-block p-2 mb-0 me-2">
                    <span class="view-item d-block px-1">Erken Rezervasyonda %35 indirim</span>
                  </div>
                  <div class="d-flex align-items-center my-2 my-sm-1 me-3 pe-1">
                    <img src="/img/icons/019-virus.svg" width="20" height="20" alt="healt"
                      class="lazy contain flex-shrink-0 me-1 loaded"
                      style="background-image: url(/img/icons/019-virus.svg);">
                    <span>Sağlık Sertifikalı</span>
                  </div>
                  <div class="d-flex align-items-center my-2 my-sm-1">
                    <img src="/img/icons/020-fence.svg" width="20" height="20" alt="healt"
                      class="lazy contain flex-shrink-0 me-1 loaded"
                      style="background-image: url(/img/icons/020-fence.svg);">
                    <span>Özel Bölgesi var</span>
                  </div>
                </div>
              </div>
              <div class="View-menu-right">
                <button type="button"
                  class="action-btn fav-btn w-auto h-auto fs-7 ls-05 text-theme-secondary bg-transparent p-0 d-flex align-items-center me-4 ">
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
            <a href="#" class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
              <nuxt-img src="/uploads/hotel-image2.jpg" width="585" height="387" sizes="sm:100vw md:50vw lg:585px" />

            </a>
          </div>
          <div class="area-2 d-md-block d-none">
            <a href="#" class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
              <nuxt-img src="/uploads/hotel-image3.jpg" width="284" height="187" sizes="sm:100vw md:50vw lg:284px" />

            </a>
          </div>
          <div class="area-3 d-md-block d-none">
            <a href="#" class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
              <nuxt-img src="/uploads/hotel-image4.jpg" width="284" height="187" sizes="sm:100vw md:50vw lg:284px" />

            </a>
          </div>
          <div class="area-4 d-none d-lg-block">
            <a href="#" class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
              <nuxt-img src="/uploads/hotel-image5.jpg" width="284" height="187" sizes="sm:100vw md:50vw lg:284px" />

            </a>
          </div>
          <div class="area-5 d-none d-lg-block">
            <div class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl last">
              <nuxt-img src="/uploads/hotel-image5.jpg" width="284" height="187" sizes="sm:100vw md:50vw lg:284px" />
              <div
                class="hover-box position-absolute top-0 start-0 w-100 h-100 bg-theme-first-dark text-white fs-6 bg-opacity-75 d-flex align-items-center justify-content-center px-2 fw-medium ls-05 d-flex flex-column">
                <span>Tüm Fotoğraflar ( 32 ) </span>
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

    <section class="rooms-section pt-3 mt-1">
      <div class="container">
        <div class="room border border-light rounded-xxl p-2 mb-3">
          <div class="row">
            <div class="col-12 col-lg-8 col-xl-7 d-flex flex-column flex-sm-row pe-xl-4 mb-lg-0 mb-2">
              <div class="img-box position-relative flex-shrink-0">
                <img src="/uploads/room-image1.jpg" width="281" height="186" alt="room image"
                  class="lazy cover flex-shrink-0 rounded-xl">
              </div>
              <div
                class="flex-fill d-flex flex-column align-items-start justify-content-between ps-2 ps-sm-3 ps-xl-4 pt-3">
                <div class="d-flex align-items-center w-100 mb-2">
                  <span class="fs-5 lh-sm ls-05 d-inline-block me-auto room-title">Standart Tek Büyük veya İki Ayrı
                    Yataklı Oda, Şehir Manzaralı, 2 Tek Kişilik Yatak - 24 m2</span>
                </div>
                <div class="room-highlights d-flex flex-wrap w-100 fs-6 lh-sm mb-2 mb-sm-3">

                  <small
                    class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Minibar</span>
                    <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="" class="lazy contain">
                  </small>
                  <small
                    class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Balkon</span>
                    <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="" class="lazy contain">
                  </small>
                  <small
                    class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Duşakabin</span>
                    <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="" class="lazy contain">
                  </small>
                </div>
                <div class="d-flex align-items-center mb-sm-0 mb-1">
                  <b-button v-b-modal.amenitesModal class="fs-6 lh-sm ls-05 me-4 pe-2 pe-sm-3" ><u><small>Odanın Tüm
                        Özellikleri</small></u></b-button>

                  <a href="#!" class="fs-6 lh-sm ls-05">
                    <u><small>Tüm Fiyatlar</small></u>
                  </a>
                </div>
              </div>
            </div>
            <div class="room-scroll-wrapper col-12 col-lg-4 col-xl-5 ps-lg-0">
              <div class="room-options d-flex flex-lg-column pb-lg-0 pb-1">
                <div
                  class="option d-flex flex-column flex-xl-row rounded-xl bg-theme-light-2 flex-fill overflow-hidden mb-lg-1">
                  <div class="flex-fill d-flex flex-column justify-content-center fs-6 ps-3 ps-xl-4 pe-3 py-4">
                    <span class="d-block text-theme-first lh-1 ls-05 mb-2">Oda Kahvaltı</span>
                    <small class="text-theme-secondary ls-05">663 TL'den başlayan <a href="#!"
                        class="text-theme-second"><u>Taksit Seçenekleri</u></a></small>
                  </div>
                  <div
                    class="bg-white bg-opacity-50 d-flex flex-xl-column align-items-center justify-content-center px-3 px-xl-4 py-3 py-xl-2">
                    <div class="d-flex flex-column align-items-xl-center me-xl-0 me-auto">
                      <span class="text-secondary ls-05 d-block lh-1"><small>7 GECE</small></span>
                      <strong class="fs-5 fw-semibold d-block mb-xl-3 pb-xl-1 lh-sm">5.200 TL</strong>
                    </div>
                    <button type="button"
                      class="btn btn-theme-first btn-ripple fw-medium ls-05 lh-sm rounded-pill px-3 px-xl-4 py-2">
                      <small class="d-block py-1">Rezervasyon</small>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="note note-warning ls-05 fw-medium text-center my-3 py-1"><img src="/img/icons/026-alert.svg"
            width="17" height="17" alt="alert" class="lazy contain flex-shrink-0 me-1" />11 Eylül - 21 Eylül Tarihleri
          arasında Aile Odası bulunmamaktadır. Müsait tarihleri görmek için <a href="#!"><u>Tıklayın</u></a></div>
        <div class="room border border-light rounded-xxl pt-2 px-2 pb-1 p-lg-2 mb-3">
          <div class="row">
            <div class="col-12 col-lg-8 col-xl-7 d-flex flex-column flex-sm-row pe-xl-4 mb-lg-0 mb-2">
              <div class="img-box position-relative flex-shrink-0">
                <img src="/uploads/room-image1.jpg" width="281" height="186" alt="room image"
                  class="lazy cover flex-shrink-0 rounded-xl">
              </div>
              <div class="flex-fill d-flex flex-column align-items-start ps-2 ps-sm-3 ps-xl-4 pt-3">
                <div class="d-flex align-items-center w-100 mb-2">
                  <span class="fs-5 lh-sm ls-05 d-inline-block me-auto">Aile Odası</span>

                </div>

                <div class="room-highlights d-flex flex-wrap w-100 fs-6 lh-sm mb-2 mb-sm-3">
                  <small
                    class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Oda Genişliği</span>
                    <span class="">53 m<sup><small>2</small></sup></span>
                  </small>
                  <small
                    class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Minibar</span>
                    <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="" class="lazy contain">
                  </small>
                  <small
                    class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Balkon</span>
                    <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="" class="lazy contain">
                  </small>
                  <small
                    class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Duşakabin</span>
                    <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="" class="lazy contain">
                  </small>
                </div>
                <div class="d-flex align-items-center mb-sm-0 mb-1">
                  <a href="#!" class="fs-6 lh-sm ls-05 me-4 pe-2 pe-sm-3">
                    <u><small>Odanın Tüm Özellikleri</small></u>
                  </a>
                  <a href="#!" class="fs-6 lh-sm ls-05">
                    <u><small>Tüm Fiyatlar</small></u>
                  </a>
                </div>
              </div>
            </div>
            <div class="room-scroll-wrapper col-12 col-lg-4 col-xl-5 ps-lg-0">
              <div class="room-options d-flex flex-lg-column pb-lg-0 pb-1">
                <div
                  class="option d-flex flex-column flex-xl-row rounded-xl bg-theme-light-2 flex-fill overflow-hidden mb-lg-1">
                  <div class="flex-fill d-flex flex-column justify-content-center fs-6 ps-3 ps-xl-4 pe-3 py-4">
                    <span class="d-block text-theme-first lh-1 ls-05 mb-2">Oda Kahvaltı</span>
                    <div class="room-info d-flex fs-6 fw-medium ls-05 mb-1 mt-1">
                      <svg class="flex-shrink-0 me-1 mt-1" width="17px" height="17px" viewBox="0 0 17 17" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="OtelDetay" transform="translate(-1088.000000, -1170.000000)" fill="#5DC1B2"
                            fill-rule="nonzero">
                            <g id="alert" transform="translate(1088.000000, 1170.000000)">
                              <path
                                d="M8.21333333,0 C3.67723459,0 0,3.67723459 0,8.21333333 C0,12.7494321 3.67723459,16.4266667 8.21333333,16.4266667 C12.7494321,16.4266667 16.4266667,12.7494321 16.4266667,8.21333333 C16.4213179,3.67945196 12.7472147,0.00534874716 8.21333333,0 Z M8.21333333,14.9333333 C4.50197981,14.9333333 1.49333333,11.9246869 1.49333333,8.21333333 C1.49333333,4.50197981 4.50197981,1.49333333 8.21333333,1.49333333 C11.9246869,1.49333333 14.9333333,4.50197981 14.9333333,8.21333333 C14.9288078,11.9228107 11.9228107,14.9288078 8.21333333,14.9333333 L8.21333333,14.9333333 Z"
                                id="Shape"></path>
                              <path
                                d="M8.21333333,3.73333333 C7.80096072,3.73333333 7.46666667,4.06762739 7.46666667,4.48 L7.46666667,9.70666667 C7.46666667,10.1190393 7.80096072,10.4533333 8.21333333,10.4533333 C8.62570595,10.4533333 8.96,10.1190393 8.96,9.70666667 L8.96,4.48 C8.96,4.06762739 8.62570595,3.73333333 8.21333333,3.73333333 Z"
                                id="Path"></path>
                              <circle id="Oval" cx="8.21333333" cy="11.9466667" r="1"></circle>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <small class="d-block my-auto">Varınca Para - %25 Ön Ödemeli</small>
                    </div>
                    <div class="room-info d-flex fs-6 fw-medium ls-05 mb-1 mt-1">
                      <svg class="flex-shrink-0 me-1 mt-1" width="17px" height="17px" viewBox="0 0 17 17" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="OtelDetay" transform="translate(-1088.000000, -1170.000000)" fill="#B3B6C5"
                            fill-rule="nonzero">
                            <g id="alert" transform="translate(1088.000000, 1170.000000)">
                              <path
                                d="M8.21333333,0 C3.67723459,0 0,3.67723459 0,8.21333333 C0,12.7494321 3.67723459,16.4266667 8.21333333,16.4266667 C12.7494321,16.4266667 16.4266667,12.7494321 16.4266667,8.21333333 C16.4213179,3.67945196 12.7472147,0.00534874716 8.21333333,0 Z M8.21333333,14.9333333 C4.50197981,14.9333333 1.49333333,11.9246869 1.49333333,8.21333333 C1.49333333,4.50197981 4.50197981,1.49333333 8.21333333,1.49333333 C11.9246869,1.49333333 14.9333333,4.50197981 14.9333333,8.21333333 C14.9288078,11.9228107 11.9228107,14.9288078 8.21333333,14.9333333 L8.21333333,14.9333333 Z"
                                id="Shape"></path>
                              <path
                                d="M8.21333333,3.73333333 C7.80096072,3.73333333 7.46666667,4.06762739 7.46666667,4.48 L7.46666667,9.70666667 C7.46666667,10.1190393 7.80096072,10.4533333 8.21333333,10.4533333 C8.62570595,10.4533333 8.96,10.1190393 8.96,9.70666667 L8.96,4.48 C8.96,4.06762739 8.62570595,3.73333333 8.21333333,3.73333333 Z"
                                id="Path"></path>
                              <circle id="Oval" cx="8.21333333" cy="11.9466667" r="1"></circle>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <small class="d-block my-auto">Ücretsiz İptal</small>
                    </div>
                    <small class="text-theme-secondary ls-05">663 TL'den başlayan <a href="#!"
                        class="text-theme-second"><u>Taksit Seçenekleri</u></a></small>
                  </div>
                  <div
                    class="bg-white bg-opacity-50 d-flex flex-xl-column align-items-center justify-content-center px-3 px-xl-4 py-3 py-xl-2">
                    <div class="d-flex flex-column align-items-xl-center me-xl-0 me-auto">
                      <span class="text-secondary ls-05 d-block lh-1"><small>7 GECE</small></span>
                      <strong class="fs-5 fw-semibold d-block mb-xl-3 pb-xl-1 lh-sm">8.350 TL</strong>
                    </div>
                    <button type="button"
                      class="btn btn-theme-first btn-ripple fw-medium ls-05 lh-sm rounded-pill px-3 px-xl-4 py-2">
                      <small class="d-block py-1">Rezervasyon</small>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="room border border-light rounded-xxl p-2 mb-3">
          <div class="row">
            <div class="col-12 col-lg-8 col-xl-7 d-flex flex-column flex-sm-row pe-xl-4 mb-lg-0 mb-2">
              <div class="img-box position-relative flex-shrink-0">
                <img src="/uploads/room-image1.jpg" width="281" height="186" alt="room image"
                  class="lazy cover flex-shrink-0 rounded-xl">
              </div>
              <div class="flex-fill d-flex flex-column align-items-start ps-2 ps-sm-3 ps-xl-4 pt-3">
                <div class="d-flex align-items-center w-100 mb-2">
                  <span class="fs-5 lh-sm ls-05 d-inline-block me-auto">Kral Dairesi</span>

                </div>

                <div class="room-highlights d-flex flex-wrap w-100 fs-6 lh-sm mb-2 mb-sm-3">
                  <small
                    class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Oda Genişliği</span>
                    <span class="">53 m<sup><small>2</small></sup></span>
                  </small>
                  <small
                    class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Minibar</span>
                    <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="" class="lazy contain">
                  </small>
                  <small
                    class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Balkon</span>
                    <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="" class="lazy contain">
                  </small>
                  <small
                    class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Duşakabin</span>
                    <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="" class="lazy contain">
                  </small>
                </div>
                <div class="d-flex align-items-center mb-sm-0 mb-1">
                  <a href="#!" class="fs-6 lh-sm ls-05 me-4 pe-2 pe-sm-3">
                    <u><small>Odanın Tüm Özellikleri</small></u>
                  </a>
                  <a href="#!" class="fs-6 lh-sm ls-05">
                    <u><small>Tüm Fiyatlar</small></u>
                  </a>
                </div>
              </div>
            </div>
            <div class="room-scroll-wrapper col-12 col-lg-4 col-xl-5 ps-lg-0">
              <div class="room-options d-flex flex-lg-column pb-lg-0 pb-1">
                <div
                  class="option d-flex flex-column flex-xl-row rounded-xl bg-theme-light-2 flex-fill overflow-hidden mb-lg-1">
                  <div class="flex-fill d-flex flex-column justify-content-center fs-6 ps-3 ps-xl-4 pe-3 py-4">
                    <span class="d-block text-theme-first lh-1 ls-05 mb-2">Oda Kahvaltı</span>
                    <small class="text-theme-secondary ls-05">663 TL'den başlayan <a href="#!"
                        class="text-theme-second"><u>Taksit Seçenekleri</u></a></small>
                  </div>
                  <div
                    class="bg-white bg-opacity-50 d-flex flex-xl-column align-items-center justify-content-center px-3 px-xl-4 py-3 py-xl-2">
                    <div class="d-flex flex-column align-items-xl-center me-xl-0 me-auto">
                      <span class="text-secondary ls-05 d-block lh-1"><small>7 GECE</small></span>
                      <strong class="fs-5 fw-semibold d-block mb-xl-3 pb-xl-1 lh-sm">5.200 TL</strong>
                    </div>
                    <button type="button"
                      class="btn btn-theme-first btn-ripple fw-medium ls-05 lh-sm rounded-pill px-3 px-xl-4 py-2">
                      <small class="d-block py-1">Rezervasyon</small>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="room border border-light rounded-xxl p-2 mb-3">
          <div class="row">
            <div class="col-12 col-lg-8 col-xl-7 d-flex flex-column flex-sm-row pe-xl-4 mb-lg-0 mb-2">
              <div class="img-box position-relative flex-shrink-0">
                <img src="/uploads/room-image1.jpg" width="281" height="186" alt="room image"
                  class="lazy cover flex-shrink-0 rounded-xl">
              </div>
              <div class="flex-fill d-flex flex-column align-items-start ps-2 ps-sm-3 ps-xl-4 pt-3">
                <div class="d-flex align-items-center w-100 mb-2">
                  <span class="fs-5 lh-sm ls-05 d-inline-block me-auto">Standart Oda</span>

                </div>

                <div class="room-highlights d-flex flex-wrap w-100 fs-6 lh-sm mb-2 mb-sm-3">
                  <small
                    class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Oda Genişliği</span>
                    <span class="">53 m<sup><small>2</small></sup></span>
                  </small>
                  <small
                    class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Minibar</span>
                    <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="" class="lazy contain">
                  </small>
                  <small
                    class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Balkon</span>
                    <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="" class="lazy contain">
                  </small>
                  <small
                    class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Duşakabin</span>
                    <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="" class="lazy contain">
                  </small>
                </div>
                <div class="d-flex align-items-center mb-sm-0 mb-1">
                  <a href="#!" class="fs-6 lh-sm ls-05 me-4 pe-2 pe-sm-3">
                    <u><small>Odanın Tüm Özellikleri</small></u>
                  </a>
                  <a href="#!" class="fs-6 lh-sm ls-05">
                    <u><small>Tüm Fiyatlar</small></u>
                  </a>
                </div>
              </div>
            </div>
            <div class="room-scroll-wrapper col-12 col-lg-4 col-xl-5 ps-lg-0">
              <div class="room-options d-flex flex-lg-column pb-lg-0 pb-1">
                <div
                  class="option d-flex flex-column flex-xl-row rounded-xl bg-theme-light-2 flex-fill overflow-hidden mb-lg-1">
                  <div class="flex-fill d-flex flex-column justify-content-center fs-6 ps-3 ps-xl-4 pe-3 py-4">
                    <span class="d-block text-theme-first lh-1 ls-05 mb-2">Oda Kahvaltı</span>
                    <small class="text-theme-secondary ls-05">663 TL'den başlayan <a href="#!"
                        class="text-theme-second"><u>Taksit Seçenekleri</u></a></small>
                  </div>
                  <div
                    class="bg-white bg-opacity-50 d-flex flex-xl-column align-items-center justify-content-center px-3 px-xl-4 py-3 py-xl-2">
                    <div class="d-flex flex-column align-items-xl-center me-xl-0 me-auto">
                      <span class="text-secondary ls-05 d-block lh-1"><small>7 GECE</small></span>
                      <strong class="fs-5 fw-semibold d-block mb-xl-3 pb-xl-1 lh-sm">5.200 TL</strong>
                    </div>
                    <button type="button"
                      class="btn btn-theme-first btn-ripple fw-medium ls-05 lh-sm rounded-pill px-3 px-xl-4 py-2">
                      <small class="d-block py-1">Rezervasyon</small>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="general-informations-section mt-5 mb-5 pb-sm-2">
      <div class="container">
        <div class="fs-5 ls-05 lh-sm mb-4"><span class="opacity-75">The European Hotel</span> <strong
            class="fw-semibold">Genel Bilgiler</strong></div>
        <div class="text-theme-secondary lh-sm ls-05 pe-lg-5 me-lg-4">
          <p>2010 yılında yapılan Ramada Plaza Antalya Muratpaşa bölgesinde bulunmaktadır. 38000 m2 alanda kurulmuş olan
            Ramada Plaza Antalya otel ultra herşey dahil konseptiyle misafirlerimize hizmet vermektedir</p>
          <p>Ramada Plaza Antalya denize sıfır konumuyla dikkat çekmektedir. Otelin kendine ait iskelesi vardır. Tesis 2
            adet ala carte restaurant ile misafirlere özel hizmet sunmaktadır. Açık ve kapalı yüzme havuzları ile eğlenme
            ve dinlenme imkanı bulabilirsiniz.</p>
          <p>Bilardo oynayarak keyifli vakit geçirebilirsiniz. Tesis içerisinde yer alan masaj hizmetlerinden faydalanarak
            rahatlayabilir ve kendinizi yenilenmiş hissedebilirsiniz. Tesis içerisinde bulunan doktor, fotoğrafçı,
            güzellik salonu, kuaför, market, araç kiralama hizmetlerinden yararlanabilirsiniz</p>
          <p>Keyifli vakit geçirmeniz için tesiste bar bulunmaktadır. Otel Antalya Havaalanı'na 15 km,Antalya Havaalanı'na
            15 km, Kaleiçi'ye 500 m, Merkezde'ye 100 m uzaklıktadır</p>
        </div>
      </div>
    </section>
    <section class="payment-options-section">
      <div class="container">
        <div class="payment-options border border-light rounded-xxl overflow-hidden mt-5 mb-4">
          <div class="po-header d-flex flex-column py-4 px-4">
            <div class="fs-5 ls-05 lh-sm pt-1 ps-sm-3 mb-1"><span class="opacity-75">The European Hotel</span> <strong
                class="fw-semibold">Ödeme Seçenekleri ve Kampanyalar</strong></div>
            <div class="fw-medium lh-sm ls-05 ps-sm-3">(22.06.2022 - 27.06.2022 tarihlerinde uygulanan kampanyalar)</div>
          </div>
          <div class="po-body px-4 pt-4">
            <ul class="d-flex flex-column ls-05 pt-sm-1 ps-sm-3 mb-0">
              <li class="mb-4 pb-3">
                <span class="fs-6 lh-sm d-inline-block me-2">100 TL MaxiPuan Kampanyası</span><a href="#!"
                  class="text-theme-second lh-sm"><u>Kampanya Şartları için Tıklayınız.</u></a>
                <p class="text-theme-secondary w-100 mb-0">31 Aralık 2021 tarihine kadar yapılan rezervasyonlarda 03
                  Aralık 2021-31 Aralık 2022 günleri arasındaki konaklamalarda geçerlidir.</p>
              </li>
              <li class="mb-4 pb-3">
                <span class="fs-6 lh-sm d-inline-block me-2">OtelBNB Akbank Digital First Kampanyası</span><a href="#!"
                  class="text-theme-second lh-sm"><u>Kampanya Şartları için Tıklayınız.</u></a>
                <p class="text-theme-secondary w-100 mb-0">31 Aralık 2021 tarihine kadar yapılan rezervasyonlarda 01 Eylül
                  2021-31 Aralık 2022 günleri arasındaki konaklamalarda geçerlidir.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="hotel-properties-section mb-5">
      <div class="container">
        <div class="section-caption mb-3">
          <span class="fs-5 ls-05 lh-sm">Otel Özellikleri</span>
        </div>
        <div class="hp-highlights mb-4 pb-2">
          <div class="row g-2">
            <div class="col-6 flex-fill col-md-4">
              <div
                class="h-item ls-05 border border-3 border-theme-light d-flex align-items-center h-100 rounded-sm py-3 py-lg-4 px-3 px-md-4">
                <span class="d-inline-block ps-md-2 ps-lg-3 py-1 me-auto">Tesis Kapasitesi</span>
                <strong class="fs-5 fw-normal text-theme-second pe-md-2 py-1">307</strong>
              </div>
            </div>
            <div class="col-6 flex-fill col-md-4">
              <div
                class="h-item ls-05 border border-3 border-theme-light d-flex align-items-center h-100 rounded-sm py-3 py-lg-4 px-3 px-md-4">
                <span class="d-inline-block ps-md-2 ps-lg-3 py-1 me-auto">Tesis Yapım Yılı</span>
                <strong class="fs-5 fw-normal text-theme-second pe-md-2 py-1">2003</strong>
              </div>
            </div>
            <div class="col-6 flex-fill col-md-4">
              <div
                class="h-item ls-05 border border-3 border-theme-light d-flex align-items-center h-100 rounded-sm py-3 py-lg-4 px-3 px-md-4">
                <span class="d-inline-block ps-md-2 ps-lg-3 py-1 me-auto">Tesis Yenileme</span>
                <strong class="fs-5 fw-normal text-theme-second pe-md-2 py-1">2021</strong>
              </div>
            </div>
          </div>
        </div>
        <ul class="properties lh-sm ls-05 d-flex flex-wrap text-theme-secondary">
          <li class="d-flex pe-2 mb-3 pb-1">
            <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="checked"
              class="lazy contain flex-shrink-0 me-2">
            <span class="d-block ps-md-1">Market</span>
          </li>
          <li class="d-flex pe-2 mb-3 pb-1">
            <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="checked"
              class="lazy contain flex-shrink-0 me-2">
            <span class="d-block ps-md-1">Su Kaydırağı (4 Adet)</span>
          </li>
          <li class="d-flex pe-2 mb-3 pb-1">
            <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="checked"
              class="lazy contain flex-shrink-0 me-2">
            <span class="d-block ps-md-1">Fotoğrafçı</span>
          </li>
          <li class="d-flex pe-2 mb-3 pb-1">
            <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="checked"
              class="lazy contain flex-shrink-0 me-2">
            <span class="d-block ps-md-1">Kapalı Havuz</span>
          </li>
          <li class="d-flex pe-2 mb-3 pb-1">
            <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="checked"
              class="lazy contain flex-shrink-0 me-2">
            <span class="d-block ps-md-1">A La Carte Restaurant</span>
          </li>
          <li class="d-flex pe-2 mb-3 pb-1">
            <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="checked"
              class="lazy contain flex-shrink-0 me-2">
            <span class="d-block ps-md-1">Otopark</span>
          </li>
          <li class="d-flex pe-2 mb-3 pb-1">
            <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="checked"
              class="lazy contain flex-shrink-0 me-2">
            <span class="d-block ps-md-1">Tiyatro</span>
          </li>
          <li class="d-flex pe-2 mb-3 pb-1">
            <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="checked"
              class="lazy contain flex-shrink-0 me-2">
            <span class="d-block ps-md-1">Güzellik Salonu</span>
          </li>
          <li class="d-flex pe-2 mb-3 pb-1">
            <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="checked"
              class="lazy contain flex-shrink-0 me-2">
            <span class="d-block ps-md-1">Kapalı Restaurant</span>
          </li>
          <li class="d-flex pe-2 mb-3 pb-1">
            <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="checked"
              class="lazy contain flex-shrink-0 me-2">
            <span class="d-block ps-md-1">Açık Havuz (2 Adet)</span>
          </li>
          <li class="d-flex pe-2 mb-3 pb-1">
            <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="checked"
              class="lazy contain flex-shrink-0 me-2">
            <span class="d-block ps-md-1">Resepsiyon'da Kasa</span>
          </li>
          <li class="d-flex pe-2 mb-3 pb-1">
            <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="checked"
              class="lazy contain flex-shrink-0 me-2">
            <span class="d-block ps-md-1">Wireless Internet</span>
          </li>
          <li class="d-flex pe-2 mb-3 pb-1">
            <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="checked"
              class="lazy contain flex-shrink-0 me-2">
            <span class="d-block ps-md-1">Havaalanı Servis</span>
          </li>
          <li class="d-flex pe-2 mb-3 pb-1">
            <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="checked"
              class="lazy contain flex-shrink-0 me-2">
            <span class="d-block ps-md-1">Konferans</span>
          </li>
          <li class="d-flex pe-2 mb-3 pb-1">
            <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="checked"
              class="lazy contain flex-shrink-0 me-2">
            <span class="d-block ps-md-1">Açık Restaurant</span>
          </li>
          <li class="d-flex pe-2 mb-3 pb-1">
            <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="checked"
              class="lazy contain flex-shrink-0 me-2">
            <span class="d-block ps-md-1">Asansör</span>
          </li>
          <li class="d-flex pe-2 mb-3 pb-1">
            <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="checked"
              class="lazy contain flex-shrink-0 me-2">
            <span class="d-block ps-md-1">Haşema</span>
          </li>
          <li class="d-flex pe-2 mb-3 pb-1">
            <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="checked"
              class="lazy contain flex-shrink-0 me-2">
            <span class="d-block ps-md-1">Bedensel Engelli Odası</span>
          </li>
          <li class="d-flex pe-2 mb-3 pb-1">
            <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="checked"
              class="lazy contain flex-shrink-0 me-2">
            <span class="d-block ps-md-1">Kuaför</span>
          </li>
          <li class="d-flex pe-2 mb-3 pb-1">
            <img src="/img/icons/025-tick-second.svg" width="18" height="18" alt="checked"
              class="lazy contain flex-shrink-0 me-2">
            <span class="d-block ps-md-1">Doktor</span>
          </li>
        </ul>
      </div>
    </section>
    <section class="accomodation-types-section mb-5 pb-sm-4">
      <div class="container">
        <div class="accommodation-types border border-light rounded-xxl overflow-hidden">
          <div class="at-header bg-theme-light-2 py-4 px-4">
            <div class="fs-5 ls-05 lh-sm pt-1 ps-sm-3"><span class="opacity-75">The European Hotel</span> <strong
                class="fw-semibold">Konaklama Tipleri</strong></div>
          </div>
          <div class="at-body pt-3 pb-4 pb-lg-5 px-4">
            <div class="d-flex flex-wrap align-items-start ps-sm-3">
              <div class="col-12 col-sm-4 col-lg-3 nav flex-column flex-nowrap flex-sm-wrap pe-sm-4"
                id="accommodation-tab" role="tablist" aria-orientation="vertical">
                <button class="nav-link acm-content-open bg-transparent px-0 py-3 mb-sm-4 text-start active opened"
                  id="accommodation-home-tab" data-bs-toggle="pill" data-bs-target="#accommodation-home" type="button"
                  role="tab" aria-controls="accommodation-home" aria-selected="true">
                  <div
                    class="title fs-6 ls-05 fw-normal text-dark d-flex align-items-center justify-content-sm-start justify-content-between mb-2">
                    <span>Ultra Herşey Dahil</span>
                    <svg class="icon d-sm-none ms-auto" width="11px" height="7px" viewBox="0 0 11 7" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Villa-SSS" transform="translate(-1132.000000, -960.000000)" fill="#1A1D59"
                          fill-rule="nonzero">
                          <g id="right-arrow-(3)-copy"
                            transform="translate(1137.833958, 963.045043) rotate(-270.000000) translate(-1137.833958, -963.045043) translate(1134.798953, 957.879001)">
                            <path
                              d="M5.9052,4.762884 L1.307292,0.16506 C1.200948,0.058632 1.058988,1.45140315e-13 0.90762,1.45140315e-13 C0.756252,1.45140315e-13 0.614292,0.058632 0.507948,0.16506 L0.169344,0.50358 C-0.050988,0.724164 -0.050988,1.082676 0.169344,1.302924 L4.03032,5.1639 L0.16506,9.02916 C0.058716,9.135588 0,9.277464 0,9.428748 C0,9.5802 0.058716,9.722076 0.16506,9.828588 L0.503664,10.167024 C0.610092,10.273452 0.751968,10.332084 0.903336,10.332084 C1.054704,10.332084 1.196664,10.273452 1.303008,10.167024 L5.9052,5.565 C6.011796,5.458236 6.070344,5.315688 6.07000944,5.164152 C6.070344,5.012028 6.011796,4.869564 5.9052,4.762884 Z"
                              id="Path"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span class="text-theme-secondary d-block lh-sm ls-05">Tesis ultra her şey dahil olarak da hizmet
                    vermektedir.</span>
                </button>
                <div class="acm-mobile-content position-relative rounded-md px-3 py-4 bg-theme-light-2 d-sm-none show">
                  <ul class="text-theme-secondary ls-05">
                    <li>Sabah Kahvaltısı 07:00-10:00</li>
                    <li>Geç Kahvaltı 10:00-10:30</li>
                    <li>Öğle Yemeği 12:30-14:00</li>
                    <li>Akşam Yemeği 19:00-21:00</li>
                    <li>Gece Büfesi 23:30-00:30</li>
                    <li>Gece Mini Kahvaltı 04:00-07:00</li>
                    <li>Gözleme Evi 10:30 - 15:45</li>
                    <li>Snack 12:00 - 16:00</li>
                    <li>Çay ve Kahve Saati 13:00 -18:00</li>
                    <li>Pastane 13:00 – 18:00</li>
                    <li>Dondurma 13:00 - 15:45</li>
                    <li>Waffle ve Pancake 13:00 - 15:45</li>
                    <li>Ara Öğün İkramlık 16:30 – 17:30</li>
                    <li>Bebek Köşesi 24 saat</li>
                    <li>Trattoria By Alarcha A'la Carte 19:00 - 21:00(ücretli)</li>
                    <li>Helios Greek Taverna A'la Carte 19:00 - 21:00(ücretli)</li>
                    <li>Lobi Bar 10:00-08:00</li>
                    <li>Pool Bar 10:00-24:00</li>
                    <li>Sahil Bar 10:00-17:00</li>
                    <li>Açık Disko Bar 23:00-02:00</li>
                  </ul>
                </div>
                <button class="nav-link acm-content-open bg-transparent px-0 py-3 mb-sm-4 text-start"
                  id="accommodation-profile-tab" data-bs-toggle="pill" data-bs-target="#accommodation-profile"
                  type="button" role="tab" aria-controls="accommodation-profile" aria-selected="false">
                  <div
                    class="title fs-6 ls-05 fw-normal text-dark d-flex align-items-center justify-content-sm-start justify-content-between mb-2">
                    <span>Yarım Pansiyon</span>
                    <svg class="icon d-sm-none ms-auto" width="11px" height="7px" viewBox="0 0 11 7" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Villa-SSS" transform="translate(-1132.000000, -960.000000)" fill="#1A1D59"
                          fill-rule="nonzero">
                          <g id="right-arrow-(3)-copy"
                            transform="translate(1137.833958, 963.045043) rotate(-270.000000) translate(-1137.833958, -963.045043) translate(1134.798953, 957.879001)">
                            <path
                              d="M5.9052,4.762884 L1.307292,0.16506 C1.200948,0.058632 1.058988,1.45140315e-13 0.90762,1.45140315e-13 C0.756252,1.45140315e-13 0.614292,0.058632 0.507948,0.16506 L0.169344,0.50358 C-0.050988,0.724164 -0.050988,1.082676 0.169344,1.302924 L4.03032,5.1639 L0.16506,9.02916 C0.058716,9.135588 0,9.277464 0,9.428748 C0,9.5802 0.058716,9.722076 0.16506,9.828588 L0.503664,10.167024 C0.610092,10.273452 0.751968,10.332084 0.903336,10.332084 C1.054704,10.332084 1.196664,10.273452 1.303008,10.167024 L5.9052,5.565 C6.011796,5.458236 6.070344,5.315688 6.07000944,5.164152 C6.070344,5.012028 6.011796,4.869564 5.9052,4.762884 Z"
                              id="Path"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span class="text-theme-secondary d-block lh-sm ls-05">Yarım pansiyon konseptte sabah kahvaltısı ve
                    akşam yemeği dışında alınan tüm yiyecek ve içecekler ücretlidir.</span>
                </button>
                <div class="acm-mobile-content position-relative rounded-md px-3 py-4 bg-theme-light-2 d-sm-none">
                  <ul class="text-theme-secondary ls-05">
                    <li>Snack 12:00 - 16:00</li>
                    <li>Çay ve Kahve Saati 13:00 -18:00</li>
                    <li>Pastane 13:00 – 18:00</li>
                    <li>Dondurma 13:00 - 15:45</li>
                    <li>Waffle ve Pancake 13:00 - 15:45</li>
                    <li>Ara Öğün İkramlık 16:30 – 17:30</li>
                    <li>Bebek Köşesi 24 saat</li>
                    <li>Trattoria By Alarcha A'la Carte 19:00 - 21:00(ücretli)</li>
                    <li>Helios Greek Taverna A'la Carte 19:00 - 21:00(ücretli)</li>
                    <li>Lobi Bar 10:00-08:00</li>
                    <li>Pool Bar 10:00-24:00</li>
                    <li>Sahil Bar 10:00-17:00</li>
                    <li>Açık Disko Bar 23:00-02:00</li>
                  </ul>
                </div>
                <button class="nav-link acm-content-open bg-transparent px-0 py-3 mb-sm-4 text-start"
                  id="accommodation-messages-tab" data-bs-toggle="pill" data-bs-target="#accommodation-messages"
                  type="button" role="tab" aria-controls="accommodation-messages" aria-selected="false">
                  <div
                    class="title fs-6 ls-05 fw-normal text-dark d-flex align-items-center justify-content-sm-start justify-content-between mb-2">
                    <span>Oda Kahvaltı</span>
                    <svg class="icon d-sm-none ms-auto" width="11px" height="7px" viewBox="0 0 11 7" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Villa-SSS" transform="translate(-1132.000000, -960.000000)" fill="#1A1D59"
                          fill-rule="nonzero">
                          <g id="right-arrow-(3)-copy"
                            transform="translate(1137.833958, 963.045043) rotate(-270.000000) translate(-1137.833958, -963.045043) translate(1134.798953, 957.879001)">
                            <path
                              d="M5.9052,4.762884 L1.307292,0.16506 C1.200948,0.058632 1.058988,1.45140315e-13 0.90762,1.45140315e-13 C0.756252,1.45140315e-13 0.614292,0.058632 0.507948,0.16506 L0.169344,0.50358 C-0.050988,0.724164 -0.050988,1.082676 0.169344,1.302924 L4.03032,5.1639 L0.16506,9.02916 C0.058716,9.135588 0,9.277464 0,9.428748 C0,9.5802 0.058716,9.722076 0.16506,9.828588 L0.503664,10.167024 C0.610092,10.273452 0.751968,10.332084 0.903336,10.332084 C1.054704,10.332084 1.196664,10.273452 1.303008,10.167024 L5.9052,5.565 C6.011796,5.458236 6.070344,5.315688 6.07000944,5.164152 C6.070344,5.012028 6.011796,4.869564 5.9052,4.762884 Z"
                              id="Path"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span class="text-theme-secondary d-block lh-sm ls-05">Oda kahvaltı konseptte sabah kahvaltısı dışında
                    alınan tüm yiyecek ve içecekler ücretlidir.</span>
                </button>
                <div class="acm-mobile-content position-relative rounded-md px-3 py-4 bg-theme-light-2 d-sm-none">
                  <ul class="text-theme-secondary ls-05">
                    <li>Öğle Yemeği 12:30-14:00</li>
                    <li>Akşam Yemeği 19:00-21:00</li>
                    <li>Bebek Köşesi 24 saat</li>
                    <li>Trattoria By Alarcha A'la Carte 19:00 - 21:00(ücretli)</li>
                    <li>Helios Greek Taverna A'la Carte 19:00 - 21:00(ücretli)</li>
                    <li>Lobi Bar 10:00-08:00</li>
                    <li>Pool Bar 10:00-24:00</li>
                    <li>Sahil Bar 10:00-17:00</li>
                    <li>Açık Disko Bar 23:00-02:00</li>
                    <li>Waffle ve Pancake 13:00 - 15:45</li>
                    <li>Ara Öğün İkramlık 16:30 – 17:30</li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-sm-8 tab-content offset-lg-1 pt-3 ps-sm-3 ps-lg-4 d-none d-sm-block"
                id="accommodation-tabContent">
                <div class="tab-pane fade show active" id="accommodation-home" role="tabpanel"
                  aria-labelledby="accommodation-home-tab">
                  <ul class="text-theme-secondary ls-05">
                    <li>Sabah Kahvaltısı 07:00-10:00</li>
                    <li>Geç Kahvaltı 10:00-10:30</li>
                    <li>Öğle Yemeği 12:30-14:00</li>
                    <li>Akşam Yemeği 19:00-21:00</li>
                    <li>Gece Büfesi 23:30-00:30</li>
                    <li>Gece Mini Kahvaltı 04:00-07:00</li>
                    <li>Gözleme Evi 10:30 - 15:45</li>
                    <li>Snack 12:00 - 16:00</li>
                    <li>Çay ve Kahve Saati 13:00 -18:00</li>
                    <li>Pastane 13:00 – 18:00</li>
                    <li>Dondurma 13:00 - 15:45</li>
                    <li>Waffle ve Pancake 13:00 - 15:45</li>
                    <li>Ara Öğün İkramlık 16:30 – 17:30</li>
                    <li>Bebek Köşesi 24 saat</li>
                    <li>Trattoria By Alarcha A'la Carte 19:00 - 21:00(ücretli)</li>
                    <li>Helios Greek Taverna A'la Carte 19:00 - 21:00(ücretli)</li>
                    <li>Lobi Bar 10:00-08:00</li>
                    <li>Pool Bar 10:00-24:00</li>
                    <li>Sahil Bar 10:00-17:00</li>
                    <li>Açık Disko Bar 23:00-02:00</li>
                  </ul>
                </div>
                <div class="tab-pane fade" id="accommodation-profile" role="tabpanel"
                  aria-labelledby="accommodation-profile-tab">
                  <ul class="text-theme-secondary ls-05">
                    <li>Snack 12:00 - 16:00</li>
                    <li>Çay ve Kahve Saati 13:00 -18:00</li>
                    <li>Pastane 13:00 – 18:00</li>
                    <li>Dondurma 13:00 - 15:45</li>
                    <li>Waffle ve Pancake 13:00 - 15:45</li>
                    <li>Ara Öğün İkramlık 16:30 – 17:30</li>
                    <li>Bebek Köşesi 24 saat</li>
                    <li>Trattoria By Alarcha A'la Carte 19:00 - 21:00(ücretli)</li>
                    <li>Helios Greek Taverna A'la Carte 19:00 - 21:00(ücretli)</li>
                    <li>Lobi Bar 10:00-08:00</li>
                    <li>Pool Bar 10:00-24:00</li>
                    <li>Sahil Bar 10:00-17:00</li>
                    <li>Açık Disko Bar 23:00-02:00</li>
                  </ul>
                </div>
                <div class="tab-pane fade" id="accommodation-messages" role="tabpanel"
                  aria-labelledby="accommodation-messages-tab">
                  <ul class="text-theme-secondary ls-05">
                    <li>Öğle Yemeği 12:30-14:00</li>
                    <li>Akşam Yemeği 19:00-21:00</li>
                    <li>Bebek Köşesi 24 saat</li>
                    <li>Trattoria By Alarcha A'la Carte 19:00 - 21:00(ücretli)</li>
                    <li>Helios Greek Taverna A'la Carte 19:00 - 21:00(ücretli)</li>
                    <li>Lobi Bar 10:00-08:00</li>
                    <li>Pool Bar 10:00-24:00</li>
                    <li>Sahil Bar 10:00-17:00</li>
                    <li>Açık Disko Bar 23:00-02:00</li>
                    <li>Waffle ve Pancake 13:00 - 15:45</li>
                    <li>Ara Öğün İkramlık 16:30 – 17:30</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <b-modal id="amenitesModal" class="Login" size="xl" :hide-header="true" hide-footer @shown="showSwiper">
      <div class="Amenites">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
          @click="$bvModal.hide('amenitesModal')"><i class="icon-login-close"></i></button>

        <h3 class="Amenites-title">Tesisin tüm olanakları</h3>
        <div class="swiper swiper-otel">
          <div class="swiper-wrapper" style="overflow: hidden;">
            <div class="swiper-slide" v-for="(item, index) in 10" :key="index" style="overflow: hidden;">
              <img src="/uploads/room-image1.jpg" class="w-100" alt="">
            </div>
          </div>
          <!-- If pagination is needed -->

          <!-- If navigation buttons are needed -->
          <div class="swiper-button-prev list-navigation-prev"></div>
          <div class="swiper-button-next list-navigation-next"></div>
        </div>
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
  </main>
</template>

<script>
import { Swiper, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'OtelIndexPage',
  layout: 'no-search',
  components: {
    Swiper
  },

  data() {
    return {

    }
  },
  mounted() {

  },
  method: {
    showSwiper() {
      Swiper.use([Navigation, Pagination])
      const swiper = new Swiper('.swiper-otel', {
        slidesPerView: 1,
        spaceBetween: 18,
        direction: 'horizontal',
        loop: true,
        modules: [Navigation, Pagination],
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },

      })
    }
  }

}
</script>
<style scoped>
.list-item .list-image {
  width: 100%;
}
</style>
