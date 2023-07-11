<script lang="ts" setup>
defineProps({
  placeholder: {
    type: String,
    default: '请输入'
  }
})
</script>

<template>
  <el-input :placeholder="placeholder" clearable v-bind="$attrs"></el-input>
</template>

<style lang="scss" scoped></style>
