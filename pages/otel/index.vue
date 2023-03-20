<template>
  <div>
    <dynamic-hotel-filter-page :selectedFilters="selectedFilters"></dynamic-hotel-filter-page>
  </div>
</template>

<script>
import DynamicHotelFilterPage from "@/components/dynamic-page/hotel-filter.vue";


export default {
  name: 'ListPage',
  head() {
    let site_id = process.env.SITE
    return {
      title: 'Listele',
      meta: [
        {hid: 'description', name: 'description', content: 'listele'},
        {hid: 'keywords', name: 'keywords', content: 'listele1, listele2, listele3'}
      ],
      link: [
        {rel: 'stylesheet', href: `/css/listeleme.min.css`}
      ]
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
        id: query.id,
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
