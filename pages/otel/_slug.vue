<template>
  <div>
    <dynamic-hotel-detail-page :hotel="hotel" :requestId="requestId"></dynamic-hotel-detail-page>
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
      hotel: {},
      requestId: null,
    }
  },
  async asyncData({route, $axios}) {
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

    const response = await $axios.post((process.server ? 'http://localhost:3000' : '') + '/data/hotel/' + hotel_id, {});
    const hotel = response.data.body.hotel;
    const requestId = response.data.header.requestId;

    console.log(response.data);
    return {hotel, requestId}
  },
}
</script>
