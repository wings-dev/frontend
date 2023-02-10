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

          <div class="Filter-right-selected">
            <div class="Filter-right-selected-in">

              <a v-for="destination in selectedDestinations" class="Filter-right-selected-item">
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

            <filter-villa-preview-component v-for="(villa, index) in villas" :key="index" :villa="villa"></filter-villa-preview-component>

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
      return Array.from({length: this.totalPages}, (_, i) => i + 1);
    },
    selectedDestinations() {
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
      return [
        ...this.selectedDestinations,
        ...this.selectedFacilityConcepts,
        ...this.selectedFacilityTypes,
        ...this.selectedFacilities,
        ...this.selectedHighlights,
      ].length;
    }
  },
  methods: {
    updateFilter(key, value, sendRequest = true) {
      this[key] = value;
      sendRequest && this.filter();
    },
    goToPage(pageNumber) {
      if (pageNumber === this.current_page) return;
      this.current_page = pageNumber;
      this.filter(pageNumber);
    },
    filter(pageNumber = 1) {
      const data = {
        destination: this.selectedDestinations.map(({ code }) => code),
        amenites: [
          ...this.selectedFacilityConcepts,
          ...this.selectedFacilityTypes,
          ...this.selectedFacilities,
          ...this.selectedHighlights,
        ].map(({ code }) => code),
        min_price: this.min_price,
        max_price: this.max_price
      };

      this.$axios
        .post(`/api/website/property?api_token=123456&page=${pageNumber}`, data)
        .then(({ data: responseData }) => {
          this.villas = responseData.data;
          this.per_page = responseData.per_page;
          this.total_items = responseData.total;
          this.current_page = responseData.current_page;
        })
        .catch(console.error);
    },
    getSelectedObjects(checkboxes) {
      return checkboxes.reduce((selected, checkbox) => {
        if (checkbox.selected) selected.push(checkbox);
        if (checkbox.children) selected.push(...this.getSelectedObjects(checkbox.children));
        return selected;
      }, []);
    },
    unselect(item) {
      item.selected = false;
      this.filter();
    },
    updateSelection(checkbox, value) {
      checkbox.selected = value;
      checkbox.children && checkbox.children.forEach(child => this.updateSelection(child, value));
    },
    clearFilter() {
      [
        ...this.destinations,
        ...this.amenites.facilityConcepts,
        ...this.amenites.facilityTypes,
        ...this.amenites.facilities,
        ...this.amenites.highlights
      ].forEach(checkbox => this.updateSelection(checkbox, false));
      this.filter();
    }
  }
}
</script>

<style scoped>

</style>
