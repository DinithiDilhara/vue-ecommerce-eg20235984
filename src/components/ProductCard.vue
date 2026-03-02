<script setup lang="ts">
import type { Product } from "@/types/product"

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="border rounded-xl p-4 hover:shadow-lg transition">
    <img
      :src="product.thumbnail"
      :alt="product.title"
      class="w-full h-40 object-cover rounded-lg mb-3"
    />

    <h2 class="font-semibold text-lg">
      {{ product.title }}
    </h2>

    <p class="text-gray-600 text-sm line-clamp-2">
      {{ product.description }}
    </p>

    <p class="mt-2 font-bold text-blue-600">
      $ {{ product.price }}
    </p>
  </div>
</template>