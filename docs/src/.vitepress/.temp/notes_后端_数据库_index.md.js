import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"经验分享","description":"","frontmatter":{},"headers":[],"relativePath":"notes/后端/数据库/index.md","filePath":"notes/后端/数据库/index.md","lastUpdated":null}');
const _sfc_main = { name: "notes/后端/数据库/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="经验分享" tabindex="-1">经验分享 <a class="header-anchor" href="#经验分享" aria-label="Permalink to &quot;经验分享&quot;">​</a></h1><h2 id="mysql自带的客户端命令行" tabindex="-1"><code>MySQL</code>自带的客户端命令行 <a class="header-anchor" href="#mysql自带的客户端命令行" aria-label="Permalink to &quot;\`MySQL\`自带的客户端命令行&quot;">​</a></h2><ul><li>可以连接远程数据库服务器</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">$</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> mysql [-h ip地址] [-P 端口号] -uroot -p</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"># Enter password: ...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/后端/数据库/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
