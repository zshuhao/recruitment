<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="less">
.el-container {
    height: 100%;
}
#app {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
