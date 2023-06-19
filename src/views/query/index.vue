<script lang="ts" setup>
import PageHeaderForm from './pageHeaderForm.vue'

const initForm = () => ({
  name: '',
  region: '1',
  date: '',
  delivery: ''
})
const currentPage = ref(1)
const pageSize = ref(10)
const form = reactive(initForm())

const onQueryList = async () => {
  ElMessage.success('查询成功')
}

const onReset = () => {
  Object.assign(form, initForm())
  currentPage.value = 1
  ElMessage.success('重置成功')
}

const tableList = [
  {
    prop: 'name',
    label: '活动名称'
  },
  {
    prop: 'region',
    label: '活动区域'
  },
  {
    prop: 'date',
    label: '活动时间'
  },
  {
    prop: 'delivery',
    label: '即时配送'
  }
]
</script>

<template>
  <PageContent>
    <template #header>
      <c-query-header>
        <template v-slot:right-slot>
          <el-button type="primary" @click="onQueryList">查询</el-button>
          <el-button @click="onReset">重置</el-button>
        </template>
      </c-query-header>
      <PageHeaderForm v-model="form"></PageHeaderForm>
    </template>
    <template #main>
      <CTable v-model:current-page="currentPage" v-model:page-size="pageSize" :tableList="tableList"></CTable>
      <CPagination></CPagination>
    </template>
  </PageContent>
</template>

<style lang="scss" scoped></style>
