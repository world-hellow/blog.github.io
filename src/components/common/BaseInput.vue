<template>
<div>
    <label>
        {{label}}
        <input
            v-bind="$attrs"
            :value = "value"
            v-on="totalListener"
        >
    </label>
</div>
</template>

<script>
export default {
  name: 'base-input',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    label: {
      type: String,
      default: '我是子组件的label'
    },
    value: {
      type: String,
      default: '我是子组件的值'
    }
  },
  computed: {
    totalListener: function () {
      let vm = this
      /*return Object.assign(
        {},
        vm.$listeners,
        {
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )*/
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: event => this.$emit('input', event.target.value)
      }
    }
  }

}
</script>

<style scoped>

</style>
