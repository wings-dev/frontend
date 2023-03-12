<template>
    <div>
        <section class="newsletter-section position-relative">
            <div class="container-wide">
                <div class="newsletter bg-theme-first-dark rounded-xl position-relative overflow-hidden py-4 py-sm-5">
                    <img src="/img/spacer.gif" data-src="/uploads/newsletter-bg.png" alt="newsletter background"
                        class="newsletter-bg lazy cover position-absolute top-0 start-0 w-100 h-100">
                    <div class="container position-relative d-flex flex-wrap py-xl-4 my-lg-2">
                        <div class="col-12 col-lg-4 mb-lg-0 mb-3 px-lg-0 px-3">
                            <div class="caption d-flex flex-column">
                                <strong class="fs-3 fw-normal text-white ls-05 lh-sm mb-1">e-Bülten’e kayıt olun</strong>
                                <p class="fs-6 fw-normal ls-05 lh-sm mb-0">Erken rezervasyon fırsatlarından <br> indirimli
                                    otel
                                    ve
                                    villalardan ilk siz haberdar olun!</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-7 col-lg-5 ps-3 pe-3 pe-lg-5 mb-sm-0 mb-3">
                            <form action="" class="d-flex align-items-end h-100">
                                <div class="newsletter-register w-100 d-flex align-items-center border-bottom pb-3">
                                    <input type="text" name="newsletter-register"
                                        class="bg-transparent text-white w-100 ps-3" placeholder="e-Posta Adresiniz">
                                    <button type="button" class="bg-transparent flex-shrink-0 px-2 py-1">
                                        <i class="icon-plus-1 text-theme-second"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="col-12 col-sm-5 col-lg-3 px-sm-0 px-3">
                            <ul
                                class="social-media h-100 d-flex align-items-center justify-content-sm-center justify-content-lg-end w-100">
                                <li class="me-3 pe-md-1">
                                    <a href="https://www.facebook.com"
                                        class="social-link btn btn-theme-first-dark bg-black bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center text-center facebook">
                                        <i class="icon-facebook"></i>
                                    </a>
                                </li>
                                <li class="me-3 pe-md-1">
                                    <a href="https://www.twitter.com"
                                        class="social-link btn btn-theme-first-dark bg-black bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center text-center facebook">
                                        <i class="icon-twitter"></i>
                                    </a>
                                </li>
                                <li class="me-3 pe-md-1">
                                    <a href="https://www.instagram.com"
                                        class="social-link btn btn-theme-first-dark bg-black bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center text-center facebook">
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
                        <div
                            class="ft-item flex-fill d-flex align-items-center justify-content-sm-center justify-content-lg-start py-4 py-sm-2 py-lg-4 pe-2 order-sm-1 order-2">
                            <i class="icon-phone-call me-2"></i>
                            <div class="d-flex flex-column lh-1 ls-05">
                                <span class="fs-8 opacity-50 ls-1">Yardım / Destek</span>
                                <a href="tel:444 8 484" class="fs-5-5 fw-normal">444 8 484</a>
                            </div>
                        </div>
                        <div
                            class="ft-item flex-fill ls-05 d-flex flex-column justify-content-center align-items-sm-center text-sm-center py-4 py-sm-2 py-lg-4 px-2 order-lg-2 order-3">
                            <span class="text-theme-second">İş Birliği için</span>
                            <a href="mailto:info@otelbnb.com" class="underline-hover">info@otelbnb.com</a>
                        </div>
                        <div
                            class="ft-item flex-fill ls-05 d-flex flex-column justify-content-center align-items-sm-center text-sm-center py-4 py-sm-2 py-lg-4 px-2 order-lg-2 order-4">
                            <span class="text-theme-second">Merkez</span>
                            <strong class="fw-normal">Kalkan Mah. Cumhuriyet Cd. No:48/2 - Kaş/Antalya</strong>
                        </div>
                        <div
                            class="ft-item flex-fill ls-05 text-sm-center text-lg-end py-4 py-sm-2 py-lg-4 ps-2 order-lg-last order-sm-2 order-1">
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
                                <li>
                                    <nuxt-link to="/uyelik" class="d-block py-1 mb-2">
                                    Üyelik
                                </nuxt-link></li>
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
                            <div class="menu-title fs-6 fw-medium text-theme-primary lh-lg ls-05 mb-3 pb-1">Villa
                                Kategorileri
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
                                <img src="/img/tools/footer-banner.jpg" width="265" height="335" alt="footer banner"
                                    class="banner lazy cover rounded-xl w-100">
                                <div
                                    class="caption d-flex flex-column justify-content-center pt-5 ps-4 pe-5 position-absolute top-0 start-0">
                                    <i class="footer-banner-logo"></i>
                                    <span class="fs-4 lh-sm ls-05 text-white d-block pe-3">ile yazlar sıcak ve
                                        eğlenceli</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="footer-cards bg-white border-top border-theme-light-2 py-4 py-sm-5">
                <div class="container d-flex flex-wrap align-items-center">
                    <div class="text-secondary d-flex align-items-center lh-sm ls-05 me-auto py-1 mb-md-0 mb-2">
                        <span>OtelBnb <a href="https://www.tursab.org.tr/" target="blank"
                                class="text-primary"><u>Türsab</u></a>
                            ve
                            <a href="https://www.eticaret.gov.tr/" target="blank" class="text-primary"><u>Etbis</u></a>
                            kayıtlı
                            olup
                            bir wings iştirakidir.</span>
                    </div>
                    <div class="cards d-flex me-4 pe-2 mb-md-0 mb-3">
                        <img src="/img/spacer.gif" data-src="/img/tools/Discover-card-dark.svg" width="50" height="30"
                            alt="discover card" class="lazy contain flex-shrink-0 me-2">
                        <img src="/img/spacer.gif" data-src="/img/tools/Maestro-card-dark.svg" width="50" height="30"
                            alt="discover card" class="lazy contain flex-shrink-0 me-2">
                        <img src="/img/spacer.gif" data-src="/img/tools/Visa-card-dark.svg" width="50" height="30"
                            alt="discover card" class="lazy contain flex-shrink-0 me-2">
                        <img src="/img/spacer.gif" data-src="/img/tools/Mastercard-dark.svg" width="50" height="30"
                            alt="discover card" class="lazy contain flex-shrink-0 me-2">
                        <img src="/img/spacer.gif" data-src="/img/tools/Americanexpress-card-dark.svg" width="50"
                            height="30" alt="discover card" class="lazy contain flex-shrink-0 me-2">
                    </div>
                    <img src="/img/spacer.gif" data-src="/img/tools/comodo-ssl-certificate.svg" width="108" height="34"
                        alt="" class="lazy contain">
                </div>
            </section>
            <section class="footer-map-section">
                <div class="map w-100" id="contactMap" data-id="contactMap" data-lat="36.67416043629058"
                    data-lng="29.100266338322857"></div>
            </section>
            <section class="footer-bottom bg-theme-light-2 text-secondary ls-05 py-3 py-sm-4">
                <div class="container d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1">
                    <span class="fs-8 d-block mb-sm-0 mb-2">© 2021 Otelbnb.com Turizm ve Seyehat Ltd. Şti. Tüm hakları
                        saklıdır
                        -
                        <a href="#!"><u>Gizlilik Politikası</u></a> ve <a href="#!"><u>Rezervasyon Koşulları</u></a></span>
                    <a href="https://www.wings.com.tr/" target="blank" class="wings flex-shrink-0">
                        <img src="/img/tools/wings.svg" width="65" height="24" alt="" class="contain">
                    </a>
                </div>
            </section>
        </footer>
    </div>
</template>
  
<script>

export default {
    name: "Footer",
    data() {
        return {
        }
    },
    computed: {

    },
    methods: {

    }
}
</script>
  