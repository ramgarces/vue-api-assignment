import axios from 'axios'
import { ref } from 'vue'

const instance = axios.create({
    baseURL: 'https://acnhapi.com/v1'
})

const useApi = () => {
    return { instance }
}

export default useApi