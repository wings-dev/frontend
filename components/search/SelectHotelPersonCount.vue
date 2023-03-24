<template>
  <div class="Search-item Search-item-people">
    <button class=" dropdown-toggle Search-item-person-info" type="button" id="dropdownMenuButton2"
            data-bs-toggle="dropdown" aria-expanded="false">
      <div
        class="icon-box bg-theme-light rounded-sm flex-shrink-0 d-flex align-items-center justify-content-center me-3 ">
        <i class="icon-group-user"></i>
      </div>
      <div class="Search-item-people-in">
        <span class="Search-item-name">Kişi Sayısı </span>
        <span class="dropdown-toggle-title">{{ selectedPersonText }}</span>
        <i class="icon-down-arrow"></i>
      </div>

    </button>
    <client-only>
      <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton2">
        <div class="Search-item-person">
          <div class="Search-item-person-item ">
            <p>Yetişkin</p>
            <div class="Search-item-person-item-in ">
              <button type="button" class="minus-person" @click="adultDecrease">
                <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.3984 9H6.59844" stroke="#1C274C" stroke-linecap="round"/>
                  <path
                    d="M5 2.07026C6.17669 1.38958 7.54285 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 7.54285 1.38958 6.17669 2.07026 5"
                    stroke="#1C274C" stroke-linecap="round"/>
                </svg>
              </button>
              <input id="Search_PeopleAdult" class="person" type="text" :value="adult" max="20" readonly>
              <button type="button" class="plus-person" @click="adultIncrease">
                <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.4016 9.00012L9.00156 9.00012M9.00156 9.00012L6.60156 9.00012M9.00156 9.00012L9.00156 6.6001M9.00156 9.00012L9.00156 11.4001"
                    stroke="#1C274C" stroke-linecap="round"/>
                  <path
                    d="M5 2.07026C6.17669 1.38958 7.54285 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 7.54285 1.38958 6.17669 2.07026 5"
                    stroke="#1C274C" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="Search-item-person-item" style="flex-wrap: wrap;">
            <p>Çocuk <br><span>6-17 arası</span></p>
            <div class="Search-item-person-item-in ">
              <button type="button" class="minus-person" @click="children_Decrease">
                <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.3984 9H6.59844" stroke="#1C274C" stroke-linecap="round"/>
                  <path
                    d="M5 2.07026C6.17669 1.38958 7.54285 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 7.54285 1.38958 6.17669 2.07026 5"
                    stroke="#1C274C" stroke-linecap="round"/>
                </svg>
              </button>
              <input id="Search_PeopleChild" class="person" type="text" :value="childAges.length" max="10" readonly>
              <button type="button" class="plus-person" @click="children_Increase">
                <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.4016 9.00012L9.00156 9.00012M9.00156 9.00012L6.60156 9.00012M9.00156 9.00012L9.00156 6.6001M9.00156 9.00012L9.00156 11.4001"
                    stroke="#1C274C" stroke-linecap="round"/>
                  <path
                    d="M5 2.07026C6.17669 1.38958 7.54285 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 7.54285 1.38958 6.17669 2.07026 5"
                    stroke="#1C274C" stroke-linecap="round"/>
                </svg>
              </button>
            </div>

            <div class="w-100 mt-1">
              <div v-for="(child, index) in childAges" class="w-100 d-flex justify-content-between p-2 mb-1" style="background: #f2eeee">
                <div>
                  <div style="font-size: 12px">{{index + 1}}. Çocuk</div>
                  <div style="font-size: 10px">24.03.2001 sonrası doğumlu</div>
                </div>
                <div class="w-100" style="max-width: 50px">
                  <select class="w-100" v-model="child.age" @change="emit">
                    <option value="" disabled>Yaş</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
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
      this.$emit('change', {adult: this.adult, childAges: this.childAges})
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
        this.childAges.push({age: ''})
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

<style scoped>

</style>
