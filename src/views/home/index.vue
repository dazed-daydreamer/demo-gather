<script setup lang="ts">
import CustomEchart from '@/components/basic/CustomEchart.vue'
defineOptions({
  name: 'Home'
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
      <CustomEchart :option="topOneOption" height="300px" :span="8"></CustomEchart>
      <CustomEchart :option="topOneOption" height="300px" :span="8"></CustomEchart>
      <CustomEchart :option="topOneOption" height="300px" :span="8"></CustomEchart>
    </el-row>
    <el-row>
      <CustomEchart :option="topOneOption" height="300px" :span="8"></CustomEchart>
      <CustomEchart :option="topOneOption" height="300px" :span="8"></CustomEchart>
      <CustomEchart :option="topOneOption" height="300px" :span="8"></CustomEchart>
    </el-row>
    <el-row>
      <CustomEchart :option="topOneOption" height="300px" :span="8"></CustomEchart>
      <CustomEchart :option="topOneOption" height="300px" :span="8"></CustomEchart>
      <CustomEchart :option="topOneOption" height="300px" :span="8"></CustomEchart>
    </el-row>
  </div>
</template>
<style lang="scss" scoped></style>
