import path from "path";
import fs from "fs";
import { DefaultTheme } from "vitepress";

/**
 * 全新改版
 */
import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";

interface NavLinks {
    
}
const getLinks = async function () {
  const files = fs.readdirSync("./");
  console.log(files);
//   // 获取当前项目根路径
//   const ROOT_DIR = process.cwd();
//   // 获取当前项目根路径下 `JavaScript进阶` 的子项目
//   const SUB_DIR = await readdir(join(ROOT_DIR, "JavaScript进阶"));
//   // 判断该目录下哪些是md文件
//   for (const subItem of SUB_DIR) {
//     const stats = await stat(join(ROOT_DIR, "JavaScript进阶", subItem));
//     if (stats.isFile() && subItem.endsWith(".md")) {
//       console.log(subItem);
//     }
//   }
};
getLinks();

// 根路径的绝对路径
const abspath: string = path.resolve(__dirname, "../notes/");

function isDir(p: string): boolean {
  /**
   * 判断是否为目录
   */
  return fs.statSync(p).isDirectory();
}

function readCategoryDirectory(p: string) {
  /**
   * 读取该目录层级下的所有项目并过滤出目录子项
   */
  // 将是目录的子项过滤出来
  const dirs = fs
    .readdirSync(p)
    .filter((item) => isDir(path.resolve(abspath, item)));
  // return dirs.reverse()
  return dirs;
}

export default function createProjectNavigationStructure() {
  /**
   * 读取目录结构
   */
  // 根路径
  const root_path = path.resolve(abspath);
  // 获取第一层目录
  const level1: string[] = readCategoryDirectory(root_path);
  // console.log('第一层级分类： ', level1);

  // 获取第二层目录
  let level2: string[][] = [];
  for (let index = 0; index < level1.length; index++) {
    // 第二层级的根路径
    const child_root = path.resolve(root_path, level1[index]);
    const dirs = fs.readdirSync(child_root);
    level2.push(dirs);
  }
  // console.log("第二层级分类目录: ", level2);

  // 获取第三层级的路径和名称
  const ProjectNavigationStructure: DefaultTheme.NavItem[] = [];
  for (let i = 0; i < level1.length; i++) {
    // console.log("第一层级: ", level1[i]);
    let level2_items: {
      text: string;
      items: { text: string; link: string }[];
    }[] = [];
    for (let j = 0; j < level2[i].length; j++) {
      // console.log("第二层级: ", level2[i][j]);
      let items: {
        text: string;
        link: string;
      }[] = [];
      const level2_root_path = path.resolve(abspath, level1[i], level2[i][j]);
      // 第三层级下的目录
      const dirs = fs.readdirSync(level2_root_path);
      // 对第二层目录下的所有目录进行遍历提取
      for (let k = 0; k < dirs.length; k++) {
        const level3_root_path = path.resolve(level2_root_path, dirs[k]);
        const endpoint = fs.readdirSync(level3_root_path)[0];

        const filename = path.basename(
          path.resolve(level3_root_path, endpoint),
          ".md"
        );
        const filepath = path
          .resolve(level3_root_path, endpoint)
          .split("src")[1]
          .replace(/\\/g, "/");
        //console.log('文件路径: ', filepath);
        //console.log('文件名称: ', filename);

        // 每篇文章的路径和文件名
        items.push({
          text: filename,
          link: filepath,
        });
      }
      level2_items.push({
        text: level2[i][j],
        items,
      });
      // console.log("level2_items: ", JSON.stringify(level2_items))
    }
    ProjectNavigationStructure.push({
      text: level1[i],
      items: level2_items,
    });
  }

  return ProjectNavigationStructure;
}

export function createSideBar(
  CustomProjectStructure: DefaultTheme.NavItem[],
  isCollapsed: boolean = true
) {
  /**
   * 生成侧边栏
   */
  // console.log("sidebar: ", CustomProjectStructure);
  const CustomSideBar: DefaultTheme.SidebarItem[] = [];
  for (let node1 of CustomProjectStructure) {
    Object.defineProperty(node1, "collapsed", {
      value: isCollapsed,
      writable: true,
      enumerable: true,
      configurable: true,
    });
    for (let node2 of node1?.items!) {
      Object.defineProperty(node2, "collapsed", {
        value: isCollapsed,
        writable: true,
        enumerable: true,
        configurable: true,
      });
    }
    CustomSideBar.push(node1);
  }

  // console.log("sidebar: ", CustomSideBar);
  return CustomSideBar;
}
