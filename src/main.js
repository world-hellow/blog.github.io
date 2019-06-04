// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

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

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
