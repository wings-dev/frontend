<template>
  <section class="Search-villas">
    <div class="container">
      <div class="Search-villas-in">
        <h3 class="Search-villas-title">Akıllı Arama</h3>

        <ul class="nav nav-pills mb-3 d-none" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                    type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
                    type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div class="Search-villas-top">

              <label for="">
                <i class="icon-search"></i>
                <input v-model="input" type="text" placeholder="Aramak istediğiniz villa adı  veya kodu">
              </label>
              <p>Daha önce gördüğünüz veya konakladığınız villanın adını yazın akıllı arama sizin için bulup getirsin
              </p>
            </div>
            <div class="Search-villas-content">
              <h4 class="Search-villas-content-title">Arama Sonuçları</h4>
              <div class="Search-villas-content-list">

                <a href="" class="Search-villas-item" v-for="villa in villas">
                  <div class="Search-villas-item-img">
                    <img src="/uploads/villa-image1.jpg" alt="">
                    <div class="Search-villas-item-hover">
                      <i class="icon-search"></i>
                    </div>
                  </div>
                  <div class="Search-villas-item-in">
                    <div class="Search-villas-item-text">
                      <p><span>Tesis Kodu</span>{{ villa.code }}</p>
                      <div class="Search-villas-item-rating">
                        <i class="icon-star"></i>
                        <span>4.9</span>
                      </div>
                    </div>
                    <div class="Search-villas-item-location">
                      <i class="icon-pin"></i>
                      <p>KALKAN <span>Turkey / Antalya</span></p>
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "live-villa-search",
  data() {
    return {
      input: '',
      villas: [],
      cancelToken: null,
    }
  },
  watch: {
    input: function (newVal, oldVal) {
      if (this.cancelToken) {
        this.cancelToken.cancel()
      }
      this.cancelToken = this.$axios.CancelToken.source()

      this.fetchVillas(newVal)
    },
  },
  methods: {
    async fetchVillas(keyword) {
      try {
        const response = await this.$axios.post(
          '/data/villa-search',
          {keyword: keyword},
          {cancelToken: this.cancelToken.token}
        )
        this.villas = response.data
      } catch (error) {
        console.error(error)
      }
    },
  }
}
</script>

<style scoped>

</style>
