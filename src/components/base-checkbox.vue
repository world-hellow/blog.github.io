<template>
    <div>
      <input
        type="checkbox"
       :checked="checked"
        @change="$emit('change',$event.target.checked)"
      >
      {{isChecked}}
      {{another}}
      {{another2}}
    </div>
</template>

<script>
export default {
  name: 'base-checkbox',
  model: {
    prop: 'another2',
    event: 'change'
  },
  props: {
    another2: Boolean,
    isChecked: Boolean,
    another: Boolean
  }

}
</script>

<style scoped>

</style>
