export default {
  addFavorite({ commit, dispatch }, villaCode) {
    // alert('favoriye eklendi')
    this.$toast.success("<p>Villa favori listenize eklendi! <span>Favorilerilerim sayfasından favorilerinizi düzenleyebilirsiniz.</span> </p>", {
      className:'custom-toast success-toast',
      icon: {
        name: 'icon-reservation-success',
      },
      action : {
        icon:'icon-toast-exit',
        onClick : (e, toastObject) => {
            toastObject.goAway(0);
        }
    }
    });
    commit("addFavorite", villaCode);
    dispatch("updateFavorites");
  },
  removeFavorite({ commit, dispatch }, villaCode) {
    this.$toast.error("<p>Villa favori listenizden çıkarıldı! <span>Favorilerilerim sayfasından favorilerinizi düzenleyebilirsiniz.</span> </p>", {
      className:'custom-toast error-toast',
      icon: {
        name: 'icon-reservation-cancel',
      },
      action : {
        icon:'icon-toast-exit',
        onClick : (e, toastObject) => {
            toastObject.goAway(0);
        }
    }
    })
    commit("removeFavorite", villaCode);
    dispatch("updateFavorites");
  },
  initializeFavorites({ commit }) {
    commit("initializeFavorites");
  },
  async updateFavorites({ state, commit }) {
    if (state.updateTimeoutId) {
      clearTimeout(state.updateTimeoutId);
    }

    const controller = new AbortController();
    const signal = controller.signal;
    commit("setUpdateController", controller);

    const timeoutId = setTimeout(async () => {
      try {
        await this.$axios.$post("/visitor/api", {
          favorites: state.favorites,
          visitorId: localStorage.getItem("visitorId"),
          siteId: process.env.SITE,
        });
        commit("setUpdateTimeoutId", null);
      } catch (error) {
        console.error(error);
      }
    }, 10000);

    commit("setUpdateTimeoutId", timeoutId);
  },
};
