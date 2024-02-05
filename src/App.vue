<script setup></script>

<template>
  <h1>主畫面</h1>
  <ul>
    <li><router-link to="/">首頁 |</router-link></li>
    <li><router-link to="/about">關於我 |</router-link></li>
    <li><router-link to="/products">全部商品 |</router-link></li>
  </ul>
  <nav>
    <router-link to="/admin">後臺 |</router-link>
    <router-link to="/admin/products">後臺-商品列表 </router-link>
  </nav>
  <hr />

  <router-view></router-view>
</template>
