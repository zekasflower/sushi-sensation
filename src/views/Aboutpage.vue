<script setup>

const REVIEWS = [
  {
    key: 'review-1',
    stars: 5,
    name: 'Trip Advisor',
    text: 'Best Steak House Prague'
  },
  {
    key: 'review-2',
    stars: 5,
    name: 'Michelin Guide',
    text: 'Best Steak House Prague'
  },
  {
    key: 'review-3',
    stars: 5,
    name: 'Star Dining',
    text: 'Best Steak House Prague'
  },
]

</script>

<template>
  <section class="menupage flex max-xl:flex-col gap-4 xl:h-[calc(100vh-48px)] relative">
    <PageNavbar />

    <section class="flex-1 rounded-xl xl:rounded-2xl overflow-hidden relative flex flex-col justify-end">
      <img
        src="@/assets/images/aboutpage/main.png"
        class="aspect-square md:aspect-video object-cover object-center md:max-xl:h-[600px] h-full"
      />
      
      <div class="absolute left-0 bottom-0 w-full pt-14 md:pt-20 bg-gradient-to-t from-black/60 to-transparent">
        <h1
          class="
            xl:pl-20 pb-6 md:pb-10 xl:pb-14 font-forum text-heading-h1 md:text-heading-medium 2xl:text-heading-large uppercase
            w-full text-center xl:text-left
          "
        >
          About
        </h1>
      </div>
    </section>

    <section class="flex-1 overflow-y-auto flex flex-col gap-y-4 max-xl:max-w-4xl mx-auto">

      <section class="flex max-md:flex-col gap-4 min-h-72 h-full 2xl:max-h-[26rem]">
        <section class="flex-1 rounded-2xl border border-primary/15 p-12 flex flex-col justify-between min-h-60">
          <h2 class="text-heading-h4 md:text-heading-h3 font-forum uppercase">Sushi Artistry Redefined</h2>
          <p class="xl:max-2xl:text-small 2xl:max-w-96">
            Where culinary craftsmanship meets modern elegance. Indulge in the finest sushi,
            expertly curated to elevate your dining experience.
          </p>
        </section>

        <img src="@/assets/images/aboutpage/mini-1.png" class="flex-1 max-md:h-60 md:w-1/2 object-cover rounded-2xl" />
      </section>

      <section class="flex max-md:flex-col gap-4">
        <section
          v-for="review in REVIEWS" :key="review.key"
          class="flex-1 rounded-2xl border border-primary/15 p-8 flex flex-col items-center justify-between text-center"
        >
          <section class="mb-2 flex gap-x-1">
            <Icon icon="ic:baseline-star" v-for="star in review.stars" />
          </section>
          
          <h3 v-text="review.name" class="font-forum text-heading-h4 uppercase mb-1"></h3>
          <p v-text="review.text" class="text-muted/70 text-meta md:w-32"></p>
        </section>
      </section>

      <section class="flex max-md:flex-col gap-4 min-h-72 h-full 2xl:max-h-[26rem]">
        <img src="@/assets/images/aboutpage/mini-2.png" class="md:flex-1 max-md:h-80 max-xl:max-h-96 md:w-1/2 object-cover rounded-2xl" />

        <section class="flex-1 rounded-2xl border border-primary/15 p-12 flex flex-col justify-between">
          <div class="flex items-center justify-center gap-x-4 mb-8 md:mb-12">
            <img src="@/assets/icons/diamond-border-left.svg" />
            <h2 class="font-forum uppercase text-heading-h4 md:text-heading-h3">Our Story</h2>
            <img src="@/assets/icons/diamond-border-right.svg" />
          </div>
          <p class="xl:max-2xl:text-small 2xl:max-w-96 2xl:text-center mx-auto">
            Founded with a passion for culinary excellence, Qitchen's journey began in the heart of Prague. Over years, it evolved into a haven for sushi enthusiasts, celebrated for its artful mastery and devotion to redefining gastronomy.
          </p>
        </section>
      </section>

      <PageFooter class="mt-4 2xl:mt-auto" /> 
    </section>
  </section>
</template>