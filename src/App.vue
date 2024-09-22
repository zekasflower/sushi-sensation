<script setup>
import { onMounted, watch, computed, ref } from 'vue'
import { useRoute } from 'vue-router'

import { useGlobalStore } from '@/stores/GlobalStore'

const globalStore = useGlobalStore()

const route = useRoute()

onMounted(() => {
  globalStore.windowWidth = window.innerWidth
  globalStore.windowHeight = window.innerHeight
  window.addEventListener('resize', () => {
    globalStore.windowWidth = window.innerWidth
    globalStore.windowHeight = window.innerHeight
  })
})
</script>


<template>
  <img
    src="@/assets/images/bg.png"
    class="fixed inset-0 -z-100 h-full object-center object-cover max-w-none"
    v-if="route.name !== 'homepage'"
  />


  <PageNavbar />

  <RouterView />
</template>