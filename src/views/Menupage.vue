<script setup>
import { ref, computed } from 'vue'
import { RESTAURANT_MENU_FILTERS, RESTAURANT_MENU } from '@/constants'

const filterTerm = ref('')
const filteredMenu = computed(() => {
  if (filterTerm.value) {
    return RESTAURANT_MENU.filter((category) => {
          return category.key === filterTerm.value
        })
  } else {
    return RESTAURANT_MENU
  }
})

const filterMenu = target => {
  filterTerm.value === target
    ? filterTerm.value = ''
    : filterTerm.value = target
}

</script>

<template>
  <section class="menupage flex max-2xl:flex-col gap-4 2xl:h-[calc(100vh-48px)] relative">
    <PageNavbar />

    <section class="flex-1 rounded-xl 2xl:rounded-2xl overflow-hidden relative flex flex-col justify-end">
      <img
        src="@/assets/images/menupage/main.png"
        class="aspect-square md:aspect-video object-cover object-center md:max-2xl:h-[600px] lg:max-2xl:h-[750px] h-full"
        />
      
      <div class="absolute left-0 bottom-0 w-full pt-14 md:pt-20 bg-gradient-to-t from-black/60 to-transparent">
        <h1
          class="
            2xl:pl-20 pb-6 md:pb-10 2xl:pb-14 font-forum text-heading-h1 md:text-heading-medium 2xl:text-heading-large uppercase
            w-full text-center 2xl:text-left
          "
        >
          Menu
        </h1>
      </div>
    </section>

    <section class="flex-1 overflow-y-auto">
      <section class="border border-primary/15 rounded-2xl p-6 2xl:p-8">
        <ul class="menu-filters flex items-stretch justify-center gap-x-1 py-2 mb-8 md:mb-12 2xl:mb-16">
          <li
            v-for="filterItem in RESTAURANT_MENU_FILTERS"
            :key="filterItem.key"
            v-text="filterItem.name"
            @click="filterMenu(filterItem.target_category_key)"
            class="text-meta uppercase py-2 px-3 rounded-lg border border-primary/15 cursor-pointer transition duration-300 hover:bg-primary/5"
            :class="filterTerm === filterItem.target_category_key && 'bg-primary/10 hover:!bg-primary/10'"
          />
        </ul>

        <section class="flex flex-col gap-y-16 2xl:gap-y-24 mx-auto max-w-4xl 2xl:max-w-[52rem] md:px-8 2xl:px-0">
          <section v-for="section in filteredMenu" :key="section.key">

            <div class="flex items-center justify-center gap-x-4 mb-8 md:mb-12">
              <img src="@/assets/icons/diamond-border-left.svg" />
              <h2 v-text="section.category" class="font-forum uppercase text-heading-h4 md:text-heading-h3" />
              <img src="@/assets/icons/diamond-border-right.svg" />
            </div>

            <ul class="flex flex-col gap-y-4 md:gap-y-6">
              <li v-for="meal in section.meals" class="flex max-md:flex-col items-center gap-6">
                <div class="md:w-[150px] flex-none">
                  <img :src="meal.image" class="rounded-lg" />
                </div>
                
                <div class="flex-1">
                  <header class="flex items-end justify-between gap-x-4 mb-2">
                    <div class="flex items-center gap-x-3 flex-none">
                      <h3 class="uppercase font-forum text-heading-h6 md:text-heading-h5" v-text="meal.name" />
                      <Icon icon="ph:leaf-light" v-if="meal.is_recommended" />
                    </div>

                    <div class="h-full w-full border-b border-dashed border-primary/15 relative -top-1.5" />

                    <strong class="font-forum font-normal text-heading-h6 md:text-heading-h5" v-text="'$' + meal.price"></strong>
                  </header>

                  <p class="text-muted/70 text-meta md:text-small" v-text="meal.description" />
                </div>
              </li>
            </ul>
          </section>
        </section>
      </section>
      
      <PageFooter class="mt-4" />
    </section>
  </section>
</template>