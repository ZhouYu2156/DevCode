import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"Flask 框架","description":"","frontmatter":{},"headers":[],"relativePath":"notes/后端/Python/Flask.md","filePath":"notes/后端/Python/Flask.md","lastUpdated":null}');
const _sfc_main = { name: "notes/后端/Python/Flask.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="flask-框架" tabindex="-1">Flask 框架 <a class="header-anchor" href="#flask-框架" aria-label="Permalink to &quot;Flask 框架&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/后端/Python/Flask.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Flask = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Flask as default
};
