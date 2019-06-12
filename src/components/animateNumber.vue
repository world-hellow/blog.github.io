<template>
    <div>
        <div id="animated-number-demo">
            <input v-model.number="number" type="number" step="20">
            <p>{{ animatedNumber }}</p>
        </div>
        <h1>基础组件</h1>
        <BaseAnimateNumber :value="number"></BaseAnimateNumber>
    </div>
</template>

<script>
export default {
  name: 'animateNumber',
  data () {
    return {
      number: 0,
      tweenedNumber: 0
    }
  },
  computed: {
    animatedNumber: function () {
      return this.tweenedNumber.toFixed(0)
    }
  },
  watch: {
    number: function (newValue) {
      // 数字表示数字运动到指定动画时长 单位s
      TweenLite.to(this.$data, 0.8, { tweenedNumber: newValue })
    }
  }
}
</script>

<style scoped>

</style>
