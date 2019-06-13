<template>
  <div id="app">
      <router-link to="/">异步组件</router-link>
      <router-link to="/slot">插槽</router-link>
      <router-link to="/event">事件</router-link>
      <router-link to="/animate">Animate的使用及过渡效果</router-link>
      <router-link to="/groupanimate">列表过渡</router-link>
      <router-link to="/animatenumber">数字动画</router-link>
      <router-link to="/instruction">自定义指令</router-link>
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
