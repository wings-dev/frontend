<template>
  <section class="Filter">
    <div class="container">
      <div class="Filter-in">
        <div class="Filter-left Filters" :class="{ show: isMobileFilterOpen }">
          <div class="Filter-left-head more">
            <h4>Gelişmiş Arama</h4>
            <button type="button" class="Search-filter-close" id="mobileFilterClose" @click="closeMobileFilter()">
              <i class="icon-login-close"></i>
            </button>
          </div>
          <div class="Filter-left-selected">

            <a v-for="facilityType in selectedFacilityTypes" class="Filter-right-selected-item">
              Bölge:{{ facilityType.text }}
              <i class="icon-search-close" @click="unselect(facilityType)"></i>
            </a>

            <a v-for="facilityConcept in selectedFacilityConcepts" class="Filter-right-selected-item">
              Konsept:{{ facilityConcept.text }}
              <i class="icon-search-close" @click="unselect(facilityConcept)"></i>
            </a>

            <a v-for="facility in selectedFacilities" class="Filter-right-selected-item">
              Olanak:{{ facility.text }}
              <i class="icon-search-close" @click="unselect(facility)"></i>
            </a>
          </div>
          <div class="Filter-left-in">
            <div class="Filters-item Filters-item-notfound">
              <p class="Filters-item-notfound-text"><i class="icon-filter"></i>Sonuç bulunamadı</p>
            </div>

            <filter-item-checkbox-component title="BÖLGE" filterInputPlaceholder="Bölge Arayın" :checkboxes="destinations"
              :hideTitleBorder="true" @updated="updateFilter('destinations', $event)"
              groupName="destinationCheckbox"></filter-item-checkbox-component>

            <filter-item-checkbox-component title="TESİS TİPİ" :checkboxes="amenites.facilityTypes"
              :groups="amenites.groups.facilityTypes" @updated="updateFilter('amenites.facilityTypes', $event)"
              groupName="typeCheckbox"></filter-item-checkbox-component>

            <filter-item-checkbox-component title="TESİS KATEGORİLERİ" :checkboxes="amenites.facilityConcepts"
              :groups="amenites.groups.facilityConcepts" @updated="updateFilter('amenites.facilityConcepts', $event)"
              groupName="categoryCheckbox"></filter-item-checkbox-component>

            <filter-item-checkbox-component title="OLANAKLAR" :checkboxes="amenites.facilities"
              :groups="amenites.groups.facilities" @updated="updateFilter('amenites.facilities', $event)"
              groupName="facilitiesCheckbox"></filter-item-checkbox-component>
            <!-- <filter-item-checkbox-component title="TESİS OLANAKLARI" filterInputPlaceholder="Özellik Arayın"
              :checkboxes="amenites.facilities" :hideTitleBorder="true"
              @updated="updateFilter('amenites.facilities', $event)"
              :isFacilities="true"
              ></filter-item-checkbox-component> -->

            <filter-price-between-component :min="slider_price_min" :max="slider_price_max" :currency="slider_price_currency" @min_price="updateFilter('min_price', $event, false)"
              @max_price="updateFilter('max_price', $event)" groupName="priceRange"></filter-price-between-component>

            <button type="button" class="Search-clear-mobile" v-show="filterCount > 0" @click="clearFilter()">Tümünü
              Temizle</button>

            <div class="Filters-in-m-button-container">
              <button type="button" @click="closeMobileFilter()" class="Filters-in-m-button">Uygula</button>
            </div>

          </div>

        </div>
        <div class="Filter-right">



          <div class="Filter-right-head">
            <div class="Filter-right-head-info">
              <i class="icon-list"></i>
              <p>{{ total_items }} villa listeleniyor</p>
            </div>
            <div class="Filter-right-head-buttons">

              <div class="Filter-right-head-buttons-item">
                <client-only>
                  <VSelect :options="orderValues" :labelTitle="orderPlaceholder" @input="orderChanged" />
                </client-only>
              </div>
              <button type="button" @click="openMobileFilter()"
                class="Filter-right-head-buttons-item mobile-filter-button"><i class="icon-new-filter"></i>FİLTRELE
                <span>(4)</span></button>
            </div>
          </div>

          <div class="Filter-right-selected">
            <div class="Filter-right-selected-in" :class="{ active: isExpandedMore }" id="selectedItems">

              <a v-for="destination in selectedDestinations" class="Filter-right-selected-item">
                Bölge:{{ destination.text }}
                <i class="icon-search-close" @click="unselect(destination)"></i>
              </a>

              <!-- <a v-for="facilityType in selectedFacilityTypes" class="Filter-right-selected-item">
                Bölge:{{ facilityType.text }}
                <i class="icon-search-close" @click="unselect(facilityType)"></i>
              </a>

              <a v-for="facilityConcept in selectedFacilityConcepts" class="Filter-right-selected-item">
                Konsept:{{ facilityConcept.text }}
                <i class="icon-search-close" @click="unselect(facilityConcept)"></i>
              </a> -->

              <a v-for="facility in selectedFacilities" class="Filter-right-selected-item">
                Olanak:{{ facility.text }}
                <i class="icon-search-close" @click="unselect(facility)"></i>
              </a>
            </div>
            <button type="button" id="Fetures_clear" v-show="filterCount > 0" @click="clearFilter()">Temizle</button>
            <button type="button" class="morebutton" @click="isExpandedMore = !isExpandedMore" ref="moreButton">{{
              !isExpandedMore ? 'TÜMÜNÜ GÖR'
              : 'DAHA AZ GÖR' }}</button>
          </div>
          <div class="F_villa ">
            <div class="No-villas" v-if="loading == false && villas.length <= 0">
              <nuxt-img :src="`img/site${site_id}/no-villas.svg`" :alt="sitename" loading="lazy" placeholder ></nuxt-img>
              <h2>Arama filtrelerinize uygun ilan bulunamadı.</h2>
              <p>Arama filtrenizi veya tarih değiştirerek yeniden deneyebilirsiniz.</p>
              <div class="No-villas-buttons">
                <button type="button" class="change-date">TARİHİ DEĞİŞTİR</button>
                <button type="button" class="assistans"><i class="icon-header-assistant"></i>TATİL ASİSTANINDAN DESTEK
                  ALABİLİRSİNİZ</button>
              </div>
            </div>

            <div class="No-villas" v-if="loading">
              <!-- <nuxt-img src="img/villa-loading.svg" alt=""></nuxt-img> -->
              <lottie :width="168" :height="125" :options="loadingOptions" ref="lottieAnim" />
              <h2>Villalar hazırlanıyor.</h2>
              <p>Keyifli bir tatil için binlerce seçeneğe hazır mısınız?</p>
            </div>

            <template v-if="villas.length > 2">

              <filter-villa-preview-component v-for="(villa, index) in villas.slice(0, 2)" :key="index" :villa="villa"
                :checkindate="checkIn" :checkoutdate="checkOut"></filter-villa-preview-component>
              <filter-banner></filter-banner>
              <filter-villa-preview-component v-for="(villa, index) in villas.slice(2)" :key="index + 3" :villa="villa"
                :checkindate="checkIn" :checkoutdate="checkOut"></filter-villa-preview-component>

            </template>

            <template v-if="villas.length > 0 && villas.length <= 2">
              <filter-villa-preview-component v-for="(villa, index) in villas" :key="index" :villa="villa"
                :checkindate="checkIn" :checkoutdate="checkOut"></filter-villa-preview-component>
              <filter-banner></filter-banner>
            </template>
          </div>

          <nav aria-label="..." class="my-3" v-if="!loading">
            <ul class="pagination d-flex flex-wrap justify-content-center align-items-center">
              <!-- Go to First Page -->
              <li class="page-item me-2 me-sm-3 mb-1" v-if="current_page > 1">
                <a href="javascript:void(0)" @click.prevent="goToPage(1)"
                  class="page-link rounded-sm d-flex align-items-center justify-content-center text-center  text-secondary pagination-left">
                  <svg width="7px" height="11px" viewBox="0 0 7 11" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="VillaListeleme" transform="translate(-860.000000, -2875.000000)" fill="#AFAFB6"
                        fill-rule="nonzero">
                        <g id="Group-27" transform="translate(837.000000, 2861.000000)">
                          <g id="right-arrow-(3)-copy"
                            transform="translate(26.954957, 19.166042) scale(-1, 1) translate(-26.954957, -19.166042) translate(23.919953, 14.000000)">
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
              <li class="page-item me-2 me-sm-3 mb-1" v-if="showLeftDots">
                <a href="javascript:void(0)"
                  class="page-link rounded-sm d-flex align-items-center justify-content-center text-center text-secondary">
                  <span aria-hidden="true">&hellip;</span>
                </a>
              </li>
              <li class="page-item me-2 me-sm-3 mb-1" v-for="(pageNumber, index) in displayedPageNumbers" :key="index">
                <a href="javascript:void(0)"
                  class="page-link rounded-sm d-flex align-items-center justify-content-center text-center  text-secondary"
                  :class="{ 'active': pageNumber === current_page }" @click.prevent="goToPage(pageNumber)">
                  {{ pageNumber }}
                </a>
              </li>
              <li class="page-item me-2 me-sm-3 mb-1" v-if="showRightDots">
                <a href="javascript:void(0)"
                  class="page-link rounded-sm d-flex align-items-center justify-content-center text-center  text-secondary">
                  <span aria-hidden="true">&hellip;</span>
                </a>
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
                  class="page-link rounded-sm d-flex align-items-center justify-content-center text-center pagination-right text-secondary ">
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
import VSelect from "@alfsnd/vue-bootstrap-select";
import { mapState } from "vuex";
import lottie from 'vue-lottie/src/lottie.vue'
export default {
  name: "FilterVillaComponent",
  props: {
    selectedFilters: { type: Object, default: {} },
    opportunity: { type: Boolean, default: false },
    day: { type: Number, default: null },
    month: { type: Number, default: null },
    pageContent: { type: Object, default: null },
    world: { type: Number, default: 0 },
  },
  data() {
    return {
      site_id: process.env.SITE,
      sitename: process.env.SITE_NAME,
      current_page: 1,
      per_page: 10,
      total_items: 0,
      villas: [],
      min_price: null,
      max_price: null,
      checkIn: null,
      checkOut: null,
      isExpandedMore: false,
      destinations: [],
      amenites: {
        groups: {
          facilityTypes: [],
          facilityConcepts: [],
          facilities: []
        },
        facilityTypes: [],
        facilityConcepts: [],
        facilities: [],
      },
      adult: null,
      children: null,
      baby: null,
      orderValues: [
        { value: 1, text: "Fiyata Göre Artan" },
        { value: 2, text: "Fiyata Göre Azalan" },
        { value: 3, text: "Yeniden Eskiye" },
        { value: 4, text: "Eskiden Yeniye" },
      ],
      orderValue: null,
      orderPlaceholder: "Sırala:",
      loading: true,
      novillas: false,
      isMobileFilterOpen: false,
      timeoutId: null,
      extraFilters: {},
      anim: null, // for saving the reference to the animation
      loadingOptions: {
        animationData: require(`~/assets/animation/site${process.env.SITE}/villa_loading.json`),
        loop: true,
        renderer: 'svg',
        autoplay: true,
      },
      slider_price_min: null,
      slider_price_max: null,
      slider_price_currency: null,
      source: null,
    }
  },
  components: {
    VSelect, lottie
  },
  watch: {
    day() {
      this.dayMonthChanged();
    },
    month() {
      this.dayMonthChanged();
    },
  },
  created() {
    let searchData = {}
    if (this.world) {
      searchData = this.$store.state['settings'].searchWorldData;
    } else {
      searchData = this.$store.state['settings'].searchData;
    }

    this.destinations = JSON.parse(JSON.stringify(searchData.destinations || []));
    this.amenites = JSON.parse(JSON.stringify(searchData.amenites || {}));
  },
  beforeMount() {
    this.checkIn = this.selectedFilters['checkIn'] ?? null;
    this.checkOut = this.selectedFilters['checkOut'] ?? null;
    this.adult = this.selectedFilters['adult'] ?? null;
    this.children = this.selectedFilters['children'] ?? null;
    this.baby = this.selectedFilters['baby'] ?? null;

    if (this.world) {
      this.slider_price_currency = '€'
      if (this.checkIn) {
        this.slider_price_min = 1000
        this.slider_price_max = 500000
      } else {
        this.slider_price_min = 1000
        this.slider_price_max = 50000
      }
    } else {
      this.slider_price_currency = '₺'
      if (this.checkIn) {
        this.slider_price_min = 1000
        this.slider_price_max = 150000
      } else {
        this.slider_price_min = 1000
        this.slider_price_max = 25000
      }
    }

    this.min_price = this.slider_price_min
    this.max_price = this.slider_price_max

  },
  mounted() {
    this.extraFilters = this.pageContent?.page_content?.villa_filter || null;

    if (this.destinations && this.amenites) {
      this.applySelectedFilters('destinations', null);
      this.applySelectedFilters('amenites', 'facilityConcepts');
      this.applySelectedFilters('amenites', 'facilityTypes');
      this.applySelectedFilters('amenites', 'facilities');
    }

    if (this.extraFilters) {
      // yeni redis yapısına göre
      // this.applySelectedFilters2('destinations', null, this.extraFilters.add_destination_select);
      // this.applySelectedFilters2('amenites', 'facilityConcepts', this.extraFilters.add_amenites_select);
      // this.applySelectedFilters2('amenites', 'facilityTypes', this.extraFilters.add_amenites_select);
      // this.applySelectedFilters2('amenites', 'facilities', this.extraFilters.add_amenites_select);
    }

    this.filter();
  },

  computed: {
    totalPages() {
      return Math.ceil(this.total_items / this.per_page);
    },
    pageNumbers() {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
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
    selectedFacilities() {
      return this.getSelectedObjects(this.amenites.facilities);
    },
    filterCount() {
      return [
        ...this.selectedDestinations,
        ...this.selectedFacilityConcepts,
        ...this.selectedFacilityTypes,
        ...this.selectedFacilities
      ].length;
    },
    displayedPageNumbers() {
      const currentIndex = this.pageNumbers.indexOf(this.current_page);
      const leftIndex = Math.max(currentIndex - 3, 0);
      const rightIndex = Math.min(currentIndex + 3, this.pageNumbers.length - 1);
      const displayedNumbers = this.pageNumbers.slice(leftIndex, rightIndex + 1);
      return displayedNumbers;
    },
    showLeftDots() {
      const currentIndex = this.pageNumbers.indexOf(this.current_page);
      return currentIndex > 3;
    },
    showRightDots() {
      const currentIndex = this.pageNumbers.indexOf(this.current_page);
      return currentIndex < this.pageNumbers.length - 4;
    }
  },
  methods: {
    dayMonthChanged() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }

      this.timeoutId = setTimeout(() => {
        this.filter();
        this.timeoutId = null;
      }, 50);
    },
    applySelectedFilters(property, nestedProperty) {
      let filters = [];
      if (nestedProperty)
        filters = this.selectedFilters[property]?.[nestedProperty] || [];
      else
        filters = this.selectedFilters[property] || [];
      let checkboxes = [];
      if (nestedProperty)
        checkboxes = this[property][nestedProperty];
      else
        checkboxes = this[property];
      for (let i = 0; i < filters.length; i++) {
        const checkbox = this.findNestedObject(checkboxes, filters[i].code);
        checkbox.selected = true;
      }
    },
    applySelectedFilters2(property, nestedProperty, addFilters) {
      let filters = [];
      if (nestedProperty) {
        filters = addFilters || [];
      } else {
        filters = addFilters || [];
      }
      let checkboxes = [];
      if (nestedProperty) {
        checkboxes = this[property][nestedProperty];
      } else {
        checkboxes = this[property];
      }
      for (let i = 0; i < filters.length; i++) {
        const checkbox = this.findNestedObject(checkboxes, filters[i]);
        if (checkbox) {
          checkbox.selected = true;
        }
      }
    },
    updateFilter(key, value, sendRequest = true) {
      this[key] = value;
      sendRequest && this.filter();
      setTimeout(() => {
        this.selectedFilterItemHeight()
      }, 50)

    },
    goToPage(pageNumber) {
      if (pageNumber === this.current_page) return;
      this.current_page = pageNumber;
      this.filter(pageNumber);
      if(window.innerWidth < 991){
        window.scrollTo({ top: 200, behavior: 'smooth' });
      }else{
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    filter(pageNumber = 1) {
      this.villas = [];
      this.loading = true;

      // Mevcut sorguyu iptal et
      if (this.source) {
        this.source.cancel('Previous request canceled due to new request.');
      }

      // Yeni bir axios.CancelTokenSource oluştur
      this.source = this.$axios.CancelToken.source();

      let adult = this.adult ? parseInt(this.adult) + (this.children ? parseInt(this.children) : 0) : null;

      let data = {
        destination: [
          ...this.selectedDestinations.map(({ code }) => code),
          ...(this.extraFilters?.add_destination_select ?? []).map(i => parseInt(i))
        ],
        amenites: [
          ...this.selectedFacilityConcepts,
          ...this.selectedFacilityTypes,
          ...this.selectedFacilities,
        ].map(({ code }) => code).concat((this.extraFilters?.add_amenites_select ?? []).map(i => parseInt(i))),
        min_price: this.min_price,
        max_price: this.max_price,
        startDate: this.checkIn,
        endDate: this.checkOut,
        adult: adult,
        baby: this.baby ? parseInt(this.baby) : null,
        order: this.orderValue?.value,
        world: this.world
      };

      if (this.opportunity) {
        data = { ...data, ...{ day: this.day, month: this.month } }
      }

      const url = this.opportunity ? `/website/opportunity?api_token=${process.env.WEBSITE_TOKEN}&page=${pageNumber}`
        : `/website/property?api_token=${process.env.WEBSITE_TOKEN}&page=${pageNumber}`

      this.$axios
        .post(url, data, {
          cancelToken: this.source.token, // İstekte iptal belirteci kullan
        })
        .then(({ data: responseData }) => {
          this.villas = responseData.data;
          this.per_page = responseData.per_page;
          this.total_items = responseData.total;
          this.current_page = responseData.current_page;
        })
        .catch((error) => {
          if (this.$axios.isCancel(error)) {
            console.log('Request canceled:', error.message);
          } else {
            console.error(error);
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getSelectedObjects(checkboxes) {
      return checkboxes.reduce((selected, checkbox) => {
        if (checkbox.selected) selected.push(checkbox);
        if (checkbox.children) selected.push(...this.getSelectedObjects(checkbox.children));
        return selected;
      }, []);
    },
    findNestedObject(checkboxes, code) {
      if (!checkboxes) return null;

      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].code == code) return checkboxes[i];
        if (checkboxes[i].children) {
          const found = this.findNestedObject(checkboxes[i].children, code);
          if (found) return found;
        }
      }
      return null;
    },
    orderChanged(order) {
      this.orderValue = order;
      setTimeout(() => {
        this.filter();
      }, 50)
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
      ].forEach(checkbox => this.updateSelection(checkbox, false));
      this.filter();
    },
    selectedFilterItemHeight() {
      var div = document.getElementById("selectedItems");
      var divHeight = div.offsetHeight;
      var contentHeight = div.scrollHeight;
      if (contentHeight > divHeight) {
        this.$refs.moreButton.classList.remove('morebutton')
      } else {
        this.$refs.moreButton.classList.add('morebutton')
      }
    },
    isMobile() {
      return window.innerWidth <= 991;
    },
    openMobileFilter() {
      if (this.isMobile()) {
        this.isMobileFilterOpen = true
        setTimeout(() => {
          document.querySelector('body').classList.add('over')
          document.querySelector('html').classList.add('over')
        }, 50)
      }
    },
    closeMobileFilter() {
      if (this.isMobile()) {
        this.isMobileFilterOpen = false
        setTimeout(() => {
          document.querySelector('body').classList.remove('over')
          document.querySelector('html').classList.remove('over')
        }, 50)
      }
    },
    checkboxOpen(groupName) {
      const targetDiv = this.$refs[groupName];
      targetDiv.classList.add('show')
    },
    checkboxClose(groupName) {
      const targetDivClose = this.$refs[groupName];
      targetDivClose.classList.remove('show')
    },
    handleAnimation: function (anim) {
      this.anim = anim;
    }
  }
}
</script>

<style scoped></style>
