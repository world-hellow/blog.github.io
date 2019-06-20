// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* 自定义插件 plugin插件安装 */
import vuePlugin from './plugin/hahaha'
Vue.use(vuePlugin)

/* 某个目录下的组件统一注册未全局组件 注意：要在new vue() 之前注册 */
const requireComponent = require.context(
  './components/common',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)
console.log(requireComponent)
console.log(requireComponent.keys())
console.log(requireComponent.id)

requireComponent.keys().forEach((item) => { // ["./BaseCheckbox.vue", "./BaseInput.vue"]
  // 获取组件配置
  const componentConfig = requireComponent(item)
  console.warn(componentConfig)
  // 获取组件名
  const componentName = item.split('/')[1].split('.')[0]
  console.log(componentName)
  // 声明为全局组件 (componnents文件下的相关单文件组件就变为全局组件了)
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

/*
  全局注册自定义指令
  v-focus   进入页面的时候就获取焦点
*/
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
