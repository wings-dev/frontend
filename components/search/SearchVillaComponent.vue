<template>
  <div class="Search  "
    :class="{ 'list': $route.path == '/kiralik-villa-ara' || $route.path == '/yurtdisi-kiralik-villa-ara' }"
    ref="searchBar">
    <div class="Search-fixed-in" :class="{ 'fixed-active': fixedSearch }">
      <div class="Search-fixed-in-left">
        <b>{{checkIn}} - {{checkOut}}</b>
        <p>Antalya, Kaş <span>{{adult}} Yetişkin, {{children}} Çocuk</span></p>
      </div>
      <button type="button" @click="fixedSearchOpen">Değiştir</button>
    </div>
    <div class="Search-left" :class="{ 'fixed-active': fixedSearch }">
      <div class="Search-item Search-item-region dropdown" @click="openRegions">
        <div class="Search-item-title">
          <i class="icon-new-location Search-item-icon"></i>
          <span class="Search-item-name">Bölge</span>
        </div>
        <button class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
          aria-expanded="false">
          <i class="icon-new-location Search-item-icon"></i>
          <div class="Search-item-region-in">
            <span class="dropdown-toggle-title">
              <template v-if="selectedDestinations.length">
              {{ selectedDestinations.length }} Bölge
              </template>
              <template v-else>
              Bölge Seçin
              </template>
            </span>
          </div>
          <i class="icon-down-arrow"></i>
        </button>
        <client-only>
          <ul class="dropdown-menu filtered " aria-labelledby="dropdownMenuButton1">
            <filter-item-checkbox-component :hideTitle="true" filterInputPlaceholder="Bölge Arayın"
              :checkboxes="destinations" :hideTitleBorder="true"
              @updated="updateFilter('destinations', $event)"></filter-item-checkbox-component>

          </ul>
        </client-only>
      </div>
      <div class="Search-item date" @click="openCalendar">
        <div class="dates d-flex">
          <div class="date-title w-50 Search-item-name">
            Giriş Tarihi
          </div>
          <div class="date-title w-50 Search-item-name">
            Çıkış Tarihi
          </div>
        </div>

        <div class="Search-item-date">
          <!-- <span class="Search-item-name">Giriş / Çıkış Tarihi</span> -->
          <div class="Search-item-date-inputs" ref="datePickerContainer">

            <HotelDatePicker v-bind="datePickerProps" :disabled="true" @check-in-changed="checkInChanged($event)"
              @check-out-changed="checkOutChanged($event)" format="DD dddd" ref="datePicker" :i18n="calendarLanguage"
              :firstDayOfWeek="firstDayOfWeek" :displayClearButton=false>
              <div slot="content">
                <div class="d-flex align-items-center justify-content-end mt-3 calendar-buttons">
                  <button @click.prevent="clearDatesRez()" class="me-1"><i class="icon-date-clear"></i> Temizle</button>
                  <button @click.prevent="hidePickerRez()"><i class="icon-date-close"></i>Kapat</button>
                </div>
              </div>
            </HotelDatePicker>

            <!-- <HotelDatePicker @check-in-changed="checkInChanged($event)" @check-out-changed="checkOutChanged($event)"
              format="DD/MM/YYYY" :minNights="0" :firstDayOfWeek="Number(weekfirstday)"></HotelDatePicker> -->
          </div>
        </div>
      </div>
      <div class="Search-item Search-item-people" @click="openPeoples">

        <div class="Search-item-title">
          <i class="icon-user Search-item-icon"></i>
          <span class="Search-item-name">Kişi Sayısı </span>
        </div>
        <button class=" dropdown-toggle Search-item-person-info" type="button" id="dropdownMenuButton2"
          data-bs-toggle="dropdown" aria-expanded="false">
          <i class="icon-user Search-item-icon"></i>
          <div class="Search-item-people-in">

            <span class="dropdown-toggle-title">{{ selectedPersonText }}</span>
            <i class="icon-down-arrow"></i>
          </div>

        </button>
        <client-only>
          <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton2">
            <div class="Search-item-person">
              <div class="Search-item-person-item ">
                <p>Yetişkin</p>
                <div class="Search-item-person-item-in ">
                  <button type="button" class="minus-person" @click="adultDecrease">
                    <i class="icon-minus"></i>
                  </button>
                  <input id="Search_PeopleAdult" class="person" type="text" :value="adult" max="20" readonly>
                  <button type="button" class="plus-person" @click="adultIncrease">
                    <i class="icon-plus"></i>
                  </button>
                </div>
              </div>
              <div class="Search-item-person-item">
                <p>Çocuk <br><span>6-17 arası</span></p>
                <div class="Search-item-person-item-in ">
                  <button type="button" class="minus-person" @click="children_Decrease">
                    <i class="icon-minus"></i>
                  </button>
                  <input id="Search_PeopleChild" class="person" type="text" :value="children" max="10" readonly>
                  <button type="button" class="plus-person" @click="children_Increase">
                    <i class="icon-plus"></i>
                  </button>
                </div>
              </div>
              <div class="Search-item-person-item ">
                <p>Bebek<br><span>0-5 arası</span></p>
                <div class="Search-item-person-item-in ">

                  <button type="button" class="minus-person" @click="baby_Decrease">
                    <i class="icon-minus"></i>
                  </button>
                  <input id="Search_PeopleBaby" class="person" type="text" :value="baby" name="baby" max="5" readonly>
                  <button type="button" class="plus-person" @click="baby_Increase">
                    <i class="icon-plus"></i>
                  </button>

                </div>
              </div>
            </div>
          </ul>
        </client-only>
      </div>
      <div class="Search-item Search-item-more">
        <button class="dropdown-toggle" type="button" @click="moreSearchToggle">
          <i class="icon-new-filter Search-item-icon"></i>
          <span class="dropdown-toggle-title">Gelişmiş Arama</span>
          <i class="icon-down-arrow"></i>
        </button>
      </div>
    </div>
    <button class="Search-fixed-button" :class="{ 'fixed-active': fixedSearch }" type="button"
      @click="fixedSearchClose">Kapat</button>
    <button type="button" class="Search-item-more-mobile" id="mobileFilter" @click="openMobileFilter()">
      <i class="icon-new-filter"></i>
      <span class="dropdown-toggle-title">Gelişmiş Arama</span>
      <i class="icon-down-arrow"></i>
    </button>
    <button type="button" class="Search-button" id="searchVilla" @click="search">
      <i class="icon-search"></i><span>Arama yap</span>
    </button>
    <div class="Search-more desktop" :class="{ 'active': moreSearch }">
      <div class="Search-more-item facility-type">
        <button class=" dropdown-toggle" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown"
          aria-expanded="false">
          <span class="dropdown-toggle-title">Tesis Tipi</span>
          <i class="icon-sort"></i>
        </button>
        <client-only>
          <ul class="dropdown-menu filtered " aria-labelledby="dropdownMenuButton4">
            <div class="dropdown-menu-in filtered-in">
              <filter-item-checkbox-component title="TESİS TİPİ" :checkboxes="amenites.facilityTypes"
                @updated="updateFilter('amenites.facilityTypes', $event)"></filter-item-checkbox-component>
            </div>
          </ul>
        </client-only>
      </div>
      <div class="Search-more-item facility-category">
        <button class=" dropdown-toggle" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown"
          aria-expanded="false">
          <span class="dropdown-toggle-title">Tesis Kategorileri</span>
          <i class="icon-sort"></i>
        </button>
        <client-only>
          <ul class="dropdown-menu  " aria-labelledby="dropdownMenuButton4">
            <div class="dropdown-menu-in ">
              <filter-item-checkbox-component title="TESİS KONSEPTİ" :checkboxes="amenites.facilityConcepts"
                @updated="updateFilter('amenites.facilityConcepts', $event)"></filter-item-checkbox-component>
            </div>
          </ul>
        </client-only>
      </div>
      <div class="Search-more-item facility-amenites">
        <button class=" dropdown-toggle" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown"
          aria-expanded="false">
          <span class="dropdown-toggle-title">Tesis Özellikleri</span>
          <i class="icon-sort"></i>
        </button>
        <client-only>
          <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton4">
            <div class="dropdown-menu-in ">
              <filter-item-checkbox-component title="OLANAKLAR" :checkboxes="amenites.facilities"
                :groups="amenites.groups.facilities" @updated="updateFilter('amenites.facilities', $event)"
                groupName="facilitiesCheckbox"></filter-item-checkbox-component>
            </div>
          </ul>
        </client-only>
      </div>
    </div>
    <div class="Filter-left Filters mobile" :class="{ show: isMobileFilterOpen }">
      <div class="Filter-left-head">
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

        <filter-item-checkbox-component title="TESİS TİPİ" :checkboxes="amenites.facilityTypes"
          :groups="amenites.groups.facilityTypes" @updated="updateFilter('amenites.facilityTypes', $event)"
          groupName="typeCheckbox"></filter-item-checkbox-component>

        <filter-item-checkbox-component title="TESİS KATEGORİLERİ" :checkboxes="amenites.facilityConcepts"
          :groups="amenites.groups.facilityConcepts" @updated="updateFilter('amenites.facilityConcepts', $event)"
          groupName="categoryCheckbox"></filter-item-checkbox-component>

        <filter-item-checkbox-component title="OLANAKLAR" :checkboxes="amenites.facilities"
          :groups="amenites.groups.facilities" @updated="updateFilter('amenites.facilities', $event)"
          groupName="facilitiesCheckbox"></filter-item-checkbox-component>

        <filter-price-between-component @min_price="updateFilter('min_price', $event, false)"
          @max_price="updateFilter('max_price', $event)" groupName="priceRange"></filter-price-between-component>

        <button type="button" class="Search-clear-mobile" v-show="filterCount > 0" @click="clearFilter()">Tümünü
          Temizle</button>

        <button type="button" @click="closeMobileFilter()" class="Filters-in-m-button">Uygula</button>
      </div>

    </div>
    <div class="Search-mobile" :class="{ 'show': mobileRegions }">
      <div class="Search-mobile-head">
        <h4>Bölge Seçiniz</h4>
        <button type="button" @click="closeRegions"><i class="icon-login-close"></i></button>
      </div>
      <filter-item-checkbox-component :hideTitle="true" filterInputPlaceholder="Bölge Arayın" :checkboxes="destinations"
        :hideTitleBorder="true" @updated="updateFilter('destinations', $event)"></filter-item-checkbox-component>
      <div class="Search-mobile-bottom">
        <button type="button" @click="closeRegions">Uygula</button>
      </div>
    </div>
    <div class="Search-mobile" :class="{ 'show': mobilePeoples }">
      <div class="Search-mobile-head">
        <h4>Kişi sayısı</h4>
        <button type="button" @click="closePeoples"><i class="icon-login-close"></i></button>
      </div>
      <div class="Search-item-person">
        <div class="Search-item-person-item ">
          <p>Yetişkin</p>
          <div class="Search-item-person-item-in ">
            <button type="button" class="minus-person" @click="adultDecrease">
              <i class="icon-minus"></i>
            </button>
            <input id="Search_PeopleAdult" class="person" type="text" :value="adult" max="20" readonly>
            <button type="button" class="plus-person" @click="adultIncrease">
              <i class="icon-plus"></i>
            </button>
          </div>
        </div>
        <div class="Search-item-person-item">
          <p>Çocuk <br><span>6-17 arası</span></p>
          <div class="Search-item-person-item-in ">
            <button type="button" class="minus-person" @click="children_Decrease">
              <i class="icon-minus"></i>
            </button>
            <input id="Search_PeopleChild" class="person" type="text" :value="children" max="10" readonly>
            <button type="button" class="plus-person" @click="children_Increase">
              <i class="icon-plus"></i>
            </button>
          </div>
        </div>
        <div class="Search-item-person-item ">
          <p>Bebek<br><span>0-5 arası</span></p>
          <div class="Search-item-person-item-in ">

            <button type="button" class="minus-person" @click="baby_Decrease">
              <i class="icon-minus"></i>
            </button>
            <input id="Search_PeopleBaby" class="person" type="text" :value="baby" name="baby" max="5" readonly>
            <button type="button" class="plus-person" @click="baby_Increase">
              <i class="icon-plus"></i>
            </button>

          </div>
        </div>
      </div>
      <div class="Search-mobile-bottom">
        <button type="button" @click="closePeoples">Uygula</button>
      </div>
    </div>
    <div class="Search-mobile" :class="{ 'show': mobileCalendar }">
      <div class="Search-mobile-head">
        <h4>Tarih Seçiniz</h4>
        <button type="button" @click="closeCalendar"><i class="icon-login-close"></i></button>
      </div>
      <HotelDatePicker v-bind="datePickerProps" :disabled="true" @check-in-changed="checkInChanged($event)"
        @check-out-changed="checkOutChanged($event)" format="DD dddd" ref="datePickerModal" :i18n="calendarLanguage"
        :firstDayOfWeek="firstDayOfWeek" :displayClearButton=false>
      </HotelDatePicker>
      <div class="Search-mobile-bottom">
        <button type="button" @click="closeCalendar">Uygula</button>
      </div>
    </div>
  </div>
</template>

<script>
// import HotelDatePicker from "vue-hotel-datepicker";
import HotelDatePicker from "vue-hotel-datepicker2";
import "vue-hotel-datepicker2/dist/vueHotelDatepicker2.css";
import { mapMutations, mapState } from "vuex";

export default {
  name: "SearchVillaComponent",
  data() {
    return {
      disableDates: ['2023-02-21', '2023-02-22', '2023-02-23', '2023-02-24', '2023-02-24', '2023-02-26', '2023-02-27', '2023-02-28'],
      datePickerProps: {},
      checkIn: null,
      checkOut: null,
      adult: 1,
      children: 0,
      firstDayOfWeek: Number(process.env.CALENDAR_FIRST_DAY),
      baby: 0,
      destinations: [],
      amenites: {
        facilityTypes: [],
        facilityConcepts: [],
        facilities: [],
      },
      orderValues: [
        { value: 0, text: "Fiyata Göre Artan" },
        { value: 1, text: "Fiyata Göre Azalan" },
        { value: 2, text: "Yeniden Eskiye" },
        { value: 3, text: "Eskiden Yeniye" },
      ],
      orderValue: null,
      orderPlaceholder: "Sırala:",
      firstDayOfWeek: 1,
      calendarLanguage: {
        night: 'Gece',
        nights: 'Gece',
        'day-names': ['Pzt', 'Sal', 'Çar', 'Per', 'Cuma', 'Cmt', 'Paz'],
        'check-in': 'Giriş Tarihi',
        'check-out': 'Çıkış Tarihi',
        'month-names': ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
        tooltip: {
          halfDayCheckIn: "Girişe Uygun",
          halfDayCheckOut: "Çıkışa Uygun",
          saturdayToSaturday: "Sadece Cumartesi'den Cumartesi'ne",
          sundayToSunday: "Sadece Pazar'dan Pazar'a",
          minimumRequiredPeriod: "Minimum <br/> %{minNightInPeriod} %{night}."
        },
        week: "hafta",
        weeks: "haftalar",
      },
      moreSearch: false,
      isMobileFilterOpen: false,
      mobileRegions: false,
      mobilePeoples: false,
      mobileCalendar: false,
      fixedSearch: false,
    }
  },
  components: {
    HotelDatePicker,
  },
  created() {
    this.destinations = JSON.parse(JSON.stringify(this.$store.state['settings'].searchData.destinations));
    this.amenites = JSON.parse(JSON.stringify(this.$store.state['settings'].searchData.amenites));
  },
  beforeMount() {
    this.parseQueryString();
    if (this.$route.path !== '/kiralik-villa-ara') {
      let lastSearch = localStorage.getItem('lastSearch');
      if (lastSearch) {
        lastSearch = JSON.parse(lastSearch);

        this.checkIn = lastSearch.checkIn;
        this.checkOut = lastSearch.checkOut;
        this.datePickerProps.startingDateValue = lastSearch.checkIn ? new Date(this.checkIn) : null;
        this.datePickerProps.endingDateValue = lastSearch.checkOut ? new Date(this.checkOut) : null;

        this.adult = parseInt(lastSearch.adult || 1);
        this.children = parseInt(lastSearch.children || 0);
        this.baby = parseInt(lastSearch.baby || 0);
      }
    }
  },
  mounted() {
    if (window.innerWidth <= 991 && this.$refs.searchBar?.classList.contains('list')) {
      // console.log(this.$refs.searchBar.classList)
      window.onscroll = function () {
        if (scrollY >= 300) {
          setTimeout(() => {
            document.querySelector('.Search')?.classList.add('fixed')
          }, 10)
          setTimeout(() => {
            document.querySelector('.Search')?.classList.remove('fixed')
          }, 10)
        } else {
        }

      };
    }
  },
  watch: {
    checkIn(newValue) {
      if (newValue !== undefined) {
        this.changeHotelInput(0, newValue);
      }
    },
    checkOut(newValue) {
      if (newValue !== undefined) {
        this.changeHotelInput(-1, newValue);
      }
    },
  },
  computed: {
    selectedDestinations() {
      return this.getSelectedObjects(this.destinations);
    },
    selectedFacilityTypes() {
      return this.getSelectedObjects(this.amenites.facilityTypes);
    },
    selectedFacilityConcepts() {
      return this.getSelectedObjects(this.amenites.facilityConcepts);
    },
    selectedPersonText() {
      let text = `${this.adult} Yetişkin `;
      if (this.children > 0) {
        text += `${this.children} Çocuk `;
      }
      if (this.baby > 0) {
        text += `${this.baby} Bebek `;
      }
      return text;
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
  },
  methods: {
    parseQueryString() {
      const query = this.$route.query;

      this.checkIn = query.checkIn;
      this.checkOut = query.checkOut;
      this.datePickerProps.startingDateValue = query.checkIn ? new Date(this.checkIn) : null;
      this.datePickerProps.endingDateValue = query.checkOut ? new Date(this.checkOut) : null;

      this.adult = parseInt(query.adult || 1);
      this.children = parseInt(query.children || 0);
      this.baby = parseInt(query.baby || 0);
    },
    updateFilter(key, value) {
      this[key] = value;
    },
    getSelectedObjects(checkboxes) {
      return checkboxes.reduce((selected, checkbox) => {
        if (checkbox.selected) selected.push(checkbox);
        if (checkbox.children) selected.push(...this.getSelectedObjects(checkbox.children));
        return selected;
      }, []);
    },
    checkInChanged(value) {
      this.checkIn = this.formatDate(value);
    },
    checkOutChanged(value) {
      this.checkOut = this.formatDate(value);
      if (this.checkIn && this.checkOut) {
        this.closeCalendar()
      }
    },
    formatDate(value) {
      if (value) {
        const date = new Date(value);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
    },
    adultIncrease() {
      if (this.adult < 20) {
        this.adult += 1;
      }
    },
    adultDecrease() {
      if (this.adult > 1) {
        this.adult -= 1;
      }
    },
    children_Increase() {
      if (this.children < 10) {
        this.children += 1;
      }
    },
    children_Decrease() {
      if (this.children > 0) {
        this.children -= 1;
      }
    },
    baby_Increase() {
      if (this.baby < 5) {
        this.baby += 1;
      }
    },
    baby_Decrease() {
      if (this.baby > 0) {
        this.baby -= 1;
      }
    },
    search() {
      const queryParams = {
        destinations: this.selectedDestinations.map(item => item.code),
        checkIn: this.checkIn,
        checkOut: this.checkOut,
        adult: this.adult,
        children: this.children,
        baby: this.baby,
        facilityTypes: this.selectedFacilityTypes.map(item => item.code),
        facilityConcepts: this.selectedFacilityConcepts.map(item => item.code),
      };

      localStorage.setItem('lastSearch', JSON.stringify(queryParams));

      const urlSearchParams = Object.entries(queryParams)
        .filter(([key, value]) => value !== undefined && value !== null && value !== '')
        .map(([key, value]) => Array.isArray(value) ? value.map(item => `${key}=${item}`).join('&') : `${key}=${value}`)
        .join('&');

      window.location.href = `${window.location.origin}/kiralik-villa-ara?${urlSearchParams}`;

      /*
      this.$router.push({
        path: '/kiralik-villa',
        query: queryParams,
      });
       */
    },
    clearDatesRez() {
      this.$refs.datePicker.clearSelection();
    },
    hidePickerRez() {
      this.$refs.datePicker.hideDatepicker();
    },
    formatDateDMY(value) {
      if (value) {
        const date = new Date(value);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${month}/${day}/${year}`;
      }
    },
    changeHotelInput(tabIndex, value) {
      const currentDate = new Date(value);
      const formattedDate = currentDate.toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
      }).toUpperCase();

      const formattedDay = currentDate.toLocaleDateString('tr-TR', {
        weekday: 'long',
      }).toUpperCase();

      const datepickerInputParent = this.$refs.datePickerContainer;
      const datepickerInput = datepickerInputParent.querySelector(
        `[data-qa="datepickerInput"][tabindex="${tabIndex}"]`
      );

      datepickerInput.innerHTML = `<div class="formatted-date">${formattedDate}<span class="formatted-date-sm">${formattedDay}</span></div>`;
    },
    moreSearchToggle() {
      this.moreSearch = !this.moreSearch
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
    isMobile() {
      return window.innerWidth <= 991;
    },
    openMobileFilter() {
      if (this.isMobile()) {
        this.isMobileFilterOpen = true
        setTimeout(() => {
          document.querySelector('body')?.classList.add('over')
          document.querySelector('html')?.classList.add('over')
          document.querySelector('.Header')?.classList.add('Header-z')
          document.querySelector('.Home')?.classList.add('Home-z')
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 10)
      }
    },
    closeMobileFilter() {
      if (this.isMobile()) {
        this.isMobileFilterOpen = false
        setTimeout(() => {
          document.querySelector('body')?.classList.remove('over')
          document.querySelector('html')?.classList.remove('over')
          document.querySelector('.Header')?.classList.remove('Header-z')
          document.querySelector('.Home')?.classList.remove('Home-z')
        }, 10)
      }
    },
    checkboxOpen(groupName) {
      const targetDiv = this.$refs[groupName];
      targetDiv?.classList.add('show')
    },
    checkboxClose(groupName) {
      const targetDivClose = this.$refs[groupName];
      targetDivClose?.classList.remove('show')
    },
    openRegions() {
      if (this.isMobile()) {
        this.mobileRegions = true
        setTimeout(() => {
          document.querySelector('body')?.classList.add('over')
          document.querySelector('html')?.classList.add('over')
          document.querySelector('.Header')?.classList.add('Header-z')
          document.querySelector('.Home')?.classList.add('Home-z')
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 10)
      }
    },
    openPeoples() {
      if (this.isMobile()) {
        this.mobilePeoples = true
        setTimeout(() => {
          document.querySelector('body')?.classList.add('over')
          document.querySelector('html')?.classList.add('over')
          document.querySelector('.Header')?.classList.add('Header-z')
          document.querySelector('.Home')?.classList.add('Home-z')
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 10)
      }
    },
    openCalendar() {
      if (this.isMobile()) {
        this.mobileCalendar = true
        setTimeout(() => {
          document.querySelector('body')?.classList.add('over')
          document.querySelector('html')?.classList.add('over')
          document.querySelector('.Header')?.classList.add('Header-z')
          document.querySelector('.Home')?.classList.add('Home-z')
          window.scrollTo({ top: 0, behavior: 'smooth' });
          this.$refs.datePickerModal.showDatepicker()
          this.$refs.datePickerModal.clearSelection()
        }, 10)
      }
    },
    closeRegions() {
      if (this.isMobile()) {
        this.mobileRegions = false
        setTimeout(() => {
          document.querySelector('body')?.classList.remove('over')
          document.querySelector('html')?.classList.remove('over')
          document.querySelector('.Header')?.classList.remove('Header-z')
          document.querySelector('.Home')?.classList.remove('Home-z')
        }, 10)
      }
    },
    closePeoples() {
      if (this.isMobile()) {
        this.mobilePeoples = false
        setTimeout(() => {
          document.querySelector('body')?.classList.remove('over')
          document.querySelector('html')?.classList.remove('over')
          document.querySelector('.Header')?.classList.remove('Header-z')
          document.querySelector('.Home')?.classList.remove('Home-z')
        }, 10)
      }
    },
    closeCalendar() {
      if (this.isMobile()) {
        this.mobileCalendar = false
        setTimeout(() => {
          document.querySelector('body')?.classList.remove('over')
          document.querySelector('html')?.classList.remove('over')
          document.querySelector('.Header')?.classList.remove('Header-z')
          document.querySelector('.Home')?.classList.remove('Home-z')
          this.$refs.datePickerModal.hideDatepicker()
        }, 10)
      }
    },
    fixedSearchOpen() {
      if (this.isMobile()) {
        this.fixedSearch = true
      }
    },
    fixedSearchClose() {
      if (this.isMobile()) {
        this.fixedSearch = false
      }
    },
  }
}
</script>

<style scoped>
:deep() .vue-tel-input {
  width: 100%;
  border: 1px solid #dadada;
  padding: 8px;
  box-shadow: none !important;
  border-color: #dadada !important;
}

:deep() .vti__dropdown-list {
  min-width: 240px;
}

:deep() .v-select {
  height: auto !important;
  border: 1px solid #dadada;
}

:deep() .v-select-toggle {
  font-size: 16px !important;
  padding: 14px !important;
  color: #a3a3a3 !important;
  background-color: transparent !important;
}

:deep() .v-dropdown-item.selected {
  background-color: var(--bs-theme-second) !important;
}

:deep() .datepicker__dummy-wrapper {
  border: none;
  background: none;
  flex-wrap: nowrap;
}

:deep() .datepicker__input {
  font-size: 13px;
  font-weight: 500;
  color: #24252e;
  width: 50%;
  height: auto;
  white-space: nowrap;
}

:deep() .datepicker__input:before {
  content: "";
  display: inline-block;
  width: 22px;
  height: 22px;
  background-size: 100% 100%;
  background-image: url(/img/date-new.svg);
  margin-right: 10px;
}

:deep().datepicker__input--first {
  padding-left: 0;
}

:deep().datepicker__input--first:after {
  content: "";
  width: 18px;
  height: 10px;
  background-image: url(/img/date-right.svg);
  background-size: 100% 100%;
  margin-left: auto;
  margin-right: auto;
}

:deep().datepicker__input .formatted-date {
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 500;
  color: var(--bs-theme-first);
  line-height: 1;
}

:deep().datepicker__input .formatted-date span {
  font-size: 11px;
  font-weight: 500;
  color: var(--bs-search-text-light);
  text-align: left;
  margin-top: 3px;
}

:deep() .datepicker__month-day--first-day-selected,
:deep() .datepicker__month-day--last-day-selected {
  background: var(--bs-theme-first-dark);
  color: #fff !important;
}

:deep() .datepicker__month-day--selected {
  background-color: rgb(var(--bs-theme-first-dark-rgb), .7);
  color: #fff !important;
}

:deep() .datepicker__month-day--allowed-checkout:hover,
:deep() .datepicker__month-day--valid:hover {
  background: var(--bs-theme-first-dark);
  color: #fff;
}

:deep() .datepicker__month-day--today .datepicker__month-day-wrapper {
  border: 2px solid var(--bs-theme-first-dark);
}

:deep() .datepicker__header {
  padding: 1rem 2.5rem;
}

:deep() .datepicker__month-day {
  color: var(--bs-theme-first);
}

:deep() .datepicker__month-button {
  border: 1px solid var(--bs-theme-first-dark);
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDcgMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80MDJfMTU5NCkiPgo8cGF0aCBkPSJNNS45MTQ5NyA0Ljc2Mjg4TDEuMzE3MDYgMC4xNjUwNkMxLjIxMDcxIDAuMDU4NjMyIDEuMDY4NzUgMCAwLjkxNzM4NiAwQzAuNzY2MDE4IDAgMC42MjQwNTggMC4wNTg2MzIgMC41MTc3MTQgMC4xNjUwNkwwLjE3OTExIDAuNTAzNThDLTAuMDQxMjIyNCAwLjcyNDE2NCAtMC4wNDEyMjI0IDEuMDgyNjggMC4xNzkxMSAxLjMwMjkyTDQuMDQwMDkgNS4xNjM5TDAuMTc0ODI2IDkuMDI5MTZDMC4wNjg0ODE2IDkuMTM1NTkgMC4wMDk3NjU2MiA5LjI3NzQ2IDAuMDA5NzY1NjIgOS40Mjg3NUMwLjAwOTc2NTYyIDkuNTgwMiAwLjA2ODQ4MTYgOS43MjIwOCAwLjE3NDgyNiA5LjgyODU5TDAuNTEzNDMgMTAuMTY3QzAuNjE5ODU4IDEwLjI3MzUgMC43NjE3MzQgMTAuMzMyMSAwLjkxMzEwMiAxMC4zMzIxQzEuMDY0NDcgMTAuMzMyMSAxLjIwNjQzIDEwLjI3MzUgMS4zMTI3NyAxMC4xNjdMNS45MTQ5NyA1LjU2NUM2LjAyMTU2IDUuNDU4MjQgNi4wODAxMSA1LjMxNTY5IDYuMDc5NzcgNS4xNjQxNUM2LjA4MDExIDUuMDEyMDMgNi4wMjE1NiA0Ljg2OTU2IDUuOTE0OTcgNC43NjI4OFoiIGZpbGw9IiMxMTI4NTUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80MDJfMTU5NCI+CjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjExIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=) no-repeat 57%/10px;
}

.datepicker__wrapper {
  width: 100%;
}

@media (max-width:800px) {
  :deep().datepicker__input--first:after {
    background-size: 18px 10px;
    background-repeat: no-repeat;
    background-position: center;
    padding: 14px;
    background-color: #eff1f5;
    border-radius: 4px;
  }

  :deep() .datepicker__input--first:before {
    display: none;
  }

  :deep() .datepicker__input:before {
    position: absolute;
    right: 0;
  }
}
</style>
