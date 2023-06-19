<script lang="ts" setup>
import type { FormInstance } from 'element-plus'

const attrs = useAttrs()

provide('form', attrs.modelValue)

const formRef = ref<FormInstance | null>(null)

const validate = async () => {
  return await formRef.value?.validate()
}

const resetFields = () => {
  formRef.value?.resetFields()
}

const clearValidate = () => {
  formRef.value?.clearValidate()
}

defineExpose({
  validate,
  resetFields,
  clearValidate
})
</script>

<template>
  <el-form ref="formRef" v-bind="$attrs">
    <el-row :gutter="10">
      <slot></slot>
    </el-row>
  </el-form>
</template>
<style lang="scss" scoped></style>
