<script lang="ts" setup>
import { useMapStore } from '@/store/map'
const props = defineProps({
  placeholder: {
    type: String,
    default: '请选择'
  },
  options: {
    type: Array,
    default: () => []
  },
  dict: {
    type: String,
    default: ''
  },
  labelKey: {
    type: String,
    default: 'itemName'
  },
  valueKey: {
    type: String,
    default: 'itemValue'
  },
  clearable: {
    type: Boolean,
    default: true
  }
})

const localOptions = ref<any[]>([])

onMounted(() => {
  if (props.dict) {
    getDictMapToSelectList()
  }
})

watch(
  () => props.options,
  (val) => {
    if (props.dict) return
    localOptions.value = val
  },
  {
    immediate: true
  }
)

watch(
  () => props.dict,
  () => {
    getDictMapToSelectList()
  }
)

// 获取字典数据
const getDictMapToSelectList = () => {
  const dictMap = useMapStore()[props.dict]
  if (Array.isArray(dictMap) && dictMap.length > 0) {
    localOptions.value = [...dictMap]
  } else {
    localOptions.value = []
  }
}
</script>

<template>
  <el-select v-bind="$attrs" :placeholder="placeholder" class="w-full" :clearable="clearable">
    <el-option v-for="item in localOptions" :key="item[valueKey]" :label="item[labelKey]" :value="item[valueKey]" />
  </el-select>
</template>

<style lang="scss" scoped></style>
