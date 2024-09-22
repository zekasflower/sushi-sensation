<script setup>
import { SOCIALS } from '@/constants'

import mini1 from '@/assets/images/homepage/mini-1.png'
import mini2 from '@/assets/images/homepage/mini-2.png'
import mini3 from '@/assets/images/homepage/mini-3.png'

const routesList = [
  {
    key: 'menu_key',
    image: mini1,
    text: 'Menu',
    route: 'menu',
  },
  {
    key: 'reservation_key',
    image: mini2,
    text: 'Reservation',
    route: 'reservation',
  },
  {
    key: 'contact_key',
    image: mini3,
    text: 'Our Restaurant',
    route: 'contact',
  },
]
</script>

<template>
  <section class="homepage flex gap-x-4 h-[calc(100vh-48px)] overflow-hidden">
    <section class="flex-1 rounded-2xl overflow-hidden relative flex flex-col justify-end">
      <img
        src="@/assets/images/homepage/main.png"
        class="absolute inset-0 object-cover object-center h-full w-full max-w-none -z-1"
      />
      
      <div class="flex items-end justify-between pt-48 bg-gradient-to-t from-black/60 to-transparent">
        <h1 class="pl-20 pb-14 font-forum text-heading-xlarge uppercase w-[800px]">
          Sushi Sensation
        </h1>
        <div class="relative">
          <img src="@/assets/icons/rounded-edge.svg" class="absolute -top-10 right-0" />

          <ul class="flex items-center gap-x-2 bg-dark pt-6 pl-6 pr-4 pb-4 rounded-tl-3xl">
            <li v-for="social in SOCIALS" :key="social.key">
              <a
                :href="social?.url || '#'"
                :target="social?.url && '_blank'"
                class="
                  flex items-center justify-center w-9 h-9 border border-primary/15
                  rounded-full bg-dark-2/50 transition duration-300 hover:bg-primary hover:text-dark
                "
              >
                <Icon :icon="social.icon" class="text-lg" />
              </a>
            </li>
          </ul>

          <img src="@/assets/icons/rounded-edge.svg" class="absolute -left-10 bottom-0" />
        </div>
      </div>
    </section>

    <section class="flex-none w-[22%] flex flex-col">
      <ul class="flex flex-col h-full gap-y-4">
        <li
          v-for="item in routesList"
          :key="item.key"
          class="flex flex-col items-end justify-end flex-1 h-1/3 overflow-hidden relative rounded-xl"
        >
          <img
            :src="item.image"
            class="absolute inset-0 object-cover h-full w-full max-w-none -z-1"
            :class="item.text === 'Reservation' ? 'object-center' : 'object-[50%_80%]'"
          />
          <div class="relative">
          <img src="@/assets/icons/rounded-edge.svg" class="absolute -top-10 right-0" />

          <router-link :to="item.route"  class="flex items-center gap-x-2 bg-dark pt-3 pl-6  rounded-tl-3xl uppercase font-forum leading-4 tracking-[1px] group">
            <span v-text="item.text" />
            <div class="flex items-center justify-center w-8 h-8 border border-primary/15
                  rounded-full bg-dark-2/50 transition duration-300 group-hover:bg-primary group-hover:text-dark">
              <Icon icon="ph:arrow-right-light" />
            </div>
          </router-link>

          <img src="@/assets/icons/rounded-edge.svg" class="absolute -left-10 bottom-0" />
        </div>
        </li>
      </ul>
    </section>
  </section>
</template>