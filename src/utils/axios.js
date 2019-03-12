// axios instance
import axios from 'axios'

const instance = axios.create({
  // change this url to your api
  baseURL: 'http://localhost:5000/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})

export default instance
