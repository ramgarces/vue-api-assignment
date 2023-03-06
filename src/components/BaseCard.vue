<script setup>
const props = defineProps({
  villager: {
    type: Object,
    default: () => ({
      id: -1,
      name: 'Unknown',
      species: 'Unknown',
      saying: 'Blank',
      iconUrl: 'https://via.placeholder.com/150',
      imageUrl: 'https://via.placeholder.com/150', 
    }),
  },
})
</script>

<template>
  <RouterLink
    :to="`/villager/${props.villager.id}`"
    class="rounded-lg bg-white shadow-lg flex-col"
  >
    <img 
      class="w-full rounded-t-lg object-cover"
      :src="props.villager.image_uri"
    />
    <div class="p-4">
      <h2 class="text-2xl font-semibold text-gray-800">
        {{ props.villager.name["name-USen"] }}
      </h2>
      <h2 class="text-2xl font-thin text-gray-800">
        <b class="font-semibold">Species:</b> {{ props.villager.species }}
      </h2>
      <h2 class="text-2xl font-thin text-gray-800">
        <b class="font-semibold">Quote:</b> {{ props.villager.saying }}
      </h2>
      <img 
      class="w-full object-cover"
      :src="props.villager.icon_uri"
      />
    </div>
  </RouterLink>
</template>