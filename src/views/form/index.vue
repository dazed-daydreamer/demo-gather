<script lang="ts" setup>
import PageHeaderForm from './pageHeaderForm.vue'
import PageMainTable from './pageMainTable.vue'

const headerFormRef = ref()
const formData = ref({
  name: '',
  region: '',
  date: '',
  delivery: '',
  desc: '',
  departmentId: '',
  departmentName: '',
  price: 0
})

const tableData = ref([
  {
    userName: '张三',
    userCode: '001',
    taskAmount: 10,
    taskCount: 0
  },
  {
    userName: '李四',
    userCode: '002',
    taskAmount: 0,
    taskCount: 0
  },
  {
    userName: '王五',
    userCode: '003',
    taskAmount: 0,
    taskCount: 0
  },
  {
    userName: '赵六',
    userCode: '004',
    taskAmount: 5,
    taskCount: 0
  },
  {
    userName: '钱七',
    userCode: '005',
    taskAmount: 0,
    taskCount: 0
  },
  {
    userName: '孙八',
    userCode: '006',
    taskAmount: 0,
    taskCount: 0
  },
  {
    userName: '周九',
    userCode: '007',
    taskAmount: 2,
    taskCount: 0
  },
  {
    userName: '吴十',
    userCode: '008',
    taskAmount: 0,
    taskCount: 0
  },
  {
    userName: '郑十一',
    userCode: '009',
    taskAmount: 0,
    taskCount: 0
  },
  {
    userName: '王十二',
    userCode: '010',
    taskAmount: 1,
    taskCount: 0
  }
])
const isDisabled = ref(false)

const clickTableDelete = (index: number) => {
  tableData.value.splice(index, 1)
}

const clickTableAdd = () => {
  tableData.value.push({
    userName: '',
    userCode: '',
    taskAmount: 0,
    taskCount: 0
  })
  ElMessage({
    message: '添加一条数据',
    type: 'success'
  })
}

const onFormConfirm = async () => {
  const valid = await headerFormRef.value?.formRef?.validate?.()
  if (valid) {
    console.log(formData.value)
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
          <custom-button type="primary" @click="onFormConfirm">提交</custom-button>
        </template>
      </bill-text>
    </template>
    <template #header>
      <page-header-form :model="formData" ref="headerFormRef" :is-disabled="isDisabled"></page-header-form>
    </template>
    <template #main>
      <page-main-table
        :data="tableData"
        @clickDelete="clickTableDelete"
        @click-add="clickTableAdd"
        :is-disabled="isDisabled"
      ></page-main-table>
    </template>
  </custom-add-page>
</template>

<style lang="scss" scoped></style>
