<template>
  <section class="Filter">
    <div class="container">
      <div class="Filter-in">
        <div class="Filter-left Filters">
          <div class="Filter-left-head">
            <h4>Gelişmiş Arama</h4>
            <button type="button" class="Search-clear" onclick="filterClear()">Temizle</button>
            <button type="button" class="Search-filter-close" id="mobileFilterClose"><i
              class="icon-search-close"></i></button>
          </div>
          <div class="Filters-search mobile">
            <label for="">
              <i class="icon-search-new"></i>
              <input type="search" placeholder="Özellik arayın" onkeyup="destinationsFilter(this)">
            </label>
          </div>
          <div class="Filter-left-in">
            <div class="Filters-item Filters-item-notfound">
              <p class="Filters-item-notfound-text"><i class="icon-filter"></i>Sonuç bulunamadı</p>
            </div>

            <filter-item-checkbox-component
              title="BÖLGE"
              filterInputPlaceholder="Bölge Arayın"
              :checkboxes="destinations"
              :hideTitleBorder="true"
              @updated="updateFilter('destinations', $event)"
            ></filter-item-checkbox-component>

            <filter-item-checkbox-component
              title="TESİS TİPİ"
              :checkboxes="amenites.facilityTypes"
              @updated="updateFilter('amenites.facilityTypes', $event)"
            ></filter-item-checkbox-component>

            <filter-price-between-component
              @min_price="updateFilter('min_price', $event, false)"
              @max_price="updateFilter('max_price', $event)"
            ></filter-price-between-component>

            <filter-item-checkbox-component
              title="TESİS KONSEPTİ"
              :checkboxes="amenites.facilityConcepts"
              @updated="updateFilter('amenites.facilityConcepts', $event)"
            ></filter-item-checkbox-component>

            <filter-item-checkbox-component
              title="ÖNE ÇIKAN ÖZELLİKLER"
              :checkboxes="amenites.highlights"
              @updated="updateFilter('amenites.highlights', $event)"
            ></filter-item-checkbox-component>

            <filter-item-checkbox-component
              title="OLANAKLAR"
              :checkboxes="amenites.facilities"
              @updated="updateFilter('amenites.facilities', $event)"
            ></filter-item-checkbox-component>
          </div>

        </div>
        <div class="Filter-right">
          <div class="Filter-right-head">
            <div class="Filter-right-head-info">
              <i class="icon-list"></i>
              <p>{{ villas.length }} villa listeleniyor</p>
            </div>
            <div class="Filter-right-head-buttons">

              <div class="Filter-right-head-buttons-item">
                <span class="Filter-right-head-buttons-item-title">Sırala:</span>
                <select class="selectpicker " id="v_filter">
                  <option value="0" selected="selected"> Fiyata Göre Artan</option>
                  <option value="1">Z-A</option>
                  <option value="2">A-z</option>
                </select>
              </div>
            </div>
          </div>

          <div class="Filter-right-selected" style="">
            <div class="Filter-right-selected-in">

              <a v-for="destination in selectedDestintions" class="Filter-right-selected-item">
                Bölge:{{ destination.text }}
                <i class="icon-search-close" @click="unselect(destination)"></i>
              </a>

              <a v-for="facilityType in selectedFacilityTypes" class="Filter-right-selected-item">
                Bölge:{{ facilityType.text }}
                <i class="icon-search-close" @click="unselect(facilityType)"></i>
              </a>

              <a v-for="facilityConcept in selectedFacilityConcepts" class="Filter-right-selected-item">
                Konsept:{{facilityConcept.text}}
                <i class="icon-search-close" @click="unselect(facilityConcept)"></i>
              </a>

              <a v-for="highlight in selectedHighlights" class="Filter-right-selected-item">
                Özellik:{{highlight.text}}
                <i class="icon-search-close" @click="unselect(highlight)"></i>
              </a>

              <a v-for="facility in selectedFacilities" class="Filter-right-selected-item">
                Olanak:{{facility.text}}
                <i class="icon-search-close" @click="unselect(facility)"></i>
              </a>

              <button type="button" id="Fetures_clear" v-if="filterCount > 0" @click="clearFilter()">Temizle</button>
            </div>
          </div>




          <div class="F_villa ">

            <div class="F_villa-item" v-for="villa in villas">
              <div class="F_villa-item-img ">

                <swiper class=" swiper villa-list-slider" :options="swiperOptions">
                  <div class="swiper-slide" v-for="image in villa.preview_image">
                    <img class="lazyload" :src="image.preview_url"
                         :data-src="image.preview_url"
                         :data-srcset="image.responsive_url"/>
                  </div>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </swiper>


              </div>
              <div class="F_villa-item-right">
                <div class="F_villa-item-head">
                  <div class="F_villa-item-head-name">
                    <span>Tesis Kodu</span>
                    <a href="">{{ villa.name }}</a>
                    <div class="F_villa-item-head-name-star">
                      <i class="icon-star active"></i>
                      <i class="icon-star active"></i>
                      <i class="icon-star active"></i>
                      <i class="icon-star"></i>
                      <i class="icon-star"></i>
                      <p>4.9</p>
                    </div>
                  </div>
                  <div class="F_villa-item-head-location">
                    <i class="icon-name-location"></i>
                    <div class="F_villa-item-head-location-text">
                      <p>KALKAN
                        <span>{{ villa.country[0].toUpperCase() + villa.country.substring(1) }} /
                            {{ villa.city[0].toUpperCase() + villa.city.substring(1) }} </span>
                      </p>
                    </div>
                  </div>
                  <div class="F_villa-item-head-price F_villa-item-head-price-promotion">
                    <div class="F_villa-item-head-price-in">
                      <b>{{ villa.prices.min_price.price }}₺</b>
                      <p>‘den başlayan fiyatlar</p>
                    </div>

                    <span>GECELİK</span>
                  </div>
                </div>
                <div class="F_villa-item-info">
                  <div class="F_villa-item-info-item">
                    <i class="icon-user-new"></i>
                    <span>{{ villa.max_adult }} Kişilik</span>
                  </div>
                  <div class="F_villa-item-info-item">
                    <i class="icon-bed-new"></i>
                    <span>{{ villa.bedroom }} Yatak Odası</span>
                  </div>
                  <div class="F_villa-item-info-item">
                    <i class="icon-shower-new"></i>
                    <span>{{ villa.bathrooms }} Banyo</span>
                  </div>
                </div>
                <div class="F_villa-item-bottom">
                  <div class="F_villa-item-features">
                    <h6>Öne çıkan özellikleri</h6>
                    <div class="F_villa-item-features-in">
                      <p class="F_villa-item-features-item">Jakuzi</p>
                      <p class="F_villa-item-features-item">Deniz Manzaralı</p>
                      <p class="F_villa-item-features-item">Merkeze Yakın</p>
                      <p class="F_villa-item-features-item">Denize Yakın</p>
                      <p class="F_villa-item-features-item">Kapalı Otopark</p>
                      <p class="F_villa-item-features-item F_villa-item-features-more"><a href="" class="">Tümünü
                        Gör</a></p>
                    </div>

                  </div>
                  <a href="" class="F_villa-item-show">Villayı İncele</a>
                </div>
              </div>
            </div>

            <div
              class="holiday-banner bg-light text-white position-relative rounded-lg overflow-hidden d-flex py-3 py-sm-4 ps-3 ps-sm-4 ps-xl-5 pe-3 pe-sm-4 my-4">
              <img src="/uploads/holiday-banner.jpg"  alt=""
                   class="banner-image lazy cover flex-shrink-0 position-absolute top-0 start-0 w-100 h-100">
              <div class="d-flex flex-column position-relative ls-05 pt-3">
                <span class="fs-6 fw-medium lh-1">+1259 Seçenek ile</span>
                <span class="fs-6 fw-medium lh-1">Konaklamanın en keyifli halleri</span>
                <strong class="big-title fs-1 fw-bold lh-sm d-block mt-n1">OtelBnb’de</strong>
              </div>
              <svg class="align-self-end ms-auto" width="33px" height="36px" viewBox="0 0 14 15" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="VillaListeleme" transform="translate(-626.000000, -202.000000)" fill="#ffffff">
                    <g id="Group" transform="translate(626.000000, 202.000000)">
                      <path
                        d="M14,13.3334991 C14,14.2539193 13.2166932,15 12.25,15 C11.2836548,15 10.5,14.2539193 10.5,13.3334991 C10.5,12.4130788 11.2836548,11.6666667 12.25,11.6666667 C13.2166932,11.6666667 14,12.4130788 14,13.3334991"
                        id="Fill-13"></path>
                      <path
                        d="M6.12867316,9.20434506 C4.17402549,9.20434506 2.58538231,7.69131915 2.58538231,5.8369566 C2.58538231,3.97534751 4.17402549,2.46257148 6.12867316,2.46257148 C8.07544978,2.46257148 9.66435532,3.97534751 9.66435532,5.8369566 C9.66435532,7.69131915 8.07544978,9.20434506 6.12867316,9.20434506 M6.12867316,0 C2.74122939,0 0,2.61050069 0,5.8369566 C0,9.0559161 2.74122939,11.6666667 6.12867316,11.6666667 C9.50850825,11.6666667 12.25,9.0559161 12.25,5.8369566 C12.25,2.61050069 9.50850825,0 6.12867316,0"
                        id="Fill-15"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>

          </div>

          <nav aria-label="..." class="my-3">
            <ul class="pagination d-flex flex-wrap justify-content-center align-items-center">
              <!-- Go to First Page -->
              <li class="page-item me-2 me-sm-3 mb-1" v-if="current_page > 1">
                <a href="javascript:void(0)" @click.prevent="goToPage(1)" class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary bg-theme-light-2">
                  <svg width="7px" height="11px" viewBox="0 0 7 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="VillaListeleme" transform="translate(-860.000000, -2875.000000)" fill="#AFAFB6" fill-rule="nonzero">
                        <g id="Group-27" transform="translate(837.000000, 2861.000000)">
                          <g id="right-arrow-(3)-copy" transform="translate(26.954957, 19.166042) scale(-1, 1) translate(-26.954957, -19.166042) translate(23.919953, 14.000000)">
                            <path
                              d="M5.9052,4.762884 L1.307292,0.16506 C1.200948,0.058632 1.058988,0 0.90762,0 C0.756252,0 0.614292,0.058632 0.507948,0.16506 L0.169344,0.50358 C-0.050988,0.724164 -0.050988,1.082676 0.169344,1.302924 L4.03032,5.1639 L0.16506,9.02916 C0.058716,9.135588 0,9.277464 0,9.428748 C0,9.5802 0.058716,9.722076 0.16506,9.828588 L0.503664,10.167024 C0.610092,10.273452 0.751968,10.332084 0.903336,10.332084 C1.054704,10.332084 1.196664,10.273452 1.303008,10.167024 L5.9052,5.565 C6.011796,5.458236 6.070344,5.315688 6.07000944,5.164152 C6.070344,5.012028 6.011796,4.869564 5.9052,4.762884 Z"
                              id="Path"></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>

              <!-- Page numbers -->
              <li class="page-item me-2 me-sm-3 mb-1" v-for="(pageNumber, index) in pageNumbers" :key="index">
                <a href="javascript:void(0)" class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary"
                   :class="{ 'active': pageNumber === current_page }"
                   @click.prevent="goToPage(pageNumber)">{{ pageNumber }}</a>
              </li>

              <!-- 3 dots -->
              <!--              <li class="page-item me-2 me-sm-3 mb-1">
                              <svg width="23px" height="5px" viewBox="0 0 23 5" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                   xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <g id="VillaListeleme" transform="translate(-1109.000000, -2877.000000)" fill="#AFAFB6">
                                    <g id="Group-27" transform="translate(837.000000, 2861.000000)">
                                      <g id="Group-16" transform="translate(272.000000, 16.000000)">
                                        <circle id="Oval" cx="2.5" cy="2.5" r="2.5"></circle>
                                        <circle id="Oval-Copy" cx="11.5" cy="2.5" r="2.5"></circle>
                                        <circle id="Oval-Copy-2" cx="20.5" cy="2.5" r="2.5"></circle>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </li>-->

              <!-- Go to Last Page -->
              <li class="page-item me-2 me-sm-3 mb-1" v-if="current_page < totalPages">
                <a href="javascript:void(0)" @click.prevent="goToPage(totalPages)"
                   class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary bg-theme-light-2">
                  <svg width="7px" height="11px" viewBox="0 0 7 11" version="1.1" xmlns="http://www.w3.org/2000/svg"
                       xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="VillaListeleme" transform="translate(-1374.000000, -2875.000000)" fill="#AFAFB6"
                         fill-rule="nonzero">
                        <g id="Group-27" transform="translate(837.000000, 2861.000000)">
                          <g id="Group-19" transform="translate(514.000000, 0.000000)">
                            <g id="right-arrow-(3)" transform="translate(23.010038, 14.000000)">
                              <path
                                d="M5.9052,4.762884 L1.307292,0.16506 C1.200948,0.058632 1.058988,0 0.90762,0 C0.756252,0 0.614292,0.058632 0.507948,0.16506 L0.169344,0.50358 C-0.050988,0.724164 -0.050988,1.082676 0.169344,1.302924 L4.03032,5.1639 L0.16506,9.02916 C0.058716,9.135588 0,9.277464 0,9.428748 C0,9.5802 0.058716,9.722076 0.16506,9.828588 L0.503664,10.167024 C0.610092,10.273452 0.751968,10.332084 0.903336,10.332084 C1.054704,10.332084 1.196664,10.273452 1.303008,10.167024 L5.9052,5.565 C6.011796,5.458236 6.070344,5.315688 6.07000944,5.164152 C6.070344,5.012028 6.011796,4.869564 5.9052,4.762884 Z"
                                id="Path"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  name: "FilterVillaComponent",
  data() {
    return {
      current_page: 1,
      per_page: 10,
      total_items: 0,
      villas: [],
      min_price: null,
      max_price: null,
      destinations: [
        {
          text: "Antalya",
          code: 0,
          selected: false,
          children: [
            {
              text: "Kaş",
              code: 2,
              selected: false,
              children: [
                {
                  text: "Kalkan",
                  code: 1,
                  selected: false,
                }
              ]
            }
          ]
        },
        {
          text: "Çavdır",
          code: 0,
          selected: false,
          children: [
            {
              text: "Fethiye",
              code: 6,
              selected: false,
            },
            {
              text: "Marmaris",
              code: 0,
              selected: false,
            }
          ]
        }
      ],
      amenites: {
        facilityTypes: [
          {
            text: "Villa",
            code: "234",
            selected: false,
          },
          {
            text: "Ev",
            code: "233",
            selected: false,
          },
          {
            text: "Suite",
            code: "232",
            selected: false,
          },
          {
            text: "Dubleks",
            code: "231",
            selected: false,
          },
          {
            text: "Bungalov",
            code: "230",
            selected: false,
          },
        ],
        facilityConcepts: [
          {
            text: "Deniz manzaralı villa ve evler",
            code: "229",
            selected: false,
          },
          {
            text: "Merkezi konumdaki evler",
            code: "228",
            selected: false,
          },
          {
            text: "Lüks tatil villaları",
            code: "227",
            selected: false,
          },
          {
            text: "Lüks tatil villaları",
            code: "226",
            selected: false,
          },
          {
            text: "Muhafazakar villa",
            code: "225",
            selected: false,
          },
        ],
        highlights: [
          {
            text: "Özel Havuz",
            code: "224",
            selected: false,
          },
          {
            text: "Şezlong",
            code: "223",
            selected: false,
          },
          {
            text: "Ortak Havuz",
            code: "222",
            selected: false,
          },
          {
            text: "Isıtmalı Havuz",
            code: "221",
            selected: false,
          },
          {
            text: "Kapalı Havuz",
            code: "220",
            selected: false,
          },
        ],
        facilities: [
          {
            text: "Çamaşır Makinesi",
            code: "219",
            selected: false,
          },
          {
            text: "Hamam",
            code: "218",
            selected: false,
          },
          {
            text: "Sauna",
            code: "217",
            selected: false,
          },
          {
            text: "Küvetli Banyo",
            code: "216",
            selected: false,
          },
          {
            text: "Fırın",
            code: "215",
            selected: false,
          },
        ],
      },
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
      },
    }
  },

  mounted() {
    this.filter();
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total_items / this.per_page);
    },
    pageNumbers() {
      let pageNumbers = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    },
    selectedDestintions() {
      return this.getSelectedObjects(this.destinations);
    },
    selectedFacilityTypes() {
      return this.getSelectedObjects(this.amenites.facilityTypes);
    },
    selectedFacilityConcepts() {
      return this.getSelectedObjects(this.amenites.facilityConcepts);
    },
    selectedHighlights() {
      return this.getSelectedObjects(this.amenites.highlights);
    },
    selectedFacilities() {
      return this.getSelectedObjects(this.amenites.facilities);
    },
    filterCount() {
      return [].concat(
        this.getSelectedObjects(this.destinations),
        [].concat(
          this.getSelectedObjects(this.amenites.facilityConcepts),
          this.getSelectedObjects(this.amenites.facilityTypes),
          this.getSelectedObjects(this.amenites.facilities),
          this.getSelectedObjects(this.amenites.highlights),
        ),
      ).length;
    }
  },
  methods: {
    updateFilter(key, value, sendRequest = true) {
      this[key] = value;
      if (sendRequest) {
        this.filter();
      }
    },
    goToPage(pageNumber) {
      if (this.current_page === pageNumber) {
        return;
      }
      this.current_page = pageNumber
      this.filter(pageNumber);
    },
    filter(pageNumber = 1) {
      let data = {
        destination: this.getSelectedObjects(this.destinations).map(destination => destination.code),
        amenites: [].concat(
          this.getSelectedObjects(this.amenites.facilityConcepts),
          this.getSelectedObjects(this.amenites.facilityTypes),
          this.getSelectedObjects(this.amenites.facilities),
          this.getSelectedObjects(this.amenites.highlights),
        ).map(destination => destination.code),
        min_price: this.min_price,
        max_price: this.max_price,
      }
      this.$axios.post("/api/website/property?api_token=123456&page=" + pageNumber, data).then(response => {
        this.villas = response.data.data;
        this.per_page = response.data.per_page
        this.total_items = response.data.total
        this.current_page = response.data.current_page
      }).catch(err => console.log(err));
    },
    getSelectedObjects(checkboxes) {
      return checkboxes.reduce((selectedObjects, checkbox) => {
        if (checkbox.selected) {
          selectedObjects.push(checkbox);
        }
        if (checkbox.children) {
          selectedObjects.push(...this.getSelectedObjects(checkbox.children));
        }
        return selectedObjects;
      }, []);
    },
    unselect(item) {
      item.selected = false;
      this.filter();
    },
    updateSelection(checkbox, value) {
      checkbox.selected = value;
      if (checkbox.children) {
        checkbox.children.forEach(child => {
          this.updateSelection(child, value);
        });
      }
    },
    clearFilter() {
      this.destinations.forEach(checkbox => this.updateSelection(checkbox, false))
      this.amenites.facilityConcepts.forEach(checkbox => this.updateSelection(checkbox, false))
      this.amenites.facilityTypes.forEach(checkbox => this.updateSelection(checkbox, false))
      this.amenites.facilities.forEach(checkbox => this.updateSelection(checkbox, false))
      this.amenites.highlights.forEach(checkbox => this.updateSelection(checkbox, false))
      this.filter();
    }
  }
}
</script>

<style scoped>

</style>
