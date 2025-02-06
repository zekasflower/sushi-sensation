<script setup>
import { SOCIALS } from '@/constants'

import social_1 from '@/assets/images/contact/social-1.png'
import social_2 from '@/assets/images/contact/social-2.png'
import social_3 from '@/assets/images/contact/social-3.png'
import social_4 from '@/assets/images/contact/social-4.png'

const openingHours = [
  {
    key: 'key_1',
    day: 'Monday',
    time: '16:00 - 22:30'
  },
  {
    key: 'key_2',
    day: 'Tuesday',
    time: '16:00 - 22:30'
  },
  {
    key: 'key_3',
    day: 'Wednesday',
    time: '16:00 - 22:30'
  },
  {
    key: 'key_4',
    day: 'Thursday',
    time: '16:00 - 22:30'
  },
  {
    key: 'key_5',
    day: 'Friday',
    time: '16:00 - 22:30'
  },
  {
    key: 'key_6',
    day: 'Saturday & Sunday',
    time: '16:00 - 22:30'
  },
]

const socials = [
  {
    key: 'key_1',
    image: social_1,
    icon: 'ph:instagram-logo-light',
    url: '#'
  },
  {
    key: 'key_2',
    image: social_2,
    icon: 'ph:facebook-logo-light',
    url: '#'
  },
  {
    key: 'key_3',
    image: social_3,
    icon: 'ph:instagram-logo-light',
    url: '#'
  },
  {
    key: 'key_4',
    image: social_4,
    icon: 'ph:twitter-logo-light',
    url: '#'
  },
]
const info = [
  {
    key: 'key_1',
    title: 'Address',
    text: '23 Greenfield Avenue, Prague 120 00'
  },
  {
    key: 'key_2',
    title: 'Phone',
    text: '+49 1234 567890'
  },
  {
    key: 'key_3',
    title: 'Email',
    text: 'email@example.com'
  },
  {
    key: 'key_4',
    title: 'Follow',
    socials: SOCIALS
  }
]

</script>

<template>
  <section class="menupage flex max-xl:flex-col gap-4 xl:h-[calc(100vh-48px)] relative">
    <PageNavbar />

    <section class="flex-1 rounded-xl xl:rounded-2xl overflow-hidden relative flex flex-col justify-end">
      <img
        src="@/assets/images/contact/main.png"
        class="aspect-square md:aspect-video object-cover object-center md:max-xl:h-[600px] h-full"
      />
      
      <div class="absolute left-0 bottom-0 w-full pt-14 md:pt-20 bg-gradient-to-t from-black/60 to-transparent">
        <h1
          class="
            xl:pl-20 pb-6 md:pb-10 xl:pb-14 font-forum text-heading-h1 md:text-heading-medium 2xl:text-heading-large uppercase
            w-full text-center xl:text-left
          "
        >
          Contact
        </h1>
      </div>
    </section>

    <section class="flex-1 overflow-y-auto flex flex-col gap-y-4 max-xl:max-w-4xl mx-auto">

      <section class="flex max-md:flex-col gap-4 md:max-xl:max-h-[28rem] md:h-full 2xl:max-h-[32rem]">
        <section class="md:w-1/2 rounded-2xl border border-primary/15 p-12 flex flex-col justify-between min-h-60">
          <div class="flex items-center justify-center gap-x-4 mb-8 md:mb-12">
            <img src="@/assets/icons/diamond-border-left.svg" />
            <h2 class="font-forum uppercase text-heading-h4 -mx-8">Opening Hours</h2>
            <img src="@/assets/icons/diamond-border-right.svg" />
          </div>
          <ul class="flex flex-col gap-y-4">
            <li v-for="item in openingHours" :key="item.key" class="flex items-baseline gap-x-4">
              <span v-text="item.day" class="shrink-0" />
              <div class="h-full w-full border-b border-dashed border-primary/15 relative -top-0.5" />
              <span v-text="item.time" class="shrink-0" />
            </li>
          </ul>
        </section>

        <section class="md:w-1/2 max-md:h-[26rem] object-cover rounded-2xl grid grid-cols-2 grid-rows-2 gap-4">
          <a
            :href="social.url"
            v-for="social in socials"
            :key="social.key"
            class="relative group"
          >
            <img
              :src="social.image"
              class="h-full w-full object-cover rounded-2xl transition duration-300 group-hover:brightness-[.2]"
            />
            <Icon
              :icon="social.icon"
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl opacity-0
                      transition duration-300 group-hover:opacity-100"
            />
          </a>
        </section>

      </section>

      <section class="flex max-md:flex-col gap-4 md:max-xl:max-h-[28rem] md:h-full 2xl:max-h-[32rem]">
        <a
          href="#"
          class="md:w-1/2 flex flex-col items-end justify-end overflow-hidden relative transition duration-300 hover:brightness-125 group"
        >
          <img
            src="@/assets/images/contact/route.png"
            class="aspect-square xl:aspect-auto object-cover w-full xl:h-full max-w-none rounded-xl object-center"
          />

          <div class="absolute bottom-0 right-0">
            <img src="@/assets/icons/rounded-edge.svg" class="absolute bottom-full right-0 w-6" />
  
            <span class="flex items-center gap-x-2 bg-dark pt-3 pl-6  rounded-tl-3xl uppercase font-forum leading-4 tracking-[1px]">
              <span>Show Route</span>

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
        </a>

        <section class="md:w-1/2 rounded-2xl border border-primary/15 p-12 flex flex-col justify-between">
          <div class="flex items-center justify-center gap-x-4 mb-8 md:mb-12">
            <img src="@/assets/icons/diamond-border-left.svg" />
            <h2 class="font-forum uppercase text-heading-h4 -mx-8">Get in touch</h2>
            <img src="@/assets/icons/diamond-border-right.svg" />
          </div>
          
          <section class="flex flex-col gap-y-6">
            <section v-for="block in info" :key="block.key" class="flex justify-between">
              <h4 v-text="block.title" class="text-meta uppercase" />
              <p v-text="block.text" v-if="block.text" class="w-48 text-end" />
              <ul v-else class="flex items-center gap-x-3 text-lg">
                <li v-for="social in block.socials" :key="social.key">
                  <a
                    :href="social?.url || '#'"
                    :target="social?.url && '_blank'"
                  >
                    <Icon :icon="social.icon" />
                  </a>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>

      <PageFooter class="mt-4 2xl:mt-auto" /> 
    </section>
  </section>
</template>