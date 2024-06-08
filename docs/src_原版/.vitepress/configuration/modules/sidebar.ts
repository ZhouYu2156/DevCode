import { DefaultTheme } from "vitepress";
import createProjectNavigationStructure from "../../utils";
import { createSideBar } from "../../utils";

export const sidebar: DefaultTheme.Sidebar = {
  "/notes/": [
    {
      // 将分类进行汇总
      text: "全部分类",
      collapsed: false,
      // true 表示菜单折叠, false 表示菜单不折叠
      items: createSideBar(createProjectNavigationStructure(), true),
    },
  ],
};
