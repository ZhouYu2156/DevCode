<script setup lang="ts">
import { ref } from 'vue'

const iptVal = ref('')

const search = (e: any) => {
  iptVal.value = e.target.value
  // 如果是回车事件   =>  进行百度搜索
  if (e.keyCode === 13) {
    window.open(
      // 打开新窗口用百度的搜索引擎进行检索信息给用户
      `https://www.baidu.com/s?ie=UTF-8&wd=${iptVal.value}`,
      '_blank'
    )
    // 帮用户把输入框清空
    iptVal.value = ''
  }
}
// 搜索按钮点击的处理程序
const submit = () => {
  window.open(
    // 打开新窗口用百度的搜索引擎进行检索信息给用户
    `https://www.baidu.com/s?ie=UTF-8&wd=${iptVal.value}`,
    '_blank'
  )
  iptVal.value = ''
}
</script>

<template>
  <div class="row align-items-center mt-5 gy-2">
    <div class="col-sm-10 col-md-8 col-lg-6 mx-auto">
      <div class="row align-self-center m-0 p-0">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="请输入关键字搜索" aria-label="请输入关键字搜索"
            aria-describedby="button-addon2" id="ipt_search" autocomplete="off" :value="iptVal" @change="search"
            @keydown="search" />
          <button class="btn btn-outline-primary" type="submit" id="ipt_btn" @click="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
              viewBox="0 0 16 16">
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            &nbsp;搜索
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
