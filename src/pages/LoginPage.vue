<template>
  <div class="flex items-center justify-center h-screen">
    <div class="border p-6 rounded shadow">
      <h2 class="text-xl font-bold mb-4">Login</h2>

      <button
        @click="$router.push('/products')"
        class="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  </div>
</template>