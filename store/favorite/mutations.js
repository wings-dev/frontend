export default {
  addFavorite(state, villaCode) {
    state.favorites.push(villaCode)
    localStorage.setItem('favorites', JSON.stringify(state.favorites))
  },
  removeFavorite(state, villaCode) {
    state.favorites = state.favorites.filter(code => code !== villaCode)
    localStorage.setItem('favorites', JSON.stringify(state.favorites))
  },
  initializeFavorites(state) {
    if (localStorage.getItem('favorites')) {
      state.favorites = JSON.parse(localStorage.getItem('favorites'))
    }
  }
}
