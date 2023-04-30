<template>
  <div v-if="loaded" style="order:5">
    <div class="View-right-opportunity" :class="componentclass">
      <h4><i class="icon-star"></i>Kısa Süreli Fırsatlara <span>Gözat</span></h4>
      <a href="javascript:return void(0)" @click="selectOpportunity(opportunity)" class="View-right-opportunity-item"
        v-for="opportunity in opportunities.slice(0, 2)">
        <div class="View-right-opportunity-item-day">
          <b>{{ opportunity.price?.day }}</b>
          <span>GECE</span>
        </div>
        <div class="View-right-opportunity-item-price">
          <p>{{ opportunity.start_date }} <i class="icon-right-arrow"></i>{{ opportunity.end_date }}</p>
          <span>{{ opportunity.price?.total | numberFormat }}{{ opportunity.price.price_currency }}</span>
        </div>
      </a>
      <button type="button" @click="mobileOpportunityToggle" class="mobile-button">Diğer tarihleri<span>görüntüle({{ opportunities.length}})</span></button>
      <b-button @click="openModal" v-if="opportunities.length > 2" type="button" class="desktop-button">Diğer tarihleri
        <span>görüntüle({{ opportunities.length }})</span></b-button>
    </div>

    <b-modal id="opportunityModal" class="Login" :hide-header="true" hide-footer>
      <div class="View-right-opportunity">
        <div class="View-right-opportunity-head">
          <h4><i class="icon-star"></i>Kısa Süreli Fırsatlara <span>Gözat</span></h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
            @click="$bvModal.hide('opportunityModal')"><i class="icon-search-close"></i></button>
        </div>
        <a href="javascript:return void(0)" @click="selectOpportunity(opportunity)" class="View-right-opportunity-item"
          v-for="opportunity in opportunities">
          <div class="View-right-opportunity-item-day">
            <b>{{ opportunity.price?.day }}</b>
            <span>GECE</span>
          </div>
          <div class="View-right-opportunity-item-price">
            <p>{{ opportunity.start_date }} <i class="icon-right-arrow"></i>{{ opportunity.end_date }}</p>
            <span>{{ opportunity.price?.total | numberFormat }}{{ opportunity.price.price_currency }}</span>
          </div>
        </a>
      </div>
    </b-modal>

    <div class="View-mobile-modal" :class="{ 'show': mobileOpportunity }">
      <button type="button" class="mobile-menus-back" @click="mobileOpportunityToggle"><i
          class="icon-left-arrow"></i></button>
      <div class="View-right-opportunity View-right-opportunity-modal">
        <div class="View-right-opportunity-head">
          <h4><i class="icon-star"></i>Kısa Süreli Fırsatlara <span>Gözat</span></h4>

        </div>
        <div class="View-right-opportunity" :class="componentclass">
          <a href="javascript:return void(0)" @click="selectOpportunity(opportunity)" class="View-right-opportunity-item"
            v-for="opportunity in opportunities">
            <div class="View-right-opportunity-item-day">
              <b>{{ opportunity.price?.day }}</b>
              <span>GECE</span>
            </div>
            <div class="View-right-opportunity-item-price">
              <p>{{ opportunity.start_date }} <i class="icon-right-arrow"></i>{{ opportunity.end_date }}</p>
              <span>{{ opportunity.price?.total | numberFormat }}{{ opportunity.price.price_currency }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OpportunityBoxComponent",
  props: ['propertyCode', 'componentclass'],
  data() {
    return {
      loaded: false,
      opportunities: [],
      mobileOpportunity: false,
    }
  },
  async mounted() {
    try {
      const response = await this.$axios.get(`/website/property/${this.propertyCode}/opportunity?api_token=${process.env.WEBSITE_TOKEN}`)
      this.opportunities = response.data.data
      this.loaded = true
    } catch (e) {

    }
  },
  watch:{
    mobileOpportunity() {
      if (this.mobileOpportunity == true) {
        setTimeout(() => {
          document.querySelector('body').classList.add('detail-over')
          document.querySelector('html').classList.add('detail-over')
        }, 50)
      } else {
        setTimeout(() => {
          document.querySelector('body').classList.remove('detail-over')
          document.querySelector('html').classList.remove('detail-over')
        }, 50)
      }
    }
  },
  methods: {
    openModal() {
      this.$bvModal.show('opportunityModal')
    },
    selectOpportunity(opportunity) {
      this.$emit('selected', opportunity)
    },
    mobileOpportunityToggle() {
      this.mobileOpportunity = !this.mobileOpportunity
    },
  }
}
</script>

<style scoped></style>
