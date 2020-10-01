import {createStore} from "vuex";
import requestStatus from "../enum/requestStatus";
import { getRovers } from '../services/getRovers/getRoverService'

const store = createStore({
  state () {
    return {
      rovers: {
        status: requestStatus.IDLE,
        data: []
      }
    }
  },
  mutations: {
    setRoverStatus(state, payload) {
      state.rovers.status = payload
    },
    setRoversData(state, payload) {
      state.rovers.data = payload
    }
  },
  getters: {
    parsedRovers: state => {
      return state.rovers.data.map(rover => ({
        key: rover.name,
        value: rover.id
      }))
    }
  },
  actions: {
    setRovers({ commit }) {
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
  }
})

export default store
