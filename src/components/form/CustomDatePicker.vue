<script lang="ts" setup>
defineProps({
  valueFormat: {
    type: String,
    default: 'YYYY-MM-DD'
  },
  startPlaceholder: {
    type: String,
    default: '开始日期'
  },
  endPlaceholder: {
    type: String,
    default: '结束日期'
  },
  placeholder: {
    type: String,
    default: '请选择'
  },
  clearable: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="date-content">
    <el-date-picker
      style="width: 100%"
      v-bind="$attrs"
      :value-format="valueFormat"
      :start-placeholder="startPlaceholder"
      :end-placeholder="endPlaceholder"
      :placeholder="placeholder"
      :clearable="clearable"
    />
  </div>
</template>

<style lang="scss" scoped>
.date-content {
  width: 100%;
  :deep(.el-input__wrapper) {
    width: 100% !important;
  }
}
</style>
