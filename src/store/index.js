import {createStore} from "vuex";
import requestStatus from "../enum/requestStatus";
import { setRovers } from "./actions/setRovers";
import { setRoverStatus, setRoversData } from "./mutations/rover"
import { parsedRovers } from "./getters/getPaersdRovers"

const store = createStore({
  state () {
    return {
      rovers: {
        status: requestStatus.IDLE,
        data: []
      }
    }
  },
  mutations: { setRoverStatus, setRoversData },
  getters: { parsedRovers },
  actions: { setRovers }
})

export default store
