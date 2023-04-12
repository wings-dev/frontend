<template>
  <client-only>
    <multiselect v-model="selectedCity" :options="otelSearchOptions" group-values="groupItems"
                 group-label="groupName" placeholder="Otel, tema" track-by="name" label="name" :showLabels="false" @search-change="onOtelSearch" @select="search">
      <template slot="singleLabel" slot-scope="props">
        <span class="option__desc"><span class="option__title">{{ props.option.name }}</span></span>
      </template>
      <template slot="option" slot-scope="props">
        <template v-if="!props.option.$isLabel">
          <i class="icon-hotel-category" v-if="props.option.category == 'tema'"></i>
          <i class="icon-location-pin" v-else-if="props.option.category == 'bolge'"></i>
          <i class="icon-hotel-key" v-else></i>
        </template>
        <div class="option__desc">
          <span class="option__title" v-if="props.option.$isLabel">{{ props.option.$groupLabel }}</span>
          <span class="option__title" v-else>{{ props.option.name }}</span>
          <span class="option__small" v-if="props.option.district">{{ props.option.district }}</span>
        </div>
      </template>
      <span slot="noResult">Oops! Aramanıza uygun sonuç bulunamadı.</span>
    </multiselect>
  </client-only>
</template>

<script>
import slugify from "slugify";

export default {
  name: "LiveHotelSearchComponent",
  data() {
    return {
      timeoutCheck: null,
      cancelToken: null,
      selectedCity: '',
      otelSearchOptions: [
        {
          groupName: 'Temalar',
          groupItems: []
        },
        {
          groupName: 'Bölgeler',
          groupItems: []
        },
        {
          groupName: 'Oteller',
          groupItems: []
        }
      ]
    }
  },
  methods: {
    async onOtelSearch(searchText) {
      if (!searchText || searchText.length < 3) return;

      // reset
      this.otelSearchOptions = [
        {
          groupName: 'Temalar',
          groupItems: []
        },
        {
          groupName: 'Bölgeler',
          groupItems: []
        },
        {
          groupName: 'Oteller',
          groupItems: []
        }
      ]

      clearTimeout(this.timeoutCheck);

      this.timeoutCheck = setTimeout(async () => {
        if (this.cancelToken) {
          this.cancelToken.cancel();
        }
        this.cancelToken = this.$axios.CancelToken.source();

        try {
          const response = await this.$axios.post(
            '/data/hotels/auto-complete',
            { query: searchText },
            { cancelToken: this.cancelToken.token }
          );

          const sortOrder = { 1: 1, 2: 2 };

          const items = response.data.body?.items?.filter(item => [1, 2].includes(item.type))
            .sort((a, b) => sortOrder[a.type] - sortOrder[b.type])
            .map(item => {
              item.name = item.type === 1 ? `${item.city.name}, ${item.country.name}` :
                item.type === 2 ? `${item.hotel.name}, ${item.city.name}, ${item.country.name}` :
                  item.type === 8 ? item.country.name : item.label;
              return item;
            }) || [];

          this.updateOtelSearchOptions(items);
        } catch (error) {
          console.error(error);
        }
      }, 500);
    },
    updateOtelSearchOptions(items) {
      // Temaları filtreleme ve ekleme
      this.otelSearchOptions[0].groupItems = items.filter(item => item.type === 7);

      // Bölgeleri filtreleme ve ekleme
      this.otelSearchOptions[1].groupItems = items.filter(item => item.type === 1);

      // Otelleri filtreleme ve ekleme
      this.otelSearchOptions[2].groupItems = items.filter(item => item.type === 2);
    },
    search() {
      if ([1,2].includes(this.selectedCity.type)) {
        const today = new Date();

        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + 2);

        const formatDate = (date) => {
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();
          return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        };

        const queryParams = {
          destinations: this.selectedCity.city.id,
          checkIn: formatDate(tomorrow),
          checkOut: formatDate(nextDay),
          adult: 1,
          childAges: [],
        };

        if (this.selectedCity.type === 2) {
          delete queryParams.destinations;
        }

        const urlSearchParams = Object.entries(queryParams)
          .filter(([key, value]) => value !== undefined && value !== null && value !== '')
          .map(([key, value]) => Array.isArray(value) ? value.map(item => `${key}=${item}`).join('&') : `${key}=${value}`)
          .join('&');

        let page = this.selectedCity.type === 1 ? 'oteller' : 'otel/' + slugify(this.selectedCity.hotel.name.toLowerCase()) + '-' + this.selectedCity.hotel.id;

        window.location.href = `${window.location.origin}/${page}?${urlSearchParams}`;
      }
    }
  }
}
</script>

<style scoped>

</style>
