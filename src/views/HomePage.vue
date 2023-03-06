<script setup>
import BaseCard from '@/components/BaseCard.vue'
import useVillagers from '@/composables/useVillagers'

const { villagers, fetchVillagers } = useVillagers()
</script>

<template>
    <button
      title="Load Villagers"
      class="z-90 fixed bottom-8 left-96 flex px-10 h-20 w-fit items-center
      justify-center rounded-xl bg-green-600 text-4xl text-white 
      drop-shadow-lg duration-300 hover:scale-110 hover:bg-green-700 
      hover:drop-shadow-2xl"
      @click="fetchVillagers"
    >
      Load a Villager
    </button>

  <main class="min-h-screen bg-orange-300">
    <div class="container mx-auto grid grid-cols-4 gap-4 py-8 text-center">
      <BaseCard
        v-for="villager in villagers"
        :key="villager.id"
        :villager="villager"
      />
    </div>
  </main>
</template>
