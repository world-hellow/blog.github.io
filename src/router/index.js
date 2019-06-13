import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

/**
 * 处理路由页面切换时，异步组件加载过渡的处理函数
 * @param  {Object} AsyncView 需要加载的组件，如 import('@/components/home/Home.vue')
 * @return {Object} 返回一个promise对象
 */
function lazyLoadView (AsyncView) {
  const AsyncHandler = () => ({
    // 需要加载的组件 (应该是一个 `Promise` 对象)
    component: AsyncView,
    // 异步组件加载时使用的组件
    loading: require('@/components/Loading.vue').default,
    // 加载失败时使用的组件
    error: require('@/components/Error.vue').default,
    // 展示加载时组件的延时时间。默认值是 200 (毫秒)
    delay: 200,
    // 如果提供了超时时间且组件加载也超时了，
    // 则使用加载失败时使用的组件。默认值是：`Infinity`
    timeout: 5000
  })
  return Promise.resolve({
    functional: true,
    render (h, {data, children}) {
      return h(AsyncHandler, data, children)
    }
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => lazyLoadView(import('@/components/SlotTest')) // 添加状态过度
    },
    {
      path: '/event',
      name: 'event',
      component: resolve => require(['@/components/EventTest'], resolve)
    },
    {
      path: '/animate',
      name: 'animate',
      component: resolve => require(['@/components/Animate'], resolve)
    },
    {
      path: '/groupanimate',
      name: 'groupanimate',
      component: resolve => require(['@/components/GroupAnimate'], resolve)
    },
    {
      path: '/animatenumber',
      name: 'animatenumber',
      component: resolve => require(['@/components/animateNumber'], resolve)
    },
    {
      path: '/instruction',
      name: 'instruction',
      component: resolve => require(['@/components/自定义指令测试'], resolve)
    }
  ]
})
