import { shallowRef, inject, computed, ref, onUnmounted, reactive, markRaw, readonly, nextTick, defineComponent, h } from "vue";
import { useDark } from "@vueuse/core";
function deserializeFunctions(r) {
  return Array.isArray(r) ? r.map(deserializeFunctions) : typeof r == "object" && r !== null ? Object.keys(r).reduce((t, n) => (t[n] = deserializeFunctions(r[n]), t), {}) : typeof r == "string" && r.startsWith("_vp-fn_") ? new Function(`return ${r.slice(7)}`)() : r;
}
const siteData = deserializeFunctions(JSON.parse(`{"lang":"zh-CN","dir":"ltr","title":"极 客 兔","description":"一心创作优质内容,你学习路上的笔记好帮手...","base":"/","head":[],"router":{"prefetchLinks":true},"appearance":true,"themeConfig":{"siteTitle":"极 客 兔","returnToTopLabel":"返回顶部","lastUpdated":{"text":"最近更新时间"},"editLink":{"pattern":"https://github.com/ZhouYu2156/DevCode","text":"在 Github 上编辑此页"},"outline":{"level":"deep","label":"文 章 导 航"},"logo":"/pineapple-logo.svg","search":{"provider":"local","options":{"translations":{"button":{"buttonText":"搜索文档","buttonAriaLabel":"搜索文档"},"modal":{"noResultsText":"无法找到相关结果","resetButtonTitle":"清除查询条件","displayDetails":"显示详情列表","footer":{"selectText":"选择","navigateText":"切换","closeText":"关闭"}}}}},"nav":[{"text":"首页","link":"/"},{"text":"编程导航","link":"/编程导航/"},{"text":"个人作品","items":[{"text":"成长日志","link":"/notes/个人作品/成长日志/"},{"text":"文言文","link":"/notes/个人作品/文言文/"},{"text":"诗词集","link":"/notes/个人作品/诗词集/"},{"text":"道经","link":"/notes/个人作品/道经/"}]},{"text":"前端","items":[{"text":"HTML进阶","link":"/notes/前端/HTML进阶/"},{"text":"JavaScript进阶","link":"/notes/前端/JavaScript进阶/"},{"text":"React","link":"/notes/前端/React/"},{"text":"Scss","link":"/notes/前端/Scss/"},{"text":"Vue","link":"/notes/前端/Vue/"}]},{"text":"后端","items":[{"text":"Nodejs","link":"/notes/后端/Nodejs/"},{"text":"Python","link":"/notes/后端/Python/"},{"text":"数据库","link":"/notes/后端/数据库/"}]},{"text":"开发工具","items":[{"text":"PyCharm","link":"/notes/开发工具/PyCharm/"},{"text":"VSCode","link":"/notes/开发工具/VSCode/"},{"text":"其他","link":"/notes/开发工具/其他/"}]},{"text":"开源库","items":[{"text":"常用TS方法","link":"/notes/开源库/常用TS方法/"}]},{"text":"资源","items":[{"text":"快速文档查阅","link":"/notes/资源/快速文档查阅/"}]},{"text":"运维","items":[{"text":"cloud","link":"/notes/运维/cloud/"},{"text":"docker","link":"/notes/运维/docker/"},{"text":"linux","link":"/notes/运维/linux/"},{"text":"web服务器","link":"/notes/运维/web服务器/"}]}],"sidebar":{"/notes/":[{"text":"笔记分类","collapsed":false,"items":[{"text":"个人作品","collapsed":false,"items":[{"text":"成长日志","link":"/notes/个人作品/成长日志/"},{"text":"文言文","link":"/notes/个人作品/文言文/"},{"text":"诗词集","link":"/notes/个人作品/诗词集/"},{"text":"道经","link":"/notes/个人作品/道经/"}]},{"text":"前端","collapsed":false,"items":[{"text":"HTML进阶","link":"/notes/前端/HTML进阶/"},{"text":"JavaScript进阶","link":"/notes/前端/JavaScript进阶/"},{"text":"React","link":"/notes/前端/React/"},{"text":"Scss","link":"/notes/前端/Scss/"},{"text":"Vue","link":"/notes/前端/Vue/"}]},{"text":"后端","collapsed":false,"items":[{"text":"Nodejs","link":"/notes/后端/Nodejs/"},{"text":"Python","link":"/notes/后端/Python/"},{"text":"数据库","link":"/notes/后端/数据库/"}]},{"text":"开发工具","collapsed":false,"items":[{"text":"PyCharm","link":"/notes/开发工具/PyCharm/"},{"text":"VSCode","link":"/notes/开发工具/VSCode/"},{"text":"其他","link":"/notes/开发工具/其他/"}]},{"text":"开源库","collapsed":false,"items":[{"text":"常用TS方法","link":"/notes/开源库/常用TS方法/"}]},{"text":"资源","collapsed":false,"items":[{"text":"快速文档查阅","link":"/notes/资源/快速文档查阅/"}]},{"text":"运维","collapsed":false,"items":[{"text":"cloud","link":"/notes/运维/cloud/"},{"text":"docker","link":"/notes/运维/docker/"},{"text":"linux","link":"/notes/运维/linux/"},{"text":"web服务器","link":"/notes/运维/web服务器/"}]}]}],"/notes/个人作品/成长日志/":[{"text":"心情篇","link":"/notes/个人作品/成长日志/心情篇"}],"/notes/个人作品/文言文/":[{"text":"濂湘文言大全","link":"/notes/个人作品/文言文/濂湘文言大全"}],"/notes/个人作品/诗词集/":[{"text":"濂湘诗词集","link":"/notes/个人作品/诗词集/濂湘诗词集"}],"/notes/个人作品/道经/":[{"text":"世经","link":"/notes/个人作品/道经/世经"}],"/notes/前端/HTML进阶/":[{"text":"布局","link":"/notes/前端/HTML进阶/布局"}],"/notes/前端/JavaScript进阶/":[{"text":"Canvas","link":"/notes/前端/JavaScript进阶/Canvas"},{"text":"Promise","link":"/notes/前端/JavaScript进阶/Promise"},{"text":"TypeScript","link":"/notes/前端/JavaScript进阶/TypeScript"},{"text":"WebAPI","link":"/notes/前端/JavaScript进阶/WebAPI"},{"text":"事件循环","link":"/notes/前端/JavaScript进阶/事件循环"},{"text":"原型链","link":"/notes/前端/JavaScript进阶/原型链"},{"text":"高级核心概念","link":"/notes/前端/JavaScript进阶/高级核心概念"}],"/notes/前端/React/":[{"text":"深入框架原理","link":"/notes/前端/React/深入框架原理"}],"/notes/前端/Scss/":[{"text":"实战小案例","link":"/notes/前端/Scss/实战小案例"}],"/notes/前端/Vue/":[{"text":"Vite构建工具","link":"/notes/前端/Vue/Vite构建工具"},{"text":"Vue3快速上手","link":"/notes/前端/Vue/Vue3快速上手"}],"/notes/后端/Nodejs/":[{"text":"常用第三方库","link":"/notes/后端/Nodejs/常用第三方库"}],"/notes/后端/Python/":[{"text":"Django","link":"/notes/后端/Python/Django"},{"text":"FastApi","link":"/notes/后端/Python/FastApi"},{"text":"Flask","link":"/notes/后端/Python/Flask"},{"text":"Python第三方库","link":"/notes/后端/Python/Python第三方库"},{"text":"RestFramework","link":"/notes/后端/Python/RestFramework"},{"text":"Tornado","link":"/notes/后端/Python/Tornado"},{"text":"专业集训笔记","link":"/notes/后端/Python/专业集训笔记"}],"/notes/后端/数据库/":[{"text":"MySQL","link":"/notes/后端/数据库/MySQL"}],"/notes/开发工具/PyCharm/":[{"text":"PyCharm","link":"/notes/开发工具/PyCharm/PyCharm"}],"/notes/开发工具/VSCode/":[{"text":"插件","link":"/notes/开发工具/VSCode/插件"}],"/notes/开发工具/其他/":[{"text":"Git版本控制工具","link":"/notes/开发工具/其他/Git版本控制工具"},{"text":"zsh安装","link":"/notes/开发工具/其他/zsh安装"},{"text":"经验与方法","link":"/notes/开发工具/其他/经验与方法"}],"/notes/开源库/常用TS方法/":[{"text":"工具箱","link":"/notes/开源库/常用TS方法/工具箱"}],"/notes/资源/快速文档查阅/":[{"text":"Rederence","link":"/notes/资源/快速文档查阅/Rederence"},{"text":"本地人工智能大语言模型安装","link":"/notes/资源/快速文档查阅/本地人工智能大语言模型安装"}],"/notes/运维/cloud/":[{"text":"搭建服务器","link":"/notes/运维/cloud/搭建服务器"}],"/notes/运维/docker/":[{"text":"容器","link":"/notes/运维/docker/容器"}],"/notes/运维/linux/":[{"text":"Linux","link":"/notes/运维/linux/Linux"},{"text":"Linux安装环境","link":"/notes/运维/linux/Linux安装环境"}],"/notes/运维/web服务器/":[{"text":"Nginx","link":"/notes/运维/web服务器/Nginx"}]},"docFooter":{"prev":"上一篇","next":"下一篇"},"socialLinks":[{"icon":{"svg":"<img style=\\"width: 20px; border-radius: 20%;\\" src=\\"/gitee.svg\\">"},"link":"https://gitee.com/zhouyu2156"},{"icon":{"svg":"<img style=\\"width: 20px; border-radius: 20%;\\" src=\\"/github.svg\\">"},"link":"https://github.com/ZhouYu2156"},{"icon":{"svg":"<img style=\\"width: 20px; border-radius: 20%;\\" src=\\"/fish.png\\">"},"link":"https://www.zhouyu2156.cn/Programming/"},{"icon":{"svg":"<img style=\\"width: 20px; border-radius: 20%;\\" src=\\"/bilibili.svg\\">"},"link":"https://space.bilibili.com/431828034"}],"footer":{"message":"\\n<a href='https://beian.miit.gov.cn' target='_blank' style=\\"display:flex;justify-content:center;align-items:center;text-decoration-line: none;\\">\\n<img src=\\"/foot-icp.png\\" style=\\"width:20px;height:20px;margin-right:5px;\\"/>\\n<span>湘ICP备2024064075号-1</span>\\n</a>\\n<a href='https://ywtb.mps.gov.cn/' target='_blank' style=\\"display:flex;justify-content:center;align-items:center;text-decoration-line: none;\\">\\n<img src=\\"/logo-police.png\\" style=\\"width:20px;height:20px;margin-right:5px;\\"/>\\n<span>湘公网安备43112402000148号</span>\\n</a>\\n","copyright":"Copyright © 2023 Created By Zhou Yu."}},"locales":{"root":{"label":"中文","lang":"zh-CN"}},"scrollOffset":134,"cleanUrls":false}`));
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i;
const APPEARANCE_KEY = "vitepress-theme-appearance";
const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;
const inBrowser = typeof document !== "undefined";
const notFoundPageData = {
  relativePath: "",
  filePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0,
  isNotFound: true
};
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return (inBrowser ? location.hash : "") === hashMatch[0];
  }
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_RE, "").replace(EXT_RE, "");
}
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function resolveSiteDataByRoute(siteData2, relativePath) {
  var _a, _b, _c, _d, _e, _f, _g;
  const localeIndex = Object.keys(siteData2.locales).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `/${key}/`, true)) || "root";
  return Object.assign({}, siteData2, {
    localeIndex,
    lang: ((_a = siteData2.locales[localeIndex]) == null ? void 0 : _a.lang) ?? siteData2.lang,
    dir: ((_b = siteData2.locales[localeIndex]) == null ? void 0 : _b.dir) ?? siteData2.dir,
    title: ((_c = siteData2.locales[localeIndex]) == null ? void 0 : _c.title) ?? siteData2.title,
    titleTemplate: ((_d = siteData2.locales[localeIndex]) == null ? void 0 : _d.titleTemplate) ?? siteData2.titleTemplate,
    description: ((_e = siteData2.locales[localeIndex]) == null ? void 0 : _e.description) ?? siteData2.description,
    head: mergeHead(siteData2.head, ((_f = siteData2.locales[localeIndex]) == null ? void 0 : _f.head) ?? []),
    themeConfig: {
      ...siteData2.themeConfig,
      ...(_g = siteData2.locales[localeIndex]) == null ? void 0 : _g.themeConfig
    }
  });
}
function createTitle(siteData2, pageData) {
  const title = pageData.title || siteData2.title;
  const template = pageData.titleTemplate ?? siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  if (title === templateString.slice(3)) {
    return title;
  }
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null)
    return false;
  return head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const extraExts = typeof process === "object" && process.env.VITE_EXTRA_EXTENSIONS || (define_import_meta_env_default == null ? void 0 : define_import_meta_env_default.VITE_EXTRA_EXTENSIONS) || "";
const KNOWN_EXTENSIONS = new Set(("3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip" + (extraExts && typeof extraExts === "string" ? "," + extraExts : "")).split(","));
function treatAsHtml(filename) {
  const ext = filename.split(".").pop();
  return ext == null || !KNOWN_EXTENSIONS.has(ext.toLowerCase());
}
function escapeRegExp(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(siteData);
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  const appearance = site.value.appearance;
  const isDark = appearance === "force-dark" ? ref(true) : appearance ? useDark({
    storageKey: APPEARANCE_KEY,
    initialValue: () => typeof appearance === "string" ? appearance : "auto",
    ...typeof appearance === "object" ? appearance : {}
  }) : ref(false);
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    params: computed(() => route.data.params),
    lang: computed(() => site.value.lang),
    dir: computed(() => route.data.frontmatter.dir || site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => createTitle(site.value, route.data)),
    description: computed(() => route.data.description || site.value.description),
    isDark
  };
}
function useData() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base, path) {
  return `${base}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || !path.startsWith("/") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  pagePath = pagePath.replace(/\/$/, "/index");
  {
    if (inBrowser) {
      const base = "/";
      pagePath = sanitizeFileName(pagePath.slice(base.length).replace(/\//g, "_") || "index") + ".md";
      let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      if (!pageHash) {
        pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md";
        pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      }
      if (!pageHash)
        return null;
      pagePath = `${base}${"assets"}/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
let contentUpdatedCallbacks = [];
function onContentUpdated(fn) {
  contentUpdatedCallbacks.push(fn);
  onUnmounted(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks.filter((f) => f !== fn);
  });
}
function getScrollOffset() {
  let scrollOffset = siteDataRef.value.scrollOffset;
  let offset = 0;
  let padding = 24;
  if (typeof scrollOffset === "object" && "padding" in scrollOffset) {
    padding = scrollOffset.padding;
    scrollOffset = scrollOffset.selector;
  }
  if (typeof scrollOffset === "number") {
    offset = scrollOffset;
  } else if (typeof scrollOffset === "string") {
    offset = tryOffsetSelector(scrollOffset, padding);
  } else if (Array.isArray(scrollOffset)) {
    for (const selector of scrollOffset) {
      const res = tryOffsetSelector(selector, padding);
      if (res) {
        offset = res;
        break;
      }
    }
  }
  return offset;
}
function tryOffsetSelector(selector, padding) {
  const el = document.querySelector(selector);
  if (!el)
    return 0;
  const bot = el.getBoundingClientRect().bottom;
  if (bot < 0)
    return 0;
  return bot + padding;
}
const RouterSymbol = Symbol();
const fakeHost = "http://a.com";
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  const router = {
    route,
    go
  };
  async function go(href = inBrowser ? location.href : "/") {
    var _a, _b;
    href = normalizeHref(href);
    if (await ((_a = router.onBeforeRouteChange) == null ? void 0 : _a.call(router, href)) === false)
      return;
    updateHistory(href);
    await loadPage(href);
    await ((_b = router.onAfterRouteChanged) == null ? void 0 : _b.call(router, href));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    var _a;
    if (await ((_a = router.onBeforePageLoad) == null ? void 0 : _a.call(router, href)) === false)
      return;
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (!page) {
        throw new Error(`Page not found: ${pendingPath}`);
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = markRaw(comp);
        route.data = true ? markRaw(__pageData) : readonly(__pageData);
        if (inBrowser) {
          nextTick(() => {
            let actualPathname = siteDataRef.value.base + __pageData.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
            if (!siteDataRef.value.cleanUrls && !actualPathname.endsWith("/")) {
              actualPathname += ".html";
            }
            if (actualPathname !== targetLoc.pathname) {
              targetLoc.pathname = actualPathname;
              href = actualPathname + targetLoc.search + targetLoc.hash;
              history.replaceState(null, "", href);
            }
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.getElementById(decodeURIComponent(targetLoc.hash).slice(1));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch|Page not found/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        route.data = notFoundPageData;
      }
    }
  }
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (button)
        return;
      const link = e.target.closest("a");
      if (link && !link.closest(".vp-raw") && (link instanceof SVGElement || !link.download)) {
        const { target } = link;
        const { href, origin, pathname, hash, search } = new URL(link.href instanceof SVGAnimatedString ? link.href.animVal : link.href, link.baseURI);
        const currentUrl = window.location;
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && !target && origin === currentUrl.origin && treatAsHtml(pathname)) {
          e.preventDefault();
          if (pathname === currentUrl.pathname && search === currentUrl.search) {
            if (hash !== currentUrl.hash) {
              history.pushState(null, "", hash);
              window.dispatchEvent(new Event("hashchange"));
            }
            if (hash) {
              scrollTo(link, hash, link.classList.contains("header-anchor"));
            } else {
              updateHistory(href);
              window.scrollTo(0, 0);
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", async (e) => {
      var _a;
      await loadPage(normalizeHref(location.href), e.state && e.state.scrollPosition || 0);
      (_a = router.onAfterRouteChanged) == null ? void 0 : _a.call(router, location.href);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return router;
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.getElementById(decodeURIComponent(hash).slice(1));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let scrollToTarget = function() {
      if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight)
        window.scrollTo(0, targetTop);
      else
        window.scrollTo({ left: 0, top: targetTop, behavior: "smooth" });
    };
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - getScrollOffset() + targetPadding;
    requestAnimationFrame(scrollToTarget);
  }
}
function updateHistory(href) {
  if (inBrowser && normalizeHref(href) !== normalizeHref(location.href)) {
    history.replaceState({ scrollPosition: window.scrollY }, document.title);
    history.pushState(null, "", href);
  }
}
function normalizeHref(href) {
  const url = new URL(href, fakeHost);
  url.pathname = url.pathname.replace(/(^|\/)index(\.html)?$/, "$1");
  if (siteDataRef.value.cleanUrls)
    url.pathname = url.pathname.replace(/\.html$/, "");
  else if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html"))
    url.pathname += ".html";
  return url.pathname + url.search + url.hash;
}
const runCbs = () => contentUpdatedCallbacks.forEach((fn) => fn());
const Content = defineComponent({
  name: "VitePressContent",
  props: {
    as: { type: [Object, String], default: "div" }
  },
  setup(props) {
    const route = useRoute();
    const { site } = useData();
    return () => h(props.as, site.value.contentProps ?? { style: { position: "relative" } }, [
      route.component ? h(route.component, {
        onVnodeMounted: runCbs,
        onVnodeUpdated: runCbs,
        onVnodeUnmounted: runCbs
      }) : "404 Page Not Found"
    ]);
  }
});
export {
  Content as C,
  EXTERNAL_URL_RE as E,
  RouterSymbol as R,
  useData as a,
  inBrowser as b,
  isActive as c,
  createTitle as d,
  initData as e,
  dataSymbol as f,
  getScrollOffset as g,
  createRouter as h,
  isExternal as i,
  useRouter as j,
  escapeRegExp as k,
  mergeHead as m,
  onContentUpdated as o,
  pathToFile as p,
  siteDataRef as s,
  treatAsHtml as t,
  useRoute as u,
  withBase as w
};
