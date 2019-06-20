<template>
    <div>
        <div>自定义插件测试</div>
        <BaseAnimateNumber :value="12"></BaseAnimateNumber>
        <input type="text" v-my-directive>
    </div>
</template>

<script>
export default {
  name: '自定义插件的使用',
  data () {
    return {
      arr: [1, 2, 3, 5, 6, 8]
    }
  },
  created () {
    console.log(`插件带入的数据：${this.$myee}`)
    console.log(`插件带入的数据：${this.$myData}`)
    console.log(`执行插件带入的方法:${this.$myMethod()}`)
    // this.$myMethod()
  }
}
</script>

<style scoped>

</style>
