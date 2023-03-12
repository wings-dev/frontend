export default ({ $axios, $config }, inject) => {
  const getRedisKey = async (key) => {
    console.log('redis key aliniyor => ' + key);

    // Başlangıç zamanı
    const startTime = new Date().getTime();

    try {
      console.log(process.server ?`http://localhost:3000/data` : '/data');
      const response = await $axios.post(process.server ?`http://localhost:3000/data` : '/data', { key });

      // Bitiş zamanı
      const endTime = new Date().getTime();

      // İşlem süresi hesaplama
      const duration = endTime - startTime;
      console.log(`İşlem ${duration} milisaniye sürdü.`);

      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  inject('getRedisKey', getRedisKey)
}
