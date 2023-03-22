<template>
  <div>
    <dynamic-hotel-detail-page :hotelDetails="hotelDetails" :hotelPriceDetails="hotelPriceDetails"></dynamic-hotel-detail-page>
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
    }
  },
  async asyncData({route, $axios, $dataService}) {
    const path = route.params.slug;
    const split = path.split('-');
    const hotel_id = split[split.length - 1];


    /*const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const todayString = `${year}-${month}-${day}`;

    const data = {
      id: hotel_id,
      checkIn: todayString,
      adult: 2,
      baby: 0
    };

    let response = await $axios.post((process.server ? 'http://localhost:3000' : '') + `/data/hotels`, data)
    const hotel = response.data;*/

    let response = await $dataService.getHotelDetail(hotel_id);
    const hotelDetails = response.data;

    response = await $dataService.getHotelPrice(hotel_id, {
      adult: 2,
      checkIn: '2023-04-01',
    })
    const hotelPriceDetails = response.data;

    return {hotelDetails, hotelPriceDetails}
  },
}
</script>
