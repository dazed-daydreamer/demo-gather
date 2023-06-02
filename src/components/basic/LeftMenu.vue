<script setup lang="ts"></script>
<template>
  <el-menu>
    <el-menu-item index="1">
      <template #title>
        <!-- <div class="iconfont icon-zhuye"></div> -->
        <el-icon class="iconfont icon-zhuye"></el-icon>
        <!-- <span>Navigator One</span> -->
      </template>
    </el-menu-item>
    <el-menu-item index="2">
      <template #title>
        <el-icon> <i-ep-expand /></el-icon>
      </template>
    </el-menu-item>
  </el-menu>
</template>
<style lang="scss" scoped>
.el-menu {
  .el-menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
