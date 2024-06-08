<script setup lang="ts">
import BasicGraphic from "@/components/BasicGraphic.vue";
import { onMounted, ref } from 'vue';
import { useCPUStore } from '@/stores/cpu'

const cpuStore = useCPUStore()

const option = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['CPU活动'],
    top: '5%'
  },
  grid: {
    height: '50%',
    top: '30%',
    bottom: '10%',
    left: '15%'
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['7秒', '', '', '', '', '', '当前'],
      offset: 0
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '利用率 %',
      nameLocation: 'end',
      show: true,
      min: 0,
      max: 100,
      offset: 15
    }
  ],
  series: [
    {
      name: 'CPU活动',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [35, 21, 38, 24, 12, 20, 26],
      label: {
        show: true,
        rotate: -10,
        color: '#117dbb',
        // offset: [0, -10]
      }
    }
  ]
})

function update_cpu_usage() {
  // cpuStore.update()   // 更新CPU使用率, CPU组件那里更新即可，从仓库获取新的值即可
  option.value.series[0].data.shift()
  option.value.series[0].data.push(cpuStore.usage)
}


onMounted(() => {
  update_cpu_usage()
  setInterval(() => {
    update_cpu_usage()
  }, 1000)
})

</script>

<template>
  <BasicGraphic :data="option" :width="'100%'" :height="'100%'" :style="{ background: 'transparent' }">
  </BasicGraphic>
</template>

<style scoped></style>