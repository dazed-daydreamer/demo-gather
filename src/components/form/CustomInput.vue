<script setup lang="ts">
defineProps({
  placeholder: {
    type: String,
    default: '请输入'
  }
})
</script>

<template>
  <el-input :placeholder="placeholder"></el-input>
</template>

<style lang="scss" scoped></style>
