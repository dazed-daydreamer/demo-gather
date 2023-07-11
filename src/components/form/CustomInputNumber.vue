<script lang="ts" setup>
defineProps({
  min: {
    type: Number,
    default: 0
  },
  precision: {
    type: Number,
    default: 2
  }
})
</script>

<template>
  <el-input-number :min="min" :precision="precision" controls-position="right" clearable style="width: 100%" v-bind="$attrs" />
</template>

<style lang="scss" scoped></style>
