<script async setup lang="ts">
import {onMounted, ref} from 'vue';
// import get_cpu_usage from "@/api/cpu";
import BasicGraphic from "@/components/BasicGraphic.vue";
import {useCPUStore} from "@/stores/cpu";

const cpuStore = useCPUStore()

const option = ref({
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        type: 'gauge',
        name: 'windows',
        title: {
          show: true
        },
        axisLine: {
          lineStyle: {
            width: 30,
            color: [
              [0.3, '#67e0e3'],
              [0.7, '#37a2da'],
              [1, '#fd666d']
            ]
          }
        },
        pointer: {
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          distance: -30,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        splitLine: {
          distance: -30,
          length: 30,
          lineStyle: {
            color: '#fff',
            width: 4
          }
        },
        axisLabel: {
          color: 'inherit',
          distance: 40,
          fontSize: 20
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}%',
          color: 'inherit'
        },
        data: [
          {
            value: 2.0,
            name: 'CPU 利用率'
          }
        ],
        min: 0,
        max: 100,

      }
    ],
    animation: true,
    animationDuration: 1500,
    animationEasing: "sinusoidalIn"
  })

// 改变CPU使用率数据
function changeUsage(usage: number) {
  return {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        type: 'gauge',
        name: 'windows',
        title: {
          show: true
        },
        axisLine: {
          lineStyle: {
            width: 30,
            color: [
              [0.3, '#67e0e3'],
              [0.7, '#37a2da'],
              [1, '#fd666d']
            ]
          }
        },
        pointer: {
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          distance: -30,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        splitLine: {
          distance: -30,
          length: 30,
          lineStyle: {
            color: '#fff',
            width: 4
          }
        },
        axisLabel: {
          color: 'inherit',
          distance: 40,
          fontSize: 20
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}%',
          color: 'inherit'
        },
        data: [
          {
            value: usage,
            name: 'CPU 利用率'
          }
        ],
        min: 0,
        max: 100,

      }
    ],
    animation: true,
    animationDuration: 1500,
    animationEasing: "sinusoidalIn"
  }
}

onMounted(() => {
  setInterval( () => {
    cpuStore.update()
    option.value = changeUsage(cpuStore.usage)
  }, 2000)
})

</script>

<template>
  <BasicGraphic :data="option" :width="'100%'" :height="'100%'" :style="{ background: 'transparent', margin: '5px' }">
  </BasicGraphic>
</template>

<style scoped></style>