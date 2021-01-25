import axios from 'axios'

const withKey = axios.create()

withKey.interceptors.request.use(config => {
  config.params = {
    api_key: `${process.env.VUE_APP_API_KEY}`,
    ...config.params
  }

  return config
})

export { withKey }
