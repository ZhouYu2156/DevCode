<script setup lang="ts">
import {onMounted, ref} from 'vue'
import BasicGraphic from "@/components/BasicGraphic.vue";
import get_battery_information from '@/api/battery';
import BGM from '@/assets/music/虎二-窗.mp3'

const volume = ref({
  series: [{
    type: 'liquidFill',
    name: '当前电量',
    data: [{
      value: 0.5,
      name: '电量'
    }],
    label: {
      formatter: `{a}\n\n50%`,
      fontSize: 18
    }
  }]
})

const audio = ref<HTMLAudioElement | null>()

const playMusic = (audio: HTMLAudioElement) => {
  if (audio.paused) audio.play();
  else audio.pause();
}

onMounted(() => {
  audio.value = document.getElementById('audio') as HTMLAudioElement;
  setInterval(async () => {
    const {data} = await get_battery_information();
    let v = data.volume;  // 电量
    let status = data.status;  // 充电状态
    volume.value.series[0].data[0].value = v / 100;
    volume.value.series[0].label.formatter = `{a}\n${status ? '⚡' : ''}\n${v}%`;
  }, 1000)
})

</script>

<template>
  <BasicGraphic @click="() => playMusic(audio as HTMLAudioElement)" :data="volume" :width="'100%'" :height="'100%'"
                :style="{ background: 'transparent'}">
    <template #mychart>
      <audio id="audio" class="d-none" :src="BGM" autoplay loop></audio>
    </template>
  </BasicGraphic>
</template>

<style scoped>

</style>