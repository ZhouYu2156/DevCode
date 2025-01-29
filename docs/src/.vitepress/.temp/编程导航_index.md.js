import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { u as useRoute } from "./Content.oLHMDJNn.js";
import "@vueuse/core";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProgrammingNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "display-block w-100vw" }, _attrs))}><iframe src="https://www.zhouyu2156.cn/Programming/" frameborder="0" class="w-100 h-100vh"></iframe></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/ProgrammingNavigation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pageData = JSON.parse('{"title":"编程导航","description":"","frontmatter":{"layout":"home","footer":false,"title":"编程导航"},"headers":[],"relativePath":"编程导航/index.md","filePath":"编程导航/index.md","lastUpdated":null}');
const __default__ = { name: "编程导航/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("编程导航/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
