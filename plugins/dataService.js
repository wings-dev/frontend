export default ({$axios, $config}, inject) => {
  const serverAddr = (process.server ? 'http://localhost:3000' : '') + '/data/';

  const dataService = {

    getHotelDetail: async (hotel_id) => {
      return await $axios.post(serverAddr + 'hotel/detail/' + hotel_id, {})
    },

    getHotelPrice: async (hotel_id, data) => {
      return await $axios.post(serverAddr + 'hotel/price/' + hotel_id, data)
    }

  }

  inject('dataService', dataService)
}
