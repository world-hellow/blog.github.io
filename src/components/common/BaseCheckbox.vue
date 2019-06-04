<template>
    <div>
      <input
        type="checkbox"
       :checked="isChecked"
        @change="$emit('change',$event.target.checked)"
      >
      {{isChecked}}
    </div>
</template>

<script>
export default {
  name: 'base-checkbox',
  model: {
    prop: 'isChecked',
    event: 'change'
  },
  props: {
    isChecked: Boolean
  }

}
</script>

<style scoped>

</style>
