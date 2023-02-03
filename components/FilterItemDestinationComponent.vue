<template>
  <div class="Filters Filters-region ">
    <div class="Filters-head"><i class="icon-location-1"></i><h5>BÖLGE</h5></div>
    <div class="Filters-search">
      <label><i class="icon-search-new"></i><input type="search" placeholder="Bölge arayın" v-model="filterText" @keyup="applyFilter()"></label>
    </div>
    <div class="Filters-in">
      <ul class="Filters-first">
        <li class="Filters-item Filters-item-notfound" v-bind:style="filterText.length && !filteredDestinations.length ? 'display:block' : 'display:none'">
          <p class="Filters-item-notfound-text"><i class="icon-filter"></i>Sonuç bulunamadı</p>
        </li>
        <li class="Filters-item" v-for="destination1 in (filterText.length ? filteredDestinations : destinations)">
          <label>
            <input type="checkbox" v-model="destination1.selected" @change="selectDestination(destination1)">
            <span class="checkspan"></span>
            <p class="check-text" v-text="destination1.text"></p>
          </label>
          <ul class="Filter-second" v-for="destination2 in destination1.children">
            <li>
              <label>
                <input type="checkbox" v-model="destination2.selected" @change="selectDestination(destination2)">
                <span class="checkspan"></span>
                <p class="check-text" v-text="destination2.text"></p>
              </label>
              <ul class="Filter-third" v-for="destination3 in destination2.children">
                <li>
                  <label>
                    <input type="checkbox" v-model="destination3.selected" @change="selectDestination(destination3)">
                    <span class="checkspan"></span>
                    <p class="check-text" v-text="destination3.text"></p>
                  </label>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterItemDestinationComponent",
  data() {
    return {
      filterText: "",
      filteredDestinations: [],
      destinations: [
        {
          text: "Antalya",
          code: "antalya",
          selected: false,
          children: [
            {
              text: "Kaş",
              code: "kas",
              selected: false,
              children: [
                {
                  text: "Kalkan",
                  code: "kalkan",
                  selected: false,
                }
              ]
            }
          ]
        },
        {
          text: "Çavdır",
          code: "cavdir",
          selected: false,
          children: [
            {
              text: "Fethiye",
              code: "fethiye",
              selected: false,
            },
            {
              text: "Marmaris",
              code: "marmaris",
              selected: false,
            }
          ]
        }
      ]
    };
  },
  methods: {
    /**
     * Bir node seçildiğinde gerekli işleri yapar
     * @param destination
     */
    selectDestination(destination) {
      this.updateSelection(destination, destination.selected)
      this.emitSelectedCodes();
    },
    /**
     * Node seçildiğinde, alt nodelarda seçilsin
     * @param destination
     * @param value
     */
    updateSelection(destination, value) {
      destination.selected = value;
      if (destination.children) {
        destination.children.forEach(child => {
          this.updateSelection(child, value);
        });
      }
    },
    /**
     * selected true olan nodeların codelarını verir
     * @param destinations
     * @returns {*}
     */
    getSelectedCodes(destinations) {
      return destinations.reduce((selectedCodes, destination) => {
        if (destination.selected) {
          selectedCodes.push(destination.code);
        }
        if (destination.children) {
          selectedCodes.push(...this.getSelectedCodes(destination.children));
        }
        return selectedCodes;
      }, []);
    },
    /**
     * üst componente seçili kodları gönderir
     */
    emitSelectedCodes() {
      const selectedCodes = this.getSelectedCodes(this.destinations);
      this.$emit("destinationCodes", selectedCodes);
    },
    /**
     * Filtre yapar, üst node ile birlikte sırasıyla verir
     * @param text
     * @returns {*[]}
     */
    filterDestinations(text) {
      function searchInDestination(destination, text) {
        if (destination.text.toLowerCase().includes(text.toLowerCase())) {
          return destination;
        }

        if (destination.children) {
          for (let child of destination.children) {
            let found = searchInDestination(child, text);
            if (found) {
              return {...destination, children: [found]};
            }
          }
        }
      }

      return this.destinations.reduce((filtered, destination) => {
        let found = searchInDestination(destination, text);
        if (found) {
          filtered.push(found);
        }
        return filtered;
      }, []);
    },
    /**
     * Filtreyi uygular
     */
    applyFilter() {
      this.filteredDestinations = this.filterDestinations(this.filterText);
    }
  }
}
</script>

<style scoped>

</style>
