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
        <BaseInput value="查看组件attrs属性" :attrs="2"></BaseInput>
        <!--
           attrs="2" 默认会绑定到 子组件的跟元素上  div
           可以使用组件的  inheritAttrs: false  选项解除跟元素的绑定
                          v-bind="$attrs"       绑定到指定元素上
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
