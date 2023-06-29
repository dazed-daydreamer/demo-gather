<script lang="ts" setup>
import { tr } from 'element-plus/es/locale'

const emit = defineEmits(['clickDelete'])
const props = defineProps({
  isDisabled: {
    type: Boolean,
    default: false
  }
})

const tableColumn = [
  {
    dataKey: 'userName',
    title: '业务员名称',
    width: 200
  },
  {
    dataKey: 'userCode',
    title: '业务员编码',
    width: 200
  },
  {
    dataKey: 'taskAmount',
    title: '任务金额',
    editName: 'CustomInputNumber',
    formatter: (row: any) => {
      return row.taskAmount.toFixed(2)
    },
    width: 200
  },
  {
    dataKey: 'taskCount',
    title: '任务数量',
    editName: 'CustomInputNumber',
    isRequired: true,
    width: 200
  },
  {
    dataKey: 'taskWay',
    title: '任务方式',
    editName: 'CustomSelect',
    isRequired: true,
    editProps: {
      dict: 'way'
    },
    width: 200
  },
  {
    dataKey: 'operate',
    title: '操作',
    fixed: 'right',
    width: 120,
    btnList: [
      {
        tip: '详情',
        isDisabled: () => props.isDisabled,
        onClick: (data: any) => clickCheck(data)
      },
      {
        tip: '删除',
        isConfirm: true,
        onClick: (_: any, index: number) => emit('clickDelete', index)
      }
    ]
  }
]

const clickCheck = (data: any) => {
  ElMessage.success(`查看${data.userName}的详情`)
}
</script>

<template>
  <custom-virtualized-table :table-column="tableColumn"></custom-virtualized-table>
</template>

<style lang="scss" scoped></style>
