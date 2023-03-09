export default {
  addFavorite({commit, dispatch}, villaCode) {
    commit('addFavorite', villaCode)
    dispatch('updateFavorites')
  },
  removeFavorite({commit, dispatch}, villaCode) {
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
        await this.$axios.$post('https://office.wingss.xyz/chat/api',
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
