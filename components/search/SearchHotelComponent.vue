<template>
  <div>
    <client-only>
      <v-select
        :options="filteredCities"
        label="title"
        v-model="selectedCity"
        placeholder="Şehir, İlçe veya Otel adı yazın"
        @search="onSearch"
      ></v-select>
    </client-only>
  </div>
</template>

<script>


import {mapState} from "vuex";

export default {
  name: "SearchHotelComponent",
  components: {},
  data() {
    return {
      citySearchText: '',
      citiesDefault: [
        {value: 'option1', title: 'Default 1'},
        {value: 'option2', title: 'Default 2'},
        {value: 'option3', title: 'Default 3'}
      ],
      orderPlaceholder: "Şehir, İlçe veya Otel adı yazın",
      selectedCity: '',
    }
  },
  computed: {
    ...mapState({
      hotels: state => state.hotels.list
    }),
    filteredCities() {
      if (this.citySearchText) {
        const searchText = this.citySearchText.toLocaleLowerCase()
        return this.hotels.filter(hotel => hotel.title.toLocaleLowerCase().includes(searchText))
      } else {
        return this.citiesDefault
      }
    }
  },
  methods: {
    onSearch(searchText) {
      this.citySearchText = searchText
    }
  }
}
</script>
