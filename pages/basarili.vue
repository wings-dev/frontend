<template>
    <div class="Success">
        <div class="container">
            <div class="Success-in ">
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
                                <h3><span>VKV1195110532417</span> Rezervasyon kodu ile</h3>
                                <h2>Ön Rezervasyon talebiniz alınmıştır.</h2>
                                <p>Satış ekibimiz tesisle ilgili son kontrolleri yapıp sms veya telefonla size geri dönüş
                                    sağlayacaktır.</p>
                                <nuxt-link to="/" class="Login-form-button mt-1">Anasayfaya Dön</nuxt-link>
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
    layout: 'no-search',
    mounted(){
        console.log(navigator)
    }
}
</script>
    
    