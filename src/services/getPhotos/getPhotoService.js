import {withKey} from "../HttpService";

const ROVERS_URL = process.env.VUE_APP_ROVERS

export const getPhotos = async (rover, params) => {
  try {
    const { data } = await withKey.get(`${ROVERS_URL}/${rover}/photos`, {params} )
    return data
  } catch (err) {
    console.log(err)
  }
}

