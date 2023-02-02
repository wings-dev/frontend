<template>
  <div>
    <header class="header bg-theme-first text-white border-bottom border-theme-first-light position-sticky top-0">
      <div class="header-top">
        <div class="container">
          <div class="header-top-in">
            <a href="" class="header-top-contact">
              <i class="icon-phone-call"></i>
              <p><span>Yardım / Destek</span>444 8 484</p>
            </a>
            <div class="header-top-menu">
              <a href="" class="header-top-menu-item">S.S.S</a>
              <a href="hakkimizda.php" class="header-top-menu-item">Hakkımızda</a>
              <a href="" class="header-top-menu-item">İletişim</a>
            </div>
          </div>
        </div>
      </div>
      <div class="container d-flex py-2">
        <a href="index.php" class="header-logo logo-wrapper d-block py-3 py-sm-4 flex-shrink-0 me-auto me-xl-4 pe-3">

        </a>
        <nav class="header-menu flex-fill">
          <ul class="menu d-flex flex-column flex-xl-row align-items-xl-center ls-1 fw-medium h-100 mb-xl-0 mb-3">
            <li class="h-100 me-xl-2 pe-xl-1"><a href="#!"
                                                 class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">Villa
              Holidays</a></li>
            <li class="h-100 me-xl-2 pe-xl-1"><a href="#!"
                                                 class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">Destinations</a>
            </li>
            <li class="h-100 me-xl-2 pe-xl-1"><a href="#!"
                                                 class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">Villa
              Types</a></li>
            <li class="h-100 me-xl-2 pe-xl-1"><a href="#!"
                                                 class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">Special
              Offers</a></li>
            <li class="h-100 me-xl-2 pe-xl-1"><a href="#!"
                                                 class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">Services</a>
            </li>
          </ul>
          <div class="btn btn-theme-first fs-7 ls-1 fw-medium w-100 py-2 d-md-none">
            <span class="d-block py-1">ÜYE GİRİŞİ YAP</span>
          </div>
        </nav>
        <div class="fav-list-wrapper align-self-center me-1">
          <button type="button"
                  class="toggle-favs search-button flex-shrink-0 btn btn-theme-first-dark rounded-circle d-flex align-items-center justify-content-center shadow-none p-0"
                  aria-label="Favorileri aç">
            <i class="icon-search"></i>
          </button>
          <div class="fav-list"></div>
        </div>
        <div class="fav-list-wrapper align-self-center me-3">
          <button type="button"
                  class="toggle-favs flex-shrink-0 btn btn-theme-second rounded-circle d-flex align-items-center justify-content-center shadow-none p-0"
                  aria-label="Favorileri aç">
            <i class="icon-heart-full"></i>
          </button>
          <div class="fav-list"></div>
        </div>
        <button type="button"
                class="membership btn btn-white btn-ripple text-primary fs-7 fw-medium ls-05 py-2 py-xl-3 px-3 px-xl-4 rounded-pill lh-sm shadow-none align-self-center d-md-flex d-none"
                data-bs-toggle="modal" data-bs-target="#signupModal">
          <span class="d-inline-block px-1 px-xl-2 py-1 py-xl-0">ÜYE GİRİŞİ YAP</span>
        </button>
        <button type="button" class="menu-toggle bg-transparent align-self-center d-xl-none ms-xl-0 ms-md-4"
                onclick="$(this).toggleClass('hide');$('.header-menu').toggleClass('show');$('.header-menu-shadow').toggleClass('show');">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="header-menu-shadow position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-25"
           onclick="$(this).removeClass('show');$('.header-menu').removeClass('show');$('.menu-toggle').removeClass('hide');"></div>
    </header>

    <main class="main">
      <section class="search-engine-section position-relative pt-3">
        <div class="container pt-1">
          <form action="" class="search-engine">
            <nav>
              <div class="nav nav-tabs border-0 lh-sm" id="search-tab" role="tablist">
                <button class="nav-link text-white ls-05 py-2 py-sm-3 px-3 px-sm-4 mb-0 active" id="villa-tab" data-bs-toggle="tab" data-bs-target="#villa" type="button" role="tab" aria-controls="villa" aria-selected="false">
                  <span class="d-inline-block fw-medium px-2 px-sm-3 py-1">Yurt İçi Villalar</span>
                </button>
                <button class="nav-link text-white ls-05 py-2 py-sm-3 px-3 px-sm-4 mb-0 " disabled id="otel-tab" data-bs-toggle="tab" data-bs-target="#otel" type="button" role="tab" aria-controls="otel" aria-selected="true">
                  <span class="d-inline-block fw-medium px-2 px-sm-3 py-1">Yurt Dışı Villalar</span>
                  <span class="comingsoon">ÇOK YAKINDA</span>
                </button>
                <button class="nav-link text-white ls-05 py-2 py-sm-3 px-3 px-sm-4 mb-0 d-none" disabled id="otel-tab" data-bs-toggle="tab" data-bs-target="#otel" type="button" role="tab" aria-controls="otel" aria-selected="true">
                  <span class="d-inline-block fw-medium px-2 px-sm-3 py-1">Otel Rezervasyon</span>
                  <span class="comingsoon">ÇOK YAKINDA</span>
                </button>
              </div>
            </nav>
            <div class="tab-content" id="search-tabContent">
              <div class="tab-pane show active" id="villa" role="tabpanel" aria-labelledby="villa-tab">
                <div class="Search  ">
                  <form action="">
                    <div class="Search-left">
                      <div class="Search-item Search-item-region dropdown">
                        <button class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          <div class="icon-box bg-theme-light rounded-sm flex-shrink-0 d-flex align-items-center justify-content-center me-3 ">
                            <i class="icon-pin"></i>
                          </div>
                          <div class="Search-item-region-in">
                            <span class="Search-item-name">Bölge</span>
                            <span class="dropdown-toggle-title">4 destinations</span>
                          </div>
                          <i class="icon-down-chevron"></i>
                        </button>
                        <ul class="dropdown-menu filtered" aria-labelledby="dropdownMenuButton1">
                          <div class="Filters-search">
                            <label for="">
                              <i class="icon-search-new"></i>
                              <input type="search" placeholder="Bölge arayın" onkeyup="destinationsSearchFilter(this)">
                            </label>
                          </div>
                          <div class="dropdown-menu-in filtered-in">
                            <li class="Filters-item Filters-item-notfound">
                              <p class="Filters-item-notfound-text"><i class="icon-filter"></i>Sonuç bulunamadı
                              </p>
                            </li>
                            <li class="Filters-item">
                              <label for="bolge_1">
                                <input type="checkbox" class="RegionID_1" data-type="location_2" data-name="Bölge" id="bolge_1" value="1">
                                <span class="checkspan"></span>
                                <p class="check-text">Antalya</p>
                              </label>
                              <ul class="Filter-second">
                                <li>
                                  <label for="bolge_2">
                                    <input type="checkbox" class="RegionID_2" data-type="location_2" data-name="Bölge" id="bolge_2" value="2">
                                    <span class="checkspan"></span>
                                    <p class="check-text">Kaş</p>
                                  </label>
                                  <ul class="Filter-third">
                                    <li>
                                      <label for="bolge_3">
                                        <input type="checkbox" data-type="location_2" data-name="Bölge" id="bolge_3" class="RegionID_3" value="3">
                                        <span class="checkspan"></span>
                                        <p class="check-text">Kalkan</p>
                                      </label>
                                      <label for="bolge_4">
                                        <input type="checkbox" data-type="location_2" data-name="Bölge" id="bolge_4" class="RegionID_4" value="4">
                                        <span class="checkspan"></span>
                                        <p class="check-text">Kalkan</p>
                                      </label>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <label for="bolge_5">
                                    <input type="checkbox" data-type="location_2" data-name="Bölge" id="bolge_5" class="RegionID_5" value="5">
                                    <span class="checkspan"></span>
                                    <p class="check-text">Çavdır</p>
                                  </label>
                                  <ul class="Filter-third">
                                    <li>
                                      <label for="bolge_6">
                                        <input type="checkbox" data-type="location_2" data-name="Bölge" id="bolge_6" class="RegionID_6" value="6">
                                        <span class="checkspan"></span>
                                        <p class="check-text">Fethiye</p>
                                      </label>
                                      <label for="bolge_7">
                                        <input type="checkbox" data-type="location_2" data-name="Bölge" id="bolge_7" class="RegionID_7" value="7">
                                        <span class="checkspan"></span>
                                        <p class="check-text">Marmaris</p>
                                      </label>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </div>
                        </ul>
                      </div>
                      <div class="Search-item date">
                        <div class="icon-box bg-theme-light rounded-sm flex-shrink-0 d-flex align-items-center justify-content-center me-3 ">
                          <i class="icon-calendar"></i>
                        </div>

                        <div class="Search-item-date">
                          <span class="Search-item-name">Giriş / Çıkış Tarihi</span>
                          <div class="Search-item-date-inputs">
                            <input type="text" id="search_arrival" class="villa_date-input" placeholder="Arrival" autocomplete="off" name="search_arrival" />
                            <i class="icon-right-arrows-new"></i>
                            <input id="search_departure" type="text" class="villa_date-input" placeholder="Departure" autocomplete="off" name="search_departure" />
                          </div>
                        </div>
                      </div>
                      <div class="Search-item Search-item-people">
                        <button class=" dropdown-toggle Search-item-person-info" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                          <div class="icon-box bg-theme-light rounded-sm flex-shrink-0 d-flex align-items-center justify-content-center me-3 ">
                            <i class="icon-group-user"></i>
                          </div>
                          <div class="Search-item-people-in">
                            <span class="Search-item-name">Kişi Sayısı</span>
                            <span class="dropdown-toggle-title">2 Yetişkin</span>
                            <i class="icon-down-chevron"></i>
                          </div>

                        </button>
                        <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton2">
                          <div class="Search-item-person">
                            <div class="Search-item-person-item ">
                              <p>Adult</p>
                              <div class="Search-item-person-item-in ">
                                <button type="button" class="minus-person" onclick=""><i class="icon-minus "></i>
                                </button>
                                <input id="Search_PeopleAdult" class="person" type="text" value="1" max="20" readonly>
                                <button type="button" class="plus-person"><i class="icon-plus "></i></button>
                              </div>
                            </div>
                            <div class="Search-item-person-item">
                              <p>Children <br><span>Between 6-17 </span></p>
                              <div class="Search-item-person-item-in ">
                                <button type="button" class="minus-person" onclick=""><i class="icon-minus "></i>
                                </button>
                                <input id="Search_PeopleChild" class="person" type="text" value="0" max="10" readonly>
                                <button type="button" class="plus-person"><i class="icon-plus "></i></button>
                              </div>
                            </div>
                            <div class="Search-item-person-item ">
                              <p>Children<br><span>Between 0-5</span></p>
                              <div class="Search-item-person-item-in ">

                                <button type="button" class="minus-person" onclick=""><i class="icon-minus "></i>
                                </button>
                                <input id="Search_PeopleBaby" class="person" type="text" value="0" name="baby" max="5" readonly>
                                <button type="button" class="plus-person"><i class="icon-plus "></i></button>

                              </div>
                            </div>
                            <div class="Search-item-person-item ">
                              <button id="Dropdown-close-person" class="Dropdown-close" type="button">
                                APPROVE
                              </button>
                            </div>
                          </div>
                        </ul>
                      </div>
                      <div class="Search-item Search-item-more">
                        <button class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="icon-filter"></i>
                          <span class="dropdown-toggle-title">Gelişmiş Arama</span>
                          <i class="icon-down-chevron"></i>
                        </button>
                        <ul class="dropdown-menu filtered " aria-labelledby="dropdownMenuButton3">
                          <div class="Filters-search">
                            <label for="">
                              <i class="icon-search-new"></i>
                              <input type="search" placeholder="Özellik arayın" onkeyup="destinationsSearchFilter(this)">
                            </label>
                          </div>
                          <li class="Filters-item Filters-item-notfound">
                            <p class="Filters-item-notfound-text"><i class="icon-filter"></i>Sonuç bulunamadı
                            </p>
                          </li>
                          <div class="dropdown-menu-in filtered-in">
                            <div class="Filters">
                              <div class="Filters-head">
                                <i class="icon-facility"></i>
                                <h5>TESİS TİPİ</h5>
                              </div>
                              <div class="Filters-in">
                                <ul class="Filters-first">
                                  <li class="Filters-item">
                                    <label for="tesis_tipi_1">
                                      <input type="checkbox" class="AmenitesID_1" data-type="amenites" data-name="Tip" id="tesis_tipi_1" value="1">
                                      <span class="checkspan"></span>
                                      <p class="check-text">Villa</p>
                                    </label>
                                  </li>
                                  <li class="Filters-item">
                                    <label for="tesis_tipi_2">
                                      <input type="checkbox" data-type="amenites" data-name="Tip" id="tesis_tipi_2" class="AmenitesID_2" value="2">
                                      <span class="checkspan"></span>
                                      <p class="check-text">Ev</p>
                                    </label>
                                  </li>
                                  <li class="Filters-item">
                                    <label for="tesis_tipi_3">
                                      <input type="checkbox" data-type="amenites" data-name="Tip" id="tesis_tipi_3" class="AmenitesID_3" value="3">
                                      <span class="checkspan"></span>
                                      <p class="check-text">Suite</p>
                                    </label>
                                  </li>
                                  <li class="Filters-item">
                                    <label for="tesis_tipi_4">
                                      <input type="checkbox" data-type="amenites" data-name="Tip" id="tesis_tipi_4" class="AmenitesID_4" value="4">
                                      <span class="checkspan"></span>
                                      <p class="check-text">Dubleks</p>
                                    </label>
                                  </li>
                                  <li class="Filters-item">
                                    <label for="tesis_tipi_5">
                                      <input type="checkbox" class="AmenitesID_5" data-type="amenites" data-name="Tip" id="tesis_tipi_5" value="5">
                                      <span class="checkspan"></span>
                                      <p class="check-text">Bungalov</p>
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="Filters">
                              <div class="Filters-head ">
                                <i class="icon-concept"></i>
                                <h5>TESİS KONSEPTİ</h5>
                              </div>
                              <div class="Filters-in">
                                <ul>
                                  <li class="Filters-item">
                                    <label for="konsept_1">
                                      <input type="checkbox" class="AmenitesID_6" data-type="amenites" data-name="Konsept" id="konsept_1" value="6">
                                      <span class="checkspan"></span>
                                      <p class="check-text">Deniz manzaralı villa ve evler</p>
                                    </label>
                                  </li>
                                  <li class="Filters-item">
                                    <label for="konsept_2">
                                      <input type="checkbox" class="AmenitesID_7" data-type="amenites" data-name="Konsept" id="konsept_2" value="7">
                                      <span class="checkspan"></span>
                                      <p class="check-text">Merkezi konumdaki evler</p>
                                    </label>
                                  </li>
                                  <li class="Filters-item">
                                    <label for="konsept_3">
                                      <input type="checkbox" class="AmenitesID_8" data-type="amenites" data-name="Konsept" id="konsept_3" value="8">
                                      <span class="checkspan"></span>
                                      <p class="check-text">Lüks tatil villaları</p>
                                    </label>
                                  </li>
                                  <li class="Filters-item">
                                    <label for="konsept_4">
                                      <input type="checkbox" class="AmenitesID_9" data-type="amenites" data-name="Konsept" id="konsept_4" value="9">
                                      <span class="checkspan"></span>
                                      <p class="check-text">Balayı villası</p>
                                    </label>
                                  </li>
                                  <li class="Filters-item">
                                    <label for="konsept_5">
                                      <input type="checkbox" class="AmenitesID_10" data-type="amenites" data-name="Konsept" id="konsept_5" value="10">
                                      <span class="checkspan"></span>
                                      <p class="check-text">Muhafazakar villa</p>
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <button type="button" class="Filters-button-okey Dropdown-close">Tamam</button>
                        </ul>
                      </div>
                    </div>
                    <button type="button" class="Search-item-more-mobile" id="mobileFilter"><i class="icon-filter"></i>
                      <span class="dropdown-toggle-title">Gelişmiş Arama</span></button>
                    <button type="button" class="Search-button" id="searchVilla" onclick="RunFilter(this)"><img src="/cdn/img/icons/006-ob-search-icon.svg" width="16" height="18" alt="ob-search" class="contain flex-shrink-0 my-1"></button>
                  </form>
                </div>

              </div>
            </div>
          </form>
        </div>
      </section>

      <section class="highlight-section bg-theme-light-2 pt-5 pb-4 mt-n5">
        <div class="container">
          <div class="row pt-4 pb-md-2">
            <div class="note-box col-12 col-lg-12 pe-lg-5">
              <h1 class="highlight-section-title">Fethiye Kiralık Villa</h1>
              <p class="highlight-section-desc">
                Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
                masmavi denizi ile ünlü bir adres. Fethiye’nin tadını gerçekten çıkarmak isteyenler içinse, en
                mantıklı seçenek villa kiralama. Günlük ya da haftalık villa tatili yapmak isteyenlere jakuzili,
                kapalı havuzlu ya da bahçeli kiralık villa alternatifleri sunulan
                Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.
                Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
                masmavi denizi ile ünlü bir adres. Fethiye’nin tadını gerçekten çıkarmak isteyenler içinse, en
                mantıklı seçenek villa kiralama. Günlük ya da haftalık villa tatili yapmak isteyenlere jakuzili,
                kapalı havuzlu ya da bahçeli kiralık villa alternatifleri sunulan
                Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.
                Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
                masmavi denizi ile ünlü bir adres. Fethiye’nin tadını gerçekten çıkarmak isteyenler içinse, en
                mantıklı seçenek villa kiralama. Günlük ya da haftalık villa tatili yapmak isteyenlere jakuzili,
                kapalı havuzlu ya da bahçeli kiralık villa alternatifleri sunulan
                Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.
                Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
                masmavi denizi ile ünlü bir adres. Fethiye’nin tadını gerçekten çıkarmak isteyenler içinse, en
                mantıklı seçenek villa kiralama. Günlük ya da haftalık villa tatili yapmak isteyenlere jakuzili,
                kapalı havuzlu ya da bahçeli kiralık villa alternatifleri sunulan
                Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.</p>
              <div class="highlight-section-desc-more-button read-more-button">+ TÜMÜNÜ OKU</div>
              <div class="highlight-section-desc-more-button">- DARALT</div>
            </div>
          </div>
        </div>
      </section>

      <div class="container mt-2">
        <button type="button" data-bs-toggle="modal" data-bs-target="#loginModal">GİRİŞ YAP MODAL</button>
        <button type="button" data-bs-toggle="modal" data-bs-target="#loginCodeModal">KOD DOĞRULAMA MODAL</button>
        <button type="button" data-bs-toggle="modal" data-bs-target="#signupModal">KAYIT MODAL</button>
        <button type="button" data-bs-toggle="modal" data-bs-target="#callModal">SİZİ ARAYALIM MODAL</button>


        <!-- Giriş Modal -->
        <div class="modal fade Login" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="icon-login-close"></i></button>
              <div class="Login-in">
                <div class="Login-left" style="background-image:url('/cdn/img/login-bg.jpg')"></div>
                <div class="Login-right">
                  <div class="Login-right-in">
                    <h2><b>MÜŞTERİ </b> GİRİŞİ</h2>
                    <p>Lütfen bir giriş yöntemi seçiniz.</p>
                    <span>Yurtdışında yaşayan müşterilerimizin <u>e-posta</u> ile giriş yapması gerekmektedir.</span>
                    <form action="" class="Login-form">
                      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <input type="radio" name="loginFormType" checked id="loginFormRadio" data-bs-toggle="pill" data-bs-target="#loginFormPhoneContent">
                          <label for="loginFormRadio">
                            <i class="icon-login-phone"></i>
                            <span>Telefon ile giriş yap</span>
                          </label>
                        </li>
                        <li class="nav-item" role="presentation">
                          <input type="radio" name="loginFormType" id="loginFormRadio2" data-bs-toggle="pill"  data-bs-target="#loginFormMailContent">
                          <label for="loginFormRadio2">
                            <i class="icon-login-mail"></i>
                            <span>E-posta ile giriş yap</span>
                          </label>
                        </li>
                      </ul>
                      <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" role="tabpanel" id="loginFormPhoneContent">
                          <label for="" class="Login-form-item Login-form-item-tr">
                            <i class="icon-flag-tr"></i>
                            <input type="text" placeholder="+90" value="+90" id="inputTR">
                          </label>
                          <p class="Login-form-alert  mt-2 text-danger text-sm phone-alert"></p>
                          <button type="submit" class="Login-form-button">GÖNDER</button>
                          <p class="Login-form-signup">Hesabın yok mu? <a href="">Hemen Üye Ol!</a></p>
                        </div>
                        <div class="tab-pane fade" role="tabpanel" id="loginFormMailContent">
                          <label for="" class="Login-form-item Login-form-item-tr">
                            <input type="text" placeholder="E-mail adresiniz" value="" id="mailInput">
                          </label>
                          <p class="Login-form-alert  mt-2 text-danger text-sm mail-alert"></p>
                          <button type="submit" class="Login-form-button">GÖNDER</button>
                          <p class="Login-form-signup">Hesabın yok mu? <a href="">Hemen Üye Ol!</a></p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Doğrulama Kodu Modal -->

        <div class="modal fade Login" id="loginCodeModal" tabindex="-1" aria-labelledby="loginCodeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="icon-login-close"></i></button>
              <div class="Login-in">
                <div class="Login-left" style="background-image:url('/cdn/img/login-bg.jpg')"></div>
                <div class="Login-right">
                  <div class="Login-right-in">
                    <h2><b>DOĞRULAMA </b> KODU</h2>
                    <span>Lütfen telefon numaranıza gelen <u>4 haneli</u> giriş kodunu giriniz.</span>
                    <form action="" class="Login-form">
                      <fieldset name='number-code' data-number-code-form>
                        <input class="number-code" type="number" min='0' max='9' name='number-code-0' data-number-code-input='0' required />
                        <input class="number-code" type="number" min='0' max='9' name='number-code-1' data-number-code-input='1' required />
                        <input class="number-code" type="number" min='0' max='9' name='number-code-2' data-number-code-input='2' required />
                        <input class="number-code" type="number" min='0' max='9' name='number-code-3' data-number-code-input='3' required />
                      </fieldset>
                      <p class="Login-code-info" data-time="50"><b>00:30</b> Tekrar talep etmek için beklemeniz gereken süre
                        <a href="">Yeni Doğrulama Kodu Gönder</a></p>
                      <button type="submit" class="Login-form-button mt-1">GÖNDER</button>
                      <p class="Login-form-signup">Hesabın yok mu? <a href="">Hemen Üye Ol!</a></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Kayıt Modal -->

        <div class="modal fade Login" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="icon-login-close"></i></button>
              <div class="Login-in">
                <div class="Login-left" style="background-image:url('/cdn/img/login-bg.jpg')"></div>
                <div class="Login-right">
                  <div class="Login-right-in">
                    <h2><b>KAYIT </b> OL</h2>
                    <form action="" class="Login-form">
                      <label for="" class="Login-form-item mb-2">
                        <input type="text" placeholder="İsim Soyisim" value="">
                      </label>
                      <label for="" class="Login-form-item mb-2">
                        <input type="text" placeholder="E-mail Adresiniz" value="" id="mailInput">
                      </label>
                      <p class="Login-form-alert  mt-2 text-danger text-sm mail-alert mail-alert-signup"></p>
                      <label for="" class="Login-form-item Login-form-item-tr">
                        <input type="tel" required="required" id="phone" name="phone" class="" autocomplete="off" placeholder="Telefon Numaranız">
                      </label>
                      <p class="Login-form-alert  mt-2 text-danger text-sm phone-alert"></p>
                      <label for="gizlilik" class="Login-form-item Login-form-item-check">
                        <input type="checkbox" id="gizlilik">
                        <span></span>
                        <p><a data-bs-toggle="modal" href="#kullanimModal">Kullanım Şartları</a> ve <a data-bs-toggle="modal" href="#gizlilikModal">Gizlilik bildirimini</a> kabul ediyorum.
                          Kişisel Verilerin Korunması ve <a data-bs-toggle="modal" href="#gizlilikPolitikasiModal">Gizlilik Politikasını</a> okudum.</p>
                      </label>
                      <label for="firsat" class="Login-form-item Login-form-item-check">
                        <input type="checkbox" id="firsat">
                        <span></span>
                        <p><a href="">Fırsat ve kampanyalardan haberdar olmak istiyorum.</a> </p>
                      </label>
                      <button type="submit" class="Login-form-button mt-2">KAYIT OL</button>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sizi Arayalım Modal -->
        <div class="modal fade Login" id="callModal" tabindex="-1" aria-labelledby="callModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="icon-login-close"></i></button>
              <div class="Login-in">
                <div class="Login-left" style="background-image:url('/cdn/img/login-bg.jpg')"></div>
                <div class="Login-right">
                  <div class="Login-right-in">
                    <h2><b>SİZİ </b> ARAYALIM</h2>
                    <form action="" class="Login-form">
                      <label for="" class="Login-form-item mb-2">
                        <input type="text" placeholder="İsim Soyisim" value="">
                      </label>
                      <label for="" class="Login-form-item mb-2">
                        <input type="text" placeholder="E-mail Adresiniz" value="" id="mailInput">
                      </label>
                      <p class="Login-form-alert  mt-2 text-danger text-sm mail-alert mail-alert-signup"></p>
                      <label for="" class="Login-form-item Login-form-item-tr mb-2">
                        <input type="tel" required="required" id="phone" name="phone" class="" autocomplete="off" placeholder="Telefon Numaranız">
                      </label>
                      <label for="" class="Login-form-item Login-form-item-select mb-3">
                        <select class="selectpicker " id="loginFormSubject">
                          <option value="0" selected="selected">Konu Seçiniz</option>
                          <option value="1">Z-A</option>
                          <option value="2">A-z</option>
                        </select>
                      </label>
                      <h4 class="Login-form-call-title">Ne Zaman Aranmak İstersiniz</h4>
                      <div class="Login-form-call mb-2">
                        <div class="Login-form-call-item">
                          <input type="radio" name="loginFormCallItem" checked id="loginFormCallInput">
                          <label for="loginFormCallInput">
                            <span class="Login-form-call-item-dot"></span>
                            <p><span>HEMEN</span>5dk içinde arayabiliriz.</p>
                          </label>
                        </div>
                        <div class="Login-form-call-item">
                          <input type="radio" name="loginFormCallItem" checked id="loginFormCallInput2">
                          <label for="loginFormCallInput2">
                            <span class="Login-form-call-item-dot"></span>
                            <p><span>ÖZEL ZAMAN</span>Dilediğiniz zaman arayabiliriz.</p>
                          </label>
                        </div>
                      </div>
                      <p class="Login-form-alert  mt-2 text-danger text-sm phone-alert"></p>
                      <label for="gizlilik" class="Login-form-item Login-form-item-check">
                        <input type="checkbox" id="gizlilik">
                        <span></span>
                        <p><a data-bs-toggle="modal" href="#kullanimModal">Kullanım Şartları</a> ve <a href="">Gizlilik bildirimini</a> kabul ediyorum.
                          Kişisel Verilerin Korunması ve <a href="">Gizlilik Politikasını</a> okudum.</p>
                      </label>
                      <label for="firsat" class="Login-form-item Login-form-item-check">
                        <input type="checkbox" id="firsat">
                        <span></span>
                        <p><a href="">Fırsat ve kampanyalardan haberdar olmak istiyorum.</a> </p>
                      </label>
                      <button type="submit" class="Login-form-button mt-2">GÖNDER</button>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Kullanım Şartları Modal -->
        <div class="modal fade Login" id="kullanimModal" tabindex="-1" aria-labelledby="kullanimModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="Login-text">
                <h2>Kullanım Şartları</h2>
                <div class="Login-text-in">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                </div>
              </div>
              <div class="modal-footer">
                <button class="btn btn-theme-first" data-bs-target="#signupModal" data-bs-toggle="modal" data-bs-dismiss="modal">Geri Dön</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Gizlilik Bildirimi Modal -->
        <div class="modal fade Login" id="gizlilikModal" tabindex="-1" aria-labelledby="gizlilikModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="Login-text">
                <h2>Gizlilik Bildirimi</h2>
                <div class="Login-text-in">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                </div>
              </div>
              <div class="modal-footer">
                <button class="btn btn-theme-first" data-bs-target="#signupModal" data-bs-toggle="modal" data-bs-dismiss="modal">Geri Dön</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Gizlilik Politikası Modal -->
        <div class="modal fade Login" id="gizlilikPolitikasiModal" tabindex="-1" aria-labelledby="gizlilikPolitikasiModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="Login-text">
                <h2>Gizlilik Politikası</h2>
                <div class="Login-text-in">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus, itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora dolorem, debitis vitae cupiditate!</p>
                </div>
              </div>
              <div class="modal-footer">
                <button class="btn btn-theme-first" data-bs-target="#signupModal" data-bs-toggle="modal" data-bs-dismiss="modal">Geri Dön</button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <section class="Filter">
        <div class="container">
          <div class="Filter-in">
            <div class="Filter-left Filters">
              <div class="Filter-left-head">
                <h4>Gelişmiş Arama</h4>
                <button type="button" class="Search-clear" onclick="filterClear()">Temizle</button>
                <button type="button" class="Search-filter-close" id="mobileFilterClose"><i
                  class="icon-search-close"></i></button>
              </div>
              <div class="Filters-search mobile">
                <label for="">
                  <i class="icon-search-new"></i>
                  <input type="search" placeholder="Özellik arayın" onkeyup="destinationsFilter(this)">
                </label>
              </div>
              <div class="Filter-left-in">
                <div class="Filters-item Filters-item-notfound">
                  <p class="Filters-item-notfound-text"><i class="icon-filter"></i>Sonuç bulunamadı</p>
                </div>
                <div class="Filters Filters-region ">
                  <div class="Filters-head">
                    <i class="icon-location-1"></i>
                    <h5>BÖLGE</h5>
                  </div>
                  <div class="Filters-search">
                    <label for="">
                      <i class="icon-search-new"></i>
                      <input type="search" placeholder="Bölge arayın" onkeyup="destinationsFilter(this)">
                    </label>
                  </div>
                  <div class="Filters-in">
                    <ul class="Filters-first">
                      <li class="Filters-item Filters-item-notfound">
                        <p class="Filters-item-notfound-text"><i class="icon-filter"></i>Sonuç
                          bulunamadı
                        </p>
                      </li>
                      <li class="Filters-item">
                        <label for="bolge_8">
                          <input type="checkbox" class="RegionID_1" data-type="location_2"
                                 data-name="Bölge" id="bolge_8" value="1">
                          <span class="checkspan"></span>
                          <p class="check-text">Antalya</p>
                        </label>
                        <ul class="Filter-second">
                          <li>
                            <label for="bolge_9">
                              <input type="checkbox" class="RegionID_2" data-type="location_2"
                                     data-name="Bölge" id="bolge_9" value="2">
                              <span class="checkspan"></span>
                              <p class="check-text">Kaş</p>
                            </label>
                            <ul class="Filter-third">
                              <li>
                                <label for="bolge_10">
                                  <input type="checkbox" data-type="location_2"
                                         data-name="Bölge" id="bolge_10" class="RegionID_3"
                                         value="3">
                                  <span class="checkspan"></span>
                                  <p class="check-text">Kalkan</p>
                                </label>
                                <label for="bolge_11">
                                  <input type="checkbox" data-type="location_2"
                                         data-name="Bölge" id="bolge_11" class="RegionID_4"
                                         value="4">
                                  <span class="checkspan"></span>
                                  <p class="check-text">Kalkan</p>
                                </label>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <label for="bolge_12">
                              <input type="checkbox" data-type="location_2" data-name="Bölge"
                                     id="bolge_12" class="RegionID_5" value="5">
                              <span class="checkspan"></span>
                              <p class="check-text">Çavdır</p>
                            </label>
                            <ul class="Filter-third">
                              <li>
                                <label for="bolge_13">
                                  <input type="checkbox" data-type="location_2"
                                         data-name="Bölge" id="bolge_13" class="RegionID_6"
                                         value="6">
                                  <span class="checkspan"></span>
                                  <p class="check-text">Fethiye</p>
                                </label>
                                <label for="bolge_14">
                                  <input type="checkbox" data-type="location_2"
                                         data-name="Bölge" id="bolge_14" class="RegionID_7"
                                         value="7">
                                  <span class="checkspan"></span>
                                  <p class="check-text">Marmaris</p>
                                </label>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="Filters Filters-amenites">
                  <div class="Filters-head border-bottom">
                    <i class="icon-facility"></i>
                    <h5>TESİS TİPİ</h5>
                  </div>
                  <div class="Filters-in">
                    <ul class="Filters-first Filters-grid">
                      <li class="Filters-item">
                        <label for="tesis_tipi_6">
                          <input type="checkbox" class="AmenitesID_1" data-type="amenites"
                                 data-name="Tip" id="tesis_tipi_6" value="1">
                          <span class="checkspan"></span>
                          <p class="check-text">Villa</p>
                        </label>
                      </li>
                      <li class="Filters-item">
                        <label for="tesis_tipi_7">
                          <input type="checkbox" data-type="amenites" data-name="Tip"
                                 id="tesis_tipi_7" class="AmenitesID_2" value="2">
                          <span class="checkspan"></span>
                          <p class="check-text">Ev</p>
                        </label>
                      </li>
                      <li class="Filters-item">
                        <label for="tesis_tipi_8">
                          <input type="checkbox" data-type="amenites" data-name="Tip"
                                 id="tesis_tipi_8" class="AmenitesID_3" value="3">
                          <span class="checkspan"></span>
                          <p class="check-text">Suite</p>
                        </label>
                      </li>
                      <li class="Filters-item">
                        <label for="tesis_tipi_9">
                          <input type="checkbox" data-type="amenites" data-name="Tip"
                                 id="tesis_tipi_9" class="AmenitesID_4" value="4">
                          <span class="checkspan"></span>
                          <p class="check-text">Dubleks</p>
                        </label>
                      </li>
                      <li class="Filters-item">
                        <label for="tesis_tipi_10">
                          <input type="checkbox" class="AmenitesID_5" data-type="amenites"
                                 data-name="Tip" id="tesis_tipi_10" value="5">
                          <span class="checkspan"></span>
                          <p class="check-text">Bungalov</p>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="Filters">
                  <div class="Filters-head border-bottom">
                    <i class="icon-wallet"></i>
                    <h5>FİYAT ARALIĞI</h5>
                  </div>
                  <div class="Filters-in">
                    <div class="Filters-range">
                      <div class="Filters-range-inputs">
                        <label for="">
                          <small class="">Min</small>
                          <input type="number" class="js-minFiyat" name="min" placeholder="Min">
                          <span>₺</span>
                        </label>
                        <label for="">
                          <small class="fw-medium text-theme-secondary d-block w-100">Max</small>
                          <input type="number" class="js-maxFiyat" name="max" placeholder="Max"
                                 value="">
                          <span class="text-theme-secondary">₺</span>
                        </label>
                      </div>
                      <div class="Filters-range-inputs-bar">
                        <input type="text" class="js-range-slider" name="my_range" value="" data-min="0"
                               data-max="9000" data-prefix="₺" data-step="50"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="Filters Filters-amenites">
                  <div class="Filters-head border-bottom">
                    <i class="icon-concept"></i>
                    <h5>TESİS KONSEPTİ</h5>
                  </div>
                  <div class="Filters-in">
                    <ul>
                      <li class="Filters-item">
                        <label for="konsept_6">
                          <input type="checkbox" class="AmenitesID_6" data-type="amenites"
                                 data-name="Konsept" id="konsept_6" value="6">
                          <span class="checkspan"></span>
                          <p class="check-text">Deniz manzaralı villa ve evler</p>
                        </label>
                      </li>
                      <li class="Filters-item">
                        <label for="konsept_7">
                          <input type="checkbox" class="AmenitesID_7" data-type="amenites"
                                 data-name="Konsept" id="konsept_7" value="7">
                          <span class="checkspan"></span>
                          <p class="check-text">Merkezi konumdaki evler</p>
                        </label>
                      </li>
                      <li class="Filters-item">
                        <label for="konsept_8">
                          <input type="checkbox" class="AmenitesID_8" data-type="amenites"
                                 data-name="Konsept" id="konsept_8" value="8">
                          <span class="checkspan"></span>
                          <p class="check-text">Lüks tatil villaları</p>
                        </label>
                      </li>
                      <li class="Filters-item">
                        <label for="konsept_9">
                          <input type="checkbox" class="AmenitesID_9" data-type="amenites"
                                 data-name="Konsept" id="konsept_9" value="9">
                          <span class="checkspan"></span>
                          <p class="check-text">Balayı villası</p>
                        </label>
                      </li>
                      <li class="Filters-item">
                        <label for="konsept_10">
                          <input type="checkbox" class="AmenitesID_10" data-type="amenites"
                                 data-name="Konsept" id="konsept_10" value="10">
                          <span class="checkspan"></span>
                          <p class="check-text">Muhafazakar villa</p>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="Filters Filters-amenites">
                  <div class="Filters-head border-bottom">
                    <i class="icon-concept"></i>
                    <h5>ÖNE ÇIKAN ÖZELLİKLER</h5>
                  </div>
                  <div class="Filters-in">
                    <ul class="Filters-first">
                      <li class="Filters-item">
                        <label for="amenites_1">
                          <input type="checkbox" class="AmenitesID_11" data-type="amenites"
                                 data-name="Özellik" id="amenites_1" value="11">
                          <span class="checkspan"></span>
                          <p class="check-text">Özel Havuz</p>
                        </label>
                      </li>
                      <li class="Filters-item">
                        <label for="amenites_2">
                          <input type="checkbox" class="AmenitesID_12" data-type="amenites"
                                 data-name="Özellik" id="amenites_2" value="12">
                          <span class="checkspan"></span>
                          <p class="check-text">Şezlong</p>
                        </label>
                      </li>
                      <li class="Filters-item">
                        <label for="amenites_3">
                          <input type="checkbox" class="AmenitesID_13" data-type="amenites"
                                 data-name="Özellik" id="amenites_3" value="13">
                          <span class="checkspan"></span>
                          <p class="check-text">Ortak Havuz</p>
                        </label>
                      </li>
                      <li class="Filters-item">
                        <label for="amenites_4">
                          <input type="checkbox" class="AmenitesID_14" data-type="amenites"
                                 data-name="Özellik" id="amenites_4" value="14">
                          <span class="checkspan"></span>
                          <p class="check-text">Isıtmalı Havuz</p>
                        </label>
                      </li>
                      <li class="Filters-item">
                        <label for="amenites_5">
                          <input type="checkbox" class="AmenitesID_15" data-type="amenites"
                                 data-name="Özellik" id="amenites_5" value="15">
                          <span class="checkspan"></span>
                          <p class="check-text">Kapalı Havuz</p>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="Filters Filters-amenites">
                  <div class="Filters-head border-bottom">
                    <i class="icon-concept"></i>
                    <h5>OLANAKLAR</h5>
                  </div>
                  <div class="Filters-in">
                    <ul class="Filters-first">
                      <li class="Filters-item">
                        <label for="amenites_1">
                          <input type="checkbox" class="AmenitesID_16" data-type="amenites"
                                 data-name="Olanak" id="amenites_1" value="16">
                          <span class="checkspan"></span>
                          <p class="check-text">Çamaşır Makinesi</p>
                        </label>
                      </li>
                      <li class="Filters-item">
                        <label for="amenites_2">
                          <input type="checkbox" class="AmenitesID_17" data-type="amenites"
                                 data-name="Olanak" id="amenites_2" value="17">
                          <span class="checkspan"></span>
                          <p class="check-text">Hamam</p>
                        </label>
                      </li>
                      <li class="Filters-item">
                        <label for="amenites_3">
                          <input type="checkbox" class="AmenitesID_18" data-type="amenites"
                                 data-name="Olanak" id="amenites_3" value="18">
                          <span class="checkspan"></span>
                          <p class="check-text">Sauna</p>
                        </label>
                      </li>
                      <li class="Filters-item">
                        <label for="amenites_4">
                          <input type="checkbox" class="AmenitesID_19" data-type="amenites"
                                 data-name="Olanak" id="amenites_4" value="19">
                          <span class="checkspan"></span>
                          <p class="check-text">Küvetli Banyo</p>
                        </label>
                      </li>
                      <li class="Filters-item">
                        <label for="amenites_5">
                          <input type="checkbox" class="AmenitesID_20" data-type="amenites"
                                 data-name="Olanak" id="amenites_5" value="20">
                          <span class="checkspan"></span>
                          <p class="check-text">Fırın</p>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="Filters-button" type="button" onclick="RunFilter(this)">Filtele</div>
            </div>
            <div class="Filter-right">
              <div class="Filter-right-head">
                <div class="Filter-right-head-info">
                  <i class="icon-list"></i>
                  <p>450 villa listeleniyor</p>
                </div>
                <div class="Filter-right-head-buttons">

                  <div class="Filter-right-head-buttons-item">
                    <span class="Filter-right-head-buttons-item-title">Sırala:</span>
                    <select class="selectpicker " id="v_filter">
                      <option value="0" selected="selected"> Fiyata Göre Artan</option>
                      <option value="1">Z-A</option>
                      <option value="2">A-z</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="Filter-right-selected" style="">
                <div class="Filter-right-selected-in">
                  <a href="#" class="Filter-right-selected-item" id="it-1"
                     onclick="event.preventDefault(), Filters_ById('.RegionID_1'), $(this).remove()">Bölge:Antalya<i
                    class="icon-search-close"></i></a>
                  <a href="#" class="Filter-right-selected-item" id="it-3"
                     onclick="event.preventDefault(), Filters_ById('.RegionID_3'), $(this).remove()">Bölge:Kalkan<i
                    class="icon-search-close"></i></a>
                  <button type="button" id="Fetures_clear"
                          onclick="Filters_Clear(),$('.Filter-right-selected .Filter-right-selected-item').remove(),$(this).hide()">
                    Temizle
                  </button>
                </div>
              </div>



              <div class="F_villa ">
                <div class="F_villa-item">
                  <div class="F_villa-item-img ">
                    <div class="swiper-container villa-list-slider">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                      </div>
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                    </div>
                  </div>
                  <div class="F_villa-item-right">
                    <div class="F_villa-item-head">
                      <div class="F_villa-item-head-name">
                        <span>Tesis Kodu</span>
                        <a href="">VKV1020</a>
                        <div class="F_villa-item-head-name-star">
                          <i class="icon-star active"></i>
                          <i class="icon-star active"></i>
                          <i class="icon-star active"></i>
                          <i class="icon-star"></i>
                          <i class="icon-star"></i>
                          <p>4.9</p>
                        </div>
                      </div>
                      <div class="F_villa-item-head-location">
                        <i class="icon-name-location"></i>
                        <div class="F_villa-item-head-location-text">
                          <p>KALKAN
                            <span>Turkey / Antalya</span>
                          </p>
                        </div>
                      </div>
                      <div class="F_villa-item-head-price F_villa-item-head-price-promotion">
                        <div class="F_villa-item-head-price-in">
                          <b>9.220₺</b>
                          <p>‘den başlayan fiyatlar</p>
                        </div>

                        <span>GECELİK</span>
                      </div>
                    </div>
                    <div class="F_villa-item-info">
                      <div class="F_villa-item-info-item">
                        <i class="icon-user-new"></i>
                        <span>4 Kişilik</span>
                      </div>
                      <div class="F_villa-item-info-item">
                        <i class="icon-bed-new"></i>
                        <span>2 Yatak Odası</span>
                      </div>
                      <div class="F_villa-item-info-item">
                        <i class="icon-shower-new"></i>
                        <span>2 Banyo</span>
                      </div>
                    </div>
                    <div class="F_villa-item-bottom">
                      <div class="F_villa-item-features">
                        <h6>Öne çıkan özellikleri</h6>
                        <div class="F_villa-item-features-in">
                          <p class="F_villa-item-features-item">Jakuzi</p>
                          <p class="F_villa-item-features-item">Deniz Manzaralı</p>
                          <p class="F_villa-item-features-item">Merkeze Yakın</p>
                          <p class="F_villa-item-features-item">Denize Yakın</p>
                          <p class="F_villa-item-features-item">Kapalı Otopark</p>
                          <p class="F_villa-item-features-item F_villa-item-features-more"><a href=""
                                                                                              class="">Tümünü
                            Gör</a></p>
                        </div>

                      </div>
                      <a href="" class="F_villa-item-show">Villayı İncele</a>
                    </div>
                  </div>
                </div>
                <div class="F_villa-item">
                  <div class="F_villa-item-img ">
                    <div class="swiper-container villa-list-slider">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                      </div>
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                    </div>
                  </div>
                  <div class="F_villa-item-right">
                    <div class="F_villa-item-head">
                      <div class="F_villa-item-head-name">
                        <span>Tesis Kodu</span>
                        <a href="">VKV1020</a>
                        <div class="F_villa-item-head-name-star">
                          <i class="icon-star active"></i>
                          <i class="icon-star active"></i>
                          <i class="icon-star active"></i>
                          <i class="icon-star"></i>
                          <i class="icon-star"></i>
                          <p>4.9</p>
                        </div>
                      </div>
                      <div class="F_villa-item-head-location">
                        <i class="icon-name-location"></i>
                        <div class="F_villa-item-head-location-text">
                          <p>KALKAN
                            <span>Turkey / Antalya</span>
                          </p>
                        </div>
                      </div>
                      <div class="F_villa-item-head-price F_villa-item-head-price-promotion">
                        <div class="F_villa-item-head-price-in">
                          <b>9.220₺</b>
                          <p>‘den başlayan fiyatlar</p>
                        </div>

                        <span>GECELİK</span>
                      </div>
                    </div>
                    <div class="F_villa-item-info">
                      <div class="F_villa-item-info-item">
                        <i class="icon-user-new"></i>
                        <span>4 Kişilik</span>
                      </div>
                      <div class="F_villa-item-info-item">
                        <i class="icon-bed-new"></i>
                        <span>2 Yatak Odası</span>
                      </div>
                      <div class="F_villa-item-info-item">
                        <i class="icon-shower-new"></i>
                        <span>2 Banyo</span>
                      </div>
                    </div>
                    <div class="F_villa-item-bottom">
                      <div class="F_villa-item-features">
                        <h6>Öne çıkan özellikleri</h6>
                        <div class="F_villa-item-features-in">
                          <p class="F_villa-item-features-item">Jakuzi</p>
                          <p class="F_villa-item-features-item">Deniz Manzaralı</p>
                          <p class="F_villa-item-features-item">Merkeze Yakın</p>
                          <p class="F_villa-item-features-item">Denize Yakın</p>
                          <p class="F_villa-item-features-item">Kapalı Otopark</p>
                          <p class="F_villa-item-features-item F_villa-item-features-more"><a href=""
                                                                                              class="">Tümünü
                            Gör</a></p>
                        </div>

                      </div>
                      <a href="" class="F_villa-item-show">Villayı İncele</a>
                    </div>
                  </div>
                </div>
                <div class="F_villa-item">
                  <div class="F_villa-item-img ">
                    <div class="swiper-container villa-list-slider">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                      </div>
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                    </div>
                  </div>
                  <div class="F_villa-item-right">
                    <div class="F_villa-item-head">
                      <div class="F_villa-item-head-name">
                        <span>Tesis Kodu</span>
                        <a href="">VKV1020</a>
                        <div class="F_villa-item-head-name-star">
                          <i class="icon-star active"></i>
                          <i class="icon-star active"></i>
                          <i class="icon-star active"></i>
                          <i class="icon-star"></i>
                          <i class="icon-star"></i>
                          <p>4.9</p>
                        </div>
                      </div>
                      <div class="F_villa-item-head-location">
                        <i class="icon-name-location"></i>
                        <div class="F_villa-item-head-location-text">
                          <p>KALKAN
                            <span>Turkey / Antalya</span>
                          </p>
                        </div>
                      </div>
                      <div class="F_villa-item-head-price F_villa-item-head-price-promotion">
                        <div class="F_villa-item-head-price-in">
                          <b>9.220₺</b>
                          <p>‘den başlayan fiyatlar</p>
                        </div>

                        <span>GECELİK</span>
                      </div>
                    </div>
                    <div class="F_villa-item-info">
                      <div class="F_villa-item-info-item">
                        <i class="icon-user-new"></i>
                        <span>4 Kişilik</span>
                      </div>
                      <div class="F_villa-item-info-item">
                        <i class="icon-bed-new"></i>
                        <span>2 Yatak Odası</span>
                      </div>
                      <div class="F_villa-item-info-item">
                        <i class="icon-shower-new"></i>
                        <span>2 Banyo</span>
                      </div>
                    </div>
                    <div class="F_villa-item-bottom">
                      <div class="F_villa-item-features">
                        <h6>Öne çıkan özellikleri</h6>
                        <div class="F_villa-item-features-in">
                          <p class="F_villa-item-features-item">Jakuzi</p>
                          <p class="F_villa-item-features-item">Deniz Manzaralı</p>
                          <p class="F_villa-item-features-item">Merkeze Yakın</p>
                          <p class="F_villa-item-features-item">Denize Yakın</p>
                          <p class="F_villa-item-features-item">Kapalı Otopark</p>
                          <p class="F_villa-item-features-item F_villa-item-features-more"><a href=""
                                                                                              class="">Tümünü
                            Gör</a></p>
                        </div>

                      </div>
                      <a href="" class="F_villa-item-show">Villayı İncele</a>
                    </div>
                  </div>
                </div>
                <div class="F_villa-item">
                  <div class="F_villa-item-img ">
                    <div class="swiper-container villa-list-slider">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                      </div>
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                    </div>
                  </div>
                  <div class="F_villa-item-right">
                    <div class="F_villa-item-head">
                      <div class="F_villa-item-head-name">
                        <span>Tesis Kodu</span>
                        <a href="">VKV1020</a>
                        <div class="F_villa-item-head-name-star">
                          <i class="icon-star active"></i>
                          <i class="icon-star active"></i>
                          <i class="icon-star active"></i>
                          <i class="icon-star"></i>
                          <i class="icon-star"></i>
                          <p>4.9</p>
                        </div>
                      </div>
                      <div class="F_villa-item-head-location">
                        <i class="icon-name-location"></i>
                        <div class="F_villa-item-head-location-text">
                          <p>KALKAN
                            <span>Turkey / Antalya</span>
                          </p>
                        </div>
                      </div>
                      <div class="F_villa-item-head-price F_villa-item-head-price-promotion">
                        <div class="F_villa-item-head-price-in">
                          <b>9.220₺</b>
                          <p>‘den başlayan fiyatlar</p>
                        </div>

                        <span>GECELİK</span>
                      </div>
                    </div>
                    <div class="F_villa-item-info">
                      <div class="F_villa-item-info-item">
                        <i class="icon-user-new"></i>
                        <span>4 Kişilik</span>
                      </div>
                      <div class="F_villa-item-info-item">
                        <i class="icon-bed-new"></i>
                        <span>2 Yatak Odası</span>
                      </div>
                      <div class="F_villa-item-info-item">
                        <i class="icon-shower-new"></i>
                        <span>2 Banyo</span>
                      </div>
                    </div>
                    <div class="F_villa-item-bottom">
                      <div class="F_villa-item-features">
                        <h6>Öne çıkan özellikleri</h6>
                        <div class="F_villa-item-features-in">
                          <p class="F_villa-item-features-item">Jakuzi</p>
                          <p class="F_villa-item-features-item">Deniz Manzaralı</p>
                          <p class="F_villa-item-features-item">Merkeze Yakın</p>
                          <p class="F_villa-item-features-item">Denize Yakın</p>
                          <p class="F_villa-item-features-item">Kapalı Otopark</p>
                          <p class="F_villa-item-features-item F_villa-item-features-more"><a href=""
                                                                                              class="">Tümünü
                            Gör</a></p>
                        </div>

                      </div>
                      <a href="" class="F_villa-item-show">Villayı İncele</a>
                    </div>
                  </div>
                </div>
                <div class="holiday-banner bg-light text-white position-relative rounded-lg overflow-hidden d-flex py-3 py-sm-4 ps-3 ps-sm-4 ps-xl-5 pe-3 pe-sm-4 my-4">
                  <img src="/cdn/img/spacer.gif" data-src="/cdn/uploads/holiday-banner.jpg" alt=""
                       class="banner-image lazy cover flex-shrink-0 position-absolute top-0 start-0 w-100 h-100">
                  <div class="d-flex flex-column position-relative ls-05 pt-3">
                    <span class="fs-6 fw-medium lh-1">+1259 Seçenek ile</span>
                    <span class="fs-6 fw-medium lh-1">Konaklamanın en keyifli halleri</span>
                    <strong class="big-title fs-1 fw-bold lh-sm d-block mt-n1">OtelBnb’de</strong>
                  </div>
                  <svg class="align-self-end ms-auto" width="33px" height="36px" viewBox="0 0 14 15"
                       version="1.1" xmlns="http://www.w3.org/2000/svg"
                       xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="VillaListeleme" transform="translate(-626.000000, -202.000000)"
                         fill="#ffffff">
                        <g id="Group" transform="translate(626.000000, 202.000000)">
                          <path d="M14,13.3334991 C14,14.2539193 13.2166932,15 12.25,15 C11.2836548,15 10.5,14.2539193 10.5,13.3334991 C10.5,12.4130788 11.2836548,11.6666667 12.25,11.6666667 C13.2166932,11.6666667 14,12.4130788 14,13.3334991"
                                id="Fill-13"></path>
                          <path d="M6.12867316,9.20434506 C4.17402549,9.20434506 2.58538231,7.69131915 2.58538231,5.8369566 C2.58538231,3.97534751 4.17402549,2.46257148 6.12867316,2.46257148 C8.07544978,2.46257148 9.66435532,3.97534751 9.66435532,5.8369566 C9.66435532,7.69131915 8.07544978,9.20434506 6.12867316,9.20434506 M6.12867316,0 C2.74122939,0 0,2.61050069 0,5.8369566 C0,9.0559161 2.74122939,11.6666667 6.12867316,11.6666667 C9.50850825,11.6666667 12.25,9.0559161 12.25,5.8369566 C12.25,2.61050069 9.50850825,0 6.12867316,0"
                                id="Fill-15"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="F_villa-item">
                  <div class="F_villa-item-img ">
                    <div class="swiper-container villa-list-slider">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                      </div>
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                    </div>
                  </div>
                  <div class="F_villa-item-right">
                    <div class="F_villa-item-head">
                      <div class="F_villa-item-head-name">
                        <span>Tesis Kodu</span>
                        <a href="">VKV1020</a>
                        <div class="F_villa-item-head-name-star">
                          <i class="icon-star active"></i>
                          <i class="icon-star active"></i>
                          <i class="icon-star active"></i>
                          <i class="icon-star"></i>
                          <i class="icon-star"></i>
                          <p>4.9</p>
                        </div>
                      </div>
                      <div class="F_villa-item-head-location">
                        <i class="icon-name-location"></i>
                        <div class="F_villa-item-head-location-text">
                          <p>KALKAN
                            <span>Turkey / Antalya</span>
                          </p>
                        </div>
                      </div>
                      <div class="F_villa-item-head-price F_villa-item-head-price-promotion">
                        <div class="F_villa-item-head-price-in">
                          <b>9.220₺</b>
                          <p>‘den başlayan fiyatlar</p>
                        </div>

                        <span>GECELİK</span>
                      </div>
                    </div>
                    <div class="F_villa-item-info">
                      <div class="F_villa-item-info-item">
                        <i class="icon-user-new"></i>
                        <span>4 Kişilik</span>
                      </div>
                      <div class="F_villa-item-info-item">
                        <i class="icon-bed-new"></i>
                        <span>2 Yatak Odası</span>
                      </div>
                      <div class="F_villa-item-info-item">
                        <i class="icon-shower-new"></i>
                        <span>2 Banyo</span>
                      </div>
                    </div>
                    <div class="F_villa-item-bottom">
                      <div class="F_villa-item-features">
                        <h6>Öne çıkan özellikleri</h6>
                        <div class="F_villa-item-features-in">
                          <p class="F_villa-item-features-item">Jakuzi</p>
                          <p class="F_villa-item-features-item">Deniz Manzaralı</p>
                          <p class="F_villa-item-features-item">Merkeze Yakın</p>
                          <p class="F_villa-item-features-item">Denize Yakın</p>
                          <p class="F_villa-item-features-item">Kapalı Otopark</p>
                          <p class="F_villa-item-features-item F_villa-item-features-more"><a href=""
                                                                                              class="">Tümünü
                            Gör</a></p>
                        </div>

                      </div>
                      <a href="" class="F_villa-item-show">Villayı İncele</a>
                    </div>
                  </div>
                </div>
                <div class="F_villa-item">
                  <div class="F_villa-item-img ">
                    <div class="swiper-container villa-list-slider">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                        <div class="swiper-slide">
                          <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                               data-src="/cdn/filterimg/villa-list.jpg"
                               data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                        </div>
                      </div>
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                    </div>
                  </div>
                  <div class="F_villa-item-right">
                    <div class="F_villa-item-head">
                      <div class="F_villa-item-head-name">
                        <span>Tesis Kodu</span>
                        <a href="">VKV1020</a>
                        <div class="F_villa-item-head-name-star">
                          <i class="icon-star active"></i>
                          <i class="icon-star active"></i>
                          <i class="icon-star active"></i>
                          <i class="icon-star"></i>
                          <i class="icon-star"></i>
                          <p>4.9</p>
                        </div>
                      </div>
                      <div class="F_villa-item-head-location">
                        <i class="icon-name-location"></i>
                        <div class="F_villa-item-head-location-text">
                          <p>KALKAN
                            <span>Turkey / Antalya</span>
                          </p>
                        </div>
                      </div>
                      <div class="F_villa-item-head-price F_villa-item-head-price-promotion">
                        <div class="F_villa-item-head-price-in">
                          <b>9.220₺</b>
                          <p>‘den başlayan fiyatlar</p>
                        </div>

                        <span>GECELİK</span>
                      </div>
                    </div>
                    <div class="F_villa-item-info">
                      <div class="F_villa-item-info-item">
                        <i class="icon-user-new"></i>
                        <span>4 Kişilik</span>
                      </div>
                      <div class="F_villa-item-info-item">
                        <i class="icon-bed-new"></i>
                        <span>2 Yatak Odası</span>
                      </div>
                      <div class="F_villa-item-info-item">
                        <i class="icon-shower-new"></i>
                        <span>2 Banyo</span>
                      </div>
                    </div>
                    <div class="F_villa-item-bottom">
                      <div class="F_villa-item-features">
                        <h6>Öne çıkan özellikleri</h6>
                        <div class="F_villa-item-features-in">
                          <p class="F_villa-item-features-item">Jakuzi</p>
                          <p class="F_villa-item-features-item">Deniz Manzaralı</p>
                          <p class="F_villa-item-features-item">Merkeze Yakın</p>
                          <p class="F_villa-item-features-item">Denize Yakın</p>
                          <p class="F_villa-item-features-item">Kapalı Otopark</p>
                          <p class="F_villa-item-features-item F_villa-item-features-more"><a href=""
                                                                                              class="">Tümünü
                            Gör</a></p>
                        </div>

                      </div>
                      <a href="" class="F_villa-item-show">Villayı İncele</a>
                    </div>
                  </div>
                </div>
              </div>
              <nav aria-label="..." class="my-3">
                <ul class="pagination d-flex flex-wrap justify-content-center align-items-center">
                  <li class="page-item me-2 me-sm-3 mb-1">
                    <a href="#!"
                       class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary bg-theme-light-2">
                      <svg width="7px" height="11px" viewBox="0 0 7 11" version="1.1"
                           xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="VillaListeleme" transform="translate(-860.000000, -2875.000000)"
                             fill="#AFAFB6" fill-rule="nonzero">
                            <g id="Group-27" transform="translate(837.000000, 2861.000000)">
                              <g id="right-arrow-(3)-copy"
                                 transform="translate(26.954957, 19.166042) scale(-1, 1) translate(-26.954957, -19.166042) translate(23.919953, 14.000000)">
                                <path d="M5.9052,4.762884 L1.307292,0.16506 C1.200948,0.058632 1.058988,0 0.90762,0 C0.756252,0 0.614292,0.058632 0.507948,0.16506 L0.169344,0.50358 C-0.050988,0.724164 -0.050988,1.082676 0.169344,1.302924 L4.03032,5.1639 L0.16506,9.02916 C0.058716,9.135588 0,9.277464 0,9.428748 C0,9.5802 0.058716,9.722076 0.16506,9.828588 L0.503664,10.167024 C0.610092,10.273452 0.751968,10.332084 0.903336,10.332084 C1.054704,10.332084 1.196664,10.273452 1.303008,10.167024 L5.9052,5.565 C6.011796,5.458236 6.070344,5.315688 6.07000944,5.164152 C6.070344,5.012028 6.011796,4.869564 5.9052,4.762884 Z"
                                      id="Path"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li class="page-item me-2 me-sm-3 mb-1">
                    <a href="#!"
                       class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">1</a>
                  </li>
                  <li class="page-item me-2 me-sm-3 mb-1" aria-current="page">
                    <a href="#!"
                       class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary active">2</a>
                  </li>
                  <li class="page-item me-2 me-sm-3 mb-1">
                    <a href="#!"
                       class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">3</a>
                  </li>
                  <li class="page-item me-2 me-sm-3 mb-1">
                    <svg width="23px" height="5px" viewBox="0 0 23 5" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="VillaListeleme" transform="translate(-1109.000000, -2877.000000)"
                           fill="#AFAFB6">
                          <g id="Group-27" transform="translate(837.000000, 2861.000000)">
                            <g id="Group-16" transform="translate(272.000000, 16.000000)">
                              <circle id="Oval" cx="2.5" cy="2.5" r="2.5"></circle>
                              <circle id="Oval-Copy" cx="11.5" cy="2.5" r="2.5"></circle>
                              <circle id="Oval-Copy-2" cx="20.5" cy="2.5" r="2.5"></circle>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </li>
                  <li class="page-item me-2 me-sm-3 mb-1">
                    <a href="#!"
                       class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">14</a>
                  </li>
                  <li class="page-item me-2 me-sm-3 mb-1" aria-current="page">
                    <a href="#!"
                       class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">15</a>
                  </li>
                  <li class="page-item me-2 me-sm-3 mb-1">
                    <a href="#!"
                       class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">16</a>
                  </li>
                  <li class="page-item me-2 me-sm-3 mb-1">
                    <a href="#!"
                       class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary bg-theme-light-2">
                      <svg width="7px" height="11px" viewBox="0 0 7 11" version="1.1"
                           xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="VillaListeleme" transform="translate(-1374.000000, -2875.000000)"
                             fill="#AFAFB6" fill-rule="nonzero">
                            <g id="Group-27" transform="translate(837.000000, 2861.000000)">
                              <g id="Group-19" transform="translate(514.000000, 0.000000)">
                                <g id="right-arrow-(3)"
                                   transform="translate(23.010038, 14.000000)">
                                  <path d="M5.9052,4.762884 L1.307292,0.16506 C1.200948,0.058632 1.058988,0 0.90762,0 C0.756252,0 0.614292,0.058632 0.507948,0.16506 L0.169344,0.50358 C-0.050988,0.724164 -0.050988,1.082676 0.169344,1.302924 L4.03032,5.1639 L0.16506,9.02916 C0.058716,9.135588 0,9.277464 0,9.428748 C0,9.5802 0.058716,9.722076 0.16506,9.828588 L0.503664,10.167024 C0.610092,10.273452 0.751968,10.332084 0.903336,10.332084 C1.054704,10.332084 1.196664,10.273452 1.303008,10.167024 L5.9052,5.565 C6.011796,5.458236 6.070344,5.315688 6.07000944,5.164152 C6.070344,5.012028 6.011796,4.869564 5.9052,4.762884 Z"
                                        id="Path"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

          </div>
        </div>
      </section>

      <section class="List">
        <div class="container">
          <div class="List-in">
            <h3>Fethiye Villa Kiralama </h3>
            <div class="List-img">
              <img src="cdn/img/list.png" alt="">
            </div>
            <div class="List-text">
              <p>İslamlar kiralık villa seçenekleriyle son derece meşhur bir bölgedir. Dört bir yanı zeytin
                ağaçları ile çevrili olan bu şirin köy, Antalya tatilcilerinin her dönem ilgi odağındadır. Villa
                tatili ile doğa tatilini birleştiriyor olması bu ünün altında yatan en önemli nedenlerden
                biridir. Birbirinden güzel kiralık villa seçenekleriyle tatilciler konforlu bir konaklama imkanı
                yakalarlar. Bunun yanı sıra, villalarından dışarıya atacakları bir adım ile kendilerini doğa ile
                iç içe bulurlar.
                Hem lüksün hem de doğanın bir arada olması büyük bir avantajdır. Gün içerisinde doğa yürüyüşleri
                yapılabilir akşamları ise villanın keyfi sürülebilir olur. Tabii ki yaz tatili için gelen
                ziyaretçiler deniz manzaralı villalara daha büyük ilgi duyarlar. Öyle ki, günün her saatini
                denizin etkileyici görüntüsüne karşı yaşarlar. Bir deniz tatili için bu durum hemen hemen herkes
                tarafından istenilen bir durumdur.
                İslamlar bu açıdan da şanslıdır. İslamlar Köyü, çevrede yer alan bir birinden güzel koylara
                yakın mesafededir. Özellikle Kaş’ın kıymetli plajlarından olan Kaputaş ve Patara Plajı,
                İslamlar’a oldukça yakındır. Küçük bir araba yolculuğu ile denizin mükemmel serinliğine kavuşmak
                mümkündür. Antalya yaz sezonunda oldukça sıcak bir yer olduğu için denize yakınlık bu noktada
                ekstra daha önemlidir.
                Antalya’nın sıcak olması İslamlar kiralık villa bakanlar için bazı kategorileri daha da ön plana
                çıkarır. Özellikle denizden çok havuzda vakit geçirmeyi seven tatilciler havuzlu villa arayışına
                girerler. İslamlar havuzlu villalar veya İslamlar kapalı havuzlu villalar bu noktada devreye
                girmektedir. Kapalı havuzlu villalar özellikle sezon dışı dönemlerde tercih edilir. Bu sayede
                kişiler her zaman diledikleri gibi havuz keyfi yapabilirler. Hava soğuk olsa dahi kişiler
                diledikleri gibi havuzlarında yüzebilirler. Açık havuzlu villalar ise yaz tatili eğlencesine
                daha çok eğlence katan niteliktedir. Ailenin tüm üyeleri kendilerine özel olan havuzlarında doya
                doya yüzüp diledikleri gibi serinleyebilirler.</p>
            </div>
          </div>
          <div class="List-sss">
            <h3>Sıkça Sorulan Sorular </h3>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Nasıl rezervasyon yapabilirim ?
                </button>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                     data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi
                      yemeklerinizi pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası
                      hazırlayabilirsiniz.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Accordion Item #2
                </button>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                     data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi
                      yemeklerinizi pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası
                      hazırlayabilirsiniz.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Accordion Item #3
                </button>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                     data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi
                      yemeklerinizi pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası
                      hazırlayabilirsiniz.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <section class="newsletter-section position-relative">
      <div class="container-wide">
        <div class="newsletter bg-theme-first-dark rounded-xl position-relative overflow-hidden py-4 py-sm-5">
          <img src="/cdn/img/spacer.gif" data-src="/cdn/uploads/newsletter-bg.png" alt="newsletter background" class="newsletter-bg lazy cover position-absolute top-0 start-0 w-100 h-100">
          <div class="container position-relative d-flex flex-wrap py-xl-4 my-lg-2">
            <div class="col-12 col-lg-4 mb-lg-0 mb-3 px-lg-0 px-3">
              <div class="caption d-flex flex-column">
                <strong class="fs-3 fw-normal text-white ls-05 lh-sm mb-1">e-Bülten’e kayıt olun</strong>
                <p class="fs-6 fw-normal ls-05 lh-sm mb-0">Erken rezervasyon fırsatlarından <br> indirimli otel ve villalardan ilk siz haberdar olun!</p>
              </div>
            </div>
            <div class="col-12 col-sm-7 col-lg-5 ps-3 pe-3 pe-lg-5 mb-sm-0 mb-3">
              <form action="" class="d-flex align-items-end h-100">
                <div class="newsletter-register w-100 d-flex align-items-center border-bottom pb-3">
                  <input type="text" name="newsletter-register" class="bg-transparent text-white w-100 ps-3" placeholder="e-Posta Adresiniz">
                  <button type="button" class="bg-transparent flex-shrink-0 px-2 py-1">
                    <i class="icon-plus-1 text-theme-second"></i>
                  </button>
                </div>
              </form>
            </div>
            <div class="col-12 col-sm-5 col-lg-3 px-sm-0 px-3">
              <ul class="social-media h-100 d-flex align-items-center justify-content-sm-center justify-content-lg-end w-100">
                <li class="me-3 pe-md-1">
                  <a href="https://www.facebook.com" class="social-link btn btn-theme-first-dark bg-black bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center text-center facebook">
                    <i class="icon-facebook"></i>
                  </a>
                </li>
                <li class="me-3 pe-md-1">
                  <a href="https://www.twitter.com" class="social-link btn btn-theme-first-dark bg-black bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center text-center facebook">
                    <i class="icon-twitter"></i>
                  </a>
                </li>
                <li class="me-3 pe-md-1">
                  <a href="https://www.instagram.com" class="social-link btn btn-theme-first-dark bg-black bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center text-center facebook">
                    <i class="icon-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer bg-theme-first">
      <section class="footer-top-section text-white">
        <div class="container">
          <div class="footer-top d-flex flex-wrap flex-lg-nowrap">
            <div class="ft-item flex-fill d-flex align-items-center justify-content-sm-center justify-content-lg-start py-4 py-sm-2 py-lg-4 pe-2 order-sm-1 order-2">
              <svg class="flex-shrink-0 me-1" width="31px" height="31px" viewBox="0 0 31 31" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="anasayfa" transform="translate(-371.000000, -3815.000000)" fill="#f5841f"
                     fill-rule="nonzero">
                    <g id="phone-call" transform="translate(371.000000, 3815.000000)">
                      <path d="M29.31,8.85 C28.056,6.192 26.07,3.96 23.568,2.394 C20.088,0.222 15.966,-0.468 11.97,0.456 C7.974,1.374 4.572,3.798 2.4,7.278 C0.222,10.758 -0.468,14.874 0.456,18.876 C1.38,22.878 3.804,26.274 7.278,28.446 C9.726,29.976 12.534,30.786 15.408,30.786 L15.594,30.786 C18.456,30.75 21.24,29.922 23.652,28.398 C24.354,27.954 24.558,27.03 24.114,26.328 C23.67,25.626 22.746,25.422 22.044,25.866 C20.106,27.096 17.862,27.762 15.558,27.792 C13.194,27.822 10.884,27.168 8.868,25.914 C3.09,22.29 1.326,14.646 4.944,8.868 C6.696,6.066 9.432,4.116 12.648,3.378 C15.864,2.634 19.176,3.192 21.978,4.944 C23.994,6.204 25.59,7.998 26.598,10.134 C27.582,12.216 27.966,14.526 27.708,16.806 C27.618,17.628 28.206,18.372 29.034,18.462 C29.856,18.552 30.6,17.964 30.69,17.136 C31.008,14.304 30.528,11.436 29.31,8.85 L29.31,8.85 Z"
                            id="Path"></path>
                      <path d="M12.774,9.132 C12.186,8.544 11.238,8.544 10.65,9.132 C9.834,9.948 9.33,11.034 9.24,12.192 C9.15,13.35 9.48,14.502 10.164,15.432 C11.724,17.55 13.59,19.416 15.708,20.976 C16.542,21.588 17.544,21.918 18.57,21.918 C18.696,21.918 18.822,21.912 18.948,21.906 C20.1,21.816 21.186,21.318 22.008,20.496 C22.596,19.908 22.596,18.96 22.008,18.372 C21.42,17.784 20.472,17.784 19.884,18.372 C19.242,19.014 18.21,19.098 17.484,18.564 C15.612,17.184 13.962,15.534 12.582,13.662 C12.048,12.936 12.126,11.904 12.774,11.262 C13.362,10.668 13.362,9.714 12.774,9.132 L12.774,9.132 Z"
                            id="Path"></path>
                    </g>
                  </g>
                </g>
              </svg>
              <div class="d-flex flex-column lh-1 ls-05">
                <span class="fs-8 opacity-50 ls-1">Yardım / Destek</span>
                <a href="tel:444 8 484" class="fs-5-5 fw-normal">444 8 484</a>
              </div>
            </div>
            <div class="ft-item flex-fill ls-05 d-flex flex-column justify-content-center align-items-sm-center text-sm-center py-4 py-sm-2 py-lg-4 px-2 order-lg-2 order-3">
              <span class="text-theme-second">İş Birliği için</span>
              <a href="mailto:info@otelbnb.com" class="underline-hover">info@otelbnb.com</a>
            </div>
            <div class="ft-item flex-fill ls-05 d-flex flex-column justify-content-center align-items-sm-center text-sm-center py-4 py-sm-2 py-lg-4 px-2 order-lg-2 order-4">
              <span class="text-theme-second">Merkez</span>
              <strong class="fw-normal">Kalkan Mah. Cumhuriyet Cd. No:48/2 - Kaş/Antalya</strong>
            </div>
            <div class="ft-item flex-fill ls-05 text-sm-center text-lg-end py-4 py-sm-2 py-lg-4 ps-2 order-lg-last order-sm-2 order-1">
              <a href="index.php" class="d-inline-block footer-logo">
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="footer-body bg-white pt-5">
        <div class="container pt-lg-4 pb-4">
          <div class="row pt-2 pb-2">
            <div class="col-6 col-md-4 col-lg-3 pe-4 mb-lg-0 mb-4">
              <div class="menu-title fs-6 fw-medium text-theme-primary lh-lg ls-05 mb-3 pb-1">OtelBnb</div>
              <ul class="footer-menu ls-05 text-black text-opacity-50 fw-medium">
                <li><a href="#!" class="d-block py-1 mb-2">Gizlilik Şartları</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">İptal Şartları</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Banka Hesapları</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Kiralama Sözleşmesi</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Hakkımızda</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Sıkça Sorulan Sorular</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Bize Ulaşın</a></li>
              </ul>
            </div>
            <div class="col-6 col-md-4 col-lg-2 ps-0 mb-lg-0 mb-4">
              <div class="menu-title fs-6 fw-medium text-theme-primary lh-lg ls-05 mb-3 pb-1">Popüler Rotalar
              </div>
              <ul class="footer-menu ls-05 text-black text-opacity-50 fw-medium">
                <li><a href="#!" class="d-block py-1 mb-2">Marmaris</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Fethiye</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Kaş</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Kalkan</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Göcek</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Bodrum</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Dalyan</a></li>
              </ul>
            </div>
            <div class="col-6 col-md-4 col-lg-2 mb-lg-0 mb-4">
              <div class="menu-title fs-6 fw-medium text-theme-primary lh-lg ls-05 mb-3 pb-1">Oteller</div>
              <ul class="footer-menu ls-05 text-black text-opacity-50 fw-medium">
                <li><a href="#!" class="d-block py-1 mb-2">Antalya Otelleri</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Ege Otelleri</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Muğla Otelleri</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Şehir Otelleri</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Fethiye Otelleri</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Marmaris Otelleri</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Kış Tatil Otelleri</a></li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-lg-0 mb-4">
              <div class="menu-title fs-6 fw-medium text-theme-primary lh-lg ls-05 mb-3 pb-1">Villa Kategorileri
              </div>
              <ul class="footer-menu ls-05 text-black text-opacity-50 fw-medium">
                <li><a href="#!" class="d-block py-1 mb-2">Muhafazakar Villa</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Deniz Manzaralı Villa</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Jakuzili Villa</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Balayı Villası</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">2022 Villaları</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Çocuk Havuzlu Villalar</a></li>
                <li><a href="#!" class="d-block py-1 mb-2">Ekonomik Villalar</a></li>
              </ul>
            </div>
            <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-lg-end ps-md-4">
              <div class="footer-banner bg-light rounded-xl d-inline-block position-relative w-100">
                <img src="/cdn/img/tools/footer-banner.jpg" width="265" height="335" alt="footer banner"
                     class="banner lazy cover rounded-xl w-100">
                <div class="caption d-flex flex-column justify-content-center pt-5 ps-4 pe-5 position-absolute top-0 start-0">
                  <i class="footer-banner-logo"></i>
                  <span class="fs-4 lh-sm ls-05 text-white d-block pe-3">ile yazlar sıcak ve eğlenceli</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="footer-cards bg-white border-top border-theme-light-2 py-4 py-sm-5">
        <div class="container d-flex flex-wrap align-items-center">
          <div class="text-secondary d-flex align-items-center lh-sm ls-05 me-auto py-1 mb-md-0 mb-2">
                <span>OtelBnb <a href="https://www.tursab.org.tr/" target="blank" class="text-primary"><u>Türsab</u></a> ve <a
                  href="https://www.eticaret.gov.tr/" target="blank" class="text-primary"><u>Etbis</u></a> kayıtlı olup bir wings iştirakidir.</span>
          </div>
          <div class="cards d-flex me-4 pe-2 mb-md-0 mb-3">
            <img src="/cdn/img/spacer.gif" data-src="/cdn/img/tools/Discover-card-dark.svg" width="50" height="30"
                 alt="discover card" class="lazy contain flex-shrink-0 me-2">
            <img src="/cdn/img/spacer.gif" data-src="/cdn/img/tools/Maestro-card-dark.svg" width="50" height="30"
                 alt="discover card" class="lazy contain flex-shrink-0 me-2">
            <img src="/cdn/img/spacer.gif" data-src="/cdn/img/tools/Visa-card-dark.svg" width="50" height="30"
                 alt="discover card" class="lazy contain flex-shrink-0 me-2">
            <img src="/cdn/img/spacer.gif" data-src="/cdn/img/tools/Mastercard-dark.svg" width="50" height="30"
                 alt="discover card" class="lazy contain flex-shrink-0 me-2">
            <img src="/cdn/img/spacer.gif" data-src="/cdn/img/tools/Americanexpress-card-dark.svg" width="50"
                 height="30" alt="discover card" class="lazy contain flex-shrink-0 me-2">
          </div>
          <img src="/cdn/img/spacer.gif" data-src="/cdn/img/tools/comodo-ssl-certificate.svg" width="108"
               height="34" alt="" class="lazy contain">
        </div>
      </section>
      <section class="footer-map-section">
        <div class="map w-100" id="contactMap" data-id="contactMap" data-lat="36.67416043629058"
             data-lng="29.100266338322857"></div>
      </section>
      <section class="footer-bottom bg-theme-light-2 text-secondary ls-05 py-3 py-sm-4">
        <div class="container d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1">
            <span class="fs-8 d-block mb-sm-0 mb-2">© 2021 Otelbnb.com Turizm ve Seyehat Ltd. Şti. Tüm hakları saklıdır - <a
              href="#!"><u>Gizlilik Politikası</u></a> ve <a href="#!"><u>Rezervasyon Koşulları</u></a></span>
          <a href="https://www.wings.com.tr/" target="blank" class="wings flex-shrink-0">
            <img src="/cdn/img/tools/wings.svg" width="65" height="24" alt="" class="contain">
          </a>
        </div>
      </section>
    </footer>

    <div class="caleran-tooltip-form">
      <div class="caleran-tooltip-arrow-form"></div>
      <div class="caleran-tooltip-content-form">Check-in</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "default",
}
</script>

<style scoped>
/*@import '~/static/cdn/fonts/sf-pro/stylesheet.css';
@import '~/static/cdn/css/custom-bootstrap.min.css';
@import '~/static/cdn/css/jquery/bootstrap-select.min.css';
@import '~/static/cdn/css/jquery/swiper.css';
@import '~/static/cdn/css/jquery/jquery-ui.min.css';
@import '~/static/cdn/css/jquery/caleran.min.css';
@import '~/static/cdn/css/main.min.css';
@import '~/static/cdn/css/theme.min.css';
@import '~/static/cdn/css/jquery/ion.rangeSlider.min.css';
@import '~/static/cdn/css/jquery/intlTelInput.min.css';
@import '~/static/cdn/css/listeleme.min.css';*/
</style>
