import axios from "axios"


const api = axios.create({
  baseURL:process.env.URL_REST_API,
})


export default api
