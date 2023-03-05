import axios from 'axios'
import { ref } from 'vue'

const instance = axios.create({
    baseURL: 'http://acnhapi.com/'
})

const useApi = () => {
    return { instance }
}

export default useApi