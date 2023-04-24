<template>
  <div>
    <dynamic-hotel-detail-page :hotelDetails="hotelDetails" :hotelPriceDetails="hotelPriceDetails" :selectedFilters="selectedFilters" :comments="comments"></dynamic-hotel-detail-page>
  </div>
</template>

<script>
import DynamicHotelDetailPage from "@/components/dynamic-page/hotel-detail.vue";
export default {
  name: 'DynamicPage',
  components: {DynamicHotelDetailPage},
  layout: "no-search",
  head() {
    return this.headData
  },
  data() {
    return {
      type: null,
      headData: {},
      hotelDetails: null,
      hotelPriceDetails: null,
      selectedFilters: {},
      comments: null
    }
  },
  async asyncData({route, $axios, $dataService, $getRedisKey}) {
    const path = route.params.slug;
    const split = path.split('-');
    const hotel_id = split[split.length - 1];

    const query = route.query;

    const selectedFilters = {
      adult: query.adult || 1,
      childAges: query.childAges || [],
      checkIn: query.checkIn || new Date(),
      checkOut: query.checkOut || new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    }

    let response = await $dataService.getHotelDetail(hotel_id);
    const hotelDetails = response.data;

    const comments = await $getRedisKey(`data:otels:${hotel_id}:comments`)

    return {hotelDetails, selectedFilters, comments}
  },
}
</script>
