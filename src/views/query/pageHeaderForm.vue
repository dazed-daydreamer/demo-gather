<script lang="ts" setup>
defineProps({
  regionList: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <c-form>
    <c-form-item edit-name="CInput" label="活动名称" prop="name"></c-form-item>
    <c-form-item edit-name="CSelect" label="活动区域" prop="region" :options="regionList"></c-form-item>
    <c-form-item edit-name="CDatePicker" label="活动时间" prop="date" type="monthrange"></c-form-item>
    <c-form-item edit-name="CSelect" label="即时配送" prop="delivery" dict="usbale"></c-form-item>
  </c-form>
</template>

<style lang="scss" scoped></style>
