import {createStore} from "vuex";
import requestStatus from "../enum/requestStatus";
import { setRovers, setActive } from "./actions/setRovers";
import { queryPhotos, resetPhotos } from "./actions/queryPhotos"
import { setRoverStatus, setRoversData, setActiveRover } from "./mutations/rover"
import { setPhotoStatus, setPhotosData } from './mutations/photos'
import { parsedRovers } from "./getters/getPaersdRovers"

const store = createStore({
  state () {
    return {
      rovers: {
        status: requestStatus.IDLE,
        data: []
      },
      photos: [],
      activeRover: {},
    }
  },
  mutations: {
    setRoverStatus,
    setRoversData,
    setActiveRover,
    setPhotoStatus,
    setPhotosData
  },
  getters: { parsedRovers },
  actions: { setRovers, setActive, queryPhotos, resetPhotos }
})

export default store
