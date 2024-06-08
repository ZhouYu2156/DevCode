# VSCode 开发工具

## 一、常用插件

|            插件名称             |                功能                 |
| :-----------------------------: | :---------------------------------: |
|          vscode-icons           |       好看的 VSCode 文件图标        |
|         Auto Close Tag          |            标签自动闭合             |
|         Auto Rename Tag         |          成对标签联动修改           |
|        Path Intellisense        |            智能路径提示             |
|        HTML CSS Support         |          HTML CSS 智能提示          |
|       Atom One Dark Theme       |           舒适的主题样式            |
|           Live Server           |        右键可快速开启服务器         |
|            CodeGeeX             |    人工智能代码助手（辅助开发）     |
|          TONGYI Lingma          |    人工智能代码助手（辅助开发）     |
|       Material Icon Theme       |         美观的目录文件图标          |
|     Bracket Pair Colorizer      | 括号成对色彩化（已经内置于 VSCode） |
|    Prettier - Code formatter    |      优雅的代码自动格式化插件       |
|  Vue Language Features (Volar)  |          Vue 项目开发插件           |
|  TypeScript Vue Plugin (Volar)  |          Vue 项目开发插件           |
| JavaScript (ES6) code snippets  |      ES6 语法快捷键和智能提示       |
| Chinese (Simplified) (简体中文) |       VSCode 界面简体中文插件       |

## 二、常用快捷键

> 个人常用快捷键

|                           快捷键                            |                    功能                     |
| :---------------------------------------------------------: | :-----------------------------------------: |
| <code style="color: orangered"><kbd>编辑区操作</kbd></code> |                                             |
|                   `Ctrl + F4`, `Ctrl + W`                   |        关闭当前正在工作的编辑区页面         |
|                         `Ctrl + \`                          |    将当前光标所在的编辑区页面拆分到右侧     |
|                         `Alt + ←/→`                         |             左右切换编辑区页面              |
|    <code style="color: orangered"><kbd>显示</kbd></code>    |                                             |
|                        `Ctrl + -/+`                         |             缩小/放大编辑器大小             |
|                         `Ctrl + B`                          |            切换左边侧边栏可见性             |
|                     `Ctrl + Shift + C`                      |              打开新的 CMD 窗口              |
|                         `Ctrl + ~`                          |                显示集成终端                 |
|                        `Ctrl + ↑/↓`                         |               上下滚动编辑区                |
|                     `Ctrl + Shift + ~`                      |            创建一个新的集成终端             |
|    <code style="color: orangered"><kbd>通用</kbd></code>    |                                             |
|                  `Ctrl + Shift + P`, `F1`                   |                显示命令面板                 |
|  <code style="color: orangered"><kbd>基础编辑</kbd></code>  |                                             |
|                         `Ctrl + X`                          |               剪切光标所在行                |
|                         `Ctrl + C`                          |               复制光标所在行                |
|                         `Alt + ↑/↓`                         |               上/下移动文本行               |
|                       `Ctrl + Enter`                        |               光标下面插入行                |
|                     `Alt + Shift + ↑/↓`                     | 向上/向下复制选中的内容（或光标所在行内容） |
|                    `Ctrl + Shit + Enter`                    |               光标上面插入行                |
|                         `Ctrl + /`                          |            将选中的内容作行注释             |
|                      `Shit + Alt + A`                       |            将选中的内容作块注释             |
|                    `Ctrl + Shift + 空格`                    |            提示需要哪些配置参数             |

::: info 参考：

> 推荐：[快捷键大全](https://blog.csdn.net/Joe0217/article/details/80950477/)

:::

## 三、VSCode 习惯配置

::: code-group

```json [settings.json]
{
  // 工作台设置
  "workbench.colorTheme": "Atom One Dark", // 使用 Atom One Dark 主题(需要提前下载该主题插件)
  "workbench.tree.indent": 8, // 目录结构树层次的缩进
  "workbench.iconTheme": "material-icon-theme", // 工作区的文件图标样式(需要提前下载该插件)
  "security.workspace.trust.untrustedFiles": "open", // 打开任何文件时都不提示 "是否安全信任", 而是直接打开
  "explorer.confirmDelete": false, // 删除文件时, 不需要再确认是否放入回收站
  "explorer.confirmDragAndDrop": false, // 拖拽文件到其他目录中时不再需要确认
  "diffEditor.wordWrap": "on", // 将在视区宽度处换行
  // 编辑区设置
  "editor.fontSize": 16, // 编辑区字体大小
  "editor.tabSize": 4, // 一个 tab 等于的空格数
  "editor.wordWrap": "on", // 控制超过视区宽度自动折行、换行
  "editor.formatOnSave": true, // 在保存时自动格式化
  "editor.mouseWheelZoom": true, // 鼠标滚轮缩放编辑区字体大小
  "editor.minimap.maxColumn": 120, // 缩略图最大列数
  "editor.minimap.enabled": false, // 关闭右侧缩略图
  "editor.lineNumbers": "on", // 编辑区行号显示
  // 窗口设置
  "window.zoomLevel": 1, // 窗口放大级别, 数字越大, 窗口放大越大. Ctrl + -/+ 控制窗口大小
  // 终端设置
  "terminal.integrated.defaultProfile.windows": "Git Bash", // 集成终端类型, 这里采用 Git Bash(需要提前下载 Git 工具)
  // 语言设置
  "javascript.suggest.paths": true, // js语言中路径提示
  "typescript.suggest.paths": true, // ts语言中路径提示
  // Live Server 插件设置
  "liveServer.settings.donotShowInfoMsg": true, // Live Server 不再提示弹出提示消息
  "[jsonc]": {
    // 将 Prettier - Code 插件作为 json 格式化的工具
    "editor.defaultFormatter": "vscode.json-language-features"
  }
}
```

:::

## 四、模板代码

### vue

::: tip 说明：

> 配置好下面的 `vue.json` 文件后, 通过 `v2init` 快捷键即可生成 `vue2` 的组件模板, 通过 `v3init` 即可生成 `vue3` 的组件模板.

:::

::: code-group

```json [vue.json]
{
	"vue2 模板": {
		"prefix": "v2init",
		"body": [
			"<template>",
			"\t<div>",
			"\t\t$1",
			"\t</div>",
			"</template>",
			"",
			"<script>",
			"\texport default {",
			"\tname: '$2',"
			"\tdata () {",
			"\t\treturn {",
			"\t\t\t$3",
			"\t\t}",
			"\t},",
			"\tmethods: {",
			"\t\t$4",
			"\t},",
			"\tcomputed: {",
			"\t\t$5",
			"\t},",
			"\tcomponents: {",
			"\t\t$6",
			"\t},",
			"}",
			"</script>",
			"",
			"<style scoped>",
			"\t$0",
			"</style>"
		],
		"description": "粘贴 Vue2 组件基本模板代码"
	},
	"vue3 模板": {
		"prefix": "v3init",
		"body": [
			"<script setup lang='$1'>",
			"\timport { ref } from 'vue'",
			"</script>",
			"",
			"<template>",
			"\t<div>"
			"\t\t$2",
			"\t</div>",
			"</template>",
			"",
			"<style scoped lang='$3'>",
			"\t$0",
			"</style>",
		],
		"description": "粘贴 Vue3 组件基本模板代码"
	}
}
```

:::
