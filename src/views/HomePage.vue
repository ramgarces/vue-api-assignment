<script setup>
import BaseCard from '@/components/BaseCard.vue'
import useVillagers from '@/composables/useVillagers'

const { villagers, fetchVillagers } = useVillagers()
</script>

<template>
  <button
    title="Load Villagers"
    class="z-90 fixed bottom-8 right-8 flex h-20 w-20 items-center
    justify-center rounded-full bg-green-600 text-4xl text-white 
    drop-shadow-lg duration-300 hover:scale-110 hover:bg-green-700 
    hover:drop-shadow-2xl"
    @click="fetchVillagers"
  >
    🚀
  </button>

  <main class="min-h-screen bg-gradient-to-r from-fuchsia-900 to-red-700">
    <div class="container mx-auto grid grid-cols-8 gap-4 py-8">
      <BaseCard
        v-for="villager in villagers"
        :key="villager.id"
        :villager="villager"
      />
    </div>
  </main>
</template>
