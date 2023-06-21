<script lang="ts" setup>
import PageHeaderForm from './pageHeaderForm.vue'

const initForm = () => ({
  name: '',
  region: '1',
  date: '',
  delivery: ''
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
const tableColumn = [
  {
    prop: 'name',
    label: '活动名称'
  },
  {
    prop: 'region',
    label: '活动区域',
    formatter: (row: any) => {
      return regionList.filter((item) => item.itemValue === row.region)[0]?.itemName || ''
    }
  },
  {
    prop: 'delivery',
    label: '即时配送',
    dict: 'usbale'
  },
  {
    prop: 'startData',
    label: '开始时间'
  },
  {
    prop: 'endData',
    label: '结束时间'
  },
  {
    prop: 'operate',
    label: '操作',
    width: '160',
    fixed: 'right',
    btnList: [
      {
        tip: '编辑',
        listener: 'onEdit',
        isDisabled: (record: any) => record.name === '活动名称'
        // isShow: (record) => this.btnAuth['visitAllotCustomer.delete']
      },
      {
        tip: '删除',
        isConfirm: true,
        listener: 'onDelete'
      }
    ]
  }
]

const currentPage = ref(1)
const pageSize = ref(10)
const form = reactive(initForm())
const tableData = ref([
  {
    name: '活动名称',
    region: '2',
    startData: '2021-09-01',
    endData: '2021-09-30',
    delivery: '1'
  }
])

const onQueryList = async () => {
  ElMessage.success('查询成功')
}

const onReset = () => {
  Object.assign(form, initForm())
  currentPage.value = 1
  ElMessage.success('重置成功')
}
</script>

<template>
  <PageContent>
    <template #header>
      <CQueryHeader>
        <template v-slot:right-slot>
          <el-button type="primary" @click="onQueryList">查询</el-button>
          <el-button @click="onReset">重置</el-button>
        </template>
      </CQueryHeader>
      <PageHeaderForm v-model="form" :regionList="regionList"> </PageHeaderForm>
    </template>
    <template #main>
      <CTable v-model:current-page="currentPage" v-model:page-size="pageSize" :tableColumn="tableColumn" :data="tableData">
        <!-- <template v-slot:name> 测试</template> -->
      </CTable>
      <CPagination></CPagination>
    </template>
  </PageContent>
</template>

<style lang="scss" scoped></style>
