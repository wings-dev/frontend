<template>
  <form action="" class="Reservation-form" id="reservationForm">

    <div class="Reservation-form-top" :class="{ 'mobile-active': mobileReservation }">
      <div class="Reservation-form-top-head">
        <button type="button" class="mobile-menus-back" @click="reservatinAction"><i class="icon-left-arrow"></i></button>
        <h4 class="Reservation-form-title">Rezervasyon Yap</h4>
      </div>

      <span class="tarihsec">TARİH SEÇ</span>
      <div class="Reservation-form-top-in">
        <div class="Reservation-form-in">
          <div class="Reservation-form-item w-100">
            <div class="dates d-flex">
              <div class="date-title w-50">
                Giriş Tarihi
              </div>
              <div class="date-title w-50">
                Çıkış Tarihi
              </div>
            </div>

            <HotelDatePicker v-bind="datePickerProps" :disabled="true" @check-in-changed="checkInChanged($event)"
              @check-out-changed="checkOutChanged($event)" format="DD dddd" :positionRight="true"
              :disabledDates="disableReservation" ref="datePicker" :i18n="calendarLanguage"
              :firstDayOfWeek="firstDayOfWeek" :displayClearButton=false>

              <div slot="content">
                <div class="d-flex align-items-center justify-content-end mt-3 calendar-buttons">
                  <button @click.prevent="clearDatesRez()" class="me-1"><i class="icon-date-clear"></i> Temizle</button>
                  <button @click.prevent="hidePickerRez()"><i class="icon-date-close"></i>Kapat</button>
                </div>
              </div>
            </HotelDatePicker>
          </div>
          <div class="Reservation-form-item Reservation-form-item-person">
            <label for="">
              <span class="Reservation-form-item-title">Kişi Sayısı</span>
              <div class="Reservation-form-item-icon">
                <i class="icon-user"></i>
              </div>
              <div class="Reservation-form-item-input">
                <button class=" dropdown-toggle" type="button" id="dropdownPerson" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <p><span class="adult-people">{{ adult }}</span> Yetişkin,
                    <span class="child-people">{{ child }}</span> Çocuk,
                    <span class="child-people">{{ baby }}</span> Bebek
                  </p>
                </button>
                <client-only>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <div class="Search-item-person">
                      <div class="Search-item-person-item ">
                        <p>Yetişkinler <br><span class="">13 yaş ve üzeri</span></p>
                        <div class="Search-item-person-item-in ">
                          <button type="button" class="minus-person" @click="adultDecrease">
                            <i class="icon-minus"></i>
                          </button>
                          <input id="Search_PeopleAdult" class="person" name="yetiskinler" type="text" v-model="adult"
                            data-min="1" data-max="10" data-text="Yetişkin, " max="20" readonly>
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
                          <input id="Search_PeopleChild" class="person" type="text" :value="child" name="cocuklar"
                            max="10" data-text="Çocuk" data-min="0" data-max="10" readonly>
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
                          <input id="Search_PeopleBaby" class="person" type="text" v-model="baby" name="cocuklar"
                            data-min="0" data-max="10" data-text="Bebek" readonly>
                          <button type="button" class="plus-person" @click="baby_Increase">
                            <i class="icon-plus"></i>
                          </button>

                        </div>
                      </div>
                    </div>

                  </ul>
                </client-only>
              </div>

            </label>
          </div>
        </div>
        <div class="Reservation-form-info">

          <div class="Reservation-form-info-item">
            <div class="Reservation-form-info-item-in">
              <div class="Reservation-form-info-item-left">
                <h5>Ön Ödeme Tutarı</h5>
              </div>
              <div class="Reservation-form-info-item-right">
                <b>{{ availabilityData.advance_payment | numberFormat }} {{ availabilityData.night_price_currency_symbol
                }}</b>
              </div>
            </div>

          </div>
          <div class="Reservation-form-info-item">
            <div class="Reservation-form-info-item-in">
              <div class="Reservation-form-info-item-left">
                <h5>Toplam Tutar</h5>
              </div>
              <div class="Reservation-form-info-item-right">
                <b>{{ availabilityData.total_payment | numberFormat }} TL</b>
              </div>
            </div>
          </div>
          <div class="Reservation-form-detail" :class="{ 'mobile-active': mobileReservation }">

            <div class="Reservation-form-detail-top">
              <div class="Reservation-form-detail-top-item">
                <p>{{ availabilityData.day }} Gece Konaklama Tutarı</p>
                <b>{{ availabilityData.total_price | numberFormat }}{{ availabilityData.night_price_currency_symbol }}</b>
              </div>
              <div class="Reservation-form-detail-top-item">
                <p>Temizlik Ücreti <i class="icon-information" data-bs-toggle="tooltip" data-bs-placement="right"
                    title="Tooltip on right"></i></p>
                <b>{{ availabilityData.cleaning_fee | numberFormat }}{{ availabilityData.night_price_currency_symbol
                }}</b>
              </div>
            </div>
            <p class="Reservation-form-detail-total">
              Toplam Ödeme <span>{{ availabilityData.total_price | numberFormat }}{{
                availabilityData.night_price_currency_symbol }}</span>
            </p>
            <div class="Reservation-form-detail-bottom">
              <div class="Reservation-form-detail-bottom-item">
                <p>Ön Ödeme <span>{{ availabilityData.advance_payment | numberFormat }}{{
                  availabilityData.night_price_currency_symbol
                }}</span></p>
                <small>Rezervasyonu gerçekleştirmek için yapmanız gereken ön ödeme tutarı</small>
              </div>
              <div class="Reservation-form-detail-bottom-item">
                <p>Tesise Girişte <span>{{ availabilityData.remaining_payment | numberFormat }}{{
                  availabilityData.night_price_currency_symbol
                }}</span></p>
                <small>Ön ödeme sonrası yapmanız gereken kalan tutar girişte alınacaktır.</small>
              </div>
            </div>
          </div>
          <div class="accordion Reservation-form-info-item-more" id="accordionExample">
            <div class="accordion-item">
              <button class="accordion-button Reservation-form-info-item-more-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Detayları Gör
                <i class="icon-down-arrow"></i>
              </button>

              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div class="Reservation-form-info-item-more-item">
                  <div class="Reservation-form-info-item-more-item-left">
                    <p>{{ availabilityData.day }} Gece Konaklama Tutarı</p>
                  </div>
                  <b>{{ availabilityData.total_price | numberFormat }}{{ availabilityData.night_price_currency_symbol
                  }}</b>
                </div>
                <div class="Reservation-form-info-item-more-item">
                  <div class="Reservation-form-info-item-more-item-left">
                    <p>Temizlik Ücreti</p>
                    <i class="icon-information" data-bs-toggle="tooltip" data-bs-placement="right"
                      title="Tooltip on right"></i>
                  </div>
                  <b>{{ availabilityData.cleaning_fee | numberFormat }}{{ availabilityData.night_price_currency_symbol
                  }}</b>
                </div>

                <div class="Reservation-form-info-item-more-item">
                  <div class="Reservation-form-info-item-more-item-left">
                    <p>Girişte Ödenecek</p>
                  </div>
                  <b>{{ availabilityData.remaining_payment | numberFormat }}{{
                    availabilityData.night_price_currency_symbol
                  }}</b>
                </div>

                <div class="Reservation-form-info-item-more-item">
                  <div class="Reservation-form-info-item-more-item-left">
                    <p>Toplam Tutar</p>
                    <i class="icon-information" data-bs-toggle="tooltip" data-bs-placement="right"
                      title="Tooltip on right"></i>
                  </div>
                  <b>{{ availabilityData.total_payment | numberFormat }}{{ availabilityData.night_price_currency_symbol
                  }}</b>
                </div>



              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="Reservation-form-bottom">
      <div class="Reservation-form-bottom-left">
        <b>{{ availabilityData.total_payment | numberFormat}}{{availabilityData.night_price_currency_symbol }}</b>
        <span v-if="!availabilityChecked" :disabled="!dateSelected || availabilityLoading">GECE</span>
        <span v-else>{{ formattedCheckIn }} - {{ formattedCheckOut }}</span>
        <small v-if="!availabilityChecked" :disabled="!dateSelected || availabilityLoading">Başlayan fiyatlar</small>
        <button type="button" v-if="availabilityChecked" @click.prevent="reservatinAction">{{ mobileReservation ?
          'DETAYLARI KAPAT' : 'DETAYLARI GÖSTER' }} </button>
      </div>
      <!-- mobile -->
      <template v-if="isMobile">
        <!-- form kapalıysa -->
        <template v-if="!mobileReservation">

          <button v-if="!availabilityChecked" class="Reservation-form-submit" @click.prevent="reservatinAction()">
            Uygunluk Durumunu Kontrol Edin
          </button>
          <button v-else :disabled="!dateSelected" class="Reservation-form-submit" @click.prevent="preReservation()">
            Ön Rezervasyon Talebi Gönder
          </button>

        </template>
        <!-- form acıksa -->
        <template v-else>
          <button class="Reservation-form-submit" :disabled="!dateSelected || availabilityLoading" v-if="!dateSelected"
            @click.prevent="reservatinAction()">
            Kaydet
          </button>
          <button v-else class="Reservation-form-submit" @click.prevent="preReservation()">
            Ön Rezervasyon Talebi Gönder
          </button>
        </template>
      </template>

      <!-- desktop -->
      <template v-else>
        <button v-if="!availabilityChecked" class="Reservation-form-submit" @click.prevent="availabilityCheck()"
          :class="{ 'disabled': !this.dateSelected || this.availabilityLoading }">
          Uygunluk Durumunu Kontrol Edin
        </button>
        <button v-else :disabled="!dateSelected" class="Reservation-form-submit" @click.prevent="preReservation()">
          Ön Rezervasyon Talebi Gönder
        </button>
      </template>
    </div>
  </form>
</template>

<script>
import HotelDatePicker from "vue-hotel-datepicker2";
import "vue-hotel-datepicker2/dist/vueHotelDatepicker2.css";
import { mapMutations } from "vuex";

export default {
  name: "ReservationForm",
  props: ['villa', 'propertyCode', 'disableReservation'],
  components: {
    HotelDatePicker,
  },
  data() {
    return {
      datePickerProps: {},
      checkIn: null,
      checkOut: null,
      adult: 0,
      child: 0,
      baby: 0,
      availabilityChecked: false,
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
      firstDayOfWeek: Number(process.env.CALENDAR_FIRST_DAY),
      availabilityLoading: false,
      availabilityData: {
        "status": null,
        "total_price": 0,
        "day": 0,
        "night_price_currency_symbol": "₺",
        "cleaning_fee": 0,
        "min_cleaning_day": 0,
        "min_day": 0,
        "night_price": [
          {
            "price": 0,
            "price_date": null
          }
        ],
        "damage_deposit": 0,
        "price": 0,
        "total_payment": 0,
        "advance_payment": 0,
        "remaining_payment": 0
      },
      formattedCheckIn: null,
      formattedCheckOut: null,
      mobileReservation: false,
      reservationDetail: false,
      isMobile: false,
    }
  },
  beforeMount() {
    const query = this.$route.query;
    if (query.i && query.o) {
      function isDateRangeValid(checkInParam, checkOutParam, disableReservation) {
        const checkInDate = new Date(checkInParam);
        const checkOutDate = new Date(checkOutParam);

        // checkInParam tarihinin bu günden önce olmamasını kontrol et
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (checkInDate < today) {
          return false;
        }

        // checkInDate ve checkOutDate arasındaki tarihleri bir diziye ekleyin
        const datesInRange = [];

        let currentDate = new Date(checkInDate);

        while (currentDate <= checkOutDate) {
          datesInRange.push(currentDate.toISOString().slice(0, 10));
          currentDate.setDate(currentDate.getDate() + 1);
        }

        // Tarihlerin her birini this.disableReservation içinde kontrol edin
        for (const dateInRange of datesInRange) {
          if (disableReservation.includes(dateInRange)) {
            return false;
          }
        }

        return true;
      }

      const checkInParam = this.decodeTimestamp(query.i);
      const checkOutParam = this.decodeTimestamp(query.o);


      this.checkIn = checkInParam;
      this.checkOut = checkOutParam;
      this.datePickerProps.startingDateValue = new Date(checkInParam);
      this.datePickerProps.endingDateValue = new Date(checkOutParam);

      this.availabilityCheck();

      /*
      // Eğer tarih aralığı uygunsa checkIn ve checkOut değişkenlerini güncelle
      if (isDateRangeValid(checkInParam, checkOutParam, this.disableReservation)) {
        this.checkIn = checkInParam;
        this.checkOut = checkOutParam;
        this.datePickerProps.startingDateValue = new Date(checkInParam);
        this.datePickerProps.endingDateValue = new Date(checkOutParam);


      } else {
        console.log(this.disableReservation);
        this.checkIn = null;
        this.checkOut = null;
        this.datePickerProps.startingDateValue = null;
        this.datePickerProps.endingDateValue = null;
      }*/
    }
  },
  computed: {
    dateSelected() {
      return this.checkIn && this.checkOut
    }
  },
  watch: {
    checkIn(newValue) {
      this.changeHotelInput(0, newValue);
    },
    checkOut(newValue) {
      this.changeHotelInput(-1, newValue);
    },
    mobileReservation() {
      if (this.mobileReservation == true) {
        setTimeout(() => {
          document.querySelector('.Header').classList.add('Header-z')
          document.querySelector('body').classList.add('over')
          document.querySelector('html').classList.add('over')
          document.querySelector(".Whatsapp").classList.add('Whatsapp-z')
        }, 50)

      } else {
        setTimeout(() => {
          document.querySelector('.Header').classList.remove('Header-z')
          document.querySelector('body').classList.remove('over')
          document.querySelector('html').classList.remove('over')
          document.querySelector('body').style.overflow = "auto"
          document.querySelector(".Whatsapp").classList.remove('Whatsapp-z')
        }, 50)
      }
    }
  },
  methods: {
    ...mapMutations(['setReservationModalData']),
    encodeTimestamp(dateString) {
      const date = new Date(dateString);
      return date.getTime();
    },
    decodeTimestamp(timestamp) {
      timestamp = parseInt(timestamp)
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    async availabilityCheck() {
      if (!this.dateSelected || this.availabilityLoading) {
        // this.$refs.datePicker.showDatepicker();
        this.$toast.error("<p>Lütfen tarih seçiniz</p>", {
          className: 'custom-toast error-toast',
          icon: {
            name: 'icon-reservation-cancel',
          },
          action: {
            icon: 'icon-toast-exit',
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        })
        return
      }

      this.availabilityLoading = true;

      const data = {
        propertyCode: this.propertyCode,
        startDate: this.formatDateDMY(this.checkIn),
        endDate: this.formatDateDMY(this.checkOut),
      }

      const response = await this.$axios.post(`/website/check_availability?api_token=${process.env.WEBSITE_TOKEN}`, data)
      this.availabilityData = response.data.data;

      console.log(this.availabilityData)

      this.availabilityLoading = false;

      this.availabilityChecked = true;
      setTimeout(() => {
        document.querySelector('.Reservation-form').classList.add("show")
      }, 50)

    },
    preReservation() {

      if (this.adult === 0) {

        this.$toast.error("<p>Lütfen kişi sayısı seçiniz</p>", {
          className: 'custom-toast error-toast',
          icon: {
            name: 'icon-reservation-cancel',
          },
          action: {
            icon: 'icon-toast-exit',
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        })

        return
      }

      this.setReservationModalData({
        propertyCode: this.propertyCode,
        startDate: this.checkIn,
        endDate: this.checkOut,
        source_id: process.env.SOURCE_ID,
        adult: this.adult,
        child: this.child,
        baby: 0,
        memberID: null,
        prephone: null,
        phone: null,
        name: null,
        email: null,
        availabilityData: this.availabilityData,
        villa: this.villa
      });
      this.$bvModal.show('reservationModal')
    },
    reservationButton(event) {

      event.target.textContent = "Ön Rezervasyon Talebi Gönder";
    },
    clearDatesRez() {
      this.$refs.datePicker.clearSelection();
    },
    hidePickerRez() {
      this.$refs.datePicker.hideDatepicker();
    },
    checkInChanged(value) {
      const val = this.formatDate(value);
      if (val) {
        this.checkIn = this.formatDate(value);
      }
      setTimeout(() => {
        document.querySelector('.tarihsec').classList.add("tarihsec-active")
      }, 50)
    },
    checkOutChanged(value) {
      const val = this.formatDate(value);
      if (val) {
        this.checkOut = this.formatDate(value);
        this.availabilityCheck();

        setTimeout(() => {
          if (this.checkIn && this.checkOut) {
            // this.closeCalendar()
          }
        }, 50)
      }
    },
    changeHotelInput(tabIndex, value) {
      const currentDate = new Date(value);
      const formattedDate = currentDate.toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
      }).toUpperCase();

      const formattedDateS = currentDate.toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'short',
      }).toUpperCase();

      const formattedDay = currentDate.toLocaleDateString('tr-TR', {
        weekday: 'long',
      }).toUpperCase();

      if (tabIndex == 0) {
        this.formattedCheckIn = formattedDateS
      } else {
        this.formattedCheckOut = formattedDateS
      }

      const datepickerInput = $('[data-qa="datepickerInput"][tabindex="' + tabIndex + '"]');

      datepickerInput.html(`<div class="formatted-date">${formattedDate}<span class="formatted-date-sm">${formattedDay}</span></div>`);
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
    formatDateDMY(value) {
      if (value) {
        const date = new Date(value);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${month}/${day}/${year}`;
      }
    },
    checkMaxPerson() {
      const max = this.adult + this.child === this.villa.max_adult
      if (max) {
        this.$toast.error("<p>Bu villada en fazla " + this.villa.max_adult + " kişi kalabilir</p>", {
          className: 'custom-toast error-toast',
          icon: {
            name: 'icon-reservation-cancel',
          },
          action: {
            icon: 'icon-toast-exit',
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        })
      }
      return max
    },
    adultIncrease() {
      if (!this.checkMaxPerson()) {
        this.adult += 1;
      }
    },
    adultDecrease() {
      if (this.adult > 1) {
        this.adult -= 1;
      }
    },
    children_Increase() {
      if (!this.checkMaxPerson()) {
        this.child += 1;
      }
    },
    children_Decrease() {
      if (this.child > 0) {
        this.child -= 1;
      }
    },
    baby_Increase() {
      const max = this.baby === this.villa.max_baby
      if (max) {
        this.$toast.error("<p>Bu villada en fazla " + this.villa.max_adult + " bebek kalabilir</p>", {
          className: 'custom-toast error-toast',
          icon: {
            name: 'icon-reservation-cancel',
          },
          action: {
            icon: 'icon-toast-exit',
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        })
      } else {
        this.baby += 1;
      }
    },
    baby_Decrease() {
      if (this.baby > 0) {
        this.baby -= 1;
      }
    },
    handleResize() {
      if (window.innerWidth <= 768) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },

    reservatinAction() {
      this.mobileReservation = !this.mobileReservation

    },
  },
  mounted() {
    window.addEventListener("load", this.handleResize);
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    this.mobileReservation == false
  },
}
</script>

<style scoped>
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
:deep() .datepicker__month-day--last-day-selected span{
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

</style>
