<template>
  <div class="Filters">
    <div class="Filters-head border-bottom" @click="checkboxOpen(groupName)">
      <i class="icon-wallet"></i>
      <h5>FİYAT ARALIĞI</h5>
    </div>
    <div class="Filters-in" :ref="groupName">
      <div class="Filters-in-mobile">
        <button type="button" @click="checkboxClose(groupName)"><i class="icon-left-arrow"></i></button>
        <div class="Filters-head" ><h5>FİYAT ARALIĞI</h5></div>
      </div>
      <div class="Filters-range">
        <div class="Filters-range-inputs">
          <label for="">
            <small class="">Min</small>
            <input style="color: black" type="number" readonly class="js-minFiyat" name="min" placeholder="Min" v-model="min_price" @change="emitPrices">
            <span>{{this.currency}}</span>
          </label>
          <label for="">
            <small class="fw-medium text-theme-secondary d-block w-100">Max</small>
            <input style="color: black" readonly type="number" class="js-maxFiyat" name="max" placeholder="Max" value="" v-model="max_price" @change="emitPrices">
            <span class="text-theme-secondary">{{this.currency}}</span>
          </label>
        </div>
        <div class="mt-3 px-3">
          <vue-slider v-model="value" @change="onChange" :lazy="true" :tooltip-formatter="formatter" :min="min" :max="max" :interval="1000" />
        </div>
      </div>
      <button type="button" @click="checkboxClose(groupName)" class="Filters-in-m-button">TAMAM</button>
    </div>
  </div>
</template>

<script>

import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/default.css'
export default {
  name: "FilterPriceBetweenComponent",
  props: {
    groupName: {type: String},
    min: { required: true, type: Number },
    max: { required: true, type: Number },
    currency: { required: true, type: String },
  },
  data() {
    return {
      min_price: this.min,
      max_price: this.max,
      value: [this.min, this.max],
      formatter: this.currency + '{value}',
    }
  },
  components: {
    VueSlider,
  },
  methods: {
    onChange(value) {
      this.min_price = value[0]
      this.max_price = value[1]
      this.emitPrices()
    },
    emitPrices() {
      this.$emit('min_price', parseInt(this.min_price, 10));
      this.$emit('max_price', parseInt(this.max_price, 10));
    },
    isMobile() {
      return window.innerWidth <= 991;
    },
    checkboxOpen(groupName){
      const targetDiv = this.$refs[groupName];
      targetDiv.classList.add('show')
    },
    checkboxClose(groupName){
      const targetDivClose = this.$refs[groupName];
      targetDivClose.classList.remove('show')
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

@media (max-width:575px) {
  :deep() .vue-slider-dot{
    width: 18px!important;
    height: 18px!important;
  }
}

</style>
