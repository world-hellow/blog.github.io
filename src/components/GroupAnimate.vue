<template>
    <div>
        <div class="demo">
            <h1>参考文档demo</h1>
            <h3>demo1</h3>
            <button v-on:click="add">Add</button>
            <button v-on:click="remove">Remove</button>
            <button v-on:click="sort">Sort</button>
            <transition-group name="list" tag="p">
                <span v-for="item in items" v-bind:key="item" class="list-item">
                  {{ item }}
                </span>
            </transition-group>
            <h3>demo2</h3>
            <transition-group name="flip-list" tag="ul">
                <li v-for="item in items" v-bind:key="item">
                    {{ item }}
                </li>
            </transition-group>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GroupAnimate',
  data () {
    return {
      items: [0, 1, 15, 3, 4, 18, 6],
      nextNum: 7
    }
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
    sort () {
      this.items.sort((a, b) => {
        return a - b
      })
    }
  }

}
</script>

<style scoped>
    /* #region demo1*/
    .list-item {
        display: inline-block;
        margin-right: 10px;
        transition: all 1s;
    }

    .list-leave-active {
        /*transition: all 1s;*/
        position: absolute;
    }

    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
    /* #end region*/

    /* #region demo2*/
    /*demo1 未添加xxx-move 实现了一样的效果*/
    .flip-list-move {
        transition: transform 1s;
    }
    .flip-list-leave-active{
        position: absolute;
    }
    .flip-list-leave-to {
        opacity: 0;
    }
    li{
        /*display: inline-block;*/
    }
    /* #end region*/
</style>
