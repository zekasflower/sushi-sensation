<script setup>
import { ref } from 'vue'

const dateInput = ref()

const clickDateInput = (e) => {
  dateInput.value.showPicker()
  // console.log(e.target)
}

</script>

<template>
  <section class="menupage flex max-xl:flex-col gap-4 xl:h-[calc(100vh-48px)] relative">
    <PageNavbar />

    <section class="flex-1 rounded-xl xl:rounded-2xl overflow-hidden relative flex flex-col justify-end">
      <img
        src="@/assets/images/reservationpage/main.png"
        class="aspect-square md:aspect-video object-cover object-center md:max-xl:h-[600px] h-full"
      />
      
      <div class="absolute left-0 bottom-0 w-full pt-14 md:pt-20 bg-gradient-to-t from-black/60 to-transparent">
        <h1
          class="
            xl:pl-20 pb-6 md:pb-10 xl:pb-14 font-forum text-heading-h1 md:text-heading-medium 2xl:text-heading-large uppercase
            w-full text-center xl:text-left
          "
        >
          Book <br /> a Table
        </h1>
      </div>
    </section>

    <section class="flex-1 overflow-y-auto flex flex-col">
      <section class="border border-primary/15 rounded-2xl p-6 xl:p-8 h-full">
        
        <section class="mb-6 md:mb-12 2xl:mb-20">
          <div class="flex items-center justify-center gap-x-4 mb-4">
            <img src="@/assets/icons/diamond-border-left.svg" />
            <h2 class="font-forum uppercase text-heading-h3 md:text-heading-h2">Reservation</h2>
            <img src="@/assets/icons/diamond-border-right.svg" />
          </div>
          <p class="max-w-[500px] mx-auto text-center text-medium">
            Secure your spot at Qitchen, where exceptional sushi and a remarkable dining experience await.
          </p>
        </section>
        
        <form class="flex flex-col gap-y-4 max-w-2xl mx-auto">
          <input type="text" placeholder="Name" class="main-controller" />
          <input type="tel" placeholder="Phone Number" class="main-controller" />
          <input type="email" placeholder="Email" class="main-controller" />
          <!-- XXX TODO: GUESTS DATE TIME INPUTS -->
          <!-- <section class="flex max-md:flex-col items-stretch gap-4">
            <input type="number" placeholder="Guests" class="main-controller" min="1" max="20" />

            <input type="date" placeholder="Date" class="main-controller" />
            <label for="#date-id" @click="clickDateInput">
              <input type="date" placeholder="Date" class="main-controller" @click="clickDateInput" />
              btngaaan
              <input type="date" placeholder="Date" class="main-controller opacity-0" id="date-id" ref="dateInput" />
            </label>


            <input type="time" placeholder="Time" class="main-controller" />
          </section> -->

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
  @apply w-full bg-dark-2/50 py-4 px-6 rounded-[10px] border border-primary/15 text-primary transition
  duration-300 focus:bg-dark-2/80 focus:border-primary/50 placeholder:text-primary/50
}
</style>