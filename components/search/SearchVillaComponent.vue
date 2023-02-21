<template>
  <div class="Search  ">
    <div class="Search-left">
      <div class="Search-item Search-item-region dropdown">
        <button class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
          aria-expanded="false">
          <div
            class="icon-box bg-theme-light rounded-sm flex-shrink-0 d-flex align-items-center justify-content-center me-3 ">
            <i class="icon-pin"></i>
          </div>
          <div class="Search-item-region-in">
            <span class="Search-item-name">Bölge</span>
            <span class="dropdown-toggle-title">{{ selectedDestinations.length }} destinations</span>
          </div>
          <i class="icon-down-arrow"></i>
        </button>
        <ul class="dropdown-menu filtered" aria-labelledby="dropdownMenuButton1">
          <filter-item-checkbox-component :hideTitle="true" filterInputPlaceholder="Bölge Arayın"
            :checkboxes="destinations" :hideTitleBorder="true"
            @updated="updateFilter('destinations', $event)"></filter-item-checkbox-component>

        </ul>
      </div>
      <div class="Search-item date">
        <div
          class="icon-box bg-theme-light rounded-sm flex-shrink-0 d-flex align-items-center justify-content-center me-3 ">
          <i class="icon-calendar"></i>
        </div>

        <div class="Search-item-date">
          <span class="Search-item-name">Giriş / Çıkış Tarihi {{ checkIn }} {{ checkOut }}</span>
          <div class="Search-item-date-inputs">
            <HotelDatePicker @check-in-changed="checkInChanged($event)" @check-out-changed="checkOutChanged($event)"
              format="DD/MM/YYYY" :minNights="0" :firstDayOfWeek="Number(weekfirstday)"></HotelDatePicker>
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
            <span class="Search-item-name">Kişi Sayısı</span>
            <span class="dropdown-toggle-title">{{ selectedPersonText }}</span>
            <i class="icon-down-arrow"></i>
          </div>

        </button>
        <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton2">
          <div class="Search-item-person">
            <div class="Search-item-person-item ">
              <p>Adult</p>
              <div class="Search-item-person-item-in ">
                <button type="button" class="minus-person" onclick=""><i class="icon-minus " @click="adultDecrease"></i>
                </button>
                <input id="Search_PeopleAdult" class="person" type="text" :value="adult" max="20" readonly>
                <button type="button" class="plus-person"><i class="icon-plus" @click="adultIncrease"></i></button>
              </div>
            </div>
            <div class="Search-item-person-item">
              <p>Children <br><span>Between 6-17 </span></p>
              <div class="Search-item-person-item-in ">
                <button type="button" class="minus-person" onclick=""><i class="icon-minus "
                    @click="children_Decrease"></i></button>
                <input id="Search_PeopleChild" class="person" type="text" :value="children" max="10" readonly>
                <button type="button" class="plus-person"><i class="icon-plus " @click="children_Increase"></i>
                </button>
              </div>
            </div>
            <div class="Search-item-person-item ">
              <p>Children<br><span>Between 0-5</span></p>
              <div class="Search-item-person-item-in ">

                <button type="button" class="minus-person" onclick=""><i class="icon-minus " @click="baby_Decrease"></i>
                </button>
                <input id="Search_PeopleBaby" class="person" type="text" :value="baby" name="baby" max="5" readonly>
                <button type="button" class="plus-person"><i class="icon-plus " @click="baby_Increase"></i>
                </button>

              </div>
            </div>
          </div>
        </ul>
      </div>
      <div class="Search-item Search-item-more">
        <button class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
          aria-expanded="false">
          <i class="icon-filter"></i>
          <span class="dropdown-toggle-title">Gelişmiş Arama</span>
          <i class="icon-down-arrow"></i>
        </button>
        <ul class="dropdown-menu filtered " aria-labelledby="dropdownMenuButton3">
          <div class="dropdown-menu-in filtered-in">
            <filter-item-checkbox-component title="TESİS TİPİ" :checkboxes="amenites.facilityTypes"
              @updated="updateFilter('amenites.facilityTypes', $event)"></filter-item-checkbox-component>
            <filter-item-checkbox-component title="TESİS KONSEPTİ" :checkboxes="amenites.facilityConcepts"
              @updated="updateFilter('amenites.facilityConcepts', $event)"></filter-item-checkbox-component>
          </div>
        </ul>
      </div>
    </div>
    <button type="button" class="Search-item-more-mobile" id="mobileFilter" @click="showMobileFilter()"><i
        class="icon-filter"></i>
      <span class="dropdown-toggle-title">Gelişmiş Arama</span></button>
    <button type="button" class="Search-button" id="searchVilla" @click="search"><img
        src="/img/icons/006-ob-search-icon.svg" width="16" height="18" alt="ob-search"
        class="contain flex-shrink-0 my-1"></button>
  </div>
</template>

<script>
import HotelDatePicker from "vue-hotel-datepicker";

export default {
  name: "SearchVillaComponent",
  data() {
    return {
      disableDates: ['2023-02-21', '2023-02-22', '2023-02-23', '2023-02-24', '2023-02-24', '2023-02-26', '2023-02-27', '2023-02-28'],
      checkIn: null,
      checkOut: null,
      adult: 1,
      children: 0,
      weekfirstday: process.env.WEEKDAY,
      baby: 0,
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
      orderValues: [
        { value: 0, text: "Fiyata Göre Artan" },
        { value: 1, text: "Fiyata Göre Azalan" },
        { value: 2, text: "Yeniden Eskiye" },
        { value: 3, text: "Eskiden Yeniye" },
      ],
      orderValue: null,
      orderPlaceholder: "Sırala:"
    }
  },
  components: {
    HotelDatePicker
  },
  mounted() {
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
    }
  },
  methods: {
    showMobileFilter() {
      document.querySelector('.Filter-left').classList.add("show")
      document.querySelector('body').classList.add("over")
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
      this.$router.push({
        name: 'listele', query: {
          destinations: this.selectedDestinations.map(item => item.code),
          checkIn: this.checkIn,
          checkOut: this.checkOut,
          adult: this.adult,
          children: this.children,
          baby: this.baby,
          facilityTypes: this.selectedFacilityTypes.map(item => item.code),
          facilityConcepts: this.selectedFacilityConcepts.map(item => item.code),
        }
      })
    }
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

:deep() .vhd__datepicker__wrapper {
  background: none !important;
}

:deep() .vhd__datepicker__dummy-wrapper {
  border: none !important;
}

:deep() .vhd__datepicker__input {
  padding: 0 !important;
  text-align: left !important;
}

:deep() .vhd__datepicker__input:first-child {
  background-position: 80px !important;
}

:deep() .vhd__datepicker__month-day--today .vhd__datepicker__month-day-wrapper {
  border-color: var(--bs-theme-first);
}

:deep() .vhd__datepicker__month-day--allowed-checkout:hover,
:deep() .vhd__datepicker__month-day--valid:hover,
:deep() .vhd__datepicker__month-day--selected,
:deep() .vhd__datepicker__month-day--first-day-selected,
:deep() .vhd__datepicker__month-day--last-day-selected {
  background-color: var(--bs-theme-first-dark) ;
}
:deep() .vhd__datepicker__tooltip{
  padding: 3px 4px;
}
</style>
