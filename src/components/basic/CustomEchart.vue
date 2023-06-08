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
const chartBox = ref<HTMLElement | null>(null)

function initChart() {
  if (!chartBox.value) return
  const echarts = getGlobalProperties('$echarts')
  const myChart = echarts && echarts.init(chartBox.value as HTMLElement, 'dark')
  if (myChart && prop.option) {
    const option = { ...prop.option }
    if (!option.backgroundColor) {
      option.backgroundColor = '#242424'
    }
    myChart.setOption(option)
  }
}

onMounted(() => {
  initChart()
})
</script>
<template>
  <el-col :span="span">
    <div ref="chartBox" :style="{ width: width, height: height }"></div>
  </el-col>
</template>
<style lang="scss" scoped></style>
