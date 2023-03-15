<template>
    <main class="main">
        <section class="Contact-header">
            <div class="container">
                <div class="Contact-header-in">
                    <h4>İletişim</h4>
                    <div class="Contact-header-pagination">
                        <a href="">Villa Kalkan ></a>
                        <a href="">İletişim</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="Contact-offices">
            <div class="Contact-offices-map" style="filter:grayscale(1)">
                <!-- <client-only>
                    <div id="map-wrap">

                        <l-map :zoom=13 :center="center" :maxZoom=16 ref="mymap">
                            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                            <l-marker :lat-lng="center">
                                <l-icon iconUrl="img/map-center.svg" :iconSize=iconSize></l-icon>
                            </l-marker>
                        </l-map>
                    </div>
                </client-only> -->
                <client-only>
                    <yandex-map :zoom="zoom" :coords="activeCoords" :controls="controls" :behaviors="behaviors"
                        :detailed-controls="detailedControls" @map-was-initialized="mapWasInitializedHandler" ref="mymap">
                        <ymap-marker marker-id="123" :coords="activeCoords" :icon="markerIcon" />
                    </yandex-map>
                </client-only>
            </div>
            <div class="Contact-offices-tab">
                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true" @click="changeMap('merkez')"><span>MERKEZ OFİS</span></button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false" @click="changeMap('londra')"><span>LONDRA OFİS</span></button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false" @click="changeMap('fethiye')"> <span>FETHİYE OFİS</span></button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div class="Contact-offices-tab-img">
                            <img src="/img/office.jpg" alt="">
                        </div>
                        <div class="Contact-offices-tab-in">

                            <div class="Contact-offices-tab-text">
                                <div class="Contact-offices-tab-text-item">
                                    <h6>ADRES</h6>
                                    <p>Kalkan Mah. Cumhuriyet Cd. No:48/2
                                        <a href="">info@villakalkan.com.tr</a>
                                    </p>
                                </div>
                                <div class="Contact-offices-tab-text-item">
                                    <h6>TELEFON</h6>
                                    <a class="phone" href="">+90 242 252 00 32</a>
                                </div>
                            </div>
                            <div class="Contact-offices-tab-text">
                                <div class="Contact-offices-tab-text-item">
                                    <h6>ÇALIŞMA SAATLERİMİZ</h6>
                                    <p class="hours"><span>Hafta içi:</span>09:00 - 23:00</p>
                                    <p class="hours"><span>Hafta sonu:</span>09:00 - 23:00</p>
                                </div>
                                <div class="Contact-offices-tab-text-item">
                                    <h6>SOSYAL MEDYA’DA</h6>
                                    <a href="" class="social"><i class="icon-facebook"></i></a>
                                    <a href="" class="social"><i class="icon-instagram"></i></a>
                                    <a href="" class="social"><i class="icon-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div class="Contact-offices-tab-img">
                            <img src="/img/office.jpg" alt="">
                        </div>
                        <div class="Contact-offices-tab-in">

                            <div class="Contact-offices-tab-text">
                                <div class="Contact-offices-tab-text-item">
                                    <h6>ADRES</h6>
                                    <p>Kalkan Mah. Cumhuriyet Cd. No:48/2
                                        <a href="">info@villakalkan.com.tr</a>
                                    </p>
                                </div>
                                <div class="Contact-offices-tab-text-item">
                                    <h6>TELEFON</h6>
                                    <a class="phone" href="">+90 242 252 00 32</a>
                                </div>
                            </div>
                            <div class="Contact-offices-tab-text">
                                <div class="Contact-offices-tab-text-item">
                                    <h6>ÇALIŞMA SAATLERİMİZ</h6>
                                    <p class="hours"><span>Hafta içi:</span>09:00 - 23:00</p>
                                    <p class="hours"><span>Hafta sonu:</span>09:00 - 23:00</p>
                                </div>
                                <div class="Contact-offices-tab-text-item">
                                    <h6>SOSYAL MEDYA’DA</h6>
                                    <a href="" class="social"><i class="icon-facebook"></i></a>
                                    <a href="" class="social"><i class="icon-instagram"></i></a>
                                    <a href="" class="social"><i class="icon-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div class="Contact-offices-tab-img">
                            <img src="/img/office.jpg" alt="">
                        </div>
                        <div class="Contact-offices-tab-in">

                            <div class="Contact-offices-tab-text">
                                <div class="Contact-offices-tab-text-item">
                                    <h6>ADRES</h6>
                                    <p>Kalkan Mah. Cumhuriyet Cd. No:48/2
                                        <a href="">info@villakalkan.com.tr</a>
                                    </p>
                                </div>
                                <div class="Contact-offices-tab-text-item">
                                    <h6>TELEFON</h6>
                                    <a class="phone" href="">+90 242 252 00 32</a>
                                </div>
                            </div>
                            <div class="Contact-offices-tab-text">
                                <div class="Contact-offices-tab-text-item">
                                    <h6>ÇALIŞMA SAATLERİMİZ</h6>
                                    <p class="hours"><span>Hafta içi:</span>09:00 - 23:00</p>
                                    <p class="hours"><span>Hafta sonu:</span>09:00 - 23:00</p>
                                </div>
                                <div class="Contact-offices-tab-text-item">
                                    <h6>SOSYAL MEDYA’DA</h6>
                                    <a href="" class="social"><i class="icon-facebook"></i></a>
                                    <a href="" class="social"><i class="icon-instagram"></i></a>
                                    <a href="" class="social"><i class="icon-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="Contact-form">
            <div class="container">
                <div class="Contact-form-in">
                    <div class="Contact-form-title">
                        <h1>Bizimle iletişime geç!</h1>
                        <p>Size nasıl yardımcı olabiliriz?</p>
                    </div>

                    <form action="">
                        <div class="Contact-form-item">
                            <label for="">
                                <input type="text" placeholder="Adınız">
                                <i class="icon-user"></i>
                            </label>
                        </div>
                        <div class="Contact-form-item">
                            <label for="">
                                <input type="text" placeholder="Soyadınız">
                                <i class="icon-user"></i>
                            </label>
                        </div>
                        <div class="Contact-form-item">
                            <label for="">
                                <input type="text" placeholder="Mail Adresiniz">
                                <i class="icon-user"></i>
                            </label>
                        </div>
                        <div class="Contact-form-item">
                            <label for="">
                                <input type="text" placeholder="Telefon">
                                <i class="icon-user"></i>
                            </label>
                        </div>
                        <div class="Contact-form-item w-100">
                            <label for="">
                                <textarea name="" id="" placeholder="Mesajınız"></textarea>
                                <i class="icon-user"></i>
                            </label>
                        </div>
                        <div class="Contact-form-item Contact-form-item-checkbox w-100">
                            <label for="" id="kvkkinput">
                                <input type="checkbox" id="kvkkinput">
                                <span></span>
                                <p><a href="">KVKK Aydınlatma metnini</a> okudum.</p>
                            </label>
                        </div>
                        <div class="Contact-form-item Contact-form-item-checkbox w-100">
                            <label for="marka">
                                <input type="checkbox" id="marka">
                                <span></span>
                                <p>Markamız ile ilgili gelişmelerden haberdar olmak için tarafıma elektronik ileti
                                    gönderilmesini kabul ederim.</p>
                            </label>
                        </div>

                        <button type="submit">GÖNDER</button>

                    </form>
                </div>
            </div>
        </div>
    </main>
</template>
  
<script>
export default {
    name: 'iletisim',
    layout: 'no-search',
    head() {
        return {
            title: 'İletişim',
            meta: [
                { hid: 'description', name: 'description', content: 'anasayfa' },
                { hid: 'keywords', name: 'keywords', content: 'anasayfa1, anasayfa2, anasayfa3' }
            ],
            link: [
                { rel: 'stylesheet', href: `/css/iletisim.min.css` },
            ]
        }
    },
    data() {
        return {
            coords: [[36.618867138910204, 29.145069037654377]],
            zoom: 9,
            controls: ["zoomControl"],
            behaviors: ["drag"],
            detailedControls: {
                zoomControl: {
                    position: {
                        right: 10,
                        top: 100
                    }
                }
            },
            picked: 0,
            markerIcon: {
                type: "Point",
                content: 'Merkez Ofis',
                contentOffset: [35, 15],
                contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            },
            ymaps: null
        }
    },
    methods: {
        changeMap(e) {
            if (e == 'merkez') {
                this.ymaps.setCenter([36.6232369395677, 29.14690812467539])
                
            }
            if (e == 'londra') {
                this.ymaps.setCenter([34.618867138910204, 32.145069037654377])
            }
            if (e == 'fethiye') {
                this.ymaps.setCenter([36.2656123842673, 29.40653015476229])
                this.ymaps.geoObjects.add(new ymaps.GeoObject({
                    geometry: {
                        type: "Point",
                        coordinates: [36.2656123842673, 29.40653015476229]
                    },
                    properties: {
                        iconContent: 'Kalkan Ofis',
                    }
                }, {
                    preset: 'islands#blackStretchyIcon',
                    draggable: false,
                }))
            }
        },
        mapWasInitializedHandler(map) {
            console.log(map);
            this.ymaps = map
        }
    },
    computed: {
        activeCoords() {
            return this.coords[this.picked];
        },
    },
    mounted() {

        // this.$refs.mymap.mapObject.invalidateSize()
    }
}
</script>
<style>
.ymap-container {
    height: 100%;
}
</style>
  