// findVillaUrlMixin.js
export default {
  methods: {
    findVillaUrl(code) {
      const routes = this.$store.state.routes;
      return findVillaUrlByCode(code, routes);
    },
  },
};

// asyncData da kullanılmak için hazırlandı
function findVillaUrlByCode(code, routes) {
  for (const key in routes) {
    if (routes.hasOwnProperty(key) && routes[key].type === 2 && routes[key].code === code) {
      return key;
    }
  }

  return null;
}

export { findVillaUrlByCode };
