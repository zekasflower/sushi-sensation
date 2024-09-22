// RESTAURANT_MENU IMAGES IMPORT
// MAKI
import spicy_tuna_maki_image from '@/assets/images/menupage/maki/spicy_tuna_maki.png'
import mango_maki_image from '@/assets/images/menupage/maki/mango_maki.png'
import salmon_maki_image from '@/assets/images/menupage/maki/salmon_maki.png'
import tuna_maki_image from '@/assets/images/menupage/maki/tuna_maki.png'
// URAMAKI
import volcano_delight_image from '@/assets/images/menupage/uramaki/volcano_delight.png'
import rainbow_fusion_image from '@/assets/images/menupage/uramaki/rainbow_fusion.png'
import dragon_elegance_image from '@/assets/images/menupage/uramaki/dragon_elegance.png'
import sunset_serenity_image from '@/assets/images/menupage/uramaki/sunset_serenity.png'
import mystic_garden_image from '@/assets/images/menupage/uramaki/mystic_garden.png'
import ocean_breeze_image from '@/assets/images/menupage/uramaki/ocean_breeze.png'
import tokyo_blossom_image from '@/assets/images/menupage/uramaki/tokyo_blossom.png'
// SPECIAL_ROLLS
import sunrise_bliss_image from '@/assets/images/menupage/special_rolls/sunrise_bliss.png'
import mango_tango_image from '@/assets/images/menupage/special_rolls/mango_tango.png'
import truffle_indulgence_image from '@/assets/images/menupage/special_rolls/truffle_indulgence.png'
import pacific_firecracker_image from '@/assets/images/menupage/special_rolls/pacific_firecracker.png'
import eternal_eel_enchantment_image from '@/assets/images/menupage/special_rolls/eternal_eel_enchantment.png'

export const SOCIALS = [
  {
    key: 'twitter_key',
    icon: 'ph:twitter-logo-light',
    url: 'https://x.com/Abdullah_Fajr_'
  },
  {
    key: 'facebook_key',
    icon: 'ph:facebook-logo-light'
  },
  {
    key: 'isntagram_key',
    icon: 'ph:instagram-logo-light'
  }
]

export const RESTAURANT_MENU_TABS = [
  {
    key: 'maki_tab_key',
    name: 'Maki',
    target_category: 'Maki',
    target_category_key: 'maki_key',
  },
  {
    key: 'uramaki_tab_key',
    name: 'UraMaki',
    target_category: 'UraMaki',
    target_category_key: 'uramaki_key',
  },
  {
    key: 'special_rolls_tab_key',
    name: 'Special Rolls',
    target_category: 'Special Rolls',
    target_category_key: 'special_rolls_key',
  },
]

export const RESTAURANT_MENU = [
  {
    key: 'maki_key',
    category: 'Maki',
    items: [
      {
        key: 'spicy_tuna_maki_key',
        image: spicy_tuna_maki_image,
        name: 'Spicy Tuna Maki',
        is_recommended: true,
        price: 5,
        description: 'A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.'
      },
      {
        key: 'mango_maki_key',
        image: mango_maki_image,
        name: 'Mango Maki',
        price: 5,
        description: 'Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures.'
      },
      {
        key: 'salmon_maki_key',
        image: salmon_maki_image,
        name: 'Salmon Maki',
        price: 5,
        description: 'Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds.'
      },
      {
        key: 'tuna_maki_key',
        image: tuna_maki_image,
        name: 'Tuna Maki',
        price: 5,
        description: 'A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll.'
      },
    ]
  },
  {
    key: 'uramaki_key',
    category: 'UraMaki',
    items: [
      {
        key: 'volcano_delight_key',
        image: volcano_delight_image,
        name: 'Volcano Delight',
        is_recommended: true,
        price: 12,
        description: 'Creamy crab salad, avocado, and cucumber rolled inside, topped with spicy tuna and drizzled with fiery sriracha sauce.'
      },
      {
        key: 'rainbow_fusion_key',
        image: rainbow_fusion_image,
        name: 'Rainbow Fusion',
        price: 12,
        description: 'A colorful blend of fresh tuna, salmon, yellowtail, and avocado, enveloping a core of cucumber and crab stick.'
      },
      {
        key: 'dragon_elegance_key',
        image: dragon_elegance_image,
        name: 'Dragon Elegance',
        price: 12,
        description: 'Grilled eel and avocado nestled within the roll, draped with slices of ripe avocado resembling dragon scales.'
      },
      {
        key: 'sunset_serenity_key',
        image: sunset_serenity_image,
        name: 'Sunset Serenity',
        price: 12,
        description: 'Tempura shrimp, cucumber, and spicy mayo embraced by a roll of soy paper, crowned with slices of creamy mango.'
      },
      {
        key: 'mystic_garden_key',
        image: mystic_garden_image,
        name: 'Mystic Garden',
        price: 12,
        description: 'Shiitake mushrooms, asparagus, and cucumber intermingle with crispy tempura bits, blanketed by a layer of sesame seeds.'
      },
      {
        key: 'ocean_breeze_key',
        image: ocean_breeze_image,
        name: 'Ocean Breeze',
        price: 12,
        description: 'A medley of fresh shrimp, crab stick, and avocado, laced with a gentle touch of zesty yuzu-infused tobiko.'
      },
      {
        key: 'tokyo_blossom_key',
        image: tokyo_blossom_image,
        name: 'Tokyo Blossom',
        price: 12,
        description: 'Delicate pink soy paper envelopes a blend of tuna, crab stick, and cucumber, embellished with edible flower petals.'
      },
    ]
  },
  {
    key: 'special_rolls_key',
    category: 'Special Rolls',
    items: [
      {
        key: 'sunrise_bliss_key',
        image: sunrise_bliss_image,
        name: 'Sunrise Bliss',
        is_recommended: true,
        price: 16,
        description: 'A delicate combination of fresh salmon, cream cheese, and asparagus, rolled in orange-hued tobiko for a burst of sunrise-inspired flavors.'
      },
      {
        key: 'mango_tango_key',
        image: mango_tango_image,
        name: 'Mango Tango Fusion',
        is_recommended: true,
        price: 16,
        description: 'Tempura shrimp, cucumber, and avocado dance alongside sweet mango slices, drizzled with a tangy mango sauce.'
      },
      {
        key: 'truffle_indulgence_key',
        image: truffle_indulgence_image,
        name: 'Truffle Indulgence',
        is_recommended: true,
        price: 16,
        description: 'Decadent slices of black truffle grace a roll of succulent wagyu beef, cucumber, and microgreens, culminating in an exquisite umami symphony.'
      },
      {
        key: 'pacific_firecracker_key',
        image: pacific_firecracker_image,
        name: 'Pacific Firecracker',
        is_recommended: true,
        price: 16,
        description: 'Spicy crab salad, tempura shrimp, and jalapeño peppers combine in a fiery ensemble, accented with a chili-infused aioli.'
      },
      {
        key: 'eternal_eel_enchantment_key',
        image: eternal_eel_enchantment_image,
        name: 'Eternal Eel Enchantment',
        is_recommended: true,
        price: 16,
        description: 'An enchanting blend of eel tempura, foie gras, and cucumber, elegantly layered with truffle oil and gold leaf for a touch of opulence.'
      },
    ]
  },
]