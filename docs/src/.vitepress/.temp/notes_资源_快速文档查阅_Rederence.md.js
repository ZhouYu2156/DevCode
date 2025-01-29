import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"待开发中...","description":"","frontmatter":{},"headers":[],"relativePath":"notes/资源/快速文档查阅/Rederence.md","filePath":"notes/资源/快速文档查阅/Rederence.md","lastUpdated":null}');
const _sfc_main = { name: "notes/资源/快速文档查阅/Rederence.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="待开发中" tabindex="-1">待开发中... <a class="header-anchor" href="#待开发中" aria-label="Permalink to &quot;待开发中...&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/资源/快速文档查阅/Rederence.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Rederence = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Rederence as default
};
