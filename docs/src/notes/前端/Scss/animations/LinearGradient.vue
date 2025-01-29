<script setup lang='ts'>
import { onMounted, ref, watch } from 'vue'
import { Direction, Position, type DirectionOption } from '/.vitepress/types'

// 渐变方向
const direction = ref<Direction>(Direction.bottom)

// 遍历 Direction, 将其转换为 options
const options = ref<DirectionOption[]>([
    {
        label: Position.top,
        value: Direction.top
    },
    {
        label: Position.bottom,
        value: Direction.bottom
    },
    {
        label: Position.left,
        value: Direction.left
    },
    {
        label: Position.right,
        value: Direction.right
    },
    {
        label: Position.leftBottom,
        value: Direction.leftBottom
    },
    {
        label: Position.rightTop,
        value: Direction.rightTop
    },
    {
        label: Position.leftTop,
        value: Direction.leftTop
    },
    {
        label: Position.rightBottom,
        value: Direction.rightBottom
    }
])

// related to the div element
const div = ref<HTMLDivElement | null>(null)

// 开始颜色
const startColor = ref<string>('#27ae60')
// 结束颜色
const endColor = ref<string>('#e74c3c')

watch(direction, () => {
    div.value!.style.background = `linear-gradient(to ${direction.value}, ${startColor.value}, ${endColor.value})`
})

onMounted(() => {
    div.value!.style.width = '200px'
    div.value!.style.height = '200px'
    div.value!.style.background = `linear-gradient(to ${direction.value}, ${startColor.value}, ${endColor.value})`
})

</script>

<template>
    <el-select v-model="direction" placeholder="渐变方向" size="large" style="width: 240px; margin-right: 10px;">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <div ref="div"></div>
</template>

<style scoped lang='scss'></style>