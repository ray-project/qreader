// axios instance
import axios from 'axios'

const instance = axios.create({
  // change this url to your api
  baseURL: 'http://ec2-54-165-106-231.compute-1.amazonaws.com:5000/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})

export default instance
