<script lang="ts" setup>
import { org } from '@/tableResource'
defineProps({
  isDisabled: {
    type: Boolean,
    default: false
  }
})
const attrs = useAttrs()
const formData = reactive(attrs.model as any)
const formRef = ref()
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

const onDepartmentChange = (val: any) => {
  formData.departmentName = val?.name || ''
}

defineExpose({
  formRef
})
</script>

<template>
  <custom-form :rules="rules" ref="formRef" :disabled="isDisabled">
    <custom-form-item edit-name="CustomInput" label="活动名称" prop="name"></custom-form-item>
    <custom-form-item
      edit-name="CustomInputPopover"
      label="活动部门"
      prop="departmentId"
      :edit-props="{
        url: org.url,
        method: org.method,
        queryItems: org.queryItems,
        tableColumns: org.tableColumns,
        modelProp: org.modelProp,
        requestParam: org.requestParam,
        defaultValue: formData.departmentName
      }"
      @change="onDepartmentChange"
    ></custom-form-item>
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
