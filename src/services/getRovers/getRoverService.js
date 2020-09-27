import {withKey} from "../HttpService";

const ROVERS_URL = import.meta.env.VITE_ROVERS

export const getRovers = async () => {
  try {
    const { data } = await withKey.get(ROVERS_URL)
    return data
  } catch (err) {
    console.log(err)
  }
}

