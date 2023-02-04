<template>
  <div class="Filters">
    <div class="Filters-head border-bottom">
      <i class="icon-wallet"></i>
      <h5>FİYAT ARALIĞI</h5>
    </div>
    <div class="Filters-in">
      <div class="Filters-range">
        <div class="Filters-range-inputs">
          <label for="">
            <small class="">Min</small>
            <input type="number" class="js-minFiyat" name="min" placeholder="Min" v-model="min_price">
            <span>₺</span>
          </label>
          <label for="">
            <small class="fw-medium text-theme-secondary d-block w-100">Max</small>
            <input type="number" class="js-maxFiyat" name="max" placeholder="Max" value="" v-model="max_price">
            <span class="text-theme-secondary">₺</span>
          </label>
        </div>
        <div class="mt-3 px-3">
          <vue-slider v-model="value" @change="onChange" :tooltip-formatter="formatter" :min="500" :max="5000" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/default.css'
export default {
  name: "FilterPriceBetweenComponent",
  data() {
    return {
      min_price: null,
      max_price: null,
      value: [500, 2000],
      formatter: '₺{value}',
    }
  },
  components: {
    VueSlider,
  },
  methods: {
    onChange(value) {
      this.min_price = value[0]
      this.max_price = value[1]
    }
  }

}
</script>

<style scoped>

:deep() .vue-slider-process{
  background-color: var(--bs-theme-second);
}
:deep() .vue-slider-dot-tooltip-inner{
  background-color: var(--bs-theme-second);
  border-color: var(--bs-theme-second);
}
</style>
