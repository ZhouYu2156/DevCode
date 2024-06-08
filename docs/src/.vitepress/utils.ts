import { DefaultTheme } from "vitepress";
import { readdir, stat } from "node:fs/promises";
import path, { posix } from "node:path";
import { fstat, link } from "node:fs";

/**项目根路径 */
let ROOT_DIR = process.cwd();
/**项目资源路径 */
let SOURCE_DIR = path.join(ROOT_DIR, "src");
/**判断一个文件路径是否是目录 */
const isDir = async (file_path: string) => await stat(file_path);
/**导航栏列表 */
const Navigations: DefaultTheme.NavItem[] = [];
export default async function CreateNavigationsService(source: string) {
  /** 创建<首页>导航标签 */
  Navigations.push(
    {
      text: "首页",
      link: "/",
    },
    {
      text: "编程导航",
      link: "/编程导航/",
    }
  );
  interface CatalogItem {
    text: string;
    items: { text: string; link: string }[];
  }
  let all_items = await getFileLayers(source);
  for (let item of all_items) {
    let catalog: CatalogItem = {
      text: item.text,
      items: [],
    };
    for (let sub_item of item.children) {
      catalog.items.push({
        text: sub_item.text,
        link: sub_item.link,
      });
    }
    // 将每个分类的子项添加到数组中后，向导航栏数组中添加该项分类
    Navigations.push(catalog);
  }
  /**创建博客导航栏标签 */
  return Navigations;
}

// 定义一个函数来移除.md后缀
function removeMdSuffix(filename: string): string {
  return filename.endsWith(".md") ? filename.slice(0, -3) : filename;
}
/**拼接好所有路径 */
export async function getFileLayers(
  source_dir: string,
  collapsed: boolean = false
) {
  // 获取目录下的所有分类
  let NOTES_DIR = path.join(SOURCE_DIR, source_dir);
  // 获取第一级资源路径
  let root_level_dirs = await readdir(NOTES_DIR);
  let root_level_items: any[] = [];
  // 遍历一级分类目录
  for (let subItem of root_level_dirs) {
    let file_abspath = path.join(NOTES_DIR, subItem);
    let file_stat = await stat(file_abspath);
    if (file_stat.isDirectory()) {
      /**将每一个分类加入到一级分类数组中 */
      root_level_items.push({
        text: subItem,
        link: posix.join("/", source_dir, subItem, "/"),
        collapsed,
      });
    }
  }
  // 遍历二级分类目录
  for (let subItem of root_level_items) {
    let { link } = subItem; // 将路径解构出来
    let second_level_dirs = await readdir(path.join(SOURCE_DIR, link));
    for (let sub_dir of second_level_dirs) {
      let file_abspath = path.join(SOURCE_DIR, link, sub_dir);
      let file_stat = await stat(file_abspath);
      if (file_stat.isDirectory()) {
        /**将每一个分类加入到一级分类数组中 */
        /**不存在则创建、存在则添加 */
        if (!subItem.children) {
          subItem.children = [
            {
              text: sub_dir,
              link: posix.join(link, sub_dir, "/"),
            },
          ];
        } else {
          subItem.children.push({
            text: sub_dir,
            link: posix.join(link, sub_dir, "/"),
          });
        }
      }
    }
  }
  // 遍历三级目录
  for (let item of root_level_items) {
    for (let subItem of item.children) {
      let second_level_dir = path.join(SOURCE_DIR, subItem.link);
      /**获取第三级目录下的除index.md以外的所有.md文件 */
      let third_level_dirs = await readdir(second_level_dir);
      // console.log(third_level_dirs);
      for (let sub_file of third_level_dirs) {
        let third_level_file = path.join(second_level_dir, sub_file);
        // 判断不是目录
        if (!(await stat(third_level_file)).isDirectory()) {
          // 判断不是index.md且以.md结尾
          if (
            third_level_file.endsWith(".md") &&
            !third_level_file.endsWith("index.md")
          ) {
            if (!subItem?.children) {
              subItem.children = [
                {
                  text: sub_file,
                  link: posix.join(subItem.link, removeMdSuffix(sub_file)), // 将文件名paramiko.md去掉.md
                },
              ];
            } else {
              // 将文件名paramiko.md去掉.md
              subItem.children.push({
                text: sub_file,
                link: posix.join(subItem.link, removeMdSuffix(sub_file)),
              });
            }
          }
        }
      }
    }
  }
  return root_level_items;
}
/**所有分类展示 */
export const allCatalogs = async function (notes_dir: string = "notes") {
  let layers = await getFileLayers(notes_dir);
  let sidebars: DefaultTheme.Sidebar = {
    "/notes/": [
      {
        text: "笔记分类",
        collapsed: false,
        items: [],
      },
    ],
  };
  let count = 0;
  for (let root_item of layers) {
    /**添加一项分类 */
    sidebars["/notes/"][0].items[count] = {
      text: root_item.text,
      collapsed: false,
      items: [],
    };
    // 正难则反，先收集所有子项，最后统一添加到 items 数组中去
    let catalog: { text: string; link: string }[] = [];
    (
      root_item.children as {
        text: string;
        link: string;
        collapsed: boolean;
        children?: {
          text: string;
          link: string;
          children?: {
            text: string;
            link: string;
          }[];
        }[];
      }[]
    ).forEach((item, index) => {
      catalog.push({
        text: item.text,
        link: item.link,
      });
    });
    /**将所有子项添加到该分类中 */
    sidebars["/notes/"][0].items[count].items = catalog;
    // 添加下一个分类
    count++;
  }
  return sidebars;
};
/**获取所有子分类 */
export const subCatalog = async (notes_dir: string = "notes") => {
  let layers = await getFileLayers(notes_dir);
  const all_sub_catalogs: {} = {};
  for (let item of layers) {
    for (let sub_item of item.children) {
      let sub_items: { text: string; link: string }[] = [];
      // { text: string; link: string }
      for (let third_item of sub_item.children) {
        sub_items.push({
          text: (third_item.text as string).slice(0, -3),
          link: third_item.link,
        });
      }
      /**将每个分类添加到对应的数组中去 */
      all_sub_catalogs[sub_item.link] = sub_items;
    }
  }
  // for (let item in all_sub_catalogs) {
  //   console.log(item);
  // }
  return all_sub_catalogs;
};
