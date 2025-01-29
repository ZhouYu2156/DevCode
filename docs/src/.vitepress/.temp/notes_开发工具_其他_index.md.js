import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"其它工具","description":"","frontmatter":{},"headers":[],"relativePath":"notes/开发工具/其他/index.md","filePath":"notes/开发工具/其他/index.md","lastUpdated":null}');
const _sfc_main = { name: "notes/开发工具/其他/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="其它工具" tabindex="-1">其它工具 <a class="header-anchor" href="#其它工具" aria-label="Permalink to &quot;其它工具&quot;">​</a></h1><h2 id="winrar-解压缩工具" tabindex="-1">WinRar 解压缩工具 <a class="header-anchor" href="#winrar-解压缩工具" aria-label="Permalink to &quot;WinRar 解压缩工具&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">推荐：</p><blockquote><p>Windows &amp; Mac &amp; Linux 系统的 <code>免费解压缩工具</code>：</p></blockquote><ul><li>推荐：<a href="https://www.win-rar.com/" target="_blank" rel="noreferrer">访问官网</a></li></ul><blockquote><p>下载好对应版本之后，进入 <code>WinRAR.exe</code> 软件，找到 <code>选项</code> =&gt; <code>压缩</code> =&gt; <code>创建默认配置</code> =&gt; <code>压缩文件格式</code> 配置成自己想要的 <code>ZIP</code> 或者 <code>RAR</code> 格式即可.</p></blockquote></div><h2 id="win11-去掉快捷图标的箭头" tabindex="-1">Win11 去掉快捷图标的箭头 <a class="header-anchor" href="#win11-去掉快捷图标的箭头" aria-label="Permalink to &quot;Win11 去掉快捷图标的箭头&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>推荐：<a href="http://m.pcxitongcheng.com/xtjc/win11/2023-09-13/38609.html" target="_blank" rel="noreferrer">参考</a></p></div><h2 id="windows-本地安装人工智能" tabindex="-1">windows 本地安装人工智能 <a class="header-anchor" href="#windows-本地安装人工智能" aria-label="Permalink to &quot;windows 本地安装人工智能&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">教程</p><blockquote><p>官网：<a href="https://ollama.com/" target="_blank" rel="noreferrer">去看看</a></p></blockquote><blockquote><p>Github 网址：<a href="https://github.com/ollama/ollama" target="_blank" rel="noreferrer">大语言模型运行工具下载</a></p></blockquote><blockquote><p>下载并安装完成后，终端输入 <code>ollama run llama2</code> 运行 <code>llama2</code> 大模型，由于首次没有安装，所以它会去下载该大语言模型，下载完成之后就可以运行起来了。还有其他大语言模型，可以在官网看看。</p></blockquote></div><h2 id="谷歌浏览器插件推荐" tabindex="-1">谷歌浏览器插件推荐 <a class="header-anchor" href="#谷歌浏览器插件推荐" aria-label="Permalink to &quot;谷歌浏览器插件推荐&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">下载</p><ul><li>推荐1：<a href="https://chromewebstore.google.com/" target="_blank" rel="noreferrer">谷歌应用商店（国外）</a></li><li>推荐2：<a href="https://chrome.zzzmh.cn/#/index" target="_blank" rel="noreferrer">极简插件（国内）</a></li><li>JSON可视化：<a href="https://jsoncrack.com/editor" target="_blank" rel="noreferrer">jsoncrack</a></li></ul></div><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "center" })}">插件名称</th><th style="${ssrRenderStyle({ "text-align": "center" })}">插件功能描述</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">JSONView</td><td style="${ssrRenderStyle({ "text-align": "center" })}">美化JSON格式，可以折叠、展开对象层级</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">XPath</td><td style="${ssrRenderStyle({ "text-align": "center" })}">测试Xpath语法解析DOM</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/开发工具/其他/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
