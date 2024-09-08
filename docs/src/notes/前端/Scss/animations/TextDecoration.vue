<template>
    <h1 class="demo">Hello world!</h1>
</template>

<style scoped lang='scss'>
@use '../utils/index.scss' as utils;

.demo {
    @include utils.textDecoration;
}
</style>