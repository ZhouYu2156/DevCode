<script setup lang="ts">
import { useRoute } from 'vitepress'
const route = useRoute()
// console.log("ProgrammingNavigation Component's route: ", route);
</script>

<template>
  <div class="display-block w-100vw">
    <iframe src="https://www.zhouyu2156.cn/Programming/" frameborder="0" class="w-100 h-100vh"></iframe>
  </div>
</template>

<style sopoed>
/* 这里覆盖了 home 的默认布局 */
@media (min-width: 960px) {
  .VPHome {
    position: absolute;
    top: 0px;
    padding-bottom: 0px !important;
  }
}

.VPHome {
  padding-bottom: 0px;
}


.w-100 {
  /* 宽度设置为父元素的 100% */
  width: 100%;
}

.h-100 {
  height: 100%;
}

.w-100vw {
  width: 100vw;
}

.h-100vh {
  height: 100vh;
}
</style>