<template>
    <div>
      <client-only>
        <search-bar :key="$route.path"></search-bar>
      </client-only>
        <section class="blog-section">
            <div class="container">
                <div class="blog ">
                    <div class="blog-list-item bg-light area1">
                        <div class="swiper blog-carousel w-100 h-100 position-relative">
                            <div class="swiper-wrapper d-flex">
                                <div class="swiper-slide">
                                    <a href="/" class="blog-item position-relative d-block w-100 h-100  overflow-hidden">
                                        <img src="/img/otel-sl.jpg" width="781" height="380" alt="blog-image"
                                            class="item-image lazy cover w-100 ">
                                        <div
                                            class="slide-caption text-white position-absolute bottom-0 start-0 d-flex flex-column align-items-start ps-4 pe-5 pb-4 ms-sm-3 me-sm-4 mb-sm-3">
                                            <h4 class="">En sevdiğiniz rezervasyon sitelerindeki fırsatlar; Hepsi tek yerde.
                                            </h4>
                                            <p class="">Şehir, belirli bir otel veya ünlü bir yer aramayı deneyin!</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="/" class="blog-item position-relative d-block w-100 h-100  overflow-hidden">
                                        <img src="/img/otel-sl.jpg" width="781" height="380" alt="blog-image"
                                            class="item-image lazy cover w-100 ">
                                        <div
                                            class="slide-caption text-white position-absolute bottom-0 start-0 d-flex flex-column align-items-start ps-4 pe-5 pb-4 ms-sm-3 me-sm-4 mb-sm-3">
                                            <h4 class="">En sevdiğiniz rezervasyon sitelerindeki fırsatlar; Hepsi tek yerde.
                                            </h4>
                                            <p class="">Şehir, belirli bir otel veya ünlü bir yer aramayı deneyin!</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="/" class="blog-item position-relative d-block w-100 h-100  overflow-hidden">
                                        <img src="/img/otel-sl.jpg" width="781" height="380" alt="blog-image"
                                            class="item-image lazy cover w-100 ">
                                        <div
                                            class="slide-caption text-white position-absolute bottom-0 start-0 d-flex flex-column align-items-start ps-4 pe-5 pb-4 ms-sm-3 me-sm-4 mb-sm-3">
                                            <h4 class="">En sevdiğiniz rezervasyon sitelerindeki fırsatlar; Hepsi tek yerde.
                                            </h4>
                                            <p class="">Şehir, belirli bir otel veya ünlü bir yer aramayı deneyin!</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-pagination blog-pagination"></div>
                        </div>
                    </div>
                    <div class="blog-list-item bg-light area2">
                        <a href="/" class="blog-item position-relative d-block w-100 h-100">
                            <img src="/img/otel-sl2.jpg" width="402" height="182" alt="blog-image" class="lazy cover w-100">
                            <div class="blog-item-text">
                                <h4 class="blog-item-sm-title">Lüks villalarda </h4>
                                <p class="blog-item-sm-text">tatil deneyimi yaşa</p>
                            </div>
                        </a>
                    </div>
                    <div class="blog-list-item bg-light area3">
                        <a href="/" class="blog-item position-relative d-block w-100 h-100">
                            <img src="/uploads/blog-image3.jpg" width="402" height="182" alt="blog-image"
                                class="lazy cover w-100">
                            <div class="blog-item-text">
                                <h4 class="blog-item-sm-title">Yazın tatili fırsatlarını</h4>
                                <p class="blog-item-sm-text">Erken rezervasyon otelleriyle değerlendir</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="popular-section-otel bg-white overflow-hidden pb-sm-5 mt-5">
            <div class="container ">
                <div class="section-caption d-flex align-items-center mb-3 pb-1">
                    <i class="icon-otel-discover"></i>
                    <h4 class="primary-title fw-medium ls-05 lh-1">
                        Otelleri
                        <span>keşfedin</span>
                    </h4>
                    <a href=""
                        class="btn btn-theme-second fs-7 lh-sm fw-medium ls-05 rounded-pill py-3 mb-2 ms-auto btn-more">
                        <span class="d-block py-1 px-3">Tümünü Gör</span>
                    </a>
                </div>
                <ul class="otel-pills nav nav-pills mb-3" id="otel-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="otel-tab" data-bs-toggle="pill" data-bs-target="#otel"
                            type="button" role="tab" aria-selected="true">Kaş <span>Otelleri</span></button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="otel-tab2" data-bs-toggle="pill" data-bs-target="#otel2" type="button"
                            role="tab" aria-selected="false">Fethiye <span>Otelleri</span></button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="otel-tab3" data-bs-toggle="pill" data-bs-target="#otel3" type="button"
                            role="tab" aria-selected="false">Muğla <span>Otelleri</span></button>
                    </li>
                </ul>
                <div class="tab-content" id="otel-tabContent">
                    <div class="tab-pane fade show active" id="otel" role="tabpanel" aria-labelledby="otel-tab">
                        <div class="swiper list-slide-otel">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item, index) in 10" :key="index">
                                    <nuxt-link to="" class="O_Card">
                                        <div class="O_Card-in">
                                            <div class="O_Card-img">
                                                <img src="/img/otel-list.png" alt="">
                                                <div class="O_Card-img-text" style="background-color: #5d91c1;">
                                                    <span>9,5/10</span>
                                                </div>
                                            </div>
                                            <div class="O_Card-content">
                                                <div class="O_Card-content-head">
                                                    <b>Pera Palace Hotel</b>
                                                    <small>Ankara,Türkiye</small>
                                                </div>
                                                <div class="O_Card-content-in">
                                                    <div class="O_Card-content-price">
                                                        <p><b>300</b><span><u>TL</u>/Gecelik</span></p>
                                                        <p>Başlayan Fiyatlar</p>
                                                    </div>
                                                    <nuxt-link to="/" class="O_Card-content-link">
                                                        <i class="icon-right-arrows-new"></i>
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                        </div>
                                    </nuxt-link>
                                </div>
                            </div>
                            <!-- If pagination is needed -->

                            <!-- If navigation buttons are needed -->
                            <!-- <div class="swiper-pagination"></div> -->
                            <!-- <div class="swiper-button-prev list-navigation-prev"></div> -->
                            <!-- <div class="swiper-button-next list-navigation-next"></div> -->
                        </div>
                    </div>
                    <div class="tab-pane fade" id="otel2" role="tabpanel" aria-labelledby="otel-tab2">
                        <div class="swiper list-slide-otel">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item, index) in 10" :key="index">
                                    <nuxt-link to="" class="O_Card">
                                        <div class="O_Card-in">
                                            <div class="O_Card-img">
                                                <img src="/img/otel-list.png" alt="">
                                                <div class="O_Card-img-text" style="background-color: #5d91c1;">
                                                    <span>9,5/10</span>
                                                </div>
                                            </div>
                                            <div class="O_Card-content">
                                                <div class="O_Card-content-head">
                                                    <b>Pera Palace Hotel</b>
                                                    <small>Ankara,Türkiye</small>
                                                </div>
                                                <div class="O_Card-content-in">
                                                    <div class="O_Card-content-price">
                                                        <p><b>300</b><span><u>TL</u>/Gecelik</span></p>
                                                        <p>Başlayan Fiyatlar</p>
                                                    </div>
                                                    <nuxt-link to="/" class="O_Card-content-link">
                                                        <i class="icon-right-arrows-new"></i>
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                        </div>
                                    </nuxt-link>
                                </div>
                            </div>
                            <!-- If pagination is needed -->

                            <!-- If navigation buttons are needed -->
                            <!-- <div class="swiper-button-prev list-navigation-prev"></div> -->
                            <!-- <div class="swiper-button-next list-navigation-next"></div> -->
                        </div>
                    </div>
                    <div class="tab-pane fade" id="otel3" role="tabpanel" aria-labelledby="otel-tab3">
                        <div class="swiper list-slide-otel">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item, index) in 10" :key="index">
                                    <nuxt-link to="" class="O_Card">
                                        <div class="O_Card-in">
                                            <div class="O_Card-img">
                                                <img src="/img/otel-list.png" alt="">
                                                <div class="O_Card-img-text" style="background-color: #5d91c1;">
                                                    <span>9,5/10</span>
                                                </div>
                                            </div>
                                            <div class="O_Card-content">
                                                <div class="O_Card-content-head">
                                                    <b>Pera Palace Hotel</b>
                                                    <small>Ankara,Türkiye</small>
                                                </div>
                                                <div class="O_Card-content-in">
                                                    <div class="O_Card-content-price">
                                                        <p><b>300</b><span><u>TL</u>/Gecelik</span></p>
                                                        <p>Başlayan Fiyatlar</p>
                                                    </div>
                                                    <nuxt-link to="/" class="O_Card-content-link">
                                                        <i class="icon-right-arrows-new"></i>
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                        </div>
                                    </nuxt-link>
                                </div>
                            </div>
                            <!-- If pagination is needed -->

                            <!-- If navigation buttons are needed -->
                            <!-- <div class="swiper-button-prev list-navigation-prev"></div> -->
                            <!-- <div class="swiper-button-next list-navigation-next"></div> -->
                        </div>
                    </div>
                </div>


            </div>
        </section>

        <section class="Areas">
            <div class="container">
                <div class="Areas-in">
                    <h3>Bölgelere göre</h3>
                    <h2><b>Konaklama</b> Seçeneklerine gözat</h2>
                    <div class="Areas-otel">
                        <div class="Areas-otel-item">
                            <div class="Areas-otel-item-in">
                                <h4><b>Yurtiçi</b> Otelleri</h4>
                                <div class="Areas-otel-item-list">
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/antalya.jpg" width="172" height="114"></nuxt-img>
                                        <span>Antalya Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/side.jpg" width="172" height="114"></nuxt-img>
                                        <span>Side Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/kemer.jpg" width="172" height="114"></nuxt-img>
                                        <span>Kemer Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/bodrum.jpg" width="172" height="114"></nuxt-img>
                                        <span>Bodrum Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/marmaris.jpg" width="172" height="114"></nuxt-img>
                                        <span>Marmaris Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/alanya.jpg" width="172" height="114"></nuxt-img>
                                        <span>Alanya Otelleri</span>
                                    </nuxt-link>
                                </div>
                            </div>
                            <div class="Areas-otel-item-bottom">
                                <nuxt-link to="/">Tüm Yurtiçi Otelleri Keşfedin <i class="icon-right-arrows-new"></i></nuxt-link>
                            </div>
                        </div>
                        <div class="Areas-otel-item">
                            <div class="Areas-otel-item-in">
                                <h4><b>Yurtiçi</b> Otelleri</h4>
                                <div class="Areas-otel-item-list">
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/antalya.jpg" width="172" height="114"></nuxt-img>
                                        <span>Antalya Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/side.jpg" width="172" height="114"></nuxt-img>
                                        <span>Side Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/kemer.jpg" width="172" height="114"></nuxt-img>
                                        <span>Kemer Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/bodrum.jpg" width="172" height="114"></nuxt-img>
                                        <span>Bodrum Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/marmaris.jpg" width="172" height="114"></nuxt-img>
                                        <span>Marmaris Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/alanya.jpg" width="172" height="114"></nuxt-img>
                                        <span>Alanya Otelleri</span>
                                    </nuxt-link>
                                </div>
                            </div>
                            <div class="Areas-otel-item-bottom">
                                <nuxt-link to="/">Tüm Yurtiçi Otelleri Keşfedin <i class="icon-right-arrows-new"></i></nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="Areas-slider">
                        <div class="Areas-slider-head">
                            <h4><b>Konaklama</b> Seçenekleri</h4>
                            <div class="swiper-pagination Areas-slider-pagination"></div>
                        </div>
                        <div
                            class="swiper popular list-slide list-slide-opportunity list-wrapper scroll-wrapper mb-3 mb-sm-4 pb-1">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <nuxt-link to="/" class="Areas-slider-item">
                                        <nuxt-img src="/img/otel/doga.jpg" width="192" height="121"></nuxt-img>
                                        <span>Doğa Otelleri</span>
                                    </nuxt-link>
                                </div>
                                <div class="swiper-slide">
                                    <nuxt-link to="/" class="Areas-slider-item">
                                        <nuxt-img src="/img/otel/doga2.jpg" width="192" height="121"></nuxt-img>
                                        <span>Doğa Otelleri</span>
                                    </nuxt-link>
                                </div>
                                <div class="swiper-slide">
                                    <nuxt-link to="/" class="Areas-slider-item">
                                        <nuxt-img src="/img/otel/doga3.jpg" width="192" height="121"></nuxt-img>
                                        <span>Doğa Otelleri</span>
                                    </nuxt-link>
                                </div>
                                <div class="swiper-slide">
                                    <nuxt-link to="/" class="Areas-slider-item">
                                        <nuxt-img src="/img/otel/doga.jpg" width="192" height="121"></nuxt-img>
                                        <span>Doğa Otelleri</span>
                                    </nuxt-link>
                                </div>
                                <div class="swiper-slide">
                                    <nuxt-link to="/" class="Areas-slider-item">
                                        <nuxt-img src="/img/otel/doga2.jpg" width="192" height="121"></nuxt-img>
                                        <span>Doğa Otelleri</span>
                                    </nuxt-link>
                                </div>
                                <div class="swiper-slide">
                                    <nuxt-link to="/" class="Areas-slider-item">
                                        <nuxt-img src="/img/otel/doga3.jpg" width="192" height="121"></nuxt-img>
                                        <span>Doğa Otelleri</span>
                                    </nuxt-link>
                                </div>
                                <div class="swiper-slide">
                                    <nuxt-link to="/" class="Areas-slider-item">
                                        <nuxt-img src="/img/otel/doga.jpg" width="192" height="121"></nuxt-img>
                                        <span>Doğa Otelleri</span>
                                    </nuxt-link>
                                </div>
                                <div class="swiper-slide">
                                    <nuxt-link to="/" class="Areas-slider-item">
                                        <nuxt-img src="/img/otel/doga2.jpg" width="192" height="121"></nuxt-img>
                                        <span>Doğa Otelleri</span>
                                    </nuxt-link>
                                </div>
                                <div class="swiper-slide">
                                    <nuxt-link to="/" class="Areas-slider-item">
                                        <nuxt-img src="/img/otel/doga3.jpg" width="192" height="121"></nuxt-img>
                                        <span>Doğa Otelleri</span>
                                    </nuxt-link>
                                </div>
                            </div>
                            <!-- If pagination is needed -->

                            <!-- If navigation buttons are needed -->

                            <div class="swiper-button-prev list-navigation-prev"></div>
                            <div class="swiper-button-next list-navigation-next"></div>
                        </div>
                    </div>
                    <div class="Areas-otel">
                        <div class="section-caption d-flex align-items-center mb-3 pb-1 w-100">
                            <i class="icon-otel-discover"></i>
                            <h4 class="primary-title fw-medium ls-05 lh-1">
                                Otelleri
                                <span>keşfedin</span>
                            </h4>
                        </div>
                        <div class="Areas-otel-item">
                            <div class="Areas-otel-item-in">
                                <h4><b>Yurtiçi</b> Otelleri</h4>
                                <div class="Areas-otel-item-list">
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/antalya.jpg" width="172" height="114"></nuxt-img>
                                        <span>Antalya Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/side.jpg" width="172" height="114"></nuxt-img>
                                        <span>Side Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/kemer.jpg" width="172" height="114"></nuxt-img>
                                        <span>Kemer Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/bodrum.jpg" width="172" height="114"></nuxt-img>
                                        <span>Bodrum Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/marmaris.jpg" width="172" height="114"></nuxt-img>
                                        <span>Marmaris Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/alanya.jpg" width="172" height="114"></nuxt-img>
                                        <span>Alanya Otelleri</span>
                                    </nuxt-link>
                                </div>
                            </div>
                            <div class="Areas-otel-item-bottom">
                                <nuxt-link to="/">Tüm Yurtiçi Otelleri Keşfedin <i class="icon-right-arrows-new"></i></nuxt-link>
                            </div>
                        </div>
                        <div class="Areas-otel-item">
                            <div class="Areas-otel-item-in">
                                <h4><b>Yurtiçi</b> Otelleri</h4>
                                <div class="Areas-otel-item-list">
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/antalya.jpg" width="172" height="114"></nuxt-img>
                                        <span>Antalya Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/side.jpg" width="172" height="114"></nuxt-img>
                                        <span>Side Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/kemer.jpg" width="172" height="114"></nuxt-img>
                                        <span>Kemer Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/bodrum.jpg" width="172" height="114"></nuxt-img>
                                        <span>Bodrum Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/marmaris.jpg" width="172" height="114"></nuxt-img>
                                        <span>Marmaris Otelleri</span>
                                    </nuxt-link>
                                    <nuxt-link to="/" class="Areas-otel-item-list-item">
                                        <nuxt-img src="/img/otel/alanya.jpg" width="172" height="114"></nuxt-img>
                                        <span>Alanya Otelleri</span>
                                    </nuxt-link>
                                </div>
                            </div>
                            <div class="Areas-otel-item-bottom">
                                <nuxt-link to="/">Tüm Yurtiçi Otelleri Keşfedin <i class="icon-right-arrows-new"></i></nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="Areas-text">
            <div class="container">
                <div class="Areas-text-in">
                    <h5>Yurt İçinde Konaklama</h5>

                    <p>Jolly yurt içi tatillerinizin kusursuz geçmesi için yüzlerce farklı konsepte otel seçenekleri
                        oluşturarak ihtiyaçlarınızı kolay bir şekilde bulmanızı sağlıyor. Otel çeşitlilikleri sayesinde
                        tatil zevkinize uygun işletmeler hakkında kolayca bilgi sahibi olabiliyorsunuz. Her bölgede ayrı
                        ayrı listelenen oteller kendi içlerinde verdikleri hizmetlere, temalara ve bütçelere göre ayrılıyor.
                        Dilediğiniz oteli bulmanız konusunda örnek vermek gerekirse, termal tatil yapmak istediğinizi
                        varsayalım. Gitmek istediğiniz bölge ise Bursa olsun. Bursa Otelleri sayfasından termal otelleri
                        seçerek Bursa’daki bütün termal otelleri görebilirsiniz. Aynı zamanda Spa & Wellness hizmeti de
                        almak istiyorsanız yine aynı sayfada verilen hizmetler bölümünden Spa & Wellness seçeneğini
                        tıklayarak bütün ihtiyaçlarınıza yönelik otelleri görebilirsiniz. Aynı sayfada saniyeler içinde
                        dilediğiniz tatili bulabilir Jolly ayrıcalığı ile uygun fiyatlardan yararlanabilirsiniz.</p>

                    <h5>Yurt Dışında Konaklama</h5>
                    <p>Yurtdışı tatil planları çoğu tatil sever için zorlu süreçleri olan bir durum gibi gözükebilir. Jolly
                        bütün bu zorlukları sizler için kolaylaştırıyor. Dünya’nın hemen hemen her bölgesinde sunduğu
                        konaklama seçenekleri ile aradığınız yurt dışı tatilini kolay bir şekilde bulmanızı sağlıyor.
                        Oluşturduğu yurt dışı otel listelemeleri ile daha otelinize varmadan gerekli tüm bilgileri ayrıntılı
                        bir şekilde öğrenmiş oluyorsunuz. Böylece tatil zevkinize uygun otelleri yanılgıya düşmeden tercih
                        edebilirsiniz. Birçok erken rezervasyon yurt dışı otelleri fırsatları ile tatiliniz tahmininizden
                        çok daha uygun bir şekilde gerçekleştirebilirsiniz. Böylece ister Maldivler’de güneşin ve kumun
                        keyfini çıkarın, isterseniz Avrupa’nın sokaklarını aşındırın Jolly tatil seçenekleri ile konforu en
                        uygun şekilde sizlere ulaştırıyor.</p>

                    <h5>Temalarına Göre Oteller</h5>
                    <p>Jolly tatilde ihtiyaç duyacağınız her şeyi ayrıntısına kadar düzenleyip kategorize ediyor. Bu kurulan
                        sistem sayesinde nasıl bir tatil yapmak istiyorsanız dilediğiniz gibi yapabileceğiniz tercihleri
                        önünüze çıkarıyor. Evcil hayvanınızla beraber tatil yapmak istiyorsanız otel temalarından Evcil
                        hayvan dostu otellere tıklayarak saniyeler içinde yüzlerce seçeneğe ulaşabiliyorsunuz. Ailenizle
                        beraber keyifli bir tatil mi yapmak istiyorsunuz bir tıklama ile Aile Otellerine ulaşabilirsiniz. Bu
                        temalar sayesinde Jolly, ziyaretçilerine nokta atışı tatil yapma fırsatı sunuyor. Böylece
                        otellerinize ulaştığınızda hiçbir sorunla karşılaşmadan tatilin keyfini çıkartıyorsunuz.
                        Temalarına Göre Otel Aramak ve Tatil Yapmak İçin Tıklayın!</p>

                    <h5>Erken Rezervasyon Otelleri</h5>
                    <p>Jolly erken rezervasyon otelleri ile tatil yapmak isteyen ziyaretçilerine uygun fiyat avantajı
                        sunuyor. Erken rezervasyon otelleri sayesinde yapmak istediğiniz tatil, sezon fiyatından oldukça
                        düşük fırsatlar ile sizlerle buluşuyor. Planladığınız kar tatili, aylar öncesinden erken rezervasyon
                        seçeneği ile cazip ödeme seçenekleri ve yükse indirim oranlarıyla karşınıza çıkar. Bu sistem
                        yapabileceğiniz en kaliteli tatili en uygun fiyatlarla birleştirerek müşteri memnuniyeti sağlar.
                        Erken Rezervasyon Otellerinde Tatil Yapmak İçin Tıklayın!</p>

                    <h5>Aile Otelleri</h5>
                    <p>Aile otelleri, ailenizle beraber nezih işletmelerde gerek doğa ile iç içe gerekse deniz kenarında
                        huzur içinde tatil yapabileceğiniz yerler. Aile otelleri, ailelere yönelik özel hizmetlerle ön plana
                        çıkıyor. Çocuk menüleri, oyun parkları ve bahçeler, çocuk havuzları, animasyon ve eğlence
                        etkinlikleri, akşam yemekleri ile ailenizle beraber tatil keyfinizi kat kat arttırıyor. Aile
                        otellerinde konaklama sadece aileler dahilinde yapılabildiği için sosyal ortam da herkesi memnun
                        edecek düzeyde kalıyor.
                        Aile Otellerinde Tatil Yapmak İçin Tıklayın!</p>
                </div>
            </div>
        </section>

    </div>
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
    head() {
        let site_id = process.env.SITE
        return {
            title: 'Anasayfa',
            meta: [
                { hid: 'description', name: 'description', content: 'anasayfa' },
                { hid: 'keywords', name: 'keywords', content: 'anasayfa1, anasayfa2, anasayfa3' }
            ],
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
    mounted() {
        Swiper.use([Navigation, Pagination])

        const swiper1 = new Swiper(".blog-carousel", {

            direction: "horizontal",
            slidesPerView: 1,
            modules: [Pagination],
            pagination: {
                el: ".blog-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 5000,
            },
            breakpoints: {

                768: {
                    direction: "vertical",
                },

            },
        });
        const swiper2 = new Swiper('.list-slide-otel', {
            slidesPerView: 1.1,
            spaceBetween: 10,
            direction: 'horizontal',
            loop: true,
            observer: true,
            observeParents: true,
            modules: [Navigation, Pagination],
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1199: {
                    slidesPerView: 4,
                },
            },
        })
        const swiper3 = new Swiper('.list-slide-opportunity', {
            slidesPerView: 2,
            spaceBetween: 16,
            direction: 'horizontal',
            loop: true,
            modules: [Navigation, Pagination],
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.Areas-slider-pagination',
                type: 'bullets',
            },
            breakpoints: {
                576: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 4,
                },
                1199: {
                    slidesPerView: 6,
                },
            },
        })
    }

}
</script>
<style scoped>.list-item .list-image {
    width: 100%;
}</style>
