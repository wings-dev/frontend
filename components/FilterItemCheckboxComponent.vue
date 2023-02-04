<template>
  <div class="Filters Filters-region ">
    <div class="Filters-head" v-bind:class="{ 'border-bottom' : !hideTitleBorder}"><i class="icon-location-1"></i><h5>{{title}}</h5></div>
    <div class="Filters-search" v-if="filterInputPlaceholder.length">
      <label><i class="icon-search-new"></i><input type="search" :placeholder="filterInputPlaceholder" v-model="filterText" @keyup="applyFilter()"></label>
    </div>
    <div class="Filters-in">
      <ul class="Filters-first">
        <li class="Filters-item Filters-item-notfound" v-bind:style="filterText.length && !filteredCheckboxes.length ? 'display:block' : 'display:none'">
          <p class="Filters-item-notfound-text"><i class="icon-filter"></i>Sonuç bulunamadı</p>
        </li>
        <li class="Filters-item" v-for="checkbox1 in (filterText.length ? filteredCheckboxes : checkboxes)">
          <label>
            <input type="checkbox" v-model="checkbox1.selected" @change="selectCheckbox(checkbox1)">
            <span class="checkspan"></span>
            <p class="check-text" v-text="checkbox1.text"></p>
          </label>
          <ul class="Filter-second" v-for="checkbox2 in checkbox1.children">
            <li>
              <label>
                <input type="checkbox" v-model="checkbox2.selected" @change="selectCheckbox(checkbox2)">
                <span class="checkspan"></span>
                <p class="check-text" v-text="checkbox2.text"></p>
              </label>
              <ul class="Filter-third" v-for="checkbox3 in checkbox2.children">
                <li>
                  <label>
                    <input type="checkbox" v-model="checkbox3.selected" @change="selectCheckbox(checkbox3)">
                    <span class="checkspan"></span>
                    <p class="check-text" v-text="checkbox3.text"></p>
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
  name: "FilterItemCheckboxComponent",
  props: {
    title: {type: String},
    checkboxes: {type: Array, default: []},
    filterInputPlaceholder: {type: String, default: ""},
    hideTitleBorder: {type: Boolean, default: false},
  },
  data() {
    return {
      filterText: "",
      filteredCheckboxes: []
    };
  },
  methods: {
    /**
     * Bir node seçildiğinde gerekli işleri yapar
     * @param checkbox
     */
    selectCheckbox(checkbox) {
      this.updateSelection(checkbox, checkbox.selected)
      this.emitSelectedCodes();
    },
    /**
     * Node seçildiğinde, alt nodelarda seçilsin
     * @param checkbox
     * @param value
     */
    updateSelection(checkbox, value) {
      checkbox.selected = value;
      if (checkbox.children) {
        checkbox.children.forEach(child => {
          this.updateSelection(child, value);
        });
      }
    },
    /**
     * selected true olan nodeların codelarını verir
     * @param checkboxes
     * @returns {*}
     */
    getSelectedCodes(checkboxes) {
      return checkboxes.reduce((selectedCodes, checkbox) => {
        if (checkbox.selected) {
          selectedCodes.push(checkbox.code);
        }
        if (checkbox.children) {
          selectedCodes.push(...this.getSelectedCodes(checkbox.children));
        }
        return selectedCodes;
      }, []);
    },
    /**
     * selected true olan nodeların objelerini verir
     * @param checkboxes
     * @returns {*}
     */
    getSelectedObjects(checkboxes) {
      return checkboxes.reduce((selectedObjects, checkbox) => {
        if (checkbox.selected) {
          selectedObjects.push(checkbox);
        }
        if (checkbox.children) {
          selectedObjects.push(...this.getSelectedObjects(checkbox.children));
        }
        return selectedObjects;
      }, []);
    },
    /**
     * üst componente seçili kodları gönderir
     */
    emitSelectedCodes() {
      const selectedCodes = this.getSelectedCodes(this.checkboxes);
      let selectedObjects = this.getSelectedObjects(this.checkboxes);
      this.$emit("values", selectedCodes);
      this.$emit('selectedObjects', selectedObjects);
      this.$emit('updated', this.checkboxes);
    },
    /**
     * Filtre yapar, üst node ile birlikte sırasıyla verir
     * @param text
     * @returns {*[]}
     */
    filterCheckboxes(text) {
      function searchInCheckbox(checkbox, text) {
        if (checkbox.text.toLowerCase().includes(text.toLowerCase())) {
          return checkbox;
        }

        if (checkbox.children) {
          for (let child of checkbox.children) {
            let found = searchInCheckbox(child, text);
            if (found) {
              return {...checkbox, children: [found]};
            }
          }
        }
      }

      return this.checkboxes.reduce((filtered, checkbox) => {
        let found = searchInCheckbox(checkbox, text);
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
      this.filteredCheckboxes = this.filterCheckboxes(this.filterText);
    }
  }
}
</script>

<style scoped>

</style>
