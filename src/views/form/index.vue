<script lang="ts" setup>
import type CustomForm from '@/components/form/CustomForm.vue'
import type { FormRules } from 'element-plus'

const rules = reactive<FormRules>({
  name: [{ required: true, message: '请输入活动名称', trigger: 'change' }]
})

const formRef = ref<InstanceType<typeof CustomForm> | null>(null)
const form = reactive({
  name: '',
  region: '',
  date: '',
  delivery: '',
  desc: '',
  price: ''
})
const regionList = [
  {
    itemValue: '1',
    itemName: '区域一'
  },
  {
    itemValue: '2',
    itemName: '区域二'
  }
]

const onFormConfirm = async () => {
  const valid = await formRef.value?.validate()
  if (valid) {
    ElMessage({
      message: '提交成功',
      type: 'success'
    })
  }
}
</script>

<template>
  <c-add-page>
    <template #header>
      <bill-text>
        <template #right-slot>
          <el-button type="primary" @click="onFormConfirm">提交</el-button>
        </template>
      </bill-text>
    </template>
    <template #main>
      <c-form :rules="rules" ref="formRef" :model="form">
        <c-form-item edit-name="CInput" label="活动名称" prop="name"></c-form-item>
        <c-form-item edit-name="CSelect" label="活动区域" prop="region" :options="regionList"></c-form-item>
        <c-form-item edit-name="CDatePicker" label="活动时间" prop="date" type="monthrange"></c-form-item>
        <c-form-item edit-name="CSelect" label="即时配送" prop="delivery" dict="usbale"></c-form-item>
        <c-form-item edit-name="CInputNumber" label="活动价格" prop="price"></c-form-item>
        <c-form-item
          edit-name="CInput"
          label="活动形式"
          prop="desc"
          :span="24"
          type="textarea"
          maxlength="30"
          show-word-limit
        ></c-form-item>
      </c-form>
    </template>
  </c-add-page>
</template>

<style lang="scss" scoped></style>
