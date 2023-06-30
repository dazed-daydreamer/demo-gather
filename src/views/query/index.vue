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
        onClick: (row: any) => clickAdd(row)
        // isDisabled: (row: any) => row.name === '活动名称'
      },
      {
        tip: '删除',
        isConfirm: true,
        onClick: (_: any, index: number) => clickDelete(index)
      }
    ]
  }
]

const pageIndex = ref(1)
const pageSize = ref(10)
const total = ref(0)
const form = reactive(initForm())
const tableData = reactive<any[]>([])

const clickQuery = async () => {
  getQueryList()
}

const clickReset = () => {
  Object.assign(form, initForm())
  pageIndex.value = 1
  getQueryList()
  ElMessage.success('重置成功')
}

const getQueryList = async () => {
  const res = []
  for (let i = 0; i < 20; i++) {
    res.push({
      id: i + 1,
      name: `活动${i + 1}`,
      region: i % 2 === 0 ? '1' : '2',
      delivery: i % 3 === 0 ? '1' : '0',
      startData: `2022-01-${i + 1}`,
      endData: `2022-01-${i + 10 - (i % 10)}`
    })
  }
  tableData.splice(0, res.length, ...res)
  total.value = tableData.length
  ElMessage.success('获取列表成功')
}

const clickAdd = (row?: any) => {
  router.push({
    path: '/form',
    query: {
      id: row?.id,
      mode: row.id ? 'edit' : 'add'
    }
  })
}

const clickDelete = (index: number) => {
  tableData.splice(index, 1)
  ElMessage.success('删除成功')
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

onMounted(() => {
  getQueryList()
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
      <custom-table :table-column="tableColumn" :data="tableData"> </custom-table>
      <custom-pagination
        v-model:current-page="pageIndex"
        v-model:page-size="pageSize"
        :total="total"
        @size-change="getQueryList"
        @current-change="getQueryList"
      ></custom-pagination>
    </template>
  </custom-query-page>
</template>

<style lang="scss" scoped></style>
