<template>
    <div id="demo">
        <button v-on:click="show = !show">
            Toggle
        </button>
        <!-- CSS 过渡 -->
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
        <!-- CSS 动画 -->
        <transition name="bounce">
            <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
        </transition>
        <!-- 自定义样式名 配合Animate.css使用-->
        <transition
                appear
                name="custom-classes-transition"
                enter-active-class="animated rollIn"
                leave-active-class="animated rollOut"
        >
            <h1 v-if="show">hello appear 选项初次渲染的动画</h1>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'Animate',
  data () {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
    @import '../assets/Animate.css';
    /* 过渡 */
    .fade-enter-active{
        transition: all 0.3s ease;
    }
    .fade-leave-active{
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateX(10px);
    }
    /* 动画 */
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
