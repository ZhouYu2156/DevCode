import { defineComponent, mergeProps, useSSRContext, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "References",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "table" }, _attrs))}><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "flex-start", "align-items": "center", "flex-wrap": "wrap" })}"><!--[-->`);
      ssrRenderList(props.items, (item) => {
        _push(`<a${ssrRenderAttr("href", item.link)} style="${ssrRenderStyle({ "max-width": "fit-content", "min-width": "80px", "height": "120px", "border": "1px solid lightblue", "border-radius": "10px", "display": "flex", "flex-direction": "column", "justify-content": "space-evenly", "align-items": "center", "text-decoration": "none", "margin": "5px", "padding": "2px 3px" })}" target="_blank"><span style="${ssrRenderStyle({ "padding": "2px 5px" })}">${ssrInterpolate(item.title)}</span><span><img${ssrRenderAttr("src", item.icon)}${ssrRenderAttr("alt", item.title)} width="50"></span></a>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/References.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FrontEndItems = ref([
  {
    id: 1,
    title: "配色主题",
    link: "https://flatuicolors.com/",
    icon: "https://flatuicolors.com/static/favicon.ico"
  },
  {
    id: 2,
    title: "生成圆角",
    link: "https://9elements.github.io/fancy-border-radius/#",
    icon: "https://9elements.github.io/fancy-border-radius/favicon-32x32.png"
  }
]);
const JavaScriptItems = ref([
  {
    id: 1,
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
    icon: "https://www.typescriptlang.org/favicon-32x32.png"
  },
  {
    id: 2,
    title: "网道",
    link: "https://wangdoc.com/",
    icon: "https://wangdoc.com/assets/icons/favicon-32x32.png"
  },
  {
    id: 3,
    title: "ES6",
    link: "https://es6.ruanyifeng.com/",
    icon: "https://es6.ruanyifeng.com/favicon.ico"
  },
  {
    id: 4,
    title: "快速文档查找",
    link: "https://cheatsheets.zip/",
    icon: "https://cheatsheets.zip/images/favicon.png"
  },
  {
    id: 5,
    title: "Nodejs",
    link: "https://nodejs.org/",
    icon: "https://nodejs.org/static/images/favicons/favicon.png"
  },
  {
    id: 6,
    title: "菜鸟教程",
    link: "https://www.runoob.com/",
    icon: "/favicon/cainiao.png"
  },
  {
    id: 7,
    title: "w3schools",
    link: "https://www.w3schools.com/",
    icon: "https://www.w3schools.com/favicon.ico"
  },
  {
    id: 8,
    title: "w3school",
    link: "https://www.w3school.com.cn/",
    icon: "https://www.w3school.com.cn/ui2019/logo-32-red.png"
  },
  {
    id: 9,
    title: "现代 JavaScript 教程",
    link: "https://zh.javascript.info/",
    icon: "https://zh.javascript.info/img/favicon/favicon.png"
  },
  {
    id: 10,
    title: "MDN",
    link: "https://developer.mozilla.org/",
    icon: "https://developer.mozilla.org/favicon-48x48.cbbd161b.png"
  }
]);
const JavaScriptToolItems = ref([
  {
    id: 1,
    title: "Axios",
    link: "https://www.axios-http.cn/",
    icon: "https://www.axios-http.cn/img/favicon.ico"
  },
  {
    id: 2,
    title: "Babel",
    link: "https://www.babeljs.cn/",
    icon: "https://www.babeljs.cn/img/favicon.png"
  },
  {
    id: 3,
    title: "highlightjs",
    link: "https://highlightjs.org/",
    icon: "https://highlightjs.org/icon.png"
  },
  {
    id: 4,
    title: "Dayjs",
    link: "https://dayjs.fenxianglu.cn/",
    icon: "https://dayjs.fenxianglu.cn/assets/favicon.png"
  },
  {
    id: 5,
    title: "jQuery",
    link: "https://www.jquery123.com/",
    icon: "https://www.jquery123.com/assets/images/favicon.ico"
  },
  {
    id: 6,
    title: "WebRTC",
    link: "https://webrtc.org/?hl=zh-cn",
    icon: "https://webrtc.org/_pwa/webrtc/icons/icon-144x144.png"
  },
  {
    id: 7,
    title: "clipboardjs",
    link: "https://clipboardjs.com/",
    icon: "https://clipboardjs.com/favicon.ico"
  },
  {
    id: 8,
    title: "纯CSS动画库",
    link: "https://animxyz.com/docs",
    icon: "https://animxyz.com/assets/static/animxyz-logo.ac8d93a.39f3bde368e480505b70778acaa2ac74.png"
  },
  {
    id: 9,
    title: "贝塞尔曲线可视化",
    link: "https://cubic-bezier.com/",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAVtJREFUOE9jZFi5s4GBkameAQvIVpFlmHrnMTYpTDFGhp8M//51MDKs2v0fl44GbSWGhqv3iDMQpIqR4SdeA5kZGRn+/sdpH1aLcBrIxczM8O3vX4Ku+x/qwsC4eg9cHU4DcXlXkI2VoUNXhSFNSRpsiMmeUwxn338ibKCdqCDDodfvwQrj5CUZFpppM7z5+Zuh8+YDhp6bD8HiXpIiDNuev0HxBd4wBKkEeWnmvacMGWevY3jfWJAPxXWQeMESy85iQgx7X70DG4YcPsgmrrDQZYg4cRnDEqwGVmsqMrToKDNIbT7M8PzHT4IRg6wAq4EmgnwMc021GPR3nSDJMJxexudVQjZguHCZuQ7Dix+/GIou3iKkl7iETYnrsHr5mJMpg9W+02S5DsPAq+6WDNo7j5NtGIaBlHoXw8DbnlYMqtuPUc+FFJkE1UwwL5NqCSO+KoBUwxj+/2sEAKfckNu9qD2CAAAAAElFTkSuQmCC"
  }
]);
const AnimationLibItems = ref([
  {
    id: 1,
    title: "Threejs",
    link: "https://threejs.org/",
    icon: "https://threejs.org/files/favicon.ico"
  },
  {
    id: 2,
    title: "D3",
    link: "https://d3js.org/",
    icon: "https://d3js.org/logo.png"
  },
  {
    id: 3,
    title: "抽奖大转盘组件",
    link: "https://100px.net/",
    icon: "https://100px.net/logo.png"
  },
  {
    id: 4,
    title: "loading动画库",
    link: "https://loading.io/",
    icon: "https://loading.io/favicon.png"
  },
  {
    id: 5,
    title: "SVGjs",
    link: "https://svgjs.dev/docs/3.0/",
    icon: "https://svgjs.dev/docs/3.0/assets/images/logo-svg-js-01d-128.png"
  },
  {
    id: 6,
    title: "GSAP",
    link: "https://www.gsap.com/",
    icon: "https://www.gsap.com/favicon-32x32.png"
  }
]);
const NodejsItems = ref([
  {
    id: 1,
    title: "Nodejs",
    link: "https://nodejs.org/zh-cn",
    icon: "https://nodejs.org/static/images/favicons/favicon.png"
  },
  {
    id: 2,
    title: "Express",
    link: "https://www.expressjs.com.cn/",
    icon: "https://www.expressjs.com.cn/images/favicon.png"
  },
  {
    id: 3,
    title: "Socket.IO",
    link: "https://socket.io/",
    icon: "https://socket.io/images/favicon.png"
  }
]);
const VueItems = ref([
  {
    id: 1,
    title: "Vue",
    link: "https://cn.vuejs.org/",
    icon: "https://cn.vuejs.org/logo.svg"
  },
  {
    id: 2,
    title: "Pinia",
    link: "https://pinia.vuejs.org/zh/",
    icon: "https://pinia.vuejs.org/logo.svg"
  },
  {
    id: 3,
    title: "Pinia Persisted",
    link: "https://prazdevs.github.io/pinia-plugin-persistedstate/zh/",
    icon: "https://prazdevs.github.io/pinia-plugin-persistedstate/favicon.ico"
  },
  {
    id: 4,
    title: "PrimeVue",
    link: "https://primevue.org/",
    icon: "https://primevue.org/favicon.ico"
  },
  {
    id: 5,
    title: "Naive UI",
    link: "https://www.naiveui.com/",
    icon: "https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg"
  },
  {
    id: 6,
    title: "Element Plus",
    link: "https://element-plus.org/zh-CN/",
    icon: "https://element-plus.org/images/element-plus-logo-small.svg"
  },
  {
    id: 7,
    title: "Nuxt",
    link: "https://www.nuxtjs.cn/",
    icon: "https://www.nuxtjs.cn/favicon.ico"
  },
  {
    id: 8,
    title: "VitePress",
    link: "https://vitepress.qzxdp.cn/",
    icon: "https://vitepress.qzxdp.cn/vitepress-logo-mini.svg"
  },
  {
    id: 9,
    title: "Vite",
    link: "https://vitejs.cn",
    icon: "https://vitejs.cn/logo.svg"
  }
]);
const ReactItems = ref([
  {
    id: 1,
    title: "React",
    link: "https://react.docschina.org/",
    icon: "https://react.docschina.org/favicon.ico"
  },
  {
    id: 2,
    title: "Next UI",
    link: "https://nextui.org/",
    icon: "https://nextui.org/favicon.ico"
  },
  {
    id: 3,
    title: "Ant Design",
    link: "https://4x.ant.design/",
    icon: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
  },
  {
    id: 4,
    title: "Material UI",
    link: "https://mui.com/material-ui/",
    icon: "https://mui.com/static/favicon.ico"
  },
  {
    id: 5,
    title: "Chakra UI",
    link: "https://v2.chakra-ui.com/",
    icon: "https://v2.chakra-ui.com/favicon.png"
  },
  {
    id: 5,
    title: "Nextjs",
    link: "https://www.nextjs.cn/",
    icon: "https://www.nextjs.cn/static/favicon/favicon-32x32.png"
  }
]);
const PythonItems = ref([
  {
    id: 1,
    title: "Python",
    link: "https://www.python.org/",
    icon: "https://www.python.org/static/favicon.ico"
  }
]);
const LinuxItems = ref([
  {
    id: 1,
    title: "Nginx",
    link: "https://nginx.org/",
    icon: "https://nginx.org/favicon.ico"
  }
]);
const ComponentLibItems = ref([
  {
    id: 1,
    title: "UIverse",
    link: "https://uiverse.io/",
    icon: "https://uiverse.io/android-chrome-192x192.png"
  }
]);
const BlogItems = ref([
  {
    id: 1,
    title: "后盾人编程教程",
    link: "https://doc.houdunren.com/",
    icon: "	https://doc.houdunren.com/logo.png"
  }
]);
const __pageData = JSON.parse('{"title":"快速文档参考手册","description":"","frontmatter":{"sidebar":true,"footer":false},"headers":[],"relativePath":"notes/资源/快速文档查阅/index.md","filePath":"notes/资源/快速文档查阅/index.md","lastUpdated":null}');
const __default__ = { name: "notes/资源/快速文档查阅/index.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="快速文档参考手册" tabindex="-1">快速文档参考手册 <a class="header-anchor" href="#快速文档参考手册" aria-label="Permalink to &quot;快速文档参考手册&quot;">​</a></h1><h2 id="辅助工具" tabindex="-1">辅助工具 <a class="header-anchor" href="#辅助工具" aria-label="Permalink to &quot;辅助工具&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$1, { items: unref(FrontEndItems) }, null, _parent));
      _push(`<h2 id="javascript-typescript" tabindex="-1">JavaScript &amp; TypeScript <a class="header-anchor" href="#javascript-typescript" aria-label="Permalink to &quot;JavaScript &amp; TypeScript&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$1, { items: unref(JavaScriptItems) }, null, _parent));
      _push(`<h2 id="js-工具库" tabindex="-1">JS 工具库 <a class="header-anchor" href="#js-工具库" aria-label="Permalink to &quot;JS 工具库&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$1, { items: unref(JavaScriptToolItems) }, null, _parent));
      _push(`<h2 id="nodejs库" tabindex="-1">Nodejs库 <a class="header-anchor" href="#nodejs库" aria-label="Permalink to &quot;Nodejs库&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$1, { items: unref(NodejsItems) }, null, _parent));
      _push(`<h2 id="前端动画库" tabindex="-1">前端动画库 <a class="header-anchor" href="#前端动画库" aria-label="Permalink to &quot;前端动画库&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$1, { items: unref(AnimationLibItems) }, null, _parent));
      _push(`<h2 id="vue-全家桶" tabindex="-1">Vue 全家桶 <a class="header-anchor" href="#vue-全家桶" aria-label="Permalink to &quot;Vue 全家桶&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$1, { items: unref(VueItems) }, null, _parent));
      _push(`<h2 id="react-全家桶" tabindex="-1">React 全家桶 <a class="header-anchor" href="#react-全家桶" aria-label="Permalink to &quot;React 全家桶&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$1, { items: unref(ReactItems) }, null, _parent));
      _push(`<h2 id="开源组件库" tabindex="-1">开源组件库 <a class="header-anchor" href="#开源组件库" aria-label="Permalink to &quot;开源组件库&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$1, { items: unref(ComponentLibItems) }, null, _parent));
      _push(`<h2 id="python-技术" tabindex="-1">Python 技术 <a class="header-anchor" href="#python-技术" aria-label="Permalink to &quot;Python 技术&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$1, { items: unref(PythonItems) }, null, _parent));
      _push(`<h2 id="linux-运维" tabindex="-1">Linux 运维 <a class="header-anchor" href="#linux-运维" aria-label="Permalink to &quot;Linux 运维&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$1, { items: unref(LinuxItems) }, null, _parent));
      _push(`<h2 id="优秀博客" tabindex="-1">优秀博客 <a class="header-anchor" href="#优秀博客" aria-label="Permalink to &quot;优秀博客&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$1, { items: unref(BlogItems) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/资源/快速文档查阅/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
