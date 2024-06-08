<script setup lang="ts">
import * as echart from "echarts";
import 'echarts-liquidfill'

// 从官网配置 并 导入主题对象
/** Read document: https://echarts.apache.org/zh/theme-builder.html */

// import vintageTheme from '../assets/theme/vintage'
// import darkTheme from '../assets/theme/dark'
// import wonderlandTheme from "../assets/theme/wonderland";
import {ref, toRefs, onMounted, onUnmounted, computed} from "vue";


// 获引用图表容器
const graph = ref<HTMLDivElement | null>();
// 生成容器 id 标识
const hash_id = ref("id" + generateHash());
// echart 实例对象
const chart = ref<echart.ECharts>();

// 定义外部可以传入的参数
const props = defineProps({
  width: {
    type: String,
  },
  height: {
    type: String,
  },
  style: Object,
  data: {
    type: Object,
    required: true,
  },
});

function generateHash() {
  /**
   * 生成容器 id
   */
  const array = new Uint32Array(8); // 创建一个包含8个无符号32位整数的UInt32Array对象
  crypto.getRandomValues(array); // 获取系统提供的随机值并存入数组

  let hashString = "";
  for (let i = 0; i < array.length; i++) {
    hashString += array[i].toString(); // 将每个元素转换为字符串并连接起来
  }

  return hashString;
}

/** 组件挂在完成获取图表盒子，基于数据创建图表 */
onMounted(() => {
  // let newProps = toRefs(props)
  // console.log(newProps.data?.value)
  // 1、获取 dom 初始化 echart
  const myChartBox = graph.value ?? document.getElementById(hash_id.value);

  // 可以注册不同的主题
  // echart.registerTheme('vintage', vintageTheme);
  // echart.registerTheme('dark', darkTheme);
  // echart.registerTheme("wonderland", wonderlandTheme);

  chart.value = echart.init(myChartBox, "dark", {
    //width: 400,          /** 如果图表和容器大小不一样大的话，设置图表绘制的宽 */
    //height: 400,
    renderer: "svg" /** 设置渲染器 */,
  });

  // 2、创建数据
  const {data} = props;

  // 3、基于数据创建图表
  chart.value.setOption(data);

  // 每隔一秒更新图表
  setInterval(() => {
    chart.value?.setOption(props.data)
  }, 1000)

  window.addEventListener("resize", function () {
    chart.value!.resize();
  });
});


// 卸载时销毁图表
onUnmounted(() => {
  chart.value!.dispose();
});
</script>

<template>
  <div :style="{ width, height, ...style }" ref="graph" :id="hash_id">
    <slot name="mychart"></slot>
  </div>
</template>

<style scoped></style>