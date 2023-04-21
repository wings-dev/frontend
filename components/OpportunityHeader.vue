<template>
  <section class="Opportunity" style="background-image: url(/img/opportunity-back.svg);" v-if="loaded">
    <div class="container">
      <div class="Opportunity-in">
        <div class="Opportunity-left">
          <div class="Opportunity-left-head">
            <i class="icon-opportunity"></i>
            <h3>Aylara göre Fırsatlar</h3>
          </div>

          <p>Bu aya özel toplam <span>{{total}} fırsat villası</span> var. Fırsatı kaçırma, huzurlu bi tatili yakala!</p>
        </div>
        <div class="Opportunity-right">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation" v-for="(monthData, monthName, index) in groupedOpportunities" :key="monthName">
              <button class="nav-link" :class="{active: index === 0}" :id="`pills-${monthName}-tab`" data-bs-toggle="pill" :data-bs-target="`#pills-${monthName}`"
                      type="button" role="tab" :aria-controls="`pills-${monthName}`" :aria-selected="index === 0">{{ monthName }}</button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade" v-for="(monthData, monthName, index) in groupedOpportunities" :id="`pills-${monthName}`" role="tabpanel"
                 :class="{show: index === 0, active: index === 0}" :aria-labelledby="`pills-${monthName}-tab`">
              <div class="Opportunity-list">
                <a href="javascript:return void(0)" @click="selectOpportunity(index, night)" class="Opportunity-list-item" v-for="(count, night) in monthData" :key="night" v-bind:class="{'passive': count === 0}">
                  <div class="Opportunity-list-item-content">
                    <b>{{ night }}</b>
                    <div class="Opportunity-list-item-content-in">
                      <span>GECE</span>
                      <p>Fırsatları</p>
                      <small>{{ monthName }}</small>
                    </div>
                  </div>
                  <div class="Opportunity-list-item-count">
                    <template v-if="count > 0">
                      {{ count }} Fırsat <span>incele</span>
                    </template>
                    <template v-else>
                      <p>Tükendi</p>
                    </template>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OpportunityHeader",
  props: {
    opportunities: { type: Array }
  },
  data() {
    return {
      loaded: true,
      groupedOpportunities: [],
      total: 0
    }
  },
  created() {
    function getTotalNightCount(groupedData) {
      let total = 0;

      for (const month in groupedData) {
        for (const night in groupedData[month]) {
          total += groupedData[month][night];
        }
      }

      return total;
    }
    function groupData(opportunities) {
      const groupedData = {};

      opportunities.forEach(opportunity => {
        if (!groupedData[opportunity.month_name]) {
          groupedData[opportunity.month_name] = {};
        }

        if (!groupedData[opportunity.month_name][opportunity.night]) {
          groupedData[opportunity.month_name][opportunity.night] = 0;
        }

        groupedData[opportunity.month_name][opportunity.night] += opportunity.count;
      });

      // Tüm night değerleri sıfır olan ayları kaldırma
      for (const month in groupedData) {
        const allNightZero = Object.values(groupedData[month]).every(value => value === 0);
        if (allNightZero) {
          delete groupedData[month];
        }
      }

      return groupedData;
    }

    this.groupedOpportunities = groupData(this.opportunities);
    this.total = getTotalNightCount(this.groupedOpportunities);

  },
  methods: {
    selectOpportunity(index, night) {
      function getObjectKey(obj, index) {
        const keys = Object.keys(obj);
        return keys[index];
      }

      const objectAtIndex = getObjectKey(this.groupedOpportunities, index);
      const month = this.opportunities.find(o => o.month_name === objectAtIndex).month
      this.$emit('selected', {month, day: parseInt(night)})
    }
  }
}
</script>

<style scoped>

</style>
