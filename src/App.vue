<template>
  <div id="app">
      <router-link to="/">异步组件</router-link>
      <router-link to="/slot">插槽</router-link>
      <router-link to="/event">事件</router-link>
      <router-link to="/animate">过渡效果</router-link>
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
