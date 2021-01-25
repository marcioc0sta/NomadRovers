import requestStatus from "../../enum/requestStatus";
import { getRovers } from "@/services/getRovers/getRoverService";

export function setRovers ({ commit }) {
  commit('setRoverStatus', requestStatus.LOADING)
  getRovers().then(data => {
    const { rovers } = data
    commit('setRoverStatus', requestStatus.SUCCEEDED)
    commit('setRoversData', rovers)
  }).catch(err => {
    commit('setRoverStatus', requestStatus.FAILED)
    console.log(err)
  })
}

export function setActive ({ commit }, active) {
  commit('setActiveRover', active)
}