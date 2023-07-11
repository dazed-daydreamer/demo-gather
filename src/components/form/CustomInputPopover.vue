<script lang="ts" setup>
interface EditProps {
  url?: string
  method?: string
  queryItems?: any[]
  tableColumns: any[]
  modelProp: {
    key: string
    label: string
  }
  requestParam?: object
  defaultValue?: string
}

const props = defineProps({
  width: {
    type: Number || String,
    default: 630
  },
  editProps: {
    type: Object as () => EditProps,
    default: () => ({})
  },
  // 是否初始化请求
  isInitRquest: {
    type: Boolean,
    default: false
  },
  // 是否显示弹窗时请求
  isShowPopoverRquest: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  moduleValue: {
    type: String || Number,
    default: ''
  },
  placeholder: {
    type: String,
    default: '请选择'
  }
})

const emit = defineEmits(['row-click', 'update:modelValue', 'change'])

const pageIndex = ref(1)
const pageSize = ref(10)
const total = ref(0)
const formData = reactive<any>({})
const tableData = reactive<any>([])
const loading = ref(false)
const popoverRef = ref()
const inputValue = ref('')

onMounted(() => {
  if (props.isInitRquest && props.editProps.url && !props.isShowPopoverRquest) {
    getQueryList()
  }
})

watch(
  () => props.editProps.defaultValue,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      inputValue.value = newValue || ''
    }
  },
  {
    immediate: true
  }
)

const getQueryList = () => {
  loading.value = true
  const data = [
    {
      orgId: 'test-001',
      code: '001',
      name: '财务部'
    },
    {
      orgId: 'test-002',
      code: '002',
      name: '人力资源部'
    },
    {
      orgId: 'test-003',
      code: '003',
      name: '市场部'
    },
    {
      orgId: 'test-004',
      code: '004',
      name: '研发部'
    },
    {
      orgId: 'test-005',
      code: '005',
      name: '销售部'
    }
  ]
  tableData.splice(0, tableData.length, ...data)
  total.value = data.length
  setTimeout(() => {
    loading.value = false
  }, 500)
}

const handlePopoverShow = () => {
  if (props.isShowPopoverRquest) {
    getQueryList()
  }
}

const clickRow = (row: any, column: object, event: Event) => {
  // toggleRowSelection(row)
  inputValue.value = row[props.editProps.modelProp.label]
  popoverRef?.value?.hide?.()
  emit('update:modelValue', row[props.editProps.modelProp.key])
  emit('row-click', row, column, event)
  emit('change', row)
}

const clickClean = () => {
  inputValue.value = ''
  emit('update:modelValue', '')
  emit('change', '')
}
</script>

<template>
  <el-popover
    placement="bottom"
    :width="width"
    trigger="click"
    popper-class="custom-input-popover"
    @show="handlePopoverShow"
    :disabled="disabled"
    ref="popoverRef"
  >
    <template #reference>
      <el-input
        readonly
        v-bind="$attrs"
        :disabled="disabled"
        v-model="inputValue"
        :placeholder="placeholder"
        class="custom-input-popover-input"
      >
        <template #suffix>
          <el-icon :size="14" class="cursor-pointer" @click.stop="clickClean" v-if="inputValue">
            <i-ep-circle-close></i-ep-circle-close>
          </el-icon>
        </template>
      </el-input>
    </template>

    <div class="flex">
      <div class="flex-1">
        <custom-form :model="formData">
          <custom-form-item
            edit-name="CustomInput"
            v-for="(item, index) in editProps.queryItems"
            :key="index"
            :label="item.label"
            :prop="item.key"
            :span="item.span || 12"
          ></custom-form-item>
        </custom-form>
      </div>
      <el-button type="primary" class="flex-shrink-0 ml-[15px]" @click="getQueryList">查询</el-button>
    </div>

    <el-table
      :row-class-name="() => 'custom-popover-table-row'"
      :header-row-class-name="() => 'custom-popover-table-header-row'"
      stripe
      :data="tableData"
      v-loading="loading"
      max-height="300"
      @row-click="clickRow"
    >
      <el-table-column v-for="(item, index) in editProps.tableColumns" :key="index" v-bind="item"></el-table-column>
    </el-table>

    <custom-pagination
      v-model:current-page="pageIndex"
      v-model:page-size="pageSize"
      :total="total"
      @size-change="getQueryList"
      @current-change="getQueryList"
      small
      :pager-count="5"
    ></custom-pagination>
  </el-popover>
</template>

<style lang="scss">
.custom-input-popover .custom-popover-table-row {
  td {
    height: 40px;
    padding: 0;
    font-size: 12px;
  }
}

.custom-input-popover .custom-popover-table-header-row {
  th {
    height: 32px !important;
    background-color: #fff !important;
    color: #606266;
    padding: 0;
    box-sizing: content-box;
    font-size: 12px;
  }
}

.custom-input-popover-input {
  .el-icon {
    display: none;
  }
  &:not(.is-disabled):hover {
    .el-icon {
      display: block;
    }
  }
}
</style>
