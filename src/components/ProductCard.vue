
<script setup lang="ts">
import type { Product } from '../types/Product'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="border rounded-lg p-4 shadow hover:shadow-lg transition">
    <img
      :src="product.thumbnail"
      :alt="product.title"
      class="w-full h-40 object-cover rounded"
    />

    <h2 class="font-bold mt-2">
      {{ product.title }}
    </h2>

    <p class="text-sm text-gray-500">
      {{ product.category }}
    </p>

    <p class="font-semibold">
      ${{ product.price }}
    </p>
  </div>
</template>