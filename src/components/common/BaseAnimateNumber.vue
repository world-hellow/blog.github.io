<template>
    <div>
        <span>{{ tweeningValue }}</span>
    </div>
</template>

<script>
export default {
  name: 'BaseAnimateNumber',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return {
      tweeningValue: 0
    }
  },
  watch: {
    value: function (newValue, oldValue) {
      this.tween(oldValue, newValue)
    }
  },
  mounted: function () {
    this.tween(0, this.value)
  },
  methods: {
    tween: function (startValue, endValue) {
      var vm = this
      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      // 数字代表时间  单位毫秒
      new TWEEN.Tween({ tweeningValue: startValue })
        .to({ tweeningValue: endValue }, 800)
        .onUpdate(function () {
          vm.tweeningValue = this.tweeningValue.toFixed(0)
        })
        .start()

      animate()
    }
  }
}
</script>

<style scoped>

</style>
