import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"notes/开发工具/其他/zsh安装.md","filePath":"notes/开发工具/其他/zsh安装.md","lastUpdated":null}');
const _sfc_main = { name: "notes/开发工具/其他/zsh安装.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="zsh-终端安装" tabindex="-1"><code>ZSH</code> 终端安装 <a class="header-anchor" href="#zsh-终端安装" aria-label="Permalink to &quot;\`ZSH\` 终端安装&quot;">​</a></h2><blockquote><p>参考博客(<code>亲测有效</code>): <a href="https://zhuanlan.zhihu.com/p/625583037" target="_blank" rel="noreferrer">教程</a></p><p>可扩展了解下：<a href="https://zhuanlan.zhihu.com/p/658811059" target="_blank" rel="noreferrer">博客</a></p></blockquote><h3 id="首先安装-git" tabindex="-1">首先安装 <code>Git</code> <a class="header-anchor" href="#首先安装-git" aria-label="Permalink to &quot;首先安装 \`Git\`&quot;">​</a></h3><blockquote><p>前往: <a href="https://git-scm.com/" target="_blank" rel="noreferrer">官网</a>, 下载之后点击下一步下一步安装即可。</p></blockquote><h3 id="下载zsh安装包" tabindex="-1">下载<code>zsh</code>安装包 <a class="header-anchor" href="#下载zsh安装包" aria-label="Permalink to &quot;下载\`zsh\`安装包&quot;">​</a></h3><blockquote><p><a href="https://packages.msys2.org/package/zsh?repo=msys&amp;variant=x86_64" target="_blank" rel="noreferrer">zsh 安装包</a>其实就是<code>Git Bash</code>的扩展文件。</p></blockquote><h3 id="下载解压工具" tabindex="-1">下载解压工具 <a class="header-anchor" href="#下载解压工具" aria-label="Permalink to &quot;下载解压工具&quot;">​</a></h3><blockquote><p><a href="https://github.com/mcmilk/7-Zip-zstd/releases" target="_blank" rel="noreferrer"><code>7-zip-ZS</code>解压缩工具</a></p></blockquote><h3 id="下载安装oh-my-zsh" tabindex="-1">下载安装<code>Oh My Zsh</code> <a class="header-anchor" href="#下载安装oh-my-zsh" aria-label="Permalink to &quot;下载安装\`Oh My Zsh\`&quot;">​</a></h3><blockquote><p><a href="https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh" target="_blank" rel="noreferrer">直接访问该网址</a>, 获取到网页上的数据之后复制下来，然后放到一个<code>.sh</code>文件中保存。通过<code>chmod +x ./installation.sh</code>赋予该文件可执行文件权限，然后再<code>./installation.sh</code>方式执行该文件就可以自动进行安装<code>Oh My Zsh</code>。</p></blockquote><h3 id="安装zsh主题" tabindex="-1">安装<code>ZSH</code>主题 <a class="header-anchor" href="#安装zsh主题" aria-label="Permalink to &quot;安装\`ZSH\`主题&quot;">​</a></h3><blockquote><p>前往: <a href="https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH" target="_blank" rel="noreferrer">WiKi</a></p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/开发工具/其他/zsh安装.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const zsh__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  zsh__ as default
};
