<script setup lang="ts">
import BasicGraphic from "@/components/BasicGraphic.vue";
import { onMounted, ref } from 'vue';
import get_network_usage from '@/api/network';


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
    data: ['下载速度', '上传速度']
  },
  grid: {
    height: '50%',
    top: '30%',
    bottom: '10%'
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      offset: 2,
      data: ['14秒', '', '', '', '', '', '当前'],
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'MBps',
      nameLocation: 'end',
      show: true,
      min: 0,
      max: 20,
      offset: 15
    }
  ],
  series: [
    {
      name: '下载速度',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [0.82, 0.26, 0.46, 0.20, 0.35, 1.4, 0.8],
      label: {
        color: '#fc5531',
        show: true,
        rotate: -15,
        offset: [0, -5]
      }
    },
    {
      name: '上传速度',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [0.52, 0.82, 0.12, 0.36, 0.89, 1.5, 0.8],
      label: {
        show: true,
        rotate: -15,
        color: '#41b883',
        offset: [0, 20]
      }
    }
  ]
})

async function update_network_information() {
  const { data } = await get_network_usage();
  console.log('网速情况: ', data)
  option.value.series[0].data.shift()
  option.value.series[0].data.push(data.download_speed)

  option.value.series[1].data.shift()
  option.value.series[1].data.push(data.upload_speed)
}


onMounted(() => {
  update_network_information()
  setInterval(() => {
    update_network_information()
  }, 2000)
})

</script>

<template>
  <BasicGraphic :data="option" :width="'100%'" :height="'100%'" :style="{ background: 'transparent' }">
  </BasicGraphic>
</template>

<style scoped></style>
