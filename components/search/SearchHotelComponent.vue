<template>
  <div class="Search  ">
    <div class="Search-left">
      <div class="Search-item date">
        <client-only>
          <v-select class="w-100" :options="filteredCities" id="code" v-model="selectedCity" :clearable="false"
            placeholder="Şehir, İlçe veya Otel adı yazın" @search="onCitySearch"></v-select>
        </client-only>
      </div>
      <div class="Search-item date">
        <div
          class="icon-box bg-theme-light rounded-sm flex-shrink-0 d-flex align-items-center justify-content-center me-3 ">
          <i class="icon-calendar"></i>
        </div>

        <div class="Search-item-date">
          <!-- <span class="Search-item-name">Giriş / Çıkış Tarihi</span> -->
          <div class="Search-item-date-inputs">
            <HotelDatePicker v-bind="datePickerProps" @check-in-changed="checkInChanged($event)"
              @check-out-changed="checkOutChanged($event)" format="DD-MM-YYYY" :firstDayOfWeek="Number(weekfirstday)"
              :i18n="calendarLanguage" ref="datePicker" :displayClearButton=false>

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
      <div class="Search-item Search-item-people">
        <button class=" dropdown-toggle Search-item-person-info" type="button" id="dropdownMenuButton2"
          data-bs-toggle="dropdown" aria-expanded="false">
          <div
            class="icon-box bg-theme-light rounded-sm flex-shrink-0 d-flex align-items-center justify-content-center me-3 ">
            <i class="icon-group-user"></i>
          </div>
          <div class="Search-item-people-in">
            <span class="Search-item-name">Kişi Sayısı </span>
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
                    <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.3984 9H6.59844" stroke="#1C274C" stroke-linecap="round" />
                      <path
                        d="M5 2.07026C6.17669 1.38958 7.54285 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 7.54285 1.38958 6.17669 2.07026 5"
                        stroke="#1C274C" stroke-linecap="round" />
                    </svg>
                  </button>
                  <input id="Search_PeopleAdult" class="person" type="text" :value="adult" max="20" readonly>
                  <button type="button" class="plus-person" @click="adultIncrease">
                    <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.4016 9.00012L9.00156 9.00012M9.00156 9.00012L6.60156 9.00012M9.00156 9.00012L9.00156 6.6001M9.00156 9.00012L9.00156 11.4001"
                        stroke="#1C274C" stroke-linecap="round" />
                      <path
                        d="M5 2.07026C6.17669 1.38958 7.54285 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 7.54285 1.38958 6.17669 2.07026 5"
                        stroke="#1C274C" stroke-linecap="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="Search-item-person-item">
                <p>Çocuk <br><span>6-17 arası</span></p>
                <div class="Search-item-person-item-in ">
                  <button type="button" class="minus-person" @click="children_Decrease">
                    <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.3984 9H6.59844" stroke="#1C274C" stroke-linecap="round" />
                      <path
                        d="M5 2.07026C6.17669 1.38958 7.54285 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 7.54285 1.38958 6.17669 2.07026 5"
                        stroke="#1C274C" stroke-linecap="round" />
                    </svg>
                  </button>
                  <input id="Search_PeopleChild" class="person" type="text" :value="children" max="10" readonly>
                  <button type="button" class="plus-person" @click="children_Increase">
                    <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.4016 9.00012L9.00156 9.00012M9.00156 9.00012L6.60156 9.00012M9.00156 9.00012L9.00156 6.6001M9.00156 9.00012L9.00156 11.4001"
                        stroke="#1C274C" stroke-linecap="round" />
                      <path
                        d="M5 2.07026C6.17669 1.38958 7.54285 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 7.54285 1.38958 6.17669 2.07026 5"
                        stroke="#1C274C" stroke-linecap="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="Search-item-person-item ">
                <p>Bebek<br><span>0-5 arası</span></p>
                <div class="Search-item-person-item-in ">

                  <button type="button" class="minus-person" @click="baby_Decrease">
                    <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.3984 9H6.59844" stroke="#1C274C" stroke-linecap="round" />
                      <path
                        d="M5 2.07026C6.17669 1.38958 7.54285 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 7.54285 1.38958 6.17669 2.07026 5"
                        stroke="#1C274C" stroke-linecap="round" />
                    </svg>
                  </button>
                  <input id="Search_PeopleBaby" class="person" type="text" :value="baby" name="baby" max="5" readonly>
                  <button type="button" class="plus-person" @click="baby_Increase">
                    <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.4016 9.00012L9.00156 9.00012M9.00156 9.00012L6.60156 9.00012M9.00156 9.00012L9.00156 6.6001M9.00156 9.00012L9.00156 11.4001"
                        stroke="#1C274C" stroke-linecap="round" />
                      <path
                        d="M5 2.07026C6.17669 1.38958 7.54285 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 7.54285 1.38958 6.17669 2.07026 5"
                        stroke="#1C274C" stroke-linecap="round" />
                    </svg>
                  </button>

                </div>
              </div>
            </div>
          </ul>
        </client-only>
      </div>
    </div>
    <button type="button" class="Search-button" id="searchVilla" @click="search"><img
        src="/img/icons/006-ob-search-icon.svg" width="16" height="18" alt="ob-search"
        class="contain flex-shrink-0 my-1"></button>
  </div>
</template>

<script>


import { mapState } from "vuex";
import HotelDatePicker from "vue-hotel-datepicker2";

export default {
  name: "SearchHotelComponent",
  components: {
    HotelDatePicker,
  },
  data() {
    return {
      searchResult: [],
      citySearchText: '',
      citiesDefault: [],
      selectedCity: '',
      disableDates: ['2023-02-21', '2023-02-22', '2023-02-23', '2023-02-24', '2023-02-24', '2023-02-26', '2023-02-27', '2023-02-28'],
      datePickerProps: {},
      checkIn: null,
      checkOut: null,
      adult: 1,
      children: 0,
      weekfirstday: process.env.WEEKDAY,
      baby: 0,
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
  computed: {
    ...mapState({
      hotels: state => state.hotels.searchData.destinations
    }),
    filteredCities() {
      if (this.citySearchText) {
        return this.searchResult
      } else {
        return this.citiesDefault
      }
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
    }
  },
  methods: {
    search() {
      if (this.selectedCity.type === 1) {
        const queryParams = {
          destinations: this.selectedCity.code,
          checkIn: this.checkIn,
          checkOut: this.checkOut,
          adult: this.adult,
          children: this.children,
          baby: this.baby,
        };

        localStorage.setItem('lastHotelSearch', JSON.stringify(queryParams));

        const urlSearchParams = Object.entries(queryParams)
          .filter(([key, value]) => value !== undefined && value !== null && value !== '')
          .map(([key, value]) => Array.isArray(value) ? value.map(item => `${key}=${item}`).join('&') : `${key}=${value}`)
          .join('&');

        window.location.href = `${window.location.origin}/otel?${urlSearchParams}`;
      }
    },
    async onCitySearch(searchText) {
      this.citySearchText = searchText;

      if (!searchText || searchText.length < 3) return;

      clearTimeout(this.timeoutCheck);

      this.timeoutCheck = setTimeout(async () => {
        if (this.cancelToken) {
          this.cancelToken.cancel();
        }
        this.cancelToken = this.$axios.CancelToken.source();

        try {
          const response = await this.$axios.post(
            '/data/hotels/auto-complete',
            { query: searchText },
            { cancelToken: this.cancelToken.token }
          );

          // tpye a göre öncelik sırası, ülke şehir hotel
          const sortOrder = { 8: 1, 1: 2, 2: 3 };

          const items = response.data.body?.items?.filter(item => [1, 2, 8].includes(item.type))
            .sort((a, b) => sortOrder[a.type] - sortOrder[b.type])
            .map(item => {
              item.label = item.type === 1 ? `${item.city.name}, ${item.country.name}` :
                item.type === 2 ? `${item.hotel.name}, ${item.city.name}, ${item.country.name}` :
                  item.type === 8 ? item.country.name : item.label;
              return item;
            }) || [];

          this.searchResult = items.slice(0,50);
        } catch (error) {
          console.error(error);
        }
      }, 500);
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
    clearDatesRez() {
      this.$refs.datePicker.clearSelection();
    },
    hidePickerRez() {
      this.$refs.datePicker.hideDatepicker();
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

:deep() .datepicker__wrapper {
  width: 100%;
}

:deep() .datepicker__dummy-wrapper {
  border: none;
  background: none;
}

:deep() .datepicker__input--first {
  padding-left: 0;
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
</style>
