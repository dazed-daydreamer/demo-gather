<script lang="ts" setup>
const emit = defineEmits(['clickDelete'])

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
    width: 200
  },
  {
    dataKey: 'taskCount',
    title: '任务数量',
    width: 200
  },
  {
    dataKey: 'taskWay',
    title: '任务方式',
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
