<template>
  <client-only>
    <div class="Success">
      <div class="container">
        <div class="Success-in ">
          <div class="Login">

            <div class="Login-in">
              <div class="Login-left">
                <div class="Login-card">
                  <div class="Login-card-img">
                    <nuxt-img :src="global_cdn + villa.watermark_images[0].preview_url" :srcset="generateSrcset(villa.watermark_images[0].responsive)" width="337" height="225" loading="lazy" placeholder alt="Reservation Success" class="cover"/>
                    <div class="Login-card-img-text">
                      <div class="Login-card-img-text-head">
                        <span>Villa kodu</span>
                        <b>{{ prefix }}{{ villa.code }}</b>
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
                      Toplam Ödeme <span>{{ hash.availabilityData.total_payment | numberFormat }}TL</span>
                    </p>
                    <div class="Login-card-content-bottom">
                      <div class="Login-card-content-bottom-item">
                        <p>Ön Ödeme <span>{{ hash.availabilityData.advance_payment | numberFormat }}TL</span></p>
                        <small>Rezervasyonu gerçekleştirmek için yapmanız gereken ön ödeme
                          tutarı</small>
                      </div>
                      <div class="Login-card-content-bottom-item">
                        <p>Tesise Girişte <span>{{ hash.availabilityData.remaining_payment | numberFormat }}TL</span>
                        </p>
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
                  <h3><span>{{ prefix }}{{ hash.reservationID }}</span> Rezervasyon kodu ile</h3>
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
  </client-only>
</template>

<script>
import cdnSrcsetMixin from '@/mixins/cdnSrcsetMixin';
export default {
  name: 'ReservationSuccess',
  layout: 'no-search',
  mixins: [cdnSrcsetMixin],
  head() {
        return {
            title:"Rezervasyon Talebiniz Başarılı"
        }
    },
  data() {
    return {
      hash: {},
      villa: {},
      prefix: process.env.PREFIX,
      global_cdn: process.env.GLOBAL_CDN_URL,
    }
  },
  async asyncData({query, $getRedisKey, redirect}) {
    if (query.reservationID && query.hash) {
      const hash = JSON.parse(Buffer.from(query.hash, 'base64').toString('utf-8'));

      const data = await $getRedisKey([`data:villas:${hash.villa_id}:detail`])
      // villa redis datası
      const villa = data[`data:villas:${hash.villa_id}:detail`];
      console.log(villa,hash)
      return {
        hash,
        villa
      };
    } else {
      return redirect('/')
    }
  },
  mounted() {
    this.removeQueryString()

    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // Ocak 0 ile başlar, bu yüzden +1 ekliyoruz
    var dd = String(today.getDate()).padStart(2, '0');

    var formattedDate = yyyy + '-' + mm + '-' + dd;

    this.$gtm.push({
        'event': 'rez_ok',
        'start_date': formattedDate,
        'end_date': formattedDate,
        'rez_kod': this.hash.reservationID,
        'rez_tutar': this.hash.availabilityData.total_payment,
        'rez_id': this.hash.reservationID,
        'villa_id': this.villa.code,
        'villa_ad': this.villa.code
      }
    )

    this.$gtm.push({
      event: "purchase",
      ecommerce: {
        transaction_id: this.hash.reservationID,
        value: this.hash.availabilityData.total_payment,
        currency: "TRY",
        items: [
          {
            item_id: this.villa.code,
            item_name: this.villa.code,
            item_brand: "Villa Kalkan",
            price: this.hash.availabilityData.total_payment,
            quantity: 1
          }]
      }
    })
  },
  methods: {
    removeQueryString() {
      const currentUrl = window.location.href;
      const urlWithoutQueryString = currentUrl.split('?')[0];
      window.history.replaceState({}, '', urlWithoutQueryString);
    }
  }
}
</script>

