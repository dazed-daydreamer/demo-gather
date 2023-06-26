<script lang="ts" setup>
defineProps({
  regionList: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <custom-form>
    <custom-form-item edit-name="CustomInput" label="活动名称" prop="name"></custom-form-item>
    <custom-form-item edit-name="CustomSelect" label="活动区域" prop="region" :options="regionList"></custom-form-item>
    <custom-form-item edit-name="CustomDatePicker" label="活动时间" prop="date" type="monthrange"></custom-form-item>
    <custom-form-item edit-name="CustomSelect" label="即时配送" prop="delivery" dict="usbale"></custom-form-item>
  </custom-form>
</template>

<style lang="scss" scoped></style>
