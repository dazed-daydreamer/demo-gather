<script lang="ts" setup>
defineProps({
  layout: {
    type: String,
    default: 'total, sizes, prev, pager, next, jumper'
  },
  pageSizes: {
    type: Array as () => number[],
    default: () => [10, 20, 30, 40, 50]
  }
})
</script>

<template>
  <el-pagination
    layout="total, sizes, prev, pager, next, jumper"
    :page-sizes="pageSizes"
    hide-on-single-page
    class="mt-[20px] flex justify-end flex-shrink-0"
    background
  />
</template>

<style lang="scss" scoped></style>
