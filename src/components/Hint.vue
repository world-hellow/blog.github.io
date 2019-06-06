<template>
    <div>
        <div>
            <slot name="head">我是头部</slot>
        </div>
        <div>
            <slot >内容部分</slot>
        </div>
        <div>
            <slot name="footer">底部</slot>
        </div>
        <slot name="zyy" :msg="msg" :arr="arr">作用于插槽</slot>
    </div>
</template>

<script>
export default {
  name: 'Hint',
  data: function () {
    return {
      msg: '子组件中的数据',
      arr: [1, 2, 3, 5, 6, 8]
    }
  }
}
</script>

<style scoped>

</style>
