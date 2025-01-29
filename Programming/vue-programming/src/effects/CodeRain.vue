<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CodeRain from './CodeRain'

onMounted(() => {
  CodeRain(<HTMLCanvasElement>document.getElementById('cxt'))
  let timer: number | null = null
  window.onresize = function () {
    if (timer) {
      clearInterval(timer)
    }
    timer = setTimeout(function () {
      // 一秒钟后清除画布 获取最新的屏幕宽高  进行重绘 => 同样采用节流方法 => 不要频繁刷新网页
      let canvas = document.getElementById('cxt') as HTMLCanvasElement
      let ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      // 进行重绘
      return CodeRain(<HTMLCanvasElement>document.getElementById('cxt'))
    }, 1000)
  }
})
</script>

<template>
  <canvas id="cxt"></canvas>
</template>

<style scoped lang=""></style>
