export function parsedRovers(state) {
  return state.rovers.data.map(rover => ({
    key: rover.name,
    value: rover.id
  }))
}