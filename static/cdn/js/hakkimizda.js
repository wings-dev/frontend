$(document).ready(function() {
    var swiper = new Swiper(".gallery", {
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        breakpoints: {
            576: {
                slidesPerView: 1,
                spaceBetween: 6,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 6,
            },
        },
    });
})