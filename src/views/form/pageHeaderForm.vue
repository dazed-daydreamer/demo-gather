<script lang="ts" setup>
import type CustomForm from '@/components/form/CustomForm.vue'
const formRef = ref<InstanceType<typeof CustomForm> | null>(null)
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

const rules = reactive({
  name: [{ required: true, message: '请输入活动名称', trigger: 'change' }]
})

defineExpose({
  formRef
})
</script>

<template>
  <custom-form :rules="rules" ref="formRef">
    <custom-form-item edit-name="CustomInput" label="活动名称" prop="name"></custom-form-item>
    <custom-form-item edit-name="CustomSelect" label="活动区域" prop="region" :options="regionList"></custom-form-item>
    <custom-form-item edit-name="CustomDatePicker" label="活动时间" prop="date" type="monthrange"></custom-form-item>
    <custom-form-item edit-name="CustomSelect" label="即时配送" prop="delivery" dict="usbale"></custom-form-item>
    <custom-form-item edit-name="CustomInputNumber" label="活动价格" prop="price"></custom-form-item>
    <custom-form-item
      edit-name="CustomInput"
      label="活动形式"
      prop="desc"
      :span="24"
      type="textarea"
      maxlength="30"
      show-word-limit
    ></custom-form-item>
  </custom-form>
</template>

<style lang="scss" scoped></style>
