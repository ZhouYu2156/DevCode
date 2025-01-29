<script setup lang="ts">
// CPU 组件
import CPU from './components/CPU.vue'
import Disk from "@/components/Disk.vue";
import Battery from "@/components/Battery.vue";
import Memory from "@/components/Memory.vue";
import Network from "@/components/Network.vue";
import DiskIO from "@/components/DiskIO.vue";
import CPUUage from "@/components/CPUUage.vue";

</script>

<template>
  <div class="header">
    <h1 class="header-title">系统资源管理器</h1>
  </div>
  <div class="wrapper">
    <div class="content">
      <!--左边的面板-->
      <div class="col col-l">
        <div class="xpanel-wrapper xpanel-wrapper-40">
          <div class="xpanel xpanel-l-t">
            <div class="title title-cool">✨磁盘读写速度</div>
            <div class="mychart" style="height: 85%">
              <DiskIO />
            </div>
          </div>
        </div>
        <div class="xpanel-wrapper xpanel-wrapper-60">
          <div class="xpanel xpanel-l-b">
            <div class="title title-cool">💿磁盘使用率</div>
            <Disk/>
          </div>
        </div>
      </div>
      <!--中间的面板-->
      <div class="col col-c">
        <div class="xpanel-wrapper xpanel-wrapper-75">
          <div class="xpanel no-bg d-flex justify-content-evenly align-items-centers">
            <div class="mychart">
              <CPU/>
            </div>
          </div>
        </div>
        <div class="xpanel-wrapper xpanel-wrapper-25">
          <div class="xpanel xpanel-c-b">
            <div class="title title-long title-cool">🚀CPU过去60秒的利用率</div>
            <div class="mychart" style="height: 85%">
              <CPUUage />
              </div>
          </div>
        </div>
      </div>
      <!--右边的面板-->
      <div class="col col-r">
        <div class="xpanel-wrapper xpanel-wrapper-25">
          <div class="xpanel xpanel-r-t">
            <div class="title title-cool">🌐网络速度</div>
            <div class="mychart" style="height: 75%">
              <Network/>
            </div>
          </div>
        </div>
        <div class="xpanel-wrapper xpanel-wrapper-30">
          <div class="xpanel xpanel-r-m">
            <div class="title title-cool">💹内存使用率</div>
            <div class="mychart" style="height: 85%">
              <Memory />
            </div>
          </div>
        </div>
        <div class="xpanel-wrapper xpanel-wrapper-45">
          <div class="xpanel xpanel-r-b">
            <div class="title title-cool">🔋电源状态</div>
            <div class="mychart" style="height: 90%">
              <Battery/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mychart {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title-cool {
	color: aqua;
}
</style>
