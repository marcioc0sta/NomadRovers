import {createStore} from "vuex";
import requestStatus from "../enum/requestStatus";
import { setRovers, setActive } from "./actions/setRovers";
import { setRoverStatus, setRoversData, setActiveRover } from "./mutations/rover"
import { parsedRovers } from "./getters/getPaersdRovers"

const store = createStore({
  state () {
    return {
      rovers: {
        status: requestStatus.IDLE,
        data: []
      },
      activeRover: '',
    }
  },
  mutations: { setRoverStatus, setRoversData, setActiveRover },
  getters: { parsedRovers },
  actions: { setRovers, setActive }
})

export default store
