<template>
    <section class="search-engine-section position-relative pt-3" id="searchEngine" v-if="searchbar.tab" :class="{ 'search-engine-section-otel': searchbar.tab === 3 }">
        <div class="container pt-1">
            <form action="" class="search-engine">
              <nav>
                <div class="nav nav-tabs border-0 lh-sm" id="search-tab" role="tablist">
                  <nuxt-link
                    to="/"
                    button
                    class="nav-link text-white ls-05 py-2 py-sm-3 px-3 px-sm-4 mb-0"
                    :class="{ 'active': searchbar.tab === 1 }"
                    type="button"
                  >
                    <span class="d-inline-block fw-medium px-2 px-sm-3 py-1">
                      Yurt İçi Villalar
                    </span>
                  </nuxt-link>
                  <nuxt-link
                    to="yurtdisi-kiralik-villa"
                    class="nav-link text-white ls-05 py-2 py-sm-3 px-3 px-sm-4 mb-0"
                    :class="{ 'active': searchbar.tab === 2 }"
                  >
                    <span class="d-inline-block fw-medium px-2 px-sm-3 py-1">
                      Yurt Dışı Villalar
                    </span>
                  </nuxt-link>
                  <nuxt-link
                    to="otel"
                    class="nav-link-otel"
                    :class="{ 'active': searchbar.tab === 3 }"
                  >
                    <i class="icon-otel-new"></i>
                    <span class="d-inline-block fw-medium px-2 px-sm-3 py-1">
                      Otel
                    </span>
                  </nuxt-link>
                  <a :href="'tel:'+$store.state?.site_settings?.general_phone" class="Header-call">
                    <i class="icon-header-call"></i>
                    <p>
                      <span>Yardım / Destek</span>
                      {{ $store.state?.site_settings?.general_phone }}
                    </p>
                  </a>
                </div>
              </nav>
              <div class="tab-content" id="search-tabContent">
                <div
                  class="tab-pane fade"
                  :class="{ 'show active': searchbar.tab === 1 }"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <search-villa-component :key="$route.path"></search-villa-component>
                </div>
                <div
                  class="tab-pane fade"
                  :class="{ 'show active': searchbar.tab === 2 }"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <search-abroad-villa-component :key="$route.path"></search-abroad-villa-component>
                </div>
                <div
                  class="tab-pane fade"
                  :class="{ 'show active': searchbar.tab === 3 }"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <search-hotel-component :key="$route.path"></search-hotel-component>
                </div>
              </div>
            </form>
        </div>
    </section>
</template>
<script>
export default {
  props: {
    tab: {
      required: false,
      default: null
    },
  },
  name: "SearchBar",
  data() {
    return {
      searchbar: {tab: false}
    }
  },
  mounted() {
    try {
      if (this.tab) {
        this.searchbar = this.tab
      } else {
        const currentPageComponent = this.$route.matched[0].instances.default.$options.name;

        const activeComponents = {
          'DynamicPage': {tab: 1},
          'IndexPage': {tab: 1},
          'VillaListPage': {tab: 1},
          'VillaAreaListPage': {tab: 1},
          'FirsatListPage': {tab: 1},
          'KiralikVillaListPage': {tab: 1},
          'AbroadIndexPage': {tab: 2},
          'AbroadVillaListPage': {tab: 2},
          'OtelIndexPage': {tab: 3},
          'HotelListPage': {tab: 3},
        };

        if (Object.keys(activeComponents).includes(currentPageComponent)) {
          this.searchbar = activeComponents[currentPageComponent]
        }
      }
    } catch (e) {
      this.searchbar = {tab: false}
    }
  }
}
</script>
