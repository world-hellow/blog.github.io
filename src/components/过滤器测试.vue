<template>
<div>
    {{arr2}}
    <h6>插值表达式中过滤器的使用</h6>
    {{ arr | arrFilter }}

    <h6>v-bind表达式中过滤器的使用</h6>
    <div :arr= "arr | arrFilter">看我绑定的自定义属性</div>
</div>
</template>

<script>
export default {
  name: '过滤器测试',
  filters: {
    arrFilter (val) {
      console.log(val)
      val.forEach((item, index) => {
        // item > 5 ? val.splice(index, 1) : ''
        if (item > 5) {
          val.splice(index, 1)
        } else {}
      })
      return val
    }
  },
  data () {
    return {
      arr: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
      arr3: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    }
  },
  computed: {
    arr2: vm => vm.arr[2] * 100

  }
}
</script>

<style scoped>

</style>
