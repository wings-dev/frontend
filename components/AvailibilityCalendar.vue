<template>
  <div>
    <template v-if="loading">Takvim Yükleniyor...</template>
    <template v-else>
      <v-calendar class="custom-calendar mt-4" :attributes="calendarAttributes" :columns="2"
                  :disabled-dates="disabledDates" disable-page-swipe :step="1">
        <template v-slot:day-content="{ day, attributes }">
          <div v-for="(attr, index) in attributes" :key="index"
               class="d-flex flex-column align-items-center justify-content-start h-100 z-10 overflow-hidden w-100 calendar-cell"
               :class="attr?.customData?.className">
            <span class="day-label text-sm fw-bold text-gray-900">{{ day.day }}</span>
            <div class="flex-grow overflow-y-auto overflow-x-auto">
              <p class="calendar-price" style="" :class="attr.customData.class">
                {{ !attr.customData.status.includes(2) ? attr.customData.price : '' }}
              </p>
            </div>
          </div>
        </template>
      </v-calendar>
    </template>
  </div>
</template>

<script>
import HotelDatePicker from "vue-hotel-datepicker2";

export default {
  name: "AvailibilityCalendar",
  components: {
    HotelDatePicker,
  },
  props: {
    slug: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      calendarAttributes: [],
      calendar: null,
      price_list_1: null,
      disabledDates: [
        // { start: null, end: new Date() },
        { start: null, end: new Date() },
      ],
      loading: true,
    }
  },
  async mounted() {
    let redisData = this.$store.state['routes'].routes[this.slug];

    const data = await this.$getRedisKey([`data:villas:${this.slug}:calendar`, `data:villas:${this.slug}:prices`])
    // villa redis datası
    this.calendar = data[`data:villas:${this.slug}:calendar`] ? data[`data:villas:${this.slug}:calendar`] : [];
    this.price_list_1 = data[`data:villas:${this.slug}:prices`] ? data[`data:villas:${this.slug}:prices`].price_list_1 : [];
    this.setAttributes()
    this.loading = false
  },
  methods: {
    setAttributes() {
      const dates = new Set();
      const attributes = [];
      const { calendar, price_list_1 } = this;

      const setClassName = (customData, date) => {
        let { status, dateStatus } = customData;
        status = [...new Set(status)]
        const dateObj = new Date(date);
        const getAdjacentDay = (dayOffset) => new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate() + dayOffset).toISOString().substring(0, 10);

        const prevDayString = getAdjacentDay(-1);
        const nextDayString = getAdjacentDay(1);
        const findByDate = (attr, dateString) => attr.find(attribute => new Date(attribute.dates).getTime() === new Date(dateString).getTime());

        const prevDayData = findByDate(attributes, prevDayString)?.customData;
        const nextDayData = findByDate(attributes, nextDayString)?.customData;

        // bu gün hem giriş hem çıkışsa
        if (dateStatus.includes(0) && dateStatus.includes(2) && status.length == 1 && status.includes(2) && prevDayData?.status.includes(2)) {
          // bir önceki günün tipine bak
          //Kapalı-to-kapalı
          return { "kapali": true }
        }
        if (dateStatus.includes(0) && dateStatus.includes(2) && status.length == 1 && status.includes(1) && prevDayData?.status.includes(1)) {
          // bir önceki günün tipine bak
          //opsiyon-to-opsiyon
          return { "opsiyon": true }
        }
        if (dateStatus.includes(0) && dateStatus.includes(2)) {
          // bir önceki günün tipine bak
          return prevDayData?.status.includes(2)
            ? { "kapali-cikis-to-opsiyon-giris" : true}
            : { "opsiyon-cikis-to-kapali-giris" : true };
        }


        return {
          "kapali": status.includes(2),
          "kapali-giris": status.includes(2) && dateStatus.includes(0),
          "kapali-cikis": status.includes(2) && dateStatus.includes(2),
          "opsiyon": status.includes(1),
          "opsiyon-giris": status.includes(1) && dateStatus.includes(0),
          "opsiyon-cikis": status.includes(1) && dateStatus.includes(2),
        };
      }

      [...calendar, ...price_list_1].forEach(item => dates.add(item.dates[0]));

      dates.forEach(date => {
        const customData = {
          price: null,
          status: [],
          dateStatus: [],
        };

        const matchingCalendarItems = calendar.filter(item => item.dates[0] === date);
        matchingCalendarItems.forEach(item => {
          customData.status = customData.status.concat(item.status);
          customData.dateStatus = customData.dateStatus.concat(item.dateStatus);
        });

        const matchingPriceItem = price_list_1.find(item => item.dates === date);
        if (matchingPriceItem) {
          customData.price = matchingPriceItem.price;
        }

        const existingObjIndex = attributes.findIndex(obj => obj.dates.getTime() === new Date(date).getTime());
        if (existingObjIndex !== -1) {
          const existingObj = attributes[existingObjIndex];
          existingObj.customData.status = [...new Set([...existingObj.customData.status, ...customData.status])];
          existingObj.customData.dateStatus = [...new Set([...existingObj.customData.dateStatus, ...customData.dateStatus])];
          existingObj.customData.className = setClassName(existingObj.customData, date);
        } else {
          customData.className = setClassName(customData, date);
          attributes.push({ customData, dates: new Date(date) });
        }
      });

      price_list_1.forEach(item => {
        const exists = attributes.find(obj => obj.dates.getTime() === new Date(item.dates).getTime());
        if (!exists) {
          const customData = {
            price: item.price,
            status: [],
            dateStatus: [],
            className: {}
          };

          attributes.push({ customData, dates: new Date(item.dates) });
        }
      });

      this.calendarAttributes = attributes;
    }
  }
}
</script>

<style scoped>

.vc-container {
  --gray-500: #A6AFC2 !important;
  --gray-900: var(--bs-theme-first-dark) !important;
  border: none !important;
  position: relative;
  z-index: 1;
  width: 100% !important;
}

.vc-container:before {
  content: "";
  display: inline-block;
  width: 100%;
  height: 48px;
  background-color: #F2F5FB;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}

:deep() .vc-day {
  min-width: 48px !important;
  min-height: 48px !important;
}

:deep() .vc-weeks{
  margin-top: 30px;
}
.opsiyon {
  background-image: linear-gradient(to bottom, #FFF8E7, #FFF8E7);
}

.opsiyon-giris {
  background-image: linear-gradient(to top left, #FFF8E7 0%, #FFF8E7 50%, transparent 50%, transparent 100%);
}

.opsiyon-cikis {
  background-image: linear-gradient(to bottom right, #FFF8E7 0%, #FFF8E7 50%, transparent 50%, transparent 100%);
}


.kapali {
  background-image: linear-gradient(to bottom, #F2F5FB, #F2F5FB);
}

.kapali-giris {
  background-image: linear-gradient(to top left, #F2F5FB 0%, #F2F5FB 50%, transparent 50%, transparent 100%);
}

.kapali-cikis {
  background-image: linear-gradient(to bottom right, #F2F5FB 0%, #F2F5FB 50%, transparent 50%, transparent 100%);
}

.kapali-cikis-to-opsiyon-giris {
  background-image: linear-gradient(to top left, #FFF8E7 0%, #FFF8E7 50%, transparent 50%, transparent 100%), linear-gradient(to bottom right, #F2F5FB 0%, #F2F5FB 50%, transparent 50%, transparent 100%);
}

.opsiyon-cikis-to-kapali-giris {
  background-image: linear-gradient(to bottom right, #FFF8E7 0%, #FFF8E7 50%, transparent 50%, transparent 100%), linear-gradient(to top left, #F2F5FB 0%, #F2F5FB 50%, transparent 50%, transparent 100%);
}


/* OPSIYON END */


/* KAPALI START  */


/* OPSIYON END  */

.cikis-kapali {
  background-color: transparent;
}

.cikis-kapali:before {
  content: "";
  display: inline-block;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(318deg, #F2F5FB 49%, transparent 50%), linear-gradient(138deg, #FFF8E7 49%, transparent 50%);
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}

.cikis-kapali:after {
  display: none;
}

.cikis-opsiyon:before {
  content: "";
  display: inline-block;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(315deg, #f3f3ff 49%, transparent 50%);
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}

.doubleday:after {
  content: "";
  display: inline-block;
  width: 100%;
  height: 100%;

  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}


.calendar-price {
  font-weight: 400;
  font-size: 11px;
  color: #989FB5;
  margin-bottom: 0;
}

.swiper-overflow {
  overflow: hidden;
}

#mapContainer {
  width: 300px;
  height: 300px;
}

.day-label {
  margin-top: 5px;
}

:deep() .modal-backdrop {
  opacity: 0.3;
}

.modal-body {
  padding: 0;
}

.modal-open {
  overflow: hidden;
}

@media (min-width: 992px) {

  .modal-lg,
  .modal-xl {
    max-width: 90%;
  }
}

@media (min-width: 576px) {

  .modal-lg,
  .modal-xl {
    max-width: 90%;
  }
}

@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1140px;
  }
}
</style>
