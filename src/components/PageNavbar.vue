<script setup>

const ROUTES = {
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
  <nav class="absolute top-12 left-1/2 max-xl:-translate-x-1/2 xl:left-12 p-2 rounded-lg bg-dark z-[999] w-max">
    <section class="flex items-center gap-x-3">

      <button class="border border-primary/15 rounded-lg p-1 transition duration-500 hover:border-primary/25 hover:bg-primary/5">
        <Icon icon="heroicons:bars-3" class="text-3xl" />
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
</template>