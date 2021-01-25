export function setRoverStatus(state, payload) {
  state.rovers.status = payload
}

export function setRoversData(state, payload) {
  state.rovers.data = payload
}

export function setActiveRover(state, payload) {
  const rovers = state.rovers.data
  state.activeRover = rovers.find(item => item.id.toString() === payload)
}