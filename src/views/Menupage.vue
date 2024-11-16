<script setup>
import { RESTAURANT_MENU_FILTERS, RESTAURANT_MENU } from '@/constants'

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
        <h1 class="pl-20 pb-14 font-forum text-heading-large uppercase w-[800px]">
          Menu
        </h1>
      </div>
    </section>

    <section class="flex-1 overflow-y-auto">
      <section class="border border-primary/15 rounded-2xl py-8 px-24">
        <ul class="menu-filters flex items-stretch justify-center gap-x-1 py-2 mb-16">
          <li
            v-for="filter_item in RESTAURANT_MENU_FILTERS"
            :key="filter_item.key"
            v-text="filter_item.name"
            class="text-meta uppercase py-2 px-3 rounded-lg border border-primary/15"
          />
        </ul>

        <section class="flex flex-col gap-y-24">
          <section v-for="section in RESTAURANT_MENU" :key="section.key">
            <div class="flex items-center justify-center gap-x-4 mb-12">
              <img src="@/assets/icons/diamond-border-left.svg" />
              <h2 v-text="section.category" class="font-forum uppercase text-heading-h3" />
              <img src="@/assets/icons/diamond-border-right.svg" />
            </div>

            <ul>
              <li v-for="meal in section.meals" class="flex items-center gap-x-6">
                <div class="w-[150px] flex-none">
                  <img :src="meal.image" />
                </div>
                
                <div class="flex-1">
                  <header class="flex items-end justify-between gap-x-4 mb-1">
                    <div class="flex items-center gap-x-3 flex-none">
                      <h3 class="uppercase font-forum text-heading-h5" v-text="meal.name" />
                      <Icon icon="ph:leaf-light" v-if="meal.is_recommended" />
                    </div>

                    <div class="h-full w-full border-b border-dashed border-primary/15" />

                    <strong class="font-forum font-normal text-heading-h5" v-text="'$' + meal.price"></strong>
                  </header>

                  <p class="text-muted/70 text-small" v-text="meal.description" />
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