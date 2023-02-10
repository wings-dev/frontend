$(document).ready(function () {
    $('form').card({
        container: '.card-wrapper',
        placeholders: {
            number: '&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;',
            cvc: '&bull;&bull;&bull;',
            expiry: '&bull;&bull;/&bull;&bull;',
            name: 'Full Name'
        }

    });
})