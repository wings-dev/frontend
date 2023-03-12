export default {
  initializeVisitorId({ commit }) {
    let id = localStorage.getItem('visitorId')
    if (!id) {
      id = Math.random().toString(36).substr(2, 9)
      localStorage.setItem('visitorId', id)
    }
    commit('setVisitorId', id)
  },
  showLoginModal() {
    $('#loginModal').modal('show')
  },
  hideLoginModal() {
    $('#loginModal').modal('hide')
  },
  showRegisterModal() {
    $('#signupModal').modal('show')
  },
  hideRegisterModal() {
    $('#signupModal').modal('hide')
  },
  showLoginCodeModal() {
    $('#loginCodeModal').modal('show')
  },
  hideLoginCodeModal() {
    $('#loginCodeModal').modal('hide')
  },
  showPreReservationModal() {
    $('#reservationModal').modal('show')
  },
  hidePreReservationModal() {
    $('#reservationModal').modal('hide')
  },
  showReservationCodeModal() {
    $('#reservationCodeModal').modal('show')
  },
  hideReservationCodeModal() {
    $('#reservationCodeModal').modal('hide')
  },
  showCallModal() {
    $('#callModal').modal('show')
  },
  showFavModal() {
    $('#favModal').modal('show')
  },
  showCloseVillaModal() {
    $('#closeVillaModal').modal('show')
  },

}
