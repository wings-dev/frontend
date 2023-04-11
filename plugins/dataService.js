export default ({app, $axios, $config}, inject) => {
  const serverAddr = (process.server ? 'http://localhost:' + process.env.NODE_PORT : '') + '/data/';

  const dataService = {

    getHotelDetail: async (hotel_id) => {
      return await $axios.post(serverAddr + 'hotel/detail/' + hotel_id, {})
    },

    getHotelPrice: async (hotel_id, data) => {
      return await $axios.post(serverAddr + 'hotel/price/' + hotel_id, data)
    },

    getOfferDetails: async (data) => {
      return await $axios.post(serverAddr + 'hotel/getOfferDetails', data)
    },

    getOffers: async (data) => {
      return await $axios.post(serverAddr + 'hotel/getOffers', data)
    },

    getRooms: async (data) => {
      return await $axios.post(serverAddr + 'hotel/getRooms', data)
    }

  }

  app.dataService = dataService
  inject('dataService', dataService)
}
