<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import { onClickOutside, useEventListener } from '@vueuse/core'

const route = useRoute()

const navOpened = ref(false)

const navTarget = ref(null)

onClickOutside(navTarget, () => navOpened.value = false)
useEventListener(document, 'keyup', (e) => {
  e.preventDefault()
  if (e.key === 'Escape') {
    navOpened.value = false
  }
})

const ROUTES = {
  home: {
    key: 'home_key',
    text: 'Home',
    route: '/',
  },
  menu: {
    key: 'menu_key',
    text: 'Menu',
    route: '/menu',
  },
  reservation: {
    key: 'reservation_key',
    text: 'Reservation',
    route: '/reservation',
  },
  about: {
    key: 'about_key',
    text: 'About',
    route: '/about',
  },
  contact: {
    key: 'contact_key',
    text: 'Contact',
    route: '/contact',
  },
  blog: {
    key: 'blog_key',
    text: 'Blog',
    route: '/blog',
  },
}

</script>

<template>
  <section class="relative z-100">
    <nav 
      class="absolute top-12 left-1/2 max-xl:-translate-x-1/2 xl:left-12 p-2 rounded-lg bg-dark w-max"
      :class="[
        route.path === ROUTES.menu.route && 'max-2xl:-translate-x-1/2 max-2xl:!left-1/2 2xl:left-12'
      ]"
    >
      <section class="flex items-center gap-x-3">
        <button
          class="
            border border-primary/15 rounded-lg w-10 h-10 flex items-center justify-center
            transition duration-500 hover:border-primary/25 hover:bg-primary/5
          "
          @click="navOpened = true"
        >
          <Icon icon="heroicons:bars-3" class="text-2xl" />
        </button>
  
        <router-link to="/">
          <img src="@/assets/images/logo.svg" class="max-md:w-24" />
        </router-link>
  
        <section class="flex items-center gap-x-1 text-xs uppercase tracking-[1px]">
          <ul class="flex items-center gap-x-1">
            <li class="max-md:hidden">
              <router-link
                :to="ROUTES.menu.route"
                class="
                  inline-flex border border-transparent rounded-lg p-3 transition duration-500
                  hover:border-primary/15 hover:bg-primary/5
                "
              >
                Menu
              </router-link>
            </li>
            <li class="max-md:hidden">
              <router-link
                :to="ROUTES.about.route"
                class="
                  inline-flex border border-transparent rounded-lg p-3 transition duration-500
                  hover:border-primary/15 hover:bg-primary/5
                "
              >
                About
              </router-link>
            </li>
  
            <li>
              <router-link
                :to="ROUTES.reservation.route"
                class="
                  inline-flex border border-primary/15 rounded-lg p-3 transition duration-500
                  hover:border-primary/25 hover:bg-primary/10
                "
              >
                Book A Table
              </router-link>
            </li>
          </ul>
        </section>
      </section>
    </nav>

    <Transition name="menu-scale">
      <section
        v-if="navOpened"
        ref="navTarget"
        class="nav-modal fixed top-0 left-0 z-100 w-full md:w-1/2 h-full border-r border-primary/15 origin-[left_center]"
      >
        <section class="w-full h-full md:p-6 bg-dark">
          <section
            class="
              w-full h-full rounded-2xl border border-primary/15 relative flex xl:items-center xl:justify-center
              overflow-y-auto max-xl:px-6 max-xl:pt-24
            "
          >
            <button
              class="
                absolute top-6 right-6
                border border-primary/15 rounded-lg w-10 h-10 flex items-center justify-center
                transition duration-500 hover:border-primary/25 hover:bg-primary/5
              "
              @click="navOpened = false"
            >
              <Icon icon="heroicons:x-mark" class="text-2xl" />
            </button>
        
            <section
              class="xl:text-center w-full xl:w-5/6 2xl:w-3/4 uppercase font-forum text-3xl xl:text-5xl leading-none"
            >
              <ul class="flex flex-col max-xl:gap-y-4">
                <li v-for="page in ROUTES" :key="page.key">
                  <router-link
                    :to="page.route" v-text="page.text"
                    class="block transition duration-500 hover:bg-dark-2/80 max-xl:px-1.5 py-1.5 xl:py-3.5 rounded-md"
                  />
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>
    </Transition>
  </section>
</template>