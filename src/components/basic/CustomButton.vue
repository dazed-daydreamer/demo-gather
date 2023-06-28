<script lang="ts" setup></script>

<template>
  <el-button class="custom-button">
    <slot></slot>
  </el-button>
</template>

<style lang="scss" scoped>
.custom-button {
  min-width: 76px;
}
</style>
