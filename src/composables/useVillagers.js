import { ref } from 'vue'
import useApi from '@/composables/useApi'


const villagers = ref([])
const api = useApi()
let currentVillager = 1

const useVillagers = () => {
    const fetchVillagers = async (id) => {
        const { data } = await api.instance.get(`/villagers/${currentVillager}`)
        villagers.value.push(data)
        currentVillager = currentVillager + 12
    }
    
    return { villagers, fetchVillagers, currentVillager }
}

export default useVillagers