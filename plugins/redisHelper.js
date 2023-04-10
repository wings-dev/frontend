export default ({ $axios, $config }, inject) => {
  const getRedisKey = async (key) => {
    // Başlangıç zamanı
    const startTime = new Date().getTime();

    try {
      const response = await $axios.post(process.server ?`http://localhost:${process.env.PORT}/data` : '/data', { key });

      // Bitiş zamanı
      const endTime = new Date().getTime();

      // İşlem süresi hesaplama
      const duration = endTime - startTime;

      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  inject('getRedisKey', getRedisKey)
}
