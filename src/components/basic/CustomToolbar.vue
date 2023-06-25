<script lang="ts" setup>
import { Plus, Fold, Expand } from '@element-plus/icons-vue'
defineProps({
  addConfig: {
    type: Object,
    default: () => ({})
  },
  exportConfig: {
    type: Object,
    default: () => ({})
  },
  importConfig: {
    type: Object,
    default: () => ({})
  }
})

const clickExport = () => {
  ElMessage.success('导出成功')
}

const clickImport = () => {
  ElMessage.success('导入成功')
}
</script>

<template>
  <div class="mb-[15px]">
    <el-button type="primary" :icon="Plus" @click="addConfig.callBack" v-if="addConfig.isShow">新增</el-button>
    <el-button :icon="Expand" @click="clickImport" v-if="importConfig.isShow">导入</el-button>
    <el-button :icon="Fold" @click="clickExport" v-if="exportConfig.isShow">导出</el-button>
  </div>
</template>

<style lang="scss" scoped></style>
