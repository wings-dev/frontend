export default {
  setSettings(state, settings) {
    state.site_settings = settings
  },
  setVisitorId(state, id) {
    state.visitorId = id
  },
  setLoginCodeModalData(state, data) {
    state.loginCodeModalData = data
  },
  setReservationModalData(state, newData) {
    state.reservationModalData = { ...state.reservationModalData, ...newData };
  }
}
