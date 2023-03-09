export default {
  addFavorite({ commit }, villaCode) {
    commit('addFavorite', villaCode)
  },
  removeFavorite({ commit }, villaCode) {
    commit('removeFavorite', villaCode)
  },
  initializeFavorites({ commit }) {
    commit('initializeFavorites')
  }
}
