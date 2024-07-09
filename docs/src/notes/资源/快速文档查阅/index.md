---
sidebar: true
footer: false
---

<script setup lang='ts'>
import References from '/.vitepress/theme/components/References.vue'
import { ref } from 'vue'

const JavaScriptItems = ref<ReferenceItems>([
    {
        id: 1,
        title: 'TypeScript',
        link: 'https://www.typescriptlang.org/',
        icon: 'https://www.typescriptlang.org/favicon-32x32.png'
    },
        {
	    id: 2,
	    title: '网道',
	    link: 'https://wangdoc.com/',
	    icon: 'https://wangdoc.com/assets/icons/favicon-32x32.png'
	},
    {
	    id: 3,
	    title: 'ES6',
	    link: 'https://es6.ruanyifeng.com/',
	    icon: 'https://es6.ruanyifeng.com/favicon.ico'
	},
    {
	    id: 4,
	    title: '快速文档查找',
	    link: 'https://cheatsheets.zip/',
	    icon: 'https://cheatsheets.zip/images/favicon.png'
	},
    {
	    id: 5,
	    title: 'Nodejs',
	    link: 'https://nodejs.org/',
	    icon: 'https://nodejs.org/static/images/favicons/favicon.png'
	},
    {
	    id: 6,
	    title: '菜鸟教程',
	    link: 'https://www.runoob.com/',
	    icon: '/favicon/cainiao.png'
	},
    {
        id: 7,
        title: 'w3schools',
        link: 'https://www.w3schools.com/',
        icon: 'https://www.w3schools.com/favicon.ico'
    },
    {
        id: 8,
        title: 'w3school',
        link: 'https://www.w3school.com.cn/',
        icon: 'https://www.w3school.com.cn/ui2019/logo-32-red.png'
    },
    {
        id: 9,
        title: '现代 JavaScript 教程',
        link: 'https://zh.javascript.info/',
        icon: 'https://zh.javascript.info/img/favicon/favicon.png'
    },
    {
        id: 10,
        title: 'MDN',
        link: 'https://developer.mozilla.org/',
        icon: 'https://developer.mozilla.org/favicon-48x48.cbbd161b.png'
    },
])

const JavaScriptToolItems = ref<ReferenceItems>([
    {
	    id: 1,
	    title: 'Axios',
	    link: 'https://www.axios-http.cn/',
	    icon: 'https://www.axios-http.cn/img/favicon.ico'
	},
    {
	    id: 2,
	    title: 'Babel',
	    link: 'https://www.babeljs.cn/',
	    icon: 'https://www.babeljs.cn/img/favicon.png'
	},
    {
	    id: 3,
	    title: 'highlightjs',
	    link: 'https://highlightjs.org/',
	    icon: 'https://highlightjs.org/icon.png'
	},
    {
	    id: 4,
	    title: 'Dayjs',
	    link: 'https://dayjs.fenxianglu.cn/',
	    icon: 'https://dayjs.fenxianglu.cn/assets/favicon.png'
	},
    {
	    id: 5,
	    title: 'jQuery',
	    link: 'https://www.jquery123.com/',
	    icon: 'https://www.jquery123.com/assets/images/favicon.ico'
	},
])

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
    {
        id: 4,
        title: 'PrimeVue',
        link: 'https://primevue.org/',
        icon: 'https://primevue.org/favicon.ico'
    },
    {
        id: 5,
        title: 'Naive UI',
        link: 'https://www.naiveui.com/',
        icon: 'https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg'
    },
    {
        id: 6,
        title: 'Element Plus',
        link: 'https://element-plus.org/zh-CN/',
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg'
    },
    {
        id: 7,
        title: 'Nuxt',
        link: 'https://www.nuxtjs.cn/',
        icon: 'https://www.nuxtjs.cn/favicon.ico'
    },
    {
        id: 8,
        title: 'VitePress',
        link: 'https://vitepress.qzxdp.cn/',
        icon: 'https://vitepress.qzxdp.cn/vitepress-logo-mini.svg'
    },
    {
        id: 9,
        title: 'Vite',
        link: 'https://vitejs.cn',
        icon: 'https://vitejs.cn/logo.svg'
    },
])

const ReactItems = ref<ReferenceItems>([
    {
        id: 1,
        title: 'React',
        link: 'https://react.docschina.org/',
        icon: 'https://react.docschina.org/favicon.ico'
    },
    {
        id: 2,
        title: 'Next UI',
        link: 'https://nextui.org/',
        icon: 'https://nextui.org/favicon.ico'
    },
    {
        id: 3,
        title: 'Ant Design',
        link: 'https://4x.ant.design/',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
    },
    {
        id: 4,
        title: 'Material UI',
        link: 'https://mui.com/material-ui/',
        icon: 'https://mui.com/static/favicon.ico'
    },
    {
        id: 5,
        title: 'Chakra UI',
        link: 'https://v2.chakra-ui.com/',
        icon: 'https://v2.chakra-ui.com/favicon.png'
    },
    {
        id: 5,
        title: 'Nextjs',
        link: 'https://www.nextjs.cn/',
        icon: 'https://www.nextjs.cn/static/favicon/favicon-32x32.png'
    },
])

const PythonItems = ref([
    {
        id: 1,
        title: 'Python',
        link: 'https://www.python.org/',
        icon: 'https://www.python.org/static/favicon.ico'
    },
])


const LinuxItems = ref([
    {
        id: 1,
        title: 'Nginx',
        link: 'https://nginx.org/',
        icon: 'https://nginx.org/favicon.ico'
    },
])


</script>

# 快速文档参考手册

## JavaScript & TypeScript
<References :items="JavaScriptItems"/>

## JS 工具库
<References :items="JavaScriptToolItems"/>

## Vue 全家桶
<References :items="VueItems"/>

## React 全家桶
<References :items="ReactItems"/>

## Python 技术
<References :items="PythonItems"/>

## Linux 运维
<References :items="LinuxItems"/>
