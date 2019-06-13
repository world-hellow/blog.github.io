<template>
    <div>
        <h1>自定义指令</h1>
        <h6>自定义指令v-focus</h6>
        <!--<input v-focus type="text">-->
        <h6>自定义指令v-focus2</h6>
        <input v-focus2 type="text">
    </div>
</template>

<script>

export default {
  name: '自定义指令测试',
  directives: {
    focus2: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  }

}
</script>

<style scoped>

</style>
