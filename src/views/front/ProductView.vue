<template>
  <div>
    商品詳情

    <div>
      使用商品詳情id去call單獨的產品資訊
      {{ productId }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()
const productId = ref(route.params.id)
// console.log(route.params.id)
</script>
