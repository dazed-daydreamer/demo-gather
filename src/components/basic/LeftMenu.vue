<script setup lang="ts"></script>

<template>
  <el-menu router default-active="/">
    <el-menu-item index="/">
      <template #title>
        <el-icon class="iconfont icon-zhuye"></el-icon>
      </template>
    </el-menu-item>
    <el-menu-item index="/monitoring">
      <template #title>
        <el-icon> <i-ep-expand /></el-icon>
      </template>
    </el-menu-item>
    <el-menu-item index="/query">
      <template #title>
        <el-icon> <i-ep-expand /></el-icon>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu {
  height: 100vh;
  .el-menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
