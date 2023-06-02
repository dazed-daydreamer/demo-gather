<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import LeftMenu from './components/basic/LeftMenu.vue'
</script>

<template>
  <el-container class="h-screen">
    <el-aside width="80px">
      <left-menu></left-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<style scoped></style>
