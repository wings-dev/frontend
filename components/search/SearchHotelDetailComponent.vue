<template>
  <div class="Search Search-hotel ">
    <div class="Search-left">
      <div class="Search-item date">
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
            <div class="Search-item-date-inputs">

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
      <select-hotel-person-count :adult="adult" :childAges="childAges"
        @change="adult = $event.adult; childAges = $event.childAges"></select-hotel-person-count>
    </div>
    <button type="button" class="Search-button" id="searchVilla" @click="search">
      <img src="/img/icons/006-ob-search-icon.svg" width="16" height="18" alt="ob-search" class="contain flex-shrink-0 my-1 desktop"><span class="mobile">Otel Ara</span></button>
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
      firstDayOfWeek: Number(process.env.CALENDAR_FIRST_DAY),
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
    ...mapState({
      hotels: state => state.hotels.searchData.destinations
    }),
  },
  watch: {
    checkIn(newValue) {
      if(newValue !== undefined){
      this.changeHotelInput(0, newValue);
    }
    },
    checkOut(newValue) {
      if(newValue !== undefined){
      this.changeHotelInput(-1, newValue);
    }
    },
  },
  methods: {
    search() {
      // şehir
      if (this.selectedCity.type === 1) {
        const queryParams = {
          destinations: this.selectedCity.city.id,
          checkIn: this.checkIn,
          checkOut: this.checkOut,
          adult: this.adult,
          childAges: this.childAges.length ? this.childAges.filter(child => child.age !== '').map(child => child.age) : [],
        };

        const localData = { ...queryParams };
        localData['selectedCity'] = this.selectedCity;
        localStorage.setItem('lastHotelSearch', JSON.stringify(localData));

        const urlSearchParams = Object.entries(queryParams)
          .filter(([key, value]) => value !== undefined && value !== null && value !== '')
          .map(([key, value]) => Array.isArray(value) ? value.map(item => `${key}=${item}`).join('&') : `${key}=${value}`)
          .join('&');

        window.location.href = `${window.location.origin}/oteller?${urlSearchParams}`;
      }
    },
    checkInChanged(value) {
      this.checkIn = this.formatDate(value);
    },
    checkOutChanged(value) {
      this.checkOut = this.formatDate(value);
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

      const datepickerInput = $('[data-qa="datepickerInput"][tabindex="' + tabIndex + '"]');

      datepickerInput.html(`<div class="formatted-date">${formattedDate}<span class="formatted-date-sm">${formattedDay}</span></div>`);
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
  font-size: 14px;
  font-weight: 500;
  color: #24252e;

}

:deep().datepicker__input .formatted-date span {
  font-size: 9px;
  font-weight: 500;
  color: #c1c1c1;
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
.datepicker__wrapper{
  width: 100%;
}
@media (max-width:800px) {
  :deep().datepicker__input--first:after{
    background-size: 18px 10px;
    background-repeat: no-repeat;
    background-position: center;
    padding: 14px;
    background-color: #eff1f5;
    border-radius: 4px;
  }
  :deep() .datepicker__input--first:before{
    display: none;
  }
  :deep() .datepicker__input:before{
    position: absolute;
    right: 0;
  }
}
</style>
