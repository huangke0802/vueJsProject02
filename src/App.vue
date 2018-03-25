<template>
  <div :title="hello">
<!--     <p :is="temp-a"></p>
    <temp-a :my-num="num" :myName="myName">
      <p>我是通过slot插入进来的</p>
      <p slot="slot-header">我是插槽slot插入的header</p>
      <p slot="slot-footer">我是插槽slot插入的footer</p>
    </temp-a> -->

    <!-- css过度 -->
    <button @click="isShow = !isShow">控制显示</button>
    <transition name="tranx">
     <h1 v-show="isShow">看不到我的把</h1>
    </transition>
  </div>
</template>

<script>
//导入模块
import comA from "./components/a";
import vue from "vue";
export default {
  //注册模块
  components: {
    tempA: comA,
  },
  data() {
    return {
      hello : "hello",
      num: 689,
      myName : "黄克",
      isShow : true
    };
  },
  //数据监听
  watch : {
  },
  //计算属性
  computed : {
  },
  methods: {
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.isShow-enter,.isShow-leave-active{
  opacity: 0;
}

.isShow-enter-active,.isShow-leave-active{
  transition: all 2s ease-in-out;
}

.tranx-enter{
  transform: translateX(100px);
  opacity: 0;
}

.tranx-leave-active{
  transform : translateX(-300px);
  opacity: 0;
}

.tranx-enter-active,.tranx-leave-active{
  transition: all 1s ease-in-out;
}

</style>
