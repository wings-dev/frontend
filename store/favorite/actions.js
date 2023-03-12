export default {
  addFavorite({commit, dispatch}, villaCode) {
    alert('favoriye eklendi')
    commit('addFavorite', villaCode)
    dispatch('updateFavorites')
  },
  removeFavorite({commit, dispatch}, villaCode) {
    alert('favoriden eklendi')
    commit('removeFavorite', villaCode)
    dispatch('updateFavorites')
  },
  initializeFavorites({commit}) {
    commit('initializeFavorites')
  },
  async updateFavorites({state, commit}) {
    if (state.updateTimeoutId) {
      clearTimeout(state.updateTimeoutId)
    }

    const controller = new AbortController()
    const signal = controller.signal
    commit('setUpdateController', controller)

    const timeoutId = setTimeout(async () => {
      try {
        await this.$axios.$post('/visitor/api',
          {
            favorites: state.favorites,
            visitorId: localStorage.getItem('visitorId'),
            siteId: process.env.SITE
          })
        commit('setUpdateTimeoutId', null)
      } catch (error) {
        console.error(error)
      }
    }, 10000)

    commit('setUpdateTimeoutId', timeoutId)
  }
}
