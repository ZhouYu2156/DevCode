import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"正在开发中...","description":"","frontmatter":{},"headers":[],"relativePath":"notes/运维/linux/Linux.md","filePath":"notes/运维/linux/Linux.md","lastUpdated":null}');
const _sfc_main = { name: "notes/运维/linux/Linux.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="正在开发中" tabindex="-1">正在开发中... <a class="header-anchor" href="#正在开发中" aria-label="Permalink to &quot;正在开发中...&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/运维/linux/Linux.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Linux = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Linux as default
};
