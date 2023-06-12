<script lang="ts" setup>
// import HelloWorld from './components/HelloWorld.vue'
import LeftMenu from '@/components/basic/LeftMenu.vue'
</script>

<template>
  <el-container class="h-screen">
    <el-aside width="60px">
      <LeftMenu></LeftMenu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped></style>
