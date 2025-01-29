<script setup lang="ts">
import { ref } from 'vue'
/** 背景特效组件 */
import { StarSky, CodeRain } from './effects'
import Content from './components/Content.vue'
import SwitchButton from './components/SwitchButton.vue';
import Modals from './components/Modals.vue';
import Relation from './components/Relation.vue';

/** 联系方式进 */
import qq from '@/static/qq.jpg'
import wechat from '@/static/wechat.jpg'
import sponsor from '@/static/sponsor.jpg'

/** 切换背景特效 */
const flag = ref(false)
const displayBg = (bool: boolean) => {
  flag.value = bool
}

/** 模态框展示个人联系方式组件 */
const imgData = ref(qq)
const showModal = (type: 'qq' | 'wechat' | 'sponsor') => {
  switch (type) {
    case 'qq':
      imgData.value = qq
      break;
    case 'wechat':
      imgData.value = wechat
      break;
    case 'sponsor':
      imgData.value = sponsor
      break;
    default:
      break;
  }
}

</script>

<template>
  <!-- 背景特效组件 -->
  <CodeRain v-if="flag" />
  <StarSky v-else />
  <!-- 主体内容组件 -->
  <Content />
  <SwitchButton :displayBg="displayBg" />
  <!-- 联系方式组件 -->
  <Relation :showModal="showModal" />
  <!-- 个人联系方式展示组件 -->
  <Modals :imgData="imgData" />
</template>

<style scoped lang="scss"></style>
