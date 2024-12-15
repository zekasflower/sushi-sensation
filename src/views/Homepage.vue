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
    key: 'about_key',
    image: mini3,
    text: 'Our Restaurant',
    route: 'about',
  },
]
</script>

<template>
  <section class="homepage flex max-xl:flex-col gap-4 xl:h-[calc(100vh-48px)] overflow-hidden">
    <section class="flex-1 rounded-xl md:rounded-2xl overflow-hidden relative flex flex-col justify-end">
      <video
        src="@/assets/videos/homepage.mp4" loop muted autoplay 
        class="aspect-square md:aspect-video object-cover object-center md:h-[600px] xl:h-full"
      />
      
      <div
        class="
          md:flex flex-col xl:flex-row items-end xl:justify-between pt-32 md:pt-48 bg-gradient-to-t from-black/60 to-transparent
          absolute left-0 bottom-0 w-full
        "
      >

        <h1
          class="
            font-forum text-heading-h1 md:text-heading-medium xl:text-heading-large 2xl:text-heading-xlarge xl:pl-20 pb-6 md:pb-0 xl:pb-14
            uppercase w-full xl:w-[800px] text-center xl:text-left
          "
        >
          Sushi <br> Sensation
        </h1>
        
        <div class="relative hidden md:block w-fit">
          <img src="@/assets/icons/rounded-edge.svg" class="absolute -top-8 right-0 w-8" />

          <ul class="flex items-center gap-x-2 bg-dark pt-4 pl-6 pr-4 pb-2 rounded-tl-3xl">
            <li v-for="social in SOCIALS" :key="social.key">
              <a
                :href="social?.url || '#'"
                :target="social?.url && '_blank'"
                class="
                  flex items-center justify-center w-8 h-8 border border-primary/15
                  rounded-full bg-dark-2/50 transition duration-300 hover:bg-primary/15
                "
              >
                <Icon :icon="social.icon" />
              </a>
            </li>
          </ul>

          <img src="@/assets/icons/rounded-edge.svg" class="absolute -left-8 -bottom-px w-8" />
        </div>
      </div>
    </section>

    <section class="flex-none xl:w-[23%] flex flex-col h-full">
      <ul class="flex flex-col md:flex-row xl:flex-col h-full gap-4">
        <template v-for="item in routesList" :key="item.key">

          <router-link
            :to="item.route"
            class="flex flex-col items-end justify-end xl:h-1/3 overflow-hidden flex-1 relative hover duration-300 hover:brightness-125 group"
          >

            <img
              :src="item.image"
              class="aspect-square xl:aspect-auto object-cover w-full xl:h-full max-w-none rounded-xl"
              :class="item.text === 'Reservation' ? 'object-center' : 'object-[50%_80%]'"
            />

            <div class="absolute bottom-0 right-0">
              <img src="@/assets/icons/rounded-edge.svg" class="absolute bottom-full right-0 w-6" />
    
              <span class="flex items-center gap-x-2 bg-dark pt-3 pl-6  rounded-tl-3xl uppercase font-forum leading-4 tracking-[1px]">
                <span v-text="item.text" />

                <div
                  class="
                    flex items-center justify-center w-8 h-8 border border-primary/15
                    rounded-full bg-dark-2/50 transition duration-300 group-hover:bg-primary/5
                  "
                >
                  <Icon icon="ph:arrow-right-light" />
                </div>
              </span>
    
              <img src="@/assets/icons/rounded-edge.svg" class="absolute right-full -bottom-px w-6" />
            </div>

          </router-link>

        </template>
      </ul>
    </section>

    <PageFooter class="xl:hidden" />
  </section>
</template>