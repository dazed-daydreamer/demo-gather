<script lang="ts" setup>
defineProps({
  layout: {
    type: String,
    default: 'total, sizes, prev, pager, next, jumper'
  },
  pageSizes: {
    type: Array as () => number[],
    default: () => [10, 20, 30, 40, 50]
  },
  total: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <el-pagination
    v-if="total > 0"
    :total="total"
    layout="total, sizes, prev, pager, next, jumper"
    :page-sizes="pageSizes"
    class="mt-[20px] flex justify-end flex-shrink-0"
    background
  />
</template>

<style lang="scss" scoped></style>
