# Vue3快速上手

::: info 中文自我介绍
大家好，我叫周玉，今年二十五岁，现居浙江省杭州市，祖籍湖南省道县。目前我正在找一个后端开发工程师的岗位，我掌握的技术有django、flask框架，并且熟练使用python编程，了解常用的数据结构与算法基础，具有扎实的计算机基础知识。

在个人品质方面，对待工作积极认真、负责，并且乐于助人。曾在团队项目开发中，作为项目组组长，我积极跟进项目进度，通过与团队成员的互相讨论最终帮助小组成员攻克技术难题，使得项目取得圆满成功。

在个人习惯方面，积极上进且持续学习。关注前沿技术，扩展自己的技术栈，目前掌握Vue、React和与之配套的工具库的基本应用，对python人工智能应用和服务器运维管理都有一定的应用能力，你知道的，毕竟作为我们技术码农，计算机的开发岗位肯定是需要掌握从开发到部署一条龙的基本服务技术的。
:::
::: info 英文版本
Hello everyone, my name is Zhou Yu. I am 25 years old and currently reside in Hangzhou, Zhejiang Province. My ancestral home is Dao County, Hunan Province. I am currently looking for a position as a backend development engineer. My skills include django and flask frameworks, and I am proficient in using Python programming. I have a solid understanding of commonly used data structures and algorithm foundations, and possess a solid foundation in computer science.

In terms of personal qualities, I approach work actively, seriously, responsibly, and am willing to help others. As the team leader in team project development, I actively followed up on project progress and helped team members overcome technical difficulties through mutual discussions, resulting in a successful project.

In terms of personal habits, actively strive for progress and continue to learn. Pay attention to cutting-edge technology, expand one's own technology stack, and currently master the basic applications of Vue, React, and their supporting tool libraries. Have certain application capabilities in Python artificial intelligence applications and server operation and maintenance management. As a technology coder, computer development positions definitely require mastery of basic service technologies from development to deployment.
:::



## `$emit` 和 `defineEmits`

::: code-group

```vue [父组件]
<script setup lang='ts'>
import { ref } from 'vue'

import Son from '@/components/Son.vue'
</script>

<template>
    <div>
        <h1>father</h1>
        <Son @sendMsg="(msg: string) => console.log(msg)" />
    </div>
</template>

<style scoped></style>
```

```vue  [子组件]
<script setup lang='ts'>

import { ref } from 'vue'

// (2) 通过defineEmits定义自定义事件
const emit = defineEmits(['sendMsg'])

const handleClick = () => {
    emit('sendMsg', 'this is son message2')
}

</script>

<template>
    <div>
        <!-- (1) 第一种方式 -->
        <button @click="$emit('sendMsg', 'this is son messge1')">通过$emit触发自定义事件</button>
        <hr />
        <!-- (2) 第二种方式 -->
        <button @click="handleClick">通过宏编译生成的emit触发自定义事件</button>
    </div>
</template>

<style scoped></style>
```

:::


## `watch`

::: info 说明
- 第一种写法: 监视简单数据类型ref对象, 将ref对象直接传入即可
- 第二种写法: 监视多个响应式数据, 以数组的方式传递和接收
- 第三种写法: 监视对象类型的变化, 需要开启深度监视, 才能监视内部嵌套属性的变化(会有一些性能损坏, 非必要建议不要开启)
- 第四种写法: 第一个参数使用函数返回对象属性, 可以精确监视对象的某个属性变化

:::



```vue
<script setup lang='ts'>
import { computed, ref, watch } from 'vue'

const count = ref(0)
const count1 = ref(0)

const state = ref({
  count: 0,
  age: 18
})

/** 1.监视简单类型数据变化 */
watch(count, (newValue, oldValue) => {
  console.log(`count数据发生变化了，新值为: ${newValue}, 旧值为: ${oldValue}`);
})

/** 2.监视对象类型的所有数据变化: 需要开启深度监视 */
/*watch(state, (newValue, oldValue) => {
  console.log('data of state changed: ', newValue, oldValue);
}, {
  deep: true
})*/

/** 3. 监视多个数据源变化: 数组方式接收 */
watch([count, count1],
  ([newCount, newCount1], [oldCount, oldCount1]) => {
    console.log(`新值: ${[newCount, newCount1]}, 旧值: ${[oldCount, oldCount1]}`);
  }
)

/** 4.精确监听某个属性变化: 第一个参数以函数返回值的方式返回要监听的属性 */
watch(
  () => state.value.count,
  (newValue, oldValue) => {
    console.log('state.count changed: ', newValue, oldValue);
  }
)

</script>

<template>
  <button @click="count++">count: {{ count }}</button>
  <button @click="count1++">count1: {{ count1 }}</button>
  <button @click="state.count++">state.count: <br />{{ state.count }}</button>
</template>

<style scoped lang='css'>
button {
  width: 400px;
  height: 300px;
  font-size: 60px;
}
</style>
```

## `defineProps`

> `defineProps`定义组件接收的属性

```vue
<script setup lang='ts'>

const props = defineProps({
    msg: String
})

</script>
```



## `defineExpose`

> 暴露组件的属性供父组件使用

```vue
<script setup lang='ts'>
const count = ref(0)
defineExpose({
    /** 暴露子组件中的属性出去 */
    count
})

/**父组件通过 ref 引用该组件即可看到 count 属性 */
</script>
```

## `provide` 和 `inject`


::: code-group

```vue [跨 n 层的父组件]
<script setup lang='ts'>
import { provide, ref } from 'vue'
import Son from '@/components/Son.vue'

export interface Counter {
    count: number;
    increment: () => void;
    decrement: () => void;
}

const counter = ref<Counter>({
    count: 0,
    increment() {
        this.count++
    },
    decrement() {
        this.count--
    }
})

/**提供数据 */
provide('counter', counter)

</script>
```

```vue [跨 n 层的子组件]
<script setup lang='ts'>
import { inject } from 'vue'
import { type Counter } from './Father.vue'

/**注入夸层组件传来的数据 */
const counter = inject('counter') as Counter
</script>
```
:::


## 常见问题

::: info 疑难困惑
获取模板引用的时机是什么时候?

> 组件挂在完毕时, 模板引用已经获取到, 可以在`onMounted`钩子函数中获取到模板引用。

defineExpose编译宏的作用是什么?

> 显式暴露组件内部的属性和方法, 暴露出去的属性和方法可以在父组件中通过模板引用获取到。

`provide` 和 `inject` 的作用是什么?

> 实现跨(多)层组件通信, 任意层组件都可以使用这两个方法配合实现跨层组件通信。

如何在传递的过程中保持数据响应式?

> 在 `provide(_, xxx)` 第二个参数传递 `ref 对象`

底层组件想要通知顶层组件做修改, 如何做?

> 通过在顶层组件使用`provide`传递修改数据的方法, 然后底层组件使用`inject`接收住方法使用即可。或者直接将数据和方法封装在一个对象中使用响应式`ref`包裹进行传递也可以, 这样有利于数据和方法的统一管理。

一颗组件树种只有一个顶层或底层组件吗?

> 这是一个相对概念, 组件树种可以存在多个顶层和底层的关系。

:::













