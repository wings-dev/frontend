<template>
    <div>
        <section class="User">
            <div class="container">
                <div class="User-in">
                    <user-sidebar></user-sidebar>
                    <div class="User-right">
                        <div class="User-right-head">
                            <h2>Rezervasyonlarım</h2>
                            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="last-reservation-tab" data-bs-toggle="pill"
                                        data-bs-target="#last-reservation" type="button" role="tab"
                                        aria-selected="true">GEÇMİŞ DÖNEM</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="new-reservation-tab" data-bs-toggle="pill"
                                        data-bs-target="#new-reservation" type="button" role="tab"
                                        aria-selected="false">GÜNCEL</button>
                                </li>

                            </ul>
                        </div>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="last-reservation" role="tabpanel">
                                <div class="User-reservation-item ">
                                    <div class="User-reservation-item-left">
                                        <div class="User-reservation-item-left-img">
                                            <nuxt-img src="/img/reservation-img.jpg" alt="" loading="lazy" placeholder />

                                            <div class="User-reservation-item-left-img-text">
                                                <div class="User-reservation-item-left-img-text-left">
                                                    <span>Tesis Kodu</span>
                                                    <h4>VKV1020</h4>
                                                </div>
                                                <div class="User-reservation-item-left-img-text-right">
                                                    <i class="icon-pin"></i>
                                                    <p><span>KALKAN</span>Turkey / Antalya</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="User-reservation-item-left-text">
                                            <p class="User-reservation-item-left-text-title">Rezervasyon Sahibi:
                                                <span>Mahmut ERKAL</span>
                                            </p>
                                            <div class="User-reservation-item-left-text-date">
                                                <div class="User-reservation-item-left-text-date-item">
                                                    <div class="date">
                                                        <span>Mar</span>
                                                        <b>01</b>
                                                    </div>
                                                    <div class="User-reservation-item-left-text-date-item-in">
                                                        <h6>Giriş Tarihi</h6>
                                                        <span>2023-03-01</span>
                                                        <p>Çarşamba</p>
                                                    </div>
                                                </div>
                                                <i class="icon-arrow-right-2"></i>
                                                <div class="User-reservation-item-left-text-date-item">
                                                    <div class="date">
                                                        <span>Mar</span>
                                                        <b>05</b>
                                                    </div>
                                                    <div class="User-reservation-item-left-text-date-item-in">
                                                        <h6>Çıkış Tarihi</h6>
                                                        <span>2023-03-05</span>
                                                        <p>Pazartesi</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <p class="User-reservation-item-left-text-user"><i class="icon-user"></i>2
                                                Yetişkin, 0 Çocuk Bebek</p>
                                            <div class="User-reservation-item-left-text-status">
                                                <h5>REZERVASYON DURUMU:</h5>
                                                <span>ONAYLI</span>
                                                <i class="icon-reservation-success"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="User-reservation-item-right">
                                        <div class="User-reservation-item-right-head">
                                            <span>Rezervasyon Kodu</span>
                                            <span>VKV5948110330831</span>
                                        </div>
                                        <div class="User-reservation-item-right-in">
                                            <h6>Özet</h6>
                                            <div class="User-reservation-item-right-in-item">
                                                <span>Toplam Tutar</span>
                                                <span>+ 7.500,00 ₺</span>
                                            </div>
                                            <div class="User-reservation-item-right-in-item">
                                                <span>Ön Ödeme Tutarı </span>
                                                <span>+ 2.500,00 ₺</span>
                                            </div>
                                            <div class="User-reservation-item-right-in-item total">
                                                <span>Kalan Ödeme</span>
                                                <span>+ 5.000,00 ₺</span>
                                            </div>
                                            <p>Villaya girişte nakit ödenecek tutardır. Ayrıca 2000,00 ₺ değerinde hasar
                                                depozitosu alınacaktır.</p>
                                        </div>
                                        <button class="User-reservation-item-right-button">
                                            DETAYLI İNCELE
                                        </button>
                                    </div>
                                </div>
                                <div class="User-reservation-item ">
                                    <div class="User-reservation-item-left">
                                        <div class="User-reservation-item-left-img">
                                            <nuxt-img src="/img/reservation-img.jpg" alt=""/>

                                            <div class="User-reservation-item-left-img-text">
                                                <div class="User-reservation-item-left-img-text-left">
                                                    <span>Tesis Kodu</span>
                                                    <h4>VKV1020</h4>
                                                </div>
                                                <div class="User-reservation-item-left-img-text-right">
                                                    <i class="icon-pin"></i>
                                                    <p><span>KALKAN</span>Turkey / Antalya</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="User-reservation-item-left-text">
                                            <p class="User-reservation-item-left-text-title">Rezervasyon Sahibi:
                                                <span>Mahmut ERKAL</span>
                                            </p>
                                            <div class="User-reservation-item-left-text-date">
                                                <div class="User-reservation-item-left-text-date-item">
                                                    <div class="date">
                                                        <span>Mar</span>
                                                        <b>01</b>
                                                    </div>
                                                    <div class="User-reservation-item-left-text-date-item-in">
                                                        <h6>Giriş Tarihi</h6>
                                                        <span>2023-03-01</span>
                                                        <p>Çarşamba</p>
                                                    </div>
                                                </div>
                                                <i class="icon-arrow-right-2"></i>
                                                <div class="User-reservation-item-left-text-date-item">
                                                    <div class="date">
                                                        <span>Mar</span>
                                                        <b>05</b>
                                                    </div>
                                                    <div class="User-reservation-item-left-text-date-item-in">
                                                        <h6>Çıkış Tarihi</h6>
                                                        <span>2023-03-05</span>
                                                        <p>Pazartesi</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <p class="User-reservation-item-left-text-user"><i class="icon-user"></i>2
                                                Yetişkin, 0 Çocuk Bebek</p>
                                            <div class="User-reservation-item-left-text-status cancel">
                                                <h5>REZERVASYON DURUMU:</h5>
                                                <span>ONAYLI</span>
                                                <i class="icon-reservation-cancel"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="User-reservation-item-right">
                                        <div class="User-reservation-item-right-head">
                                            <span>Rezervasyon Kodu</span>
                                            <span>VKV5948110330831</span>
                                        </div>
                                        <div class="User-reservation-item-right-in">
                                            <h6>Özet</h6>
                                            <div class="User-reservation-item-right-in-item">
                                                <span>Toplam Tutar</span>
                                                <span>+ 7.500,00 ₺</span>
                                            </div>
                                            <div class="User-reservation-item-right-in-item">
                                                <span>Ön Ödeme Tutarı </span>
                                                <span>+ 2.500,00 ₺</span>
                                            </div>
                                            <div class="User-reservation-item-right-in-item total">
                                                <span>Kalan Ödeme</span>
                                                <span>+ 5.000,00 ₺</span>
                                            </div>
                                            <p>Villaya girişte nakit ödenecek tutardır. Ayrıca 2000,00 ₺ değerinde hasar
                                                depozitosu alınacaktır.</p>
                                        </div>
                                        <button class="User-reservation-item-right-button">
                                            DETAYLI İNCELE
                                        </button>
                                    </div>
                                </div>
                                <div class="User-reservation-item ">
                                    <div class="User-reservation-item-left">
                                        <div class="User-reservation-item-left-img">
                                            <nuxt-img src="/img/reservation-img.jpg" alt=""/>

                                            <div class="User-reservation-item-left-img-text">
                                                <div class="User-reservation-item-left-img-text-left">
                                                    <span>Tesis Kodu</span>
                                                    <h4>VKV1020</h4>
                                                </div>
                                                <div class="User-reservation-item-left-img-text-right">
                                                    <i class="icon-pin"></i>
                                                    <p><span>KALKAN</span>Turkey / Antalya</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="User-reservation-item-left-text">
                                            <p class="User-reservation-item-left-text-title">Rezervasyon Sahibi:
                                                <span>Mahmut ERKAL</span>
                                            </p>
                                            <div class="User-reservation-item-left-text-date">
                                                <div class="User-reservation-item-left-text-date-item">
                                                    <div class="date">
                                                        <span>Mar</span>
                                                        <b>01</b>
                                                    </div>
                                                    <div class="User-reservation-item-left-text-date-item-in">
                                                        <h6>Giriş Tarihi</h6>
                                                        <span>2023-03-01</span>
                                                        <p>Çarşamba</p>
                                                    </div>
                                                </div>
                                                <i class="icon-arrow-right-2"></i>
                                                <div class="User-reservation-item-left-text-date-item">
                                                    <div class="date">
                                                        <span>Mar</span>
                                                        <b>05</b>
                                                    </div>
                                                    <div class="User-reservation-item-left-text-date-item-in">
                                                        <h6>Çıkış Tarihi</h6>
                                                        <span>2023-03-05</span>
                                                        <p>Pazartesi</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <p class="User-reservation-item-left-text-user"><i class="icon-user"></i>2
                                                Yetişkin, 0 Çocuk Bebek</p>
                                            <div class="User-reservation-item-left-text-status">
                                                <h5>REZERVASYON DURUMU:</h5>
                                                <span>ONAYLI</span>
                                                <i class="icon-reservation-success"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="User-reservation-item-right">
                                        <div class="User-reservation-item-right-head">
                                            <span>Rezervasyon Kodu</span>
                                            <span>VKV5948110330831</span>
                                        </div>
                                        <div class="User-reservation-item-right-in">
                                            <h6>Özet</h6>
                                            <div class="User-reservation-item-right-in-item">
                                                <span>Toplam Tutar</span>
                                                <span>+ 7.500,00 ₺</span>
                                            </div>
                                            <div class="User-reservation-item-right-in-item">
                                                <span>Ön Ödeme Tutarı </span>
                                                <span>+ 2.500,00 ₺</span>
                                            </div>
                                            <div class="User-reservation-item-right-in-item total">
                                                <span>Kalan Ödeme</span>
                                                <span>+ 5.000,00 ₺</span>
                                            </div>
                                            <p>Villaya girişte nakit ödenecek tutardır. Ayrıca 2000,00 ₺ değerinde hasar
                                                depozitosu alınacaktır.</p>
                                        </div>
                                        <button class="User-reservation-item-right-button">
                                            DETAYLI İNCELE
                                        </button>
                                    </div>
                                </div>
                                <div class="User-reservation-item ">
                                    <div class="User-reservation-item-left">
                                        <div class="User-reservation-item-left-img">
                                            <nuxt-img src="/img/reservation-img.jpg" alt=""/>

                                            <div class="User-reservation-item-left-img-text">
                                                <div class="User-reservation-item-left-img-text-left">
                                                    <span>Tesis Kodu</span>
                                                    <h4>VKV1020</h4>
                                                </div>
                                                <div class="User-reservation-item-left-img-text-right">
                                                    <i class="icon-pin"></i>
                                                    <p><span>KALKAN</span>Turkey / Antalya</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="User-reservation-item-left-text">
                                            <p class="User-reservation-item-left-text-title">Rezervasyon Sahibi:
                                                <span>Mahmut ERKAL</span>
                                            </p>
                                            <div class="User-reservation-item-left-text-date">
                                                <div class="User-reservation-item-left-text-date-item">
                                                    <div class="date">
                                                        <span>Mar</span>
                                                        <b>01</b>
                                                    </div>
                                                    <div class="User-reservation-item-left-text-date-item-in">
                                                        <h6>Giriş Tarihi</h6>
                                                        <span>2023-03-01</span>
                                                        <p>Çarşamba</p>
                                                    </div>
                                                </div>
                                                <i class="icon-arrow-right-2"></i>
                                                <div class="User-reservation-item-left-text-date-item">
                                                    <div class="date">
                                                        <span>Mar</span>
                                                        <b>05</b>
                                                    </div>
                                                    <div class="User-reservation-item-left-text-date-item-in">
                                                        <h6>Çıkış Tarihi</h6>
                                                        <span>2023-03-05</span>
                                                        <p>Pazartesi</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <p class="User-reservation-item-left-text-user"><i class="icon-user"></i>2
                                                Yetişkin, 0 Çocuk Bebek</p>
                                            <div class="User-reservation-item-left-text-status">
                                                <h5>REZERVASYON DURUMU:</h5>
                                                <span>ONAYLI</span>
                                                <i class="icon-reservation-success"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="User-reservation-item-right">
                                        <div class="User-reservation-item-right-head">
                                            <span>Rezervasyon Kodu</span>
                                            <span>VKV5948110330831</span>
                                        </div>
                                        <div class="User-reservation-item-right-in">
                                            <h6>Özet</h6>
                                            <div class="User-reservation-item-right-in-item">
                                                <span>Toplam Tutar</span>
                                                <span>+ 7.500,00 ₺</span>
                                            </div>
                                            <div class="User-reservation-item-right-in-item">
                                                <span>Ön Ödeme Tutarı </span>
                                                <span>+ 2.500,00 ₺</span>
                                            </div>
                                            <div class="User-reservation-item-right-in-item total">
                                                <span>Kalan Ödeme</span>
                                                <span>+ 5.000,00 ₺</span>
                                            </div>
                                            <p>Villaya girişte nakit ödenecek tutardır. Ayrıca 2000,00 ₺ değerinde hasar
                                                depozitosu alınacaktır.</p>
                                        </div>
                                        <button class="User-reservation-item-right-button">
                                            DETAYLI İNCELE
                                        </button>
                                    </div>
                                </div>
                                <div class="User-reservation-item ">
                                    <div class="User-reservation-item-left">
                                        <div class="User-reservation-item-left-img">
                                            <nuxt-img src="/img/reservation-img.jpg" alt=""/>

                                            <div class="User-reservation-item-left-img-text">
                                                <div class="User-reservation-item-left-img-text-left">
                                                    <span>Tesis Kodu</span>
                                                    <h4>VKV1020</h4>
                                                </div>
                                                <div class="User-reservation-item-left-img-text-right">
                                                    <i class="icon-pin"></i>
                                                    <p><span>KALKAN</span>Turkey / Antalya</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="User-reservation-item-left-text">
                                            <p class="User-reservation-item-left-text-title">Rezervasyon Sahibi:
                                                <span>Mahmut ERKAL</span>
                                            </p>
                                            <div class="User-reservation-item-left-text-date">
                                                <div class="User-reservation-item-left-text-date-item">
                                                    <div class="date">
                                                        <span>Mar</span>
                                                        <b>01</b>
                                                    </div>
                                                    <div class="User-reservation-item-left-text-date-item-in">
                                                        <h6>Giriş Tarihi</h6>
                                                        <span>2023-03-01</span>
                                                        <p>Çarşamba</p>
                                                    </div>
                                                </div>
                                                <i class="icon-arrow-right-2"></i>
                                                <div class="User-reservation-item-left-text-date-item">
                                                    <div class="date">
                                                        <span>Mar</span>
                                                        <b>05</b>
                                                    </div>
                                                    <div class="User-reservation-item-left-text-date-item-in">
                                                        <h6>Çıkış Tarihi</h6>
                                                        <span>2023-03-05</span>
                                                        <p>Pazartesi</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <p class="User-reservation-item-left-text-user"><i class="icon-user"></i>2
                                                Yetişkin, 0 Çocuk Bebek</p>
                                            <div class="User-reservation-item-left-text-status">
                                                <h5>REZERVASYON DURUMU:</h5>
                                                <span>ONAYLI</span>
                                                <i class="icon-reservation-success"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="User-reservation-item-right">
                                        <div class="User-reservation-item-right-head">
                                            <span>Rezervasyon Kodu</span>
                                            <span>VKV5948110330831</span>
                                        </div>
                                        <div class="User-reservation-item-right-in">
                                            <h6>Özet</h6>
                                            <div class="User-reservation-item-right-in-item">
                                                <span>Toplam Tutar</span>
                                                <span>+ 7.500,00 ₺</span>
                                            </div>
                                            <div class="User-reservation-item-right-in-item">
                                                <span>Ön Ödeme Tutarı </span>
                                                <span>+ 2.500,00 ₺</span>
                                            </div>
                                            <div class="User-reservation-item-right-in-item total">
                                                <span>Kalan Ödeme</span>
                                                <span>+ 5.000,00 ₺</span>
                                            </div>
                                            <p>Villaya girişte nakit ödenecek tutardır. Ayrıca 2000,00 ₺ değerinde hasar
                                                depozitosu alınacaktır.</p>
                                        </div>
                                        <button class="User-reservation-item-right-button">
                                            DETAYLI İNCELE
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="new-reservation" role="tabpanel">
                                <div class="User-reservation-item ">
                                    <div class="User-reservation-item-left">
                                        <div class="User-reservation-item-left-img">
                                            <nuxt-img src="/img/reservation-img.jpg" alt=""/>

                                            <div class="User-reservation-item-left-img-text">
                                                <div class="User-reservation-item-left-img-text-left">
                                                    <span>Tesis Kodu</span>
                                                    <h4>VKV1020</h4>
                                                </div>
                                                <div class="User-reservation-item-left-img-text-right">
                                                    <i class="icon-pin"></i>
                                                    <p><span>KALKAN</span>Turkey / Antalya</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="User-reservation-item-left-text">
                                            <p class="User-reservation-item-left-text-title">Rezervasyon Sahibi:
                                                <span>Mahmut ERKAL</span>
                                            </p>
                                            <div class="User-reservation-item-left-text-date">
                                                <div class="User-reservation-item-left-text-date-item">
                                                    <div class="date">
                                                        <span>Mar</span>
                                                        <b>01</b>
                                                    </div>
                                                    <div class="User-reservation-item-left-text-date-item-in">
                                                        <h6>Giriş Tarihi</h6>
                                                        <span>2023-03-01</span>
                                                        <p>Çarşamba</p>
                                                    </div>
                                                </div>
                                                <i class="icon-arrow-right-2"></i>
                                                <div class="User-reservation-item-left-text-date-item">
                                                    <div class="date">
                                                        <span>Mar</span>
                                                        <b>05</b>
                                                    </div>
                                                    <div class="User-reservation-item-left-text-date-item-in">
                                                        <h6>Çıkış Tarihi</h6>
                                                        <span>2023-03-05</span>
                                                        <p>Pazartesi</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <p class="User-reservation-item-left-text-user"><i class="icon-user"></i>2
                                                Yetişkin, 0 Çocuk Bebek</p>
                                            <div class="User-reservation-item-left-text-status cancel">
                                                <h5>REZERVASYON DURUMU:</h5>
                                                <span>ONAYLI</span>
                                                <i class="icon-reservation-cancel"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="User-reservation-item-right">
                                        <div class="User-reservation-item-right-head">
                                            <span>Rezervasyon Kodu</span>
                                            <span>VKV5948110330831</span>
                                        </div>
                                        <div class="User-reservation-item-right-in">
                                            <h6>Özet</h6>
                                            <div class="User-reservation-item-right-in-item">
                                                <span>Toplam Tutar</span>
                                                <span>+ 7.500,00 ₺</span>
                                            </div>
                                            <div class="User-reservation-item-right-in-item">
                                                <span>Ön Ödeme Tutarı </span>
                                                <span>+ 2.500,00 ₺</span>
                                            </div>
                                            <div class="User-reservation-item-right-in-item total">
                                                <span>Kalan Ödeme</span>
                                                <span>+ 5.000,00 ₺</span>
                                            </div>
                                            <p>Villaya girişte nakit ödenecek tutardır. Ayrıca 2000,00 ₺ değerinde hasar
                                                depozitosu alınacaktır.</p>
                                        </div>
                                        <button class="User-reservation-item-right-button">
                                            DETAYLI İNCELE
                                        </button>
                                    </div>
                                </div>
                                <div class="User-reservation-item ">
                                    <div class="User-reservation-item-left">
                                        <div class="User-reservation-item-left-img">
                                            <nuxt-img src="/img/reservation-img.jpg" alt=""/>

                                            <div class="User-reservation-item-left-img-text">
                                                <div class="User-reservation-item-left-img-text-left">
                                                    <span>Tesis Kodu</span>
                                                    <h4>VKV1020</h4>
                                                </div>
                                                <div class="User-reservation-item-left-img-text-right">
                                                    <i class="icon-pin"></i>
                                                    <p><span>KALKAN</span>Turkey / Antalya</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="User-reservation-item-left-text">
                                            <p class="User-reservation-item-left-text-title">Rezervasyon Sahibi:
                                                <span>Mahmut ERKAL</span>
                                            </p>
                                            <div class="User-reservation-item-left-text-date">
                                                <div class="User-reservation-item-left-text-date-item">
                                                    <div class="date">
                                                        <span>Mar</span>
                                                        <b>01</b>
                                                    </div>
                                                    <div class="User-reservation-item-left-text-date-item-in">
                                                        <h6>Giriş Tarihi</h6>
                                                        <span>2023-03-01</span>
                                                        <p>Çarşamba</p>
                                                    </div>
                                                </div>
                                                <i class="icon-arrow-right-2"></i>
                                                <div class="User-reservation-item-left-text-date-item">
                                                    <div class="date">
                                                        <span>Mar</span>
                                                        <b>05</b>
                                                    </div>
                                                    <div class="User-reservation-item-left-text-date-item-in">
                                                        <h6>Çıkış Tarihi</h6>
                                                        <span>2023-03-05</span>
                                                        <p>Pazartesi</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <p class="User-reservation-item-left-text-user"><i class="icon-user"></i>2
                                                Yetişkin, 0 Çocuk Bebek</p>
                                            <div class="User-reservation-item-left-text-status">
                                                <h5>REZERVASYON DURUMU:</h5>
                                                <span>ONAYLI</span>
                                                <i class="icon-reservation-success"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="User-reservation-item-right">
                                        <div class="User-reservation-item-right-head">
                                            <span>Rezervasyon Kodu</span>
                                            <span>VKV5948110330831</span>
                                        </div>
                                        <div class="User-reservation-item-right-in">
                                            <h6>Özet</h6>
                                            <div class="User-reservation-item-right-in-item">
                                                <span>Toplam Tutar</span>
                                                <span>+ 7.500,00 ₺</span>
                                            </div>
                                            <div class="User-reservation-item-right-in-item">
                                                <span>Ön Ödeme Tutarı </span>
                                                <span>+ 2.500,00 ₺</span>
                                            </div>
                                            <div class="User-reservation-item-right-in-item total">
                                                <span>Kalan Ödeme</span>
                                                <span>+ 5.000,00 ₺</span>
                                            </div>
                                            <p>Villaya girişte nakit ödenecek tutardır. Ayrıca 2000,00 ₺ değerinde hasar
                                                depozitosu alınacaktır.</p>
                                        </div>
                                        <button class="User-reservation-item-right-button">
                                            DETAYLI İNCELE
                                        </button>
                                    </div>
                                </div>
                                <div class="User-reservation-item ">
                                    <div class="User-reservation-item-left">
                                        <div class="User-reservation-item-left-img">
                                            <nuxt-img src="/img/reservation-img.jpg" alt=""/>

                                            <div class="User-reservation-item-left-img-text">
                                                <div class="User-reservation-item-left-img-text-left">
                                                    <span>Tesis Kodu</span>
                                                    <h4>VKV1020</h4>
                                                </div>
                                                <div class="User-reservation-item-left-img-text-right">
                                                    <i class="icon-pin"></i>
                                                    <p><span>KALKAN</span>Turkey / Antalya</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="User-reservation-item-left-text">
                                            <p class="User-reservation-item-left-text-title">Rezervasyon Sahibi:
                                                <span>Mahmut ERKAL</span>
                                            </p>
                                            <div class="User-reservation-item-left-text-date">
                                                <div class="User-reservation-item-left-text-date-item">
                                                    <div class="date">
                                                        <span>Mar</span>
                                                        <b>01</b>
                                                    </div>
                                                    <div class="User-reservation-item-left-text-date-item-in">
                                                        <h6>Giriş Tarihi</h6>
                                                        <span>2023-03-01</span>
                                                        <p>Çarşamba</p>
                                                    </div>
                                                </div>
                                                <i class="icon-arrow-right-2"></i>
                                                <div class="User-reservation-item-left-text-date-item">
                                                    <div class="date">
                                                        <span>Mar</span>
                                                        <b>05</b>
                                                    </div>
                                                    <div class="User-reservation-item-left-text-date-item-in">
                                                        <h6>Çıkış Tarihi</h6>
                                                        <span>2023-03-05</span>
                                                        <p>Pazartesi</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <p class="User-reservation-item-left-text-user"><i class="icon-user"></i>2
                                                Yetişkin, 0 Çocuk Bebek</p>
                                            <div class="User-reservation-item-left-text-status">
                                                <h5>REZERVASYON DURUMU:</h5>
                                                <span>ONAYLI</span>
                                                <i class="icon-reservation-success"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="User-reservation-item-right">
                                        <div class="User-reservation-item-right-head">
                                            <span>Rezervasyon Kodu</span>
                                            <span>VKV5948110330831</span>
                                        </div>
                                        <div class="User-reservation-item-right-in">
                                            <h6>Özet</h6>
                                            <div class="User-reservation-item-right-in-item">
                                                <span>Toplam Tutar</span>
                                                <span>+ 7.500,00 ₺</span>
                                            </div>
                                            <div class="User-reservation-item-right-in-item">
                                                <span>Ön Ödeme Tutarı </span>
                                                <span>+ 2.500,00 ₺</span>
                                            </div>
                                            <div class="User-reservation-item-right-in-item total">
                                                <span>Kalan Ödeme</span>
                                                <span>+ 5.000,00 ₺</span>
                                            </div>
                                            <p>Villaya girişte nakit ödenecek tutardır. Ayrıca 2000,00 ₺ değerinde hasar
                                                depozitosu alınacaktır.</p>
                                        </div>
                                        <button class="User-reservation-item-right-button">
                                            DETAYLI İNCELE
                                        </button>
                                    </div>
                                </div>
                                <div class="User-reservation-item ">
                                    <div class="User-reservation-item-left">
                                        <div class="User-reservation-item-left-img">
                                            <nuxt-img src="/img/reservation-img.jpg" alt=""/>

                                            <div class="User-reservation-item-left-img-text">
                                                <div class="User-reservation-item-left-img-text-left">
                                                    <span>Tesis Kodu</span>
                                                    <h4>VKV1020</h4>
                                                </div>
                                                <div class="User-reservation-item-left-img-text-right">
                                                    <i class="icon-pin"></i>
                                                    <p><span>KALKAN</span>Turkey / Antalya</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="User-reservation-item-left-text">
                                            <p class="User-reservation-item-left-text-title">Rezervasyon Sahibi:
                                                <span>Mahmut ERKAL</span>
                                            </p>
                                            <div class="User-reservation-item-left-text-date">
                                                <div class="User-reservation-item-left-text-date-item">
                                                    <div class="date">
                                                        <span>Mar</span>
                                                        <b>01</b>
                                                    </div>
                                                    <div class="User-reservation-item-left-text-date-item-in">
                                                        <h6>Giriş Tarihi</h6>
                                                        <span>2023-03-01</span>
                                                        <p>Çarşamba</p>
                                                    </div>
                                                </div>
                                                <i class="icon-arrow-right-2"></i>
                                                <div class="User-reservation-item-left-text-date-item">
                                                    <div class="date">
                                                        <span>Mar</span>
                                                        <b>05</b>
                                                    </div>
                                                    <div class="User-reservation-item-left-text-date-item-in">
                                                        <h6>Çıkış Tarihi</h6>
                                                        <span>2023-03-05</span>
                                                        <p>Pazartesi</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <p class="User-reservation-item-left-text-user"><i class="icon-user"></i>2
                                                Yetişkin, 0 Çocuk Bebek</p>
                                            <div class="User-reservation-item-left-text-status">
                                                <h5>REZERVASYON DURUMU:</h5>
                                                <span>ONAYLI</span>
                                                <i class="icon-reservation-success"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="User-reservation-item-right">
                                        <div class="User-reservation-item-right-head">
                                            <span>Rezervasyon Kodu</span>
                                            <span>VKV5948110330831</span>
                                        </div>
                                        <div class="User-reservation-item-right-in">
                                            <h6>Özet</h6>
                                            <div class="User-reservation-item-right-in-item">
                                                <span>Toplam Tutar</span>
                                                <span>+ 7.500,00 ₺</span>
                                            </div>
                                            <div class="User-reservation-item-right-in-item">
                                                <span>Ön Ödeme Tutarı </span>
                                                <span>+ 2.500,00 ₺</span>
                                            </div>
                                            <div class="User-reservation-item-right-in-item total">
                                                <span>Kalan Ödeme</span>
                                                <span>+ 5.000,00 ₺</span>
                                            </div>
                                            <p>Villaya girişte nakit ödenecek tutardır. Ayrıca 2000,00 ₺ değerinde hasar
                                                depozitosu alınacaktır.</p>
                                        </div>
                                        <button class="User-reservation-item-right-button">
                                            DETAYLI İNCELE
                                        </button>
                                    </div>
                                </div>
                                <div class="User-reservation-item ">
                                    <div class="User-reservation-item-left">
                                        <div class="User-reservation-item-left-img">
                                            <nuxt-img src="/img/reservation-img.jpg" alt=""/>

                                            <div class="User-reservation-item-left-img-text">
                                                <div class="User-reservation-item-left-img-text-left">
                                                    <span>Tesis Kodu</span>
                                                    <h4>VKV1020</h4>
                                                </div>
                                                <div class="User-reservation-item-left-img-text-right">
                                                    <i class="icon-pin"></i>
                                                    <p><span>KALKAN</span>Turkey / Antalya</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="User-reservation-item-left-text">
                                            <p class="User-reservation-item-left-text-title">Rezervasyon Sahibi:
                                                <span>Mahmut ERKAL</span>
                                            </p>
                                            <div class="User-reservation-item-left-text-date">
                                                <div class="User-reservation-item-left-text-date-item">
                                                    <div class="date">
                                                        <span>Mar</span>
                                                        <b>01</b>
                                                    </div>
                                                    <div class="User-reservation-item-left-text-date-item-in">
                                                        <h6>Giriş Tarihi</h6>
                                                        <span>2023-03-01</span>
                                                        <p>Çarşamba</p>
                                                    </div>
                                                </div>
                                                <i class="icon-arrow-right-2"></i>
                                                <div class="User-reservation-item-left-text-date-item">
                                                    <div class="date">
                                                        <span>Mar</span>
                                                        <b>05</b>
                                                    </div>
                                                    <div class="User-reservation-item-left-text-date-item-in">
                                                        <h6>Çıkış Tarihi</h6>
                                                        <span>2023-03-05</span>
                                                        <p>Pazartesi</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <p class="User-reservation-item-left-text-user"><i class="icon-user"></i>2
                                                Yetişkin, 0 Çocuk Bebek</p>
                                            <div class="User-reservation-item-left-text-status">
                                                <h5>REZERVASYON DURUMU:</h5>
                                                <span>ONAYLI</span>
                                                <i class="icon-reservation-success"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="User-reservation-item-right">
                                        <div class="User-reservation-item-right-head">
                                            <span>Rezervasyon Kodu</span>
                                            <span>VKV5948110330831</span>
                                        </div>
                                        <div class="User-reservation-item-right-in">
                                            <h6>Özet</h6>
                                            <div class="User-reservation-item-right-in-item">
                                                <span>Toplam Tutar</span>
                                                <span>+ 7.500,00 ₺</span>
                                            </div>
                                            <div class="User-reservation-item-right-in-item">
                                                <span>Ön Ödeme Tutarı </span>
                                                <span>+ 2.500,00 ₺</span>
                                            </div>
                                            <div class="User-reservation-item-right-in-item total">
                                                <span>Kalan Ödeme</span>
                                                <span>+ 5.000,00 ₺</span>
                                            </div>
                                            <p>Villaya girişte nakit ödenecek tutardır. Ayrıca 2000,00 ₺ değerinde hasar
                                                depozitosu alınacaktır.</p>
                                        </div>
                                        <button class="User-reservation-item-right-button">
                                            DETAYLI İNCELE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="modal fade User-modal" id="addInvoiceModal" tabindex="-1" aria-labelledby="loginModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                            class="icon-login-close"></i></button>

                    <div class="User-modal-in">
                        <div class="User-modal-left">
                            <nuxt-img src="/img/invoice-text.svg" alt=""/>
                        </div>
                        <div class="User-modal-right">
                            <h4><span>FATURA</span> BİLGİLERİ EKLE</h4>
                            <form action="" class="User-form">
                                <div class="User-form-item User-form-item-check">
                                    <label for="">
                                        <input type="radio" name="invoicetype">
                                        <span></span>
                                        <p>Gerçek/Şahıs Şirketi</p>
                                    </label>
                                    <label for="">
                                        <input type="radio" name="invoicetype">
                                        <span></span>
                                        <p>Tüzel</p>
                                    </label>
                                </div>
                                <div class="User-form-item">
                                    <label for="">
                                        <input type="text" placeholder="Ad Soyad">
                                    </label>
                                </div>
                                <div class="User-form-item">
                                    <label for="">
                                        <input type="text" placeholder="E-posta Adresiniz">
                                    </label>
                                </div>
                                <div class="User-form-item">
                                    <vue-tel-input v-model="phoneNumber" @input="onInput" v-bind="phoneProps"
                                        :defaultCountry="'TR'"></vue-tel-input>
                                </div>
                                <div class="User-form-item">
                                    <label for="">
                                        <input type="text" placeholder="Doğum Tarihi">
                                        <p class="date-mask">GG <span>/</span>AA <span>YY</span></p>
                                    </label>
                                </div>
                                <div class="User-form-item three">
                                    <label for="">
                                        <client-only>
                                            <VSelect v-model="countryValue" :options="countryValues"
                                                :labelTitle="countryPlaceholder" />
                                        </client-only>
                                    </label>
                                </div>
                                <div class="User-form-item three">
                                    <label for="">
                                        <client-only>
                                            <VSelect v-model="cityValue" :options="cityValues"
                                                :labelTitle="cityPlaceholder" />
                                        </client-only>
                                    </label>
                                </div>
                                <div class="User-form-item three">
                                    <label for="">
                                        <client-only>
                                            <VSelect v-model="districtValue" :options="districtValues"
                                                :labelTitle="districtPlaceholder" />
                                        </client-only>
                                    </label>
                                </div>
                                <div class="User-form-item w-100">
                                    <label for="">
                                        <textarea name="" id="" placeholder="Adres"></textarea>
                                    </label>
                                </div>
                                <button type="submit">KAYDET</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="modal fade User-modal" id="editInvoiceModal" tabindex="-1" aria-labelledby="loginModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                            class="icon-login-close"></i></button>

                    <div class="User-modal-in">
                        <div class="User-modal-left">
                            <nuxt-img src="/img/invoice-text.svg" alt=""/>
                        </div>
                        <div class="User-modal-right">
                            <h4><span>FATURA</span> BİLGİLERİ GÜNCELLE</h4>
                            <form action="" class="User-form">
                                <div class="User-form-item User-form-item-check">
                                    <label for="">
                                        <input type="radio" name="invoicetype">
                                        <span></span>
                                        <p>Gerçek/Şahıs Şirketi</p>
                                    </label>
                                    <label for="">
                                        <input type="radio" name="invoicetype">
                                        <span></span>
                                        <p>Tüzel</p>
                                    </label>
                                </div>
                                <div class="User-form-item">
                                    <label for="">
                                        <input type="text" placeholder="Ad Soyad">
                                    </label>
                                </div>
                                <div class="User-form-item">
                                    <label for="">
                                        <input type="text" placeholder="E-posta Adresiniz">
                                    </label>
                                </div>
                                <div class="User-form-item">
                                    <vue-tel-input v-model="phoneNumber" @input="onInput" v-bind="phoneProps"
                                        :defaultCountry="'TR'"></vue-tel-input>
                                </div>
                                <div class="User-form-item">
                                    <label for="">
                                        <input type="text" placeholder="Doğum Tarihi">
                                        <p class="date-mask">GG <span>/</span>AA <span>YY</span></p>
                                    </label>
                                </div>
                                <div class="User-form-item three">
                                    <label for="">
                                        <client-only>
                                            <VSelect v-model="countryValue" :options="countryValues"
                                                :labelTitle="countryPlaceholder" />
                                        </client-only>
                                    </label>
                                </div>
                                <div class="User-form-item three">
                                    <label for="">
                                        <client-only>
                                            <VSelect v-model="cityValue" :options="cityValues"
                                                :labelTitle="cityPlaceholder" />
                                        </client-only>
                                    </label>
                                </div>
                                <div class="User-form-item three">
                                    <label for="">
                                        <client-only>
                                            <VSelect v-model="districtValue" :options="districtValues"
                                                :labelTitle="districtPlaceholder" />
                                        </client-only>
                                    </label>
                                </div>
                                <div class="User-form-item w-100">
                                    <label for="">
                                        <textarea name="" id="" placeholder="Adres"></textarea>
                                    </label>
                                </div>
                                <button type="submit">GÜNCELLE</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import UserSidebar from "@/components/user/sidebar.vue";
export default {
    name: 'UserReservation',
    data() {
        return {

        }
    },
    components: {
        UserSidebar
    },
    methods: {

    }
}
</script>