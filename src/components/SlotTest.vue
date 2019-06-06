<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <hint>
            <template v-slot:head>
                <h2>传入的头</h2>
            </template>
            <template v-slot:default>
                <h1>传入的内容</h1>
                {{msg}}
            </template>
            <template v-slot:footer>
                <h3>传入的底部</h3>
            </template>

            <template v-slot:zyy="slotDate">
                <h3>此处作用域插槽，带来的参数：{{slotDate}}</h3>
            </template>
        </hint>
    </div>
</template>

<script>
export default {
  name: 'Slot',
  data () {
    return {
      msg: '父组件中的数据'
    }
  },
  components: {
    'hint': resolve => require(['./Hint'], resolve)
  }
}
</script>

<style scoped>

</style>
