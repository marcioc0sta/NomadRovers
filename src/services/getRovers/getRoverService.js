import {withKey} from "../HttpService";

const ROVERS_URL = process.env.VUE_APP_ROVERS

export const getRovers = async () => {
  try {
    const { data } = await withKey.get(ROVERS_URL)
    return data
  } catch (err) {
    console.log(err)
  }
}

