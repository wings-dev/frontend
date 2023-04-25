<template>
  <div class="Login-calendar-in">
    <template v-if="loading">
      <div class="No-villas" v-if="loading">
        <nuxt-img :src="`img/site${site_id}/villa-loading.svg`" alt=""></nuxt-img>
        <h2>Takvim Yükleniyor...</h2>
        <p>Keyifli bir tatil için binlerce seçeneğe hazır mısınız?</p>
      </div>
    </template>
    <template v-else>
      <v-calendar class="custom-calendar mt-4" :attributes="calendarAttributes" :columns="calendarColumns"
        :rows="calendarRows" :disabled-dates="disabledDates" disable-page-swipe :step="calendarStep">
        <template v-slot:day-content="{ day, attributes }">
          <div v-for="(attr, index) in attributes" :key="index"
            class="d-flex flex-column align-items-center justify-content-center h-100 z-10 overflow-hidden w-100 calendar-cell"
            :class="attr?.customData?.className">
            <span class="day-label text-sm fw-bold text-gray-900">{{ day.day }}</span>
            <div class="flex-grow overflow-y-auto overflow-x-auto">
              <p class="calendar-price" style="" :class="attr.customData.class">
                {{ !attr.customData.status.includes(2) || (attr.customData.dateStatus.length === 1 &&
                  attr.customData.dateStatus.includes(2)) ? attr.customData.price : '' }}
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
    code: {
      required: true
    },
    calendarColumns: {
      type: Number
    },
    calendarRows: {
      type: Number
    },
    calendarStep: {
      type: Number
    },
  },
  data() {
    return {
      calendarAttributes: [],
      calendar: null,
      price_list_1: null,
      site_id: process.env.SITE,
      disabledDates: [
        // { start: null, end: new Date() },
        { start: null, end: new Date() },
      ],
      loading: true,
    }
  },
  async mounted() {
    let redisData = this.$store.state['routes'].routes[this.code];

    const data = await this.$getRedisKey([`data:villas:${this.code}:calendar`, `data:villas:${this.code}:prices`])
    // villa redis datası
    this.calendar = data[`data:villas:${this.code}:calendar`] ? data[`data:villas:${this.code}:calendar`] : [];
    this.price_list_1 = data[`data:villas:${this.code}:prices`] ? data[`data:villas:${this.code}:prices`].price_list_1 : [];
    console.log('this.calendar', this.calendar)
    console.log('this.price_list_1', this.price_list_1)
    this.setAttributes()
    this.loading = false
  },
  methods: {
    setAttributes() {
      const dates = new Set();
      const attributes = [];
      const { calendar, price_list_1 } = this;

      if (!calendar || !price_list_1) {
        console.warn("Invalid data: 'calendar' or 'price_list_1' is not defined.");
        return;
      }

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
            ? { "kapali-cikis-to-opsiyon-giris": true }
            : { "opsiyon-cikis-to-kapali-giris": true };
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

      [...calendar, ...price_list_1].forEach(item => {
        if (item && item.dates && item.dates[0]) {
          dates.add(item.dates[0]);
        }
      });

      dates.forEach(date => {
        const customData = {
          price: null,
          status: [],
          dateStatus: [],
        };

        const matchingCalendarItems = calendar.filter(item => item && item.dates && item.dates[0] === date);
        matchingCalendarItems.forEach(item => {
          customData.status = customData.status.concat(item.status);
          customData.dateStatus = customData.dateStatus.concat(item.dateStatus);
        });

        const matchingPriceItem = price_list_1.find(item => item && item.dates === date);
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
        if (item && item.dates) {
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
        }

      });

      this.calendarAttributes = attributes;
    }
  }
}
</script>

<style scoped></style>
