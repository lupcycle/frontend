import axios from "axios";

axios.defaults.withCredentials = true;

const APIServer = "http://localhost:8000";

const api = {
  
  config: {
    baseURL: APIServer,
    headers: {
      'Content-Type' : 'application/json; charset=UTF-8',
      'Authorization': ''
    }
  },

  setAuthorizationHeader(token: string) {
    this.config.headers.Authorization = `bearer ${token}`
    this.instance = axios.create(this.config)
  },

  instance: axios.create()
}

api.instance = axios.create(api.config)

export default api;