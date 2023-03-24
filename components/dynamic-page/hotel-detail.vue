<template>
  <div>
    <section class="view-detail-section bg-theme-light-2 pt-4 pb-5">
      <div class="container pb-4">

        <div class="view-top d-flex align-items-lg-center flex-column flex-lg-row mb-4">
          <div class="d-flex flex-column flex-fill me-auto mb-lg-0 mb-2">
            <div class="fs-2 lh-sm ls-05 d-flex align-items-center mb-1">
              {{hotelDetails.body.hotel.name}}
              <div class="fs-7 d-inline-flex align-items-center fw-medium text-theme-secondary ms-3">
                <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif" data-src="https://boceksoft.com/works/otelbnb/cdn/img/icons/011-star-icon.svg" width="13" height="13" alt="star" class="lazy contain flex-shrink-0 loaded" style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/img/icons/011-star-icon.svg&quot;);">&nbsp;
                <span>4,9</span>
              </div>
            </div>
            <div class="d-flex align-items-center flex-wrap text-theme-secondary mb-2 pb-1">
              <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif" data-src="https://boceksoft.com/works/otelbnb/cdn/img/icons/003-pin.svg" width="15" height="18" alt="pin" class="lazy contain flex-shrink-0 me-2 loaded" style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/img/icons/003-pin.svg&quot;);">
              <span class="lh-sm">Lara / Antalya</span>
              <a href="#!" class="show-map text-theme-second ms-2"><u>Haritada Görüntüle</u></a>
            </div>
            <div class="d-flex flex-wrap align-items-center fs-8 fw-medium ls-05 text-theme-primary">
              <div class="alert alert-primary fs-8 lh-1 fw-medium ls-05 d-inline-block p-2 mb-0 me-2">
                <span class="view-item d-block px-1">Erken Rezervasyonda %35 indirim</span>
              </div>
              <div class="d-flex align-items-center my-2 my-sm-1 me-3 pe-1">
                <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif" data-src="https://boceksoft.com/works/otelbnb/cdn/img/icons/019-virus.svg" width="20" height="20" alt="healt" class="lazy contain flex-shrink-0 me-1 loaded" style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/img/icons/019-virus.svg&quot;);">
                <span>Sağlık Sertifikalı</span>
              </div>
              <div class="d-flex align-items-center my-2 my-sm-1">
                <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif" data-src="https://boceksoft.com/works/otelbnb/cdn/img/icons/020-fence.svg" width="20" height="20" alt="healt" class="lazy contain flex-shrink-0 me-1 loaded" style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/img/icons/020-fence.svg&quot;);">
                <span>Özel Bölgesi var</span>
              </div>
            </div>
          </div>
          <div class="view-actions d-flex align-items-center flex-wrap">
            <button type="button" class="action-btn fav-btn w-auto h-auto fs-7 ls-05 text-theme-secondary bg-transparent p-0 d-flex align-items-center me-4" title="Favoriye Ekle">
                            <span class="icon-box bg-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-2">
                                <svg width="16px" height="15px" viewBox="0 0 16 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="OtelDetay" transform="translate(-1218.000000, -219.000000)" fill="#7F8090" fill-rule="nonzero">
                                            <g id="heart-(3)-copy" transform="translate(1218.000000, 219.028679)">
                                                <path d="M14.031424,1.33484087 C13.241024,0.48527287 12.133472,0.00188086998 10.973088,0 C9.811776,0.00143286998 8.703072,0.48456887 7.911456,1.33429687 L7.641664,1.61938487 L7.371872,1.33429687 C5.801088,-0.35629513 3.157184,-0.45338313 1.466624,1.11740087 C1.391712,1.18703287 1.31936,1.25935287 1.249728,1.33429687 C-0.416576,3.13160887 -0.416576,5.90927287 1.249728,7.70658487 L7.245184,14.0291769 C7.452608,14.2481529 7.798272,14.2575289 8.017248,14.0501049 C8.024416,14.0433209 8.031392,14.0363449 8.038176,14.0291769 L14.031456,7.70658487 C15.697632,5.90946487 15.697632,3.13196087 14.031424,1.33484087 Z M13.241184,6.95455287 L13.24064,6.95455287 L7.641664,12.8598969 L2.042176,6.95455287 C0.769216,5.58124087 0.769216,3.45909687 2.042176,2.08578487 C3.198176,0.83285687 5.15104,0.75429687 6.403968,1.91029687 C6.4648,1.96642487 6.523328,2.02495287 6.579456,2.08578487 L7.245184,2.78812087 C7.464576,3.00610487 7.818784,3.00610487 8.038176,2.78812087 L8.703904,2.08632887 C9.859904,0.83340087 11.812768,0.75484087 13.065696,1.91084087 C13.126528,1.96696887 13.185056,2.02549687 13.241184,2.08632887 C14.525216,3.46181687 14.534624,5.58783287 13.241184,6.95455287 Z" id="Shape"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </span>
              <span class="d-inline-block ps-sm-1">Favorilere Ekle</span>
            </button>
            <button type="button" class="action-btn share-btn fs-7 ls-05 text-theme-secondary bg-transparent p-0 d-flex align-items-center">
                            <span class="icon-box bg-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-2">
                                <svg width="15px" height="16px" viewBox="0 0 15 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="OtelDetay" transform="translate(-1387.000000, -217.000000)" fill="#7F8090" fill-rule="nonzero">
                                            <g id="share-(1)" transform="translate(1387.000000, 217.000000)">
                                                <path d="M11.7,9.96 C10.81077,9.96 10.02717,10.39743 9.53499,11.06265 L5.2797,8.88372 C5.35035,8.64291 5.4,8.39334 5.4,8.13 C5.4,7.77282 5.32677,7.43325 5.20026,7.12092 L9.65361,4.44108 C10.14921,5.02272 10.87767,5.4 11.7,5.4 C13.18887,5.4 14.4,4.18887 14.4,2.7 C14.4,1.21113 13.18887,0 11.7,0 C10.21113,0 9,1.21113 9,2.7 C9,3.04311 9.07065,3.36858 9.18786,3.67074 L4.72125,6.35844 C4.22607,5.79408 3.50811,5.43 2.7,5.43 C1.21113,5.43 0,6.64113 0,8.13 C0,9.61887 1.21113,10.83 2.7,10.83 C3.6039,10.83 4.40073,10.37973 4.89105,9.69582 L9.13233,11.86767 C9.05421,12.11985 9,12.3825 9,12.66 C9,14.14887 10.21113,15.36 11.7,15.36 C13.18887,15.36 14.4,14.14887 14.4,12.66 C14.4,11.17113 13.18887,9.96 11.7,9.96 Z" id="Path"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </span>
              <span class="d-inline-block ps-sm-1">Arkadaşın ile Paylaş</span>
            </button>
          </div>
        </div>
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

    <section class="search-engine-section">
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
        </form>            </div>
    </section>
    <section class="rooms-section pt-3 mt-1">
      <div class="container">
        <div v-for="offer in hotelPriceDetails.body?.hotels[0]?.offers" class="room border border-light rounded-xxl p-2 mb-3">
          <div class="row">
            {{offer}}
            <div class="col-12 col-lg-8 col-xl-7 d-flex flex-column flex-sm-row pe-xl-4 mb-lg-0 mb-2">
              <div class="img-box position-relative flex-shrink-0">
                <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif" data-src="https://boceksoft.com/works/otelbnb/cdn/uploads/room-image1.jpg" width="281" height="186" alt="room image" class="lazy cover flex-shrink-0 rounded-xl loaded" style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/uploads/room-image1.jpg&quot;);">
              </div>
              <div class="flex-fill d-flex flex-column align-items-start ps-2 ps-sm-3 ps-xl-4 pt-3">
                <div class="d-flex align-items-center w-100 mb-2">
                  <span class="fs-5 lh-sm ls-05 d-inline-block me-auto">Standart Oda</span>
                  <a href="javascript:void(0);" class="bg-transparent text-theme-secondary fs-6 ls-05 d-flex align-items-center p-0">
                    <img src="https://boceksoft.com/works/otelbnb/cdn/img/icons/024-calendar-second.svg" width="18" height="20" alt="calendar" class="lazy contain flex-shrink-0 me-1">
                    <small><u>Müsaitlik Takvimi</u></small>
                  </a>
                </div>
                <div class="info fs-6 bg-theme-light d-flex align-items-center rounded-sm text-theme-secondary py-2 px-3 w-100 mb-3">
                  <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif" data-src="https://boceksoft.com/works/otelbnb/cdn/img/icons/015-bed-second.svg" width="18" height="18" alt="group" class="lazy contain flex-shrink-0 me-2 loaded" style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/img/icons/015-bed-second.svg&quot;);">
                  <small class="lh-sm ls-05">En fazla 3 yetişkin veya 2 yetişkin + 2 çocuk</small>
                </div>
                <div class="room-highlights d-flex flex-wrap w-100 fs-6 lh-sm mb-2 mb-sm-3">
                  <small class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Oda Genişliği</span>
                    <span class="">53 m<sup><small>2</small></sup></span>
                  </small>
                  <small class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Minibar</span>
                    <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif" data-src="https://boceksoft.com/works/otelbnb/cdn/img/icons/025-tick-second.svg" width="18" height="18" alt="" class="lazy contain loaded" style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/img/icons/025-tick-second.svg&quot;);">
                  </small>
                  <small class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Balkon</span>
                    <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif" data-src="https://boceksoft.com/works/otelbnb/cdn/img/icons/025-tick-second.svg" width="18" height="18" alt="" class="lazy contain loaded" style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/img/icons/025-tick-second.svg&quot;);">
                  </small>
                  <small class="hl-item d-flex align-items-center justify-content-sm-start justify-content-between ls-05 me-sm-3 pe-2 pe-sm-1 mb-2 mb-sm-1">
                    <span class="text-theme-secondary me-1">Duşakabin</span>
                    <img src="https://boceksoft.com/works/otelbnb/cdn/img/spacer.gif" data-src="https://boceksoft.com/works/otelbnb/cdn/img/icons/025-tick-second.svg" width="18" height="18" alt="" class="lazy contain loaded" style="background-image: url(&quot;https://boceksoft.com/works/otelbnb/cdn/img/icons/025-tick-second.svg&quot;);">
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
                <div class="option d-flex flex-column flex-xl-row rounded-xl bg-theme-light-2 flex-fill overflow-hidden mb-lg-1">
                  <div class="flex-fill d-flex flex-column justify-content-center fs-6 ps-3 ps-xl-4 pe-3 py-4">
                    <span class="d-block text-theme-first lh-1 ls-05 mb-2">Oda Kahvaltı</span>
                  </div>
                  <div class="bg-white bg-opacity-50 d-flex flex-xl-column align-items-center justify-content-center px-3 px-xl-4 py-3 py-xl-2">
                    <div class="d-flex flex-column align-items-xl-center me-xl-0 me-auto">
                      <span class="text-secondary ls-05 d-block lh-1"><small>{{offer.night}} GECE</small></span>
                      <strong class="fs-5 fw-semibold d-block mb-xl-3 pb-xl-1 lh-sm">{{offer.price.amount}} {{offer.price.currency}}</strong>
                    </div>
                    <button type="button" class="btn btn-theme-first btn-ripple fw-medium ls-05 lh-sm rounded-pill px-3 px-xl-4 py-2">
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
import {Swiper, Navigation, Pagination} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import HotelDatePicker from "vue-hotel-datepicker2";
import "vue-hotel-datepicker2/dist/vueHotelDatepicker2.css";
import CloseVillaModal from '../modals/close-villa-modal.vue';

export default {
  name: 'DynamicHotelDetailPage',
  props: ['hotelDetails', 'hotelPriceDetails', 'selectedFilters'],
  data() {
    console.log(this.hotelDetails);
    return {
      hotel: this.hotelDetails
    }
  },
  mounted() {
    // todo offerslar alınacak
  },
  computed: {
    previewImages() {
      if (this.hotel.body.custom?.hasOwnProperty('images') && this.hotel.body.custom.images.length > 0) {
        return this.hotel.body.custom.images
      } else if (this.hotel.body.hotel.seasons[0].hasOwnProperty('mediaFiles')) {
        return this.hotel.body.hotel.seasons[0].mediaFiles.map(media => {
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
    showGallery() {
      document.querySelector('.Gallery').classList.add("show")
      document.querySelector('body').classList.add("over")
      document.querySelector('.main').classList.add("main-z")
      this.galleryIsOpen = true
    },
  }
}
</script>
