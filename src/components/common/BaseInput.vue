<template>
<div>
    <label>
        {{label}}
        <input
            v-bind="$attrs"
            :value = "value"
            @input="$emit('input',$event.target.value)"
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
  }

}
</script>

<style scoped>

</style>
