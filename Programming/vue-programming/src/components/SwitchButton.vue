<script setup lang='ts'>
import { ref } from 'vue'

interface PropsType {
  displayBg: (bool: boolean) => void
}

const { displayBg } = defineProps<PropsType>()

const flag = ref(false)
const switchBtn = () => {
  flag.value = !flag.value;
  displayBg(flag.value)
}
</script>

<template>
  <div class="form-check form-switch text-light mt-5 gy-2 d-none d-md-block"
    :style='{ position: "fixed", right: "3rem", top: "1.2rem" }'>
    <input class="form-check-input" type="checkbox" role="switch" id="switchBg" @change="switchBtn" />
    <label class="form-check-label" for="switchBg">
      背景切换
    </label>
  </div>
</template>

<style scoped></style>