<script setup>
import { RESTAURANT_MENU_TABS, RESTAURANT_MENU } from '@/constants'

// const 

</script>

<template>
  <section class="menupage flex gap-x-4 h-[calc(100vh-48px)]">
    <section class="flex-1 rounded-2xl overflow-hidden relative flex flex-col justify-end">
      <img
        src="@/assets/images/menupage/main.png"
        class="absolute inset-0 object-cover object-center h-full w-full max-w-none -z-1"
      />
      
      <div class="flex items-end justify-between pt-20 bg-gradient-to-t from-black/60 to-transparent">
        <h1 class="pl-20 pb-14 font-forum text-heading-xlarge uppercase w-[800px]">
          Menu
        </h1>
      </div>
    </section>

    <section class="flex-1 overflow-y-auto">
      <section class="border border-primary/15 rounded-2xl p-6">
        
      </section>
      
      <PageFooter />
    </section>
  </section>
</template>