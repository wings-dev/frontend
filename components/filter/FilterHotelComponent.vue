<template>
  <section class="Filter">
    <div class="container">
      <div class="Filter-in">
        <div class="Filter-left Filters Filter-left-otel" :class="{ show: isMobileFilterOpen }">
          <div class="Filter-left-head">
            <h4>Gelişmiş Arama</h4>
            <button type="button" class="Search-filter-close" id="mobileFilterClose" @click="closeMobileFilter">
              <i class="icon-login-close"></i>
            </button>
          </div>
          <!-- <div class="Filters-search mobile">
            <label for="">
              <i class="icon-search-new"></i>
              <input type="search" placeholder="Özellik arayın" onkeyup="destinationsFilter(this)">
            </label>
          </div> -->
          <div class="Filter-left-selected">



          </div>
          <div class="Filter-left-in">
            <div class="Filters-item Filters-item-notfound">
              <p class="Filters-item-notfound-text"><i class="icon-filter"></i>Sonuç bulunamadı</p>
            </div>

            <otel-filter-item-checkbox-component title="BÖLGE" filterInputPlaceholder="Bölge" :checkboxes="destinations"
              :loading="loading" :hideTitleBorder="true" @updated="updateFilter('destinations', $event)"
              groupName="destinationCheckbox"></otel-filter-item-checkbox-component>

            <otel-filter-item-checkbox-component title="Pansiyon Tipi" :checkboxes="boards" :loading="loading"
              :hideTitleBorder="true" @updated="updateFilter('boards', $event)"></otel-filter-item-checkbox-component>

            <otel-filter-item-checkbox-component title="Tesis Özellikleri" :checkboxes="facilities" :loading="loading"
              :hideTitleBorder="true" @updated="updateFilter('facilities', $event)"></otel-filter-item-checkbox-component>

            <otel-filter-item-checkbox-component title="Temalar" :checkboxes="themes" :loading="loading"
              :hideTitleBorder="true" @updated="updateFilter('themes', $event)"></otel-filter-item-checkbox-component>

            <div class="Filters Filters-otel">
              <div class="Filters-head">
                <h5>Yıldız Sayısı<span></span></h5>
              </div>
              <div class="Filters-in">
                <div class="Filters-in-mobile">
                  <div class="Filters-head">
                    <h5>Yıldız Sayısı</h5>
                  </div>
                  <button type="button"><i class="icon-left-arrow"></i></button>
                </div>
                <div class="Filters-checkbox">
                  <div v-if="loading">Yükleniyor...</div>
                  <template v-else>
                    <div v-for="star in 5" :key="star" class="Filters-checkbox-item">
                      <input type="checkbox" :id="'star' + star" :checked="selectedStars.includes(star)" :value="star"
                        @click="handleStarSelection(star)">
                      <label :for="'star' + star">
                        <span>{{ star }}</span>
                        <i class="icon-star"></i>
                      </label>
                    </div>
                  </template>
                </div>
              </div>
            </div>

            <div class="Filters Filters-otel " style="display: none">
              <div class="Filters-head">
                <h5>Misafir Puanı<span></span></h5>
                <button type="button" class="Filters-head-clear">Temizle</button>
              </div>
              <div class="Filters-in">
                <div class="Filters-in-mobile">
                  <div class="Filters-head">
                    <h5>Misafir Puanı</h5>
                  </div> <button type="button"><i class="icon-left-arrow"></i></button>
                </div>
                <div class="Filters-checkbox">
                  <div class="Filters-checkbox-item">
                    <input type="checkbox">
                    <label for="">
                      <span>1+</span>
                    </label>
                  </div>
                  <div class="Filters-checkbox-item">
                    <input type="checkbox">
                    <label for="">
                      <span>6+</span>
                    </label>
                  </div>
                  <div class="Filters-checkbox-item">
                    <input type="checkbox">
                    <label for="">
                      <span>7+</span>
                    </label>
                  </div>
                  <div class="Filters-checkbox-item">
                    <input type="checkbox">
                    <label for="">
                      <span>8+</span>
                    </label>
                  </div>
                  <div class="Filters-checkbox-item">
                    <input type="checkbox">
                    <label for="">
                      <span>9+</span>
                    </label>
                  </div>
                </div>
                <button type="button" class="Filters-in-m-button">TAMAM <span></span></button>
              </div>
            </div>


            <!--<otel-filter-price-between-component @min_price="updateFilter('min_price', $event, false)"
              @max_price="updateFilter('max_price', $event)" groupName="priceRange"></otel-filter-price-between-component>-->

            <button type="button" class="Search-clear-mobile" v-show="filterCount > 0" @click="clearFilter()">Tümünü
              Temizle</button>

            <button type="button" @click="closeMobileFilter()" class="Filters-in-m-button">Uygula</button>
          </div>
        </div>
        <div class="Filter-right">
          <div class="Filter-right-head">
            <div class="Filter-right-head-info">
              <i class="icon-list"></i>
              <p>{{ filteredHotels.length }} otel listeleniyor</p>
            </div>
            <div class="Filter-right-head-buttons">

              <div class="Filter-right-head-buttons-item">
                <client-only>
                  <VSelect :options="orderValues" :labelTitle="orderPlaceholder" @input="orderChanged" />
                </client-only>
              </div>
              <button type="button" @click="openMobileFilter()"
                class="Filter-right-head-buttons-item mobile-filter-button"><i class="icon-new-filter"></i>FİLTRELE
                <span>(4)</span></button>
            </div>
          </div>

          <div class="Filter-right-selected">
            <div class="Filter-right-selected-in">

              <button type="button" id="Fetures_clear" v-show="filterCount > 0" @click="clearFilter()">Temizle</button>

              <a v-for="destination in selectedDestinations" class="Filter-right-selected-item">
                Bölge: {{ destination.text }}
                <i class="icon-search-close" @click="unselect(destination)"></i>
              </a>

              <a v-for="item in selectedBoards" class="Filter-right-selected-item">
                Pansiyon Tipi: {{ item.text }}
                <i class="icon-search-close" @click="unselect(item)"></i>
              </a>

              <a v-for="item in selectedFacilities" class="Filter-right-selected-item">
                Tesis Özelliği: {{ item.text }}
                <i class="icon-search-close" @click="unselect(item)"></i>
              </a>

              <a v-for="item in selectedThemes" class="Filter-right-selected-item">
                Tema: {{ item.text }}
                <i class="icon-search-close" @click="unselect(item)"></i>
              </a>

            </div>
          </div>

          <div class="F_villa F_villa-otel ">

            <filter-hotel-preview-component v-for="(hotel, index) in filteredHotels" :key="hotel.id" :hotel="hotel"
              :checkindate="checkIn" :requestId="requestId"></filter-hotel-preview-component>

            <div class="No-villas mb-4" v-if="loading === false && hotels.length <= 0">
              <nuxt-img :src="`img/site${site_id}/no-villas.svg`" :alt="sitename" loading="lazy" placeholder ></nuxt-img>
              <h2>Arama filtrelerinize uygun ilan bulunamadı.</h2>
              <p>Arama filtrenizi veya tarih değiştirerek yeniden deneyebilirsiniz.</p>
              <div class="No-villas-buttons">
                <button type="button" class="change-date">TARİHİ DEĞİŞTİR</button>
                <button type="button" class="assistans"><i class="icon-header-assistant"></i>TATİL ASİSTANINDAN DESTEK
                  ALABİLİRSİNİZ</button>
              </div>
            </div>

            <div class="No-villas mb-4" v-if="loading">
              <lottie :width="168" :height="125" :options="loadingOptions" v-on:animCreated="handleAnimation" />
              <h2>Oteller hazırlanıyor.</h2>
              <p>Keyifli bir tatil için binlerce seçeneğe hazır mısınız?</p>
            </div>
            <filter-banner v-if="!loading"></filter-banner>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VSelect from "@alfsnd/vue-bootstrap-select";
import OtelFilterItemCheckboxComponent from "@/components/filter/OtelFilterItemCheckboxComponent.vue";
import OtelFilterPriceBetweenComponent from "@/components/filter/OtelFilterPriceBetweenComponent.vue";
import lottie from 'vue-lottie/src/lottie.vue'
export default {
  name: "FilterHotelComponent",
  props: {
    selectedFilters: { type: Object, default: {} },
  },
  data() {
    return {
      site_id: process.env.SITE,
      sitename: process.env.SITE_NAME,
      current_page: 1,
      per_page: 10,
      total_items: 0,
      hotels: [],
      requestId: null,
      min_price: null,
      max_price: null,
      checkIn: null,
      checkOut: null,
      destinations: [],
      boards: [],
      facilities: [],
      themes: [],
      adult: null,
      childAges: [],
      baby: null,
      orderValues: [
        { value: 'price_asc', text: "Fiyata Göre Artan" },
        { value: 'price_desc', text: "Fiyata Göre Azalan" }
      ],
      orderValue: null,
      orderPlaceholder: "Sırala:",
      loading: true,
      isMobileFilterOpen: false,
      selectedStars: [],
      min_hotel_price: null,
      max_hotel_price: null,
      anim: null, // for saving the reference to the animation
      loadingOptions: {
        animationData: require(`~/assets/animation/site${process.env.SITE}/otel_loading.json`),
        loop: true,
        autoplay: true,
      },
    }
  },
  components: {
    VSelect, OtelFilterItemCheckboxComponent, OtelFilterPriceBetweenComponent, lottie
  },
  beforeMount() {
    this.checkIn = this.selectedFilters['checkIn'] ?? null;
    this.checkOut = this.selectedFilters['checkOut'] ?? null;
    this.adult = this.selectedFilters['adult'] ?? null;
    this.childAges = this.selectedFilters['childAges'] ?? null;
    this.baby = this.selectedFilters['baby'] ?? null;
  },
  mounted() {
    setTimeout(() => {
      this.filter();
    }, 50)
  },
  computed: {
    filteredHotels() {
      let hotels = [];
      const selectedCities = this.destinations.filter(destination => destination.selected).map(d => d.code)
      const selectedBoards = this.boards.filter(board => board.selected).map(b => b.code);
      const selectedFacilities = this.facilities.filter(facility => facility.selected).map(f => f.code);
      const selectedThemes = this.themes.filter(theme => theme.selected).map(f => f.code);

      if (selectedCities.length > 0) {
        hotels = this.hotels.filter(hotel => selectedCities.includes(hotel.city.id))
      } else {
        hotels = this.hotels
      }

      if (selectedBoards.length > 0) {
        hotels = hotels.filter(hotel => hotel.boardGroups.some(boardGroup => selectedBoards.includes(boardGroup.id)));
      }

      if (selectedFacilities.length > 0) {
        hotels = hotels.filter(hotel => hotel.facilities.some(facility => selectedFacilities.includes(facility.id)));
      }

      if (selectedThemes.length > 0) {
        hotels = hotels.filter(hotel => hotel.themes.some(theme => selectedThemes.includes(theme.id)));
      }

      if (this.selectedStars.length > 0) {
        hotels = hotels.filter(hotel => this.selectedStars.includes(parseInt(hotel.stars)));
      }

      if (this.orderValue?.value === 'price_asc') {
        return hotels.sort((a, b) => {
          const aPrice = a.offers && a.offers[0] && a.offers[0].price && a.offers[0].price.amount ? a.offers[0].price.amount : 0;
          const bPrice = b.offers && b.offers[0] && b.offers[0].price && b.offers[0].price.amount ? b.offers[0].price.amount : 0;
          return aPrice - bPrice;
        });
      } else if (this.orderValue?.value === 'price_desc') {
        return hotels.sort((a, b) => {
          const aPrice = a.offers && a.offers[0] && a.offers[0].price && a.offers[0].price.amount ? a.offers[0].price.amount : 0;
          const bPrice = b.offers && b.offers[0] && b.offers[0].price && b.offers[0].price.amount ? b.offers[0].price.amount : 0;
          return bPrice - aPrice;
        });
      } else {
        return hotels;
      }
    },
    totalPages() {
      return Math.ceil(this.total_items / this.per_page);
    },
    pageNumbers() {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    },
    selectedDestinations() {
      return this.getSelectedObjects(this.destinations);
    },
    selectedBoards() {
      return this.getSelectedObjects(this.boards);
    },
    selectedFacilities() {
      return this.getSelectedObjects(this.facilities);
    },
    selectedThemes() {
      return this.getSelectedObjects(this.themes);
    },
    filterCount() {
      return [
        ...this.selectedDestinations,
        ...this.selectedBoards
      ].length;
    }
  },
  methods: {
    handleStarSelection(star) {
      // Eğer seçili olan en düşük yıldızı seçtiyse, tüm yıldızları kaldır.
      if (this.selectedStars.includes(star) && this.selectedStars[0] === star) {
        this.selectedStars = [];
      } else {
        this.selectedStars = [];
        this.$nextTick(() => {
          for (let i = star; i <= 5; i++) {
            this.selectedStars.push(i);
          }
        });
      }
    },
    applySelectedFilters(property, nestedProperty) {
      let filters = [];
      if (nestedProperty)
        filters = this.selectedFilters[property]?.[nestedProperty] || [];
      else
        filters = this.selectedFilters[property] || [];
      let checkboxes = [];
      if (nestedProperty)
        checkboxes = this[property][nestedProperty];
      else
        checkboxes = this[property];
      for (let i = 0; i < filters.length; i++) {
        const checkbox = this.findNestedObject(checkboxes, filters[i].code);
        checkbox.selected = true;
      }
    },
    updateFilter(key, value, sendRequest = true) {
      this[key] = value;
    },
    goToPage(pageNumber) {
      if (pageNumber === this.current_page) return;
      this.current_page = pageNumber;
      this.filter(pageNumber);
      if(window.innerWidth < 991){
        window.scrollTo({ top: 200, behavior: 'smooth' });
      }else{
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    filter(pageNumber = 1) {
      const data = {
        id: this.selectedFilters.destinations,
        checkIn: this.checkIn,
        checkOut: this.checkOut,
        adult: this.adult,
        childAges: this.childAges,
        order: this.orderValue?.value
      };

      this.$axios
        .post(`/data/hotels`, data)
        .then(response => {
          this.hotels = response.data.body?.hotels ?? [];
          this.requestId = response.data.header.requestId;

          function compareText(a, b) {
            if (a.text < b.text) {
              return -1;
            }
            if (a.text > b.text) {
              return 1;
            }
            return 0;
          }

          this.destinations = this.hotels.map(hotel => {
            return { code: hotel.city.id, text: hotel.city.name, selected: false }
          }).filter((destination, index, self) =>
            index === self.findIndex((t) => (
              t.text === destination.text
            ))
          ).map(destination => {
            const count = this.hotels.filter(hotel => hotel.city.name === destination.text).length;
            return { ...destination, count: count };
          }).sort(compareText);

          this.boards = this.hotels.flatMap(hotel => {
            return hotel.boardGroups.map(boardGroup => {
              return { code: boardGroup.id, text: boardGroup.name, selected: false };
            });
          }).filter((board, index, self) =>
            index === self.findIndex((t) => (
              t.code === board.code
            ))
          ).filter(item => item.text !== 'Uncategorized')
            .map(board => {
              const count = this.hotels.flatMap(hotel => hotel.boardGroups).filter(boardGroup => boardGroup.id === board.code).length;
              return { ...board, count: count };
            }).sort(compareText);

          this.facilities = this.hotels.flatMap(hotel => {
            return hotel.facilities.map(facility => {
              return { code: facility.id, text: facility.name, selected: false };
            });
          }).filter((facility, index, self) =>
            index === self.findIndex((t) => (
              t.code === facility.code
            ))
          ).map(f => {
            const count = this.hotels.flatMap(hotel => hotel.facilities).filter(facility => facility.id === f.code).length;
            return { ...f, count: count };
          }).sort(compareText);

          this.themes = this.hotels.flatMap(hotel => {
            return hotel.themes.map(theme => {
              return { code: theme.id, text: theme.name, selected: false };
            });
          }).filter((theme, index, self) =>
            index === self.findIndex((t) => (
              t.code === theme.code
            ))
          ).map(t => {
            const count = this.hotels.flatMap(hotel => hotel.themes).filter(theme => theme.id === t.code).length;
            return { ...t, count: count };
          }).sort(compareText);

          const hotelPrices = this.hotels.map(hotel => {
            const price = Math.ceil(hotel?.offers?.[0]?.price?.amount);
            return price ?? 0;
          });

          const validPrices = hotelPrices.filter(price => price !== 0);

          this.min_hotel_price = validPrices.length > 0 ? Math.min(...validPrices) : null;
          this.max_hotel_price = validPrices.length > 0 ? Math.max(...validPrices) : null;

        })
        .catch(console.error)
        .finally(() => {
          this.loading = false
        });
    },
    getSelectedObjects(checkboxes) {
      return checkboxes.reduce((selected, checkbox) => {
        if (checkbox.selected) selected.push(checkbox);
        if (checkbox.children) selected.push(...this.getSelectedObjects(checkbox.children));
        return selected;
      }, []);
    },
    findNestedObject(checkboxes, code) {
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].code == code) return checkboxes[i];
        if (checkboxes[i].children) {
          const found = this.findNestedObject(checkboxes[i].children, code);
          if (found) return found;
        }
      }
      return null;
    },
    orderChanged(order) {
      this.orderValue = order;
    },
    unselect(item) {
      item.selected = false;
    },
    updateSelection(checkbox, value) {
      checkbox.selected = value;
      checkbox.children && checkbox.children.forEach(child => this.updateSelection(child, value));
    },
    clearFilter() {
      [
        ...this.destinations,
        ...this.boards
      ].forEach(checkbox => this.updateSelection(checkbox, false));
      this.filter();
    },
    isMobile() {
      return window.innerWidth <= 991;
    },
    openMobileFilter() {
      if (this.isMobile()) {
        this.isMobileFilterOpen = true
      }
    },
    closeMobileFilter() {
      if (this.isMobile()) {
        this.isMobileFilterOpen = false
      }
    },
    handleAnimation: function (anim) {
      this.anim = anim;
    },
  }
}
</script>

<style scoped></style>
