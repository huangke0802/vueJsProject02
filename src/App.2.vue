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
    <transition name="tranx" mode="out-in">
   <!--   <h1 v-show="isShow">看不到我的把</h1> -->
    <!--  <h2 v-if="isShow">我是v-if</h2> -->
    <!--  <div :is="tempType"></div> -->


    <p v-if="isShow" key="1" >I am ishow true “相同标签要加个key区分否则不会有过度”</p>
    <i v-else key="2">I am is no show “不同标签不需要加key”</i>
    </transition>
    <button @click="tempChange">动态组件切换</button>
    <!-- js 过度 -->

 <!--    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:enter-cancelled="enterCancelled"

      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
      v-on:leave-cancelled="leaveCancelled"
    >
    </transition> -->
  <div class="transWrap">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false"
    >
      <p class="transMain" v-if="isSee">我是js控制的过度效果</p>
    </transition>
    <button @click="isSee = !isSee">js控制过度</button>
  </div>

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
    comA,
    comB
  },
  data() {
    return {
      hello : "hello",
      num: 689,
      myName : "黄克",
      isShow : true,
      tempType : "com-a",
      isSee : true
    };
  },
  //数据监听
  watch : {
  },
  //计算属性
  computed : {
  },
  methods: {
    tempChange(){
      if(this.tempType == "com-a"){
       this.tempType = "com-b";
      }else{
        this.tempType = "com-a";
      }
    },

    beforeEnter(el){
      $(el).css({
        opacity : 0,
        left : "-500px"
      })
    },

    enter(el, done){
      $(el).animate({
        opacity : 1,
        left : 0
      },1500,done)
    },

    leave(el, done){
      $(el).animate({
        opacity : 0,
        left : "500px"
      }, 1500, done)
    }

  }
};
</script>
/**
  scoped：表示只适用于当前文件，没有加scoped则对全局样式起效
 */
<style scoped>
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

.transWrap{
  position: relative;
  margin-left: 600px;
}

.transWrap>.transMain{
  position: absolute;
  left: 0;
  top: 0;
}

</style>
/*
  接受动画效果的方法有，v-show，v-if，:is（动态组件）
 */
