<script lang="ts" setup>
import type CustomForm from '@/components/form/CustomForm.vue'

const rules = {
  name: [{ required: true, message: '请输入活动名称', trigger: 'change' }]
}

const formRef = ref<InstanceType<typeof CustomForm> | null>(null)

async function onTset() {
  const valid = await formRef.value?.validate()
}
</script>

<template>
  <div>
    <c-form :rules="rules" ref="formRef">
      <c-form-item edit-name="CInput" label="测试组件" prop="name"></c-form-item>
      <el-form-item label="Activity name">
        <el-input />
      </el-form-item>
      <el-form-item label="Activity name">
        <el-input />
      </el-form-item>
      <el-form-item label="Activity name">
        <el-input />
      </el-form-item>
    </c-form>

    <el-button @click="onTset">测试按钮</el-button>
  </div>
</template>

<style lang="scss" scoped></style>
