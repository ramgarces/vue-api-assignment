import { ref } from 'vue'

const villagers = ref([])

const useVillagers = () => {
    const fetchVillagers = () => {
        for (let index = 0; index < 2; index++) {
            villagers.value.push({
                id: villagers.value.length,
                name: `Villager ${villagers.value.length}`,
                imageUrl: 'https://via.placeholder.com/400x800'
            })
        }
    }
    return { villagers, fetchVillagers }
}

export default useVillagers