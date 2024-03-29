<template>
  <div class="Search Search-hotel ">
    <div class="Search-left">
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
            <span class="Search-item-nightday">{{ night }} Gece</span>
          </div>
        </div>
      </div>
      <div class="mobile-w-100" @click="openPeoples">
        <select-hotel-person-count :adult="adult" :childAges="childAges"
          @change="adult = $event.adult; childAges = $event.childAges"></select-hotel-person-count>
      </div>
    </div>

    <div class="Search-mobile" :class=" { 'show': mobileCalendar } " ref="datePickerContainerMobile">
      <div class="Search-mobile-head">
        <h4>Tarih Seçiniz</h4>
        <button type="button" @click=" closeCalendar "><i class="icon-login-close"></i></button>
      </div>
      <HotelDatePicker v-bind=" datePickerProps " :disabled=" true " @check-in-changed=" checkInChanged($event) "
        @check-out-changed=" checkOutChanged($event) " format="DD dddd" ref="datePickerModal" :i18n=" calendarLanguage "
        :firstDayOfWeek=" firstDayOfWeek " :displayClearButton= false >
      </HotelDatePicker>
      <div class="Search-mobile-bottom">
        <button type="button" @click=" closeCalendar ">Uygula</button>
      </div>
    </div>

    <div class="Search-mobile" :class=" { 'show': mobilePeoples } ">
      <div class="Search-mobile-head">
        <h4>Kişi sayısı</h4>
        <button type="button" @click=" closePeoples "><i class="icon-login-close"></i></button>
      </div>
      <select-hotel-person-count :adult=" adult " :childAges=" childAges "
        @change=" adult = $event.adult; childAges = $event.childAges "></select-hotel-person-count>
      <div class="Search-mobile-bottom">
        <button type="button" @click=" closePeoples ">Uygula</button>
      </div>
    </div>

    <button type="button" class="Search-button" id="searchVilla" @click=" search ">
      <nuxt-img src="/img/icons/006-ob-search-icon.svg" width="16" height="18" alt="search icon" loading="lazy" 
        class="contain flex-shrink-0 my-1 desktop"></nuxt-img><span class="mobile">Otel Ara</span>
    </button>
  </div>
</template>

<script>


import { mapState } from "vuex";
import HotelDatePicker from "vue-hotel-datepicker2";
import SelectHotelPersonCount from "@/components/search/SelectHotelPersonCount.vue";

export default {
  name: "SearchHotelDetailComponent",
  components: {
    SelectHotelPersonCount,
    HotelDatePicker,
  },
  data() {
    return {
      searchResult: [],
      citySearchText: '',
      citiesDefault: [],
      selectedCity: '',
      disableDates: ['2023-02-21', '2023-02-22', '2023-02-23', '2023-02-24', '2023-02-24', '2023-02-26', '2023-02-27', '2023-02-28'],
      datePickerProps: {
      },
      checkIn: null,
      checkOut: null,
      adult: 1,
      childAges: [],
      firstDayOfWeek: Number(process.env.WEEKDAY),
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
      timeoutCheck: null,
      cancelToken: null,
      mobileCalendar: false,
      mobilePeoples: false,
    }
  },
  beforeMount() {
    let localData = localStorage.getItem('lastHotelSearch');
    if (localData) {
      localData = JSON.parse(localData);

      this.datePickerProps.startingDateValue = new Date(localData.checkIn)
      this.datePickerProps.endingDateValue = new Date(localData.checkOut)
      this.checkIn = localData.checkIn;
      this.checkOut = localData.checkOut;
      this.adult = localData.adult;
      this.childAges = localData.childAges ? localData.childAges.map((age => { return { age } })) : [];
      this.searchResult.push(localData.selectedCity);
      this.selectedCity = localData.selectedCity ? localData.selectedCity : '';
    } else {
      this.datePickerProps.startingDateValue = new Date()
      this.datePickerProps.endingDateValue = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
      this.checkIn = this.formatDate(this.datePickerProps.startingDateValue);
      this.checkOut = this.formatDate(this.datePickerProps.endingDateValue);
    }
  },
  computed: {
    night() {
      try {
        const checkIn = new Date(this.checkIn);
        const checkOut = new Date(this.checkOut);

        const millisecondsPerDay = 24 * 60 * 60 * 1000;
        const nightCount = Math.floor((checkOut - checkIn) / millisecondsPerDay);

        // NaN kontrolü ekleyerek nightCount değerinin geçerli olup olmadığını kontrol et
        if (isNaN(nightCount)) {
          return 0;
        }

        return nightCount;
      } catch (e) {
        return 0;
      }
    },
    ...mapState({
      hotels: state => state.hotels.searchData.destinations
    }),
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
  methods: {
    search() {
      const queryParams = {
        checkIn: this.checkIn,
        checkOut: this.checkOut,
        adult: this.adult,
        childAges: this.childAges.length ? this.childAges.filter(child => child.age !== '').map(child => child.age) : [],
      };

      this.$emit('search', queryParams)
    },
    checkInChanged(value) {
      this.checkIn = this.formatDate(value);
    },
    checkOutChanged(value) {
      const val = this.formatDate(value);
      if (val) {
        this.checkOut = this.formatDate(value);

        setTimeout(() => {
          if (this.checkIn && this.checkOut) {
            this.closeCalendar()
          }
        }, 50)
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
    clearDatesRez() {
      this.$refs.datePicker.clearSelection();
    },
    hidePickerRez() {
      this.$refs.datePicker.hideDatepicker();
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

      let datepickerInputParent = this.$refs.datePickerContainer;
      let datepickerInput = datepickerInputParent.querySelector(
        `[data-qa="datepickerInput"][tabindex="${tabIndex}"]`
      );

      datepickerInput.innerHTML = `<div class="formatted-date">${formattedDate}<span class="formatted-date-sm">${formattedDay}</span></div>`;

      datepickerInputParent = this.$refs.datePickerContainerMobile;
      datepickerInput = datepickerInputParent.querySelector(
        `[data-qa="datepickerInput"][tabindex="${tabIndex}"]`
      );

      datepickerInput.innerHTML = `<div class="formatted-date">${formattedDate}<span class="formatted-date-sm">${formattedDay}</span></div>`;
    },
    isMobile() {
      return window.innerWidth <= 991;
    },
    openCalendar() {
      if (this.isMobile()) {
        this.mobileCalendar = true
        setTimeout(() => {
          document.querySelector('body')?.classList.add('over-otel')
          document.querySelector('html')?.classList.add('over-otel')
          document.querySelector('.Header')?.classList.add('Header-z')
          document.querySelector('.Home')?.classList.add('Home-z')
          document.querySelector('.search-engine-section')?.classList.add('search-home-mobile-open')
          this.$refs.datePickerModal.showDatepicker()
          this.$refs.datePickerModal.clearSelection()
        }, 10)
      }
    },
    openPeoples() {
      if (this.isMobile()) {
        this.mobilePeoples = true
        setTimeout(() => {
          document.querySelector('body')?.classList.add('over-otel')
          document.querySelector('html')?.classList.add('over-otel')
          document.querySelector('.Header')?.classList.add('Header-z')
          document.querySelector('.Home')?.classList.add('Home-z')
          document.querySelector('.search-engine-section')?.classList.add('search-home-mobile-open')
        }, 10)
      }
    },
    closeCalendar() {
      if (this.isMobile()) {
        this.mobileCalendar = false
        setTimeout(() => {
          document.querySelector('body')?.classList.remove('over-otel')
          document.querySelector('html')?.classList.remove('over-otel')
          document.querySelector('.Header')?.classList.remove('Header-z')
          document.querySelector('.search-engine-section')?.classList.remove('search-home-mobile-open')
          document.querySelector('.Home')?.classList.remove('Home-z')
          this.$refs.datePickerModal.hideDatepicker()
        }, 10)
      }
    },
    closePeoples() {
      if (this.isMobile()) {
        this.mobilePeoples = false
        setTimeout(() => {
          document.querySelector('body')?.classList.remove('over-otel')
          document.querySelector('html')?.classList.remove('over-otel')
          document.querySelector('.Header')?.classList.remove('Header-z')
          document.querySelector('.search-engine-section')?.classList.remove('search-home-mobile-open')
          document.querySelector('.Home')?.classList.remove('Home-z')
        }, 10)
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
  margin-right: 10px;
  flex-shrink: 0;
}

@media (max-width:1100px) {
  :deep() .datepicker__input:before {
    display: none;
  }
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
  margin-right: 18%;
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
  background: var(--bs-theme-first);
  color: #fff !important;
}

:deep() .datepicker__month-day--first-day-selected span,
:deep() .datepicker__month-day--last-day-selected span {
  opacity: 1;
}

:deep() .datepicker__month-day--selected {
  background-color: rgb(var(--bs-theme-first-rgb), .7);
  color: #fff !important;
}

:deep() .datepicker__month-day--allowed-checkout:hover,
:deep() .datepicker__month-day--valid:hover {
  background: var(--bs-theme-first);
  color: #fff;
}

:deep() .datepicker__month-day--today .datepicker__month-day-wrapper {
  border: 2px solid var(--bs-theme-first);
}

:deep() .datepicker__header {
  padding: 1rem 2.5rem;
}

:deep() .datepicker__month-day {
  color: var(--bs-theme-first);
}

:deep() .datepicker__month-button {
  border: 1px solid var(--bs-theme-first);
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDcgMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80MDJfMTU5NCkiPgo8cGF0aCBkPSJNNS45MTQ5NyA0Ljc2Mjg4TDEuMzE3MDYgMC4xNjUwNkMxLjIxMDcxIDAuMDU4NjMyIDEuMDY4NzUgMCAwLjkxNzM4NiAwQzAuNzY2MDE4IDAgMC42MjQwNTggMC4wNTg2MzIgMC41MTc3MTQgMC4xNjUwNkwwLjE3OTExIDAuNTAzNThDLTAuMDQxMjIyNCAwLjcyNDE2NCAtMC4wNDEyMjI0IDEuMDgyNjggMC4xNzkxMSAxLjMwMjkyTDQuMDQwMDkgNS4xNjM5TDAuMTc0ODI2IDkuMDI5MTZDMC4wNjg0ODE2IDkuMTM1NTkgMC4wMDk3NjU2MiA5LjI3NzQ2IDAuMDA5NzY1NjIgOS40Mjg3NUMwLjAwOTc2NTYyIDkuNTgwMiAwLjA2ODQ4MTYgOS43MjIwOCAwLjE3NDgyNiA5LjgyODU5TDAuNTEzNDMgMTAuMTY3QzAuNjE5ODU4IDEwLjI3MzUgMC43NjE3MzQgMTAuMzMyMSAwLjkxMzEwMiAxMC4zMzIxQzEuMDY0NDcgMTAuMzMyMSAxLjIwNjQzIDEwLjI3MzUgMS4zMTI3NyAxMC4xNjdMNS45MTQ5NyA1LjU2NUM2LjAyMTU2IDUuNDU4MjQgNi4wODAxMSA1LjMxNTY5IDYuMDc5NzcgNS4xNjQxNUM2LjA4MDExIDUuMDEyMDMgNi4wMjE1NiA0Ljg2OTU2IDUuOTE0OTcgNC43NjI4OFoiIGZpbGw9IiMxMTI4NTUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80MDJfMTU5NCI+CjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjExIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=) no-repeat 57%/10px;
}

.datepicker__wrapper {
  width: 100%;
}

@media (max-width:991px) {
  :deep().datepicker__input--first:after {
    background-size: 18px 10px;
    background-repeat: no-repeat;
    background-position: center;
    width: 36px;
    height: 36px;
    padding: 14px;
    background-color: #eff1f5;
    border-radius: 4px;
  }

  :deep() .datepicker__input--first:before {
    display: none;
  }

  :deep() .datepicker__input:before {
    display: none;
  }
}

@media (max-width:500px) {
  .Search-mobile.show :deep() .datepicker__dummy-wrapper {
    justify-content: center;
  }

  .Search-mobile.show :deep() .datepicker__input {
    width: max-content;
  }

  .Search-mobile.show :deep().datepicker__input--first:after {
    margin-right: 10px;
    margin-left: 10px;
    background-color: transparent;
  }
}
</style>
