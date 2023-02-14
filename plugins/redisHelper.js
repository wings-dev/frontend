export default ({ $axios, $config }, inject) => {
  const getRedisKey = async (key) => {
    try {
      const response = await $axios.post(`http://localhost:3000/redis`, { key })
      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  inject('getRedisKey', getRedisKey)
}
