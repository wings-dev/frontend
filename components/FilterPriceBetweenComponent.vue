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
            <input type="number" class="js-maxFiyat" name="max" placeholder="Max"
                   value="">
            <span class="text-theme-secondary">₺</span>
          </label>
        </div>
        <div class="Filters-range-inputs-bar">
          <input type="text" class="js-range-slider" name="my_range" value="" data-min="0"
                 data-max="9000" data-prefix="₺" data-step="50" v-model="max_price" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterPriceBetweenComponent",
  data() {
    return {
      min_price: null,
      max_price: null
    }
  }
}
</script>

<style scoped>

</style>
