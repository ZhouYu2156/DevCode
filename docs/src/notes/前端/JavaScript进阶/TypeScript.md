# TypeScript 学习笔记

> - 官网: [TypeScript](https://www.typescriptlang.org/)
>
> - 中文学习网: [TypeScript](https://www.tslang.cn/docs/handbook/basic-types.html)



::: tip 说明

- 通过`tsc --init`初始化一个`TypeScript`的配置文件
- 通过`tsc -w`监听文件内容变化实时编译成`JavaScript`代码



::: details

```json
{
  "compilerOptions": {
    /* 访问 https://aka.ms/tsconfig 了解此文件更多信息 */

    /* 项目配置 */
    // "incremental": true,                              /* 启用增量编译，提高后续编译速度 */
    // "composite": true,                                /* 启用项目引用的复合项目支持 */
    // "tsBuildInfoFile": "./.tsbuildinfo",              /* 自定义增量编译信息文件路径 */
    // "disableSourceOfProjectReferenceRedirect": true,  /* 引用项目时不优先使用源文件 */
    // "disableSolutionSearching": true,                 /* 编辑时禁用多项目引用检查 */
    // "disableReferencedProjectLoad": true,             /* 减少自动加载的项目数以加速编译 */

    /* 语言与环境 */
    "target": "ESNext",                                  /* 目标JavaScript版本设定为最新的ES标准 */
    // "lib": [],                                        /* 指定包含的库声明文件来描述运行时环境 */
    // "jsx": "preserve",                                /* 控制JSX代码的生成方式 */
    "experimentalDecorators": true,                   /* 启用实验性装饰器特性 */
    "emitDecoratorMetadata": true,                    /* 生成装饰器的元数据到JavaScript中 */
    // "jsxFactory": "",                                 /* 自定义JSX工厂函数 */
    // "jsxFragmentFactory": "",                         /* 自定义JSX片段引用 */
    // "jsxImportSource": "",                            /* 指定导入JSX工厂函数的模块 */
    // "reactNamespace": "",                             /* 当目标为'react' JSX时指定createElement调用的对象 */
    // "noLib": true,                                    /* 禁止包含任何库文件，包括默认的lib.d.ts */
    // "useDefineForClassFields": true,                  /* 生成符合ECMAScript标准的类字段 */
    // "moduleDetection": "auto",                        /* 控制TypeScript如何查找模块格式的JS文件 */

    /* 模块系统 */
    "module": "commonjs",                                /* 指定输出模块的格式为CommonJS */
    "rootDir": "./",                                  /* 源代码的根目录 */
    // "moduleResolution": "node10",                     /* 指定模块解析策略 */
    // "baseUrl": "./",                                  /* 解析非相对模块名的基本目录 */
    // "paths": {},                                      /* 路径别名配置 */
    // "rootDirs": [],                                   /* 多个目录视为单一目录处理 */
    // "typeRoots": [],                                  /* 类型声明文件额外搜索目录 */
    // "types": [],                                      /* 不在源码中引用但需要包含的类型包 */
    // "allowUmdGlobalAccess": true,                     /* 允许UMD模块的全局访问 */
    // "moduleSuffixes": [],                             /* 导入时额外的文件后缀搜索 */
    // "allowImportingTsExtensions": true,               /* 允许直接导入.ts文件 */
    // "resolvePackageJsonExports": true,                /* 使用package.json的'exports'字段解析导入 */
    // "resolvePackageJsonImports": true,                /* 使用package.json的'imports'字段解析导入 */
    // "customConditions": [],                           /* 导入解析时额外的条件 */
    // "resolveJsonModule": true,                        /* 允许导入.json文件 */
    // "allowArbitraryExtensions": true,                 /* 允许任意扩展名的导入，只要有声明文件 */
    // "noResolve": true,                                /* 禁止解析导入导致项目文件增加 */

    /* JavaScript支持 */
    // "allowJs": true,                                  /* 允许包含JavaScript文件 */
    // "checkJs": true,                                  /* 对JavaScript进行类型检查 */
    // "maxNodeModuleJsDepth": 1,                        /* 检查node_modules中JavaScript的最大深度 */

    /* 输出设置 */
    // "declaration": true,                              /* 生成.d.ts类型声明文件 */
    // "declarationMap": true,                           /* 为.d.ts文件生成源码映射 */
    // "emitDeclarationOnly": true,                      /* 仅输出声明文件，不输出JavaScript */
    // "sourceMap": true,                                /* 生成JavaScript源码映射文件 */
    // "inlineSourceMap": true,                          /* 将源码映射嵌入到JavaScript中 */
    // "outFile": "./",                                  /* 输出所有合并后的JavaScript到单个文件 */
    "outDir": "./dist",                                   /* 输出目录 */
    "removeComments": true,                           /* 删除编译后的注释 */
    // "noEmit": true,                                   /* 禁止输出文件 */
    // "importHelpers": true,                            /* 从tslib导入辅助函数以减少重复 */
    // "importsNotUsedAsValues": "remove",               /* 未作为值使用的导入处理策略 */
    // "downlevelIteration": true,                       /* 生成更兼容但性能较低的迭代代码 */
    // "sourceRoot": "",                                 /* 指定调试器查找源代码的根路径 */
    // "mapRoot": "",                                    /* 自定义映射文件的输出位置 */
    // "inlineSources": true,                            /* 将源代码嵌入到映射文件中 */
    // "emitBOM": true,                                  /* 在输出文件前添加UTF-8字节顺序标记 */
    // "newLine": "crlf",                                /* 设置输出文件中的换行符 */
    // "stripInternal": true,                            /* 移除带有'@internal'注解的声明 */
    // "noEmitHelpers": true,                            /* 禁止生成辅助函数如__extends */
    // "noEmitOnError": true,                            /* 错误时禁止输出文件 */
    // "preserveConstEnums": true,                       /* 保留编译后的const枚举 */
    // "declarationDir": "./",                           /* 类型声明文件的输出目录 */
    // "preserveValueImports": true,                     /* 保留未使用的导入值 */

    /* 互操作性约束 */
    // "isolatedModules": true,                          /* 确保每个文件可独立编译 */
    // "verbatimModuleSyntax": true,                     /* 保留模块导入导出语法不变 */
    // "allowSyntheticDefaultImports": true,             /* 允许从无默认导出的模块使用默认导入 */
    "esModuleInterop": true,                             /* 增加代码以支持CommonJS模块的导入 */
    // "preserveSymlinks": true,                         /* 禁止解析符号链接到实际路径 */
    "forceConsistentCasingInFileNames": true,            /* 强制文件名大小写一致 */

    /* 类型检查 */
    "strict": true,                                      /* 启用所有严格的类型检查选项 */
    // "noImplicitAny": true,                            /* 报告隐含的'any'类型 */
    // "strictNullChecks": true,                         /* 考虑'null'和'undefined' */
    // "strictFunctionTypes": true,                      /* 严格检查函数参数和返回值类型 */
    // "strictBindCallApply": true,                      /* 检查bind/call/apply方法的参数 */
    // "strictPropertyInitialization": true,             /* 检查类属性是否在构造函数中初始化 */
    // "noImplicitThis": true,                           /* 报告隐含的'any'类型的'this' */
    // "useUnknownInCatchVariables": true,               /* catch变量默认为'unknown'类型 */
    // "alwaysStrict": true,                             /* 确保总是输出'use strict' */
    // "noUnusedLocals": true,                           /* 报告未使用的局部变量 */
    // "noUnusedParameters": true,                       /* 报告未使用的函数参数 */
    // "exactOptionalPropertyTypes": true,               /* 严格对待可选属性类型 */
    // "noImplicitReturns": true,                        /* 报告缺失的函数返回值类型 */
    // "noFallthroughCasesInSwitch": true,               /* 报告switch语句中的贯穿情况 */
    // "noUncheckedIndexedAccess": true,                 /* 索引访问可能返回'undefined' */
    // "noImplicitOverride服务端超时
```

:::

## 1. 配置`TS`编译环境

### 第一种方式
> - `npm i -g typescript` 下载编译工具
> - `tsc xxx.ts` 将`TS`文件编译为`JS`文件
> - `node xxx.js` 运行编译生成的`JS`文件
> - 缺点: 每次都要编译、运行; 优点: 可以看到`ts 转换为 js`的内容

### 第二种方式
> - `npm i -g ts-node` 下载`编译&运行`工具
> - `ts-node xxx.ts` 在内存中编译`TS`文件并运行，不生成`JS`文件
> - 缺点: 每次都要执行命令; 优点: 简化了一次执行的步骤

### 第三种方式
> - `npm i -g nodemon` 下载`编译&运行`工具(实时监听文件变化`自动编译&运行`)
> - `nodemon xxx.ts` 实时监听文件变化`自动编译&运行`(如果当前目录下有`package.json`文件,则使用`nodemon`不接文件名可以直接运行`"main"`指定的入口脚本文件)
> - 优点: 实时监听文件变化`自动编译&运行`;

### 使用一些实验性的功能
> `package.json`文件可以配置启动命令简写命令和指定入口文件等选项，`tsconfig.json`配置文件可以配置编译选项。
> 配置: `tsc --init` (前提`npm i -g typescript`安装了`tsc`工具), 初始化一个`tsconfig.json`配置文件。然后开启对应的实验性功能, 比如装饰器实验功能: 解开`"experimentalDecorators": true`和它下面的一行即可。

## 2. 基础类型
> - `null`: 空值类型
```ts
let a: null;
let b: null = null;
```

> - `undefined`: 未定义类型
```ts
let a: undefined;
let b: undefined = undefined;
```

> - `number`: 数值类型
```ts
let a: number;
let b: number = 1;
```

> - `string`: 字符串类型
```ts
let a: string;
let b: string = 'hello world!';
```

> - `Array`: 数组类型
```ts
let a: number[];
let b: number[] = [1, 2, 3];
let c: Array<number> = [1, 2, 3];
```

> - `Object`: 对象类型
```ts
let a: object;
let b: object = {
    name: 'jack',
    age: 18
}
```

> - `Tuple`: 元组类型
```ts
let a: [string, number];        // 指明了每个位置的类型，那么就必须一一对应
a = ['hello world!', 18];

let b: [string, number] = ['hello world!', 18];
```

> - `Enum`: 枚举类型
```ts
// 默认情况下，从0开始为元素编号。 我们也可以手动的指定成员的数值。从手动赋值的位置开始，后面成员的值由自增得到
enum Color {
    Red,        // 0
    Green = 3,
    Blue        // 4
}
let c: Color = Color.Blue;
console.log(c)
```

> - `any`: 任意类型
```ts
let a: any;     // 如果使用 any, 那么就和js一样了，可以赋任意值。尽量避免使用any类型，因为这样会失去类型检查的意义
a = 1;
```


> - `void`: 空类型
```ts
// 函数返回值为空时，使用 void
function fn(): void {
    console.log('hello world!');
}
```

> - `never`: 永远不存在的值的类型
```ts
function fn(): never {
    while (true) {
        console.log('hello world!');    // 比如该函数，永远不会返回任何值
    }
}
```

## 3. 类型断言
> 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。

> - 通过`as`: 类型断言
```ts
let a: any = 'hello world!';
let b: string = (a as string);
```

> - 通过`<>`: 类型断言
```ts
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

## 4. 变量定义的关键字
> - `var`: 定义变量

```ts
{
    var a: number = 1;
    {
        var a: number = 10;
        {
            var a: number = 100;
        }
    }
}
console.log(a); // 100
```
> `var`定义的变量，对全局作用域有效。也就是作用域穿透，会影响外部作用域的同名变量的值。这种定义变量的关键字已经逐渐在淘汰，这是由于`JS`语言刚诞生之初的设计不合理遗留下来的问题。

> - `let`: 定义变量

```ts
{
    let a: number = 1;
    {
        let a: number = 10;
        {
            let a: number = 100;
            console.log(a)  // 100
        }
        console.log(a)  // 10
    }
    console.log(a)  // 1
}
// console.log(a) // 不能再访问到块内定义变量了
```

> `let`定义的变量，有作用域，如果在块内定义，则块内定义的变量覆盖块外部作用域定义的同名变量。如果块内没有定义，则从当前作用于向外寻找该变量。在不同作用域下可以定义同名变量，在块内对该变量的操作，不会影响到块外定义的同名变量。

> - `const`: 定义常量

```ts
const a: number = 1;
const b = {
    name: 'jack',
    age: 18
}
// a = 10  // 错误演示。不能重新给整个变量赋新值！
// b = {}  // 错误演示。不能重新给整个变量赋新值！
b.name = 'tom'      // 可以。修改内部成员的值没关系，没有将整个变量重新赋值，建立新的引用关系。所以是没有错的
b.age = 20          // 可以
console.log(b)
```

> `const`定义变量，与`let`定义变量类似，但是`不能重新给整个变量赋新值,建立新的引用关系！该变量与内存中开辟的空间建立的引用链不能断掉。`该关键字想表达的意思，其实就是说某个变量对内存中开辟的存储空间的引用关系固定下来以后就不能再改变了。


## 5. 接口



### 最常用的12种工具类型

|                工具类型                |                               描述                                | 发布版本 |
| :------------------------------------: | :---------------------------------------------------------------: | :------: |
|            `Awaited<Type>`             |                      获取Promise中的结果类型                      |   4.5    |
|            `Partial<Type>`             |      将Type中的所有属性设置为**可选属性**，返回一个新的类型       |   2.1    |
|            `Required<Type>`            |      将Type中的所有属性设置为**必选属性**，返回一个新的类型       |   2.8    |
|            `Readonly<Type>`            |      将Type中的所有属性设置为**只读属性**，返回一个新的类型       |   2.1    |
|          `Record<Keys, Type>`          |       新建一个由Keys指定的属性和Type指定的值组成的对象类型        |   2.1    |
|          `Pick<Types, Keys>`           |          从Type中选择一个或多个属性，并返回一个新的类型           |   2.1    |
|           `Omit<Type, Keys>`           |          从Type中删除一个或多个属性，并返回一个新的类型           |   3.5    |
| `Exclude<UnionType, ExcludedMembers>`  | 从UnionType中排除ExcludedMembers中的所有类型，并返回一个新的类型  |   2.8    |
| `Extract<UnionType, ExtractedMembers>` | 从UnionType中提取ExtractedMembers中的所有类型，并返回一个新的类型 |   2.8    |
|          `NonNullable<Type>`           |        从Type中排除null和undefined类型，并返回一个新的类型        |   2.8    |
|           `Parameters<Type>`           |            获取函数类型Type的参数类型，以元祖类型返回             |   3.1    |
|           `ReturnType<Type>`           |                   获取函数类型Type的返回值类型                    |   2.8    |