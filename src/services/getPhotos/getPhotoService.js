import {withKey} from "../HttpService";

const ROVERS_URL = process.env.VUE_APP_ROVERS

export const getPhotos = async (rover, params) => {
  const { sol, camera } = params
  try {
    const { data } = await withKey.get(`${ROVERS_URL}/${rover}/photos?`, {
      params: {
        sol,
        camera
      }
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

