<script setup>
import { useRoute } from 'vue-router'

import useVillagers from '@/composables/useVillagers'

const { currentVillager } = useVillagers()

const route = useRoute()
const props = defineProps({
  villager: {
    type: Object,
    default: () => ({
      id: -1,
      name: 'Unknown',
      imageUrl: 'https://via.placeholder.com/150', 
    }),
  },
})

</script>

<template>
  <RouterLink
    :to="`/villager/${currentVillager}`"
    class="rounded-lg bg-white shadow-lg"
  >
  <div
      v-if="villager"
      class="flex flex-col items-center justify-center gap-6"
    >
      <img :src="props.villager.image_uri" :alt="props.villager.name" />
      <h1 class="text-white-800 text-6xl font-bold">
        Hi, I'm {{ props.villager.name["name-USen"] }}
      </h1>
    </div>
    <!-- <img 
      class="w-full rounded-t-lg object-cover"
      :src="props.villager.image_uri"
    />
    <div class="p-4">
      <h2 class="text-2xl font-semibold text-gray-800">
        {{ props.villager.name["name-USen"] }}
      </h2>
    </div> -->
  </RouterLink>
</template>
