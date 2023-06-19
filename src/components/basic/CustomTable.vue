<script lang="ts" setup>
defineProps({
  tableList: {
    type: Array as () => { [key: string]: any }[],
    default: () => []
  },
  height: {
    type: String,
    default: '100%'
  }
})
</script>

<template>
  <el-table :border="true" :class="{ 'felx-1': height == '100%' }" :height="height">
    <el-table-column :prop="item.prop" :label="item.label" :width="item.width" v-for="(item, index) in tableList" :key="index" />
  </el-table>
</template>

<style lang="scss" scoped></style>
