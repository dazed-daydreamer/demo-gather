<script setup lang="ts">
import CustomEchart from '@/components/basic/CustomEchart.vue'
import _ from 'lodash'
defineOptions({
  name: 'Home'
})

let throttled = reactive<any>(null)
const chartRefOne = ref<InstanceType<typeof CustomEchart> | null>(null)
const chartRefTwo = ref<InstanceType<typeof CustomEchart> | null>(null)
const chartRefThree = ref<InstanceType<typeof CustomEchart> | null>(null)
const chartRefFour = ref<InstanceType<typeof CustomEchart> | null>(null)
const chartRefFive = ref<InstanceType<typeof CustomEchart> | null>(null)
const chartRefSix = ref<InstanceType<typeof CustomEchart> | null>(null)
const chartRefSeven = ref<InstanceType<typeof CustomEchart> | null>(null)
const chartRefEight = ref<InstanceType<typeof CustomEchart> | null>(null)
const chartRefNine = ref<InstanceType<typeof CustomEchart> | null>(null)

onMounted(() => {
  throttled = _.throttle(() => {
    const chartRefArs = [
      chartRefOne,
      chartRefTwo,
      chartRefThree,
      chartRefFour,
      chartRefFive,
      chartRefSix,
      chartRefSeven,
      chartRefEight,
      chartRefNine
    ]
    for (const chartRef of chartRefArs) {
      chartRef.value && chartRef.value.resize()
    }
  }, 600)
  window.onresize = throttled
})

onUnmounted(() => {
  window.onresize = null
  throttled.cancel()
})

const topOneOption = {
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36]
    }
  ]
}
</script>

<template>
  <div>
    <el-row>
      <CustomEchart ref="chartRefOne" :option="topOneOption" height="300px" :span="8"></CustomEchart>
      <CustomEchart ref="chartRefTwo" :option="topOneOption" height="300px" :span="8"></CustomEchart>
      <CustomEchart ref="chartRefThree" :option="topOneOption" height="300px" :span="8"></CustomEchart>
    </el-row>
    <el-row>
      <CustomEchart ref="chartRefFour" :option="topOneOption" height="300px" :span="8"></CustomEchart>
      <CustomEchart ref="chartRefFive" :option="topOneOption" height="300px" :span="8"></CustomEchart>
      <CustomEchart ref="chartRefSix" :option="topOneOption" height="300px" :span="8"></CustomEchart>
    </el-row>
    <el-row>
      <CustomEchart ref="chartRefSeven" :option="topOneOption" height="300px" :span="8"></CustomEchart>
      <CustomEchart ref="chartRefEight" :option="topOneOption" height="300px" :span="8"></CustomEchart>
      <CustomEchart ref="chartRefNine" :option="topOneOption" height="300px" :span="8"></CustomEchart>
    </el-row>
  </div>
</template>

<style lang="scss" scoped></style>
