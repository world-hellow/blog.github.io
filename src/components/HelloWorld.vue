<template>
    <div>
        <h1>{{msg}}</h1>
        <AsyncComponent3></AsyncComponent3>
        <!--<AsyncComponent4></AsyncComponent4>-->
    </div>
</template>

<script>
import LoadingComponent from './Loading'
import ErrorComponent from './Error'
// const AsyncComponent4 = () => ({
//   // 需要加载的组件 (应该是一个 `Promise` 对象)
//   component: import('./ComponentTest'),
//   // 异步组件加载时使用的组件
//   loading: LoadingComponent,
//   // 加载失败时使用的组件
//   error: ErrorComponent,
//   // 展示加载时组件的延时时间。默认值是 200 (毫秒)
//   delay: 200,
//   // 如果提供了超时时间且组件加载也超时了，
//   // 则使用加载失败时使用的组件。默认值是：`Infinity`
//   timeout: 1000
// })
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '异步组件测试'
    }
  },
  components: {
    // 'AsyncComponent': resolve => require(['./ComponentTest'], resolve),
    // 'AsyncComponent2': () => import('./ComponentTest'),
    'AsyncComponent3': () => {
      return ({
        component: import('./ComponentTest'),
        loading: LoadingComponent,
        error: ErrorComponent,
        delay: 200,
        // 个人理解: 设置的时间内 如果加载完成就不显示加载中 不是delay时间段内也会显示loading组件
        // delay 也不是设置的延时多少秒开始加载
        //  较低网速下才能看到loading组件的效果
        timeout: 2000
        // 超过这个时间还没加载完成显示error组件
      })
    }
    // 'AsyncComponent4': AsyncComponent4

  },
  methods: {
    test () {
      console.log(666)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
