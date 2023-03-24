<template>
  <div>
    <dynamic-hotel-detail-page :hotelDetails="hotelDetails" :hotelPriceDetails="hotelPriceDetails" :selectedFilters="selectedFilters"></dynamic-hotel-detail-page>
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
      selectedFilters: {}
    }
  },
  async asyncData({route, $axios, $dataService}) {
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

    response = await $dataService.getHotelPrice(hotel_id, selectedFilters)
    const hotelPriceDetails = response.data;
    if (hotelPriceDetails.body?.hotels[0]?.offers.length > 0) {
      const offerIds = hotelPriceDetails.body?.hotels[0]?.offers.map(offer => offer.offerId)
      console.log(offerIds)
      let response = await $dataService.getOfferDetails({offerIds});
      const offerDetails = response.data;
      console.log(JSON.stringify(offerDetails))
    }

    return {hotelDetails, hotelPriceDetails, selectedFilters}
  },
}
</script>
