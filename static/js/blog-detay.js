$(document).ready(function(){
    new Swiper(".similar-blogs", {
        slidesPerView: 1.3,
        spaceBetween: 16,
        loop: false,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".list-navigation-next",
            prevEl: ".list-navigation-prev",
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });
})