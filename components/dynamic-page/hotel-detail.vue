<template>
  <div>
    <section class="view-detail-section">
      <div class="view-detail-section-menus">
        <div class="detail-top bg-theme-first-dark" id="detailTop">
          <div class="container">
            <div class="view-top d-flex">

              <div class="view-top-title">
                <h1><span>Otel</span>{{ hotel.name }}</h1>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import {Swiper, Navigation, Pagination} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import HotelDatePicker from "vue-hotel-datepicker2";
import "vue-hotel-datepicker2/dist/vueHotelDatepicker2.css";
import CloseVillaModal from '../modals/close-villa-modal.vue';

export default {
  name: 'DynamicDetailPage',
  props: ['hotel'],
  data() {
    return {}
  }
}
</script>
