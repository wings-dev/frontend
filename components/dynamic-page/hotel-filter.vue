<template>
  <div>
    <filter-hotel-component :selectedFilters="selectedFilters"></filter-hotel-component>
  </div>
</template>

<script>

export default {
  name: 'DynamicHotelFilterPage',
  props: {
    selectedFilters: {type: Object, default: {}},
  },
  data() {
    return {}
  }
}
</script>

