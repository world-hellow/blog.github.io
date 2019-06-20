/*
* Vue.js 的插件应该暴露一个 install 方法。
* 这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象
* */
export default {
  install(Vue, options) {
    Vue.$myee = 'data';
    Vue.myGlobalMethod = function () {  // 1. 添加全局方法或属性，如:  vue-custom-element
      // 逻辑...
    }
    /*
     * 插件中自定义指令 使用需要  v-xxx(指令名称)
     * <input type="text" v-my-directive>
     * */
    Vue.directive('my-directive', {  // 2. 添加全局资源：指令/过滤器/过渡等，如 vue-touch
      bind (el, binding, vnode, oldVnode) {
        // 逻辑...
      },
      inserted(el, binding, vnode, oldVnode){
        el.focus()
      }
    })

    Vue.mixin({
      created: function () {  // 3. 通过全局 mixin方法添加一些组件选项，如: vuex
        // 逻辑...
        console.log("插件中的混入mixin")
      }
    })
    Vue.prototype.$myName = '劳卜';
    Vue.prototype.$myMethod = function (options) {  // 4. 添加实例方法，通过把它们添加到 Vue.prototype 上实现
      // 逻辑...
      console.log("插件方法执行")
      return 666
    }
  }
}