<template>
    <main class="main">
        <section class="Contact-header">
            <div class="container">
                <div class="Contact-header-in">
                    <h4>İletişim</h4>
                    <div class="Contact-header-pagination">
                        <a href="">{{siteName | titlecase}} ></a>
                        <a href="">İletişim</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="Contact-offices">
            <div class="Contact-offices-map" style="filter:grayscale(1);">
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

                    <li class="nav-item" role="presentation" v-for="(item, index) in pageData.page_content.contact_list"
                        :key="index">
                        <button class="nav-link" :class="index == 0 ? 'active' : ''" :id="'pills-office-tab' + index"
                            data-bs-toggle="pill" :data-bs-target="'#pills-office' + index" type="button" role="tab"
                            aria-selected="false" @click="changeMap(item.ofis_name)"><span>{{ item.ofis_name }}</span></button>
                    </li>

                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade " :class="index == 0 ? 'show active' : ''" :id="'pills-office' + index" role="tabpanel"
                        :aria-labelledby="'pills-office-tab' + index"
                        v-for="(item, index) in pageData.page_content.contact_list" :key="index">
                        <div class="Contact-offices-tab-img">
                            <nuxt-img src="/img/office.jpg" alt="" loading="lazy" placeholder />
                        </div>
                        <div class="Contact-offices-tab-in">

                            <div class="Contact-offices-tab-text">
                                <div class="Contact-offices-tab-text-item">
                                    <h6>ADRES</h6>
                                    <p>{{ item.ofis_address }}
                                        <a :href="'mailto:' + item.ofis_mail">{{ item.ofis_mail }}</a>
                                    </p>
                                </div>
                                <div class="Contact-offices-tab-text-item">
                                    <h6>TELEFON</h6>
                                    <a :href="'mailto:' + item.ofis_phone" class="phone">{{ item.ofis_phone }}</a>
                                </div>
                            </div>
                            <div class="Contact-offices-tab-text">
                                <div class="Contact-offices-tab-text-item">
                                    <h6>ÇALIŞMA SAATLERİMİZ</h6>
                                    <p class="hours"><span>Hafta içi: </span>{{ item.ofis_workinghours_midweek }}</p>
                                    <p class="hours"><span>Hafta sonu: </span>{{ item.ofis_workinghours_weekend }}</p>
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
                                <input type="text" placeholder="Adınız*" v-model="form.data.name">
                                <i class="icon-user"></i>
                            </label>
                        </div>
                        <div class="Contact-form-item">
                            <label for="">
                                <input type="text" placeholder="Soyadınız*" v-model="form.data.surname">
                                <i class="icon-user"></i>
                            </label>
                        </div>
                        <div class="Contact-form-item">
                            <label for="">
                                <input type="text" placeholder="Mail Adresiniz*" v-model="form.data.email">
                                <i class="icon-user"></i>
                            </label>
                        </div>
                        <div class="Contact-form-item">
                            <label for="">
                                <input type="text" placeholder="Telefon*" v-model="form.data.phone">
                                <i class="icon-user"></i>
                            </label>
                        </div>
                        <div class="Contact-form-item w-100">
                            <label for="">
                                <textarea name="" id="" placeholder="Mesajınız*" v-model="form.data.message"></textarea>
                                <i class="icon-user"></i>
                            </label>
                        </div>
                        <div class="Contact-form-item Contact-form-item-checkbox w-100">
                            <label for="" id="kvkkinput">
                                <input type="checkbox" id="kvkkinput" v-model="form.data.kvkkSelected" :checked="form.data.kvkkSelected">
                                <span></span>
                                <p><a href="">KVKK Aydınlatma metnini</a> okudum.*</p>
                            </label>
                        </div>
                        <div class="Contact-form-item Contact-form-item-checkbox w-100">
                            <label for="marka">
                                <input type="checkbox" id="marka" v-model="form.data.informSelected" :checked="form.data.informSelected">
                                <span></span>
                                <p>Markamız ile ilgili gelişmelerden haberdar olmak için tarafıma elektronik ileti
                                    gönderilmesini kabul ederim.</p>
                            </label>
                        </div>

                        <button type="button" @click="send" :disabled="buttonDisabled">GÖNDER</button>

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
        return this.headData
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
            ymaps: null,
            pageData: null,
            officeCoordinates: [],
            siteName: process.env.SITE_NAME,
            form: {
              type: 2,
              data: {
                name: '',
                surname: '',
                email: '',
                phone: '',
                message: '',
                kvkkSelected: false,
                informSelected: false,
                source_id: process.env.SOURCE_ID,
              }
            }
        }
    },
    async asyncData({ $getRedisKey }) {
        const site_id = process.env.SITE;
        let pageData = {};
        pageData = await $getRedisKey(`web:${site_id}:pages:iletisim`);
        const pageContent = pageData.page_content;
        const contactList = pageContent.contact_list;
        const officeCoordinates = [];
        let headData = {
          title: pageData.title,
          meta: pageData.meta
        }

        contactList.forEach(office => {
            const coordinates = {
                x: office.ofis_map_coordinate_x,
                y: office.ofis_map_coordinate_y
            };
            officeCoordinates.push(coordinates);
        });

        return { pageData,officeCoordinates,headData }
    },
    methods: {
        async send() {
          try {
            const response = await this.$axios.post(`/website/form?api_token=${process.env.WEBSITE_TOKEN}`, this.form)

            this.form = {
              type: 2,
              data: {
                name: '',
                surname: '',
                email: '',
                phone: '',
                message: '',
                kvkkSelected: false,
                informSelected: false,
                source_id: process.env.SOURCE_ID,
              }
            }

            this.$toast.success(response.data.message, {
              className:'custom-toast success-toast',
              icon: {
                name: 'icon-reservation-success',
              },
              action : {
                icon:'icon-toast-exit',
                onClick : (e, toastObject) => {
                  toastObject.goAway(0);
                }
              }
            })
          } catch (e) {
            this.$toast.error("<p>Bir hata oldu! Lütfen telefon numaramızdan iletişime geçiniz.</p>", {
              className:'custom-toast error-toast',
              icon: {
                name: 'icon-reservation-cancel',
              },
              action : {
                icon:'icon-toast-exit',
                onClick : (e, toastObject) => {
                  toastObject.goAway(0);
                }
              }
            })
          }
        },
        changeMap(e) {
            if (e == 'Merkez') {
                this.ymaps.setCenter([this.officeCoordinates[0].x, this.officeCoordinates[0].y])
            }

            if (e == 'Fethiye') {
                this.ymaps.setCenter([this.officeCoordinates[1].x, this.officeCoordinates[1].y])
                this.ymaps.geoObjects.add(new ymaps.GeoObject({
                    geometry: {
                        type: "Point",
                        coordinates: [this.officeCoordinates[1].x, this.officeCoordinates[1].y]
                    },
                    properties: {
                        iconContent: 'Kalkan Ofis',
                    }
                }, {
                    preset: 'islands#blackStretchyIcon',
                    draggable: false,
                }))
            }
            if (e == 'Londra') {
                this.ymaps.setCenter([this.officeCoordinates[2].x, this.officeCoordinates[2].y])
                this.ymaps.geoObjects.add(new ymaps.GeoObject({
                    geometry: {
                        type: "Point",
                        coordinates: [this.officeCoordinates[2].x, this.officeCoordinates[2].y]
                    },
                    properties: {
                        iconContent: 'Londra Ofis',
                    }
                }, {
                    preset: 'islands#blackStretchyIcon',
                    draggable: false,
                }))
            }
        },
        mapWasInitializedHandler(map) {
            this.ymaps = map
        }
    },
    computed: {
        buttonDisabled() {
          if (!this.form.data.kvkkSelected) {
            return true;
          }

          // form.data içindeki tüm alanlarının doluluk durumunu kontrol et
          const keys = Object.keys(this.form.data);
          for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const value = this.form.data[key];

            // Eğer herhangi bir alan boşsa, buttonDisabled true döndür
            if (value === '' || value === null || value === undefined) {
              return true;
            }
          }

          // Tüm alanlar doluysa, buttonDisabled false döndür
          return false;
        },
        activeCoords() {
            return [[this.officeCoordinates[0].x, this.officeCoordinates[0].y]][this.picked];
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
