import axios from 'axios'

const instance = axios.create({
    baseURL: "https://shortvideo-gryz.herokuapp.com"
})

export default instance