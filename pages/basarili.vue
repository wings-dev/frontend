<template>
  <div class="Success">
    <div class="container">
      <div class="Success-in ">
        <div class="Login">

          <div class="Login-in">
            <div class="Login-left">
              <div class="Login-card">
                <div class="Login-card-img">
                  <img :src="villa.watermark_images[0].preview_url"
                       alt="">
                  <div class="Login-card-img-text">
                    <div class="Login-card-img-text-head">
                      <span>Villa kodu</span>
                      <b>{{prefix}}{{villa.code}}</b>
                    </div>
                    <div class="Login-card-img-text-in">
                      <span>{{ villa.max_adult }} yetişkin</span>
                      <span>{{ villa.bathrooms }} Banyo</span>
                      <span>{{ villa.bedroom }} Yatak Odası</span>
                    </div>
                  </div>
                  <div class="Login-card-img-link">
                    <a><i class="icon-arrow-right-up"></i></a>
                  </div>
                </div>

                <div class="Login-card-content">
                  <p class="Login-card-content-total">
                    Toplam Ödeme <span>{{hash.availabilityData.total_payment | numberFormat}}TL</span>
                  </p>
                  <div class="Login-card-content-bottom">
                    <div class="Login-card-content-bottom-item">
                      <p>Ön Ödeme <span>{{hash.availabilityData.advance_payment | numberFormat}}TL</span></p>
                      <small>Rezervasyonu gerçekleştirmek için yapmanız gereken ön ödeme
                        tutarı</small>
                    </div>
                    <div class="Login-card-content-bottom-item">
                      <p>Tesise Girişte <span>{{hash.availabilityData.remaining_payment | numberFormat}}TL</span></p>
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
                <h3><span>{{prefix}}{{hash.reservationID}}</span> Rezervasyon kodu ile</h3>
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
  data() {
    return {
      hash: {},
      villa: {},
      prefix: process.env.PREFIX
    }
  },
  async asyncData({query, $getRedisKey}) {
    const hash = JSON.parse(Buffer.from(query.hash, 'base64').toString('utf-8'));

    const data = await $getRedisKey([`data:villas:${hash.villa_id}:detail`])
    // villa redis datası
    const villa = data[`data:villas:${hash.villa_id}:detail`];

    return {
      hash,
      villa
    };
  },
  mounted() {
  }
}
</script>

