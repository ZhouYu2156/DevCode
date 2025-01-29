import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"集训课程知识","description":"","frontmatter":{},"headers":[],"relativePath":"notes/后端/Python/专业集训笔记.md","filePath":"notes/后端/Python/专业集训笔记.md","lastUpdated":null}');
const _sfc_main = { name: "notes/后端/Python/专业集训笔记.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="集训课程知识" tabindex="-1">集训课程知识 <a class="header-anchor" href="#集训课程知识" aria-label="Permalink to &quot;集训课程知识&quot;">​</a></h1><h2 id="第一章-预科知识" tabindex="-1">第一章 预科知识 <a class="header-anchor" href="#第一章-预科知识" aria-label="Permalink to &quot;第一章 预科知识&quot;">​</a></h2><h3 id="_1-1-计算机组成" tabindex="-1">1.1 计算机组成 <a class="header-anchor" href="#_1-1-计算机组成" aria-label="Permalink to &quot;1.1 计算机组成&quot;">​</a></h3><ul><li>硬件</li><li>软件</li></ul><h4 id="硬件" tabindex="-1">硬件 <a class="header-anchor" href="#硬件" aria-label="Permalink to &quot;硬件&quot;">​</a></h4><blockquote><p>CPU（中央处理器）、存储器（内存储器、外存储器）、输入输出设备</p><ul><li><p>内存储器：断电即失</p></li><li><p>外存储器：永久存储</p></li></ul></blockquote><h4 id="软件-系统软件和应用软件" tabindex="-1">软件：系统软件和应用软件 <a class="header-anchor" href="#软件-系统软件和应用软件" aria-label="Permalink to &quot;软件：系统软件和应用软件&quot;">​</a></h4><blockquote><ul><li><p>系统软件：windows系列、mac操作系统、安卓、linux、iso...</p><blockquote><p>协调、管理、控制计算机硬件资源</p></blockquote></li><li><p>应用软件：钉钉、浏览器...（针对某一类特定功能而开发的软件就叫做应用软件）</p></li></ul></blockquote><h3 id="_1-2-常用dos命令" tabindex="-1">1.2 常用Dos命令 <a class="header-anchor" href="#_1-2-常用dos命令" aria-label="Permalink to &quot;1.2 常用Dos命令&quot;">​</a></h3><h4 id="文件和目录操作" tabindex="-1">文件和目录操作 <a class="header-anchor" href="#文件和目录操作" aria-label="Permalink to &quot;文件和目录操作&quot;">​</a></h4><table><thead><tr><th>命令</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td><code>Win + R</code></td><td>打开 dos 窗口</td><td><code>win + r</code></td></tr><tr><td><code>dir</code></td><td>列出当前目录中的文件和子目录。</td><td><code>dir</code></td></tr><tr><td><code>cd</code></td><td>改变当前目录。</td><td><code>cd Documents</code></td></tr><tr><td><code>md (等价于 mkdir)</code></td><td>创建新目录。</td><td><code>md NewFolder</code></td></tr><tr><td><code>rd (等价于 rmdir)</code></td><td>删除目录。</td><td><code>rd OldFolder</code></td></tr><tr><td><code>copy</code></td><td>复制文件。</td><td><code>copy file1.txt file2.txt</code></td></tr><tr><td><code>del</code></td><td>删除文件。</td><td><code>del unwanted.txt</code></td></tr><tr><td><code>ren</code></td><td>重命名文件或目录。</td><td><code>ren oldname.txt newname.txt</code></td></tr><tr><td><code>tree /f</code></td><td>显示当前目录的树形结构</td><td><code>tree /f</code></td></tr><tr><td><code>mdir 目录1\\目录2\\...</code></td><td>创建递归目录（需要使用windows的风格<code>\\</code>来区分）</td><td><code>mkdir test\\hello</code></td></tr><tr><td><code>rd [/S] [/Q] [drive:]path</code></td><td>删除递归目录</td><td><code>rd [/S] [/Q] [drive:]path</code></td></tr></tbody></table><h4 id="文件内容查看和编辑" tabindex="-1">文件内容查看和编辑 <a class="header-anchor" href="#文件内容查看和编辑" aria-label="Permalink to &quot;文件内容查看和编辑&quot;">​</a></h4><table><thead><tr><th>命令</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td><code>type</code></td><td>显示文本文件的内容。</td><td><code>type readme.txt</code></td></tr><tr><td><code>edit</code></td><td>使用 DOS 自带的文本编辑器编辑文件。</td><td><code>edit document.txt</code></td></tr><tr><td><code>echo</code></td><td>（创建）向文件中写入内容</td><td><code>echo &quot;Hello&quot; &gt; hello.txt</code></td></tr></tbody></table><h4 id="系统信息和操作" tabindex="-1">系统信息和操作 <a class="header-anchor" href="#系统信息和操作" aria-label="Permalink to &quot;系统信息和操作&quot;">​</a></h4><table><thead><tr><th>命令</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td><code>cls</code></td><td>清除屏幕内容。</td><td><code>cls</code></td></tr><tr><td><code>date</code></td><td>显示或设置系统日期。</td><td><code>date</code></td></tr><tr><td><code>time</code></td><td>显示或设置系统时间。</td><td><code>time</code></td></tr><tr><td><code>echo</code></td><td>显示消息或启用/禁用批处理文件的命令回显功能。</td><td><code>echo Hello, World!</code></td></tr><tr><td><code>exit</code></td><td>退出当前的 DOS 会话或批处理程序。</td><td><code>exit</code></td></tr><tr><td><code>命令 /?</code></td><td>查看命令使用帮助。</td><td><code>rd /?</code></td></tr></tbody></table><h4 id="其他实用命令" tabindex="-1">其他实用命令 <a class="header-anchor" href="#其他实用命令" aria-label="Permalink to &quot;其他实用命令&quot;">​</a></h4><table><thead><tr><th>命令</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td><code>attrib</code></td><td>显示或更改文件属性。</td><td><code>attrib +h file.txt</code></td></tr><tr><td><code>xcopy</code></td><td>复制文件和目录树。</td><td><code>xcopy source\\*.* destination\\ /s</code></td></tr><tr><td><code>chkdsk</code></td><td>检查磁盘状态。</td><td><code>chkdsk C:</code></td></tr><tr><td><code>format</code></td><td>格式化磁盘。</td><td><code>format C:</code> （慎用，会清空磁盘内容）</td></tr><tr><td><code>tasklist</code></td><td>显示当前正在运行的进程列表。</td><td><code>tasklist</code></td></tr></tbody></table><h3 id="_1-3-进制" tabindex="-1">1.3 进制 <a class="header-anchor" href="#_1-3-进制" aria-label="Permalink to &quot;1.3 进制&quot;">​</a></h3><ol><li><strong>十进制</strong>（Decimal）：这是我们通常使用的基数为 10 的进制表示方法。例如：<code>42</code></li><li><strong>二进制</strong>（Binary）：基数为 2，使用前缀 <code>0b</code> 或 <code>0B</code> 表示。例如：<code>0b1010</code> 表示十进制的 <code>10</code>。</li><li><strong>八进制</strong>（Octal）：基数为 8，使用前缀 <code>0o</code> 或 <code>0O</code> 表示。例如：<code>0o52</code> 表示十进制的 <code>42</code>。</li><li><strong>十六进制</strong>（Hexadecimal）：基数为 16，使用前缀 <code>0x</code> 或 <code>0X</code> 表示。例如：<code>0x2A</code> 表示十进制的 <code>42</code>。</li></ol><blockquote><p>在 Python 中，可以使用内置函数来在不同进制之间进行转换：</p></blockquote><ul><li><code>bin(x)</code>：将整数 <code>x</code> 转换为二进制表示形式（字符串）。</li><li><code>oct(x)</code>：将整数 <code>x</code> 转换为八进制表示形式（字符串）。</li><li><code>hex(x)</code>：将整数 <code>x</code> 转换为十六进制表示形式（字符串）。</li></ul><h3 id="_1-4-编程语言" tabindex="-1">1.4 编程语言 <a class="header-anchor" href="#_1-4-编程语言" aria-label="Permalink to &quot;1.4 编程语言&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">专业术语解释：</p><p>编程语言是一种用于定义计算机程序结构和逻辑的形式化约定或规范。它允许程序员通过编写代码来描述计算机执行特定任务的方式和步骤。编程语言通常包括一套语法规则和语义规则，用于编写和解释代码。</p></div><h4 id="主要特征和功能" tabindex="-1">主要特征和功能： <a class="header-anchor" href="#主要特征和功能" aria-label="Permalink to &quot;主要特征和功能：&quot;">​</a></h4><ol><li><strong>语法和语义</strong>：编程语言定义了一种语法结构和规则，用于编写代码。语法决定了如何组织关键字、符号和表达式，而语义则决定了这些结构如何被解释和执行。</li><li><strong>抽象层次</strong>：编程语言通过不同的抽象层次来表示问题和解决方案。低级语言（如汇编语言）直接映射到硬件指令，而高级语言（如Python、Java）提供更高级别的抽象，使程序员能够更容易地表达和理解复杂的逻辑和算法。</li><li><strong>执行环境</strong>：编程语言通常需要一个解释器或编译器来将代码转换成计算机可执行的指令或中间代码。解释器逐行解释执行源代码，而编译器则将源代码一次性翻译为机器语言或字节码。</li><li><strong>标准库和框架</strong>：编程语言通常包含一组标准库和框架，用于提供常见任务的实现和复用，如文件操作、网络通信、数据结构等。这些库和框架可以帮助程序员更高效地开发和维护代码。</li><li><strong>范型和风格</strong>：编程语言支持不同的编程范型（如面向对象、函数式、过程化等），每种范型都有其独特的方式来组织和管理代码。</li><li><strong>发展和标准化</strong>：编程语言通常由标准化组织或社区维护和发展，以确保语言的一致性、安全性和可移植性。</li><li><strong>应用领域</strong>：不同的编程语言适用于不同的应用领域，如科学计算（Matlab、Python）、Web开发（JavaScript、PHP）、系统编程（C、C++）、数据分析（R、SQL）等。</li></ol><blockquote><p>总体而言，编程语言是程序员与计算机之间沟通的媒介，是软件开发的基础工具之一，影响着软件的质量、性能和可维护性。</p><p>简而言之，<code>编程语言就是人和计算机交互的语言</code>。</p></blockquote><h4 id="编译语言" tabindex="-1">编译语言 <a class="header-anchor" href="#编译语言" aria-label="Permalink to &quot;编译语言&quot;">​</a></h4><p><strong>特点：</strong></p><div class="info custom-block"><p class="custom-block-title">说明：</p><ol><li><strong>编译过程：</strong> 编译语言的代码在执行之前需要通过编译器进行编译，将高级语言源代码转换为目标机器的机器语言（或中间代码）。</li><li><strong>执行速度：</strong> 由于编译器将源代码转换为机器语言，编译语言通常执行速度较快，因为编译后的代码可以直接在硬件上运行。</li><li><strong>静态类型检查：</strong> 大多数编译语言是静态类型语言，编译器在编译过程中会进行类型检查，有助于提前发现代码中的类型错误。</li><li><strong>可移植性：</strong> 编译后的目标代码可以在不同平台上运行，前提是编译器支持目标平台的指令集。</li></ol></div><p><strong>优点：</strong></p><div class="info custom-block"><p class="custom-block-title">说明：</p><ul><li><strong>执行效率高：</strong> 编译后的代码直接在硬件上执行，因此通常执行速度很快。</li><li><strong>静态类型检查：</strong> 可以在编译阶段发现类型相关的错误，提高代码的稳定性和安全性。</li><li><strong>代码保护：</strong> 编译后的代码不易被反向工程，保护源代码的知识产权。</li></ul></div><p><strong>缺点：</strong></p><div class="info custom-block"><p class="custom-block-title">说明：</p><ul><li><strong>开发迭代慢：</strong> 每次修改都需要重新编译，因此开发迭代速度可能较慢。</li><li><strong>学习曲线陡峭：</strong> 编译语言通常有复杂的语法和语义，可能对初学者不太友好。</li><li><strong>平台依赖性：</strong> 编译出的目标代码通常是针对特定平台的，不同平台需要不同的编译。</li></ul></div><h4 id="解释语言" tabindex="-1">解释语言 <a class="header-anchor" href="#解释语言" aria-label="Permalink to &quot;解释语言&quot;">​</a></h4><p><strong>特点：</strong></p><div class="info custom-block"><p class="custom-block-title">说明：</p><ol><li><strong>解释过程：</strong> 解释语言的代码在运行时由解释器逐行解释执行，不需要预先编译为机器代码。</li><li><strong>执行速度：</strong> 由于每行代码在运行时都需要解释，解释语言的执行速度通常较编译语言慢一些。</li><li><strong>动态类型：</strong> 大多数解释语言是动态类型语言，变量类型在运行时确定，不需要静态类型声明。</li><li><strong>跨平台性：</strong> 解释器本身可以跨平台运行，因此解释语言通常具有很好的跨平台性。</li></ol></div><p><strong>优点：</strong></p><div class="info custom-block"><p class="custom-block-title">说明：</p><ul><li><strong>开发迭代快：</strong> 不需要编译步骤，可以直接运行修改后的代码，加快开发迭代速度。</li><li><strong>动态类型：</strong> 不需要显式声明变量类型，更灵活和便于编写。</li><li><strong>易学易用：</strong> 通常语法简单，初学者可以更快地上手。</li></ul></div><p><strong>缺点：</strong></p><div class="info custom-block"><p class="custom-block-title">说明：</p><ul><li><strong>执行效率较低：</strong> 每次执行时都需要解释器逐行解释，速度比编译语言慢。</li><li><strong>代码保护难：</strong> 源代码通常以明文形式存在，容易被查看和修改，保护代码的难度较大。</li><li><strong>依赖解释器：</strong> 执行代码需要有对应的解释器，如果目标平台没有适合的解释器，可能无法运行。</li></ul></div><h4 id="对比" tabindex="-1">对比 <a class="header-anchor" href="#对比" aria-label="Permalink to &quot;对比&quot;">​</a></h4><blockquote><ul><li><strong>执行方式：</strong> 编译语言先编译后执行，速度快但开发迭代慢；解释语言逐行解释执行，开发迭代快但速度慢。</li><li><strong>可移植性：</strong> 编译语言需要针对不同平台重新编译，解释语言则因为解释器本身的跨平台性通常具有较好的可移植性。</li><li><strong>学习曲线：</strong> 编译语言因为静态类型和复杂语法可能对初学者较难，解释语言通常语法简单易学。</li></ul></blockquote><h2 id="第二章-安装环境" tabindex="-1">第二章 安装环境 <a class="header-anchor" href="#第二章-安装环境" aria-label="Permalink to &quot;第二章 安装环境&quot;">​</a></h2><blockquote><p>不会的直接参考<code>CSDN 博客</code>、<code>bilibili 网课</code></p></blockquote><h2 id="第三章-python基础" tabindex="-1">第三章 Python基础 <a class="header-anchor" href="#第三章-python基础" aria-label="Permalink to &quot;第三章 Python基础&quot;">​</a></h2><h4 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h4><ul><li>单行注释</li></ul><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"># 这个符号开头的就是单行注释内容，只能在一行上面写注释，注释不参与程序运行</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>多行注释</li></ul><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;&quot;&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">三个引号成对，中间就可以写多行注释内容了</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;&#39;&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">三个单引号成对，中间也可以写多行注释内容</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;&#39;&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h4><blockquote><p>变量是计算机科学中的一个基本概念，用于存储和表示数据。它引用着数据存储的内存单元。</p><ul><li>当我们使用等号赋值时，变量名表示的是引用内存单元，往内存单元中存入数据；</li></ul><div class="language-py vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">a </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 10</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">		//</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> 此时的 a 表示的是对内存单元的引用，操作是在往这个存储单元存入数据 </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">10</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>当在使用变量（非赋值操作）时，变量名表示的是引用该内存单元并取出其中的数据。</li></ul><div class="language-py vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">a </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 10</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">print</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(a)	</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">//</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> 此时的 a 表示引用该变量指向的内存单元中的数据，操作是取出该内存单元的数据</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote><h4 id="变量命名" tabindex="-1">变量命名 <a class="header-anchor" href="#变量命名" aria-label="Permalink to &quot;变量命名&quot;">​</a></h4><blockquote><p>大多数编程语言都有自己的命名规范，但都大差不差，基本都符合下面的一套命名规则：</p><ul><li>变量名由数字、字母、下划线组成，区分大小写</li><li>不能以数字开头、也不能使用关键字</li></ul></blockquote><p>在Python中，命名的推荐写法是遵循一定的命名约定，以保证代码的可读性和一致性。Python社区通常采用了PEP 8（Python Enhancement Proposal 8）中的命名约定作为标准。以下是一些常见的命名规则和推荐写法：</p><ol><li><strong>变量名</strong>： <ul><li>使用小写字母，并用下划线 <code>_</code> 分隔单词。例如：<code>my_variable</code>, <code>user_name</code>.</li><li>应该具有描述性，能够清晰地表达变量所代表的含义。</li></ul></li><li><strong>常量名</strong>： <ul><li>使用大写字母，并用下划线 <code>_</code> 分隔单词。例如：<code>MAX_SIZE</code>, <code>PI</code>.</li><li>常量通常在程序中不会改变其值，用来表示固定的常量数据。</li></ul></li><li><strong>函数名</strong>： <ul><li>使用小写字母，并用下划线 <code>_</code> 分隔单词。例如：<code>calculate_area</code>, <code>process_data</code>.</li><li>函数名应该能够清晰地描述函数的功能或行为。</li></ul></li><li><strong>类名</strong>： <ul><li>使用大驼峰命名法（CamelCase），即单词首字母大写，不使用下划线。例如：<code>MyClass</code>, <code>CarModel</code>.</li><li>类名应该使用名词或名词组合，以描述类代表的实体或概念。</li></ul></li><li><strong>方法名</strong>： <ul><li>使用小写字母，并用下划线 <code>_</code> 分隔单词。例如：<code>calculate_area</code>, <code>process_data</code>.</li><li>方法名应该能够清晰地描述方法执行的动作或行为。</li></ul></li><li><strong>模块名和包名</strong>： <ul><li>使用小写字母，并用下划线 <code>_</code> 分隔单词。例如：<code>my_module</code>, <code>utils</code>.</li><li>模块名和包名应该能够清晰地描述其功能或用途。</li></ul></li><li><strong>变量和函数的私有性</strong>： <ul><li>在变量名或函数名前加上一个下划线 <code>_</code> 表示其为私有的，例如 <code>_internal_variable</code>, <code>_private_function</code>.</li><li>私有变量和函数应该只在其所属的模块或类内部使用，外部代码不应直接访问。</li></ul></li><li><strong>避免使用的命名</strong>： <ul><li>避免使用单个字符（除非是循环变量或者临时变量）或者含糊不清的命名，例如 <code>a</code>, <code>tmp</code>.</li><li>避免使用 Python 内置的关键字和保留字作为变量名或函数名，例如 <code>if</code>, <code>class</code>, <code>def</code>.</li></ul></li></ol><blockquote><p>通过遵循这些命名约定，可以使代码更易于阅读和维护，提高代码的一致性和可理解性，也符合Python社区的共识和标准。</p></blockquote><h4 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h4><ol><li><strong>数字类型</strong>： <ul><li><strong>整数（int）</strong>：表示整数值，例如 <code>42</code>, <code>-10</code>.</li><li><strong>浮点数（float）</strong>：表示带有小数点的数字，例如 <code>3.14</code>, <code>2.718</code>.</li><li><strong>复数（complex）</strong>：表示具有实部和虚部的复数，例如 <code>3 + 2j</code>, <code>1 - 4j</code>.</li></ul></li><li><strong>布尔类型</strong>： <ul><li><strong>布尔值（bool）</strong>：表示逻辑值，只有两个取值 <code>True</code> 和 <code>False</code>.</li></ul></li><li><strong>序列类型</strong>： <ul><li><strong>字符串（str）</strong>：表示文本数据，例如 <code>&#39;hello&#39;</code>, <code>&quot;world&quot;</code>.</li><li><strong>列表（list）</strong>：有序可变序列，用于存储一系列对象，例如 <code>[1, 2, 3]</code>.</li><li><strong>元组（tuple）</strong>：有序不可变序列，类似于列表但元素不可修改，例如 <code>(1, 2, 3)</code>.</li></ul></li><li><strong>集合类型</strong>： <ul><li><strong>集合（set）</strong>：无序、不重复的元素集合，例如 <code>{1, 2, 3}</code>.</li><li><strong>冻结集合（frozenset）</strong>：不可变的集合，一旦创建元素不可修改，例如 <code>frozenset({1, 2, 3})</code>.</li></ul></li><li><strong>映射类型</strong>： <ul><li><strong>字典（dict）</strong>：无序的键值对集合，用于存储关联数组，例如 <code>{&#39;name&#39;: &#39;Alice&#39;, &#39;age&#39;: 30}</code>.</li></ul></li><li><strong>自定义类型</strong>： <ul><li><strong>类（class）</strong>：通过 class 关键字定义的用户自定义类型，用于封装数据和功能。</li><li><strong>对象（object）</strong>：类的实例化结果，具体到每个对象实例本身。</li></ul></li><li><strong>特殊类型</strong>： <ul><li><strong>NoneType</strong>：表示空对象或者不存在的值，唯一的取值是 <code>None</code>.</li></ul></li></ol><blockquote><p>在Python中，对象的类型可以通过内置函数 <code>type()</code> 获取，例如 <code>type(42)</code> 返回 <code>&lt;class &#39;int&#39;&gt;</code>，表示这个对象是整数类型。理解这些不同的对象类型有助于编写更加清晰和有效的Python代码。</p></blockquote><h4 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">说明：</p><blockquote><p>基础内容过于简单，请还没有基础的同学自行参考 w3c 或 菜鸟教程等对应文档学习</p><p>推荐：<a href="https://www.zhouyu2156.cn/notes/%E8%B5%84%E6%BA%90/%E5%BF%AB%E9%80%9F%E6%96%87%E6%A1%A3%E6%9F%A5%E9%98%85/" target="_blank" rel="noreferrer">前往文档查阅网站</a></p></blockquote></div><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"># ...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="第四章-python进阶" tabindex="-1">第四章 Python进阶 <a class="header-anchor" href="#第四章-python进阶" aria-label="Permalink to &quot;第四章 Python进阶&quot;">​</a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/后端/Python/专业集训笔记.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ______ as default
};
