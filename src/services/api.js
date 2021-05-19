import axios from 'axios'

const api = axios.create({ baseURL: "http://confiseriemkapi.herokuapp.com/api/" })

export default api