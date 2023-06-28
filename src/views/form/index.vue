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

const tableData = reactive([
  {
    userName: '张三',
    userCode: '001'
  },
  {
    userName: '李四',
    userCode: '002'
  },
  {
    userName: '王五',
    userCode: '003'
  },
  {
    userName: '赵六',
    userCode: '004'
  },
  {
    userName: '钱七',
    userCode: '005'
  },
  {
    userName: '孙八',
    userCode: '006'
  },
  {
    userName: '周九',
    userCode: '007'
  },
  {
    userName: '吴十',
    userCode: '008'
  },
  {
    userName: '郑十一',
    userCode: '009'
  },
  {
    userName: '王十二',
    userCode: '010'
  },
  {
    userName: '李十三',
    userCode: '011'
  },
  {
    userName: '张十四',
    userCode: '012'
  },
  {
    userName: '赵十五',
    userCode: '013'
  },
  {
    userName: '钱十六',
    userCode: '014'
  },
  {
    userName: '孙十七',
    userCode: '015'
  },
  {
    userName: '周十八',
    userCode: '016'
  },
  {
    userName: '吴十九',
    userCode: '017'
  },
  {
    userName: '郑二十',
    userCode: '018'
  },
  {
    userName: '王二十一',
    userCode: '019'
  },
  {
    userName: '李二十二',
    userCode: '020'
  }
])

const clickDelete = (index: number) => {
  tableData.splice(index, 1)
}

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
          <custom-button type="primary" @click="onFormConfirm">提交</custom-button>
        </template>
      </bill-text>
    </template>
    <template #header>
      <page-header-form :model="form" ref="headerFormRef"></page-header-form>
    </template>
    <template #main>
      <page-main-table :data="tableData" @clickDelete="clickDelete"></page-main-table>
    </template>
  </custom-add-page>
</template>

<style lang="scss" scoped></style>
