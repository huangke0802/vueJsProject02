<template>
  <div :title="hello">
    <p v-css="{color : 'red',background:'blue'}"> hello</p>
  </div>
</template>

<script>
//导入模块
import Vue from "vue";
import comA from "./components/a";

export default {
  //注册模块
  components: {
    comA,
  },

  directives:{ //局部的指令
  "css": {
    inserted (el, binding ){
      console.log(binding)
      let styleObj = binding.value;
      let arr=[];
      for(let key in styleObj){
        arr.push(key + ":" + styleObj[key]);
      }
      arr = arr.join(";");
      el.style.cssText = arr;

    }
  }
  },

  data() {
    return {
      hello : "hello",
      aa : "red"
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
