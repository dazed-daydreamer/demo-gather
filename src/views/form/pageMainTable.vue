<script lang="ts" setup>
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
  }
]

const data = [
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
]
</script>

<template>
  <custom-virtualized-table :table-column="tableColumn" :data="data"></custom-virtualized-table>
</template>

<style lang="scss" scoped></style>
