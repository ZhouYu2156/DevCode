<script setup lang="ts">
import BasicGraphic from "@/components/BasicGraphic.vue";
import {onMounted, ref} from 'vue';
import get_diskio_usage from '@/api/diskio';


const option = ref({
  color: ['#fc5531', '#41b883'],
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
    data: ['磁盘读速度', '磁盘写速度'],
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
      data: ['14秒', '', '', '', '', '', '当前'],
      offset: 15
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'MB/s',
      nameLocation: 'end',
      show: true,
      min: 0,
      max: 350,
      offset: 15
    }
  ],
  series: [
    {
      name: '磁盘读速度',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [35, 21, 58, 24, 120, 20, 80],
      label: {
        show: true,
        rotate: -15,
        color: '#fc5531',
        offset: [0, -10]
      }
    },
    {
      name: '磁盘写速度',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [25, 10, 13, 35, 20, 10, 58],
      label: {
        color: '#41b883',
        show: true,
        rotate: -15,
        offset: [0, 30]
      }
    }
  ]
})

async function update_diskio_information() {
  const {data} = await get_diskio_usage();
  console.log('磁盘读写情况: ', data)
  option.value.series[0].data.shift()
  option.value.series[0].data.push(data.read_speed)

  option.value.series[1].data.shift()
  option.value.series[1].data.push(data.write_speed)
}


onMounted(() => {
  update_diskio_information()
  setInterval(() => {
    update_diskio_information()
  }, 2000)
})

</script>

<template>
  <BasicGraphic :data="option" :width="'100%'" :height="'100%'" :style="{ background: 'transparent' }">
  </BasicGraphic>
</template>

<style scoped>

</style>