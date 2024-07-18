<script setup lang="ts">
import { ref, onMounted } from 'vue'
import initSky from './StarSky'

onMounted(() => {
  initSky(<HTMLCanvasElement>document.getElementById('cxt'))
})
</script>

<template>
  <canvas id="cxt"></canvas>
</template>

<style scoped lang=""></style>
