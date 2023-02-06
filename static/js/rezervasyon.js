$(document).ready(function() {
    function passportCheck() {
        if ($('#passport-check').is(':checked')) {
            $('.tc-in').addClass('d-none');
            $('.passport-in').removeClass('d-none');
        } else {
            $('.tc-in').removeClass('d-none');
            $('.passport-in').addClass('d-none');
        }
    }
    function submitCalc() {
        let submitOffset = parseInt($('.content-submit').offset().top - $(window).height());
        if ($(window).scrollTop() > submitOffset) {
            $('.sidebar-submit-wrapper').removeClass('show');
            $('.content-submit-wrapper').addClass('show');
        } else {
            $('.sidebar-submit-wrapper').addClass('show');
            $('.content-submit-wrapper').removeClass('show');
        }
    }
    
    passportCheck();
    $('#passport-check').on("change", function() { passportCheck() });
    
    submitCalc();
    $(window).scroll(function() {
        submitCalc();
    })
})