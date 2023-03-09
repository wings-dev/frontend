export default {
  addFavorite(state, villaCode) {
    state.favorites.push(villaCode)
    state.lastUpdated = Date.now()
    localStorage.setItem('favorites', JSON.stringify(state.favorites))
  },
  removeFavorite(state, villaCode) {
    state.favorites = state.favorites.filter(code => code !== villaCode)
    state.lastUpdated = Date.now()
    localStorage.setItem('favorites', JSON.stringify(state.favorites))
  },
  setUpdateTimeoutId(state, timeoutId) {
    state.updateTimeoutId = timeoutId
  },
  setUpdateController(state, controller) {
    state.updateController = controller
  },
  initializeFavorites(state) {
    if (localStorage.getItem('favorites')) {
      state.favorites = JSON.parse(localStorage.getItem('favorites'))
    }
  }
}
