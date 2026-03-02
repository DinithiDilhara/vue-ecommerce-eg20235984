<script setup lang="ts">
import { ref, onMounted, computed } from "vue"
import type { Product } from "@/types/product"
import ProductCard from "../components/ProductCard.vue"

const products = ref<Product[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

const searchQuery = ref("")

const fetchProducts = async () => {
  try {
    loading.value = true
    error.value = null

    const res = await fetch("https://dummyjson.com/products?limit=30")
    const data = await res.json()

    // DummyJSON returns { products: [...] }
    products.value = data.products
  } catch (e) {
    error.value = "Failed to load products"
  } finally {
    loading.value = false
  }
}

const filteredProducts = computed(() => {
  const q = searchQuery.value.toLowerCase().trim()
  if (!q) return products.value
  return products.value.filter((p) =>
    p.title.toLowerCase().includes(q)
  )
})

onMounted(fetchProducts)
</script>

<template>
  <div class="min-h-screen p-6">
    <h1 class="text-2xl font-bold mb-4">Mini E-Commerce</h1>

    <input
      v-model="searchQuery"
      placeholder="Search products..."
      class="border px-4 py-2 rounded-lg w-full mb-6"
    />

    <p v-if="loading">Loading...</p>
    <p v-else-if="error" class="text-red-600">{{ error }}</p>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <ProductCard
        v-for="p in filteredProducts"
        :key="p.id"
        :product="p"
      />
    </div>
  </div>
</template>