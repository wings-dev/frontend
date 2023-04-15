<template>
    <div class="Success">
        <div class="container">
            <div class="Success-in py-5">
                <div class="Login">

                    <div class="Login-in">
                        <div class="Login-left">
                            <div class="Login-card">
                                <div class="Login-card-img">
                                    <img src="https://d1t2mawg5vwzes.cloudfront.net/property/493/9492/conversions/1-preview.jpg"
                                        alt="">
                                    <div class="Login-card-img-text">
                                        <div class="Login-card-img-text-head">
                                            <span>Villa kodu</span>
                                            <b>VKV7435</b>
                                        </div>
                                        <div class="Login-card-img-text-in">
                                            <span>4 yetişkin</span>
                                            <span>2 Banyo</span>
                                            <span>2 Yatak Odası</span>
                                        </div>
                                    </div>
                                    <div class="Login-card-img-link">
                                        <a><i class="icon-arrow-right-up"></i></a>
                                    </div>
                                </div>

                                <div class="Login-card-content">
                                    <p class="Login-card-content-total">
                                        Toplam Ödeme <span>34.500TL</span>
                                    </p>
                                    <div class="Login-card-content-bottom">
                                        <div class="Login-card-content-bottom-item">
                                            <p>Ön Ödeme <span>10.200TL</span></p>
                                            <small>Rezervasyonu gerçekleştirmek için yapmanız gereken ön ödeme
                                                tutarı</small>
                                        </div>
                                        <div class="Login-card-content-bottom-item">
                                            <p>Tesise Girişte <span>24.300TL</span></p>
                                            <small>Ön ödeme sonrası yapmanız gereken kalan tutar girişte
                                                alınacaktır.</small>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="Login-right success">
                            <div class="Login-right-in">
                                <i class="icon-check-big"></i>
                                <h2>Ön rezervasyon talebiniz başarıyla alındı.</h2>
                                <p>Size en kısa sürede E-posta ve SMS ile dönüş sağlayacağız.</p>
                                <a href="javascript:void(0)" @click="goHome" class="Login-form-button mt-1">Anasayfaya
                                    Dön</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'ReservationSuccess',
    layout: 'no-search'
}
</script>
    
    