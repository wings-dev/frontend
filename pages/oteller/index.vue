<template>
  <div>
    <dynamic-hotel-filter-page :selectedFilters="selectedFilters"></dynamic-hotel-filter-page>
  </div>
</template>

<script>
import DynamicHotelFilterPage from "@/components/dynamic-page/hotel-filter.vue";


export default {
  name: 'HotelListPage',
  layout:'no-search',
  head() {
    let site_id = process.env.SITE
    return {
      title: 'Oteller'
    }
  },
  data() {
    return {
      selectedFilters: {}
    }
  },
  components: {
    DynamicHotelFilterPage
  },
  beforeMount() {
    this.parseQueryString();
  },
  mounted() {
  },
  methods: {
    parseQueryString() {
      const query = this.$route.query;

      this.selectedFilters = {
        destinations: query.destinations,
        adult: query.adult || 0,
        childAges: query.childAges || [],
        checkIn: query.checkIn || null,
        checkOut: query.checkOut || null,
      };
    }
  },
}
</script>
