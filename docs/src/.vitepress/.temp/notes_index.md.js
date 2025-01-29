import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"notes导航栏","description":"","frontmatter":{},"headers":[],"relativePath":"notes/index.md","filePath":"notes/index.md","lastUpdated":null}');
const _sfc_main = { name: "notes/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="notes导航栏" tabindex="-1">notes导航栏 <a class="header-anchor" href="#notes导航栏" aria-label="Permalink to &quot;notes导航栏&quot;">​</a></h1><h2 id="待开发" tabindex="-1">待开发... <a class="header-anchor" href="#待开发" aria-label="Permalink to &quot;待开发...&quot;">​</a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
