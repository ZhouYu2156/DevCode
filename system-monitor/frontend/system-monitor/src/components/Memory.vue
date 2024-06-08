<script setup lang="ts">
import BasicGraphic from "@/components/BasicGraphic.vue";
import {onMounted, ref, watch} from 'vue';
import get_memory_usage from '@/api/memory'

// color: ['#eee6f1', '#8b12ae'],
const option = ref({
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['7秒', '', '', '', '', '', '当前']
  },
  yAxis: {
    name: '利用率',
    nameLocation: 'end',
    show: true,
    type: 'value',
    min: 0,
    max: 100,
    offset: 10
    // scale: true
  },
  title: {
    show: false
  },
  grid: {
    show: false,
    height: '60%',
    bottom: '20%'
  },
  series: [
    {
      data: [10, 35, 18, 27, 32, 46, 18],
      type: 'line',
      areaStyle: {}
    }
  ],
  label: {
    show: true,
    rotate: -15,
    formatter: '{c}%'
  }
})

async function update_memory_information() {
  const {data} = await get_memory_usage();
  console.log('内存使用情况: ', data)
  option.value.series[0].data.shift()
  option.value.series[0].data.push(data.percent)
}


onMounted(() => {
  update_memory_information()
  setInterval(() => {
    update_memory_information()
  }, 1000)
})

</script>

<template>
  <BasicGraphic :data="option" :width="'100%'" :height="'100%'" :style="{ background: 'transparent' }">
  </BasicGraphic>
</template>

<style scoped>

</style>