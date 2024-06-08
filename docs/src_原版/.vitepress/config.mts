import { defineConfig } from "vitepress";

const ICP = "湘ICP备2024064075号-1";
const POLICE = "湘公网安备43112402000148号";

const FILINGS = `
<a href='https://beian.miit.gov.cn' target='_blank' style="display:flex;justify-content:center;align-items:center;text-decoration-line: none;">
<img src="/foot-icp.png" style="width:20px;height:20px;margin-right:5px;"/>
<span>${ICP}</span>
</a>
<a href='https://ywtb.mps.gov.cn/' target='_blank' style="display:flex;justify-content:center;align-items:center;text-decoration-line: none;">
<img src="/logo-police.png" style="width:20px;height:20px;margin-right:5px;"/>
<span>${POLICE}</span>
</a>
`;

import {
  searchConfig,
  markdown,
  socialLinks,
  sidebar,
  nav,
} from "./configuration";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "极 客 兔",
  // outlineTitle: '笔记大纲',   // 右侧大纲标题
  // base: '/',
  outDir: "./dist",
  // srcDir: 'src',
  srcExclude: ["**/README.md", "**/TODO.md"],
  description: "一心创作优质内容,你学习路上的笔记好帮手...",
  head: [["link", { rel: "icon", href: "pineapple-logo.svg" }]],
  locales: {
    root: {
      label: "中文",
      lang: "zh-CN",
    },
  },
  ignoreDeadLinks: true, // 忽略死链接
  markdown,
  themeConfig: {
    siteTitle: "极 客 兔", // 网站左上角标题
    returnToTopLabel: "返回顶部", // 手机端才会显示
    lastUpdated: {
      text: "最近更新时间",
    },
    editLink: {
      /* 编辑链接1 */
      // pattern: 'https://github.com/ZhouYu2156/docs/:path',
      pattern: "https://gitee.com/zhouyu2156/DevCode",
      text: "在 Gitee 上编辑此页",
    },
    outline: {
      level: "deep",
      label: "文 章 导 航",
    },
    logo: "/pineapple-logo.svg",
    search: searchConfig,
    // https://vitepress.dev/reference/default-theme-config
    /* 头部导航栏 */
    nav,
    /* 左侧边栏 */
    sidebar,
    // 文档页脚
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    /* 社交链接 */
    socialLinks,
    // 主页面的页脚
    footer: {
      message: FILINGS,
      copyright: "Copyright © 2023 Created By Zhou Yu.",
    },
  },
});
