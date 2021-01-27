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
    if(data.photos.length === 0) {
      commit('setPhotoStatus', requestStatus.NO_DATA)
      commit('setPhotosData', [])
      return
    }
    commit('setPhotoStatus', requestStatus.SUCCEEDED)
    commit('setPhotosData', data.photos)
  }).catch(err => {
    console.log(err)
    commit('setPhotoStatus', requestStatus.FAILED)
  })
}

export function resetPhotos({commit}) {
  commit('setPhotosData', [])
}