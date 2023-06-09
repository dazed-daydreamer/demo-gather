<script setup lang="ts">
import useCommon from '@/hooks/common'

const { getGlobalProperties } = useCommon()

const prop = defineProps({
  option: {
    type: Object,
    default: () => ({})
  },
  span: {
    type: Number,
    default: 24
  },
  width: {
    type: [String, Number],
    default: '100%'
  },
  height: {
    type: [String, Number],
    default: 'auto'
  }
})
const chartRef = ref<HTMLElement | null>(null)
let chartContent = reactive<any>(null)

function initChart() {
  if (!chartRef.value) return
  const echarts = getGlobalProperties('$echarts')
  chartContent = Object.assign(echarts.init(chartRef.value), chartContent)
  if (chartContent && prop.option) {
    const option = { ...prop.option }
    if (!option.backgroundColor) {
      option.backgroundColor = '#242424'
    }
    chartContent.setOption(option)
  }
}

function resize() {
  chartContent.resize()
}

onMounted(() => {
  initChart()
})

defineExpose({
  resize
})
</script>
<template>
  <el-col :span="span">
    <div ref="chartRef" :style="{ width: width, height: height }"></div>
  </el-col>
</template>
<style lang="scss" scoped></style>
