<template>
  <form action="" class="Reservation-form" id="reservationForm">
    <div class="Reservation-form-top">
      <h4 class="Reservation-form-title">Rezervasyon Yap</h4>
      <span class="tarihsec">TARİH SEÇ</span>
      <div class="Reservation-form-in">
        <div class="Reservation-form-item w-100">
          <HotelDatePicker :disabled="true" @check-in-changed="checkInChanged($event)"
            @check-out-changed="checkOutChanged($event)" format="DD-MM-YYYY" :positionRight="true"
            :disabledDates="disableReservation" ref="datePicker" :i18n="calendarLanguage"
            :firstDayOfWeek="firstDayOfWeek">
            <div slot="content">
              <div class="d-flex align-items-center justify-content-end mt-1">
                <button @click.prevent="clearDatesRez()" class="me-1">Temizle</button>
                <button @click.prevent="hidePickerRez()">Kapat</button>
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
                  <span class="child-people">{{ child }}</span> Çocuk
                </p>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <div class="select-item d-flex align-items-center justify-content-between lh-sm mb-3 pb-1">
                  <div class="d-flex flex-column">
                    <strong class="fw-medium fs-6">Yetişkinler</strong>
                    <span class="text-theme-secondary text-opacity-75">13 yaş ve üzeri</span>
                  </div>
                  <div class="d-flex align-items-center text-center">
                    <button type="button" @click="adultDecrease"
                      class="select-btn minus bg-transparent d-flex align-items-center justify-content-center rounded-circle">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3984 9H6.59844" stroke="#1C274C" stroke-linecap="round" />
                        <path
                          d="M5 2.07026C6.17669 1.38958 7.54285 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 7.54285 1.38958 6.17669 2.07026 5"
                          stroke="#1C274C" stroke-linecap="round" />
                      </svg>

                    </button>
                    <input v-model="adult" type="text" name="yetiskinler" class="select-input text-center fs-5 px-2"
                      data-min="1" data-max="10" data-text="Yetişkin, " readonly>
                    <button type="button" @click="adultIncrease"
                      class="select-btn plus bg-transparent d-flex align-items-center justify-content-center rounded-circle">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div class="select-item d-flex align-items-center justify-content-between lh-sm">
                  <div class="d-flex flex-column">
                    <strong class="fw-medium fs-6">Çocuklar</strong>
                    <span class="text-theme-secondary text-opacity-75">2-12 yaş</span>
                  </div>
                  <div class="d-flex align-items-center text-center">
                    <button type="button" @click="children_Decrease"
                      class="select-btn minus bg-transparent d-flex align-items-center justify-content-center rounded-circle">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3984 9H6.59844" stroke="#1C274C" stroke-linecap="round" />
                        <path
                          d="M5 2.07026C6.17669 1.38958 7.54285 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 7.54285 1.38958 6.17669 2.07026 5"
                          stroke="#1C274C" stroke-linecap="round" />
                      </svg>

                    </button>
                    <input v-model="child" type="text" name="cocuklar" class="select-input text-center fs-5 px-2"
                      data-min="0" data-max="10" data-text="Çocuk" readonly>
                    <button type="button" @click="children_Increase"
                      class="select-btn plus bg-transparent d-flex align-items-center justify-content-center rounded-circle">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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


              </ul>
            </div>

          </label>
        </div>
      </div>
      <div class="Reservation-form-info">
        <div class="Reservation-form-info-item">
          <div class="Reservation-form-info-item-in">
            <div class="Reservation-form-info-item-left">
              <h5>Şimdi Ödenecek Tutar</h5>
              <p>5500 TL %20 Ödeme Kalan Tutar Tesise Girişte Ödenecektir 22.000 TL</p>
            </div>
            <div class="Reservation-form-info-item-right">
              <b>5.500 TL</b>
            </div>
          </div>

        </div>
        <div class="Reservation-form-info-item">
          <div class="Reservation-form-info-item-in">
            <div class="Reservation-form-info-item-left">
              <h5>Toplam Tutar</h5>
              <p><span class="day">5</span> gece için konaklama ve temizlik giderleri dahil toplam fiyat</p>
            </div>
            <div class="Reservation-form-info-item-right">
              <b>27.500 TL</b>
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
                <h6>Rezervasyon Detayları</h6>

                <div class="Reservation-form-info-item-more-item">
                  <div class="Reservation-form-info-item-more-item-left">
                    <p>5 Gece Konaklama Tutarı</p>
                  </div>
                  <b>27.000₺</b>
                </div>
                <div class="Reservation-form-info-item-more-item">
                  <div class="Reservation-form-info-item-more-item-left">
                    <p>Temizlik Ücreti</p>
                    <i class="icon-information" data-bs-toggle="tooltip" data-bs-placement="right"
                      title="Tooltip on right"></i>
                  </div>
                  <b>500₺</b>
                </div>
                <div class="Reservation-form-info-item-more-item">
                  <div class="Reservation-form-info-item-more-item-left">
                    <p>Toplam Tutar</p>
                    <i class="icon-information" data-bs-toggle="tooltip" data-bs-placement="right"
                      title="Tooltip on right"></i>
                  </div>
                  <b>27.500₺</b>
                </div>

                <div class="Reservation-form-info-item-more-item">
                  <div class="Reservation-form-info-item-more-item-left">
                    <p>Girişte Ödenecek</p>
                  </div>
                  <b>22.000₺</b>
                </div>
                <div class="Reservation-form-info-item-more-item">
                  <div class="Reservation-form-info-item-more-item-left">
                    <p>Şimdi Ödenecek</p>
                  </div>
                  <b>5.500₺</b>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <button v-if="!availabilityChecked" :disabled="!dateSelected" class="Reservation-form-submit"
      @click.prevent="availabilityCheck()">
      Müsaitlik Sorgula
    </button>
    <button v-else :disabled="!dateSelected" class="Reservation-form-submit" @click.prevent="preReservation()">
      Ön Rezervasyon Talebi Gönder
    </button>
  </form>
</template>

<script>
import HotelDatePicker from "vue-hotel-datepicker2";
import "vue-hotel-datepicker2/dist/vueHotelDatepicker2.css";
import { mapMutations } from "vuex";
export default {
  name: "ReservationForm",
  props: ['propertyCode', 'disableReservation'],
  components: {
    HotelDatePicker,
  },
  data() {
    return {
      checkIn: null,
      checkOut: null,
      adult: 1,
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
      firstDayOfWeek: 1,
    }
  },
  computed: {
    dateSelected() {
      return this.checkIn && this.checkOut
    }
  },
  methods: {
    ...mapMutations(['setReservationModalData']),
    availabilityCheck() {
      this.availabilityChecked = true;
      document.querySelector('.Reservation-form').classList.add("show")
      document.querySelector('.tarihsec').classList.add("tarihsec-active")
    },
    preReservation() {
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
      });

      $('#reservationModal').modal('show')
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
      if (this.child < 10) {
        this.child += 1;
      }
    },
    children_Decrease() {
      if (this.child > 0) {
        this.child -= 1;
      }
    }
  }
}
</script>

<style>
html,
body {
  scroll-padding-top: 160px;
}

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

.vc-header {
  padding: 10px 18px !important;
  background-color: #F2F5FB;
}

.vc-day {
  min-width: 48px !important;
  min-height: 48px !important;
}

.vc-pane-layout {
  gap: 20px;
}

.vc-weekday {
  margin-bottom: 15px !important;
}

.kapali {
  background-color: #F2F5FB;
  position: relative;
}


.opsiyon {
  background-color: #FFF8E7;
  position: relative;
}

.kapali.giris {
  background-color: transparent;
  z-index: 1;
}

.kapali.giris:before {
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

/* .kapali.opsiyon.giris:before {
  background-image: linear-gradient(315deg, #FFF8E7 49%, transparent 50%);
} */

.kapali.cikis {
  background-color: transparent;
  z-index: 1;
}

.kapali.cikis:before {
  content: "";
  display: inline-block;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(135deg, #f3f3ff 49%, transparent 50%);
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}

.opsiyon.cikis {
  background-color: transparent;
}

.opsiyon.cikis:before {
  content: "";
  display: inline-block;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(135deg, #FFF8E7 49%, transparent 50%);
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

.opsiyon:after {
  background-image: linear-gradient(135deg, #FFF8E7 49%, transparent 50%);
}

.kapali:after {
  background-image: linear-gradient(135deg, #f3f3ff 49%, transparent 50%);
}



/* .kapali.opsiyon.cikis:before {
  background-image: linear-gradient(135deg, #FFF8E7 49%, transparent 50%);
} */

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

.vc-day {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.day-label {
  margin-top: 5px;
}

.datepicker__dummy-wrapper {
  background: none;
  border: none;
  flex-wrap: nowrap;
}

.datepicker__input {
  width: 50%;
  font-size: 14px;
  font-weight: 500;
  color: #24252e;
  position: relative;
}

.datepicker__input--first {
  padding-left: 5px;
  margin-right: 16px;
}
.datepicker__input--first:after{
  font-size: 14px;
  position: absolute;
  right: -20px;
  color: #c1c1c1;
}
.datepicker__input:before {
  content: "";
  display: inline-block;
  background-image: url(/img/date-new.svg);
  width: 24px;
  height: 24px;
  background-size: 100% 100%;
  margin-right: 10px;
  flex-shrink: 0;
}</style>
