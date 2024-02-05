<template>
  <div>
    產品頁面

    <hr />
    <ul>
      <li v-for="item in products" :key="item.id">
        【產品名稱：{{ item.title }}】 |【產品ID：{{ item.id }}】| 【前往查看商品詳情：<router-link
          :to="`/products/${item.id}`"
          >進入連結</router-link
        >】
      </li>
    </ul>
    [假裝是產品連結：<router-link :to="`/products/${num}`">進入產品ID=999的商品詳情</router-link>]
  </div>
</template>

<script setup>
const num = 999

import axios from 'axios'
import { ref, onMounted } from 'vue'

const products = ref([])

const getProducts = async () => {
  try {
    const api = `${import.meta.env.VITE_APP_BASE_API_URL}/v2/api/${import.meta.env.VITE_APP_API_PATH}/products`
    const response = await axios.get(api)
    products.value = response.data.products
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getProducts()
})
</script>
