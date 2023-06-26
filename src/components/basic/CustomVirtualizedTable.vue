<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  tableColumn: {
    type: Array as () => any[],
    default: () => []
  },
  width: {
    type: Number,
    default: 0
  },
  height: {
    type: Number,
    default: 400
  },
  headerHeight: {
    type: Number,
    default: 32
  },
  rowHeight: {
    type: Number,
    default: 40
  }
})

const temTableColumn = computed(() => {
  return [
    {
      key: 'index',
      title: '序号',
      width: 70,
      fixed: 'left',
      cellRenderer: ({ rowIndex }: { rowIndex: number }) => {
        return h('div', rowIndex + 1)
      }
    },
    ...props.tableColumn
  ]
})
</script>

<template>
  <div class="custom-virtualized-table w-full">
    <el-auto-resizer>
      <template #default="{ width: resizerWidth }">
        <el-table-v2
          :columns="temTableColumn"
          :data="data"
          :width="width || resizerWidth"
          :height="height"
          v-bind="$attrs"
          :header-height="headerHeight"
          :row-height="rowHeight"
        ></el-table-v2>
      </template>
    </el-auto-resizer>
  </div>
</template>

<style lang="scss" scoped>
.custom-virtualized-table {
  border: 1px solid var(--el-border-color-lighter);
  :deep(.el-table-v2) {
    .el-table-v2__header-wrapper {
      background-color: #f5f7fa;

      .el-table-v2__header-cell {
        padding: 0 16px;
        background-color: transparent;
        font-size: 13px;
        color: #606266;
        border-right: 1px solid var(--el-border-color-lighter);
      }
    }

    .el-table-v2__body {
      .el-table-v2__row-cell {
        padding: 0 16px;
        font-size: 13px;
      }
    }
  }
}
</style>
