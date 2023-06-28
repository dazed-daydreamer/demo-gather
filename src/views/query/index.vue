<script lang="ts" setup>
import PageHeaderForm from './pageHeaderForm.vue'

const initForm = () => ({
  name: '',
  region: '1',
  date: '',
  delivery: ''
})
const router = useRouter()
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
    label: '活动名称',
    width: '130'
  },
  {
    prop: 'region',
    label: '活动区域',
    width: '130',
    formatter: (row: any) => {
      return regionList.filter((item) => item.itemValue === row.region)[0]?.itemName || ''
    }
  },
  {
    prop: 'delivery',
    label: '即时配送',
    width: '130',
    dict: 'usbale'
  },
  {
    prop: 'startData',
    minWidth: '150',
    label: '开始时间'
  },
  {
    prop: 'endData',
    minWidth: '150',
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

const clickQuery = async () => {
  ElMessage.success('查询成功')
}

const clickReset = () => {
  Object.assign(form, initForm())
  currentPage.value = 1
  ElMessage.success('重置成功')
}

const clickAdd = () => {
  router.push({
    path: '/form'
  })
}

const addConfig = reactive({
  isShow: true,
  callBack: clickAdd
})

const exportConfig = reactive({
  isShow: true
})

const importConfig = reactive({
  isShow: true
})
</script>

<template>
  <custom-query-page>
    <template #header>
      <custom-query-header>
        <template #right-slot>
          <custom-button type="primary" @click="clickQuery">查询</custom-button>
          <custom-button @click="clickReset">重置</custom-button>
        </template>
      </custom-query-header>
      <page-header-form :model="form" :region-list="regionList"> </page-header-form>
    </template>
    <template #toolbar>
      <custom-toolbar :add-config="addConfig" :export-config="exportConfig" :import-config="importConfig"></custom-toolbar>
    </template>
    <template #main>
      <custom-table v-model:current-page="currentPage" v-model:page-size="pageSize" :table-column="tableColumn" :data="tableData">
      </custom-table>
      <custom-pagination></custom-pagination>
    </template>
  </custom-query-page>
</template>

<style lang="scss" scoped></style>
