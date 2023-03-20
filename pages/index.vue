<template>
    <div>
        <section class="Banner Banner_lg Banner-back" style="background-image: url(/img/banner.jpg);">
            <div class="container">
                <div class=" Banner_search-text   pos-ab-xy-center ">
                    <h1 class="animated fadeInDown ">KİRALIK VİLLA</h1>
                    <h2 class="animated fadeInDown ">EXCLUSIVE KONFOR</h2>
                    <p class="animated fadeInDown desktop flex-column "><span>Saklı bir cennet…</span>
                        Nefes kesici doğa manzarası, muhteşem plajları, begonvillerin süslediği beyaz badanalı taş
                        evleri ve
                        yıldız yağmuru altındaki teraslarıyla bir Akdeniz rüyası… Huzurun diğer adı: KALKAN
                    </p>
                </div>
            </div>
        </section>
        <section class="popular-section bg-white overflow-hidden pb-sm-5">
            <div class="container ">
                <div class="section-caption d-flex align-items-center mb-3 pb-1">
                    <h4 class="primary-title fw-medium ls-05 lh-1">Popüler Villalara Gözatın</h4>
                    <a href="" class="btn btn-theme-second fs-7 lh-sm fw-medium ls-05 rounded-pill py-3 mb-2 ms-auto">
                        <span class="d-block py-1 px-3">Tümünü Görüntüleyin</span>
                    </a>
                </div>
                <div class="swiper popular list-slide list-slide-first list-wrapper scroll-wrapper mb-3 mb-sm-4 pb-1">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in 10" :key="index">
                            <div class="list-item rounded-xxl">
                                <div class="list-image position-relative">
                                    <a href="#!" class="d-block flex-shrink-0 " id="">
                                        <img src="/uploads/villa-image1.jpg" data-src="." width="280" height="186"
                                            alt="hotel image" class="main-image bg-light lazy cover rounded-xl w-100">
                                    </a>
                                    <div class="position-absolute top-0 end-0 pt-3 mt-1 pe-3">
                                        <a href="javascript:void(0);"
                                            class="fav-btn rounded-circle d-flex align-items-center justify-content-center p-0 "
                                            :class="index == 0 ? 'v-step-0' : ''" onclick="$(this).toggleClass('active')">
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
                                                <span
                                                    class="list-title fs-6 lh-sm fw-medium ls-05 d-block me-2">VKV1020</span>
                                            </div>
                                            <div class="d-flex align-items-center fw-medium text-theme-secondary">
                                                <i class="icon-star"></i>
                                                <span>4,9</span>
                                            </div>
                                        </div>
                                        <div class="item-location d-flex align-items-center text-theme-secondary">
                                            <i class="icon-pin"></i>
                                            <span class="lh-sm d-flex flex-column"><b
                                                    class="text-theme-first">KALKAN</b>Türkiye / Antalya</span>
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
                <!-- <div class="swiper popular list-slide list-slide-first list-wrapper scroll-wrapper mb-3 mb-sm-4 pb-1"
                            :options="swiperOptions">
                            <div class="swiper-slide" v-for="item in 10">
                                <div class="list-item rounded-xxl">
                                    <div class="list-image position-relative">
                                        <a href="#!" class="d-block flex-shrink-0">
                                            <img src="/uploads/villa-image1.jpg" data-src="." width="280" height="186"
                                                alt="hotel image" class="main-image bg-light lazy cover rounded-xl w-100">
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
                                                    <span
                                                        class="list-title fs-6 lh-sm fw-medium ls-05 d-block me-2">VKV1020</span>
                                                </div>
                                                <div class="d-flex align-items-center fw-medium text-theme-secondary">
                                                    <i class="icon-star"></i>
                                                    <span>4,9</span>
                                                </div>
                                            </div>
                                            <div class="item-location d-flex align-items-center text-theme-secondary">
                                                <i class="icon-pin"></i>
                                                <span class="lh-sm d-flex flex-column"><b
                                                        class="text-theme-first">KALKAN</b>Türkiye / Antalya</span>
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
                            <div class="swiper-button-prev list-navigation-prev" slot="button-prev"></div>
                            <div class="swiper-button-next list-navigation-next" slot="button-next"></div>
                        </div>  -->
            </div>
        </section>

        <section class="holiday-banner-section mb-3 pb-4">
            <div class="container">
                <div
                    class="holiday-banner bg-light text-white position-relative rounded-lg overflow-hidden d-flex py-3 py-sm-4 ps-3 ps-sm-4 ps-xl-5 pe-3 pe-sm-4">
                    <img src="/uploads/holiday-banner.jpg" data-src="" alt=""
                        class="banner-image lazy cover flex-shrink-0 position-absolute top-0 start-0 w-100 h-100">
                    <div class="d-flex flex-column position-relative ls-05 pt-3">
                        <span class="fs-5 fw-medium lh-1">+1259 Seçenek ile</span>
                        <span class="fs-5 fw-medium lh-1">Konaklamanın en keyifli halleri</span>
                        <strong class="big-title fw-bold lh-sm d-block mt-n1">OtelBnb’de</strong>
                    </div>
                    <svg class="align-self-end ms-auto" width="33px" height="36px" viewBox="0 0 14 15" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="VillaListeleme" transform="translate(-626.000000, -202.000000)" fill="#ffffff">
                                <g id="Group" transform="translate(626.000000, 202.000000)">
                                    <path
                                        d="M14,13.3334991 C14,14.2539193 13.2166932,15 12.25,15 C11.2836548,15 10.5,14.2539193 10.5,13.3334991 C10.5,12.4130788 11.2836548,11.6666667 12.25,11.6666667 C13.2166932,11.6666667 14,12.4130788 14,13.3334991"
                                        id="Fill-13"></path>
                                    <path
                                        d="M6.12867316,9.20434506 C4.17402549,9.20434506 2.58538231,7.69131915 2.58538231,5.8369566 C2.58538231,3.97534751 4.17402549,2.46257148 6.12867316,2.46257148 C8.07544978,2.46257148 9.66435532,3.97534751 9.66435532,5.8369566 C9.66435532,7.69131915 8.07544978,9.20434506 6.12867316,9.20434506 M6.12867316,0 C2.74122939,0 0,2.61050069 0,5.8369566 C0,9.0559161 2.74122939,11.6666667 6.12867316,11.6666667 C9.50850825,11.6666667 12.25,9.0559161 12.25,5.8369566 C12.25,2.61050069 9.50850825,0 6.12867316,0"
                                        id="Fill-15"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </section>
        <section class=" bg-theme-first overflow-hidden mb-5 pb-sm-5 py-4">
            <div class="container ">
                <div class="section-caption d-flex align-items-center mb-3 pb-1">
                    <h4 class="primary-title fw-medium ls-05 lh-1 text-white">
                        <i class="icon-flame"></i>
                        Popüler Villalara Gözatın
                    </h4>
                    <a href="" class="btn btn-theme-second fs-7 lh-sm fw-medium ls-05 rounded-pill py-3 mb-2 ms-auto">
                        <span class="d-block py-1 px-3">Tümünü Görüntüleyin</span>
                    </a>
                </div>
                <div class="swiper popular list-slide list-slide-firsat list-wrapper scroll-wrapper mb-3 mb-sm-4 pb-1">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="item in 10">
                            <div class="list-item list-item-firsat rounded-xxl">
                                <div class="list-image position-relative">
                                    <a href="#!" class="d-block flex-shrink-0">
                                        <img src="/uploads/villa-image1.jpg" data-src="" width="280" height="186"
                                            alt="hotel image" class="main-image bg-light lazy cover rounded-xl w-100">
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
                                                <span
                                                    class="list-title fs-6 lh-sm fw-medium ls-05 d-block me-2">VKV1020</span>
                                            </div>
                                            <div class="d-flex align-items-center fw-medium text-theme-secondary item-star">
                                                <i class="icon-star"></i>
                                                <span>4,9</span>
                                            </div>
                                        </div>
                                        <div class="item-location d-flex align-items-center text-theme-secondary">
                                            <i class="icon-pin"></i>
                                            <span class="lh-sm d-flex flex-column"><b
                                                    class="text-theme-first">KALKAN</b>Türkiye / Antalya</span>
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
                                    <div class="lh-sm ls-05 mt-1 item-firsat-gece">
                                        <div class="item-firsat-gece-left">
                                            <p><span>10</span>GECE</p>
                                            <p class="item-firsat-gece-left-day">29 ARALIK - 1 OCAK 22</p>
                                        </div>
                                        <span class="item-firsat-gece-price">9.220₺</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-button-prev list-navigation-prev"></div>
                    <div class="swiper-button-next list-navigation-next"></div>
                </div>

            </div>
        </section>
        <section class="categories-section mb-5 pb-sm-4 pb-lg-5">
            <div class="container pb-lg-5">
                <div class="section-caption d-flex align-items-center mb-3 mb-sm-5 pb-sm-1">
                    <h4 class="primary-title fw-medium ls-05 lh-1">Villa Kategorilerine Gözat</h4>
                </div>
                <div class="categories">
                    <a href="#!"
                        class="cat-item no-hover area1 bg-theme-light-2 rounded-sm overflow-hidden position-relative">
                        <img src="/uploads/category-image1.jpg" data-src="" width="380" height="235" alt="category image"
                            class="cat-image lazy cover w-100 h-100">
                        <div
                            class="item-caption text-white d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 px-4 py-4">
                            <div class="d-flex flex-column py-md-2 ps-md-2">
                                <strong class="title fs-5 fw-normal ls-05">Sauna - Hamamlı Villalar</strong>
                                <span class="ls-1">423 seçenek içeriyor</span>
                            </div>
                            <div class="caption-content flex-fill d-flex align-items-end ps-2 pb-2">
                                <div class="btn btn-outline-white fs-6 ls-05 rounded-md py-2 px-3">
                                    <small>Villaları Gör</small>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#!"
                        class="cat-item no-hover area2 bg-theme-light-2 rounded-sm overflow-hidden position-relative">
                        <img src="/uploads/category-image2.jpg" data-src="" width="380" height="235" alt="category image"
                            class="cat-image lazy cover w-100 h-100">
                        <div
                            class="item-caption text-white d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 px-4 py-4">
                            <div class="d-flex flex-column py-md-2 ps-md-2">
                                <strong class="title fs-5 fw-normal ls-05">Özel Havuzlu</strong>
                                <span class="ls-1">423 seçenek içeriyor</span>
                            </div>
                            <div class="caption-content flex-fill d-flex align-items-end ps-2 pb-2">
                                <div class="btn btn-outline-white fs-6 ls-05 rounded-md py-2 px-3">
                                    <small>Villaları Gör</small>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#!"
                        class="cat-item no-hover area3 bg-theme-light-2 rounded-sm overflow-hidden position-relative">
                        <img src="/uploads/category-image3.jpg" data-src="" width="380" height="235" alt="category image"
                            class="cat-image lazy cover w-100 h-100">
                        <div
                            class="item-caption text-white d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 px-4 py-4">
                            <div class="d-flex flex-column py-md-2 ps-md-2">
                                <strong class="title fs-5 fw-normal ls-05">Kış Aylarına Uygun Villalar</strong>
                                <span class="ls-1">423 seçenek içeriyor</span>
                            </div>
                            <div class="caption-content flex-fill d-flex align-items-end ps-2 pb-2">
                                <div class="btn btn-outline-white fs-6 ls-05 rounded-md py-2 px-3">
                                    <small>Villaları Gör</small>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#!"
                        class="cat-item no-hover area4 bg-theme-light-2 rounded-sm overflow-hidden position-relative">
                        <img src="/uploads/category-image4.jpg" data-src="" width="380" height="235" alt="category image"
                            class="cat-image lazy cover w-100 h-100">
                        <div class="ribbon ls-05 position-absolute fw-medium top-0 start-0 px-5 py-1">
                            <small>Yeni Listenenler</small>
                        </div>
                        <div
                            class="item-caption text-white d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 px-4 py-4">
                            <div class="d-flex flex-column py-md-2 ps-md-2">
                                <strong class="title fs-5 fw-normal ls-05">2022 Vilları</strong>
                                <span class="ls-1">423 seçenek içeriyor</span>
                            </div>
                            <div class="caption-content flex-fill d-flex align-items-end ps-2 pb-2">
                                <div class="btn btn-outline-white fs-6 ls-05 rounded-md py-2 px-3">
                                    <small>Villaları Gör</small>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#!"
                        class="cat-item no-hover area5 bg-theme-light-2 rounded-sm overflow-hidden position-relative">
                        <img src="/uploads/category-image5.jpg" data-src="" width="380" height="235" alt="category image"
                            class="cat-image lazy cover w-100 h-100">
                        <div
                            class="item-caption text-white d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 px-4 py-4">
                            <div class="d-flex flex-column py-md-2 ps-md-2">
                                <strong class="title fs-5 fw-normal ls-05">Balayı Villaları</strong>
                                <span class="ls-1">423 seçenek içeriyor</span>
                            </div>
                            <div class="caption-content flex-fill d-flex align-items-end ps-2 pb-2">
                                <div class="btn btn-outline-white fs-6 ls-05 rounded-md py-2 px-3">
                                    <small>Villaları Gör</small>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#!"
                        class="cat-item no-hover area6 bg-theme-light-2 rounded-sm overflow-hidden position-relative">
                        <img src="/uploads/category-image7.jpg" data-src="" width="380" height="235" alt="category image"
                            class="cat-image lazy cover w-100 h-100">
                        <div
                            class="item-caption text-white d-flex flex-column justify-content-end position-absolute top-0 start-0 w-100 h-100 px-4 py-4">
                            <div class="d-flex flex-column py-md-2 ps-md-2">
                                <strong class="title fs-5 fw-normal ls-05">Butik Oteller</strong>
                                <span class="ls-1">423 seçenek içeriyor</span>
                            </div>
                            <div class="caption-content flex-fill d-flex align-items-end ps-2 pb-2">
                                <div class="btn btn-outline-white fs-6 ls-05 rounded-md py-2 px-3">
                                    <small>Villaları Gör</small>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div
                        class="area7 bg-theme-light-2 border border-light rounded-sm overflow-hidden d-flex align-items-center justify-content-center py-5">
                        <a href="#!" class="btn btn-white bg-white btn-ripple fs-7 fw-medium lh-1 rounded-sm py-3 px-4">
                            <span class="d-inline-block px-3 py-1">TÜMÜNÜ GÖR</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="page-description-section mb-5 pb-4 pb-sm-5">
            <div class="container">
                <div class="page-description row">
                    <div
                        class="col-12 col-md-2 col-lg-3 pe-xl-4 text-lg-start text-center mb-lg-0 mb-3 pt-lg-0 pt-2 d-flex">
                        <i class="info-logo"></i>
                    </div>
                    <div class="col-12 col-md-10 col-lg-9 ps-xl-0">
                        <span class="fs-3 ls-05 text-theme-primary d-block mb-3 pb-1 text-md-start text-center">Villakalkan
                            ile yazlar sıcak ve eğlenceli</span>
                        <div class="description text-secondary fs-8 ls-1 lh-sm">
                            <strong class="fs-7 fw-medium text-theme-primary ls-05 d-block mb-2">Ucuz tatil
                                otelleri</strong>
                            <p>
                                Aileniz ya da sevdikleriniz ile beraber tatil denildiği zaman akla öncelikli olarak
                                gelen
                                yerlere gitmek istiyor fakat bu aşamada hayalinizdeki tatile nasıl ulaşabileceğinizi
                                bilemiyorsanız, kiralık villa sizin konu ile alakalı isteklerinizi en iyi şekilde yerine
                                getirecektir. Her ne kadar şimdilerde karşınıza bu konuda size hizmet verdiğini
                                söyleyecek
                                pek çok isim olsa da alanında yeterli deneyime sahip bir firma ile iletişime geçmeniz,
                                sizin
                                isteklerinizin eksiksiz olarak yerine getirilmesi anlamında son derece önemli olacaktır.
                                Villa Kalkan olarak bizler ise tam da bu aşamada devreye giriyor ve sizlere en iyisini
                                sunmayı hedefliyoruz. Portföyümüzde yer alan ve birbirinden farklı lokasyonlarda yer
                                alan
                                villalarımız ile sizlere daha öncesinde yaşamadığınız kadar güzel bir villa tatilini
                                sunuyoruz.
                            </p>
                            <strong class="fs-7 fw-medium text-theme-primary ls-05 d-block mb-2">Tatil villası
                                kirala</strong>
                            <p>
                                Birçok insan tatile gittiği zaman rahatlamak ve keyifli şekilde zamanlarını geçirmek
                                ister.
                                Fakat otellerde bu isteklerini yerine getirmeleri ne yazık ki pek de mümkün
                                olmamaktadır.
                                Siz de bunu biliyor ve bir havuzlu villa kiralayarak kendiniz ve sevdikleriniz için en
                                iyi
                                tatili bulmayı istiyorsanız, villakalkan.com.tr olarak biz sizlere istediklerinizi en
                                etkili
                                şekilde sunuyoruz. Sitemiz üzerinden sizlere sunulmakta olan villaların tamamı,
                                öncesinde
                                yapılmakta olan dikkatli araştırmaların sonrasında sitemize eklenmektedir. Villaların
                                kalitesini ve sahip oldukları özellikleri net bir şekilde incelememiz sonrasında eğer ki
                                bize güvenen kişilere istediklerini sunabileceklerini görebilirsek, bu villalar
                                sistemimizde
                                kendine yer bulmaktadır.
                            </p>
                        </div>
                    </div>
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

export default {
    name: 'IndexPage',
    components: {
        Swiper
    },
    head() {
        let site_id = process.env.SITE
        return {
            title: 'Anasayfa',
            meta: [
                { hid: 'description', name: 'description', content: 'anasayfa' },
                { hid: 'keywords', name: 'keywords', content: 'anasayfa1, anasayfa2, anasayfa3' }
            ],
            link: [
                { rel: 'stylesheet', href: `/css/anasayfa.min.css` }
            ]
        }
    },
    data() {
        return {
            steps: [
                {
                    target: ".v-step-0", // We're using document.querySelector() under the hood
                    content: `Discoverr <strong>Vue Tour</strong>!`
                },
                {
                    target: ".v-step-1",
                    content: "An awesome plugin made with Vue.js!"
                },
                {
                    target: '[data-v-step="2"]',
                    content:
                        "Try it, you'll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.",
                    params: {
                        placement: "top"
                    }
                }
            ]
        }
    },
    // async asyncData({ $getRedisKey }) {
    //     console.log(await $getRedisKey("web:4:pages:deneme"));
    // },
    mounted() {
        console.log(process.env.NODE_ENV);
        console.log(this.$config.message);

        // this.$tours["myTour"].start();

        Swiper.use([Navigation, Pagination])

        const swiper = new Swiper('.list-slide-first', {
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
        const swiper2 = new Swiper('.list-slide-firsat', {
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
    }

}
</script>
<style scoped>
.list-item .list-image {
    width: 100%;
}
</style>
