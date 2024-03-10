import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.100.89:3333'
})

export { api }