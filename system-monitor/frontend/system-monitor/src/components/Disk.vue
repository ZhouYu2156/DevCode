<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BasicGraphic from "./BasicGraphic.vue";
import get_disk_usage from "@/api/disk";

// 第一次随机生成饼图数据
const basic_disk = {
  title: {
    text: 'C盘使用情况',
    bottom: '10%',
    left: 'center',
    textStyle: {
      fontSize: 16,
    }
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    left: 'center',
    top: '10%'
  },
  color: ['#dc3545', '#198754'],
  series: [
    {
      name: 'C盘(单位: GB)',
      type: 'pie',
      radius: '50%',
      data: [
        { value: Math.floor(Math.random() * 50), name: '剩余' },
        { value: Math.floor(Math.random() * 260), name: '已使用' },
      ],
      label: {
        show: false
      }
    }
  ]
}

let changeDiskUsage = (perdisk: {
  value: number, name: string
}[], disk: string) => (
  {
    title: {
      text: `${disk}盘使用情况`,
      bottom: '5%',
      left: 'center',
      textStyle: {
        fontSize: 16,
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'center',
      top: '10%'
    },
    color: ['#dc3545', '#198754'],
    series: [
      {
        name: `${disk}盘(单位: GB)`,
        type: 'pie',
        radius: '50%',
        data: perdisk,
        label: {
          show: true,
          position: 'inner',
          formatter: '{c}GB'
        }
      }
    ]
  }
)
// 各个磁盘的使用情况
const c_disk = ref(basic_disk)
const d_disk = ref(basic_disk)
const e_disk = ref(basic_disk)
const f_disk = ref(basic_disk)

let disks = [c_disk, d_disk, e_disk, f_disk]

async function updateDiskUsage() {
  // 每隔1秒获取每个磁盘的使用情况
  const { data } = await get_disk_usage();
  const disk_names = ['C', 'D', 'E', 'F'];
  let index = 0;
  console.log("磁盘使用情况: ", data)
  for (let usage of data) {
    let formatter_disk: {
      value: number,
      name: string
    }[] | undefined;
    formatter_disk = [{ value: usage['used'], name: '已使用' }, { value: usage['free'], name: '剩余' }];
    disks[index].value = changeDiskUsage(formatter_disk, disk_names[index++])
  }
}

onMounted(() => {
  // 先调用一次获取磁盘使用情况
  updateDiskUsage()
  // 之后每隔10秒获取磁盘使用情况
  setInterval(() => {
    updateDiskUsage()
  }, 10000)
})

</script>

<template>
  <div class="w-100 d-flex align-content-stretch flex-wrap align-items-stretch" style="height: 340px; ">
    <div class="memory-chart" v-for="(item, index) in [c_disk, d_disk, e_disk, f_disk]" :key="index">
      <BasicGraphic :data="item" :width="'100%'" :height="'100%'" :style="{ background: 'transparent' }">
      </BasicGraphic>
    </div>
  </div>

</template>

<style scoped>
.memory-chart {
  width: 50%;
  height: 50%;
}
</style>