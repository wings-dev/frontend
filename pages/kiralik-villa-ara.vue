<template>
  <div>
    <dynamic-villa-filter-page :selectedFilters="selectedFilters" :highlights=false></dynamic-villa-filter-page>
  </div>
</template>

<script>
import DynamicVillaFilterPage from "@/components/dynamic-page/villa-filter.vue";


export default {
  name: 'KiralikVillaListPage',
  head() {
    let site_id = process.env.SITE
    return {
      title: 'Listele',
      meta: [
        {hid: 'description', name: 'description', content: 'listele'},
        {hid: 'keywords', name: 'keywords', content: 'listele1, listele2, listele3'}
      ],
    }
  },
  data() {
    return {
      selectedFilters: {}
    }
  },
  components: {
    DynamicVillaFilterPage
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
