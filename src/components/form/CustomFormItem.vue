<script lang="ts" setup>
defineProps({
  span: {
    type: Number,
    default: 8
  },
  label: {
    type: String,
    default: ''
  },
  editName: {
    type: String,
    default: ''
  },
  editProps: {
    type: Object,
    default: () => ({})
  },
  editEvents: {
    type: Object,
    default: () => ({})
  },
  prop: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <el-col :span="span">
    <el-form-item :label="label" :prop="prop">
      <component :is="editName" v-bind="editProps"></component>
    </el-form-item>
  </el-col>
</template>

<style lang="scss" scoped></style>
