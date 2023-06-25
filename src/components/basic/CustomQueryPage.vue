<script lang="ts" setup>
defineProps({
  isAddButton: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="custom-query-page flex flex-col">
    <slot name="header"></slot>
    <slot name="toolbar"></slot>
    <div class="flex-1 flex flex-col">
      <slot name="main"></slot>
    </div>
    <slot name="dialog"></slot>
  </div>
</template>

<style lang="scss" scoped>
.custom-query-page {
  padding: 20px;
  height: calc(100vh - 60px);
}
</style>
