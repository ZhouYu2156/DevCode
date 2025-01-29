<script setup lang='ts'>
import { ref } from 'vue'
import Search from './Search.vue';
import { Fragment } from 'vue';

type PageItemsType = {
    itemName: string
    itemUrl: string
    itemImg: string
}[]
const links = ref<PageItemsType[]>([
    // 第一页
    [
        {
            itemName: "vitepress中文网",
            itemUrl: "https://vitepress.qzxdp.cn/",
            itemImg: "https://vitepress.qzxdp.cn/vitepress-logo-mini.svg",
        },
        {
            itemName: "Vite中文网",
            itemUrl: "https://vitejs.cn/",
            itemImg: "https://vitejs.cn/logo.svg",
        },
        {
            itemName: "jQuery中文网",
            itemUrl: "https://www.jquery123.com/",
            itemImg: "https://www.jquery123.com/assets/images/favicon.ico",
        },
        {
            itemName: "Bootstrap5中文网",
            itemUrl: "https://v5.bootcss.com/",
            itemImg:
                "https://v5.bootcss.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
        {
            itemName: "Less中文网",
            itemUrl: "https://less.bootcss.com/",
            itemImg: "https://lesscss.org/public/ico/favicon.ico",
        },
        {
            itemName: "Sass中文网",
            itemUrl: "https://code.z01.com/sass/",
            itemImg: "https://www.sasscss.com/favicon.ico",
        },
        {
            itemName: "Vue2",
            itemUrl: "https://v2.cn.vuejs.org/",
            itemImg: "https://v2.cn.vuejs.org/images/logo.svg",
        },
        {
            itemName: "Vue3",
            itemUrl: "https://vuejs.org/",
            itemImg: "https://vuejs.org/logo.svg",
        },
        {
            itemName: "React中文文档",
            itemUrl: "https://zh-hans.reactjs.org/",
            itemImg:
                "https://zh-hans.reactjs.org/favicon-32x32.png?v=f4d46f030265b4c48a05c999b8d93791",
        },
        {
            itemName: "React官网",
            itemUrl: "https://reactjs.org/",
            itemImg: "https://reactjs.org/logo-180x180.png",
        },
        {
            itemName: "StaticFile",
            itemUrl: "https://staticfile.net/",
            itemImg: "https://staticfile.net/images/favicon.ico",
        },
        {
            itemName: "TypeScript官网",
            itemUrl: "https://www.typescriptlang.org/",
            itemImg: "https://www.typescriptlang.org/icons/icon-144x144.png",
        },
    ],
    // 第二页
    [
        {
            itemName: "dfairy的博客",
            itemUrl: "https://dfairy.github.io/dfairyblog/",
            itemImg:
                "https://dfairy-1258930237.cos.ap-shanghai.myqcloud.com/test.png",
        },
        {
            itemName: "Frontend博客",
            itemUrl: "https://brucecai55520.gitee.io/my-notes/#/",
            itemImg:
                "https://brucecai55520.gitee.io/my-notes/_media/favicon.ico",
        },
        {
            itemName: "Electron",
            itemUrl: "https://www.electronjs.org/",
            itemImg:
                "https://static.oschina.net/uploads/logo/electron_tAOTZ.png",
        },
        {
            itemName: "Requests官网",
            itemUrl: "https://requests.readthedocs.io/en/latest/",
            itemImg: "https://requests.readthedocs.io/favicon.ico",
        },
        {
            itemName: "EChart可视化",
            itemUrl: "https://echarts.apache.org/zh/index.html",
            itemImg: "https://echarts.apache.org/zh/images/favicon.png",
        },
        {
            itemName: "Node官网",
            itemUrl: "https://nodejs.dev/",
            itemImg: "https://nodejs.org/static/images/favicons/favicon.png",
        },
        {
            itemName: "TypeScript",
            itemUrl: "https://www.typescriptlang.org/zh/",
            itemImg:
                "https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae",
        },
        {
            itemName: "JS原型链图谱",
            itemUrl: "https://shuaihuajun.github.io/project/jspro/",
            itemImg: "https://shuaihuajun.github.io/favicon.ico",
        },
        {
            itemName: "阮一峰ES6文档",
            itemUrl: "https://es6.ruanyifeng.com/#docs/symbol",
            itemImg: "https://es6.ruanyifeng.com/favicon.ico",
        },
        {
            itemName: "现代 JavaScript 教程",
            itemUrl: "https://zh.javascript.info/",
            itemImg:
                "https://zh.javascript.info/img/favicon/apple-touch-icon-precomposed.png",
        },
        {
            itemName: "网道",
            itemUrl: "https://wangdoc.com/",
            itemImg: "https://wangdoc.com/assets/icons/favicon-32x32.png",
        },
        {
            itemName: "快速参考",
            itemUrl: "https://cheatsheets.zip/",
            itemImg: "https://cheatsheets.zip/images/favicon.png",
        },
    ],
    // 第三页
    [
        {
            itemName: "W3C",
            itemUrl: "https://www.w3school.com.cn/",
            itemImg: "https://www.w3school.com.cn/ui2019/logo-180.png",
        },
        {
            itemName: "菜鸟教程",
            itemUrl: "https://www.runoob.com/",
            itemImg:
                "https://www.runoob.com/wp-content/themes/runoob/assets/img/runoob-logo.png",
        },
        {
            itemName: "图解算法",
            itemUrl: "https://www.hello-algo.com/",
            itemImg: "https://www.hello-algo.com/assets/images/logo.svg",
        },
        {
            itemName: "LeetCode",
            itemUrl: "https://leetcode.cn/",
            itemImg:
                "https://static.leetcode.cn/cn-mono-assets/production/assets/favicon-notification-32x32.3f045777.png",
        },
        {
            itemName: "CS-Notes面经",
            itemUrl: "https://www.cyc2018.xyz/",
            itemImg: "https://www.cyc2018.xyz/logo.png",
        },
        {
            itemName: "极简插件",
            itemUrl: "https://chrome.zzzmh.cn/#/index",
            itemImg: "https://chrome.zzzmh.cn/favicon.ico",
        },
        {
            itemName: "Babel.js",
            itemUrl: "https://www.babeljs.cn/",
            itemImg: "https://www.babeljs.cn/img/babel.png",
        },
        {
            itemName: "CodePen",
            itemUrl: "https://codepen.io/",
            itemImg:
                "https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico",
        },
        {
            itemName: "Axios中文网",
            itemUrl: "https://www.axios-http.cn/",
            itemImg: "https://www.axios-http.cn/img/favicon.ico",
        },
        {
            itemName: "CDN免费资源库",
            itemUrl: "https://cdnjs.com/",
            itemImg: "https://cdnjs.com/_/f7a2ebfb819c118086546e481876aef6.svg",
        },
        {
            itemName: "LayUI中文网",
            itemUrl: "http://layui.apixx.net/index.html",
            itemImg: "http://layui.apixx.net/res/static/images/layui/logo.png",
        },
        {
            itemName: "阿里图标库",
            itemUrl: "https://www.iconfont.cn/",
            itemImg:
                "https://img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg",
        },
    ],
    // 第四页
    [
        {
            itemName: "Bilibili",
            itemUrl: "https://www.bilibili.com/",
            itemImg: "https://www.bilibili.com/favicon.ico?v=1",
        },
        {
            itemName: "Bootstrap5官网",
            itemUrl: "https://getbootstrap.com/",
            itemImg:
                "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
        {
            itemName: "Less官网",
            itemUrl: "https://lesscss.org/",
            itemImg: "https://lesscss.org/public/ico/favicon.ico",
        },
        {
            itemName: "Sass官网",
            itemUrl: "https://www.sasscss.com/",
            itemImg: "https://www.sasscss.com/favicon.ico",
        },
        {
            itemName: "编程导航",
            itemUrl: "https://www.code-nav.cn",
            itemImg: "https://www.code-nav.cn/favicon.ico",
        },
        {
            itemName: "markdown中文网",
            itemUrl: "https://markdown.com.cn/",
            itemImg: "https://markdown.com.cn/hero.png",
        },
        {
            itemName: "GitHub",
            itemUrl: "https://github.com/",
            itemImg:
                "https://github.githubassets.com/apple-touch-icon-144x144.png",
        },
        {
            itemName: "Gitee",
            itemUrl: "https://gitee.com/",
            itemImg: "https://gitee.com/static/images/logo-en.svg",
        },
        {
            itemName: "dowebok",
            itemUrl: "https://www.dowebok.com/code",
            itemImg: "https://www.dowebok.com/favicon.ico",
        },
        {
            itemName: "Python",
            itemUrl: "https://www.python.org/",
            itemImg: "https://www.python.org/static/favicon.ico",
        },
        {
            itemName: "开源中国",
            itemUrl: "https://www.oschina.net/",
            itemImg: "https://static.oschina.net/new-osc/img/favicon.ico",
        },
        {
            itemName: "博客园",
            itemUrl: "https://www.cnblogs.com/",
            itemImg:
                "https://www.cnblogs.com/images/logo.svg?v=2SMrXdIvlZwVoB1akyXm38WIKuTHVqvGD0CweV-B6cY",
        },
    ],
    // 第五页
    [
        {
            itemName: "程序员客栈",
            itemUrl: "https://www.proginn.com/",
            itemImg: "https://stacdn.proginn.com/favicon_new.ico",
        },
        {
            itemName: "CSDN",
            itemUrl: "https://www.csdn.net/",
            itemImg: "https://g.csdnimg.cn/static/logo/favicon32.ico",
        },
        {
            itemName: "掘金",
            itemUrl: "https://juejin.cn/",
            itemImg:
                "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg",
        },
        {
            itemName: "jq22",
            itemUrl: "https://www.jq22.com/",
            itemImg: "https://www.jq22.com/favicon.ico",
        },
        {
            itemName: "VSCode扩展库",
            itemUrl: "https://marketplace.visualstudio.com/VSCode",
            itemImg:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg-blog.csdnimg.cn%2Fimg_convert%2F18d43cb7f037e1c91dfd7b0c34b8df51.png&refer=http%3A%2F%2Fimg-blog.csdnimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650106249&t=4f0d6124d9884c3163b027c4f6d9e331",
        },
        {
            itemName: "Oracle",
            itemUrl: "https://www.oracle.com/index.html",
            itemImg:
                "https://img0.baidu.com/it/u=3702964089,2580827107&fm=253&fmt=auto&app=138&f=JPG?w=300&h=300",
        },
        {
            itemName: "前端文档工具",
            itemUrl: "https://www.html.cn/nav/",
            itemImg:
                "https://img0.baidu.com/it/u=2182900381,3413934517&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        },
        {
            itemName: "Jetbrains",
            itemUrl: "https://www.jetbrains.com/",
            itemImg:
                "https://img1.baidu.com/it/u=2436362558,3606528205&fm=253&fmt=auto&app=138&f=JPG?w=462&h=407",
        },
        {
            itemName: "MDN参考文档",
            itemUrl: "https://developer.mozilla.org/zh-CN/",
            itemImg:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftm-image.tianyancha.com%2Ftm%2F61b45ce7b585e95dd32f8e6f1cad7d01.jpg&refer=http%3A%2F%2Ftm-image.tianyancha.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650446605&t=2b077639b7f057d9a1065e9aeee963ef",
        },
        {
            itemName: "CSDN技能树",
            itemUrl: "https://edu.csdn.net/skill/algorithm",
            itemImg: "https://g.csdnimg.cn/static/logo/favicon32.ico",
        },
        {
            itemName: "NPM官网",
            itemUrl: "https://www.npmjs.com/",
            itemImg:
                "https://static-production.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png",
        },
        {
            itemName: "资格考试网大全",
            itemUrl:
                "https://www.zhouyu2156.cn/Programming/static/media/qualifications.3a39346203af573b5fb9.pdf",
            itemImg:
                "https://img0.baidu.com/it/u=2924816533,2411706728&fm=253&fmt=auto&app=138&f=JPEG?w=507&h=500",
        },
    ],
    // 第六页
    [
        {
            itemName: "HTML实时标准",
            itemUrl: "https://html.spec.whatwg.org/",
            itemImg: "https://resources.whatwg.org/logo.svg",
        },
        {
            itemName: "免费网页特效",
            itemUrl: "https://www.html5tricks.com/tag/html5%E5%8A%A8%E7%94%BB/",
            itemImg: "https://www.w3.org/html/logo/img/html5-topper.png",
        },
        {
            itemName: "站长之家",
            itemUrl: "https://sc.chinaz.com/tag_jiaoben/HTML5.html",
            itemImg:
                "https://img1.baidu.com/it/u=1307035692,2865310833&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=452",
        },
        {
            itemName: "特效大全",
            itemUrl: "http://www.bootstrapmb.com/",
            itemImg:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg95.699pic.com%2Fxsj%2F0t%2Fut%2F6q.jpg%21%2Ffw%2F700%2Fwatermark%2Furl%2FL3hzai93YXRlcl9kZXRhaWwyLnBuZw%2Falign%2Fsoutheast&refer=http%3A%2F%2Fimg95.699pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650818865&t=937545ab6fe772f543e2ddd4ec9d255e",
        },
        {
            itemName: "jQuery之家",
            itemUrl: "http://www.htmleaf.com/",
            itemImg:
                "http://www.htmleaf.com/templets/default/images/ico/apple-touch-icon.png",
        },
        {
            itemName: "Bootstrap",
            itemUrl: "https://www.bootcss.com/",
            itemImg:
                "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.53/dist/ico/favicon.ico",
        },
        {
            itemName: "TailwindCSS",
            itemUrl: "https://www.tailwindcss.cn/",
            itemImg: "https://www.tailwindcss.cn/favicons/favicon.ico?v=3",
        },
        {
            itemName: "Svelte.js",
            itemUrl: "https://www.sveltejs.cn/",
            itemImg: "https://www.sveltejs.cn/favicon.png",
        },
        {
            itemName: "Lodash",
            itemUrl: "https://www.lodashjs.com/",
            itemImg: "https://www.lodashjs.com/img/logo.png",
        },
        {
            itemName: "Grunt",
            itemUrl: "https://www.gruntjs.net/",
            itemImg: "https://www.gruntjs.net/img/favicons/favicon-32x32.png",
        },
        {
            itemName: "Gulp",
            itemUrl: "https://www.gulpjs.com.cn/",
            itemImg: "https://www.gulpjs.com.cn/img/favicon.png",
        },
        {
            itemName: "npm",
            itemUrl: "https://www.npmjs.cn/",
            itemImg: "https://www.npmjs.cn/images/npm.svg",
        },
    ],
    // 第七页
    [
        {
            itemName: "pnpm",
            itemUrl: "https://www.pnpm.cn/",
            itemImg: "https://www.pnpm.cn/img/logos/pnpm-standard-no-text.png",
        },
        {
            itemName: "Yarn",
            itemUrl: "https://www.yarnpkg.cn/",
            itemImg:
                "https://www.yarnpkg.cn/favicon-32x32.png?v=6143f50112ddba9fdb635b0af2f32aff",
        },
        {
            itemName: "webpack",
            itemUrl: "https://www.webpackjs.com/",
            itemImg:
                "https://www.webpackjs.com/favicon.f326220248556af65f41.ico",
        },
        {
            itemName: "Rollup.js",
            itemUrl: "https://www.rollupjs.com/",
            itemImg: "https://www.rollupjs.com/img/favicon.png",
        },
        {
            itemName: "Parcel",
            itemUrl: "https://www.parceljs.cn/",
            itemImg: "https://www.parceljs.cn/assets/favicon.ico",
        },
        {
            itemName: "PostCSS",
            itemUrl: "https://www.postcss.com.cn/",
            itemImg: "https://www.postcss.com.cn/assets/favicon-659f5617.ico",
        },
        {
            itemName: "Next.js",
            itemUrl: "https://www.nextjs.cn/",
            itemImg: "https://www.nextjs.cn/static/favicon/favicon-32x32.png",
        },
        {
            itemName: "Nuxt.js",
            itemUrl: "https://www.nuxtjs.cn/",
            itemImg: "https://www.nuxtjs.cn/icon.png",
        },
        {
            itemName: "Docusaurus",
            itemUrl: "https://www.docusaurus.cn/",
            itemImg: "https://www.docusaurus.cn/img/docusaurus.svg",
        },
        {
            itemName: "Gatsby.js",
            itemUrl: "https://www.gatsbyjs.cn/",
            itemImg:
                "https://www.gatsbyjs.cn/icons/icon-48x48.png?v=edf3d310d67f8284a562bc3a58c3e761",
        },
        {
            itemName: "Gridsome",
            itemUrl: "https://www.gridsome.cn/",
            itemImg:
                "https://www.gridsome.cn/assets/static/favicon.b9532cc.c6d52b979318cc0b0524324281174df2.png",
        },
        {
            itemName: "VuePress",
            itemUrl: "https://www.vuepress.cn/",
            itemImg:
                "https://www.vuepress.cn/icons/msapplication-icon-144x144.png",
        },
    ],
    // 第八页
    [
        {
            itemName: "React构建教程",
            itemUrl: "https://create-react-app.dev/",
            itemImg: "https://create-react-app.dev/img/logo.svg",
        },
        {
            itemName: "DayJS",
            itemUrl: "https://dayjs.fenxianglu.cn/",
            itemImg: "https://dayjs.fenxianglu.cn/assets/logo.png",
        },
        {
            itemName: "EasyUI官网",
            itemUrl: "https://www.jeasyui.net/",
            itemImg:
                "https://www.jeasyui.net/Application/Home/View/Public/img/favicon.ico",
        },
        {
            itemName: "jQueryAPI文档",
            itemUrl: "https://jqueryapi.net/",
            itemImg: "https://jqueryapi.net/favicon.ico",
        },
        {
            itemName: "PurgeCSS",
            itemUrl: "https://www.purgecss.cn/",
            itemImg: "https://www.purgecss.cn/img/logo.png",
        },
        {
            itemName: "cssnano",
            itemUrl: "https://www.cssnano.cn/",
            itemImg: "https://www.cssnano.cn/img/favicon.ico",
        },
        {
            itemName: "WebAssembly",
            itemUrl: "https://www.wasm.com.cn/",
            itemImg: "https://www.wasm.com.cn/css/webassembly.png",
        },
        {
            itemName: "Redux.js",
            itemUrl: "https://www.reduxjs.cn/",
            itemImg: "https://www.reduxjs.cn/img/favicon/favicon.ico",
        },
        {
            itemName: "Markdown",
            itemUrl: "https://www.markdown.xyz/",
            itemImg: "https://www.markdown.xyz/favicon.ico",
        },
        {
            itemName: "Fastify",
            itemUrl: "https://www.fastify.cn/",
            itemImg:
                "https://www.fastify.cn/images/apple-icon-72x72.e49b27cfe1ab1461.png",
        },
        {
            itemName: "Rome",
            itemUrl: "https://www.romejs.cn/",
            itemImg: "https://www.romejs.cn/img/rome-logo-black.png",
        },
        {
            itemName: "Mirage",
            itemUrl: "https://www.miragejs.cn/",
            itemImg:
                "https://www.miragejs.cn/favicon-32x32.png?v=4b2671f784721600311c3551544b1101",
        },
    ],
    // 第九页
    [
        {
            itemName: "goHugo",
            itemUrl: "https://www.gohugo.cn/",
            itemImg: "https://www.gohugo.cn/favicon-32x32.png",
        },
        {
            itemName: "Deno",
            itemUrl: "https://www.denojs.cn/",
            itemImg: "https://www.denojs.cn/img/favicon.ico",
        },
        {
            itemName: "Sapper",
            itemUrl: "https://www.sapperjs.com/",
            itemImg: "https://www.sapperjs.com/favicon.png",
        },
        {
            itemName: "Sequelize",
            itemUrl: "https://www.sequelize.com.cn/",
            itemImg: "https://www.sequelize.cn/img/logo.png",
        },
        {
            itemName: "ProGit",
            itemUrl: "https://www.progit.cn/",
            itemImg: "https://www.progit.cn/images/cover.png",
        },
        {
            itemName: "TypeScript",
            itemUrl: "https://typescript.bootcss.com/",
            itemImg: "https://typescript.bootcss.com/favicon.ico",
        },
        {
            itemName: "Preact",
            itemUrl: "https://www.preactjs.com.cn/",
            itemImg: "https://www.preactjs.com.cn/favicon.ico",
        },
        {
            itemName: "Recoil",
            itemUrl: "https://www.recoiljs.cn/",
            itemImg: "https://www.recoiljs.cn/img/favicon.png",
        },
        {
            itemName: "Handlebars",
            itemUrl: "https://www.handlebarsjs.cn/",
            itemImg:
                "https://www.handlebarsjs.cn/images/handlebars_logo_bg.png",
        },
        {
            itemName: "Express",
            itemUrl: "https://www.expressjs.com.cn/",
            itemImg: "https://www.expressjs.com.cn/images/favicon.png",
        },
        {
            itemName: "Jest",
            itemUrl: "https://www.jestjs.cn/",
            itemImg: "https://www.jestjs.cn/img/jest.png",
        },
        {
            itemName: "Nginx",
            itemUrl: "https://www.cnginx.com/",
            itemImg: "https://www.cnginx.com/nginx.png",
        },
    ],
    // 第十页
    [
        {
            itemName: "FrozenUI",
            itemUrl: "http://frozenui.github.io/",
            itemImg: "http://frozenui.github.io/assets/img/logo.png",
        },
        {
            itemName: "醉牛前端",
            itemUrl: "https://f2er.club/",
            itemImg: "https://f2er.club/img/favicon.ico",
        },
        {
            itemName: "PyQt框架",
            itemUrl: "https://www.qt.io/zh-cn/",
            itemImg:
                "https://www.qt.io/hubfs/qt-design-system/assets/logos/qt-logo.svg",
        },
        {
            itemName: "Vant",
            itemUrl: "https://youzan.github.io/vant/#/zh-CN",
            itemImg: "https://cdn.jsdelivr.net/npm/@vant/assets/logo.png",
        },
        {
            itemName: "Blitz",
            itemUrl: "https://www.blitzjs.cn/",
            itemImg: "https://www.blitzjs.cn/32x32-Favicon-Purple.png",
        },
        {
            itemName: "Alpine.js",
            itemUrl: "https://www.alpinejs.cn/",
            itemImg: "https://www.alpinejs.cn/img/logo.png",
        },
        {
            itemName: "Lerna",
            itemUrl: "https://www.lernajs.cn/",
            itemImg: "https://www.lernajs.cn/images/lerna-hero.svg",
        },
        {
            itemName: "Strapi",
            itemUrl: "https://www.strapi.cn/",
            itemImg: "https://strapi.io/assets/favicon-32x32.png",
        },
        {
            itemName: "Layui",
            itemUrl: "https://layui.dev/",
            itemImg: "https://layui.dev/favicon.ico",
        },
        {
            itemName: "TopUI框架",
            itemUrl: "http://demo.topjui.com/",
            itemImg: "http://demo.topjui.com/topjui/images/logo.png",
        },
        {
            itemName: "EasyUI中文文档",
            itemUrl: "https://www.jeasyui.cn/",
            itemImg: "https://www.jeasyui.cn/favicon.ico",
        },
        {
            itemName: "阿里React组件库",
            itemUrl: "https://ant.design/index-cn",
            itemImg:
                "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
        },
    ],
    // 第十一页
    [
        {
            itemName: "Element-UI",
            itemUrl: "https://element-plus.org/zh-CN/",
            itemImg: "https://element-plus.org/images/element-plus-logo.svg",
        },
        {
            itemName: "VARLET框架",
            itemUrl: "https://varlet.gitee.io/varlet-ui/#/zh-CN/home",
            itemImg: "https://varlet.gitee.io/varlet-ui/varlet_icon.png",
        },
        {
            itemName: "Hutool",
            itemUrl: "https://hutool.cn/",
            itemImg: "https://plus.hutool.cn/images/logo_484.png",
        },
        {
            itemName: "LeafLetJS",
            itemUrl: "https://leafletjs.com/",
            itemImg: "https://leafletjs.com/docs/images/favicon.ico",
        },
        {
            itemName: "MDN文档",
            itemUrl: "https://developer.mozilla.org/zh-CN/",
            itemImg: "https://developer.mozilla.org/favicon-48x48.cbbd161b.png",
        },
        {
            itemName: "HTML标准",
            itemUrl: "https://html.spec.whatwg.org/",
            itemImg: "https://resources.whatwg.org/logo.svg",
        },
        {
            itemName: "CanvasAPI",
            itemUrl: "https://www.canvasapi.cn/",
            itemImg: "https://www.canvasapi.cn/favicon.ico",
        },
        {
            itemName: "Cesium3D",
            itemUrl: "https://cesium.com/",
            itemImg: "https://cesium.com/cesium-logomark-192.png",
        },
        {
            itemName: "花瓣资源",
            itemUrl: "https://www.hbzyz.org/",
            itemImg:
                "https://www.hbzyz.org/zb_users/upload/2020/11/202011221606031120713778.png",
        },
        {
            itemName: "EnglishClub",
            itemUrl: "https://www.englishclub.com/",
            itemImg: "https://www.englishclub.com/favicon-32x32.png",
        },
        {
            itemName: "查字典",
            itemUrl: "https://www.chazidian.com/",
            itemImg: "https://www.chazidian.com/favicon.ico",
        },
        {
            itemName: "Cambridge",
            itemUrl: "https://dictionary.cambridge.org/",
            itemImg:
                "https://dictionary.cambridge.org/external/images/og-image.png",
        },
    ],
    // 第十二页
    [
        {
            itemName: "数据分析",
            itemUrl: "https://spssau.com/",
            itemImg: "https://spssau.com/favicon.png",
        },
        {
            itemName: "全历史",
            itemUrl: "https://www.allhistory.com/",
            itemImg:
                "https://static.allhistory.com/online/common/img/logo-ah.5721.png",
        },
        {
            itemName: "EasyUI官网",
            itemUrl: "http://www.jeasyui.com/",
            itemImg: "https://www.jeasyui.com/favicon.ico",
        },
        {
            itemName: "EasyUI文档",
            itemUrl: "https://www.jeasyui.net/",
            itemImg:
                "https://www.jeasyui.net/Application/Home/View/Public/img/favicon.ico",
        },
        {
            itemName: "MatPlotLib",
            itemUrl: "https://matplotlib.org/",
            itemImg: "https://matplotlib.org/_static/favicon.ico",
        },
        {
            itemName: "Anaconda",
            itemUrl: "https://www.anaconda.com/",
            itemImg:
                "https://www.anaconda.com/wp-content/uploads/2022/12/cropped-site_logo-1-32x32.png",
        },
        {
            itemName: "NumPy",
            itemUrl: "http://www.numpy.org.cn/",
            itemImg: "https://static.numpy.thto.net/site/logo.png",
        },
        {
            itemName: "Pandas",
            itemUrl: "https://pandas.pydata.org/",
            itemImg: "https://pandas.pydata.org/static/img/pandas_white.svg",
        },
        {
            itemName: "Pandas中文",
            itemUrl: "https://www.pypandas.cn/",
            itemImg: "https://static.pypandas.thto.net/site/logo.png",
        },
        {
            itemName: "PyTorch",
            itemUrl: "https://pytorch.org/",
            itemImg: "https://pytorch.org/favicon.ico",
        },
        {
            itemName: "百度开放平台",
            itemUrl: "https://ai.baidu.com/",
            itemImg:
                "https://aip.bdstatic.com/portal-pc-node/dist/1652787772063/favicon-32.ico",
        },
        {
            itemName: "PyQt",
            itemUrl: "https://www.qt.io/zh-cn/",
            itemImg:
                "https://www.qt.io/hubfs/qt-design-system/assets/logos/qt-logo.svg",
        },
    ],
    // 第十三页
    [
        {
            itemName: "扩展迷",
            itemUrl: "https://www.extfans.com/",
            itemImg:
                "https://static-public.infinitytab.com/sites-resource/extfans/61ea85a31aec3f3365dbe165/icon_1642759665914.jpg",
        },
        {
            itemName: "画夹插件",
            itemUrl: "https://huajiakeji.com/",
            itemImg: "https://huajiakeji.com/favicon.ico",
        },
        {
            itemName: "插件大全",
            itemUrl: "http://cd.cduukj.com/",
            itemImg:
                "http://cd.cduukj.com/wp-content/uploads/2020/09/2020092723174661.ico",
        },
        {
            itemName: "Git官网",
            itemUrl: "https://git-scm.com/",
            itemImg: "https://git-scm.com/favicon.ico",
        },
        {
            itemName: "Gitee码云",
            itemUrl: "https://gitee.com/",
            itemImg: "https://gitee.com/static/images/logo_themecolor.png",
        },
        {
            itemName: "百度翻译",
            itemUrl: "https://fanyi.baidu.com/home",
            itemImg: "https://fanyi.baidu.com/favicon.ico",
        },
        {
            itemName: "百度地图API",
            itemUrl: "https://lbsyun.baidu.com/",
            itemImg:
                "https://mapopen-website-wiki.cdn.bcebos.com/LOGO/lbsyunlogo_icon.ico",
        },

        {
            itemName: "D3.js",
            itemUrl: "https://d3js.org/",
            itemImg: "https://d3js.org/logo.png",
        },
        {
            itemName: "Microsoft官网",
            itemUrl: "https://www.microsoft.com/zh-cn/",
            itemImg: "https://c.s-microsoft.com/favicon.ico?v2",
        },
        {
            itemName: "InfoQ",
            itemUrl: "https://www.infoq.cn",
            itemImg:
                "https://static001.geekbang.org/static/infoq/www/img/logo.290b04ab.png",
        },
        {
            itemName: "HTML实时标准",
            itemUrl: "https://whatwg-cn.github.io/html/",
            itemImg: "https://resources.whatwg.org/logo.svg",
        },
        {
            itemName: "思否",
            itemUrl: "https://segmentfault.com/",
            itemImg:
                "https://static-test.segmentfault.com/main_site_next/f6b26975/favicon.ico",
        },
    ],
    // 第十四页
    [
        {
            itemName: "牛客网",
            itemUrl: "https://www.nowcoder.com/",
            itemImg: "https://static.nowcoder.com/fe/file/logo/1.png",
        },
        {
            itemName: "Vue3中文网",
            itemUrl: "https://staging-cn.vuejs.org/",
            itemImg: "https://staging-cn.vuejs.org/logo.svg",
        },
        {
            itemName: "Vue脚手架",
            itemUrl: "https://cli.vuejs.org/zh/",
            itemImg: "https://staging-cn.vuejs.org/logo.svg",
        },
        {
            itemName: "React脚手架",
            itemUrl: "https://create-react-app.bootcss.com/",
            itemImg:
                "https://create-react-app.bootcss.com/img/favicon/favicon.ico",
        },
        {
            itemName: "python中文网",
            itemUrl: "https://www.python-china.com/",
            itemImg: "https://www.python.org/static/favicon.ico",
        },
        {
            itemName: "即时设计",
            itemUrl: "https://js.design/home",
            itemImg: "https://img.js.design/assets/webImg/favicon.ico",
        },
        {
            itemName: "虎课网",
            itemUrl: "https://huke88.com/",
            itemImg: "https://huke88.com/favicon.ico",
        },
        {
            itemName: "慕课网",
            itemUrl: "https://www.imooc.com/",
            itemImg: "https://www.imooc.com/favicon.ico",
        },
        {
            itemName: "传智播客",
            itemUrl: "https://www.itcast.cn/",
            itemImg: "https://www.itcast.cn/images/logo2020.jpg",
        },
        {
            itemName: "Adobe",
            itemUrl: "https://www.adobe.com/cn/",
            itemImg: "https://www.adobe.com/favicon.ico",
        },
        {
            itemName: "Markdown",
            itemUrl: "https://markdown.com.cn/",
            itemImg: "https://markdown.com.cn/hero.png",
        },
        {
            itemName: "知末",
            itemUrl: "https://www.znzmo.com/",
            itemImg: "https://cdn.code.znzmo.com/lanmuUpdate/img/favicon.ico",
        },
    ],
    // 第十五页
    [
        {
            itemName: "Pixijs",
            itemUrl: "https://pixijs.com/",
            itemImg: "https://pixijs.com/images/favicon.png",
        },
        {
            itemName: "软考官网",
            itemUrl: "https://www.ruankao.org.cn/",
            itemImg: "https://www.ruankao.org.cn/asset/image/logo/logo.png",
        },
        {
            itemName: "pip官网",
            itemUrl: "https://pypi.org/",
            itemImg: "https://pypi.org/static/images/logo-small.2a411bc6.svg",
        },
        {
            itemName: "100百分自考网",
            itemUrl: "https://www.exam100.net/html/zkzn/",
            itemImg: "https://www.exam100.net/favicon.ico",
        },
        {
            itemName: "学信网",
            itemUrl: "https://www.chsi.com.cn/",
            itemImg: "https://t1.chei.com.cn/chsi/favicon.ico",
        },
        {
            itemName: "会计网",
            itemUrl: "http://kzp.mof.gov.cn/",
            itemImg: "http://kzp.mof.gov.cn/assets/images/favicon.ico",
        },
        {
            itemName: "全国普通话考试",
            itemUrl: "http://www.cltt.org/#/webHome",
            itemImg: "https://www.cltt.org/favicon.ico",
        },
        {
            itemName: "中国教育考试网",
            itemUrl: "http://www.neea.edu.cn/",
            itemImg: "http://www.neea.edu.cn/res/Home/structure/22051678.png",
        },
        {
            itemName: "免费API",
            itemUrl: "https://api.aa1.cn/",
            itemImg:
                "https://www.wpon.cn/wp-content/uploads/2021/06/cropped-2021061403342088-192x192.png",
        },
        {
            itemName: "Apifox",
            itemUrl: "https://www.apifox.cn/",
            itemImg: "https://cdn.apifox.cn/logo/apifox-logo-512.png",
        },
        {
            itemName: "聚合数据API",
            itemUrl: "https://www.juhe.cn/",
            itemImg: "https://www.juhe.cn/favicon.ico",
        },
        {
            itemName: "Lightly",
            itemUrl: "https://lightly.teamcode.com/",
            itemImg: "https://lightly.teamcode.com/favicon.svg",
        },
    ],
    // 第十六页
    [
        {
            itemName: "网站模板素材",
            itemUrl: "https://www.17sucai.com/category/31",
            itemImg: "https://www.17sucai.com/statics/images/favicon.ico",
        },
        {
            itemName: "开源地理空间基金会",
            itemUrl: "https://www.osgeo.cn/",
            itemImg: "https://www.osgeo.cn/favicon.ico",
        },
        {
            itemName: "希赛网",
            itemUrl: "https://www.educity.cn/",
            itemImg: "https://www.educity.cn/favicon.ico",
        },
        {
            itemName: "Three.js",
            itemUrl: "https://threejs.org/",
            itemImg: "https://threejs.org/files/favicon_white.ico",
        },
        {
            itemName: "即时设计",
            itemUrl: "https://js.design/",
            itemImg: "https://img.js.design/assets/webImg/favicon.ico",
        },
        {
            itemName: "蓝湖",
            itemUrl: "https://lanhuapp.com/",
            itemImg: 'LanHu()',
        },
        {
            itemName: "BootCDN",
            itemUrl: "https://www.bootcdn.cn/",
            itemImg: "https://www.bootcdn.cn/assets/img/m-sematicui.png",
        },
        {
            itemName: "Linux开源社区",
            itemUrl: "https://linux.cn/",
            itemImg: "https://img.linux.net.cn/favicon.ico",
        },
        {
            itemName: "亿图",
            itemUrl: "https://www.edrawsoft.cn/",
            itemImg: "https://images.edrawsoft.com/favicon.ico",
        },
        {
            itemName: "ttkBootstrap",
            itemUrl: "https://ttkbootstrap.readthedocs.io/en/latest/",
            itemImg:
                "https://ttkbootstrap.readthedocs.io/en/latest/assets/images/favicon.png",
        },
        {
            itemName: "jinja",
            itemUrl: "https://jinja.palletsprojects.com/en/latest/",
            itemImg:
                "https://jinja.palletsprojects.com/en/latest/_static/jinja-logo-sidebar.png",
        },
        {
            itemName: "django",
            itemUrl: "https://docs.djangoproject.com/en/4.1/",
            itemImg:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fblog.02868.cn%2Fzb_users%2Fupload%2F2019%2F10%2F20191018113111Django.png&refer=http%3A%2F%2Fblog.02868.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658413465&t=b3884c30ffde6df9527165a3c7c2a992",
        },
    ],
    // 第十七页
    [
        {
            itemName: "Bootswatch",
            itemUrl: "https://bootswatch.com/",
            itemImg: "https://bootswatch.com/favicon.ico",
        },
        {
            itemName: "C/C++参考手册",
            itemUrl: "https://c-cpp.com/",
            itemImg: "https://c-cpp.com/icon.png",
        },
        {
            itemName: "草料二维码生成器",
            itemUrl: "https://cli.im/",
            itemImg: "https://static.clewm.net/cli/images/cli_logo_new.png",
        },
        {
            itemName: "Angular",
            itemUrl: "https://angular.cn/",
            itemImg: "https://angular.cn/assets/images/favicons/favicon.ico",
        },
        {
            itemName: "V2-Nustjs",
            itemUrl: "https://v2.nuxt.com/",
            itemImg: "https://v2.nuxt.com/_nuxt/icons/icon_64x64.6dcbd4.png",
        },
        {
            itemName: "V3-Nustjs",
            itemUrl: "https://nuxt.com/",
            itemImg: "https://nuxt.com/icon.png",
        },
        {
            itemName: "TailwindCSS中文网",
            itemUrl: "https://www.tailwindcss.cn/",
            itemImg: "https://www.tailwindcss.cn/favicons/favicon.ico?v=3",
        },
        {
            itemName: "GraphQL",
            itemUrl: "https://graphql.org/",
            itemImg: "https://graphql.org/img/logo.svg",
        },
        {
            itemName: "Udemy",
            itemUrl: "https://www.udemy.com/",
            itemImg:
                "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
        },
        {
            itemName: "GatsbyJS",
            itemUrl: "https://www.gatsbyjs.com/",
            itemImg:
                "https://www.gatsbyjs.com/icons/icon-256x256.png?v=3ad5294f3fa6c06e2d07ab07c76df2cf",
        },
        {
            itemName: "TailwindUI",
            itemUrl: "https://tailwindui.com/",
            itemImg: "https://tailwindui.com/favicon.ico",
        },
        {
            itemName: "RefactoringUI",
            itemUrl: "https://www.refactoringui.com/",
            itemImg: "https://www.refactoringui.com/favicon-32x32.png",
        },
    ],
    // 第十八页
    [
        {
            itemName: "京东UI组件库",
            itemUrl: "https://nutui.jd.com/#/",
            itemImg:
                "https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png",
        },
        {
            itemName: "UniCode",
            itemUrl: "https://home.unicode.org/",
            itemImg:
                "https://home.unicode.org/wp-content/themes/unicode/favicons/favicon-32x32.png",
        },
        {
            itemName: "UniCode字符集",
            itemUrl: "https://unicode-table.com/cn/",
            itemImg: 'UnicodeFavicon()',
        },
        {
            itemName: "Emoji字符大全",
            itemUrl: "https://www.emojiall.com/",
            itemImg: "https://www.emojiall.com/favicon.ico",
        },
        {
            itemName: "码农教程",
            itemUrl: "http://www.manongjc.com/",
            itemImg: "http://www.manongjc.com/favicon.ico",
        },
        {
            itemName: "Computer Hope",
            itemUrl: "https://www.computerhope.com/",
            itemImg: "https://www.computerhope.com/cdn/favicon.ico",
        },
        {
            itemName: "数据结构可视化",
            itemUrl: "http://www.rmboot.com/",
            itemImg: "http://www.rmboot.com/favicon.ico",
        },
        {
            itemName: "印记中文",
            itemUrl: "https://docschina.org/",
            itemImg:
                "https://cdn.docschina.org/static/media/docschina-logo.4c5554f1.svg",
        },
        {
            itemName: "开发文档",
            itemUrl: "https://devdocs.io/",
            itemImg: "https://devdocs.io/images/apple-icon-120.png",
        },
        {
            itemName: "维京百科",
            itemUrl: "https://en.wikipedia.org/wiki/Main_Page",
            itemImg: "https://en.wikipedia.org/static/favicon/wikipedia.ico",
        },
        {
            itemName: "W3CSchool官方文档",
            itemUrl: "https://www.w3schools.com/",
            itemImg: "https://www.w3schools.com/favicon.ico",
        },
        {
            itemName: "字体图标",
            itemUrl: "https://fontawesome.com/",
            itemImg: "https://fontawesome.com/images/favicon/icon.svg",
        },
    ],
    // 第十九页
    [
        {
            itemName: "产品信息大全",
            itemUrl: "https://product.cnmo.com/",
            itemImg: "https://product.cnmo.com/favicon.ico",
        },
        {
            itemName: "ANSI序列",
            itemUrl: "https://invisible-island.net/",
            itemImg: "https://invisible-island.net/img/icons/vile.ico",
        },
        {
            itemName: "终端格式化序列",
            itemUrl: "https://misc.flogisoft.com/home",
            itemImg: "https://misc.flogisoft.com/favicon.png",
        },
        {
            itemName: "PyECharts",
            itemUrl: "https://pyecharts.org/#/",
            itemImg: "https://pyecharts.org/favicon.ico",
        },
        {
            itemName: "PyECharts画廊",
            itemUrl: "https://gallery.pyecharts.org/#/README",
            itemImg: "https://pyecharts.org/favicon.ico",
        },
        {
            itemName: "Selenium",
            itemUrl: "https://www.selenium.dev/documentation/",
            itemImg:
                "https://www.selenium.dev/favicons/apple-touch-icon-180x180.png",
        },
        {
            itemName: "Bootstrap官网",
            itemUrl: "https://getbootstrap.com/",
            itemImg:
                "https://getbootstrap.com/docs/5.2/assets/img/favicons/favicon.ico",
        },
        {
            itemName: "Recharts",
            itemUrl: "https://recharts.org/en-US/",
            itemImg:
                "https://echarts.apache.org/zh/images/favicon.png?_v_=20200710_1",
        },
        {
            itemName: "Ignite UI",
            itemUrl:
                "https://www.infragistics.com/products/ignite-ui-react/react/components/general-getting-started",
            itemImg: "https://infragistics.com/assets/favicon/favicon.ico",
        },
        {
            itemName: "YaNETFLIX免费电影",
            itemUrl: "https://yanetflix.com/",
            itemImg:
                "https://ugc.hitv.com/3/22040215100116D5902FA5F85F30A2245E0DAAAAFMjky/uyu3xI0.png",
        },
        {
            itemName: "NextJS中文网",
            itemUrl: "https://www.nextjs.cn/",
            itemImg: "https://www.nextjs.cn/static/favicon/favicon.ico",
        },
        {
            itemName: "Vercel",
            itemUrl: "https://vercel.com/",
            itemImg:
                "https://assets.vercel.com/image/upload/front/favicon/vercel/114x114.png",
        },
    ],
    // 第二十页
    [
        {
            itemName: "React Admin",
            itemUrl: "https://marmelab.com/react-admin/",
            itemImg:
                "https://marmelab.com/react-admin/assets/icons/icon-144x144.png",
        },
        {
            itemName: "阮一峰",
            itemUrl: "https://www.ruanyifeng.com/",
            itemImg: "https://www.ruanyifeng.com/favicon.ico",
        },
        {
            itemName: "富文本插件",
            itemUrl: "https://braft.margox.cn/",
            itemImg:
                "https://gw.alipayobjects.com/zos/rmsportal/UTjFYEzMSYVwzxIGVhMu.png",
        },
        {
            itemName: "Quill",
            itemUrl: "https://quilljs.com/",
            itemImg: "https://quilljs.com/assets/images/favicon.ico",
        },
        {
            itemName: "Slate",
            itemUrl: "https://www.slatejs.org/examples/richtext",
            itemImg: "https://www.slatejs.org/favicon.ico",
        },
        {
            itemName: "Draft.js",
            itemUrl: "https://draftjs.org/",
            itemImg: "https://draftjs.org/img/draftjs-logo.ico",
        },
        {
            itemName: "React Icons",
            itemUrl: "https://react-icons.github.io/react-icons/",
            itemImg: "https://react-icons.github.io/react-icons/favicon.png",
        },
        {
            itemName: "Scene.js",
            itemUrl: "https://daybrush.com/",
            itemImg: "https://daybrush.com/scenejs/images/clapperboard.png",
        },
        {
            itemName: "React类型检查",
            itemUrl: "https://react-typescript-cheatsheet.netlify.app/",
            itemImg:
                "https://react-typescript-cheatsheet.netlify.app/img/icon.png",
        },
        {
            itemName: "JWT验证",
            itemUrl: "https://jwt.io/",
            itemImg: "https://jwt.io/img/pic_logo.svg",
        },
        {
            itemName: "ReactRouter",
            itemUrl: "https://reactrouter.com/en/main",
            itemImg: "https://reactrouter.com/favicon-light.png",
        },
        {
            itemName: "渐变色工具",
            itemUrl: "https://gradienthunt.com/",
            itemImg: "https://gradienthunt.com/img/gradienthunt.png",
        },
    ],
    // 第二十一页
    [
        {
            itemName: "C语言文档",
            itemUrl: "https://c-cpp.com/",
            itemImg: "https://c-cpp.com/icon.png",
        },
        {
            itemName: "C/C++语言文档",
            itemUrl: "https://zh.cppreference.com/",
            itemImg: "https://zh.cppreference.com/favicon.ico",
        },
        {
            itemName: "维基百科C语言",
            itemUrl: "https://zh.wikipedia.org/wiki/C程序设计语言(书)",
            itemImg: "https://zh.wikipedia.org/static/favicon/wikipedia.ico",
        },
        {
            itemName: "Numpy",
            itemUrl: "https://numpy.org/",
            itemImg: "https://numpy.org/images/favicon.ico",
        },
        {
            itemName: "Pandas",
            itemUrl: "https://pandas.pydata.org/docs/index.html",
            itemImg: "https://pandas.pydata.org/docs/_static/favicon.ico",
        },
        {
            itemName: "中国知网",
            itemUrl: "https://www.cnki.net/",
            itemImg: "https://kns.cnki.net/favicon.ico",
        },
        {
            itemName: "后盾人博客网",
            itemUrl: "https://doc.houdunren.com/",
            itemImg: "https://doc.houdunren.com/icon.png",
        },
        {
            itemName: "ejs",
            itemUrl: "https://ejs.co/",
            itemImg: "https://ejs.co/assets/images/icon/256x256.png",
        },
        {
            itemName: "BootCDN",
            itemUrl: "https://www.bootcdn.cn/",
            itemImg:
                "https://www.bootcdn.cn/assets/ico/favicon.ico?1668874650658",
        },
        {
            itemName: "Django",
            itemUrl: "https://www.djangoproject.com/",
            itemImg: 'DjangoFavicon()',
        },
        {
            itemName: "Flask",
            itemUrl: "https://dormousehole.readthedocs.io/en/latest/",
            itemImg:
                "https://dormousehole.readthedocs.io/en/latest/_static/shortcut-icon.png",
        },
        {
            itemName: "Dos学习文档",
            itemUrl: "https://ds-ebooks.github.io/DOS-BAT/index.html",
            itemImg:
                "https://ds-ebooks.github.io/DOS-BAT/gitbook/images/favicon.ico",
        },
    ],
    // 第二十二页
    [
        {
            itemName: "荒原之梦",
            itemUrl: "https://zhaokaifeng.com/",
            itemImg: 'Huanyuan()',
        },
        {
            itemName: "免费机场",
            itemUrl: "https://www.askahh.com/archives/101/",
            itemImg:
                "https://p1.meituan.net/csc/0b243a489f94fda40ec35f309b71d26529235.jpg",
        },
        {
            itemName: "极客教程",
            itemUrl: "https://geek-docs.com/",
            itemImg: "https://geek-docs.com/favicon.ico",
        },
        {
            itemName: "flask官网",
            itemUrl: "https://flask.palletsprojects.com/en/3.0.x/",
            itemImg:
                "https://flask.palletsprojects.com/en/3.0.x/_static/shortcut-icon.png",
        },
        {
            itemName: "flask中文网",
            itemUrl: "https://dormousehole.readthedocs.io/en/latest/index.html",
            itemImg:
                "https://flask.palletsprojects.com/en/3.0.x/_static/shortcut-icon.png",
        },
        {
            itemName: "Jetbrains中文网",
            itemUrl: "https://www.jetbrains.com.cn/",
            itemImg: "https://www.jetbrains.com.cn/favicon.ico?r=1234",
        },
        {
            itemName: "IView UI",
            itemUrl: "https://www.iviewui.com",
            itemImg: "https://file.iviewui.com/view-design-logo.png",
        },
        {
            itemName: "Cube UI",
            itemUrl: "https://didi.github.io/cube-ui",
            itemImg:
                "https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico",
        },
        {
            itemName: "carbon",
            itemUrl: "https://carbon.now.sh/",
            itemImg: "https://carbon.now.sh/favicon.ico",
        },
        {
            itemName: "CodeSnap",
            itemUrl: "https://codesnap.dev/",
            itemImg: "https://mokkapps.twic.pics/codesnap.dev/logo.png",
        },
        {
            itemName: "PureAdmin",
            itemUrl: "https://yiming_chang.gitee.io/vue-pure-admin/#/login",
            itemImg: "https://yiming_chang.gitee.io/vue-pure-admin/favicon.ico",
        },
        {
            itemName: "Mock.js",
            itemUrl: "http://mockjs.com/",
            itemImg: "http://mockjs.com./assets/img/logo-2.svg",
        },
    ],
    // 第二十三页
    [
        {
            itemName: "C++教程",
            itemUrl: "https://cplusplus.com/",
            itemImg: "https://cplusplus.com/favicon.ico",
        },
        {
            itemName: "码工具",
            itemUrl: "https://www.matools.com/",
            itemImg:
                "https://www.matools.com/static/img/common/matools-favicon.png",
        },
        {
            itemName: "DaisyUI",
            itemUrl: "https://daisyui.com/",
            itemImg: "https://daisyui.com/favicon.ico",
        },
        {
            itemName: "批处理脚本学习",
            itemUrl:
                "https://www.tutorialspoint.com/batch_script/batch_script_commands.htm",
            itemImg:
                "https://www.tutorialspoint.com/static/images/logo-desktop.svg",
        },
        {
            itemName: "VueQuill",
            itemUrl: "https://vueup.github.io/vue-quill/",
            itemImg: "https://vueup.github.io/vue-quill/logo.svg",
        },
        {
            itemName: "wangEditor",
            itemUrl: "https://www.wangeditor.com/",
            itemImg: "https://www.wangeditor.com/favicon.ico",
        },
        {
            itemName: "王道考研论坛",
            itemUrl: "http://cskaoyan.com/forum.php",
            itemImg: "http://cskaoyan.com/favicon.ico",
        },
        {
            itemName: "王道考研官网",
            itemUrl: "http://home.cskaoyan.com/#/home",
            itemImg: "http://home.cskaoyan.com/img/logo1.47131449.png",
        },
        {
            itemName: "消息轰炸工具包",
            itemUrl:
                "https://pyautogui.readthedocs.io/en/latest/quickstart.html",
            itemImg: "https://pyautogui.readthedocs.io/favicon.ico",
        },
        {
            itemName: "Typora文档",
            itemUrl: "https://typoraio.cn/",
            itemImg: "https://typoraio.cn/img/favicon-64.png",
        },
        {
            itemName: "纯CSS动画",
            itemUrl: "https://css-loaders.com/",
            itemImg: "https://css-loaders.com/fav.png",
        },
        {
            itemName: "前端参考手册",
            itemUrl: "https://webreference.com/",
            itemImg: "https://webreference.com/favicon.ico",
        },
    ],
    // 第二十四页
    [
        {
            itemName: "动态样式库",
            itemUrl: "https://unocss.dev/",
            itemImg: "https://unocss.dev/logo.svg",
        },
        {
            itemName: "Git忽略文件文档",
            itemUrl: "https://git-scm.com/docs/gitignore",
            itemImg: "https://git-scm.com/favicon.ico",
        },
        {
            itemName: "通义灵码",
            itemUrl: "https://tongyi.aliyun.com/lingma",
            itemImg:
                "https://img.alicdn.com/imgextra/i4/O1CN01c26iB51UyR3MKMFvk_!!6000000002586-2-tps-124-122.png",
        },
        {
            itemName: "CodeGeex",
            itemUrl: "https://codegeex.cn/",
            itemImg: "https://codegeex.cn/static/plugin_logo.258e3dc0.svg",
        },
        {
            itemName: "Hexo",
            itemUrl: "https://hexo.io/zh-cn/",
            itemImg: "https://hexo.io/logo.svg",
        },
        {
            itemName: "vuepress主题",
            itemUrl: "https://vuepress-theme-reco.recoluan.com/",
            itemImg: "https://vuepress-theme-reco.recoluan.com/logo.png",
        },
        {
            itemName: "Vue Amazing UI",
            itemUrl: "https://themusecatcher.github.io/vue-amazing-ui/",
            itemImg:
                "https://themusecatcher.github.io/vue-amazing-ui/amazing-logo.svg",
        },
        {
            itemName: "vuepress初级框架",
            itemUrl: "https://v2.vuepress.vuejs.org/zh/",
            itemImg: "https://v2.vuepress.vuejs.org/images/hero.png",
        },
        {
            itemName: "vuepress进阶框架",
            itemUrl: "https://vuepress-theme-hope.gitee.io/v2/zh/",
            itemImg: "https://theme-hope-assets.vuejs.press/logo.svg",
        },
        {
            itemName: "vuepress第一版本",
            itemUrl: "https://v1.vuepress.vuejs.org/zh/",
            itemImg: "https://v1.vuepress.vuejs.org/hero.png",
        },
        {
            itemName: "vitepress中文官网",
            itemUrl: "https://vitepress.dev/",
            itemImg: "https://vitepress.dev/vitepress-logo-mini.svg",
        },
        {
            itemName: "Animatejs",
            itemUrl: "https://animate.style/",
            itemImg: "https://animate.style/img/favicon.ico",
        },
    ],
    // 第二十五页
    [
        {
            itemName: "ReactNative",
            itemUrl: "https://www.react-native.cn/",
            itemImg: "https://www.react-native.cn/img/header_logo.svg",
        },
        {
            itemName: "UIverse组件库",
            itemUrl: "https://uiverse.io/",
            itemImg: "https://uiverse.io/favicon-32x32.png",
        },
        {
            itemName: "fontawesome图标库",
            itemUrl: "https://fontawesome.com/",
            itemImg: "https://fontawesome.com/favicon.ico",
        },
        {
            itemName: "GSAP动效库",
            itemUrl: "https://gsap.com/",
            itemImg: "https://gsap.com/favicon-32x32.png",
        },
        {
            itemName: "DaisyUI",
            itemUrl: "https://daisyui.com/",
            itemImg: "https://daisyui.com/images/daisyui-logo/favicon-192.png",
        },
        {
            itemName: "ngrok内网穿透",
            itemUrl: "https://ngrok.com/",
            itemImg:
                "https://assets-global.website-files.com/63ed4bc7a4b189da942a6b8c/652fee000fd1d71f4d433e23_Frame%2022.webp",
        },
        {
            itemName: "cpolar内网穿透",
            itemUrl: "https://www.cpolar.com/",
            itemImg:
                "https://www.cpolar.com/wp-content/uploads/2016/10/cropped-site-icon-1-1-32x32.png",
        },
        {
            itemName: "Linux命令搜索",
            itemUrl: "https://jaywcjlove.gitee.io/linux-command/",
            itemImg:
                "https://jaywcjlove.gitee.io/linux-command/img/favicon.ico",
        },
        {
            itemName: "拖拽组件库",
            itemUrl: "https://alfred-skyblue.github.io/vue-draggable-plus/",
            itemImg:
                "https://alfred-skyblue.github.io/vue-draggable-plus/logo.svg",
        },
        {
            itemName: "SOOGIF",
            itemUrl: "https://gif-tool.whatthehell.cn/",
            itemImg: "https://gif-tool.whatthehell.cn/favicon.ico",
        },
        {
            itemName: "SnapSVG",
            itemUrl: "http://snapsvg.io/",
            itemImg: "http://snapsvg.io/assets/images/logo.svg",
        },
        {
            itemName: "SVG.js",
            itemUrl: "https://svgjs.dev/docs/3.1/",
            itemImg:
                "https://svgjs.dev/docs/3.1/assets/images/logo-svg-js-01d-128.png",
        },
    ],
    // 第二十六页
    [
        {
            itemName: "加载动画库",
            itemUrl: "https://epic-spinners.epicmax.co/",
            itemImg: "https://epic-spinners.epicmax.co/favicon.ico",
        },
        {
            itemName: "Loading",
            itemUrl: "https://loading.io/",
            itemImg: "https://loading.io/favicon.png",
        },
        {
            itemName: "Lodash",
            itemUrl: "https://lodash.com/",
            itemImg: "https://lodash.com/icons/favicon-32x32.png",
        },
        {
            itemName: "SocketIO",
            itemUrl: "https://socket.io/",
            itemImg: "https://socket.io/images/logo.svg",
        },
        {
            itemName: "英语家园",
            itemUrl: "https://www.enfamily.cn/forum-24-1.html",
            itemImg:
                "https://www.enfamily.cn/template/comiis/img/comiis_logo.gif",
        },
        {
            itemName: "可可英语",
            itemUrl: "http://www.kekenet.com/",
            itemImg: "http://www.kekenet.com/favicon.ico",
        },
        {
            itemName: "BBC英语",
            itemUrl: "https://www.bbc.co.uk/learningenglish/",
            itemImg: "https://www.bbc.co.uk/favicon.ico",
        },
        {
            itemName: "马蹄集",
            itemUrl: "https://www.matiji.net/exam/",
            itemImg: "https://www.matiji.net/exam/favicon-w.png",
        },
        {
            itemName: "乐乐课堂",
            itemUrl: "http://www.leleketang.com/",
            itemImg: "http://www.leleketang.com/favicon.ico",
        },
        {
            itemName: "思否",
            itemUrl: "https://segmentfault.com/",
            itemImg:
                "https://static-test.segmentfault.com/main_site_next/f6b26975/favicon.ico",
        },
        {
            itemName: "ThreeJS",
            itemUrl: "https://threejs.org/",
            itemImg: "",
        },
        {
            itemName: "md-vue3",
            itemUrl: "https://imzbf.github.io/md-editor-v3/en-US/index",
            itemImg: "",
        },
    ],
    [
        {
            itemName: "Nodejs自动化",
            itemUrl: "https://pptr.dev/",
            itemImg: "https://pptr.dev/img/favicon.ico",
        },
        {
            itemName: "cheerio",
            itemUrl: "https://cheerio.js.org/",
            itemImg: "https://cheerio.js.org/img/favicon.ico",
        },
        {
            itemName: "Multerjs",
            itemUrl: "https://www.cnblogs.com/wjlbk/p/12633320.html",
            itemImg: "https://assets.cnblogs.com/logo.svg",
        },
        {
            itemName: "CSS-Loader",
            itemUrl: "https://css-loaders.com/dots/",
            itemImg: "https://css-loaders.com/fav.png",
        },
    ]
])
</script>

<template>
    <!-- 最外层当做body来使用 内层为container容器承内容 -->
    <div id="content">
        <div class="container">
            <Search />
            <div class="row align-items-center mt-5">
                <div class="col-sm-10 col-md-8 col-lg-6 mx-auto">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <!-- 指示器小圆点 -->
                        <div class="carousel-indicators">
                            <button v-for="page, index in links" :key="index" type="button"
                                data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index"
                                :class='index === 0 ? "active" : ""' :aria-current="index === 0"
                                :aria-label="'Slide ' + (index + 1)"></button>
                        </div>
                        <!-- 轮播页面 -->
                        <div class="carousel-inner">
                            <!-- 循环遍历每一项 -->
                            <div v-for="page, index in links" :key='index'
                                :class='"carousel-item h-100" + (index === 0 ? " active" : "")'>
                                <div class="row justify-content-center mt-5">
                                    <div v-for="item, innerIndex in page" class="col-3 mt-5" :key="innerIndex">
                                        <a :href="item.itemUrl" target="_blank" rel="noreferrer">
                                            <img class="rounded mx-auto d-block" :src="item.itemImg"
                                                :alt="item.itemName" />
                                            <span class="d-block text-center mt-2">
                                                {{ item.itemName }}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev justify-content-start" type="button"
                            data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">上一页</span>
                        </button>
                        <button class="carousel-control-next justify-content-end" type="button"
                            data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">下一页</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>