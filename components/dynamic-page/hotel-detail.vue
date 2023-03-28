<template>
  <div>
    <main class="main">
      <section class="view-detail-section otel mb-5">
        <div class="view-detail-section-menus">
          <div class="detail-top " id="detailTop">
            <div class="container">
              <div class="view-top d-flex">

                <div class="view-top-title d-flex">
                  <div class="view-top-title-in">
                    <h1>{{ hotelDetails.body.hotel.name }}</h1>
                    <div class="view-top-subtitle">
                      <div class="d-flex align-items-center text-theme-secondary">
                        <i class="icon-pin"></i>
                        <p class="view-top-right-location"><span class="lh-sm">{{ hotelDetails.body.hotel.country.name }}
                            /
                            {{ hotelDetails.body.hotel.city.name }}</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="Otel-card-review">
                    <span>9/10</span>
                    <p>Mükemmel <u>124 yorum</u></p>
                  </div>
                </div>


                <div class="view-top-right">

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
          <div class="View-menu" id="detailMenu">
            <div class="container">
              <div class="View-menu-in">
                <div class="View-menu-left">
                  <div class="d-flex flex-wrap align-items-center fs-8 fw-medium ls-05 text-theme-primary">
                    <div class="Otel-card-content-info-item erkenrezervasyon">
                      <span>%35</span>
                      <p>Erken Rezervasyon İndirimi</p>
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
                  <a href="" class="map-view">Haritada Görüntüle</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container pb-1 ">
          <div class="view-gallery">
            <div class="area-1" v-if="previewImages.length > 0">
              <a :href="previewImages[0].preview_url" data-fancybox="gallery" data-caption="Salon"
                class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
                <!-- <img :src="previewImages[0].preview_url" :srcset="previewImages[0].responsive"
                   alt="view-image" class="lazy cover rounded-xl w-100 h-100"> -->
                <nuxt-img :src="previewImages[0].preview_url" :srcset="previewImages[0].responsive" width="585"
                  height="387" sizes="sm:100vw md:50vw lg:585px" />

              </a>
            </div>
            <div class="area-2 d-md-block d-none" v-if="previewImages.length > 1">
              <a :href="previewImages[1].preview_url" data-fancybox="gallery" data-caption="Salon"
                class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
                <nuxt-img :src="previewImages[1].preview_url" :srcset="previewImages[1].responsive" width="284"
                  height="187" sizes="sm:100vw md:50vw lg:284px" />

              </a>
            </div>
            <div class="area-3 d-md-block d-none" v-if="previewImages.length > 2">
              <a :href="previewImages[2].preview_url" data-fancybox="gallery" data-caption="Salon"
                class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
                <nuxt-img :src="previewImages[2].preview_url" :srcset="previewImages[2].responsive" width="284"
                  height="187" sizes="sm:100vw md:50vw lg:284px" />

              </a>
            </div>
            <div class="area-4 d-none d-lg-block" v-if="previewImages.length > 3">
              <a :href="previewImages[3].preview_url" data-fancybox="gallery" data-caption="Salon"
                class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl">
                <nuxt-img :src="previewImages[3].preview_url" :srcset="previewImages[3].responsive" width="284"
                  height="187" sizes="sm:100vw md:50vw lg:284px" />

              </a>
            </div>
            <div class="area-5 d-none d-lg-block" v-if="previewImages.length > 4">
              <div class="view-item d-block w-100 h-100 position-relative overflow-hidden rounded-xl last">
                <nuxt-img :src="previewImages[4].preview_url" :srcset="previewImages[4].responsive" width="284"
                  height="187" sizes="sm:100vw md:50vw lg:284px" />
                <div
                  class="hover-box position-absolute top-0 start-0 w-100 h-100 bg-theme-first-dark text-white fs-6 bg-opacity-75 d-flex align-items-center justify-content-center px-2 fw-medium ls-05 d-flex flex-column">
                  <span :href="previewImages[0].preview_url" data-fancybox="gallery" data-caption="Salon">Tüm Fotoğraflar
                    ( {{ previewImages.length }} ) </span>
                  <!-- <button type="button" @click.prevent="test()">Video İzle</button> -->
                  <a href="https://www.youtube.com/watch?v=5SMaakuGyH0" data-fancybox>
                    <i class="icon-play-button"></i> Video İzle
                  </a>
                  <!-- https://www.youtube.com/watch?v=5SMaakuGyH0 -->
                </div>
              </div>
            </div>

            <div class="d-none">
              <a v-for="previewImage in previewImages.slice(5)" :href="previewImage.preview_url" data-fancybox="gallery"
                data-caption="Salon">
                <nuxt-img :src="previewImage.preview_url" :srcset="previewImage.preview_url" width="284" height="187"
                  sizes="sm:100vw md:50vw lg:284px" /></a>
            </div>

          </div>
        </div>
        <div class="container search-otel">
          <search-hotel-detail-component :key="$route.path"></search-hotel-detail-component>
        </div>
      </section>

      <section class="rooms-section pt-3 mt-1">
        <div class="container">

          <template v-if="roomsLoading">
            Odalar yükleniyor...
          </template>
          <template v-else>
            <template v-if=" hotelPriceDetails ?.body?.hotels[0].offers[0]">
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


          <template>
            <div class="room border border-light  p-2 ">
              <div class="row">
                <div class="col-12 col-lg-8 col-xl-7 d-flex flex-column flex-sm-row pe-xl-4 mb-lg-0 mb-2">
                  <div class="img-box position-relative flex-shrink-0">
                    <img src="/uploads/room-image1.jpg" width="297" height="208" alt="room image"
                      class="lazy cover flex-shrink-0 ">
                  </div>
                  <div class="room-content flex-fill d-flex flex-column align-items-start justify-content-between">
                    <div class="d-flex align-items-center w-100 mb-2">
                      <span class="d-inline-block me-auto room-title">Standart İki Yataklı Oda Penceresiz , 1 . Kat Twin
                        NTT1 - 27 m2</span>
                    </div>
                    <div class="room-highlights d-flex flex-wrap w-100 fs-6 lh-sm mb-2 mb-sm-3">

                      <small
                        class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                        <span class="text-theme-secondary me-1">Minibar</span>
                      </small>
                      <small
                        class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                        <span class="text-theme-secondary me-1">Balkon</span>
                      </small>
                      <small
                        class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                        <span class="text-theme-secondary me-1">Duşakabin</span>
                      </small>
                    </div>
                    <div class="d-flex align-items-center mb-sm-0 mb-1">
                      <b-button v-b-modal.amenitesModal class="room-highlights-more"><u><small>Odanın Tüm
                            Özellikleri</small></u></b-button>
                    </div>
                  </div>
                </div>
                <div class="room-scroll-wrapper col-12 col-lg-4 col-xl-5 ps-lg-0">
                  <div class="room-options d-flex flex-lg-column pb-lg-0 pb-1">
                    <div class="option d-flex flex-column flex-xl-row bg-theme-light-2 flex-fill overflow-hidden mb-lg-1">
                      <div
                        class="flex-fill d-flex flex-column justify-content-center fs-6 ps-3 ps-xl-4 pe-3 py-4 beforeborder">
                        <div class="option-all">
                          <span class="option-all-item">Oda Kahvaltı</span>
                        </div>
                        <div class="option-warning">
                          <p>İptal Edilemez</p>
                        </div>
                      </div>
                      <div
                        class="bg-white bg-opacity-50 d-flex flex-xl-column align-items-center justify-content-center px-3 px-xl-4 py-3 py-xl-2">
                        <div class="Otel-card-price">
                          <span>2 GECE</span>
                          <s>16.500TL</s>
                          <b>12.420 <small>TL</small></b>
                          <p>Gecelik <span>1.400TL</span></p>
                        </div>
                        <div class="Otel-card-link">
                          <button>Oda Seç</button>
                        </div>
                        <p class="Otel-card-content-warning mt-2">Son 2 oda</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="room-note "><i class="icon-information"></i>11 Eylül - 21 Eylül Tarihleri
              arasında Aile Odası bulunmamaktadır. Müsait tarihleri görmek için <a href="#!"><u>Tıklayın</u></a></div>
            <div class="room border border-light  p-2 ">
              <div class="row">
                <div class="col-12 col-lg-8 col-xl-7 d-flex flex-column flex-sm-row pe-xl-4 mb-lg-0 mb-2">
                  <div class="img-box position-relative flex-shrink-0">
                    <img src="/uploads/room-image1.jpg" width="297" height="208" alt="room image"
                      class="lazy cover flex-shrink-0 ">
                  </div>
                  <div class="room-content flex-fill d-flex flex-column align-items-start justify-content-between">
                    <div class="d-flex align-items-center w-100 mb-2">
                      <span class="d-inline-block me-auto room-title">Standart İki Yataklı Oda Penceresiz , 1 . Kat Twin
                        NTT1 - 27 m2</span>
                    </div>
                    <div class="room-highlights d-flex flex-wrap w-100 fs-6 lh-sm mb-2 mb-sm-3">

                      <small
                        class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                        <span class="text-theme-secondary me-1">Minibar</span>
                      </small>
                      <small
                        class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                        <span class="text-theme-secondary me-1">Balkon</span>
                      </small>
                      <small
                        class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                        <span class="text-theme-secondary me-1">Duşakabin</span>
                      </small>
                    </div>
                    <div class="d-flex align-items-center mb-sm-0 mb-1">
                      <b-button v-b-modal.amenitesModal class="room-highlights-more"><u><small>Odanın Tüm
                            Özellikleri</small></u></b-button>
                    </div>
                  </div>
                </div>
                <div class="room-scroll-wrapper col-12 col-lg-4 col-xl-5 ps-lg-0">
                  <div class="room-options d-flex flex-lg-column pb-lg-0 pb-1">
                    <div class="option d-flex flex-column flex-xl-row bg-theme-light-2 flex-fill overflow-hidden mb-lg-1">
                      <div
                        class="flex-fill d-flex flex-column justify-content-center fs-6 ps-3 ps-xl-4 pe-3 py-4 beforeborder">
                        <div class="option-all">
                          <span class="option-all-item">Oda Kahvaltı</span>
                        </div>
                        <div class="option-warning">
                          <p>İptal Edilemez</p>
                        </div>
                      </div>
                      <div
                        class="bg-white bg-opacity-50 d-flex flex-xl-column align-items-center justify-content-center px-3 px-xl-4 py-3 py-xl-2">
                        <div class="Otel-card-price">
                          <span>2 GECE</span>
                          <s>16.500TL</s>
                          <b>12.420 <small>TL</small></b>
                          <p>Gecelik <span>1.400TL</span></p>
                        </div>
                        <div class="Otel-card-link">
                          <button>Oda Seç</button>
                        </div>
                        <p class="Otel-card-content-warning mt-2">Son 2 oda</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="room border border-light  p-2 ">
              <div class="row">
                <div class="col-12 col-lg-8 col-xl-7 d-flex flex-column flex-sm-row pe-xl-4 mb-lg-0 mb-2">
                  <div class="img-box position-relative flex-shrink-0">
                    <img src="/uploads/room-image1.jpg" width="297" height="208" alt="room image"
                      class="lazy cover flex-shrink-0 ">
                  </div>
                  <div class="room-content flex-fill d-flex flex-column align-items-start justify-content-between">
                    <div class="d-flex align-items-center w-100 mb-2">
                      <span class="d-inline-block me-auto room-title">Standart İki Yataklı Oda Penceresiz , 1 . Kat Twin
                        NTT1 - 27 m2</span>
                    </div>
                    <div class="room-highlights d-flex flex-wrap w-100 fs-6 lh-sm mb-2 mb-sm-3">

                      <small
                        class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                        <span class="text-theme-secondary me-1">Minibar</span>
                      </small>
                      <small
                        class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                        <span class="text-theme-secondary me-1">Balkon</span>
                      </small>
                      <small
                        class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                        <span class="text-theme-secondary me-1">Duşakabin</span>
                      </small>
                    </div>
                    <div class="d-flex align-items-center mb-sm-0 mb-1">
                      <b-button v-b-modal.amenitesModal class="room-highlights-more"><u><small>Odanın Tüm
                            Özellikleri</small></u></b-button>
                    </div>
                  </div>
                </div>
                <div class="room-scroll-wrapper col-12 col-lg-4 col-xl-5 ps-lg-0">
                  <div class="room-options d-flex flex-lg-column pb-lg-0 pb-1">
                    <div class="option d-flex flex-column flex-xl-row bg-theme-light-2 flex-fill overflow-hidden mb-lg-1">
                      <div
                        class="flex-fill d-flex flex-column justify-content-center fs-6 ps-3 ps-xl-4 pe-3 py-4 beforeborder">
                        <div class="option-all">
                          <span class="option-all-item">Oda Kahvaltı</span>
                        </div>
                        <div class="option-warning">
                          <p>İptal Edilemez</p>
                        </div>
                      </div>
                      <div
                        class="bg-white bg-opacity-50 d-flex flex-xl-column align-items-center justify-content-center px-3 px-xl-4 py-3 py-xl-2">
                        <div class="Otel-card-price">
                          <span>2 GECE</span>
                          <s>16.500TL</s>
                          <b>12.420 <small>TL</small></b>
                          <p>Gecelik <span>1.400TL</span></p>
                        </div>
                        <div class="Otel-card-link">
                          <button>Oda Seç</button>
                        </div>
                        <p class="Otel-card-content-warning mt-2">Son 2 oda</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="room border border-light  p-2 ">
              <div class="row">
                <div class="col-12 col-lg-8 col-xl-7 d-flex flex-column flex-sm-row pe-xl-4 mb-lg-0 mb-2">
                  <div class="img-box position-relative flex-shrink-0">
                    <img src="/uploads/room-image1.jpg" width="297" height="208" alt="room image"
                      class="lazy cover flex-shrink-0 ">
                  </div>
                  <div class="room-content flex-fill d-flex flex-column align-items-start justify-content-between">
                    <div class="d-flex align-items-center w-100 mb-2">
                      <span class="d-inline-block me-auto room-title">Standart İki Yataklı Oda Penceresiz , 1 . Kat Twin
                        NTT1 - 27 m2</span>
                    </div>
                    <div class="room-highlights d-flex flex-wrap w-100 fs-6 lh-sm mb-2 mb-sm-3">

                      <small
                        class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                        <span class="text-theme-secondary me-1">Minibar</span>
                      </small>
                      <small
                        class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                        <span class="text-theme-secondary me-1">Balkon</span>
                      </small>
                      <small
                        class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                        <span class="text-theme-secondary me-1">Duşakabin</span>
                      </small>
                    </div>
                    <div class="d-flex align-items-center mb-sm-0 mb-1">
                      <b-button v-b-modal.amenitesModal class="room-highlights-more"><u><small>Odanın Tüm
                            Özellikleri</small></u></b-button>
                    </div>
                  </div>
                </div>
                <div class="room-scroll-wrapper col-12 col-lg-4 col-xl-5 ps-lg-0">
                  <div class="room-options d-flex flex-lg-column pb-lg-0 pb-1">
                    <div class="option d-flex flex-column flex-xl-row bg-theme-light-2 flex-fill overflow-hidden mb-lg-1">
                      <div
                        class="flex-fill d-flex flex-column justify-content-center fs-6 ps-3 ps-xl-4 pe-3 py-4 beforeborder">
                        <div class="option-all">
                          <span class="option-all-item">Oda Kahvaltı</span>
                        </div>
                        <div class="option-warning">
                          <p>İptal Edilemez</p>
                        </div>
                      </div>
                      <div
                        class="bg-white bg-opacity-50 d-flex flex-xl-column align-items-center justify-content-center px-3 px-xl-4 py-3 py-xl-2">
                        <div class="Otel-card-price">
                          <span>2 GECE</span>
                          <s>16.500TL</s>
                          <b>12.420 <small>TL</small></b>
                          <p>Gecelik <span>1.400TL</span></p>
                        </div>
                        <div class="Otel-card-link">
                          <button>Oda Seç</button>
                        </div>
                        <p class="Otel-card-content-warning mt-2">Son 2 oda</p>
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
          <div class="general-informations-section-title"><span>The European Hotel</span> Genel Bilgiler</div>
          <div class="general-informations-section-in">
            <div class="general-informations-section-text">
              <p>2010 yılında yapılan Ramada Plaza Antalya Muratpaşa bölgesinde bulunmaktadır. 38000 m2 alanda kurulmuş
                olan
                Ramada Plaza Antalya otel ultra herşey dahil konseptiyle misafirlerimize hizmet vermektedir</p>
              <p>Ramada Plaza Antalya denize sıfır konumuyla dikkat çekmektedir. Otelin kendine ait iskelesi vardır. Tesis
                2
                adet ala carte restaurant ile misafirlere özel hizmet sunmaktadır. Açık ve kapalı yüzme havuzları ile
                eğlenme
                ve dinlenme imkanı bulabilirsiniz.</p>
              <p>Bilardo oynayarak keyifli vakit geçirebilirsiniz. Tesis içerisinde yer alan masaj hizmetlerinden
                faydalanarak
                rahatlayabilir ve kendinizi yenilenmiş hissedebilirsiniz. Tesis içerisinde bulunan doktor, fotoğrafçı,
                güzellik salonu, kuaför, market, araç kiralama hizmetlerinden yararlanabilirsiniz</p>
              <p>Keyifli vakit geçirmeniz için tesiste bar bulunmaktadır. Otel Antalya Havaalanı'na 15 km,Antalya
                Havaalanı'na
                15 km, Kaleiçi'ye 500 m, Merkezde'ye 100 m uzaklıktadır</p>
            </div>
            <div class="general-informations-section-map">
              <nuxt-img src="/img/map-bg.png"></nuxt-img>
              <button type="button"><i class="icon-search-new"></i></button>
            </div>
          </div>
        </div>
      </section>

      <div class="otel-features">
        <div class="container">
          <div class="otel-features-in">
            <h4>The European Hotel <span>Özellikler</span></h4>
            <p class="otel-features-item">Açık Otopark</p>
            <p class="otel-features-item">Kuru Temizleme Servisi</p>
            <p class="otel-features-item">Bar</p>
            <p class="otel-features-item">Kablosuz İnternet (wi-fi)</p>
            <p class="otel-features-item">Oda Servisi</p>
            <p class="otel-features-item">Restoran(lar)</p>
            <p class="otel-features-item">Açık Otopark</p>
            <p class="otel-features-item">Kuru Temizleme Servisi</p>
            <p class="otel-features-item">Bar</p>
            <p class="otel-features-item">Kablosuz İnternet (wi-fi)</p>
            <p class="otel-features-item">Oda Servisi</p>
            <p class="otel-features-item">Restoran(lar)</p>
            <p class="otel-features-item">Açık Otopark</p>
            <p class="otel-features-item">Kuru Temizleme Servisi</p>
            <p class="otel-features-item">Bar</p>
            <p class="otel-features-item">Kablosuz İnternet (wi-fi)</p>
            <p class="otel-features-item">Oda Servisi</p>
            <p class="otel-features-item">Restoran(lar)</p>
          </div>
        </div>
      </div>

      <section class="otel-reviews">
        <div class="container">
          <div class="otel-reviews-">


            <div class="View-reviews comments view-menu-content-item" id="reviews-content">
              <div class="View-reviews-head">
                <div class="general-informations-section-title mb-0"><span>The European Hotel</span> Değerlendirmesi</div>
                <div class="View-reviews-head-stars">

                  <i class="icon-star active"></i>
                  <i class="icon-star active"></i>
                  <i class="icon-star active"></i>
                  <i class="icon-star"></i>
                  <span>4.4 8.4 Olağanüstü</span>
                </div>
              </div>
              <div class="View-reviews-item">
                <div class="View-reviews-item-top">
                  <div class="View-reviews-item-top-left">
                    <h6>Fatih ********</h6>
                  </div>
                  <div class="View-reviews-item-top-right">
                    <div class="View-reviews-item-top-stars">
                      <i class="icon-star active"></i>
                      <i class="icon-star active"></i>
                      <i class="icon-star active"></i>
                      <i class="icon-star"></i>
                      <span>8,9 Olağanüstü </span>
                    </div>
                  </div>
                </div>
                <div class="View-reviews-item-bottom">
                  <div class="View-reviews-item-bottom-left w-100">
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or randomised words which don't look even slightly
                      believable
                    </p>
                    <p class="mt-4 mb-4">YORUM KAYNAĞI : GOOGLE</p>
                  </div>

                </div>
              </div>
              <div class="View-reviews-item">
                <div class="View-reviews-item-top">
                  <div class="View-reviews-item-top-left">
                    <h6>Fatih ********</h6>
                  </div>
                  <div class="View-reviews-item-top-right">
                    <div class="View-reviews-item-top-stars">
                      <i class="icon-star active"></i>
                      <i class="icon-star active"></i>
                      <i class="icon-star active"></i>
                      <i class="icon-star"></i>
                      <span>8,9 Olağanüstü </span>
                    </div>
                  </div>
                </div>
                <div class="View-reviews-item-bottom">
                  <div class="View-reviews-item-bottom-left w-100">
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or randomised words which don't look even slightly
                      believable
                    </p>
                    <p class="mt-4 mb-4">YORUM KAYNAĞI : GOOGLE</p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <b-modal id="amenitesModal" class="Login" size="xl" :hide-header="true" hide-footer>
        <div class="Amenites otel">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
            @click="$bvModal.hide('amenitesModal')"><i class="icon-login-close"></i></button>

          <div class="Amenites-slider" style="position:relative">
            <b-carousel id="carousel-1" v-model="slide" controls img-width="1024" img-height="500">
              <b-carousel-slide :img-src="photo" v-for="(photo, index) in slidePhotos" :key="index"></b-carousel-slide>
            </b-carousel>
            <div class="slide-numbers">
              {{ slide + 1 }}/{{ slidePhotos.length }}
            </div>
          </div>

          <div class="Amenites-head">
            <h3 class="Amenites-title">The European Hotel</h3>
            <h4 class="Amenites-title-sub">Standart İki Yataklı Oda / Penceresiz , 1 . Kat Twin NTT1 - 27 m2</h4>
          </div>

          <div class="Amenites-in">
            <div class="Amenites-item">
              <div class="Amenites-item-in">
                <p>Jakuzi</p>
                <p>Jakuzi</p>
                <p>Bilardo Masası</p>
                <p>Barbekü / Mangal Alanı</p>
                <p>Barbekü / Mangal Alanı</p>
              </div>
            </div>
            <div class="Amenites-item">
              <div class="Amenites-item-in">
                <p>Jakuzi</p>
                <p>Jakuzi</p>
                <p>Bilardo Masası</p>
                <p>Barbekü / Mangal Alanı</p>
                <p>Barbekü / Mangal Alanı</p>
              </div>
            </div>
            <div class="Amenites-item">
              <div class="Amenites-item-in">
                <p>Jakuzi</p>
                <p>Jakuzi</p>
                <p>Bilardo Masası</p>
                <p>Barbekü / Mangal Alanı</p>
                <p>Barbekü / Mangal Alanı</p>
              </div>
            </div>
            <div class="Amenites-item">
              <div class="Amenites-item-in">
                <p>Jakuzi</p>
                <p>Jakuzi</p>
                <p>Bilardo Masası</p>
                <p>Barbekü / Mangal Alanı</p>
                <p>Barbekü / Mangal Alanı</p>
              </div>
            </div>
            <div class="Amenites-item">
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

    <section style="display: none" class="rooms-section pt-3 mt-1">
      <div class="container">
        <div v-for="offer in hotelPriceDetails.body?.hotels[0]?.offers"
          class="room border border-light rounded-xxl p-2 mb-3">
          <div class="row">
            {{ offer }}
            <div class="col-12 col-lg-8 col-xl-7 d-flex flex-column flex-sm-row pe-xl-4 mb-lg-0 mb-2">
              <div class="img-box position-relative flex-shrink-0">
                <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif"
                  data-src="https://boceksoft.com/works/otelbnb/cdn/uploads/room-image1.jpg" width="281" height="186"
                  alt="room image" class="lazy cover flex-shrink-0 rounded-xl loaded"
                  style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/uploads/room-image1.jpg&quot;);">
              </div>
              <div class="flex-fill d-flex flex-column align-items-start ps-2 ps-sm-3 ps-xl-4 pt-3">
                <div class="d-flex align-items-center w-100 mb-2">
                  <span class="fs-5 lh-sm ls-05 d-inline-block me-auto">Standart Oda</span>
                  <a href="javascript:void(0);"
                    class="bg-transparent text-theme-secondary fs-6 ls-05 d-flex align-items-center p-0">
                    <img src="https://boceksoft.com/works/otelbnb/cdn/img/icons/024-calendar-second.svg" width="18"
                      height="20" alt="calendar" class="lazy contain flex-shrink-0 me-1">
                    <small><u>Müsaitlik Takvimi</u></small>
                  </a>
                </div>
                <div
                  class="info fs-6 bg-theme-light d-flex align-items-center rounded-sm text-theme-secondary py-2 px-3 w-100 mb-3">
                  <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif"
                    data-src="https://boceksoft.com/works/otelbnb/cdn/img/icons/015-bed-second.svg" width="18" height="18"
                    alt="group" class="lazy contain flex-shrink-0 me-2 loaded"
                    style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/img/icons/015-bed-second.svg&quot;);">
                  <small class="lh-sm ls-05">En fazla 3 yetişkin veya 2 yetişkin + 2 çocuk</small>
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
                    <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif"
                      data-src="https://boceksoft.com/works/otelbnb/cdn/img/icons/025-tick-second.svg" width="18"
                      height="18" alt="" class="lazy contain loaded"
                      style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/img/icons/025-tick-second.svg&quot;);">
                  </small>
                  <small
                    class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Balkon</span>
                    <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif"
                      data-src="https://boceksoft.com/works/otelbnb/cdn/img/icons/025-tick-second.svg" width="18"
                      height="18" alt="" class="lazy contain loaded"
                      style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/img/icons/025-tick-second.svg&quot;);">
                  </small>
                  <small
                    class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Duşakabin</span>
                    <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif"
                      data-src="https://boceksoft.com/works/otelbnb/cdn/img/icons/025-tick-second.svg" width="18"
                      height="18" alt="" class="lazy contain loaded"
                      style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/img/icons/025-tick-second.svg&quot;);">
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
                  </div>
                  <div
                    class="bg-white bg-opacity-50 d-flex flex-xl-column align-items-center justify-content-center px-3 px-xl-4 py-3 py-xl-2">
                    <div class="d-flex flex-column align-items-xl-center me-xl-0 me-auto">
                      <span class="text-secondary ls-05 d-block lh-1"><small>{{ offer.night }} GECE</small></span>
                      <strong class="fs-5 fw-semibold d-block mb-xl-3 pb-xl-1 lh-sm">{{ offer.price.amount }}
                        {{ offer.price.currency }}</strong>
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
  </div>
</template>


<script>
import { Swiper, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import HotelDatePicker from "vue-hotel-datepicker2";
import "vue-hotel-datepicker2/dist/vueHotelDatepicker2.css";
import CloseVillaModal from '../modals/close-villa-modal.vue';
import { BCarousel } from 'bootstrap-vue'

export default {
  name: 'DynamicHotelDetailPage',
  props: ['hotelDetails', 'selectedFilters'],
  data() {
    return {
      hotel: this.hotelDetails,
      hotelPriceDetails: {},
      offerDetails: {},
      roomsLoading: true,
      slide: 0,
      slidePhotos: ['https://picsum.photos/1024/480/?image=52', 'https://media.dev.paximum.com/hotelimages/101637/a6c2315890e2921cfdcbd10d85d79f45.jpg', 'https://picsum.photos/1024/480/?image=52', 'https://media.dev.paximum.com/hotelimages/101637/a6c2315890e2921cfdcbd10d85d79f45.jpg', 'https://picsum.photos/1024/480/?image=52', 'https://media.dev.paximum.com/hotelimages/101637/a6c2315890e2921cfdcbd10d85d79f45.jpg']
    }
  },
  components: {
    BCarousel,
  },
  async mounted() {
    const response = await this.$dataService.getHotelPrice(this.hotelDetails.body.hotel.id, this.selectedFilters)
    this.hotelPriceDetails = response.data;
    if (this.hotelPriceDetails.body?.hotels[0]?.offers.length > 0) {
      const offerIds = this.hotelPriceDetails.body?.hotels[0]?.offers.map(offer => offer.offerId)
      let response = await this.$dataService.getOfferDetails({ offerIds });
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
          return {
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
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    showGallery() {
      document.querySelector('.Gallery').classList.add("show")
      document.querySelector('body').classList.add("over")
      document.querySelector('.main').classList.add("main-z")
      this.galleryIsOpen = true
    },
  },
  mounted() {

  }
}
</script>
<style lang="scss">
.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

.carousel-item-next:not(.carousel-item-start),
.active.carousel-item-end {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-end),
.active.carousel-item-start {
  transform: translateX(-100%);
}


.carousel-fade {
  .carousel-item {
    opacity: 0;
    transition-property: opacity;
    transform: none;
  }

  .carousel-item.active,
  .carousel-item-next.carousel-item-start,
  .carousel-item-prev.carousel-item-end {
    z-index: 1;
    opacity: 1;
  }

  .active.carousel-item-start,
  .active.carousel-item-end {
    z-index: 0;
    opacity: 0;
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  // Use flex for alignment (1-3)
  display: flex; // 1. allow flex styles
  align-items: center; // 2. vertically center contents
  justify-content: center; // 3. horizontally center contents
  border: none;
  padding: 0;
  color: #fff;
  text-align: center;
  background: none;
  border: 0;
  opacity: 1;
  width: 41px;
  height: 41px;
  background: #fff;
  border-radius: 50%;

  .sr-only {
    display: none;
  }

  // Hover/focus state
  &:hover,
  &:focus {
    color: #fff;
    text-decoration: none;
    outline: 0;
    opacity: 1;
  }
}

.carousel-control-prev {
  left: 30px;
}

.carousel-control-next {
  right: 30px;
}

.carousel-control-prev-icon {
  width: 10px;
  height: 10px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  width: 10px;
  height: 10px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

// Optional indicator pips/controls
//
// Add a container (such as a list) with the following class and add an item (ideally a focusable control,
// like a button) with data-bs-target for each slide your carousel holds.

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 0;
  // Use the .carousel-control's width as margin so we don't overlay those
  margin-right: 0;
  margin-bottom: 1rem;
  margin-left: 0;
  list-style: none;

  [data-bs-target] {
    box-sizing: content-box;
    flex: 0 1 auto;
    padding: 0;
    margin-right: 0;
    margin-left: 0;
    text-indent: -999px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border: 0;
    // Use transparent borders to increase the hit area by 10px on top and bottom.
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    opacity: 1;

  }

  .active {
    opacity: 1;
  }
}

.btn-close {
  position: absolute;
  right: 0;
  top: 0;
  background-color: var(--bs-theme-third) !important;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
  z-index: 2;

  i {
    font-size: 42px !important;
    color: #fff !important;
  }
}

.slide-numbers {
  background-color: var(--bs-theme-third) !important;
  position: absolute;
  right: 0;
  bottom: 0;
  font-weight: 500;
  font-size: 30px;
  color: #F5F5F5;
  padding: 10px 35px;
}
</style>
