import axios from 'axios'

const withKey = axios.create()

withKey.interceptors.request.use(config => {
    config.auth = {
        api_key: `${import.meta.env.VITE_API_KEY}`
    }

    return config
})

export { withKey }
