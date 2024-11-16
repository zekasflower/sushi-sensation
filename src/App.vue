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
    class="opacity-20 fixed top-0 left-0 -z-100 w-full h-full object-cover object-center max-w-none"
    v-if="route.name !== 'homepage'"
  />

  <PageNavbar />

  <RouterView />
</template>