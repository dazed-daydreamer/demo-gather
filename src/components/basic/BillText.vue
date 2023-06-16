<script lang="ts" setup>
defineProps({
  billNo: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="bill-text-content flex mb-[15px] justify-between items-center">
    <div>
      <span>单号：</span>
      <span>{{ billNo }}</span>
    </div>
    <slot name="right-slot"></slot>
  </div>
</template>

<style lang="scss" scoped></style>
