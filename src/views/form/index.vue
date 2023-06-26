<script lang="ts" setup>
import PageHeaderForm from './pageHeaderForm.vue'
import PageMainTable from './pageMainTable.vue'

const headerFormRef = ref<InstanceType<typeof PageHeaderForm> | null>(null)
const form = reactive({
  name: '',
  region: '',
  date: '',
  delivery: '',
  desc: '',
  price: 0
})

const onFormConfirm = async () => {
  const valid = await headerFormRef.value?.formRef?.validate()
  if (valid) {
    ElMessage({
      message: '提交成功',
      type: 'success'
    })
  }
}
</script>

<template>
  <custom-add-page>
    <template #header-bar>
      <bill-text>
        <template #right-slot>
          <el-button type="primary" @click="onFormConfirm">提交</el-button>
        </template>
      </bill-text>
    </template>
    <template #header>
      <page-header-form :model="form" ref="headerFormRef"></page-header-form>
    </template>
    <template #main>
      <page-main-table></page-main-table>
    </template>
  </custom-add-page>
</template>

<style lang="scss" scoped></style>
