import axios from 'axios'

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return error
  }
)

axios.interceptors.response.use((res) => {
  return res
})

// interface Http{
//   get(url:string,params?:unknown):Promise<>
// }

export default axios
