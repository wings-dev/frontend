<template>
      <b-modal id="amenitesModal" class="Login" size="xl" :hide-header="true" hide-footer>
      <div class="Amenites">
        <div class="Amenites-head">
          <div class="Amenites-head-in">
            <h3 class="Amenites-title">Tesis <b>olanakları</b></h3>
            <div class="Amenites-head-link">
              <p>Tesis kategorisi</p>
              <a href="javascript:void(0)" @click.prevent="goFacilityConceptsFilter(175)">Deniz Manzaralı</a>
                <a href="javascript:void(0)" @click.prevent="goFacilityConceptsFilter(175)">Muhafazakar Villa</a>
            </div>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
            @click="$bvModal.hide('amenitesModal')">Kapat<i class="icon-search-close"></i></button>
        </div>
        <div class="Amenites-in">
          <div class="Amenites-item">
            <!-- <span class="Amenites-item-title">Bahçe Alanı</span> -->
            <div class="Amenites-item-in">
              <p v-for="(item,index) in amenitelist" :key="index" >{{item}}</p>
            </div>
          </div>
          <!-- <div class="Amenites-item">
            <span class="Amenites-item-title">Bahçe Alanı</span>
            <div class="Amenites-item-in">
              <p>Jakuzi</p>
              <p>Jakuzi</p>
              <p>Bilardo Masası</p>
              <p>Barbekü / Mangal Alanı</p>
              <p>Barbekü / Mangal Alanı</p>
            </div>
          </div>
          <div class="Amenites-item">
            <span class="Amenites-item-title">Bahçe Alanı</span>
            <div class="Amenites-item-in">
              <p>Jakuzi</p>
              <p>Jakuzi</p>
              <p>Bilardo Masası</p>
              <p>Barbekü / Mangal Alanı</p>
              <p>Barbekü / Mangal Alanı</p>
            </div>
          </div>
          <div class="Amenites-item">
            <span class="Amenites-item-title">Bahçe Alanı</span>
            <div class="Amenites-item-in">
              <p>Jakuzi</p>
              <p>Jakuzi</p>
              <p>Bilardo Masası</p>
              <p>Barbekü / Mangal Alanı</p>
              <p>Barbekü / Mangal Alanı</p>
            </div>
          </div>
          <div class="Amenites-item">
            <span class="Amenites-item-title">Bahçe Alanı</span>
            <div class="Amenites-item-in">
              <p>Jakuzi</p>
              <p>Jakuzi</p>
              <p>Bilardo Masası</p>
              <p>Barbekü / Mangal Alanı</p>
              <p>Barbekü / Mangal Alanı</p>
            </div>
          </div>
          <div class="Amenites-item">
            <span class="Amenites-item-title">Bahçe Alanı</span>
            <div class="Amenites-item-in">
              <p>Jakuzi</p>
              <p>Jakuzi</p>
              <p>Bilardo Masası</p>
              <p>Barbekü / Mangal Alanı</p>
              <p>Barbekü / Mangal Alanı</p>
            </div>
          </div>
          <div class="Amenites-item">
            <span class="Amenites-item-title">Bahçe Alanı</span>
            <div class="Amenites-item-in">
              <p>Jakuzi</p>
              <p>Jakuzi</p>
              <p>Bilardo Masası</p>
              <p>Barbekü / Mangal Alanı</p>
              <p>Barbekü / Mangal Alanı</p>
            </div>
          </div>
          <div class="Amenites-item">
            <span class="Amenites-item-title">Bahçe Alanı</span>
            <div class="Amenites-item-in">
              <p>Jakuzi</p>
              <p>Jakuzi</p>
              <p>Bilardo Masası</p>
              <p>Barbekü / Mangal Alanı</p>
              <p>Barbekü / Mangal Alanı</p>
            </div>
          </div>
          <div class="Amenites-item">
            <span class="Amenites-item-title">Bahçe Alanı</span>
            <div class="Amenites-item-in">
              <p>Jakuzi</p>
              <p>Jakuzi</p>
              <p>Bilardo Masası</p>
              <p>Barbekü / Mangal Alanı</p>
              <p>Barbekü / Mangal Alanı</p>
            </div>
          </div> -->

        </div>
      </div>
    </b-modal>
</template>

<script>


export default {
  name: "AmenitesModal",
  data() {
    return {

    }
  },
  props:['amenitelist','categorielist'],
  computed: {

  },
  methods: {
    goFacilityConceptsFilter(id) {
      this.$router.push({
        path: '/kiralik-villa-ara',
        query: {
          facilityConcepts: id
        },
      });
    },
  }
}
</script>
