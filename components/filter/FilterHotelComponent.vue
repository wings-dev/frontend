<template>
  <section class="Filter">
    <div class="container">
      <div class="Filter-in">
        <div class="Filter-left Filters">
          <div class="Filter-left-head">
            <h4>Gelişmiş Arama</h4>
            <button type="button" class="Search-clear" onclick="filterClear()">Temizle</button>
            <button type="button" class="Search-filter-close" id="mobileFilterClose" @click="closeMobileFilter"><i
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

            <filter-item-checkbox-component title="BÖLGE" filterInputPlaceholder="Bölge Arayın" :checkboxes="destinations"
              :hideTitleBorder="true" @updated="updateFilter('destinations', $event)"></filter-item-checkbox-component>

            <filter-item-checkbox-component title="OLANAKLAR" :checkboxes="amenites.facilities"
              :groups="amenites.groups.facilities"
              @updated="updateFilter('amenites.facilities', $event)"></filter-item-checkbox-component>

            <filter-price-between-component @min_price="updateFilter('min_price', $event, false)"
              @max_price="updateFilter('max_price', $event)"></filter-price-between-component>
          </div>

        </div>
        <div class="Filter-right">
          <div class="Filter-right-head">
            <div class="Filter-right-head-info">
              <i class="icon-list"></i>
              <p>{{ total_items }} otel listeleniyor</p>
            </div>
            <div class="Filter-right-head-buttons">

              <div class="Filter-right-head-buttons-item">
                <client-only>
                  <VSelect :options="orderValues" :labelTitle="orderPlaceholder" @input="orderChanged" />
                </client-only>
              </div>
            </div>
          </div>

          <div class="Filter-right-selected">
            <div class="Filter-right-selected-in">

              <button type="button" id="Fetures_clear" v-show="filterCount > 0" @click="clearFilter()">Temizle</button>

              <a v-for="destination in selectedDestinations" class="Filter-right-selected-item">
                Bölge:{{ destination.text }}
                <i class="icon-search-close" @click="unselect(destination)"></i>
              </a>

              <a v-for="facility in selectedFacilities" class="Filter-right-selected-item">
                Olanak:{{ facility.text }}
                <i class="icon-search-close" @click="unselect(facility)"></i>
              </a>

            </div>
          </div>

          <div class="F_villa ">

            <filter-hotel-preview-component v-for="(hotel, index) in hotels" :key="index"
              :hotel="hotel" :checkindate="checkIn" :requestId="requestId"></filter-hotel-preview-component>

            <div
              class="holiday-banner bg-light text-white position-relative rounded-lg overflow-hidden d-flex py-3 py-sm-4 ps-3 ps-sm-4 ps-xl-5 pe-3 pe-sm-4 my-4">
              <img src="/uploads/holiday-banner.jpg" alt=""
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

            <div class="No-villas" v-if="loading === false && hotels.length <= 0">
              <img src="img/no-villas.svg" alt="">
              <h2>Arama filtrelerinize uygun ilan bulunamadı.</h2>
              <p>Arama filtrenizi veya tarih değiştirerek yeniden deneyebilirsiniz.</p>
              <div class="No-villas-buttons">
                <button type="button" class="change-date">TARİHİ DEĞİŞTİR</button>
                <button type="button" class="assistans"><i class="icon-header-assistant"></i>TATİL ASİSTANINDAN DESTEK
                  ALABİLİRSİNİZ</button>
              </div>
            </div>

            <div class="No-villas" v-if="loading">
              <img src="img/villa-loading.svg" alt="">
              <h2>Oteller hazırlanıyor.</h2>
              <p>Keyifli bir tatil için binlerce seçeneğe hazır mısınız?</p>
            </div>



          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VSelect from "@alfsnd/vue-bootstrap-select";
import { mapState } from "vuex";

export default {
  name: "FilterHotelComponent",
  props: {
    selectedFilters: { type: Object, default: {} },
  },
  data() {
    return {
      current_page: 1,
      per_page: 10,
      total_items: 0,
      hotels: [],
      requestId: null,
      min_price: null,
      max_price: null,
      checkIn: null,
      checkOut: null,
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

    }
  },
  components: {
    VSelect
  },
  created() {
    const searchData = this.$store.state.hotels.searchData;

    this.destinations = JSON.parse(JSON.stringify(searchData.destinations)).filter(destination => destination.type === 1);
    this.amenites = JSON.parse(JSON.stringify(searchData.amenites));

    // console.log(JSON.stringify({
    //   destinations: this.destinations,
    //   amenites: this.amenites,
    // }))
  },
  beforeMount() {
    this.checkIn = this.selectedFilters['checkIn'] ?? null;
    this.checkOut = this.selectedFilters['checkOut'] ?? null;
    this.adult = this.selectedFilters['adult'] ?? null;
    this.children = this.selectedFilters['children'] ?? null;
    this.baby = this.selectedFilters['baby'] ?? null;


    this.applySelectedFilters('destinations', null);
    this.applySelectedFilters('amenites', 'facilityConcepts');
    this.applySelectedFilters('amenites', 'facilityTypes');
    this.applySelectedFilters('amenites', 'facilities');
  },
  mounted() {
    setTimeout(() => {
      this.filter();
    },50)
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
    selectedFacilities() {
      return this.getSelectedObjects(this.amenites.facilities);
    },
    filterCount() {
      return [
        ...this.selectedDestinations,
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
      console.log(filters)
      for (let i = 0; i < filters.length; i++) {
        const checkbox = this.findNestedObject(checkboxes, filters[i].code);
        console.log(checkbox);
        checkbox.selected = true;
      }
    },
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

      if (this.selectedDestinations.length === 0) {
        console.log('test');
        this.hotels = [];
        return
      }

      let adult = this.adult ? parseInt(this.adult) + (this.children ? parseInt(this.children) : 0) : null;

      const data = {
        id: this.selectedDestinations.map(destination => destination.code),
        checkIn: this.checkIn,
        checkOut: this.checkOut,
        adult: adult,
        baby: this.baby ? parseInt(this.baby) : null,
        order: this.orderValue?.value
      };

      this.$axios
        .post(`/data/hotels`, data)
        .then(response => {
          this.hotels = response.data.body?.hotels ?? [];
          this.requestId = response.data.header.requestId;
          console.log(this.requestId);
          console.log('this.hotels', this.hotels);

        })
        .catch(console.error)
        .finally(() => {
          this.loading = false
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
      console.log(order);
      this.orderValue = order;
      setTimeout(() => {
        this.filter();
      },50)
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
    closeMobileFilter() {
      document.querySelector('.Filter-left').classList.remove("show")
      document.querySelector('body').classList.remove("over")
    }
  }
}
</script>

<style scoped>
.Filter-right-head-buttons-item .v-select {
  width: 240px;
  border: none;
}

:deep() .Filter-right-head-buttons-item .v-select-toggle {
  height: 45px;
  cursor: pointer;
  border-radius: 6px;
  color: #fff !important;
  background-color: var(--bs-theme-first) !important;
}</style>
