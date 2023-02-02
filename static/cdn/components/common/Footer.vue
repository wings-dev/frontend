<template>
    <div>
        <section class="newsletter-section position-relative">
            <div class="container-wide">
                <div class="newsletter bg-theme-first-dark rounded-xl position-relative overflow-hidden py-4 py-sm-5">
                    <img src="~/assets/img/spacer.gif" data-src="~/assets/uploads/newsletter-bg.png"
                        alt="newsletter background"
                        class="newsletter-bg lazy cover position-absolute top-0 start-0 w-100 h-100">
                    <div class="container position-relative d-flex flex-wrap py-xl-4 my-lg-2">
                        <div class="col-12 col-lg-4 mb-lg-0 mb-3 px-lg-0 px-3">
                            <div class="caption d-flex flex-column">
                                <strong class="fs-3 fw-normal text-white ls-05 lh-sm mb-1">e-Bülten’e kayıt
                                    olun</strong>
                                <p class="fs-6 fw-normal ls-05 lh-sm mb-0">Erken rezervasyon fırsatlarından <br>
                                    indirimli otel ve villalardan ilk siz haberdar olun!</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-7 col-lg-5 ps-3 pe-3 pe-lg-5 mb-sm-0 mb-3">
                            <form action="" class="d-flex align-items-end h-100">
                                <div class="newsletter-register w-100 d-flex align-items-center border-bottom pb-3">
                                    <input type="text" name="newsletter-register"
                                        class="bg-transparent text-white w-100 ps-3" placeholder="e-Posta Adresiniz">
                                    <button type="button" class="bg-transparent flex-shrink-0 px-2 py-1">
                                        <svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <g id="Anasayfa" stroke="none" stroke-width="1" fill="none"
                                                fill-rule="evenodd">
                                                <g id="anasayfa" transform="translate(-1159.000000, -3636.000000)"
                                                    fill="#323568">
                                                    <path
                                                        d="M1168.20833,3636 L1168.208,3643.791 L1176,3643.79167 L1176,3645.20833 L1168.208,3645.208 L1168.20833,3653 L1166.79167,3653 L1166.791,3645.208 L1159,3645.20833 L1159,3643.79167 L1166.791,3643.791 L1166.79167,3636 L1168.20833,3636 Z"
                                                        id="Combined-Shape"></path>
                                                </g>
                                            </g>
                                        </svg>
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
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="21" height="21"
                                            x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512"
                                            xml:space="preserve" class="">
                                            <g>
                                                <path xmlns="http://www.w3.org/2000/svg"
                                                    d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"
                                                    fill="#ffffff" data-original="#000000" class="" />
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                                <li class="me-3 pe-md-1">
                                    <a href="https://www.twitter.com"
                                        class="social-link btn btn-theme-first-dark bg-black bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center text-center facebook">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="21" height="21"
                                            x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512"
                                            xml:space="preserve">
                                            <g>
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path
                                                            d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016    c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992    c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056    c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152    c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792    c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44    C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568    C480.224,136.96,497.728,118.496,512,97.248z"
                                                            fill="#ffffff" data-original="#000000" />
                                                    </g>
                                                </g>
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                </g>
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                </g>
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                </g>
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                </g>
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                </g>
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                </g>
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                </g>
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                </g>
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                </g>
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                </g>
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                </g>
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                </g>
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                </g>
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                </g>
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                                <li class="me-3 pe-md-1">
                                    <a href="https://www.instagram.com"
                                        class="social-link btn btn-theme-first-dark bg-black bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center text-center facebook">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="21" height="21"
                                            x="0" y="0" viewBox="0 0 511 511.9"
                                            style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
                                            <g>
                                                <path xmlns="http://www.w3.org/2000/svg"
                                                    d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0"
                                                    fill="#ffffff" data-original="#000000" class="" />
                                                <path xmlns="http://www.w3.org/2000/svg"
                                                    d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0"
                                                    fill="#ffffff" data-original="#000000" class="" />
                                                <path xmlns="http://www.w3.org/2000/svg"
                                                    d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0"
                                                    fill="#ffffff" data-original="#000000" class="" />
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="footer bg-theme-first ">


            <section class="footer-top-section text-white">
                <div class="container">
                    <div class="footer-top d-flex flex-wrap flex-lg-nowrap">
                        <div
                            class="ft-item flex-fill d-flex align-items-center justify-content-sm-center justify-content-lg-start py-3 py-sm-4 py-lg-5 pe-2 order-sm-1 order-2">
                            <svg class="flex-shrink-0 me-1" width="31px" height="31px" viewBox="0 0 31 31" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="anasayfa" transform="translate(-371.000000, -3815.000000)" fill="#5DC1B2"
                                        fill-rule="nonzero">
                                        <g id="phone-call" transform="translate(371.000000, 3815.000000)">
                                            <path
                                                d="M29.31,8.85 C28.056,6.192 26.07,3.96 23.568,2.394 C20.088,0.222 15.966,-0.468 11.97,0.456 C7.974,1.374 4.572,3.798 2.4,7.278 C0.222,10.758 -0.468,14.874 0.456,18.876 C1.38,22.878 3.804,26.274 7.278,28.446 C9.726,29.976 12.534,30.786 15.408,30.786 L15.594,30.786 C18.456,30.75 21.24,29.922 23.652,28.398 C24.354,27.954 24.558,27.03 24.114,26.328 C23.67,25.626 22.746,25.422 22.044,25.866 C20.106,27.096 17.862,27.762 15.558,27.792 C13.194,27.822 10.884,27.168 8.868,25.914 C3.09,22.29 1.326,14.646 4.944,8.868 C6.696,6.066 9.432,4.116 12.648,3.378 C15.864,2.634 19.176,3.192 21.978,4.944 C23.994,6.204 25.59,7.998 26.598,10.134 C27.582,12.216 27.966,14.526 27.708,16.806 C27.618,17.628 28.206,18.372 29.034,18.462 C29.856,18.552 30.6,17.964 30.69,17.136 C31.008,14.304 30.528,11.436 29.31,8.85 L29.31,8.85 Z"
                                                id="Path"></path>
                                            <path
                                                d="M12.774,9.132 C12.186,8.544 11.238,8.544 10.65,9.132 C9.834,9.948 9.33,11.034 9.24,12.192 C9.15,13.35 9.48,14.502 10.164,15.432 C11.724,17.55 13.59,19.416 15.708,20.976 C16.542,21.588 17.544,21.918 18.57,21.918 C18.696,21.918 18.822,21.912 18.948,21.906 C20.1,21.816 21.186,21.318 22.008,20.496 C22.596,19.908 22.596,18.96 22.008,18.372 C21.42,17.784 20.472,17.784 19.884,18.372 C19.242,19.014 18.21,19.098 17.484,18.564 C15.612,17.184 13.962,15.534 12.582,13.662 C12.048,12.936 12.126,11.904 12.774,11.262 C13.362,10.668 13.362,9.714 12.774,9.132 L12.774,9.132 Z"
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
                        <div
                            class="ft-item flex-fill ls-05 d-flex flex-column align-items-sm-center text-sm-center py-3 py-sm-4 py-lg-5 px-2 order-lg-2 order-3">
                            <span class="text-theme-second">İş Birliği için</span>
                            <a href="mailto:info@otelbnb.com" class="underline-hover">info@otelbnb.com</a>
                        </div>
                        <div
                            class="ft-item flex-fill ls-05 d-flex flex-column align-items-sm-center text-sm-center py-3 py-sm-4 py-lg-5 px-2 order-lg-2 order-4">
                            <span class="text-theme-second">Merkez</span>
                            <strong class="fw-normal">Kalkan Mah. Cumhuriyet Cd. No:48/2 - Kaş/Antalya</strong>
                        </div>
                        <div
                            class="ft-item flex-fill ls-05 text-sm-center text-lg-end py-3 py-sm-4 py-lg-5 ps-2 order-lg-last order-sm-2 order-1">
                            <a href="index.php" class="d-inline-block">
                                <img src="~/assets/img/otelbnb-light.svg" width="127" height="34" alt="otelbnb"
                                    class="contain">
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="footer-body bg-white pt-5">
                <div class="container pt-lg-4 pb-4">
                    <div class="row pt-2 pb-2">
                        <div class="col-6 col-md-4 col-lg-3 pe-4 mb-lg-0 mb-4">
                            <div class="menu-title fs-6 fw-medium text-theme-primary lh-lg ls-05 mb-3 pb-1">OtelBnb
                            </div>
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
                            <div class="menu-title fs-6 fw-medium text-theme-primary lh-lg ls-05 mb-3 pb-1">Popüler
                                Rotalar</div>
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
                            <div class="menu-title fs-6 fw-medium text-theme-primary lh-lg ls-05 mb-3 pb-1">Oteller
                            </div>
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
                                Kategorileri</div>
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
                                <img src="~/assets/img/tools/footer-banner.jpg" width="265" height="335"
                                    alt="footer banner" class="banner lazy cover rounded-xl w-100">
                                <div
                                    class="caption d-flex flex-column justify-content-center pt-5 mt-sm-4 ps-4 pe-5 position-absolute top-0 start-0">
                                    <img src="~/assets/img/otelbnb-light.svg" width="127" height="34" alt="otelbnb"
                                        class="contain">
                                    <span class="fs-4 lh-sm ls-05 text-white d-block pe-3">ile yazlar sıcak ve
                                        eğlenceli</span>
                                </div>
                                <svg class="position-absolute bottom-0 end-0 mb-3 me-3" width="75px" height="81px"
                                    viewBox="0 0 75 81" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="anasayfa" transform="translate(-1451.000000, -4222.000000)"
                                            fill="#FFFFFF">
                                            <path
                                                d="M1516.58765,4283.87085 C1521.787,4283.87085 1526,4288.15432 1526,4293.43638 C1526,4298.71843 1521.787,4303 1516.58765,4303 C1511.39018,4303 1507.1753,4298.71843 1507.1753,4293.43638 C1507.1753,4288.15432 1511.39018,4283.87085 1516.58765,4283.87085 Z M1482.54281,4222 C1499.93801,4222 1514.04781,4236.11157 1514.04781,4253.5528 C1514.04781,4270.9535 1499.93801,4285.06642 1482.54281,4285.06642 C1465.10845,4285.06642 1451,4270.9535 1451,4253.5528 C1451,4236.11157 1465.10845,4222 1482.54281,4222 Z M1482.39409,4235.45018 C1472.32836,4235.45018 1464.14741,4243.6325 1464.14741,4253.70158 C1464.14741,4263.73147 1472.32836,4271.91513 1482.39409,4271.91513 C1492.4193,4271.91513 1500.60159,4263.73147 1500.60159,4253.70158 C1500.60159,4243.6325 1492.4193,4235.45018 1482.39409,4235.45018 Z"
                                                id="Combined-Shape-Copy"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="footer-cards bg-white border-top border-theme-light-2 py-4 py-sm-5">
                <div class="container d-flex flex-wrap align-items-center">
                    <div class="text-secondary d-flex align-items-center lh-sm ls-05 me-auto py-1 mb-md-0 mb-2">
                        <svg class="me-2" width="25px" height="27px" viewBox="0 0 25 27" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="anasayfa" transform="translate(-371.000000, -4410.000000)" fill="#5DC1B2">
                                    <path
                                        d="M392.86255,4430.62362 C394.595665,4430.62362 396,4432.05144 396,4433.81213 C396,4435.57281 394.595665,4437 392.86255,4437 C391.130058,4437 389.7251,4435.57281 389.7251,4433.81213 C389.7251,4432.05144 391.130058,4430.62362 392.86255,4430.62362 Z M381.51427,4410 C387.31267,4410 392.015936,4414.70386 392.015936,4420.5176 C392.015936,4426.31783 387.31267,4431.02214 381.51427,4431.02214 C375.702816,4431.02214 371,4426.31783 371,4420.5176 C371,4414.70386 375.702816,4410 381.51427,4410 Z M381.464698,4414.48339 C378.109452,4414.48339 375.38247,4417.21083 375.38247,4420.56719 C375.38247,4423.91049 378.109452,4426.63838 381.464698,4426.63838 C384.806432,4426.63838 387.533865,4423.91049 387.533865,4420.56719 C387.533865,4417.21083 384.806432,4414.48339 381.464698,4414.48339 Z"
                                        id="Combined-Shape"></path>
                                </g>
                            </g>
                        </svg>
                        <span>OtelBnb <a href="https://www.tursab.org.tr/" target="blank"
                                class="text-primary"><u>Türsab</u></a> ve <a href="https://www.eticaret.gov.tr/"
                                target="blank" class="text-primary"><u>Etbis</u></a> kayıtlı olup bir wings
                            iştirakidir.</span>
                    </div>
                    <div class="cards d-flex me-4 pe-2 mb-md-0 mb-3">
                        <img src="~/assets/img/spacer.gif" data-src="~/assets/img/tools/Discover-card-dark.svg" width="50"
                            height="30" alt="discover card" class="lazy contain flex-shrink-0 me-2">
                        <img src="~/assets/img/spacer.gif" data-src="~/assets/img/tools/Maestro-card-dark.svg" width="50"
                            height="30" alt="discover card" class="lazy contain flex-shrink-0 me-2">
                        <img src="~/assets/img/spacer.gif" data-src="~/assets/img/tools/Visa-card-dark.svg" width="50"
                            height="30" alt="discover card" class="lazy contain flex-shrink-0 me-2">
                        <img src="~/assets/img/spacer.gif" data-src="~/assets/img/tools/Mastercard-dark.svg" width="50"
                            height="30" alt="discover card" class="lazy contain flex-shrink-0 me-2">
                        <img src="~/assets/img/spacer.gif" data-src="~/assets/img/tools/Americanexpress-card-dark.svg"
                            width="50" height="30" alt="discover card" class="lazy contain flex-shrink-0 me-2">
                    </div>
                    <img src="~/assets/img/spacer.gif" data-src="~/assets/img/tools/comodo-ssl-certificate.svg" width="108"
                        height="34" alt="" class="lazy contain">
                </div>
            </section>

            <section class="footer-map-section">
                <div class="map w-100" id="contactMap" data-id="contactMap" data-lat="36.67416043629058"
                    data-lng="29.100266338322857"></div>
            </section>

            <section class="footer-bottom bg-theme-light-2 <text-secondary ls-05 py-3 py-sm-4">
                <div class="container d-flex flex-column flex-sm-row align-items-center justify-content-between pb-1">
                    <span class="fs-8 d-block mb-sm-0 mb-2">© 2021 Otelbnb.com Turizm ve Seyehat Ltd. Şti. Tüm hakları
                        saklıdır - <a href="#!"><u>Gizlilik Politikası</u></a> ve <a href="#!"><u>Rezervasyon
                                Koşulları</u></a></span>
                    <a href="https://www.wings.com.tr/" target="blank" class="wings flex-shrink-0">
                        <img src="~/assets/img/tools/wings.svg" width="65" height="24" alt="" class="contain">
                    </a>
                </div>
            </section>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>