<script lang="ts" setup>
import type { ElTable } from 'element-plus'
import { useMapStore } from '@/store/map'

defineProps({
  tableColumn: {
    type: Array as () => { [key: string]: any }[],
    default: () => []
  },
  height: {
    type: String,
    default: '100%'
  }
})

const emit = defineEmits(['row-click', 'on-listener'])
const mapStore = useMapStore()

const tableRef = ref<InstanceType<typeof ElTable> | null>()

const toggleRowSelection = (value: Array<object> | object, isSelect?: boolean | undefined) => {
  if (!tableRef.value || !value) return
  if (Array.isArray(value)) {
    value.forEach((item) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      tableRef.value?.toggleRowSelection(item, isSelect)
    })
  } else {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    tableRef.value?.toggleRowSelection(value, isSelect)
  }
}

const onRowClick = (row: object, column: object, event: Event) => {
  toggleRowSelection(row)
  emit('row-click', row, column, event)
}

const onListener = (listenerName: string, row: any, index: number) => {
  emit('on-listener', listenerName, row, index)
}

// 过滤按钮列表
const filteredBtnList = (btnList: any[], row: any, index: number) => {
  return btnList.filter((btnItem) => {
    return typeof btnItem.isShow === 'function' ? btnItem.isShow(row, index) : true
  })
}

// 根据字典key和value获取字典名称
const getDictName = (dictKey: string, value: any): string => {
  let name = ''
  if (mapStore[dictKey] && mapStore[dictKey].length > 0) {
    name = mapStore[dictKey].find((item: any) => item.itemValue === value)?.itemName
  }
  return name
}

defineExpose({
  toggleRowSelection
})
</script>

<template>
  <el-table
    :class="{ 'flex-1': height == '100%' }"
    :border="true"
    :height="height"
    ref="tableRef"
    @row-click="onRowClick"
    :row-class-name="() => 'custom-table-row'"
    :header-row-class-name="() => 'custom-table-header-row'"
  >
    <el-table-column type="selection" width="55" align="center" fixed="left" />
    <el-table-column label="序号" width="80" type="index" align="center" fixed="left"></el-table-column>
    <el-table-column
      :prop="item.prop"
      :label="item.label"
      :width="item.width"
      :min-width="item.minWidth"
      :fixed="item.fixed"
      :formatter="item.formatter"
      v-for="(item, index) in tableColumn"
      :key="index"
      :show-overflow-tooltip="true"
    >
      <template #default="scope">
        <slot :name="item.prop" :row="scope.row" :index="scope.$index" v-if="$slots[item.prop]"></slot>
        <div v-if="item.prop === 'operate'" class="flex custom-table-operate">
          <div v-for="(btnItem, btnIndex) in filteredBtnList(item.btnList, scope.row, scope.$index)" :key="btnIndex" class="mr-[10px]">
            <el-popconfirm
              :title="btnItem.hintTitle || '确定删除吗？'"
              v-if="btnItem.isConfirm"
              @confirm="onListener(btnItem.listener, scope.row, scope.$index)"
            >
              <template #reference>
                <el-button
                  class="button-font-size"
                  type="primary"
                  link
                  :disabled="typeof btnItem.isDisabled === 'function' && btnItem.isDisabled(scope.row, scope.$index)"
                >
                  {{ btnItem.tip }}
                </el-button>
              </template>
            </el-popconfirm>
            <el-button
              class="button-font-size"
              type="primary"
              link
              v-else
              :disabled="typeof btnItem.isDisabled === 'function' && btnItem.isDisabled(scope.row, scope.$index)"
              @click="onListener(btnItem.listener, scope.row, scope.$index)"
              >{{ btnItem.tip }}</el-button
            >
          </div>
        </div>
        <div v-if="item.dict">{{ getDictName(item.dict, scope.row[item.prop]) }}</div>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="scss" scoped>
:deep(.custom-table-header-row) {
  th {
    height: 32px !important;
    background-color: #f5f7fa !important;
    color: #606266;
    padding: 0;
    box-sizing: content-box;
    font-size: 13px;
  }
}

:deep(.custom-table-row) {
  td {
    height: 40px;
    padding: 0;
    font-size: 13px;
  }
}

.tom-table-operatcuse {
  .el-button {
    background-color: transparent !important;
    &:hover {
      background-color: transparent;
    }
    padding: 0 5px;
  }
}

.button-font-size {
  font-size: 13px;
}
</style>
