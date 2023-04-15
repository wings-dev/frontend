<template>
  <div>
    <opportunity-header :opportunities="opportunities" v-if="opportunity"
      @selected="opportunitySelected($event)"></opportunity-header>

    <section class="highlight-section bg-theme-light-2 pt-5 pb-4 mt-n5 desktop" v-if="highlights">
      <div class="container">
        <div class="row pt-4 pb-md-2">
          <div class="note-box col-12 col-lg-12 pe-lg-5">
            <h1 class="highlight-section-title">{{ pageContent.title }}</h1>
            <p class="highlight-section-desc" :class="{ active: isExpanded }"
              v-html="pageContent.page_content.summary.data">
            </p>

            <div class="highlight-section-desc-more-button read-more-button" :class="{ active: isExpanded }"
              @click="isExpanded = !isExpanded"><i class="readmore"></i> {{ !isExpanded ? 'TAMAMINI OKU' : 'DAHA AZ OKU'
              }}
            </div>
          </div>
        </div>
      </div>
    </section>


    <filter-villa-component :selectedFilters="selectedFilters" :opportunity="opportunity" :month="month" :pageContent="pageContent"
      :day="day"></filter-villa-component>

    <section class="highlight-section bg-theme-light-2 pt-5 pb-4" v-if="highlights">
      <div class="container">
        <div class="row pt-4 pb-md-2">
          <div class="note-box col-12 col-lg-12 pe-lg-5">
            <h1 class="highlight-section-title">{{ pageContent.title }}</h1>
            <p class="highlight-section-desc" :class="{ active: isExpanded2 }"
              v-html="pageContent.page_content.article.data">
            </p>
            <div class="highlight-section-desc-more-button read-more-button" :class="{ active: isExpanded2 }"
              @click="isExpanded2 = !isExpanded2">
              <i class="readmore"></i>
              {{ !isExpanded2 ? 'TAMAMINI OKU' : 'DAHA AZ OKU' }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="List" v-if="highlights">
      <div class="container">
        <div class="List-sss">
          <h3>En çok sorulan sorular </h3>
          <div class="accordion" id="Faq">

            <div class="accordion-item" v-for="(item, index) in pageContent.page_content.faq[0].faq_list" :key="index">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                :data-bs-target="'#faq' + index" aria-expanded="false" :aria-controls="'faq' + index">
                {{ item.howrent_category_question }}
              </button>
              <div :id="'faq' + index" class="accordion-collapse collapse " data-bs-parent="#Faq">
                <div class="accordion-body" v-html="item.howrent_category_answer">

                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VSelect from "@alfsnd/vue-bootstrap-select";
import LoginModal from "@/components/modals/login-modal.vue";
import RegisterModal from "@/components/modals/register-modal.vue";
import { mapActions } from "vuex";


export default {
  name: 'DynamicVillaFilterPage',
  props: {
    selectedFilters: { type: Object, default: {} },
    pageContent: { type: Object },
    highlights: { type: Boolean, default: false },
    opportunity: { type: Boolean, default: false },
    opportunities: { type: Array, default: () => [] }
  },
  data() {
    return {
      phoneNumber: '',
      phoneNumberValid: false,
      callValues: [
        { value: 1, text: "Konaklama Problemi" },
        { value: 2, text: "Rezervasyon Problemi" },
        { value: 3, text: "Fatura İşlemleri" },
        { value: 4, text: "Ek Hizmetler" },
      ],
      callSubject: null,
      callPlaceholder: "Konu Seçiniz",
      disableDates: ['2023-02-21', '2023-02-22', '2023-02-23', '2023-02-24', '2023-02-24', '2023-02-26', '2023-02-27', '2023-02-28'],
      isExpanded: false,
      isExpanded2: false,
      content: `Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
                  masmavi denizi ile ünlü bir adres. Fethiye’nin tadını gerçekten çıkarmak isteyenler içinse, en
                  mantıklı seçenek villa kiralama. Günlük ya da haftalık villa tatili yapmak isteyenlere jakuzili,
                  kapalı havuzlu ya da bahçeli kiralık villa alternatifleri sunulan
                  Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.
                  Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
                  masmavi denizi ile ünlü bir adres. Fethiye’nin tadını gerçekten çıkarmak isteyenler içinse, en
                  mantıklı seçenek villa kiralama. Günlük ya da haftalık villa tatili yapmak isteyenlere jakuzili,
                  kapalı havuzlu ya da bahçeli kiralık villa alternatifleri sunulan
                  Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.
                  Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
                  masmavi denizi ile ünlü bir adres. Fethiye’nin tadını gerçekten çıkarmak isteyenler içinse, en
                  mantıklı seçenek villa kiralama. Günlük ya da haftalık villa tatili yapmak isteyenlere jakuzili,
                  kapalı havuzlu ya da bahçeli kiralık villa alternatifleri sunulan
                  Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.
                  Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
                  masmavi denizi ile ünlü bir adres. Fethiye’nin tadını gerçekten çıkarmak isteyenler içinse, en
                  mantıklı seçenek villa kiralama. Günlük ya da haftalık villa tatili yapmak isteyenlere jakuzili,
                  kapalı havuzlu ya da bahçeli kiralık villa alternatifleri sunulan
                  Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.`,
      day: null,
      month: null
    }
  },
  components: {
    RegisterModal,
    LoginModal,
    VSelect,

  },
  methods: {
    ...mapActions(['showLoginModal', 'hideLoginModal', 'showRegisterModal', 'hideRegisterModal']),
    onInput(phone, phoneObject) {
      setTimeout(() => {
        this.phoneNumberValid = phoneObject.valid;
        if (phone && phoneObject.country?.iso2 === 'TR' && !phoneObject.nationalNumber?.startsWith('5')) {
          this.phoneNumber = '5';
        }
      }, 50)
    },
    opportunitySelected(obj) {
      this.day = obj.day
      this.month = obj.month
    }
  },

  watch: {

  },
  computed: {
    phoneProps() {
      return {
        enabledFlags: true,
        dropdownOptions: {
          showDialCodeInSelection: true,
          showDialCodeInList: true,
          showFlags: true,
        },
        inputOptions: {
          placeholder: "Telefon Numaranız",
          type: "tel",
        },
        mode: "international",
        validCharactersOnly: true,
      };
    },

  },
  mounted() {
    setTimeout(() => {
      document.querySelector('.Header').classList.add('Header-no-fixed')
    }, 50)

  },
  beforeDestroy() {
    document.querySelector('.Header').classList.remove('Header-no-fixed')
  },


}
</script>
<style>
/* :deep() */
.vhd__datepicker__wrapper {
  background: none;
}

.vhd__datepicker__dummy-wrapper {
  border: none;
}

.vhd__datepicker__input {
  padding: 0;
  text-align: left;
}

.vhd__datepicker__input:first-child {
  background-position: 80px;
}

.arrow-down {
  margin-top: 2px !important;
}

.v-select {
  height: 100% !important;
}

.v-select-toggle {
  align-items: center;
}

.block-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 24px 20px;
  background-color: skyblue;
  border-radius: 8px;
}

.block-content__preview {
  /* default line-height is 24px */
  max-height: calc(24px * 4);
  overflow: hidden;
  color: white;
}

.block-content__paragraph {
  color: white;
  overflow: hidden;
  transition: all 250ms ease-out;
}

.block-content__paragraph.block-content__paragraph--is-expanded {
  overflow: initial;
}

.block-content__button {
  color: white;
  text-decoration: underline;
  align-self: flex-end;
}
</style>
