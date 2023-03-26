<template>
  <div>
    <main class="main">
      <section class="view-detail-section">
        <div class="view-detail-section-menus">
          <div class="detail-top bg-theme-first-dark" id="detailTop">
            <div class="container">
              <div class="view-top d-flex">

                <div class="view-top-title d-flex">
                  <h1>{{hotelDetails.body.hotel.name}}</h1>
                  <div class="fs-7 d-inline-flex align-items-center fw-medium text-theme-secondary ms-3">
                    <img src="/img/icons/011-star-icon.svg" width="13" height="13" alt="star"
                         class="lazy contain flex-shrink-0">&nbsp;
                    <span>{{hotelDetails.body.hotel.stars}}</span>
                  </div>
                </div>


                <div class="view-top-right">
                  <div class="d-flex align-items-center text-theme-secondary">
                    <i class="icon-pin"></i>
                    <p class="view-top-right-location"><span class="lh-sm">{{hotelDetails.body.hotel.country.name}} / {{hotelDetails.body.hotel.city.name}}</span></p>
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
            <div class="area-1" v-if="previewImages.length > 0">
              <a :href="previewImages[0].preview_url" data-fancybox="gallery" data-caption="Salon"
                 class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
                <!-- <img :src="previewImages[0].preview_url" :srcset="previewImages[0].responsive"
                   alt="view-image" class="lazy cover rounded-xl w-100 h-100"> -->
                <nuxt-img :src="previewImages[0].preview_url" :srcset="previewImages[0].responsive"
                          width="585" height="387" sizes="sm:100vw md:50vw lg:585px" />

              </a>
            </div>
            <div class="area-2 d-md-block d-none" v-if="previewImages.length > 1">
              <a :href="previewImages[1].preview_url" data-fancybox="gallery" data-caption="Salon"
                 class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
                <nuxt-img :src="previewImages[1].preview_url" :srcset="previewImages[1].responsive"
                          width="284" height="187" sizes="sm:100vw md:50vw lg:284px" />

              </a>
            </div>
            <div class="area-3 d-md-block d-none" v-if="previewImages.length > 2">
              <a :href="previewImages[2].preview_url" data-fancybox="gallery" data-caption="Salon"
                 class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
                <nuxt-img :src="previewImages[2].preview_url" :srcset="previewImages[2].responsive"
                          width="284" height="187" sizes="sm:100vw md:50vw lg:284px" />

              </a>
            </div>
            <div class="area-4 d-none d-lg-block" v-if="previewImages.length > 3">
              <a :href="previewImages[3].preview_url" data-fancybox="gallery" data-caption="Salon"
                 class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
                <nuxt-img :src="previewImages[3].preview_url" :srcset="previewImages[3].responsive"
                          width="284" height="187" sizes="sm:100vw md:50vw lg:284px" />

              </a>
            </div>
            <div class="area-5 d-none d-lg-block" v-if="previewImages.length > 4">
              <div class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl last">
                <nuxt-img :src="previewImages[4].preview_url" :srcset="previewImages[4].responsive"
                          width="284" height="187" sizes="sm:100vw md:50vw lg:284px" />
                <div
                  class="hover-box position-absolute top-0 start-0 w-100 h-100 bg-theme-first-dark text-white fs-6 bg-opacity-75 d-flex align-items-center justify-content-center px-2 fw-medium ls-05 d-flex flex-column">
                  <span :href="previewImages[0].preview_url" data-fancybox="gallery" data-caption="Salon">Tüm Fotoğraflar ( {{previewImages.length}} ) </span>
                  <!-- <button type="button" @click.prevent="test()">Video İzle</button> -->
                  <a href="https://www.youtube.com/watch?v=5SMaakuGyH0" data-fancybox>
                    <i class="icon-play-button"></i> Video İzle
                  </a>
                  <!-- https://www.youtube.com/watch?v=5SMaakuGyH0 -->
                </div>
              </div>
            </div>

            <div class="d-none">
              <a v-for="previewImage in previewImages.slice(5)" :href="previewImage.preview_url" data-fancybox="gallery" data-caption="Salon"></a>
            </div>

          </div>
        </div>
      </section>

      <section class="rooms-section pt-3 mt-1">
        <div class="container">

          <template v-if="roomsLoading">
            Odalar yükleniyor...
          </template>
          <template v-else>
            <template v-if="hotelPriceDetails?.body?.hotels[0].offers[0]">
              <template v-for="hotel in hotelPriceDetails?.body?.hotels">
                <template v-for="offer in hotel.offers">
                  <div v-for="room in offer.rooms" class="room border border-light rounded-xxl pt-2 px-2 pb-1 p-lg-2 mb-3">
                    <div class="row">
                      <div class="col-12 col-lg-8 col-xl-7 d-flex flex-column flex-sm-row pe-xl-4 mb-lg-0 mb-2">
                        <div class="img-box position-relative flex-shrink-0">
                          <img src="/uploads/room-image1.jpg" width="281" height="186" alt="room image"
                               class="lazy cover flex-shrink-0 rounded-xl">
                        </div>
                        <div class="flex-fill d-flex flex-column align-items-start ps-2 ps-sm-3 ps-xl-4 pt-3">
                          <div class="d-flex align-items-center w-100 mb-2">
                            <span class="fs-5 lh-sm ls-05 d-inline-block me-auto">{{room.roomName}}</span>

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
                                <span class="text-secondary ls-05 d-block lh-1"><small>{{offer.night}} GECE</small></span>
                                <strong class="fs-5 fw-semibold d-block mb-xl-3 pb-xl-1 lh-sm">{{offer.price.amount}} {{offer.price.currency}}</strong>
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
                </template>
              </template>
            </template>
            <template v-else>
              Uygun oda bulunamadı...
            </template>
          </template>


          <template v-if="false">
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
          </template>

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


    <section style="display: none" class="search-engine-section">
      <div class="container">
        <form action="" class="search-engine">
          <div class="tab-content" id="search-tabContent">
            <div class="tab-pane show active" id="otel" role="tabpanel" aria-labelledby="otel-tab">
              <div class="tab bg-white d-flex flex-wrap flex-xl-nowrap align-items-center py-3 ps-3 ps-sm-4 pe-3">
                <div class="hotel-name ps-xl-4 fs-5 ls-05 mb-lg-0 mb-2">
                  <span class="d-inline-block ps-1">{{hotelDetails.body.hotel.name}}</span>
                </div>
                <div class="dropdown-wrapper dt">
                  <a href="javascript:void(0);" class="selection d-flex text-theme-secondary position-relative pe-3 pe-sm-4 py-1">
                    <div class="icon-box bg-theme-light rounded-sm flex-shrink-0 d-flex align-items-center justify-content-center me-2 me-sm-3">
                      <svg width="18px" height="20px" viewBox="0 0 18 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-883.000000, -199.000000)" fill="#B3B6C5">
                            <g id="001-calendar-copy" transform="translate(883.000000, 199.000000)">
                              <path d="M11.8426003,1.98660004 L11.8426003,1.00100002 C11.8426003,0.45694881 12.2841491,0.0154000003 12.8282003,0.0154000003 C13.3722515,0.0154000003 13.8138003,0.45694881 13.8138003,1.00100002 L13.8138003,1.98660004 C15.9909907,1.98660004 17.7562004,3.75180968 17.7562004,5.92900013 L17.7562004,15.7850003 C17.7562004,17.9621908 15.9909907,19.7274004 13.8138003,19.7274004 C10.9949842,19.7274004 6.77563055,19.7274004 3.95780009,19.7274004 C1.78060964,19.7274004 0.0154000003,17.9621908 0.0154000003,15.7850003 L0.0154000003,5.92900013 C0.0154000003,3.75180968 1.78060964,1.98660004 3.95780009,1.98660004 L3.95780009,1.00100002 C3.95780009,0.45694881 4.3993489,0.0154000003 4.94340011,0.0154000003 C5.48745132,0.0154000003 5.92900013,0.45694881 5.92900013,1.00100002 L5.92900013,1.98660004 L11.8426003,1.98660004 Z M15.7850003,9.87140021 L1.98660004,9.87140021 L1.98660004,15.7850003 C1.98660004,16.8731028 2.86871206,17.7562004 3.95780009,17.7562004 L13.8138003,17.7562004 C14.9019027,17.7562004 15.7850003,16.8731028 15.7850003,15.7850003 L15.7850003,9.87140021 Z M13.8138003,3.95780009 L13.8138003,4.94340011 C13.8138003,5.48745132 13.3722515,5.92900013 12.8282003,5.92900013 C12.2841491,5.92900013 11.8426003,5.48745132 11.8426003,4.94340011 L11.8426003,3.95780009 L5.92900013,3.95780009 L5.92900013,4.94340011 C5.92900013,5.48745132 5.48745132,5.92900013 4.94340011,5.92900013 C4.3993489,5.92900013 3.95780009,5.48745132 3.95780009,4.94340011 L3.95780009,3.95780009 C2.86871206,3.95780009 1.98660004,4.8399121 1.98660004,5.92900013 L1.98660004,7.90020017 L15.7850003,7.90020017 L15.7850003,5.92900013 C15.7850003,4.8399121 14.9019027,3.95780009 13.8138003,3.95780009 Z" id="Shape"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div class="d-flex flex-column justify-content-center overflow-hidden flex-fill ls-05 me-2">
                      <span class="fs-8">Giriş Tarihi</span>
                      <strong class="total giris fw-medium text-nowrap"></strong>
                    </div>
                    <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif" data-src="https://boceksoft.com/works/otelbnb/cdn/img/icons/007-down-chevron.svg" width="11" height="7" alt="down-chevron" class="lazy contain flex-shrink-0 align-self-center mt-1 ms-auto loaded" style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/img/icons/007-down-chevron.svg&quot;);">
                  </a>
                  <div class="underbox-wrapper">
                    <div class="underbox-shadow"></div>
                    <div class="underbox">
                      <div class="underbox-header d-sm-none border-bottom border-theme-light-2 py-3">
                        <span class="fs-5-5 fw-medium ls-05">Giriş Tarihi</span>
                      </div>
                      <div class="underbox-content">
                        <div id="searchdate1" class="searchdate1 datepicker w-100 border-0 fw-600 hasDatepicker"><div class="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" style="display: block;"><div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all"><a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="geri"><span class="ui-icon ui-icon-circle-triangle-w">geri</span></a><a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="ileri"><span class="ui-icon ui-icon-circle-triangle-e">ileri</span></a><div class="ui-datepicker-title"><span class="ui-datepicker-month">Mart</span>&nbsp;<span class="ui-datepicker-year">2023</span></div></div><table class="ui-datepicker-calendar"><thead><tr><th scope="col"><span title="Pazartesi">Pt</span></th><th scope="col"><span title="Salı">Sa</span></th><th scope="col"><span title="Çarşamba">Ça</span></th><th scope="col"><span title="Perşembe">Pe</span></th><th scope="col"><span title="Cuma">Cu</span></th><th scope="col" class="ui-datepicker-week-end"><span title="Cumartesi">Ct</span></th><th scope="col" class="ui-datepicker-week-end"><span title="Pazar">Pz</span></th></tr></thead><tbody><tr><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">1</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">2</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">3</span></td><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">4</span></td><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">5</span></td></tr><tr><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">6</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">7</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">8</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">9</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">10</span></td><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">11</span></td><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">12</span></td></tr><tr><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">13</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">14</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">15</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">16</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">17</span></td><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">18</span></td><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">19</span></td></tr><tr><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">20</span></td><td class=" ui-datepicker-days-cell-over  ui-datepicker-current-day ui-datepicker-today" data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default ui-state-highlight ui-state-active ui-state-hover" href="#" aria-current="true" data-date="21">21</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default" href="#" aria-current="false" data-date="22">22</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default" href="#" aria-current="false" data-date="23">23</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default" href="#" aria-current="false" data-date="24">24</a></td><td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default" href="#" aria-current="false" data-date="25">25</a></td><td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default" href="#" aria-current="false" data-date="26">26</a></td></tr><tr><td class=" " data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default" href="#" aria-current="false" data-date="27">27</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default" href="#" aria-current="false" data-date="28">28</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default" href="#" aria-current="false" data-date="29">29</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default" href="#" aria-current="false" data-date="30">30</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default" href="#" aria-current="false" data-date="31">31</a></td><td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td></tr></tbody></table></div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="dropdown-wrapper dt">
                  <a href="javascript:void(0);" class="selection d-flex text-theme-secondary position-relative pe-3 pe-sm-4 py-1">
                    <div class="icon-box bg-theme-light rounded-sm flex-shrink-0 d-flex align-items-center justify-content-center me-2 me-sm-3">
                      <svg width="18px" height="20px" viewBox="0 0 18 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-883.000000, -199.000000)" fill="#B3B6C5">
                            <g id="001-calendar-copy" transform="translate(883.000000, 199.000000)">
                              <path d="M11.8426003,1.98660004 L11.8426003,1.00100002 C11.8426003,0.45694881 12.2841491,0.0154000003 12.8282003,0.0154000003 C13.3722515,0.0154000003 13.8138003,0.45694881 13.8138003,1.00100002 L13.8138003,1.98660004 C15.9909907,1.98660004 17.7562004,3.75180968 17.7562004,5.92900013 L17.7562004,15.7850003 C17.7562004,17.9621908 15.9909907,19.7274004 13.8138003,19.7274004 C10.9949842,19.7274004 6.77563055,19.7274004 3.95780009,19.7274004 C1.78060964,19.7274004 0.0154000003,17.9621908 0.0154000003,15.7850003 L0.0154000003,5.92900013 C0.0154000003,3.75180968 1.78060964,1.98660004 3.95780009,1.98660004 L3.95780009,1.00100002 C3.95780009,0.45694881 4.3993489,0.0154000003 4.94340011,0.0154000003 C5.48745132,0.0154000003 5.92900013,0.45694881 5.92900013,1.00100002 L5.92900013,1.98660004 L11.8426003,1.98660004 Z M15.7850003,9.87140021 L1.98660004,9.87140021 L1.98660004,15.7850003 C1.98660004,16.8731028 2.86871206,17.7562004 3.95780009,17.7562004 L13.8138003,17.7562004 C14.9019027,17.7562004 15.7850003,16.8731028 15.7850003,15.7850003 L15.7850003,9.87140021 Z M13.8138003,3.95780009 L13.8138003,4.94340011 C13.8138003,5.48745132 13.3722515,5.92900013 12.8282003,5.92900013 C12.2841491,5.92900013 11.8426003,5.48745132 11.8426003,4.94340011 L11.8426003,3.95780009 L5.92900013,3.95780009 L5.92900013,4.94340011 C5.92900013,5.48745132 5.48745132,5.92900013 4.94340011,5.92900013 C4.3993489,5.92900013 3.95780009,5.48745132 3.95780009,4.94340011 L3.95780009,3.95780009 C2.86871206,3.95780009 1.98660004,4.8399121 1.98660004,5.92900013 L1.98660004,7.90020017 L15.7850003,7.90020017 L15.7850003,5.92900013 C15.7850003,4.8399121 14.9019027,3.95780009 13.8138003,3.95780009 Z" id="Shape"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div class="d-flex flex-column justify-content-center overflow-hidden flex-fill ls-05 me-2">
                      <span class="fs-8">Çıkış Tarihi</span>
                      <strong class="total cikis fw-medium text-nowrap">Seçiniz</strong>
                    </div>
                    <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif" data-src="https://boceksoft.com/works/otelbnb/cdn/img/icons/007-down-chevron.svg" width="11" height="7" alt="down-chevron" class="lazy contain flex-shrink-0 align-self-center mt-1 ms-auto loaded" style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/img/icons/007-down-chevron.svg&quot;);">
                  </a>
                  <div class="underbox-wrapper">
                    <div class="underbox-shadow"></div>
                    <div class="underbox">
                      <div class="underbox-header d-sm-none border-bottom border-theme-light-2 py-3">
                        <span class="fs-5-5 fw-medium ls-05">Çıkış Tarihi</span>
                      </div>
                      <div class="underbox-content">
                        <div id="searchdate2" class="searchdate2 datepicker w-100 border-0 fw-600 hasDatepicker"><div class="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" style="display: block;"><div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all"><a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="geri"><span class="ui-icon ui-icon-circle-triangle-w">geri</span></a><a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="ileri"><span class="ui-icon ui-icon-circle-triangle-e">ileri</span></a><div class="ui-datepicker-title"><span class="ui-datepicker-month">Mart</span>&nbsp;<span class="ui-datepicker-year">2023</span></div></div><table class="ui-datepicker-calendar"><thead><tr><th scope="col"><span title="Pazartesi">Pt</span></th><th scope="col"><span title="Salı">Sa</span></th><th scope="col"><span title="Çarşamba">Ça</span></th><th scope="col"><span title="Perşembe">Pe</span></th><th scope="col"><span title="Cuma">Cu</span></th><th scope="col" class="ui-datepicker-week-end"><span title="Cumartesi">Ct</span></th><th scope="col" class="ui-datepicker-week-end"><span title="Pazar">Pz</span></th></tr></thead><tbody><tr><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">1</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">2</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">3</span></td><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">4</span></td><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">5</span></td></tr><tr><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">6</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">7</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">8</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">9</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">10</span></td><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">11</span></td><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">12</span></td></tr><tr><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">13</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">14</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">15</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">16</span></td><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">17</span></td><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">18</span></td><td class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">19</span></td></tr><tr><td class=" ui-datepicker-unselectable ui-state-disabled "><span class="ui-state-default">20</span></td><td class=" ui-datepicker-days-cell-over  ui-datepicker-current-day ui-datepicker-today" data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default ui-state-highlight ui-state-active ui-state-hover" href="#" aria-current="true" data-date="21">21</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default" href="#" aria-current="false" data-date="22">22</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default" href="#" aria-current="false" data-date="23">23</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default" href="#" aria-current="false" data-date="24">24</a></td><td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default" href="#" aria-current="false" data-date="25">25</a></td><td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default" href="#" aria-current="false" data-date="26">26</a></td></tr><tr><td class=" " data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default" href="#" aria-current="false" data-date="27">27</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default" href="#" aria-current="false" data-date="28">28</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default" href="#" aria-current="false" data-date="29">29</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default" href="#" aria-current="false" data-date="30">30</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="2" data-year="2023"><a class="ui-state-default" href="#" aria-current="false" data-date="31">31</a></td><td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td></tr></tbody></table></div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="dropdown-wrapper gst selected">
                  <a href="javascript:void(0);" class="selection d-flex text-theme-secondary pe-3 pe-sm-4 py-1">
                    <div class="icon-box bg-theme-light rounded-sm flex-shrink-0 d-flex align-items-center justify-content-center me-2 me-sm-3">
                      <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-1087.000000, -198.000000)" fill="#B3B6C5" fill-rule="nonzero">
                            <g id="003-group" transform="translate(1087.000000, 198.000000)">
                              <path d="M10.752,5.04 C12.1416094,5.04 13.272,3.9096094 13.272,2.52 C13.272,1.1303906 12.1416094,0 10.752,0 C9.3623906,0 8.232,1.1303906 8.232,2.52 C8.232,3.9096094 9.3623906,5.04 10.752,5.04 Z M10.752,1.68 C11.2151484,1.68 11.592,2.05685155 11.592,2.52 C11.592,2.98314845 11.2151484,3.36 10.752,3.36 C10.2888516,3.36 9.912,2.98314845 9.912,2.52 C9.912,2.05685155 10.2888516,1.68 10.752,1.68 Z M15.372,13.3599375 C15.372,14.3866406 14.8250156,15.3526406 13.9446562,15.8809219 L13.8839531,15.9173438 C13.5064453,16.1439141 13.272,16.5578438 13.272,16.9978594 L13.272,20.664 C13.272,21.1279688 12.8959687,21.504 12.432,21.504 C11.9680312,21.504 11.592,21.1279688 11.592,20.664 L11.592,16.9978594 C11.592,15.9711563 12.1389844,15.0051563 13.0193437,14.476875 L13.0800469,14.4404531 C13.4575547,14.2140469 13.692,13.7999531 13.692,13.3599375 L13.692,9.618 C13.692,7.8823828 12.0817266,7.518 10.731,7.518 C9.38027345,7.518 7.77,7.8823828 7.77,9.618 L7.77,13.3477969 C7.77,13.7924063 8.0080547,14.2084688 8.3911406,14.4338906 L8.4625078,14.4758906 C9.35664845,15.001875 9.912,15.9727969 9.912,17.01 L9.912,20.664 C9.912,21.1279688 9.53596875,21.504 9.072,21.504 C8.60803125,21.504 8.232,21.1279688 8.232,20.664 L8.232,17.01 C8.232,16.5653906 7.9939453,16.1493281 7.6108594,15.9240703 L7.5394922,15.8820703 C6.64535155,15.3560859 6.09,14.385 6.09,13.3477969 L6.09,9.618 C6.09,8.35258595 6.6008906,7.3326094 7.5675469,6.6684844 C8.3583281,6.1251094 9.4522969,5.838 10.731,5.838 C12.0097031,5.838 13.1036719,6.1251094 13.8944531,6.6684844 C14.8611094,7.3326094 15.372,8.35258595 15.372,9.618 L15.372,13.3599375 Z M4.2,6.72 C5.5896094,6.72 6.72,5.5896094 6.72,4.2 C6.72,2.8103906 5.5896094,1.68 4.2,1.68 C2.8103906,1.68 1.68,2.8103906 1.68,4.2 C1.68,5.5896094 2.8103906,6.72 4.2,6.72 Z M4.2,3.36 C4.66314845,3.36 5.04,3.73685155 5.04,4.2 C5.04,4.66314845 4.66314845,5.04 4.2,5.04 C3.73685155,5.04 3.36,4.66314845 3.36,4.2 C3.36,3.73685155 3.73685155,3.36 4.2,3.36 Z M6.72,17.724 L6.72,20.664 C6.72,21.1279688 6.34396875,21.504 5.88,21.504 C5.41603125,21.504 5.04,21.1279688 5.04,20.664 L5.04,17.724 C5.04,17.2600313 5.41603125,16.884 5.88,16.884 C6.34396875,16.884 6.72,17.2600313 6.72,17.724 Z M4.956,8.379 C4.956,8.84296875 4.57996875,9.219 4.116,9.219 C1.68,9.219 1.68,10.3631719 1.68,10.794 L1.68,14.364 C1.68,14.7585703 1.86834375,15.1352578 2.184,15.372 C2.9203125,15.9242344 3.36,16.8036094 3.36,17.724 L3.36,20.664 C3.36,21.1279688 2.98396875,21.504 2.52,21.504 C2.05603125,21.504 1.68,21.1279688 1.68,20.664 L1.68,17.724 C1.68,17.3294297 1.49165625,16.9527422 1.176,16.716 C0.4396875,16.1637656 0,15.2843906 0,14.364 L0,10.794 C0,9.65852345 0.466265604,8.7612656 1.3482656,8.1995156 C2.03634375,7.7611406 2.9675625,7.539 4.116,7.539 C4.57996875,7.539 4.956,7.91503125 4.956,8.379 Z M17.304,6.72 C18.6936094,6.72 19.824,5.5896094 19.824,4.2 C19.824,2.8103906 18.6936094,1.68 17.304,1.68 C15.9143906,1.68 14.784,2.8103906 14.784,4.2 C14.784,5.5896094 15.9143906,6.72 17.304,6.72 Z M17.304,3.36 C17.7671484,3.36 18.144,3.73685155 18.144,4.2 C18.144,4.66314845 17.7671484,5.04 17.304,5.04 C16.8408516,5.04 16.464,4.66314845 16.464,4.2 C16.464,3.73685155 16.8408516,3.36 17.304,3.36 Z M16.464,17.724 L16.464,20.664 C16.464,21.1279688 16.0879688,21.504 15.624,21.504 C15.1600313,21.504 14.784,21.1279688 14.784,20.664 L14.784,17.724 C14.784,17.2600313 15.1600313,16.884 15.624,16.884 C16.0879688,16.884 16.464,17.2600313 16.464,17.724 Z M21.504,10.794 L21.504,14.364 C21.504,15.2843906 21.0643125,16.1637656 20.328,16.716 C20.0123437,16.9527422 19.824,17.3294297 19.824,17.724 L19.824,20.664 C19.824,21.1279688 19.4479687,21.504 18.984,21.504 C18.5200312,21.504 18.144,21.1279688 18.144,20.664 L18.144,17.724 C18.144,16.8036094 18.5836875,15.9242344 19.32,15.372 C19.6356562,15.1352578 19.824,14.7585703 19.824,14.364 L19.824,10.794 C19.824,10.3631719 19.824,9.219 17.388,9.219 C16.9240312,9.219 16.548,8.84296875 16.548,8.379 C16.548,7.91503125 16.9240312,7.539 17.388,7.539 C18.5364375,7.539 19.4676562,7.7611406 20.1557344,8.1995156 C21.0377344,8.7612656 21.504,9.65852345 21.504,10.794 Z" id="Shape"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div class="d-flex flex-column justify-content-center overflow-hidden flex-fill ls-05 me-2">
                      <span class="fs-8">Kişi Sayısı</span>
                      <strong class="total fw-medium text-nowrap">1 Yetişkin, 0 Çocuk</strong>
                    </div>
                    <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif" data-src="https://boceksoft.com/works/otelbnb/cdn/img/icons/007-down-chevron.svg" width="11" height="7" alt="down-chevron" class="lazy contain flex-shrink-0 align-self-center mt-1 ms-auto loaded" style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/img/icons/007-down-chevron.svg&quot;);">
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
                            <button type="button" class="select-btn minus bg-transparent d-flex align-items-center justify-content-center rounded-circle" disabled="">
                              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                                <path d="m2 16h28"></path>
                              </svg>
                            </button>
                            <input type="text" name="yetiskinler" class="select-input text-center fs-5 px-2" value="1" data-min="1" data-max="10" data-text="Yetişkin, " readonly="">
                            <button type="button" class="select-btn plus bg-transparent d-flex align-items-center justify-content-center rounded-circle">
                              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
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
                            <button type="button" class="select-btn minus bg-transparent d-flex align-items-center justify-content-center rounded-circle" disabled="">
                              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                                <path d="m2 16h28"></path>
                              </svg>
                            </button>
                            <input type="text" name="cocuklar" class="select-input text-center fs-5 px-2" value="0" data-min="0" data-max="10" data-text="Çocuk" readonly="">
                            <button type="button" class="select-btn plus bg-transparent d-flex align-items-center justify-content-center rounded-circle">
                              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
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
                <div class="submit-wrapper d-flex justify-content-end ms-auto">
                  <button class="btn btn-theme-second btn-ripple fs-7 d-flex align-items-center justify-content-center text-center fw-semibold rounded-sm w-100 py-2 py-sm-3 px-3 px-sm-4">
                    <span class="d-inline-block me-2 px-1 py-sm-0 py-1"> ARA</span>
                    <img src="https://boceksoft.com/works/otelbnb/cdn/img/icons/006-ob-search-icon.svg" width="16" height="18" alt="ob-search" class="contain flex-shrink-0 my-1">
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>


<script>
import {Swiper, Navigation, Pagination} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import HotelDatePicker from "vue-hotel-datepicker2";
import "vue-hotel-datepicker2/dist/vueHotelDatepicker2.css";
import CloseVillaModal from '../modals/close-villa-modal.vue';

export default {
  name: 'DynamicHotelDetailPage',
  props: ['hotelDetails', 'selectedFilters'],
  data() {
    return {
      hotelPriceDetails: {},
      offerDetails: {},
      roomsLoading: true
    }
  },
  async mounted() {
    const response = await this.$dataService.getHotelPrice(this.hotelDetails.body.hotel.id, this.selectedFilters)
    this.hotelPriceDetails = response.data;
    if (this.hotelPriceDetails.body?.hotels[0]?.offers.length > 0) {
      const offerIds = this.hotelPriceDetails.body?.hotels[0]?.offers.map(offer => offer.offerId)
      let response = await this.$dataService.getOfferDetails({offerIds});
      this.offerDetails = response.data.body.offerDetails;
    }
    this.roomsLoading = false;
  },
  computed: {
    previewImages() {
      if (this.hotelDetails.body.custom?.hasOwnProperty('images') && this.hotelDetails.body.custom.images.length > 0) {
        return this.hotelDetails.body.custom.images
      } else if (this.hotelDetails.body.hotel.seasons[0].hasOwnProperty('mediaFiles')) {
        return this.hotelDetails.body.hotel.seasons[0].mediaFiles.map(media => {
          return  {
            "preview_url": media.urlFull,
            "orginal_url": media.urlFull,
            "responsive_url": media.urlFull
          }
        })
      }
      return []
    }
  },
  methods: {
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
    },
    showGallery() {
      document.querySelector('.Gallery').classList.add("show")
      document.querySelector('body').classList.add("over")
      document.querySelector('.main').classList.add("main-z")
      this.galleryIsOpen = true
    },
  }
}
</script>
