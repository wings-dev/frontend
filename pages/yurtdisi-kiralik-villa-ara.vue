<template>
  <div>
    <dynamic-abroad-villa-filter-page :selectedFilters="selectedFilters"></dynamic-abroad-villa-filter-page>
  </div>
</template>

<script>
import DynamicAbroadVillaFilterPage from "@/components/dynamic-page/abroad-villa-filter.vue";


export default {
  name: 'AbroadVillaListPage',
  head() {
    let site_id = process.env.SITE
    return {
      title: 'Yurtdışı Kiralık Villa Ara'
    }
  },
  data() {
    return {
      selectedFilters: {}
    }
  },
  components: {
    DynamicAbroadVillaFilterPage
  },
  beforeMount() {
    this.parseQueryString();
  },
  mounted() {
  },
  methods: {
    parseQueryString() {
      const query = this.$route.query;
      const destinations = query.destinations
        ? (Array.isArray(query.destinations)
          ? query.destinations.map(value => ({code: value, selected: true}))
          : [{code: query.destinations, selected: true}])
        : [];
      const facilityTypes = query.facilityTypes
        ? (Array.isArray(query.facilityTypes)
          ? query.facilityTypes.map(value => ({code: value, selected: true}))
          : [{code: query.facilityTypes, selected: true}])
        : [];
      const facilityConcepts = query.facilityConcepts
        ? (Array.isArray(query.facilityConcepts)
          ? query.facilityConcepts.map(value => ({code: value, selected: true}))
          : [{code: query.facilityConcepts, selected: true}])
        : [];
      const amenites = {
        facilityTypes: facilityTypes,
        facilityConcepts: facilityConcepts
      };
      this.selectedFilters = {
        destinations: destinations,
        amenites: amenites,
        adult: query.adult || 0,
        children: query.children || 0,
        baby: query.baby || 0,
        checkIn: query.checkIn || null,
        checkOut: query.checkOut || null,
      };
    }
  },
}
</script>
