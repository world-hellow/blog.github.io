<template>
    <div>
        {{isShow}}
        <!--import components中导入的组件-->
        <base-checkbox v-model="isShow"></base-checkbox>
        <!-- 全局组件 -->
        <BaseCheckbox v-model="isShow"></BaseCheckbox>
        {{inputValue}}
        <BaseInput></BaseInput>
        <BaseInput v-model="inputValue"></BaseInput>
        <!--绑定属性到子组件上指定元素-->
        <BaseInput value="右键查看组件attrs属性" :attrs="2"></BaseInput>
        <!--
           attrs="2" 默认会绑定到 子组件的跟元素上  div
           可以使用组件的  inheritAttrs: false  选项 解除跟元素的绑定
                          v-bind="$attrs"           绑定到指定元素上
           一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件，
           但是像单选框、复选框等类型的输入控件可能会将 value 特性用于不同的目的。
           model 选项可以用来避免这样的冲突

           子组件上添加原生事件
           <base-input v-on:focus.native="onFocus"></base-input>
         -->

    </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShow: true,
      inputValue: '我是父组件中的值'
    }
  },
  components: {
    'base-checkbox': resolve => require(['./common/BaseCheckbox'], resolve)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
