import requestStatus from "../../enum/requestStatus";
import { getPhotos } from "@/services/getPhotos/getPhotoService";


export function queryPhotos({ commit, state }, params) {
  commit('setPhotoStatus', requestStatus.LOADING)
  const rover = state.activeRover.name
  const { marsSun: sol, selectedCam: camera } = params
  const queryData = {
    sol,
    camera
  }
  getPhotos(rover, queryData).then(data => {
    commit('setPhotoStatus', requestStatus.SUCCEEDED)
    commit('setPhotosData', data.photos)
  })
}