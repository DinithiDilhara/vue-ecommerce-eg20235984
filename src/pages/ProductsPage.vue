<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Product, ProductsResponse } from '../types/Product'
import ProductCard from '../components/ProductCard.vue'

const products = ref<Product[]>([])

onMounted(async () => {
  const response = await fetch('https://dummyjson.com/products')
  const data: ProductsResponse = await response.json()
  products.value = data.products
})
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">
      Products
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

