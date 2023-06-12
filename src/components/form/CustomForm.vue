<script lang="ts" setup>
import type { ElForm } from 'element-plus'

const formRef = ref<InstanceType<typeof ElForm> | null>(null)
const form = reactive({
  name: ''
})

async function validate() {
  return await formRef.value?.validate()
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
  <el-form ref="formRef" v-model="form" v-bind="$attrs">
    <el-form-item label="Activity name" prop="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-row>
      <slot></slot>
    </el-row>
  </el-form>
</template>
<style lang="scss" scoped></style>
