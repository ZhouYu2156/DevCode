import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"PyCharm 开发工具","description":"","frontmatter":{},"headers":[],"relativePath":"notes/开发工具/PyCharm/index.md","filePath":"notes/开发工具/PyCharm/index.md","lastUpdated":null}');
const _sfc_main = { name: "notes/开发工具/PyCharm/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pycharm-开发工具" tabindex="-1">PyCharm 开发工具 <a class="header-anchor" href="#pycharm-开发工具" aria-label="Permalink to &quot;PyCharm 开发工具&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/开发工具/PyCharm/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
