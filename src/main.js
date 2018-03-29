// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入插件
import VueRouter from './router'
//注册插件
Vue.use(VueRouter)
//实例化自己
let router = new VueRouter();


new Vue({
  el: '#app',
  render: h => h(App)
})

//全局的自定义指令  调用时使用 v-css
/* Vue.directive("css", {
  inserted (el, binding ){
    console.log(binding)
    let styleObj = binding.value;
    let arr=[];
    for(let key in styleObj){
      arr.push(key + ":" + styleObj[key]);
    }
    arr = arr.join(";");
    el.style.cssText = arr;

  },
  bind(el, bind){
    console.log("bind");
  }
}) */