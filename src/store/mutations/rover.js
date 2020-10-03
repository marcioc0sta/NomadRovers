export function setRoverStatus(state, payload) {
  state.rovers.status = payload
}
export function setRoversData(state, payload) {
  state.rovers.data = payload
}

export function setActiveRover(state, payload) {
  state.activeRover = payload
}