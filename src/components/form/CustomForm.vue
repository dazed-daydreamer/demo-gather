<script setup lang="ts">
import { ElForm } from 'element-plus'

const form = reactive({})
const formRef = ref<InstanceType<typeof ElForm> | null>(null)

function validate(callback: () => void) {
  formRef.value?.validate(callback)
}

function resetFields() {
  formRef.value?.resetFields()
}

function clearValidate() {
  formRef.value?.clearValidate()
}

defineExpose({
  validate,
  resetFields,
  clearValidate
})
</script>

<template>
  <el-form ref="formRef" :model="form" v-bind="$attrs">
    <el-row>
      <slot></slot>
    </el-row>
  </el-form>
</template>
<style lang="scss" scoped></style>
