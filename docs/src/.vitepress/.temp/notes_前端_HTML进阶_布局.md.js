import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"布局章节","description":"","frontmatter":{},"headers":[],"relativePath":"notes/前端/HTML进阶/布局.md","filePath":"notes/前端/HTML进阶/布局.md","lastUpdated":null}');
const _sfc_main = { name: "notes/前端/HTML进阶/布局.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="布局章节" tabindex="-1">布局章节 <a class="header-anchor" href="#布局章节" aria-label="Permalink to &quot;布局章节&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/前端/HTML进阶/布局.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  __ as default
};
