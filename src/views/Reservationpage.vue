<script setup>
import { RESTAURANT_MENU_FILTERS, RESTAURANT_MENU } from '@/constants'

// const 

const clickDateInput = (e) => {
  e.target.showPicker()
  console.log(e.target)
}

</script>

<template>
  <section class="menupage flex gap-x-4 h-[calc(100vh-48px)]">
    <section class="flex-1 rounded-2xl overflow-hidden relative flex flex-col justify-end">
      <img
        src="@/assets/images/reservationpage/main.png"
        class="absolute inset-0 object-cover object-center h-full w-full max-w-none -z-1"
      />
      
      <div class="flex items-end justify-between pt-20 bg-gradient-to-t from-black/60 to-transparent">
        <h1 class="pl-20 pb-14 font-forum text-heading-large uppercase w-[800px]">
          Book <br /> a Table
        </h1>
      </div>
    </section>

    <section class="flex-1 overflow-y-auto flex flex-col">
      <section class="border border-primary/15 rounded-2xl py-8 px-24 h-full">
        
        <section class="mb-20">
          <div class="flex items-center justify-center gap-x-4 mb-4">
            <img src="@/assets/icons/diamond-border-left.svg" />
            <h2 class="font-forum uppercase text-heading-h2">Reservation</h2>
            <img src="@/assets/icons/diamond-border-right.svg" />
          </div>
          <p class="w-[500px] mx-auto text-center text-medium">
            Secure your spot at Qitchen, where exceptional sushi and a remarkable dining experience await.
          </p>
        </section>
        
        <form class="flex flex-col gap-y-4">
          <input type="text" placeholder="Name" class="main-controller" />
          <input type="tel" placeholder="Phone Number" class="main-controller" />
          <input type="email" placeholder="Email" class="main-controller" />
          <section class="flex items-stretch gap-x-4">
            <input type="number" placeholder="Guests" class="main-controller" />

            <input type="date" placeholder="Date" class="main-controller" @click="clickDateInput" />


            <input type="time" placeholder="Time" class="main-controller" />
          </section>

          <button class="bg-primary text-dark text-meta uppercase py-4 rounded-lg" @click.prevent>
            Reserve
          </button>
        </form>
      </section>
      
      <PageFooter class="mt-4" />
    </section>
  </section>
</template>

<style scoped>
.main-controller {
  @apply w-full bg-dark-2/50 py-4 px-6 rounded-[10px] border border-primary/15 text-primary transition duration-300 focus:bg-dark-2/80 focus:border-primary/50 placeholder:text-primary/50
}
</style>