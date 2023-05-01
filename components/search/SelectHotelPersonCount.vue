<template>
  <div class="Search-item Search-item-people Search-item-people-otel">
    <div class="Search-item-title">
      <i class="icon-user Search-item-icon"></i>
      <span class="Search-item-name">Kişi Sayısı </span>
    </div>
    <button class=" dropdown-toggle Search-item-person-info" type="button" id="dropdownMenuButton2"
      data-bs-toggle="dropdown" aria-expanded="false">

      <div class="Search-item-people-in">
        <i class="icon-user Search-item-icon"></i>
        <span class="dropdown-toggle-title">{{ selectedPersonText }}</span>
        <i class="icon-down-arrow"></i>
      </div>

    </button>
    <client-only>
      <ul class="dropdown-menu dropdown-menu-otel " aria-labelledby="dropdownMenuButton2">
        <div class="Search-item-person ">
          <div class="Search-item-person-item ">
            <p>Yetişkin</p>
            <div class="Search-item-person-item-in ">
              <button type="button" class="minus-person" @click="adultDecrease">
                <i class="icon-minus"></i>
              </button>
              <input id="Search_PeopleAdult" class="person" type="text" :value="adult" max="20" readonly>
              <button type="button" class="plus-person" @click="adultIncrease">
                <i class="icon-plus"></i>
              </button>
            </div>
          </div>
          <div class="Search-item-person-item" style="flex-wrap: wrap;">
            <p>Çocuk <br><span>4-17 arası</span></p>
            <div class="Search-item-person-item-in ">
              <button type="button" class="minus-person" @click="children_Decrease">
                <i class="icon-minus"></i>
              </button>
              <input id="Search_PeopleChild" class="person" type="text" :value="childAges.length" max="10" readonly>
              <button type="button" class="plus-person" @click="children_Increase">
                <i class="icon-plus"></i>
              </button>
            </div>

            <div class="Search-item-person-child">
              <div v-for="(child, index) in childAges" class="Search-item-person-child-item">
                <div class="Search-item-person-child-item-text">
                  <p>{{ index + 1 }}. Çocuk</p>
                  <span>24.03.2001 sonrası doğumlu</span>
                </div>
                <div class="Search-item-person-child-item-select">
                  <select v-model="child.age" @change="emit">
                    <option value="" disabled>Seçiniz</option>
                    <option value="1">1'den Küçük</option>
                    <option value="2">6 Yaşında</option>
                  </select>
                </div>
              </div>
            </div>

          </div>
        </div>
      </ul>
    </client-only>
  </div>
</template>

<script>
export default {
  name: "SelectHotelPersonCount",
  props: ['adult', 'childAges'],
  data() {
    return {}
  },
  mounted() {
    this.emit()
  },
  computed: {
    selectedPersonText() {
      let text = `${this.adult} Yetişkin `;
      if (this.childAges.length > 0) {
        text += `${this.childAges.length} Çocuk `;
      }
      return text;
    },
  },
  methods: {
    emit() {
      this.$emit('change', { adult: this.adult, childAges: this.childAges })
    },
    adultIncrease() {
      if (this.adult < 20) {
        this.adult += 1;
        this.emit()
      }
    },
    adultDecrease() {
      if (this.adult > 1) {
        this.adult -= 1;
        this.emit()
      }
    },
    children_Increase() {
      if (this.childAges.length < 10) {
        this.childAges.push({ age: '' })
        this.emit()
      }
    },
    children_Decrease() {
      if (this.childAges.length > 0) {
        this.childAges.pop()
        this.emit()
      }
    },
  }
}
</script>

<style scoped></style>
