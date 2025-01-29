import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"notes/个人作品/诗词集/濂湘诗词集.md","filePath":"notes/个人作品/诗词集/濂湘诗词集.md","lastUpdated":null}');
const _sfc_main = { name: "notes/个人作品/诗词集/濂湘诗词集.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/个人作品/诗词集/濂湘诗词集.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _____ as default
};
