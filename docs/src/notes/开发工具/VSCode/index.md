# VSCode 开发工具

## 一、常用插件

|               插件名称               |                           功能                            |
| :----------------------------------: | :-------------------------------------------------------: |
|             Monokai Pro              |                         界面主题                          |
|         Atom One Dark Theme          |                   舒适的主题样式(⭐⭐⭐⭐⭐)                   |
|             vscode-icons             |               好看的 VSCode 文件图标(⭐⭐⭐⭐)                |
|         Material Icon Theme          |                 美观的目录文件图标(⭐⭐⭐⭐⭐)                 |
|               CodeSnap               |                 漂亮的代码截图工具(⭐⭐⭐⭐)                  |
|            Auto Close Tag            |                       标签自动闭合                        |
|           Auto Rename Tag            |                     成对标签联动修改                      |
|          Path Intellisense           |                       智能路径提示                        |
|           HTML CSS Support           |                     HTML CSS 智能提示                     |
|            SCSS Formatter            |                      SCSS代码格式化                       |
|          SCSS IntelliSense           |                     SCSS代码智能提示                      |
|          Live Sass Compiler          |          SCSS实时编译（直接启动即可，超级方便）           |
|             Remote - SSH             | 远程连接SSH插件（VSCode直接可以操作远程服务器的项目代码） |
|             Live Server              |                   右键可快速开启服务器                    |
|               CodeGeeX               |               人工智能代码助手（辅助开发）                |
|            TONGYI Lingma             |            人工智能代码助手（辅助开发）(⭐⭐⭐⭐)             |
|              Tabnine AI              |               人工智能代码助手（辅助开发）                |
|        Bracket Pair Colorizer        |            括号成对色彩化（已经内置于 VSCode）            |
|      Prettier - Code formatter       |                 优雅的代码自动格式化插件                  |
|             Vue Official             |                     Vue 项目开发插件                      |
|          vitepress snippets          |                     vitepress代码片段                     |
|         Markdown All in One          |                     Markdown语法高亮                      |
|    JavaScript (ES6) code snippets    |                 ES6 语法快捷键和智能提示                  |
| StandardJS JavaScript Standard Style |                 ES6 语法快捷键和智能提示                  |
|   Chinese (Simplified) (简体中文)    |               VSCode 界面简体中文插件(⭐⭐⭐⭐)               |
|              JSON Crack              |                 JSON可视化图形展示(⭐⭐⭐⭐⭐)                 |

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
|                         `Ctrl + F`                          |                    搜索                     |
|                         `Ctrl + H`                          |                    替换                     |
|  <code style="color: orangered"><kbd>基础编辑</kbd></code>  |                                             |
|                         `Ctrl + X`                          |               剪切光标所在行                |
|                         `Ctrl + C`                          |               复制光标所在行                |
|                         `Alt + ↑/↓`                         |               上/下移动文本行               |
|                       `Ctrl + Enter`                        |               光标下面插入行                |
|                     `Alt + Shift + ↑/↓`                     | 向上/向下复制选中的内容（或光标所在行内容） |
|                    `Ctrl + Shit + Enter`                    |               光标上面插入行                |
|                         `Ctrl + /`                          |       将选中的内容作行注释(单行注释)        |
|                      `Shit + Alt + A`                       |       将选中的内容作块注释(多行注释)        |
|                    `Ctrl + Shift + 空格`                    |            提示需要哪些配置参数             |

::: info 参考：

> 推荐：[快捷键大全](https://blog.csdn.net/Joe0217/article/details/80950477/)

:::

## 三、VSCode 习惯配置

::: details
::: code-group

```json [settings.json]
{
    // 窗口设置
    "workbench.tree.indent": 16, // 控制项目文件结构层级缩进
    "workbench.colorTheme": "Atom One Dark", // 启用主题
    "workbench.iconTheme": "material-icon-theme", // 文件图标主题(特别的文件会显示特殊图标)
    "security.workspace.trust.untrustedFiles": "open", // 打开任何文件时都不提示 "是否安全信任", 而是直接打开
    "explorer.confirmDelete": false, // 删除文件时, 不需要再确认是否放入回收站
    "explorer.confirmDragAndDrop": false, // 拖拽文件到其他目录中时不再需要确认
    "diffEditor.wordWrap": "on", // 文本将在视区宽度处换行
    "window.zoomLevel": 1, // 窗口放大级别, 数字越大, 窗口放大越大. Ctrl + -/+ 控制窗口大小
    // 编辑区设置
    "editor.fontSize": 16, // 编辑区字体大小
    "editor.tabSize": 4, // 一个 tab 等于的空格数
    "editor.wordWrap": "on", // 控制超过视区宽度自动折行、换行
    "editor.formatOnSave": true, // 在保存时自动格式化
    "editor.mouseWheelZoom": true, // 鼠标滚轮缩放编辑区字体大小
    "editor.minimap.enabled": false, // 是否显示缩略图
    "editor.minimap.maxColumn": 120, // 控制缩略图的宽度
    "editor.lineNumbers": "on", // 编辑区行号显示
    "editor.fontLigatures": true, // 启用字体连字
	"editor.suggest.showIcons": true,// 控制是否在内联建议中显示或隐藏图标。
    "editor.suggest.showInlineDetails": true,   // 是否显示具体的提示内容
    "editor.suggest.showMethods": true,         // 显示方法建议
    // 字体配置: @参考: https://doc.houdunren.com/开发环境/字体.html
    // "editor.fontFamily": "Consolas, 'Courier New', monospace",   // 编辑区默认字体
    "editor.fontFamily": "Cascadia Code, 'Cascadia Mono', Consolas", // 编辑区字体
    // 终端设置
    "terminal.integrated.defaultProfile.windows": "Git Bash", // 集成终端类型, 这里采用 Git Bash(需要提前下载 Git 工具)
    "terminal.external.windowsExec": "E:\\Program Files\\Git\\bin\\bash.exe",
    // Live Server 插件设置
    "liveServer.settings.donotShowInfoMsg": true, // Live Server 不再提示弹出提示消息
    // 语言设置
    "javascript.suggest.paths": true, // js语言中路径提示
    "typescript.suggest.paths": true, // ts语言中路径提示
    "editor.stickyScroll.enabled": false,   // 滚动过程中, 显示当前行所属的作用域(默认 true)
    // 对 typescript 语言设置
    "typescript.updateImportsOnFileMove.enabled": "always", // 重命名或移动文件时自动更新导入路径
    "[typescript]": {
        "typescript.suggest.enabled": true,
        "editor.defaultFormatter":"vscode.typescript-language-features",
    },
    // 对 javascript 语言设置
    "[javascript]": {
        "javascript.suggest.enabled": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"    // 指定格式化程序, 提供丰富的语言支持
    },
    "workbench.editor.enablePreview": false, // 禁用预览模式
    /* 禅模式设置 */
    "zenMode.centerLayout": false,      // 禅模式下是否使用居中布局
    "zenMode.hideStatusBar": false,     // 控制在打开禅模式时是否隐藏工作台底部的状态栏
    "window.customTitleBarVisibility": "windowed",
    "workbench.activityBar.location": "default", // 开启命令中心
    "vue.autoInsert.dotValue": true,    // 设置vue中的 ref 变量自动点value
    "vue.server.hybridMode": true,
    "[vue]": {
        "editor.defaultFormatter": "Vue.volar"
    },
    "zenMode.hideLineNumbers": false, // 禅模式是否隐藏行号
    "tabnine.experimentalAutoImports": true,    // tabnine 自动补全
    // 配置 ssh 连接的远程服务器
    "remote.SSH.remotePlatform": {
        "docker": "linux"
    },
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "files.associations": {
        "*.mts": "typescript",
        "*.ts": "typescript"
    },
    "files.autoSave":"onWindowChange", // 在窗口改变时(从vscode到别的窗口)自动保存文件，可选值 onFocusChange, onWindowChange, off, afterDelay
	// typescript 配置隐式参数类型提示
    "typescript.inlayHints.variableTypes.enabled": true, // 启用ts中变量的类型提示
    "typescript.inlayHints.propertyDeclarationTypes.enabled": true, // 启用(类或构造函数的)属性声明中隐式类型提示
    "typescript.inlayHints.functionLikeReturnTypes.enabled": true, // 启用函数返回类型提示
    "typescript.inlayHints.parameterNames.enabled": "all", // 启用函数参数名称提示
    "typescript.suggest.completeFunctionCalls": true, // 自动完成函数调用时的参数签名(必选参数全部列出来, 可选参数会有提示)
	// javascript 配置隐式参数类型提示
	"javascript.inlayHints.variableTypes.enabled": true, // 启用ts中变量的类型提示
    "javascript.inlayHints.propertyDeclarationTypes.enabled": true, // 启用(类或构造函数的)属性声明中隐式类型提示
    "javascript.inlayHints.functionLikeReturnTypes.enabled": true, // 启用函数返回类型提示
    "javascript.inlayHints.parameterNames.enabled": "all", // 启用函数参数名称提示
    "javascript.suggest.completeFunctionCalls": true, // 自动完成函数调用时的参数签名(必选参数全部列出来, 可选参数会有提示)
    "explorer.confirmPasteNative": true,    // 在复制粘贴文件时, 不需要确认是否覆盖
    "window.commandCenter": false,  // 关闭窗口顶部的命令中心输入框
    "[markdown]": {
        "editor.defaultFormatter": "yzhang.markdown-all-in-one" // markdown格式化插件来格式化代码
    },
    "[scss]": {
        "editor.defaultFormatter": "sibiraj-s.vscode-scss-formatter", // scss格式化插件来格式化代码
    },
	"javascript.suggest.completeJSDocs": true, // 自动完成jsdoc注释
	"javascript.inlayHints.enumMemberValues.enabled": true, // 枚举值提示
    "javascript.format.semicolons": "remove",               // js语句末尾分号处理
    "javascript.format.insertSpaceBeforeAndAfterBinaryOperators": true,    // 二元运算符前后是否插入空格
    "javascript.inlayHints.parameterTypes.enabled": true, // 隐式参数类型提示
}
```

```json [最新版 settings.json]
{
  // 窗口设置
  "workbench.tree.indent": 16, // 控制项目文件结构层级缩进
  "workbench.colorTheme": "Monokai Pro (Filter Machine)", // 启用主题
  "workbench.iconTheme": "material-icon-theme", // 文件图标主题(特别的文件会显示特殊图标)
  "security.workspace.trust.untrustedFiles": "open", // 打开任何文件时都不提示 "是否安全信任", 而是直接打开
  "explorer.confirmDelete": false, // 删除文件时, 不需要再确认是否放入回收站
  "explorer.confirmDragAndDrop": false, // 拖拽文件到其他目录中时不再需要确认
  "diffEditor.wordWrap": "on", // 文本将在视区宽度处换行
  "window.zoomLevel": 1, // 窗口放大级别, 数字越大, 窗口放大越大. Ctrl + -/+ 控制窗口大小
  // 编辑区设置
  "editor.fontSize": 16, // 编辑区字体大小
  "editor.tabSize": 4, // 一个 tab 等于的空格数
  "editor.wordWrap": "on", // 控制超过视区宽度自动折行、换行
  "editor.formatOnSave": true, // 在保存时自动格式化
  "editor.mouseWheelZoom": true, // 鼠标滚轮缩放编辑区字体大小
  "editor.minimap.enabled": false, // 是否显示缩略图
  "editor.minimap.maxColumn": 120, // 控制缩略图的宽度
  "editor.lineNumbers": "on", // 编辑区行号显示
  "editor.fontLigatures": true, // 启用字体连字
  "editor.suggest.showIcons": true, // 控制是否在内联建议中显示或隐藏图标。
  "editor.suggest.showInlineDetails": true, // 是否显示具体的提示内容
  "editor.suggest.showMethods": true, // 显示方法建议
  // 字体配置: @参考: https://doc.houdunren.com/开发环境/字体.html
  // "editor.fontFamily": "Consolas, 'Courier New', monospace",   // 编辑区默认字体
  "editor.fontFamily": "Cascadia Code, 'Cascadia Mono', Consolas", // 编辑区字体
  // 终端设置
  "terminal.integrated.defaultProfile.windows": "Git Bash", // 集成终端类型, 这里采用 Git Bash(需要提前下载 Git 工具)
  "terminal.external.windowsExec": "E:\\Program Files\\Git\\bin\\bash.exe",
  // Live Server 插件设置
  "liveServer.settings.donotShowInfoMsg": true, // Live Server 不再提示弹出提示消息
  // 语言设置
  "javascript.suggest.paths": true, // js语言中路径提示
  "typescript.suggest.paths": true, // ts语言中路径提示
  "editor.stickyScroll.enabled": false, // 滚动过程中, 显示当前行所属的作用域(默认 true)
  // 对 typescript 语言设置
  "typescript.updateImportsOnFileMove.enabled": "always", // 重命名或移动文件时自动更新导入路径
  "[typescript]": {
  
    "typescript.suggest.enabled": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // 对 javascript 语言设置
  "[javascript]": {
    "javascript.suggest.enabled": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode" // 指定格式化程序, 提供丰富的语言支持
  },
  "workbench.editor.enablePreview": false, // 禁用预览模式
  /* 禅模式设置 */
  "zenMode.centerLayout": false, // 禅模式下是否使用居中布局
  "zenMode.hideStatusBar": false, // 控制在打开禅模式时是否隐藏工作台底部的状态栏
  "window.customTitleBarVisibility": "windowed",
  "workbench.activityBar.location": "default", // 开启命令中心
  "vue.autoInsert.dotValue": true, // 设置vue中的 ref 变量自动点value
  "vue.server.hybridMode": true,
  "[vue]": {
    "editor.defaultFormatter": "Vue.volar"
  },
  "zenMode.hideLineNumbers": false, // 禅模式是否隐藏行号
  "tabnine.experimentalAutoImports": true, // tabnine 自动补全
  "jsonc": "",
  // 配置 ssh 连接的远程服务器
  "remote.SSH.remotePlatform": {
    "docker": "linux"
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "files.associations": {
    "*.mts": "typescript",
    "*.ts": "typescript",
    "*.json": "jsonc"
  },
  "files.autoSave": "onWindowChange", // 在窗口改变时(从vscode到别的窗口)自动保存文件，可选值 onFocusChange, onWindowChange, off, afterDelay
  // typescript 配置隐式参数类型提示
  "typescript.inlayHints.variableTypes.enabled": true, // 启用ts中变量的类型提示
  "typescript.inlayHints.propertyDeclarationTypes.enabled": true, // 启用(类或构造函数的)属性声明中隐式类型提示
  "typescript.inlayHints.functionLikeReturnTypes.enabled": true, // 启用函数返回类型提示
  "typescript.inlayHints.parameterNames.enabled": "all", // 启用函数参数名称提示
  "typescript.suggest.completeFunctionCalls": true, // 自动完成函数调用时的参数签名(必选参数全部列出来, 可选参数会有提示)
  // javascript 配置隐式参数类型提示
  "javascript.inlayHints.variableTypes.enabled": true, // 启用ts中变量的类型提示
  "javascript.inlayHints.propertyDeclarationTypes.enabled": true, // 启用(类或构造函数的)属性声明中隐式类型提示
  "javascript.inlayHints.functionLikeReturnTypes.enabled": true, // 启用函数返回类型提示
  "javascript.inlayHints.parameterNames.enabled": "all", // 启用函数参数名称提示
  "javascript.suggest.completeFunctionCalls": true, // 自动完成函数调用时的参数签名(必选参数全部列出来, 可选参数会有提示)
  "explorer.confirmPasteNative": false, // 在复制粘贴文件时, 不需要确认是否覆盖
  "window.commandCenter": false, // 关闭窗口顶部的命令中心输入框
  "[markdown]": {
    "editor.defaultFormatter": "yzhang.markdown-all-in-one" // markdown格式化插件来格式化代码
  },
  "[scss]": {
    "editor.defaultFormatter": "sibiraj-s.vscode-scss-formatter" // scss格式化插件来格式化代码
  },
  "javascript.suggest.completeJSDocs": true, // 自动完成jsdoc注释
  "javascript.inlayHints.enumMemberValues.enabled": true, // 枚举值提示
  "javascript.format.semicolons": "remove", // js语句末尾分号处理
  "javascript.format.insertSpaceBeforeAndAfterBinaryOperators": true, // 二元运算符前后是否插入空格
  "javascript.inlayHints.parameterTypes.enabled": true, // 隐式参数类型提示
  "liveSassCompile.settings.formats": [
    {
      /*
                          nested: 嵌套格式
                          expanded: 展开格式
                          compact: 紧凑格式
                          compressed: 压缩格式
                      */
      "format": "expanded", // 编译的css格式
      "extensionName": ".css", // 扩展名
      "savePath": "/dist" // 保存路径(null 的话, 保存到和源文件同一目录。 ~、/标识当前VSCode打开的项目根目录)
    }
  ],
  /* 排除目录 */
  "liveSassCompile.settings.excludeList": [
    "/**/node_modules/**",
    "/.vscode/**"
  ],
  /*包含编译的文件*/
  "liveSassCompile.settings.includeItems": [
    "/src/**/**.scss" // 有哪些目录下的scss文件需要编译，就包括在这里来
  ],
  /* 是否生成对应的 map 文件*/
  "liveSassCompile.settings.generateMap": false, // 是否生成对应的 map 文件
  /* 是否添加浏览器兼容前缀 */
  "liveSassCompile.settings.autoprefix": false,
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  } // 是否添加浏览器兼容前缀, 设置为false，那么不管浏览器兼容问题，只生成标准的css
  /*"liveSassCompile.settings.autoprefix": [
        "> 1%", // 兼容最新的浏览器版本
        "last 2 versions",  // 兼容最新两个版本
    ]*/
}

```

:::


## 四、模板代码
::: tip 说明：
> 找到左下角`齿轮` > `用户代码片段` > 搜索对应的`xxx.json`(代码片段)配置的`json`文件 > `自定义或者直接粘贴下面的代码` > `保存(没有及时生效的话重启一下VSCode)`

> 比如配置好下面的 `vue.json` 文件后, 通过 `v2init` 快捷键即可生成 `vue2` 的组件模板, 通过 `v3init` 即可生成 `vue3` 的组件模板.

:::


### vue snippets


::: details
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
			"\tname: '$2'",
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
			"\t<div>",
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

### javascript snippets

::: details
::: code-group
```json [javascript.json]
{
	"Print to console": {
		"prefix": "clg",
		"body": [
			"console.log($1);",
			"$2"
		],
		"description": "log to console"
	},
	"warnings to console": {
		"prefix": "clw",
		"body": [
			"console.warn($1);",
			"$2"
		],
		"description": "warnings to console"
	},
	"info to console": {
		"prefix": "cli",
		"body": [
			"console.info($1);",
			"$2"
		],
		"description": "info to console"
	},
	"error to console": {
		"prefix": "cli",
		"body": [
			"console.error($1);",
			"$2"
		],
		"description": "error to console"
	},
	"table to console": {
		"prefix": "cli",
		"body": [
			"console.table($1);",
			"$2"
		],
		"description": "table to console"
	},
}

```

:::

### html snippets

::: details
::: code-group
```json [html.json]
{
	"初始化html基本结构": {
		"prefix": "!",
		"body": [
			"<!DOCTYPE html>",
			"<html lang='zh-CN'>",
			"<head>",
			"\t<meta charset='UTF-8'>",
			"\t<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
			"\t<meta name='keywords' content='关键字'>",
			"\t<meta name='description' content='描述'>",
			"\t<meta name='author' content='作者'>",
			"\t<title>初始化html结构</title>",
			"</head>",
			"<body>",
			"\t<div id='app'>",
			"\t</div>",
			"\t<script>",
			"\t\t$0",
			"\t</script>",
			"</body>",
			"</html>",
		],
		"description": "初始化html基本结构"
	}
}
```
:::


::: info 说明
**snippet由三部分组成：**

- `prefix`：『前缀』（触发智能提示），定义了snippets 从IntelliSense（智能感应）中呼出的关键字（通过该前缀触发你的代码片段选项供你选择）;
- `body`： 『主体』（代码片段内容），即模板的主体内容，每个字符串表示一行;
- `description`：『说明』（说明该代码片段的作用），会在IntelliSense候选栏中出现。未定义的情况下显示对象名，上例中将会显示Print to console。

:::