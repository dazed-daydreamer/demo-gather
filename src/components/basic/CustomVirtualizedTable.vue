<script lang="ts" setup>
import { ElButton, ElPopconfirm } from 'element-plus'
import { v4 as uuidv4 } from 'uuid'
import { useMapStore } from '@/store/map'

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
    default: 330
  },
  headerHeight: {
    type: Number,
    default: 32
  },
  rowHeight: {
    type: Number,
    default: 40
  },
  disabled: {
    type: Boolean,
    default: false
  },
  isAddButtonShow: {
    type: Boolean,
    default: true
  },
  addButtonText: {
    type: String,
    default: '添加'
  },
  emptyDescription: {
    type: String,
    default: '暂无数据'
  },
  emptyImage: {
    type: String,
    default: ''
  },
  emptyImageSize: {
    type: Number || null,
    default: null
  }
})

const emit = defineEmits(['clickAdd'])

const tableClass = `custom-virtualized-table-${uuidv4()}`
const temTableColumn = computed(() => {
  const columns = props.tableColumn.map((item) => ({
    _editing: false,
    key: item.dataKey,
    ...item
  }))
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
    ...columns
  ]
})
const editLock = ref(false)
const mapStore = useMapStore()

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick)
})

// 监听点击事件，当点击表格外部时，取消编辑状态
const handleDocumentClick = (event: { target: any }) => {
  const tableEl = document.querySelector(`.${tableClass}`)
  if (tableEl && !tableEl.contains(event.target) && !editLock.value) {
    props.data.forEach((row: any) => {
      if (row._editing) {
        row._editing = false
      }
    })
  }
}

const handleRowClick = (value: any) => {
  const { rowIndex, event } = value
  props.data.forEach((item: any, index: number) => {
    if (index === rowIndex) {
      if (event?.target?.attributes['data-edit']?.value === 'true') {
        item._editing = true
      }
    } else {
      item._editing = false
    }
  })

  // 当前行点击编辑按钮时, 阻止触发document的click事件
  editLock.value = true
  setTimeout(() => {
    editLock.value = false
  }, 400)
}

// 根据字典key和value获取字典名称
const getDictName = (dictKey: string, value: any): string => {
  let name = ''
  if (mapStore[dictKey] && mapStore[dictKey].length > 0) {
    name = mapStore[dictKey].find((item: any) => item.itemValue === value)?.itemName
  }
  return name
}
</script>

<template>
  <custom-button
    v-if="isAddButtonShow && !disabled"
    class="mb-[15px] w-full border-dashed custom-virtualized-table-add-button"
    @click="emit('clickAdd')"
  >
    <el-icon size="12">
      <i-ep-plus />
    </el-icon>
    <span>{{ addButtonText }}</span>
  </custom-button>
  <div class="custom-virtualized-table w-full">
    <el-auto-resizer>
      <template #default="{ width: resizerWidth }">
        <el-table-v2
          :class="tableClass"
          :columns="temTableColumn"
          :data="data"
          :width="width || resizerWidth"
          :height="height"
          v-bind="$attrs"
          :header-height="headerHeight"
          :row-height="rowHeight"
          fixed
          :row-event-handlers="{
            onClick: (value: any) => handleRowClick(value)
          }"
        >
          <template #header-cell="{ column }">
            <!-- is-required只做样式显示，校验是否有值需要自己在外层判断 -->
            <span :class="{ 'is-required': column.isRequired }" class="relative">{{ column.title }}</span>
          </template>
          <template #cell="{ column, rowData, rowIndex }">
            <component
              :is="column.editName"
              v-if="column.editName && rowData._editing"
              v-bind="column.editProps"
              v-model="rowData[column.dataKey]"
              :disabled="column?.editProps?.disabled || disabled"
            ></component>
            <div v-else-if="column.dataKey === 'operate'" class="flex">
              <div v-for="(btnItem, btnIndex) in column.btnList" :key="btnIndex" class="mr-[10px]">
                <el-popconfirm
                  :title="btnItem.hintTitle || '确定删除吗？'"
                  v-if="btnItem.isConfirm"
                  @confirm="btnItem.onClick && btnItem.onClick(rowData, rowIndex)"
                >
                  <template #reference>
                    <el-button
                      class="button-font-size"
                      type="primary"
                      link
                      :disabled="(typeof btnItem.isDisabled === 'function' && btnItem.isDisabled(rowData, rowIndex)) || disabled"
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
                  :disabled="(typeof btnItem.isDisabled === 'function' && btnItem.isDisabled(rowData, rowIndex)) || disabled"
                  @click="btnItem.onClick && btnItem.onClick(rowData, rowIndex)"
                  >{{ btnItem.tip }}</el-button
                >
              </div>
            </div>
            <div class="w-full h-full flex items-center" v-else :data-edit="column.editName ? true : false">
              {{
                column.formatter
                  ? typeof column.formatter === 'function' && column.formatter(rowData)
                  : column?.editProps?.dict
                  ? getDictName(column.editProps.dict, rowData[column.dataKey])
                  : rowData[column.dataKey]
              }}
            </div>
          </template>
          <template #empty>
            <el-empty :description="emptyDescription" :image="emptyImage" :image-size="emptyImageSize"></el-empty>
          </template>
        </el-table-v2>
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
        font-size: 12px;
        color: #606266;
        border-right: 1px solid var(--el-border-color-lighter);
      }
    }

    .el-table-v2__body {
      .el-table-v2__row:nth-of-type(even) {
        .el-table-v2__row-cell {
          background-color: var(--el-fill-color-lighter);
        }
      }
      .el-table-v2__row-cell {
        padding: 0 16px;
        font-size: 12px;
      }
    }
  }
}
.custom-virtualized-table-add-button {
  color: var(--el-color-primary);
  border-color: var(--el-color-primary);
}

.button-font-size {
  font-size: 12px;
}

.is-required::before {
  content: '*';
  color: var(--el-color-danger);
  position: absolute;
  left: -8px;
}
</style>
