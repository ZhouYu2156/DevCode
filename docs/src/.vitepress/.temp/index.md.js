import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"首页","description":"","frontmatter":{"layout":"home","title":"首页","hero":{"name":"极客兔 - 笔记站","text":"一心创作优质内容","tagline":"铭言: 没有学不会的东西，只是你想不想的问题！","image":{"src":"/global.png","atl":"极客兔"},"actions":[{"theme":"alt","text":"博客","link":"/"},{"theme":"brand","text":"快速开始","link":"/notes/"},{"theme":"alt","text":"文档查询手册","link":"/"}]},"features":[{"icon":"📚","title":"活到老，学到老。","details":"阅读是终身的事情，任何时候都不要停下来！"},{"icon":"✏️","title":"好记性不如烂笔头。","details":"自己的笔记便于快速回忆，它比会消失的记忆有用。"},{"icon":"💻","title":"提升编程思维。","details":"拥有良好的编程思维才能让我们的大脑超越计算机。"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":null}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
