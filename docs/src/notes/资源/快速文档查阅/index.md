---
sidebar: true
footer: false
---

<script setup lang='ts'>
import References from '/.vitepress/theme/components/References.vue'
import { ref } from 'vue'
const VueItems = ref<ReferenceItems>([
    {
        id: 1,
        title: 'Vue',
        link: 'https://cn.vuejs.org/',
        icon: 'https://cn.vuejs.org/logo.svg'
    },
    {
        id: 2,
        title: 'Pinia',
        link: 'https://pinia.vuejs.org/zh/',
        icon: 'https://pinia.vuejs.org/logo.svg'
    },
    {
        id: 3,
        title: 'Pinia Persisted',
        link: 'https://prazdevs.github.io/pinia-plugin-persistedstate/zh/',
        icon: 'https://prazdevs.github.io/pinia-plugin-persistedstate/logo.svg'
    },
])

const JavaScriptItems = ref<ReferenceItems>([
    {
        id: 1,
        title: '原型链可视化',
        link: 'https://shuaihuajun.github.io/project/jspro/',
        icon: 'https://shuaihuajun.github.io/favicon.ico'
    },
    {
	    id: 2,
	    title: 'highlightjs',
	    link: 'https://highlightjs.org/',
	    icon: 'https://highlightjs.org/icon.png'
	},
])

</script>

# 快速文档参考手册

## Vue 全家桶

<References :items="VueItems"/>


## JavaScript 基础

<References :items="JavaScriptItems"/>

