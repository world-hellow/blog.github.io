<template>
  <div>
    {{isShow}}
    <base-checkbox v-model="isShow"></base-checkbox>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShow: true
    }
  },
  components: {
    'base-checkbox': resolve => require(['./base-checkbox'], resolve)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
