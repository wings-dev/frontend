<template>
  <div>
    <header class="header bg-theme-first text-white border-bottom border-theme-first-light position-sticky top-0">
    <div class="container d-flex">
        <a href="anasayfa.php" class="logo-wrapper d-block py-3 py-sm-4 flex-shrink-0 me-auto me-xl-4 pe-3">
            <img src="~/assets/img/otelbnb-light.svg" alt="otelbnb" class="header-logo contain my-sm-0 my-1">
        </a>
        <nav class="header-menu flex-fill">
            <ul class="menu d-flex flex-column flex-xl-row align-items-xl-center ls-1 fw-medium h-100 mb-xl-0 mb-3">
                <li class="h-100 me-xl-2 pe-xl-1"><a href="#!" class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">Otel</a></li>
                <li class="h-100 me-xl-2 pe-xl-1"><a href="#!" class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">Erken Rezervasyon</a></li>
                <li class="h-100 me-xl-2 pe-xl-1"><a href="#!" class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">Tatil Villası</a></li>
                <li class="h-100 me-xl-2 pe-xl-1"><a href="#!" class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">Kış Tatili</a></li>
                <li class="h-100 me-xl-2 pe-xl-1"><a href="#!" class="menu-link d-flex align-items-center position-relative h-100 px-xl-2 py-3 py-xl-4">Fırsatlar</a></li>
            </ul>
            <div class="btn btn-theme-first fs-7 ls-1 fw-medium w-100 py-2 d-md-none">
                <span class="d-block py-1">ÜYELİK</span>
            </div>
        </nav>
        <div class="fav-list-wrapper align-self-center me-3 me-sm-4">
            <button type="button" class="toggle-favs flex-shrink-0 btn btn-theme-first-dark rounded-circle d-flex align-items-center justify-content-center shadow-none p-0" aria-label="Favorileri aç">
                <svg width="13px" height="12px" viewBox="0 0 13 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="anasayfa" transform="translate(-1226.000000, -35.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g id="heart" transform="translate(1226.000000, 35.000000)">
                                <path d="M11.7845703,1.11445313 C11.1219727,0.395800775 10.212793,0 9.2243164,0 C8.48544923,0 7.80878905,0.23359375 7.21308595,0.694238275 C6.9125,0.9267578 6.64013673,1.21123048 6.4,1.54326173 C6.15996095,1.21132813 5.8875,0.9267578 5.5868164,0.694238275 C4.99121095,0.23359375 4.31455078,0 3.5756836,0 C2.58720703,0 1.6779297,0.395800775 1.01533203,1.11445313 C0.360644525,1.82470703 1.42108547e-15,2.79501953 1.42108547e-15,3.84677735 C1.42108547e-15,4.92929688 0.403417975,5.92021485 1.26953125,6.96533203 C2.04433595,7.9001953 3.15791015,8.84921875 4.44746095,9.94814453 C4.88779298,10.3234375 5.38691405,10.7488281 5.90517578,11.2019531 C6.04208985,11.321875 6.21777345,11.3878906 6.4,11.3878906 C6.5821289,11.3878906 6.75791015,11.321875 6.8946289,11.2021485 C7.41289063,10.7489258 7.9123047,10.3233398 8.35283203,9.94785155 C9.6421875,8.8491211 10.7557617,7.9001953 11.5305664,6.96523438 C12.3966797,5.92021485 12.8,4.92929688 12.8,3.8466797 C12.8,2.79501953 12.4393555,1.82470703 11.7845703,1.11445313 Z" id="Path"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </button>
            <div class="fav-list"></div>
        </div>
        <a href="tel:444 8 484" class="support-link d-none d-sm-flex align-items-center align-self-center ms-1 me-3 me-md-4 pe-2">
            <img src="~/assets/img/spacer.gif" data-src="~/assets/img/icons/002-phone-call.svg" width="31" height="31" alt="phone-call" class="lazy contain me-1">
            <div class="d-flex flex-column pt-1 ls-05">
                <span class="fs-8 text-white text-opacity-50 lh-sm ls-1">Yardım / Destek</span>
                <strong class="d-block fw-medium mt-n1">444 8 484</strong>
            </div>
        </a>
        <a href="uye-giris.php" class="membership btn btn-white btn-ripple text-primary fs-7 fw-medium ls-05 py-2 py-xl-3 px-3 px-xl-4 rounded-pill lh-sm shadow-none align-self-center d-md-flex d-none">
            <span class="d-inline-block px-1 px-xl-2 py-1 py-xl-0">Üyelik</span>
        </a>
        <button type="button" class="menu-toggle bg-transparent align-self-center d-xl-none ms-xl-0 ms-md-4" onclick="$(this).toggleClass('hide');$('.header-menu').toggleClass('show');$('.header-menu-shadow').toggleClass('show');">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
    <div class="header-menu-shadow position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-25" onclick="$(this).removeClass('show');$('.header-menu').removeClass('show');$('.menu-toggle').removeClass('hide');"></div>
</header>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>